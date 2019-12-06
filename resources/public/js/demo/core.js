// Compiled by ClojureScript 1.10.439 {}
goog.provide('demo.core');
goog.require('cljs.core');
goog.require('demo.components.jobs.views');
goog.require('demo.components.navbar');
goog.require('re_frame.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
demo.core.main_panel = (function demo$core$main_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.navbar.navbar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.jobs.views.jobsboard], null)], null);
});
demo.core.init = (function demo$core$init(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.core.main_panel], null),document.getElementById("app"));
});
goog.exportSymbol('demo.core.init', demo.core.init);

//# sourceMappingURL=core.js.map?rel=1575656753238
