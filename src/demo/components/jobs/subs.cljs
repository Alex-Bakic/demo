(ns demo.components.jobs.subs
  (:require [re-frame.core :refer [reg-sub subscribe]]))

(reg-sub
  ::jobs
  (fn [db _]
    (:demo/jobs db)))

