(ns main.core
  (:require [reagent.core :as reagent :refer [atom]]
            [ajax.core :as ajax :refer [POST]]))

(enable-console-print!)

(defn app-view []
  [:div [:div.title [:h1 "Hello World"]]])

(reagent/render-component [app-view] (.getElementById js/document "app"))


