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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__34371){
var map__34372 = p__34371;
var map__34372__$1 = (((((!((map__34372 == null))))?(((((map__34372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34372):map__34372);
var operation = cljs.core.get.call(null,map__34372__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__34372__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__34372__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__34372__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__34374_34386 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__34375_34387 = null;
var count__34376_34388 = (0);
var i__34377_34389 = (0);
while(true){
if((i__34377_34389 < count__34376_34388)){
var vec__34378_34390 = cljs.core._nth.call(null,chunk__34375_34387,i__34377_34389);
var k_34391 = cljs.core.nth.call(null,vec__34378_34390,(0),null);
var cb_34392 = cljs.core.nth.call(null,vec__34378_34390,(1),null);
try{cb_34392.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e34381){var e_34393 = e34381;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_34391,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_34393);
}

var G__34394 = seq__34374_34386;
var G__34395 = chunk__34375_34387;
var G__34396 = count__34376_34388;
var G__34397 = (i__34377_34389 + (1));
seq__34374_34386 = G__34394;
chunk__34375_34387 = G__34395;
count__34376_34388 = G__34396;
i__34377_34389 = G__34397;
continue;
} else {
var temp__5720__auto___34398 = cljs.core.seq.call(null,seq__34374_34386);
if(temp__5720__auto___34398){
var seq__34374_34399__$1 = temp__5720__auto___34398;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34374_34399__$1)){
var c__4461__auto___34400 = cljs.core.chunk_first.call(null,seq__34374_34399__$1);
var G__34401 = cljs.core.chunk_rest.call(null,seq__34374_34399__$1);
var G__34402 = c__4461__auto___34400;
var G__34403 = cljs.core.count.call(null,c__4461__auto___34400);
var G__34404 = (0);
seq__34374_34386 = G__34401;
chunk__34375_34387 = G__34402;
count__34376_34388 = G__34403;
i__34377_34389 = G__34404;
continue;
} else {
var vec__34382_34405 = cljs.core.first.call(null,seq__34374_34399__$1);
var k_34406 = cljs.core.nth.call(null,vec__34382_34405,(0),null);
var cb_34407 = cljs.core.nth.call(null,vec__34382_34405,(1),null);
try{cb_34407.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e34385){var e_34408 = e34385;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_34406,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_34408);
}

var G__34409 = cljs.core.next.call(null,seq__34374_34399__$1);
var G__34410 = null;
var G__34411 = (0);
var G__34412 = (0);
seq__34374_34386 = G__34409;
chunk__34375_34387 = G__34410;
count__34376_34388 = G__34411;
i__34377_34389 = G__34412;
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

//# sourceMappingURL=trace.js.map?rel=1575052111010
