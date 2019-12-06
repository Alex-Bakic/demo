(ns demo.subs
  (:require [re-frame.core :refer [subscribe]]))

(def <sub (comp deref subscribe))
