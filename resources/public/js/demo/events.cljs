(ns demo.events
  (:require [re-frame.core :refer [reg-event-fx]]))

(reg-event-fx
 ::load-jobs
 (fn [{db :db} [_ jobs]]
   {:db (assoc db :demo/jobs jobs)}))


