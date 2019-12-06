(ns demo.core
  (:require [demo.components.jobs.views :refer [jobsboard]]
            [demo.components.navbar :refer [navbar]]
            [re-frame.core :as rf]
            [reagent.core :as r]))

(enable-console-print!)

(defn main-panel
  []
  [:div
   [navbar]
   [jobsboard]])


(defn ^:export init
  []
  ;; (rf/dispatch-sync [:initialise])
  (r/render [main-panel] (.getElementById js/document "app")))





