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
    (js/Velocity element "transition.slideRightBigIn" 250)))

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

(defn home-feed-view []
  [:div "I'm the feed on the home page"])

(defn home-header-view []
  [:div.hero-home-header [:div.hero-container [:div.hero-avatar {:class "more"} "pic here"]
                          [:div.hero-app-name "Salesforce Hero"]
                          [:div.hero-tagline "The Best Place to Get Things Done"]]])

(defn status-view []
  [:div [:p "the status is " (get @status-state "status")]])

(defn home-view []
  [:div#hero-home.hero-page {:class "hero-active"} [home-header-view]
   [home-feed-view]
   [status-view]])

; ------------------------------------------------------------------------

(defn app-view []
  [:div [home-view]
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

(defn request-button-view []
  [:div.hero-new-request {:on-click #(activate-page "hero-task-select")} "I am the new request"])

(reagent/render-component [request-button-view] (.getElementById js/document "request-button"))

; ------------------------------------------------------------------------

(defn app-view []
  [:div [:div.title [:h1 "Hello World"]]
   [:p#sample.hero-page "this is a page"]
   [:input {:type "button"
            :on-click #(activate-page "sample")
            :value "click me"}]])



