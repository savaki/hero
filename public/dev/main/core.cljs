(ns main.core
  (:require [reagent.core :as reagent :refer [atom]]
            [ajax.core :as ajax :refer [POST]]))

(enable-console-print!)

; ------------------------------------------------------------------------

(def user-id (.-Id js/Hero))

(def keys-state (let [publish-key (.-PubNubPublishKey js/Hero)
                      subscribe-key (.-PubNubPublishKey js/Hero)]
                  (println "publish-key is" publish-key)
                  (println "subscribe-key is" subscribe-key)
                  (atom {"pubnub-publish-key" publish-key
                         "pubnub-subscribe-key" subscribe-key})))

; holds status results form cors check
(def status-state (atom {}))

; holds which page we're currently on
(def page-id-state (atom "hero-home"))

(def page-ids (atom ["hero-task-feedback"
                     "hero-task-detail"
                     "hero-task-match"
                     "hero-task-detail"
                     "hero-task-search"
                     "hero-task-select"
                     "hero-home"]))

(def task-types (atom ["Create a New Report"
                       "Find a Screencast"
                       "Need a Question Answered"]))

(def seconds-elapsed (atom 0))

; the current request we're building
; fields: user-id, status, feed, provider
(def current-request-state (atom {"user-id" user-id
                                  "status" nil
                                  "task-type" nil}))

; our history of requests
(def requests-state (atom []))

; holds references to the pubnub singleton
(def pubnub-state (atom nil))

; ------------------------------------------------------------------------
; utility methods

(defn current-request-provider []
  (get @current-request-state "provider"))

(defn page-state-class [page-id]
  (if (= page-id @page-id-state)
    {:class "hero-active"}
    {}))

; ------------------------------------------------------------------------

(defn pubnub-send-request [message]
  (.publish @pubnub-state (clj->js {:channel "requests",
                                    :message {"text" message}})))

(defn pubnub-send-message [recipient message]
  (.publish @pubnub-state (clj->js {:channel recipient,
                                    :message {"text" message}})))

(defn pubnub-receive-request [message]
  (let [image (get-in message ["text" "image"])
        user-id (get-in message ["text" "user-id"])
        name (get-in message ["text" "name"])
        phone (get-in message ["text" "phone"])
        provider {:name name
                  :user-id user-id
                  :image image
                  :phone phone}]
    (println "received provider" provider)
    (swap! current-request-state assoc "status" "offered")
    (swap! current-request-state assoc "provider" provider)))

(defn pubnub-receive-message [message]
  (println "receiving message =>" message))

; ------------------------------------------------------------------------

; hard coding logic here where a hero page is only allowed to be in two
; states with regards to classes, 'hero-page' and 'hero-page hero-active'
(defn deactivate-page [id]
  (println "deactivating page" id)
  (let [element (.getElementById js/document id)]
    (set! (.-className element) "hero-page")))

