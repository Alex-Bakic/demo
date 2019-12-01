(defproject demo "0.0.1"

  :license {:name "Eclipse Public License 2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}

  :url "https://github.com/Alex-Bakic/demo"

  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.439"]
                 [reagent "0.8.1"]
                 [re-frame "0.10.6"]

                 ;; might not need this for a demo, but we'll see how we go
                 [camel-snake-kebab "0.4.0"]

                 [cljs-ajax "0.7.3" :exclusions [com.cognitect/transit-clj]]]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel  "0.5.17"]
            [lein-sass "0.4.0"]]

  :sass {:src              "resources/styles/"
         :output-directory "resources/public/css"}

  :min-lein-version "2.9.1"

  :profiles {:dev  {:dependencies [[binaryage/devtools "0.9.9"]
                                   [nrepl "0.6.0"]
                                   [cider/piggieback "0.4.0"]
                                   [figwheel-sidecar "0.5.18"]
                                   [javax.servlet/servlet-api "2.5"]
                                   [org.clojure/test.check "0.9.0"]
                                   [day8.re-frame/re-frame-10x "0.3.7"]]
                    :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}
                    :cljsbuild {:builds {:client {:compiler {:asset-path           "js"
                                                             :optimizations        :none
                                                             :source-map           true
                                                             :source-map-timestamp true
                                                             :main                 "demo.core"
                                                             :closure-defines {"re_frame.trace.trace_enabled_QMARK_" true}
                                                             :preloads [devtools.preload day8.re-frame-10x.preload]}
                                                  :figwheel {:on-jsload "demo.core/init"}}}}}
             :prod {:cljsbuild
                    {:builds {:client {:jar true
                                       :compiler {:optimizations :advanced
                                                  :elide-asserts true
                                                  :pretty-print  false}}}}}}

  :figwheel {:server-port 3449
             :css-dirs ["resources/public/css"]}

  :clean-targets ^{:protect false} ["resources/public/js" "target"]

  :cljsbuild {:builds {:client {:source-paths ["src"]
                                :compiler     {:output-dir "resources/public/js"
                                               :output-to "resources/public/js/client.js"}}}}

)
