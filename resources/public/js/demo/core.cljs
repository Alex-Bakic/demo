(ns demo.core
  (:require [re-frame.core :as rf]
            [reagent.core :as r]))

(enable-console-print!)

(defn main-panel
  []
  [:div
   [:div "hello world"]])

(defn ^:export init
  []
  ;; (rf/dispatch-sync [:initialise])
  (r/render [main-panel] (.getElementById js/document "app")))





