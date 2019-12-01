// Compiled by ClojureScript 1.10.439 {}
goog.provide('demo.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
demo.core.main_panel = (function demo$core$main_panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"hello world"], null)], null);
});
demo.core.init = (function demo$core$init(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.core.main_panel], null),document.getElementById("app"));
});
goog.exportSymbol('demo.core.init', demo.core.init);

//# sourceMappingURL=core.js.map?rel=1575201482298
