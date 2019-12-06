(ns demo.algolia.db)

;; the raw keys and data .. *should be environment vars*
(def application-id "MVK698T35T")
(def index "dev_jobs")
(def api-key "26bb8614fa827489a5898602a771e6a7")

(def url (str "https://" application-id "-dsn.algolia.net/1/indexes/dev_jobs/query"))

;; for use within the ajax map, within :headers
(def credentials {"X-Algolia-API-Key" api-key "X-Algolia-Application-Id" application-id})
