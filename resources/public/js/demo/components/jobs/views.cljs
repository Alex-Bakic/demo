(ns demo.components.jobs.views
  (:require [re-frame.core :refer [reg-event-db reg-event-fx]]
            [demo.subs :refer [<sub]]
            [demo.components.jobs.subs :as job-subs]
            [demo.components.jobs.card :refer [job-card]]))

(defn jobsboard
  []
  (let [jobs (<sub [::job-subs/jobs])]
    [:div.hero
     (when jobs
      (into [:div.hero-body]
            (for [job-block (partition-all 3 jobs)]
              (into [:div.columns]
                    (mapv (fn [job]
                            [:div.column.is-4
                             [job-card job]]) job-block)))))]))
