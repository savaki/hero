(defproject hero "0.1.0-SNAPSHOT"
  :description "Hero"
  :url "https://hero-master-herokuapp-com.global.ssl.fastly.net"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2280"]
                 [reagent "0.4.2"]
                 [cljs-ajax "0.2.6"]]

  :plugins [[lein-environ "0.5.0"]
            [lein-cljsbuild "1.0.3"]]

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :compiler {:optimizations :none
                                   :output-to "../public/provider/dev/app.js"
                                   :output-dir "../public/provider/dev/"
                                   :pretty-print true
                                   :source-map true}}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {:optimizations :advanced
                                   :output-to "../public/provider/js/app.js"
                                   :output-dir "../public/provider/js/"
                                   :pretty-print true}}
                       ]}

  :min-lein-version "2.0.0")
