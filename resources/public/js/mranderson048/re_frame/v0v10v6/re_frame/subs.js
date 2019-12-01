// Compiled by ClojureScript 1.10.439 {}
goog.provide('mranderson048.re_frame.v0v10v6.re_frame.subs');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.loggers');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.utils');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.trace');
mranderson048.re_frame.v0v10v6.re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_(mranderson048.re_frame.v0v10v6.re_frame.registrar.kinds.call(null,mranderson048.re_frame.v0v10v6.re_frame.subs.kind))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v6.re-frame.registrar/kinds kind)"));
}
mranderson048.re_frame.v0v10v6.re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Causes all subscriptions to be removed from the cache.
 *   Does this by:
 *   1. running on-dispose on all cached subscriptions
 *   2. These on-dispose will then do the removal of themselves.
 * 
 *   This is a development time tool. Useful when reloading Figwheel code
 *   after a React exception, because React components won't have been
 *   cleaned up properly. And this, in turn, means the subscriptions within those
 *   components won't have been cleaned up correctly. So this forces the issue.
 */
mranderson048.re_frame.v0v10v6.re_frame.subs.clear_subscription_cache_BANG_ = (function mranderson048$re_frame$v0v10v6$re_frame$subs$clear_subscription_cache_BANG_(){
var seq__39752_39762 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v6.re_frame.subs.query__GT_reaction));
var chunk__39753_39763 = null;
var count__39754_39764 = (0);
var i__39755_39765 = (0);
while(true){
if((i__39755_39765 < count__39754_39764)){
var vec__39756_39766 = cljs.core._nth.call(null,chunk__39753_39763,i__39755_39765);
var k_39767 = cljs.core.nth.call(null,vec__39756_39766,(0),null);
var rxn_39768 = cljs.core.nth.call(null,vec__39756_39766,(1),null);
mranderson048.re_frame.v0v10v6.re_frame.interop.dispose_BANG_.call(null,rxn_39768);


var G__39769 = seq__39752_39762;
var G__39770 = chunk__39753_39763;
var G__39771 = count__39754_39764;
var G__39772 = (i__39755_39765 + (1));
seq__39752_39762 = G__39769;
chunk__39753_39763 = G__39770;
count__39754_39764 = G__39771;
i__39755_39765 = G__39772;
continue;
} else {
var temp__5720__auto___39773 = cljs.core.seq.call(null,seq__39752_39762);
if(temp__5720__auto___39773){
var seq__39752_39774__$1 = temp__5720__auto___39773;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39752_39774__$1)){
var c__4461__auto___39775 = cljs.core.chunk_first.call(null,seq__39752_39774__$1);
var G__39776 = cljs.core.chunk_rest.call(null,seq__39752_39774__$1);
var G__39777 = c__4461__auto___39775;
var G__39778 = cljs.core.count.call(null,c__4461__auto___39775);
var G__39779 = (0);
seq__39752_39762 = G__39776;
chunk__39753_39763 = G__39777;
count__39754_39764 = G__39778;
i__39755_39765 = G__39779;
continue;
} else {
var vec__39759_39780 = cljs.core.first.call(null,seq__39752_39774__$1);
var k_39781 = cljs.core.nth.call(null,vec__39759_39780,(0),null);
var rxn_39782 = cljs.core.nth.call(null,vec__39759_39780,(1),null);
mranderson048.re_frame.v0v10v6.re_frame.interop.dispose_BANG_.call(null,rxn_39782);


var G__39783 = cljs.core.next.call(null,seq__39752_39774__$1);
var G__39784 = null;
var G__39785 = (0);
var G__39786 = (0);
seq__39752_39762 = G__39783;
chunk__39753_39763 = G__39784;
count__39754_39764 = G__39785;
i__39755_39765 = G__39786;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v6.re_frame.subs.query__GT_reaction)))){
return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Subscription cache should be empty after clearing it.");
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
mranderson048.re_frame.v0v10v6.re_frame.subs.clear_all_handlers_BANG_ = (function mranderson048$re_frame$v0v10v6$re_frame$subs$clear_all_handlers_BANG_(){
mranderson048.re_frame.v0v10v6.re_frame.registrar.clear_handlers.call(null,mranderson048.re_frame.v0v10v6.re_frame.subs.kind);

return mranderson048.re_frame.v0v10v6.re_frame.subs.clear_subscription_cache_BANG_.call(null);
});
/**
 * cache the reaction r
 */
mranderson048.re_frame.v0v10v6.re_frame.subs.cache_and_return = (function mranderson048$re_frame$v0v10v6$re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
mranderson048.re_frame.v0v10v6.re_frame.interop.add_on_dispose_BANG_.call(null,r,((function (cache_key){
return (function (){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__39787 = mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__39788 = mranderson048.re_frame.v0v10v6.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v6.re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id.call(null,r)], null)], null));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__39788;

try{try{return cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.subs.query__GT_reaction,((function (_STAR_current_trace_STAR__orig_val__39787,_STAR_current_trace_STAR__temp_val__39788,cache_key){
return (function (query_cache){
if(((cljs.core.contains_QMARK_.call(null,query_cache,cache_key)) && ((r === cljs.core.get.call(null,query_cache,cache_key))))){
return cljs.core.dissoc.call(null,query_cache,cache_key);
} else {
return query_cache;
}
});})(_STAR_current_trace_STAR__orig_val__39787,_STAR_current_trace_STAR__temp_val__39788,cache_key))
);
}finally {if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__37580__auto___39789 = mranderson048.re_frame.v0v10v6.re_frame.interop.now.call(null);
var duration__37581__auto___39790 = (end__37580__auto___39789 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37581__auto___39790,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v6.re_frame.interop.now.call(null)));

mranderson048.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__37580__auto___39789);
} else {
}
}}finally {mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__39787;
}} else {
return cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.subs.query__GT_reaction,((function (cache_key){
return (function (query_cache){
if(((cljs.core.contains_QMARK_.call(null,query_cache,cache_key)) && ((r === cljs.core.get.call(null,query_cache,cache_key))))){
return cljs.core.dissoc.call(null,query_cache,cache_key);
} else {
return query_cache;
}
});})(cache_key))
);
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.subs.query__GT_reaction,((function (cache_key){
return (function (query_cache){
if(mranderson048.re_frame.v0v10v6.re_frame.interop.debug_enabled_QMARK_){
if(cljs.core.contains_QMARK_.call(null,query_cache,cache_key)){
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: Adding a new subscription to the cache while there is an existing subscription in the cache",cache_key);
} else {
}
} else {
}

return cljs.core.assoc.call(null,query_cache,cache_key,r);
});})(cache_key))
);

