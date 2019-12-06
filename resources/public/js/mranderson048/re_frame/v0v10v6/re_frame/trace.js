// Compiled by ClojureScript 1.10.439 {}
goog.provide('mranderson048.re_frame.v0v10v6.re_frame.trace');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.loggers');
goog.require('goog.functions');
mranderson048.re_frame.v0v10v6.re_frame.trace.id = cljs.core.atom.call(null,(0));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = null;
mranderson048.re_frame.v0v10v6.re_frame.trace.reset_tracing_BANG_ = (function mranderson048$re_frame$v0v10v6$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("mranderson048.re_frame.v0v10v6.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_ = (function mranderson048$re_frame$v0v10v6$re_frame$trace$is_trace_enabled_QMARK_(){
return mranderson048.re_frame.v0v10v6.re_frame.trace.trace_enabled_QMARK_;
});
mranderson048.re_frame.v0v10v6.re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.re_frame !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6 !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6.re_frame !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6.re_frame.trace !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6.re_frame.trace.traces !== 'undefined')){
} else {
mranderson048.re_frame.v0v10v6.re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.re_frame !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6 !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6.re_frame !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6.re_frame.trace !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6.re_frame.trace.next_delivery !== 'undefined')){
} else {
mranderson048.re_frame.v0v10v6.re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
mranderson048.re_frame.v0v10v6.re_frame.trace.register_trace_cb = (function mranderson048$re_frame$v0v10v6$re_frame$trace$register_trace_cb(key,f){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation.");
}
});
mranderson048.re_frame.v0v10v6.re_frame.trace.remove_trace_cb = (function mranderson048$re_frame$v0v10v6$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
mranderson048.re_frame.v0v10v6.re_frame.trace.next_id = (function mranderson048$re_frame$v0v10v6$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.id,cljs.core.inc);
});
mranderson048.re_frame.v0v10v6.re_frame.trace.start_trace = (function mranderson048$re_frame$v0v10v6$re_frame$trace$start_trace(p__42521){
var map__42522 = p__42521;
var map__42522__$1 = (((((!((map__42522 == null))))?(((((map__42522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42522):map__42522);
var operation = cljs.core.get.call(null,map__42522__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__42522__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__42522__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__42522__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),mranderson048.re_frame.v0v10v6.re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4047__auto__ = child_of;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),mranderson048.re_frame.v0v10v6.re_frame.interop.now.call(null)], null);
});
mranderson048.re_frame.v0v10v6.re_frame.trace.debounce_time = (50);
mranderson048.re_frame.v0v10v6.re_frame.trace.debounce = (function mranderson048$re_frame$v0v10v6$re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
mranderson048.re_frame.v0v10v6.re_frame.trace.schedule_debounce = mranderson048.re_frame.v0v10v6.re_frame.trace.debounce.call(null,(function mranderson048$re_frame$v0v10v6$re_frame$trace$tracing_cb_debounced(){
var seq__42524_42536 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.trace_cbs));
var chunk__42525_42537 = null;
var count__42526_42538 = (0);
var i__42527_42539 = (0);
while(true){
if((i__42527_42539 < count__42526_42538)){
var vec__42528_42540 = cljs.core._nth.call(null,chunk__42525_42537,i__42527_42539);
var k_42541 = cljs.core.nth.call(null,vec__42528_42540,(0),null);
var cb_42542 = cljs.core.nth.call(null,vec__42528_42540,(1),null);
try{cb_42542.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.traces));
}catch (e42531){var e_42543 = e42531;
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_42541,"while storing",cljs.core.deref.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.traces),e_42543);
}

var G__42544 = seq__42524_42536;
var G__42545 = chunk__42525_42537;
var G__42546 = count__42526_42538;
var G__42547 = (i__42527_42539 + (1));
seq__42524_42536 = G__42544;
chunk__42525_42537 = G__42545;
count__42526_42538 = G__42546;
i__42527_42539 = G__42547;
continue;
} else {
var temp__5720__auto___42548 = cljs.core.seq.call(null,seq__42524_42536);
if(temp__5720__auto___42548){
var seq__42524_42549__$1 = temp__5720__auto___42548;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42524_42549__$1)){
var c__4461__auto___42550 = cljs.core.chunk_first.call(null,seq__42524_42549__$1);
var G__42551 = cljs.core.chunk_rest.call(null,seq__42524_42549__$1);
var G__42552 = c__4461__auto___42550;
var G__42553 = cljs.core.count.call(null,c__4461__auto___42550);
var G__42554 = (0);
seq__42524_42536 = G__42551;
chunk__42525_42537 = G__42552;
count__42526_42538 = G__42553;
i__42527_42539 = G__42554;
continue;
} else {
var vec__42532_42555 = cljs.core.first.call(null,seq__42524_42549__$1);
var k_42556 = cljs.core.nth.call(null,vec__42532_42555,(0),null);
var cb_42557 = cljs.core.nth.call(null,vec__42532_42555,(1),null);
try{cb_42557.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.traces));
}catch (e42535){var e_42558 = e42535;
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_42556,"while storing",cljs.core.deref.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.traces),e_42558);
}

var G__42559 = cljs.core.next.call(null,seq__42524_42549__$1);
var G__42560 = null;
var G__42561 = (0);
var G__42562 = (0);
seq__42524_42536 = G__42559;
chunk__42525_42537 = G__42560;
count__42526_42538 = G__42561;
i__42527_42539 = G__42562;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),mranderson048.re_frame.v0v10v6.re_frame.trace.debounce_time);
mranderson048.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_ = (function mranderson048$re_frame$v0v10v6$re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.next_delivery) - (25)) < now)){
mranderson048.re_frame.v0v10v6.re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.next_delivery,(now + mranderson048.re_frame.v0v10v6.re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1575465422462
