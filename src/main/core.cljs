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

(def task-types (atom ["new-report"
                       "new-dashboard"
                       "custom-report"
                       "show-me-how"
                       "talk-to-expert"]))

; the current request we're building
; fields: requested-by, status, feed, provider
(def current-request-state (atom {"requested-by" user-id
                                  "status" nil
                                  "task-type" nil}))

; our history of requests
(def requests-state (atom []))

; holds references to the pubnub singleton
(def pubnub-state (atom nil))

; ------------------------------------------------------------------------
; utility methods

(defn current-request-provider []
  (get @current-request-state :provider))

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
  (println "receiving request =>" message))

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
  (let [element (.getElementById js/document id)]
    (println "activating page" id)
    (js/setTimeout #(reset! page-id-state id), 500)
    (set! (.-className element) "hero-page hero-active")
    (js/Velocity element "transition.slideRightBigIn" 400)))


(defn cancel-to-home []
  [:div.hero-cancel {:on-click #(activate-page "hero-home")} "Cancel"])

; ------------------------------------------------------------------------
; reusable display elements

(defn home-header-view []
  [:div.hero-header-home [:div.hero-avatar {:class "more"} "pic here"]
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
   [hero-header-view "Request Item" cancel-to-home blank]
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
  (swap! current-request-state "provider" nil)
  (swap! current-request-state "task-type" nil)
  (swap! current-request-state "status" nil)
  (swap! current-request-state "feed" []))

(defn task-search-find-provider-action []
  (swap! current-request-state assoc "status" "submitted")
  (println "finding a provider" @current-request-state)
  (ajax/POST "/api/requests"
    {:params @current-request-state
     :format :json
     :handler (fn [result] (println result)
                (clear-current-request!)
                (ajax/GET "/api/requests"
                  {:handler (fn [entries] (reset! requests-state entries))}))}))

(defn task-search-find-provider []
  [:div.hero-find-provider [:div.hero-button {:type "button"
                                              :on-click #(task-search-find-provider-action)} "Request Hero"]])

(defn task-search-show-provider [provider]
  [:div.hero-show-provider [:div.hero-button {:type "button"} "Request Hero"]])

(defn task-search-contents []
  (let [provider (current-request-provider)]
    [:div.task-search-contents (if (empty? provider)
                                 [task-search-find-provider]
                                 [task-search-show-provider provider])]))

(defn task-search-view []
  [:div#hero-task-search.hero-page (page-state-class "hero-task-search")
   [hero-header-view "Request Item" cancel-to-home blank]
   [task-item "new-report"]
   [task-search-contents]])
;   [:a {:on-click #(activate-page "hero-task-match")} "assume match"]])

; ------------------------------------------------------------------------

(defn select-task-type [task-type]
  (println "selected task type, " task-type)
  (js/setTimeout #(swap! current-request-state assoc "task-type" task-type))
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
   [hero-header-view "Request Item" cancel-to-home blank]
   (for [task-type @task-types] [task-select-item task-type])])

; ------------------------------------------------------------------------
; newbie section

(defn request-button-view []
  [:div.hero-button {:on-click #(activate-page "hero-task-select")} "Get Started"])

(defn home-feed-first-time []
  [:div.newbie [:h1 "Worker Smarter"]
   [:h2 "Get Things Done."]
   [:h2 "Securely, Reliably, and Quickly."]
   [:p "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis."]

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

(defn home-feed-default []
  [:div "you've been here before"])

(defn home-feed-view [requests]
  (if (empty? requests)
    [home-feed-first-time]
    [home-feed-default]))

(defn home-view [requests]
  [:div#hero-home.hero-page (page-state-class "hero-home") [home-header-view]
   [request-button-view]
   [home-feed-view requests]])

; ------------------------------------------------------------------------

(defn app-view []
  ;  (js/setTimeout #(activate-page "hero-task-select"), 50)
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
                                      :message (fn [m] (pubnub-receive-request m))}))

  (println "subscribing to private channel")
  (.subscribe @pubnub-state (clj->js {:channel user-id,
                                      :connect #(println "Connected to private channel," user-id ", via TLS")
                                      :message (fn [m] (pubnub-receive-message m))}))
  (ajax/GET "https://hero-master-herokuapp-com.global.ssl.fastly.net/check/cors"
    {:handler (fn [status] (reset! status-state status))}))

(def app-view-with-callback
  (with-meta app-view
    {:component-did-mount #(app-boot)}))

(reagent/render-component [app-view-with-callback] (.getElementById js/document "app"))

