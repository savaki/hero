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

; our history of requests
(def requests-state (atom []))

; holds references to the pubnub singleton
(def pubnub-state (atom nil))

; ------------------------------------------------------------------------
; utility methods

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

(defn home-view-empty []
  [:div.starter-template [:h1 "The world is full of magical things"]
   [:h1 "patiently waiting for our wits to grow sharper."]
   [:h3 "... waiting for our Hero to arrive"]])

(defn home-view-request-content [request]
  (let [request-type (get request "request-type")]
    (cond (= request-type "new-report") "A Salesforce subscriber needs help creating a new report."
      (= request-type "new-dashboard") "A Salesforce subscriber needs help creating a new dashboard."
      :else "Not Yet Implemented")))

(defn home-view-request [request]
  (println request)
  [:div.hero-request {:class "bs-callout bs-callout-info"}
   [:span (home-view-request-content request)]
   [:input {:type "button"
            :class "btn btn-primary"
            :on-click #(ajax/POST)
            :value "Provide Help"}]])

(defn home-view-requests [requests]
  (println "rendering home-view-requests" requests)
  [:div (for [request requests]
          [home-view-request request])])

(defn home-view [requests]
  (if (empty? requests)
    [home-view-empty]
    [home-view-requests requests]))

; ------------------------------------------------------------------------

(defn app-view []
  [:div.hero-app [home-view @requests-state]])

(defn update-requests []
  (println "updating requests")
  (ajax/GET "/api/requests/open"
    {:handler (fn [val] (reset! requests-state val))}))

(defn update-requests-forever []
  (update-requests)
  (js/setTimeout #(update-requests-forever) 5000))

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
  (update-requests-forever))


(def app-view-with-callback
  (with-meta app-view
    {:component-did-mount #(app-boot)}))

(reagent/render-component [app-view-with-callback] (.getElementById js/document "app"))

