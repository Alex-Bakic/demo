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
mranderson048.re_frame.v0v10v6.re_frame.trace.start_trace = (function mranderson048$re_frame$v0v10v6$re_frame$trace$start_trace(p__37602){
var map__37603 = p__37602;
var map__37603__$1 = (((((!((map__37603 == null))))?(((((map__37603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37603):map__37603);
var operation = cljs.core.get.call(null,map__37603__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__37603__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__37603__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__37603__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__37605_37617 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.trace_cbs));
var chunk__37606_37618 = null;
var count__37607_37619 = (0);
var i__37608_37620 = (0);
while(true){
if((i__37608_37620 < count__37607_37619)){
var vec__37609_37621 = cljs.core._nth.call(null,chunk__37606_37618,i__37608_37620);
var k_37622 = cljs.core.nth.call(null,vec__37609_37621,(0),null);
var cb_37623 = cljs.core.nth.call(null,vec__37609_37621,(1),null);
try{cb_37623.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.traces));
}catch (e37612){var e_37624 = e37612;
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_37622,"while storing",cljs.core.deref.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.traces),e_37624);
}

var G__37625 = seq__37605_37617;
var G__37626 = chunk__37606_37618;
var G__37627 = count__37607_37619;
var G__37628 = (i__37608_37620 + (1));
seq__37605_37617 = G__37625;
chunk__37606_37618 = G__37626;
count__37607_37619 = G__37627;
i__37608_37620 = G__37628;
continue;
} else {
var temp__5720__auto___37629 = cljs.core.seq.call(null,seq__37605_37617);
if(temp__5720__auto___37629){
var seq__37605_37630__$1 = temp__5720__auto___37629;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37605_37630__$1)){
var c__4461__auto___37631 = cljs.core.chunk_first.call(null,seq__37605_37630__$1);
var G__37632 = cljs.core.chunk_rest.call(null,seq__37605_37630__$1);
var G__37633 = c__4461__auto___37631;
var G__37634 = cljs.core.count.call(null,c__4461__auto___37631);
var G__37635 = (0);
seq__37605_37617 = G__37632;
chunk__37606_37618 = G__37633;
count__37607_37619 = G__37634;
i__37608_37620 = G__37635;
continue;
} else {
var vec__37613_37636 = cljs.core.first.call(null,seq__37605_37630__$1);
var k_37637 = cljs.core.nth.call(null,vec__37613_37636,(0),null);
var cb_37638 = cljs.core.nth.call(null,vec__37613_37636,(1),null);
try{cb_37638.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.traces));
}catch (e37616){var e_37639 = e37616;
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_37637,"while storing",cljs.core.deref.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.traces),e_37639);
}

var G__37640 = cljs.core.next.call(null,seq__37605_37630__$1);
var G__37641 = null;
var G__37642 = (0);
var G__37643 = (0);
seq__37605_37617 = G__37640;
chunk__37606_37618 = G__37641;
count__37607_37619 = G__37642;
i__37608_37620 = G__37643;
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

//# sourceMappingURL=trace.js.map?rel=1575052410325