(defn activate-page [id]
  (doseq [page-id @page-ids] (deactivate-page page-id))
  (reset! seconds-elapsed 0)
  (let [element (.getElementById js/document id)]
    (println "activating page" id)
    (js/setTimeout #(reset! page-id-state id), 500)
    (set! (.-className element) "hero-page hero-active")
    (js/Velocity element "transition.slideRightBigIn" 400)))


(defn cancel-to-home []
  [:div.hero-cancel {:on-click #(activate-page "hero-home")} "Cancel"])

(defn back-to-home []
  [:div.hero-cancel {:on-click #(activate-page "hero-home")} "Back"])

; ------------------------------------------------------------------------
; reusable display elements

(defn home-header-view []
  [:div.hero-header-home [:div.hero-avatar {:class "more"} ""]
   [:div.hero-title {:class "clearfix"}
    [:div.hero-app-name "Salesforce Hero"]
    [:div.hero-tagline "Get Things Done"]]])

(defn hero-header-view {:class "clearfix"} [title left-component right-component]
  [:div.hero-header [:div.header-header-left [left-component]]
   [:div.header-header-right [right-component]]
   [:div.header-header-title [:h3 title]]])

(defn task-item [task-type]
  [:div.task-item [:div.task-image]
   [:div.task-name task-type]])

(defn partner-item [partner-item]
  [:div.partner-item "I will be the partner"])

(defn noop []
  [:span "no-op"])

(defn blank []
  [:span ""])

; ------------------------------------------------------------------------

(defn task-feedback-view []
  [:div#hero-task-feedback.hero-page (page-state-class "hero-task-feedback")
   [hero-header-view "Request Item" cancel-to-home blank]
   [:div "I hold feedback"]])

; ------------------------------------------------------------------------

(defn task-detail-view []
  [:div#hero-task-detail.hero-page (page-state-class "hero-task-detail")
   [hero-header-view "Details" cancel-to-home blank]
   [task-item "new-report"]
   [partner-item]
   [:div "and more goodness"]
   [:a {:on-click #(activate-page "hero-task-feedback")} "lastly, give feedback"]])

; ------------------------------------------------------------------------

(defn task-match-view []
  [:div#hero-task-match.hero-page (page-state-class "hero-task-match")
   [hero-header-view "Request Item" cancel-to-home blank]
   [task-item "new-report"]
   [partner-item]
   [:a {:on-click #(activate-page "hero-task-detail")} "accept the match"]])

; ------------------------------------------------------------------------

(defn clear-current-request! []
  (swap! current-request-state assoc "provider" nil)
  (swap! current-request-state assoc "task-type" nil)
  (swap! current-request-state assoc "status" nil))

(defn task-search-find-provider-action []
  (swap! current-request-state assoc "status" "submitted")
  (reset! seconds-elapsed 0)
  (println "finding a provider" @current-request-state)
  (ajax/POST "/api/requests"
    {:params @current-request-state
     :format :json
     :handler (fn [result] (println "received" result)
                (reset! current-request-state result)
                (ajax/GET "/api/requests"
                  {:handler (fn [entries] (reset! requests-state entries))}))}))

(defn task-search-find-provider []
  [:div.hero-find-provider [:div.hero-button {:type "button"
                                              :on-click #(task-search-find-provider-action)} "Find Provider"]])

(defn task-search-show-provider [provider]
  [:div.hero-show-provider [:div.hero-button {:type "button"} "Find Provider"]])

(defn task-search-contents []
  (let [provider (current-request-provider)]
    [:div.task-search-contents [task-search-find-provider]]))

(defn task-search-view-find []
  [:div [:h2.select-task (get @current-request-state "request-type")]
   [:p.select-task "Find a member in the Salesforce Community who can help right now."]
   [:br]
   [task-search-contents]
   [:br]
   [:br]
   [:p.select-task "Finding a provider is simple and easy."]
   [:p.select-task "Talk with them about your project to make sure they're right for you."]])

(defn no-provider-view []
  [:div [:h2.select-task "Sorry, looks like there weren't any providers available at this time."]])

(defn not-looking-good []
  [:div [:h2.time-remaining-update "Hmmm."]
   [:h2.time-remaining-update "Not looking good ..."]])

(defn keep-your-fingers-crossed []
  [:div [:h2.time-remaining-update "Fingers crossed."]])

(defn countdown []
  (swap! seconds-elapsed inc)
  (js/setTimeout #(countdown) 1000))

(defn task-searching-for-provider []
  (countdown)
  (fn []
    (let [time-remaining (- 60 @seconds-elapsed)]
      [:div [:h2.select-task "Searching for a provider ..."]
       (cond (<= time-remaining 0) [no-provider-view]
         (and (< time-remaining 58) (> time-remaining 55)) [keep-your-fingers-crossed]
         (and (< time-remaining 12) (> time-remaining 5)) [not-looking-good]
         :else [:div.time-remaining time-remaining])])))

(defn task-search-provider-offered []
  (let [provider (current-request-provider)
        name (get provider :name)]
    (println provider)
    [:div [:h2.select-task "Found a Community Member"]
     [:p.select-task (str name "is standing by, ready to help.  Give me a call and let him know what you'd like.")]
     [:div.provider-container {:class "clearfix"} [:div.provider-image-container [:img.provider-image {:src (get provider :image)}]]
      [:div.provider-contact-info [:div.provider-name (get provider :name)]
       [:a.provider-phone {:href (str "tel:" (get provider :phone))} "Call"]]]]))

(defn task-search-view []
  [:div#hero-task-search.hero-page (page-state-class "hero-task-search")
   (println "provider is" (current-request-provider))
   (println "empty? provider is" (empty? (current-request-provider)))
   [hero-header-view "Request" back-to-home blank]
   (cond (= (get @current-request-state "status") "submitted") [:div [task-searching-for-provider]]
     (empty? (get @current-request-state "provider")) [task-search-view-find]
     :else [task-search-provider-offered])])

;   [:a {:on-click #(activate-page "hero-task-match")} "assume match"]])

; ------------------------------------------------------------------------

(defn select-task-type [request-type]
  (println "selected task type, " request-type)
  (js/setTimeout #(swap! current-request-state assoc "request-type" request-type))
  (activate-page "hero-task-search"))

(defn task-select-item [task-type]
  [:a.task-select-item {:on-click #(select-task-type task-type)}
   [task-item task-type]])

(defn chat-input []
  (let [val (atom "")]
    (fn []
      [:div [:input {:type "text"
                     :on-change #(reset! val (-> % .-target .-value))}]
       [:input {:type "button"
                :value "Send"
                :on-click #(pubnub-send-request @val)}]])))

(defn task-select-view []
  [:div#hero-task-select.hero-page (page-state-class "hero-task-select")
   [hero-header-view "Select" cancel-to-home blank]
   [:h2.select-task "I Want To ..."]
   (for [task-type @task-types] [task-select-item task-type])])

; ------------------------------------------------------------------------
; newbie section

(defn request-button-view []
  [:div.hero-button {:on-click #(activate-page "hero-task-select")} "Get Started"])

(defn home-feed-first-time []
  [:div.newbie [:h1 "Work Smarter"]

   [:h2 "Get Things Done."]
   [:p "Find the help you need when you need it.  Right from your fingertips."]

   [:br]
   [:h2 "Safe and Secure"]
   [:p "Salesforce Hero keeps your data safe.  Providers only have access to the meta data, never the data itself."]

   [:br]
   [:h2 "Democratizes Salesforce"]
   [:p "Putting valuable features of Salesforce in the reach of everyone regardless of training."]

   ;   [:div.newbie-step-container [:div.new-step-item [:p "do this"]]
   ;    [:div.new-step-item "and this"]
   ;    [:div.new-step-item "and you're done"]]
   ;
   ;   [:div.newbie-step-container [:div.new-step-item [:h3 "We Do"]
   ;                                [:ul [:li "Make Reports"]
   ;                                 [:li "Make Dashboards"]
   ;                                 [:li "Teach You How"]]]
   ;    [:div.new-step-item [:h3 "So That You Can"]
   ;     [:ul [:li "Be The Hero"]
   ;      [:li "Accomplish Amazing Things"]
   ;      [:li "Get The Most From Salesforce"]]]]
   ;
   ;   [:h1.why-salesforce-hero "Why Salesforce Hero"]
   ;   [:div.newbie-step-container {:class "clearfix"} [:div.new-step-item [:h3 "Validation #1"]]
   ;    [:div.new-step-item [:h3 "Validation #2"]]
   ;    [:div.new-step-item [:h3 "Validation #3"]]
   ;    [:div.new-step-item [:h3 "Validation #4"]]]
   ;
   ;   [:div "Meet Matt"]
   ;   [:h2 "Ready to Start"]
   ;   [request-button-view]
   ])

(defn home-feed-default-item [request]
  [:div "something or another" (str request)])

(defn home-feed-default [requests]
  [:div (for [request requests]
          [home-feed-default-item request])])

(defn home-feed-view [requests]
  [home-feed-first-time])
;  (if (empty? requests)
;    [home-feed-default requests]))

(defn home-view [requests]
  [:div#hero-home.hero-page (page-state-class "hero-home") [home-header-view]
   [request-button-view]
   [home-feed-view requests]])

; ------------------------------------------------------------------------

(defn app-view []
  [:div.hero-app [home-view @requests-state]
   [task-select-view]
   [task-search-view]
   [task-match-view]
   [task-detail-view]
   [task-feedback-view]])

(defn app-boot []
  (println "initializing pubnub")
  (reset! pubnub-state (.init js/PUBNUB (clj->js {:publish_key (get-in keys-state "pubnub-publish-key")
                                                  :subscribe_key (get-in keys-state "pubnub-subscribe-key")
                                                  :ssl true})))

  (println "subscribing to requests channel")
  (.subscribe @pubnub-state (clj->js {:channel "requests",
                                      :connect #(println "Connected to requests channel via TLS")
                                      :message (fn [m] (pubnub-receive-request (js->clj m)))}))

  (println "subscribing to private channel")
  (.subscribe @pubnub-state (clj->js {:channel user-id,
                                      :connect #(println "Connected to private channel," user-id ", via TLS")
                                      :message (fn [m] (pubnub-receive-message (js->clj m)))}))

  (ajax/GET "/api/requests"
    {:handler (fn [entries] (reset! requests-state entries))}))

(def app-view-with-callback
  (with-meta app-view
    {:component-did-mount #(app-boot)}))

(reagent/render-component [app-view-with-callback] (.getElementById js/document "app"))

