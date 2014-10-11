(ns main.core
  (:require [reagent.core :as reagent :refer [atom]]
            [ajax.core :as ajax :refer [POST]]))

(enable-console-print!)

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

(defn home-view []
  [:div "I will be the home page"])

; ------------------------------------------------------------------------

(defn app-view []
  [:div [:div.title [:h1 "Hello World"]]
   [:p#sample.hero-page "this is a page"]
   [:input {:type "button"
            :on-click #(activate-page "sample")
            :value "click me"}]])

(reagent/render-component [app-view] (.getElementById js/document "app"))


