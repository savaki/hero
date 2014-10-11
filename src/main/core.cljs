(ns main.core
  (:require [reagent.core :as reagent :refer [atom]]
            [ajax.core :as ajax :refer [POST]]))

(enable-console-print!)

; ------------------------------------------------------------------------

(def status-state (atom {}))

; ------------------------------------------------------------------------

(defn activate-page [id]
  (let [element (.getElementById js/document id)]
    (println "activating page," id)
    (set! (.-className element) (str (.-className element) " hero-active"))
    (js/Velocity element "transition.slideRightBigIn" 250)))

; ------------------------------------------------------------------------

(defn task-match-view []
  [:div "I will be the work selection page"])

; ------------------------------------------------------------------------

(defn task-search-view []
  [:div "I will be the work selection page"])

; ------------------------------------------------------------------------

(defn task-select-view []
  [:div "I will be the work selection page"])

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
  [:div.hero-home
   [home-header-view]
   [home-feed-view]
   [status-view]])

(def home-view-with-callback
  (with-meta home-view
    {:component-did-mount #(ajax/GET "https://hero-master-herokuapp-com.global.ssl.fastly.net/check/cors"
                             {:handler (fn [status] (reset! status-state status))})}))

(reagent/render-component [home-view-with-callback] (.getElementById js/document "app"))

; ------------------------------------------------------------------------

(defn request-button-view []
  [:div.hero-new-request {:class "sg-icon-art sg-icn--fnt center tc icon-utility-add"} "I am the new request"])

(reagent/render-component [request-button-view] (.getElementById js/document "request-button"))

; ------------------------------------------------------------------------

(defn app-view []
  [:div [:div.title [:h1 "Hello World"]]
   [:p#sample.hero-page "this is a page"]
   [:input {:type "button"
            :on-click #(activate-page "sample")
            :value "click me"}]])



