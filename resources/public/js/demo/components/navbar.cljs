(ns demo.components.navbar
  (:require [re-frame.core :refer [dispatch]]
            [demo.algolia.http :refer [make-request!]]))

(defn get-value
  [id]
  (.-value (.getElementById js/document id)))

(defn navbar--logo
  []
  [:div.navbar-brand
   [:div {:class "navbar-item"
          :href "https://www.works-hub.com"}
    [:img {:src "images/workshub-logo.png" :width 30 :height 30 :alt "WorksHub logo"}]]
   [:div
    [:a {:class "navbar--logo--container"
         :href "https://www.works-hub.com"}
     [:div.navbar--logo--title
      [:span.title--bold "WORKS"] "HUB"]]]])

(defn navbar--search
  []
  [:div.navbar-center
   [:div.navbar-item
    [:input {:type "text"
             :placeholder "Search for jobs..."
             :class "search"
             :id "search--bar"
             :auto-complete "off"
             :name "search"}]
    [:button {:class "search--button"
              :on-click #(make-request! (get-value "search--bar"))}
     "Go"]]])

(defn navbar
  []
  [:nav {:class "navbar" :role "navigation" :aria-label "main navigation"}
   ;; nav is for setup and initial positioning, wrapper is for alignment of the surrounding items
   [navbar--logo]
   [:div
    [navbar--search]]])


