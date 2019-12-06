// Compiled by ClojureScript 1.10.439 {}
goog.provide('demo.events');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("demo.events","load-jobs","demo.events/load-jobs",-1924839986),(function (p__34260,p__34261){
var map__34262 = p__34260;
var map__34262__$1 = (((((!((map__34262 == null))))?(((((map__34262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34262):map__34262);
var db = cljs.core.get.call(null,map__34262__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34263 = p__34261;
var _ = cljs.core.nth.call(null,vec__34263,(0),null);
var jobs = cljs.core.nth.call(null,vec__34263,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("demo","jobs","demo/jobs",-308429363),jobs)], null);
}));

//# sourceMappingURL=events.js.map?rel=1575504744281
