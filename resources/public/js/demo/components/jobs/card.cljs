(ns demo.components.jobs.card)

(defn display-salary-offering
  "only does the basic salaries , gbp , usd"
  [{:keys [min max currency competitive]}]
  (let [symbols {"EUR" "€" "GBP ""£" "USD" "$"}]
    (if competitive
      "competitive"
      (str (symbols currency) min "K - " max "K"))))

(defn company-logo
  [logo]
  [:div.company-logo
    [:img {:src logo :width 48 :height 48}]])

(defn company-perks
  [{:keys [remote role-type sponsorship-offered]}]
  (cond-> [:div.basic-info--perks]
    remote (conj [:div "Remote"])
    (not= role-type "Full time") (conj [:div role-type])
    sponsorship-offered (conj [:div "Sponsorship"])))

(defn basic-info
  [{:keys [title location company remuneration] :as job}]
  [:div.basic-info
   [:div.basic-info--title
    title]
   [:div.basic-info--company-name
    (:name company)]
   [:div.basic-info--location
    (str (:city location) " , " (:country location))]
   [company-perks job]
   [:div.basic-info--salary
    (display-salary-offering remuneration)]])

(defn job-card--header
  [{:keys [title location company remuneration role-type] :as job}]
  [:div.info
   [company-logo (:logo company)]
   [basic-info job]])

(defn job-card--tags
  [tags]
  (into [:ul.tags]
        (map (fn [tag] [:li [:a {:href "#"} tag]]) tags)))

(defn job-card--tagline
  [tagline]
  [:div.tagline tagline])

(defn job-card--buttons
  []
  [:div.buttons
   [:div.button.button--inverted {:href "#"}
    "More Info"]
   [:button.button "1-Click Apply"]])

(defn job-card
  [{:keys [company tagline tags published score user-score applied liked display-salary remuneration]
    :or   {published true}
    :as   job}]
  [:div {:class (str "card card--job " "card-border-color-" (rand-int 5) " i-cur-" (rand-int 5))}
   [job-card--header job]
   [job-card--tags tags]

   [job-card--tagline tagline]
   [job-card--buttons]])
