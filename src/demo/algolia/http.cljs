(ns demo.algolia.http
  (:require [ajax.core :refer [POST]]
            [ajax.json :as json]
            [demo.algolia.db :refer [url credentials]]
            [demo.events :as events]
            [re-frame.core :refer [dispatch]]))

;; assuming the request is successful , but we'll focus on the ui for now...
(defn handler
  [response]
  (dispatch [::events/load-jobs (:hits response)]))

;; using ajax.core , ajax.json for this...
(defn make-request!
  [query]
  ;; credentials is in the form : {"X-Algolia-API-Key" "api-key" "X-Algolia-Application-Id" "app-id"}
  (POST url {:headers credentials
             :handler handler
             ;; POST puts param data in body, so we can specify :body directly
             :body (js/JSON.stringify (clj->js {:params (str "query=" query)}))
             :response-format (json/json-response-format {:keywords? true})}))
