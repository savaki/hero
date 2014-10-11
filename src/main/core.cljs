(ns main.core
  (:require [reagent.core :as reagent :refer [atom]]
            [ajax.core :as ajax :refer [POST]]))

(enable-console-print!)

; ------------------------------------------------------------------------

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
    (set! (.-className element) "hero-page hero-active")
    (js/Velocity element "transition.slideRightBigIn" 400)))

; ------------------------------------------------------------------------
; reusable display elements

(defn task-item [task-type]
  [:div.task-item [:div.task-image]
   [:div.task-name task-type]])

(defn partner-item [partner-item]
  [:div.partner-item "I will be the partner"])

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

(defn task-select-view []
  [:div#hero-task-select.hero-page (for [task-type @task-types] [task-select-item task-type])])

; ------------------------------------------------------------------------
; newbie section

(defn request-button-view []
  [:div.hero-request-button {:on-click #(activate-page "hero-task-select")} "Get Started"])

(defn home-feed-first-time []
  [:div.newbie [:h1 "Worker Smarter"]
   [:h2 "Get Things Done."]
   [:h2 "Securely, Reliably, and Quickly."]
   [:p "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis."]

   [:div.newbie-step-container [:div.new-step-item [:p "do this"]]
    [:div.new-step-item "and this"]
    [:div.new-step-item "and you're done"]]

   [:div.newbie-step-container [:div.new-step-item [:h3 "We Do"]
                                [:ul [:li "Make Reports"]
                                 [:li "Make Dashboards"]
                                 [:li "Teach You How"]]]
    [:div.new-step-item [:h3 "So That You Can"]
     [:ul [:li "Be The Hero"]
      [:li "Accomplish Amazing Things"]
      [:li "Get The Most From Salesforce"]]]]

   [:h1.why-salesforce-hero "Why Salesforce Hero"]
   [:div.newbie-step-container {:class "clearfix"} [:div.new-step-item [:h3 "Validation #1"]]
    [:div.new-step-item [:h3 "Validation #2"]]
    [:div.new-step-item [:h3 "Validation #3"]]
    [:div.new-step-item [:h3 "Validation #4"]]]

   [:div "Meet Matt"]
   [:h2 "Ready to Start"]
   [request-button-view]
   ])

(defn home-feed-default []
  [:div "you've been here before"])

(defn home-feed-view [requests]
  (if (empty? requests)
    [home-feed-first-time]
    [home-feed-default]))

(defn home-header-view []
  [:div.hero-home-header [:div.hero-container [:div.hero-avatar {:class "more"} "pic here"]
                          [:div.hero-title {:class "clearfix"}
                           [:div.hero-app-name "Salesforce Hero"]
                           [:div.hero-tagline "The Place to Get Things Done"]]]])

(defn home-view [requests]
  [:div#hero-home.hero-page {:class "hero-active"} [home-header-view]
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

(def app-view-with-callback
  (with-meta app-view
    {:component-did-mount #(ajax/GET "https://hero-master-herokuapp-com.global.ssl.fastly.net/check/cors"
                             {:handler (fn [status] (reset! status-state status))})}))

(reagent/render-component [app-view-with-callback] (.getElementById js/document "app"))

; ------------------------------------------------------------------------

;(defn request-button-view []
;  [:div.hero-new-request {:on-click #(activate-page "hero-task-select")} "I am the new request"])
;
;(reagent/render-component [request-button-view] (.getElementById js/document "request-button"))

; ------------------------------------------------------------------------

(defn app-view []
  [:div [:div.title [:h1 "Hello World"]]
   [:p#sample.hero-page "this is a page"]
   [:input {:type "button"
            :on-click #(activate-page "sample")
            :value "click me"}]])