if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__37582__auto___39791 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__37582__auto___39791;

} else {
}

return r;
});
mranderson048.re_frame.v0v10v6.re_frame.subs.cache_lookup = (function mranderson048$re_frame$v0v10v6$re_frame$subs$cache_lookup(var_args){
var G__39793 = arguments.length;
switch (G__39793) {
case 1:
return mranderson048.re_frame.v0v10v6.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.re_frame.v0v10v6.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v6.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return mranderson048.re_frame.v0v10v6.re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
});

mranderson048.re_frame.v0v10v6.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v6.re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

mranderson048.re_frame.v0v10v6.re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Given a `query`, returns a Reagent `reaction` which, over
 *   time, reactively delivers a stream of values. So in FRP-ish terms,
 *   it returns a Signal.
 * 
 *   To obtain the returned Signal/Stream's current value, it must be `deref`ed.
 * 
 *   `query` is a vector of at least one element. The first element is the
 *   `query-id`, typically a namespaced keyword. The rest of the vector's
 *   elements are optional, additional values which parameterise the query
 *   performed.
 * 
 *   `dynv` is an optional 3rd argument, `which is a vector of further input
 *   signals (atoms, reactions, etc), NOT values. This argument exists for
 *   historical reasons and is borderline deprecated these days.
 * 
 *   Example Usage:
 *   --------------
 * 
 *  (subscribe [:items])
 *  (subscribe [:items "blue" :small])
 *  (subscribe [:items {:colour "blue"  :size :small}])
 * 
 *   Note: for any given call to `subscribe` there must have been a previous call
 *   to `reg-sub`, registering the query handler (function) for the `query-id` given.
 * 
 *   Hint
 *   ----
 * 
 *   When used in a view function BE SURE to `deref` the returned value.
 *   In fact, to avoid any mistakes, some prefer to define:
 * 
 *   (def <sub  (comp deref mranderson048.re-frame.v0v10v6.re-frame.core/subscribe))
 * 
 *   And then, within their views, they call  `(<sub [:items :small])` rather
 *   than using `subscribe` directly.
 * 
 *   De-duplication
 *   --------------
 * 
 *   XXX
 *   
 */
mranderson048.re_frame.v0v10v6.re_frame.subs.subscribe = (function mranderson048$re_frame$v0v10v6$re_frame$subs$subscribe(var_args){
var G__39796 = arguments.length;
switch (G__39796) {
case 1:
return mranderson048.re_frame.v0v10v6.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.re_frame.v0v10v6.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v6.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__39797 = mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__39798 = mranderson048.re_frame.v0v10v6.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v6.re_frame.utils.first_in_vector.call(null,query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query], null)], null));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__39798;

try{try{var temp__5718__auto__ = mranderson048.re_frame.v0v10v6.re_frame.subs.cache_lookup.call(null,query);
if(cljs.core.truth_(temp__5718__auto__)){
var cached = temp__5718__auto__;
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__37582__auto___39802 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__37582__auto___39802;

} else {
}

return cached;
} else {
var query_id = mranderson048.re_frame.v0v10v6.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v6.re_frame.subs.kind,query_id);
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__37582__auto___39803 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__37582__auto___39803;

} else {
}

if((handler_fn == null)){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__37582__auto___39804 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__37582__auto___39804;

} else {
}

return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join(''));
} else {
return mranderson048.re_frame.v0v10v6.re_frame.subs.cache_and_return.call(null,query,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,mranderson048.re_frame.v0v10v6.re_frame.db.app_db,query));
}
}
}finally {if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__37580__auto___39805 = mranderson048.re_frame.v0v10v6.re_frame.interop.now.call(null);
var duration__37581__auto___39806 = (end__37580__auto___39805 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37581__auto___39806,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v6.re_frame.interop.now.call(null)));

mranderson048.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__37580__auto___39805);
} else {
}
}}finally {mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__39797;
}} else {
var temp__5718__auto__ = mranderson048.re_frame.v0v10v6.re_frame.subs.cache_lookup.call(null,query);
if(cljs.core.truth_(temp__5718__auto__)){
var cached = temp__5718__auto__;
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__37582__auto___39807 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__37582__auto___39807;

} else {
}

return cached;
} else {
var query_id = mranderson048.re_frame.v0v10v6.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v6.re_frame.subs.kind,query_id);
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__37582__auto___39808 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__37582__auto___39808;

} else {
}

if((handler_fn == null)){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__37582__auto___39809 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__37582__auto___39809;

} else {
}

return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join(''));
} else {
return mranderson048.re_frame.v0v10v6.re_frame.subs.cache_and_return.call(null,query,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,mranderson048.re_frame.v0v10v6.re_frame.db.app_db,query));
}
}
}
});

mranderson048.re_frame.v0v10v6.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (query,dynv){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__39799 = mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__39800 = mranderson048.re_frame.v0v10v6.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v6.re_frame.utils.first_in_vector.call(null,query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__39800;

try{try{var temp__5718__auto__ = mranderson048.re_frame.v0v10v6.re_frame.subs.cache_lookup.call(null,query,dynv);
if(cljs.core.truth_(temp__5718__auto__)){
var cached = temp__5718__auto__;
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__37582__auto___39810 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__37582__auto___39810;

} else {
}

return cached;
} else {
var query_id = mranderson048.re_frame.v0v10v6.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v6.re_frame.subs.kind,query_id);
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__37582__auto___39811 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__37582__auto___39811;

} else {
}

if(mranderson048.re_frame.v0v10v6.re_frame.interop.debug_enabled_QMARK_){
var temp__5720__auto___39812 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,mranderson048.re_frame.v0v10v6.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5720__auto___39812)){
var not_reactive_39813 = temp__5720__auto___39812;
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_39813);
} else {
}
} else {
}

if((handler_fn == null)){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__37582__auto___39814 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__37582__auto___39814;

} else {
}

return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join(''));
} else {
var dyn_vals = mranderson048.re_frame.v0v10v6.re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__5718__auto__,_STAR_current_trace_STAR__orig_val__39799,_STAR_current_trace_STAR__temp_val__39800){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__5718__auto__,_STAR_current_trace_STAR__orig_val__39799,_STAR_current_trace_STAR__temp_val__39800))
);
var sub = mranderson048.re_frame.v0v10v6.re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__5718__auto__,_STAR_current_trace_STAR__orig_val__39799,_STAR_current_trace_STAR__temp_val__39800){
return (function (){
return handler_fn.call(null,mranderson048.re_frame.v0v10v6.re_frame.db.app_db,query,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__5718__auto__,_STAR_current_trace_STAR__orig_val__39799,_STAR_current_trace_STAR__temp_val__39800))
);
return mranderson048.re_frame.v0v10v6.re_frame.subs.cache_and_return.call(null,query,dynv,mranderson048.re_frame.v0v10v6.re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__5718__auto__,_STAR_current_trace_STAR__orig_val__39799,_STAR_current_trace_STAR__temp_val__39800){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__5718__auto__,_STAR_current_trace_STAR__orig_val__39799,_STAR_current_trace_STAR__temp_val__39800))
));
}
}
}finally {if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__37580__auto___39815 = mranderson048.re_frame.v0v10v6.re_frame.interop.now.call(null);
var duration__37581__auto___39816 = (end__37580__auto___39815 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37581__auto___39816,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v6.re_frame.interop.now.call(null)));

mranderson048.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__37580__auto___39815);
} else {
}
}}finally {mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__39799;
}} else {
var temp__5718__auto__ = mranderson048.re_frame.v0v10v6.re_frame.subs.cache_lookup.call(null,query,dynv);
if(cljs.core.truth_(temp__5718__auto__)){
var cached = temp__5718__auto__;
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__37582__auto___39817 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__37582__auto___39817;

} else {
}

return cached;
} else {
var query_id = mranderson048.re_frame.v0v10v6.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v6.re_frame.subs.kind,query_id);
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__37582__auto___39818 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__37582__auto___39818;

} else {
}

if(mranderson048.re_frame.v0v10v6.re_frame.interop.debug_enabled_QMARK_){
var temp__5720__auto___39819 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,mranderson048.re_frame.v0v10v6.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5720__auto___39819)){
var not_reactive_39820 = temp__5720__auto___39819;
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_39820);
} else {
}
} else {
}

if((handler_fn == null)){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__37582__auto___39821 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__37582__auto___39821;

} else {
}

return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join(''));
} else {
var dyn_vals = mranderson048.re_frame.v0v10v6.re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__5718__auto__){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__5718__auto__))
);
var sub = mranderson048.re_frame.v0v10v6.re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__5718__auto__){
return (function (){
return handler_fn.call(null,mranderson048.re_frame.v0v10v6.re_frame.db.app_db,query,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__5718__auto__))
);
return mranderson048.re_frame.v0v10v6.re_frame.subs.cache_and_return.call(null,query,dynv,mranderson048.re_frame.v0v10v6.re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__5718__auto__){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__5718__auto__))
));
}
}
}
});

mranderson048.re_frame.v0v10v6.re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
mranderson048.re_frame.v0v10v6.re_frame.subs.map_vals = (function mranderson048$re_frame$v0v10v6$re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__39822){
var vec__39823 = p__39822;
var k = cljs.core.nth.call(null,vec__39823,(0),null);
var v = cljs.core.nth.call(null,vec__39823,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
/**
 * Runs f over signals. Signals may take several
 *   forms, this function handles all of them.
 */
mranderson048.re_frame.v0v10v6.re_frame.subs.map_signals = (function mranderson048$re_frame$v0v10v6$re_frame$subs$map_signals(f,signals){
if(cljs.core.sequential_QMARK_.call(null,signals)){
return cljs.core.map.call(null,f,signals);
} else {
if(cljs.core.map_QMARK_.call(null,signals)){
return mranderson048.re_frame.v0v10v6.re_frame.subs.map_vals.call(null,f,signals);
} else {
if(mranderson048.re_frame.v0v10v6.re_frame.interop.deref_QMARK_.call(null,signals)){
return f.call(null,signals);
} else {
return cljs.core.List.EMPTY;

}
}
}
});
/**
 * Coerces x to a seq if it isn't one already
 */
mranderson048.re_frame.v0v10v6.re_frame.subs.to_seq = (function mranderson048$re_frame$v0v10v6$re_frame$subs$to_seq(x){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return (new cljs.core.List(null,x,null,(1),null));
}
});
mranderson048.re_frame.v0v10v6.re_frame.subs.deref_input_signals = (function mranderson048$re_frame$v0v10v6$re_frame$subs$deref_input_signals(signals,query_id){
var dereffed_signals = mranderson048.re_frame.v0v10v6.re_frame.subs.map_signals.call(null,cljs.core.deref,signals);
if(cljs.core.sequential_QMARK_.call(null,signals)){
cljs.core.map.call(null,cljs.core.deref,signals);
} else {
if(cljs.core.map_QMARK_.call(null,signals)){
mranderson048.re_frame.v0v10v6.re_frame.subs.map_vals.call(null,cljs.core.deref,signals);
} else {
if(mranderson048.re_frame.v0v10v6.re_frame.interop.deref_QMARK_.call(null,signals)){
cljs.core.deref.call(null,signals);
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for",query_id,", the input-signals function returns:",signals);

}
}
}

if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__37582__auto___39826 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.doall.call(null,mranderson048.re_frame.v0v10v6.re_frame.subs.to_seq.call(null,mranderson048.re_frame.v0v10v6.re_frame.subs.map_signals.call(null,mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id,signals)))], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.doall.call(null,mranderson048.re_frame.v0v10v6.re_frame.subs.to_seq.call(null,mranderson048.re_frame.v0v10v6.re_frame.subs.map_signals.call(null,mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id,signals)))], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__37582__auto___39826;

} else {
}

return dereffed_signals;
});
/**
 * For a given `query-id`, register a `computation` function and input `signals`.
 * 
 *   At an abstract level, a call to this function allows you to register 'the mechanism'
 *   to later fulfil a call to `(subscribe [query-id ...])`.
 * 
 *   To say that another way, reg-sub allows you to create a template for a node
 *   in the signal graph. But note: reg-sub does not cause a node to be created.
 *   It simply allows you to register the template from which such a
 *   node could be created, if it were needed, sometime later, when the call
 *   to `subscribe` is made.
 * 
 *   reg-sub needs three things:
 *  - a `query-id`
 *  - the required inputs for this node
 *  - a computation function for this node
 * 
 *   The `query-id` is always the 1st argument to reg-sub and it is typically
 *   a namespaced keyword.
 * 
 *   A computation function is always the last argument and it has this general form:
 *  `(input-signals, query-vector) -> a-value`
 * 
 *   What goes in between the 1st and last args can vary, but whatever is there will
 *   define the input signals part of the template, and, as a result, it will control
 *   what values the computation functions gets as a first argument.
 * 
 *   There's 3 ways this function can be called - 3 ways to supply input signals:
 * 
 *   1. No input signals given:
 * 
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; (fn [db v]  ... a-value)
 * 
 *   The node's input signal defaults to `app-db`, and the value within `app-db` is
 *   is given as the 1st argument to the computation function.
 * 
 *   2. A signal function is supplied:
 * 
 *   (reg-sub
 *     :query-id
 *     signal-fn     ;; <-- here
 *     computation-fn)
 * 
 *   When a node is created from the template, the `signal-fn` will be called and it
 *   is expected to return the input signal(s) as either a singleton, if there is only
 *   one, or a sequence if there are many, or a map with the signals as the values.
 * 
 *   The values from the nominated signals will be supplied as the 1st argument to the
 *   computation function - either a singleton, sequence or map of them, paralleling
 *   the structure returned by the signal function.
 * 
 *   Here, is an example signal-fn, which returns a vector of input signals.
 * 
 *     (fn [query-vec dynamic-vec]
 *       [(subscribe [:a-sub])
 *        (subscribe [:b-sub])])
 * 
 *   For that signal function, the computation function must be written
 *   to expect a vector of values for its first argument.
 *     (fn [[a b] _] ....)
 * 
 *   If the signal function was simpler and returned a singleton, like this:
 *      (fn [query-vec dynamic-vec]
 *        (subscribe [:a-sub]))
 * 
 *   then the computation function must be written to expect a single value
 *   as the 1st argument:
 * 
 *      (fn [a _] ...)
 * 
 *   3. Syntax Sugar
 * 
 *   (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   This 3rd variation is syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. Each pair starts with a `:<-` and a subscription
 *   vector follows.
 * 
 *   For further understanding, read `/docs`, and look at the detailed comments in
 *   /examples/todomvc/src/subs.cljs
 *   
 */
mranderson048.re_frame.v0v10v6.re_frame.subs.reg_sub = (function mranderson048$re_frame$v0v10v6$re_frame$subs$reg_sub(var_args){
var args__4647__auto__ = [];
var len__4641__auto___39837 = arguments.length;
var i__4642__auto___39838 = (0);
while(true){
if((i__4642__auto___39838 < len__4641__auto___39837)){
args__4647__auto__.push((arguments[i__4642__auto___39838]));

var G__39839 = (i__4642__auto___39838 + (1));
i__4642__auto___39838 = G__39839;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return mranderson048.re_frame.v0v10v6.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

mranderson048.re_frame.v0v10v6.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = ["re-frame: reg-sub for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),", "].join('');
var inputs_fn = (function (){var G__39829 = cljs.core.count.call(null,input_args);
switch (G__39829) {
case (0):
return ((function (G__39829,computation_fn,input_args,err_header){
return (function() {
var G__39841 = null;
var G__39841__1 = (function (_){
return mranderson048.re_frame.v0v10v6.re_frame.db.app_db;
});
var G__39841__2 = (function (_,___$1){
return mranderson048.re_frame.v0v10v6.re_frame.db.app_db;
});
G__39841 = function(_,___$1){
switch(arguments.length){
case 1:
return G__39841__1.call(this,_);
case 2:
return G__39841__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39841.cljs$core$IFn$_invoke$arity$1 = G__39841__1;
G__39841.cljs$core$IFn$_invoke$arity$2 = G__39841__2;
return G__39841;
})()
;})(G__39829,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"2nd argument expected to be an inputs function, got:",f);
}

return f;

break;
case (2):
var vec__39830 = input_args;
var marker = cljs.core.nth.call(null,vec__39830,(0),null);
var vec = cljs.core.nth.call(null,vec__39830,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected :<-, got:",marker);
}

return ((function (vec__39830,marker,vec,G__39829,computation_fn,input_args,err_header){
return (function() {
var mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn = null;
var mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn__1 = (function (_){
return mranderson048.re_frame.v0v10v6.re_frame.subs.subscribe.call(null,vec);
});
var mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn__2 = (function (_,___$1){
return mranderson048.re_frame.v0v10v6.re_frame.subs.subscribe.call(null,vec);
});
mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn__1;
mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn__2;
return mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn;
})()
;})(vec__39830,marker,vec,G__39829,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var markers = cljs.core.map.call(null,cljs.core.first,pairs);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if(((cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs)))){
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,markers,vecs,G__39829,computation_fn,input_args,err_header){
return (function() {
var mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn = null;
var mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.call(null,mranderson048.re_frame.v0v10v6.re_frame.subs.subscribe,vecs);
});
var mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.call(null,mranderson048.re_frame.v0v10v6.re_frame.subs.subscribe,vecs);
});
mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn__1;
mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn__2;
return mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn;
})()
;})(pairs,markers,vecs,G__39829,computation_fn,input_args,err_header))

}
})();
return mranderson048.re_frame.v0v10v6.re_frame.registrar.register_handler.call(null,mranderson048.re_frame.v0v10v6.re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var mranderson048$re_frame$v0v10v6$re_frame$subs$subs_handler_fn = null;
var mranderson048$re_frame$v0v10v6$re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = mranderson048.re_frame.v0v10v6.re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__39833 = mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__39834 = mranderson048.re_frame.v0v10v6.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v6.re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__39834;

try{try{var subscription = computation_fn.call(null,mranderson048.re_frame.v0v10v6.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__37582__auto___39842 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__37582__auto___39842;

} else {
}

return subscription;
}finally {if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__37580__auto___39843 = mranderson048.re_frame.v0v10v6.re_frame.interop.now.call(null);
var duration__37581__auto___39844 = (end__37580__auto___39843 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37581__auto___39844,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v6.re_frame.interop.now.call(null)));

mranderson048.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__37580__auto___39843);
} else {
}
}}finally {mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__39833;
}} else {
var subscription = computation_fn.call(null,mranderson048.re_frame.v0v10v6.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__37582__auto___39845 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__37582__auto___39845;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
var mranderson048$re_frame$v0v10v6$re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = mranderson048.re_frame.v0v10v6.re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__39835 = mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__39836 = mranderson048.re_frame.v0v10v6.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v6.re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__39836;

try{try{var subscription = computation_fn.call(null,mranderson048.re_frame.v0v10v6.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__37582__auto___39846 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__37582__auto___39846;

} else {
}

return subscription;
}finally {if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__37580__auto___39847 = mranderson048.re_frame.v0v10v6.re_frame.interop.now.call(null);
var duration__37581__auto___39848 = (end__37580__auto___39847 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37581__auto___39848,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v6.re_frame.interop.now.call(null)));

mranderson048.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__37580__auto___39847);
} else {
}
}}finally {mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__39835;
}} else {
var subscription = computation_fn.call(null,mranderson048.re_frame.v0v10v6.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__37582__auto___39849 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__37582__auto___39849;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
mranderson048$re_frame$v0v10v6$re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return mranderson048$re_frame$v0v10v6$re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return mranderson048$re_frame$v0v10v6$re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mranderson048$re_frame$v0v10v6$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = mranderson048$re_frame$v0v10v6$re_frame$subs$subs_handler_fn__2;
mranderson048$re_frame$v0v10v6$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = mranderson048$re_frame$v0v10v6$re_frame$subs$subs_handler_fn__3;
return mranderson048$re_frame$v0v10v6$re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

mranderson048.re_frame.v0v10v6.re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.re_frame.v0v10v6.re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq39827){
var G__39828 = cljs.core.first.call(null,seq39827);
var seq39827__$1 = cljs.core.next.call(null,seq39827);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39828,seq39827__$1);
});


//# sourceMappingURL=subs.js.map?rel=1575052414587
