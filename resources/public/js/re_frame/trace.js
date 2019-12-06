// Compiled by ClojureScript 1.10.439 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__51279){
var map__51280 = p__51279;
var map__51280__$1 = (((((!((map__51280 == null))))?(((((map__51280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51280):map__51280);
var operation = cljs.core.get.call(null,map__51280__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__51280__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__51280__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__51280__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4047__auto__ = child_of;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__51282_51294 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__51283_51295 = null;
var count__51284_51296 = (0);
var i__51285_51297 = (0);
while(true){
if((i__51285_51297 < count__51284_51296)){
var vec__51286_51298 = cljs.core._nth.call(null,chunk__51283_51295,i__51285_51297);
var k_51299 = cljs.core.nth.call(null,vec__51286_51298,(0),null);
var cb_51300 = cljs.core.nth.call(null,vec__51286_51298,(1),null);
try{cb_51300.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e51289){var e_51301 = e51289;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_51299,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_51301);
}

var G__51302 = seq__51282_51294;
var G__51303 = chunk__51283_51295;
var G__51304 = count__51284_51296;
var G__51305 = (i__51285_51297 + (1));
seq__51282_51294 = G__51302;
chunk__51283_51295 = G__51303;
count__51284_51296 = G__51304;
i__51285_51297 = G__51305;
continue;
} else {
var temp__5720__auto___51306 = cljs.core.seq.call(null,seq__51282_51294);
if(temp__5720__auto___51306){
var seq__51282_51307__$1 = temp__5720__auto___51306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51282_51307__$1)){
var c__4461__auto___51308 = cljs.core.chunk_first.call(null,seq__51282_51307__$1);
var G__51309 = cljs.core.chunk_rest.call(null,seq__51282_51307__$1);
var G__51310 = c__4461__auto___51308;
var G__51311 = cljs.core.count.call(null,c__4461__auto___51308);
var G__51312 = (0);
seq__51282_51294 = G__51309;
chunk__51283_51295 = G__51310;
count__51284_51296 = G__51311;
i__51285_51297 = G__51312;
continue;
} else {
var vec__51290_51313 = cljs.core.first.call(null,seq__51282_51307__$1);
var k_51314 = cljs.core.nth.call(null,vec__51290_51313,(0),null);
var cb_51315 = cljs.core.nth.call(null,vec__51290_51313,(1),null);
try{cb_51315.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e51293){var e_51316 = e51293;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_51314,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_51316);
}

var G__51317 = cljs.core.next.call(null,seq__51282_51307__$1);
var G__51318 = null;
var G__51319 = (0);
var G__51320 = (0);
seq__51282_51294 = G__51317;
chunk__51283_51295 = G__51318;
count__51284_51296 = G__51319;
i__51285_51297 = G__51320;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1575465435942
