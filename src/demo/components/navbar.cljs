(ns demo.components.navbar
  (:require [re-frame.core :refer [dispatch]]
            [demo.algolia.http :refer [make-request!]]))

(defn get-value
  [id]
  (.-value (.getElementById js/document id)))

(defn nav
  []
  [:div.navbar-brand
   [:div {:class "navbar-item"
          :href "https://www.works-hub.com"}
    [:img {:src "images/workshub-logo.png" :width 30 :height 30 :alt "WorksHub logo"}]]
   [:div
    [:a {:class "navbar--logo--container"
         :href "https://www.works-hub.com"}
     [:div.navbar--logo--title
      [:span.title--bold "WORKS"] "HUB"]]]
   [:div.navbar-item
    [:div.navbar-search
     [:input {:type "text"
              :placeholder "Search for jobs..."
              :class "search"
              :id "search--bar"
              :auto-complete "off"
              :name "search"}]
     [:button {:class "search--button"
               :on-click #(make-request! (get-value "search--bar"))}
      [:img {:src "images/search.svg" :width 35 :height 35 :alt "search"}]]]]])

(defn navbar
  []
  [:nav {:class "navbar" :role "navigation" :aria-label "main navigation"}
   ;; nav is for setup and initial positioning, wrapper is for alignment of the surrounding items
   [nav]])




