(ns main.core
  (:require [reagent.core :as reagent :refer [atom]]
            [ajax.core :as ajax :refer [POST]]))

(enable-console-print!)

; ------------------------------------------------------------------------

(def user-id (.-Id js/Hero))

(def keys-state (atom {:pubnub-publish-key (.-PubNubPublishKey js/Hero)
                       :pubnub-subscribe-key (.-PubNubPublishKey js/Hero)}))

(def status-state (atom {}))

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

(def requests-state (atom []))

(def pubnub-state (atom nil))

; ------------------------------------------------------------------------

(defn log [& more]
  (.apply (.-log js/console) js/console
    (into-array (map #(if (satisfies? cljs.core.ISeqable %)
                        (pr-str %)
                        %)
                  more))))

; ------------------------------------------------------------------------

(defn pubnub-send-request [message]
  (.publish @pubnub-state (clj->js {:channel "requests",
                                    :message {"text" message}})))

(defn pubnub-send-message [recipient message]
  (.publish @pubnub-state (clj->js {:channel recipient,
                                    :message {"text" message}})))

(defn pubnub-receive-request [message]
  (log "receiving request =>" message))

(defn pubnub-receive-message [message]
  (log "receiving message =>" message))

; ------------------------------------------------------------------------

; hard coding logic here where a hero page is only allowed to be in two
; states with regards to classes, 'hero-page' and 'hero-page hero-active'
(defn deactivate-page [id]
  (log "deactivating page" id)
  (let [element (.getElementById js/document id)]
    (set! (.-className element) "hero-page")))

(defn activate-page [id]
  (doseq [page-id @page-ids] (deactivate-page page-id))
  (let [element (.getElementById js/document id)]
    (log "activating page" id)
    (set! (.-className element) "hero-page hero-active")
    (js/Velocity element "transition.slideRightBigIn" 400)))

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
  [:div#hero-task-feedback.hero-page "I hold feedback"])

; ------------------------------------------------------------------------

(defn task-detail-view []
  [:div#hero-task-detail.hero-page [task-item "new-report"]
   [partner-item]
   [:div "and more goodness"]
   [:a {:on-click #(activate-page "hero-task-feedback")} "lastly, give feedback"]])

; ------------------------------------------------------------------------

(defn task-match-view []
  [:div#hero-task-match.hero-page [task-item "new-report"]
   [partner-item]
   [:a {:on-click #(activate-page "hero-task-detail")} "accept the match"]])

; ------------------------------------------------------------------------

(defn task-search-view []
  [:div#hero-task-search.hero-page [task-item "new-report"]
   [:a {:on-click #(activate-page "hero-task-match")} "assume match"]])

; ------------------------------------------------------------------------

(defn task-select-item [task-type]
  [:a.task-select-item {:on-click #(activate-page "hero-task-search")}
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
  [:div#hero-task-select.hero-page [hero-header-view "Request Item" noop noop]
   (for [task-type @task-types] [task-select-item task-type])])

; ------------------------------------------------------------------------
; newbie section

(defn request-button-view []
  [:div.hero-request-button {:on-click #(activate-page "hero-task-select")} "Get Started"])

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
  [:div#hero-home.hero-page {:class "hero-active"} [home-header-view]
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
  (log "booting cljs app")
  (reset! pubnub-state (.init js/PUBNUB (clj->js {:publish_key (get-in keys-state :pubnub-publish-key)
                                                  :subscribe_key (get-in keys-state :pubnub-subscribe-key)
                                                  :ssl true})))
  (.subscribe @pubnub-state (clj->js {:channel "requests",
                                      :connect #(log "Connected to requests channel via TLS")
                                      :message (fn [m] (pubnub-receive-request m))}))
  (.subscribe @pubnub-state (clj->js {:channel user-id,
                                      :connect #(log "Connected to private channel," user-id ", via TLS")
                                      :message (fn [m] (pubnub-receive-message m))}))
  (ajax/GET "https://hero-master-herokuapp-com.global.ssl.fastly.net/check/cors"
    {:handler (fn [status] (reset! status-state status))}))

(def app-view-with-callback
  (with-meta app-view
    {:component-did-mount #(app-boot)}))

(reagent/render-component [app-view-with-callback] (.getElementById js/document "app"))

