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
  [:div.hero-home-header [:div.hero-avatar {:class "more"} "I'm the picture of the dude"]
   [:div.hero-app-name "Salesforce Hero"]
   [:div.hero-tagline "Empowering Users Everywhere"]])

(defn home-request-button []
  [:div.hero-new-request "I am the new request"])

(defn home-view []
  [:div.hero-home [home-request-button]
   [home-header-view]
   [home-feed-view]])

(def home-view-with-callback
  (with-meta home-view
    {:component-did-mount #(ajax/GET "https://hero-master-herokuapp-com.global.ssl.fastly.net/check/cors"
                             {:handler (fn [status] (reset! status-state status))})}))

; ------------------------------------------------------------------------

(defn app-view []
  [:div [:div.title [:h1 "Hello World"]]
   [:p#sample.hero-page "this is a page"]
   [:input {:type "button"
            :on-click #(activate-page "sample")
            :value "click me"}]])

(reagent/render-component [home-view-with-callback] (.getElementById js/document "app"))


