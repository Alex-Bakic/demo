// Compiled by ClojureScript 1.10.439 {}
goog.provide('mranderson048.re_frame.v0v10v6.re_frame.core');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.events');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.subs');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.fx');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.cofx');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.router');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.loggers');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.interceptor');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.std_interceptors');
goog.require('clojure.set');
mranderson048.re_frame.v0v10v6.re_frame.core.dispatch = mranderson048.re_frame.v0v10v6.re_frame.router.dispatch;
mranderson048.re_frame.v0v10v6.re_frame.core.dispatch_sync = mranderson048.re_frame.v0v10v6.re_frame.router.dispatch_sync;
mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub = mranderson048.re_frame.v0v10v6.re_frame.subs.reg_sub;
mranderson048.re_frame.v0v10v6.re_frame.core.subscribe = mranderson048.re_frame.v0v10v6.re_frame.subs.subscribe;
mranderson048.re_frame.v0v10v6.re_frame.core.clear_sub = cljs.core.partial.call(null,mranderson048.re_frame.v0v10v6.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v6.re_frame.subs.kind);
mranderson048.re_frame.v0v10v6.re_frame.core.clear_subscription_cache_BANG_ = mranderson048.re_frame.v0v10v6.re_frame.subs.clear_subscription_cache_BANG_;
/**
 * This is a low level, advanced function.  You should probably be
 *   using reg-sub instead.
 *   Docs in https://github.com/Day8/re-frame/blob/master/docs/SubscriptionFlow.md
 */
mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub_raw = (function mranderson048$re_frame$v0v10v6$re_frame$core$reg_sub_raw(query_id,handler_fn){
return mranderson048.re_frame.v0v10v6.re_frame.registrar.register_handler.call(null,mranderson048.re_frame.v0v10v6.re_frame.subs.kind,query_id,handler_fn);
});
mranderson048.re_frame.v0v10v6.re_frame.core.reg_fx = mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx;
mranderson048.re_frame.v0v10v6.re_frame.core.clear_fx = cljs.core.partial.call(null,mranderson048.re_frame.v0v10v6.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v6.re_frame.fx.kind);
mranderson048.re_frame.v0v10v6.re_frame.core.reg_cofx = mranderson048.re_frame.v0v10v6.re_frame.cofx.reg_cofx;
mranderson048.re_frame.v0v10v6.re_frame.core.inject_cofx = mranderson048.re_frame.v0v10v6.re_frame.cofx.inject_cofx;
mranderson048.re_frame.v0v10v6.re_frame.core.clear_cofx = cljs.core.partial.call(null,mranderson048.re_frame.v0v10v6.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v6.re_frame.cofx.kind);
/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (db event) -> db
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of this
 * chain.
 */
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db = (function mranderson048$re_frame$v0v10v6$re_frame$core$reg_event_db(var_args){
var G__40059 = arguments.length;
switch (G__40059) {
case 2:
return mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,id,null,handler);
});

mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return mranderson048.re_frame.v0v10v6.re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.cofx.inject_db,mranderson048.re_frame.v0v10v6.re_frame.fx.do_fx,interceptors,mranderson048.re_frame.v0v10v6.re_frame.std_interceptors.db_handler__GT_interceptor.call(null,handler)], null));
});

mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$lang$maxFixedArity = 3;

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (coeffects-map event-vector) -> effects-map
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of the
 * interceptor chain.  These interceptors inject the value of app-db into coeffects,
 * and, later, action effects.
 */
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_fx = (function mranderson048$re_frame$v0v10v6$re_frame$core$reg_event_fx(var_args){
var G__40062 = arguments.length;
switch (G__40062) {
case 2:
return mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_fx.call(null,id,null,handler);
});

mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return mranderson048.re_frame.v0v10v6.re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.cofx.inject_db,mranderson048.re_frame.v0v10v6.re_frame.fx.do_fx,interceptors,mranderson048.re_frame.v0v10v6.re_frame.std_interceptors.fx_handler__GT_interceptor.call(null,handler)], null));
});

mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$lang$maxFixedArity = 3;

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (context-map event-vector) -> context-map
 * 
 *   This form of registration is almost never used. 
 */
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_ctx = (function mranderson048$re_frame$v0v10v6$re_frame$core$reg_event_ctx(var_args){
var G__40065 = arguments.length;
switch (G__40065) {
case 2:
return mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_ctx.call(null,id,null,handler);
});

mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return mranderson048.re_frame.v0v10v6.re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.cofx.inject_db,mranderson048.re_frame.v0v10v6.re_frame.fx.do_fx,interceptors,mranderson048.re_frame.v0v10v6.re_frame.std_interceptors.ctx_handler__GT_interceptor.call(null,handler)], null));
});

mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_ctx.cljs$lang$maxFixedArity = 3;

mranderson048.re_frame.v0v10v6.re_frame.core.clear_event = cljs.core.partial.call(null,mranderson048.re_frame.v0v10v6.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v6.re_frame.events.kind);
mranderson048.re_frame.v0v10v6.re_frame.core.debug = mranderson048.re_frame.v0v10v6.re_frame.std_interceptors.debug;
mranderson048.re_frame.v0v10v6.re_frame.core.path = mranderson048.re_frame.v0v10v6.re_frame.std_interceptors.path;
mranderson048.re_frame.v0v10v6.re_frame.core.enrich = mranderson048.re_frame.v0v10v6.re_frame.std_interceptors.enrich;
mranderson048.re_frame.v0v10v6.re_frame.core.trim_v = mranderson048.re_frame.v0v10v6.re_frame.std_interceptors.trim_v;
mranderson048.re_frame.v0v10v6.re_frame.core.after = mranderson048.re_frame.v0v10v6.re_frame.std_interceptors.after;
mranderson048.re_frame.v0v10v6.re_frame.core.on_changes = mranderson048.re_frame.v0v10v6.re_frame.std_interceptors.on_changes;
mranderson048.re_frame.v0v10v6.re_frame.core.__GT_interceptor = mranderson048.re_frame.v0v10v6.re_frame.interceptor.__GT_interceptor;
mranderson048.re_frame.v0v10v6.re_frame.core.get_coeffect = mranderson048.re_frame.v0v10v6.re_frame.interceptor.get_coeffect;
mranderson048.re_frame.v0v10v6.re_frame.core.assoc_coeffect = mranderson048.re_frame.v0v10v6.re_frame.interceptor.assoc_coeffect;
mranderson048.re_frame.v0v10v6.re_frame.core.get_effect = mranderson048.re_frame.v0v10v6.re_frame.interceptor.get_effect;
mranderson048.re_frame.v0v10v6.re_frame.core.assoc_effect = mranderson048.re_frame.v0v10v6.re_frame.interceptor.assoc_effect;
mranderson048.re_frame.v0v10v6.re_frame.core.enqueue = mranderson048.re_frame.v0v10v6.re_frame.interceptor.enqueue;
mranderson048.re_frame.v0v10v6.re_frame.core.set_loggers_BANG_ = mranderson048.re_frame.v0v10v6.re_frame.loggers.set_loggers_BANG_;
mranderson048.re_frame.v0v10v6.re_frame.core.console = mranderson048.re_frame.v0v10v6.re_frame.loggers.console;
/**
 * Checkpoints the state of mranderson048.re-frame.v0v10v6.re-frame and returns a function which, when
 *   later called, will restore mranderson048.re-frame.v0v10v6.re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 *   
 */
mranderson048.re_frame.v0v10v6.re_frame.core.make_restore_fn = (function mranderson048$re_frame$v0v10v6$re_frame$core$make_restore_fn(){
var handlers = cljs.core.deref.call(null,mranderson048.re_frame.v0v10v6.re_frame.registrar.kind__GT_id__GT_handler);
var app_db = cljs.core.deref.call(null,mranderson048.re_frame.v0v10v6.re_frame.db.app_db);
var subs_cache = cljs.core.deref.call(null,mranderson048.re_frame.v0v10v6.re_frame.subs.query__GT_reaction);
return ((function (handlers,app_db,subs_cache){
return (function (){
var original_subs_40071 = cljs.core.set.call(null,cljs.core.vals.call(null,subs_cache));
var current_subs_40072 = cljs.core.set.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v6.re_frame.subs.query__GT_reaction)));
var seq__40067_40073 = cljs.core.seq.call(null,clojure.set.difference.call(null,current_subs_40072,original_subs_40071));
var chunk__40068_40074 = null;
var count__40069_40075 = (0);
var i__40070_40076 = (0);
while(true){
if((i__40070_40076 < count__40069_40075)){
var sub_40077 = cljs.core._nth.call(null,chunk__40068_40074,i__40070_40076);
mranderson048.re_frame.v0v10v6.re_frame.interop.dispose_BANG_.call(null,sub_40077);


var G__40078 = seq__40067_40073;
var G__40079 = chunk__40068_40074;
var G__40080 = count__40069_40075;
var G__40081 = (i__40070_40076 + (1));
seq__40067_40073 = G__40078;
chunk__40068_40074 = G__40079;
count__40069_40075 = G__40080;
i__40070_40076 = G__40081;
continue;
} else {
var temp__5720__auto___40082 = cljs.core.seq.call(null,seq__40067_40073);
if(temp__5720__auto___40082){
var seq__40067_40083__$1 = temp__5720__auto___40082;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40067_40083__$1)){
var c__4461__auto___40084 = cljs.core.chunk_first.call(null,seq__40067_40083__$1);
var G__40085 = cljs.core.chunk_rest.call(null,seq__40067_40083__$1);
var G__40086 = c__4461__auto___40084;
var G__40087 = cljs.core.count.call(null,c__4461__auto___40084);
var G__40088 = (0);
seq__40067_40073 = G__40085;
chunk__40068_40074 = G__40086;
count__40069_40075 = G__40087;
i__40070_40076 = G__40088;
continue;
} else {
var sub_40089 = cljs.core.first.call(null,seq__40067_40083__$1);
mranderson048.re_frame.v0v10v6.re_frame.interop.dispose_BANG_.call(null,sub_40089);


var G__40090 = cljs.core.next.call(null,seq__40067_40083__$1);
var G__40091 = null;
var G__40092 = (0);
var G__40093 = (0);
seq__40067_40073 = G__40090;
chunk__40068_40074 = G__40091;
count__40069_40075 = G__40092;
i__40070_40076 = G__40093;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.registrar.kind__GT_id__GT_handler,handlers);

cljs.core.reset_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.db.app_db,app_db);

return null;
});
;})(handlers,app_db,subs_cache))
});
/**
 * Remove all events queued for processing
 */
mranderson048.re_frame.v0v10v6.re_frame.core.purge_event_queue = (function mranderson048$re_frame$v0v10v6$re_frame$core$purge_event_queue(){
return mranderson048.re_frame.v0v10v6.re_frame.router.purge.call(null,mranderson048.re_frame.v0v10v6.re_frame.router.event_queue);
});
/**
 * Registers a function `f` to be called after each event is processed
 * `f` will be called with two arguments:
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This is useful in advanced cases like:
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   'id' is typically a keyword. Supplied at "add time" so it can subsequently
 *   be used at "remove time" to get rid of the right callback.
 *   
 */
mranderson048.re_frame.v0v10v6.re_frame.core.add_post_event_callback = (function mranderson048$re_frame$v0v10v6$re_frame$core$add_post_event_callback(var_args){
var G__40095 = arguments.length;
switch (G__40095) {
case 1:
return mranderson048.re_frame.v0v10v6.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.re_frame.v0v10v6.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v6.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return mranderson048.re_frame.v0v10v6.re_frame.core.add_post_event_callback.call(null,f,f);
});

mranderson048.re_frame.v0v10v6.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return mranderson048.re_frame.v0v10v6.re_frame.router.add_post_event_callback.call(null,mranderson048.re_frame.v0v10v6.re_frame.router.event_queue,id,f);
});

mranderson048.re_frame.v0v10v6.re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = 2;

mranderson048.re_frame.v0v10v6.re_frame.core.remove_post_event_callback = (function mranderson048$re_frame$v0v10v6$re_frame$core$remove_post_event_callback(id){
return mranderson048.re_frame.v0v10v6.re_frame.router.remove_post_event_callback.call(null,mranderson048.re_frame.v0v10v6.re_frame.router.event_queue,id);
});
mranderson048.re_frame.v0v10v6.re_frame.core.register_handler = (function mranderson048$re_frame$v0v10v6$re_frame$core$register_handler(var_args){
var args__4647__auto__ = [];
var len__4641__auto___40098 = arguments.length;
var i__4642__auto___40099 = (0);
while(true){
if((i__4642__auto___40099 < len__4641__auto___40098)){
args__4647__auto__.push((arguments[i__4642__auto___40099]));

var G__40100 = (i__4642__auto___40099 + (1));
i__4642__auto___40099 = G__40100;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return mranderson048.re_frame.v0v10v6.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

mranderson048.re_frame.v0v10v6.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
mranderson048.re_frame.v0v10v6.re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame:  \"register-handler\" has been renamed \"reg-event-db\" (look for registration of",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args)),")");

return cljs.core.apply.call(null,mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db,args);
});

mranderson048.re_frame.v0v10v6.re_frame.core.register_handler.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson048.re_frame.v0v10v6.re_frame.core.register_handler.cljs$lang$applyTo = (function (seq40097){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40097));
});

mranderson048.re_frame.v0v10v6.re_frame.core.register_sub = (function mranderson048$re_frame$v0v10v6$re_frame$core$register_sub(var_args){
var args__4647__auto__ = [];
var len__4641__auto___40102 = arguments.length;
var i__4642__auto___40103 = (0);
while(true){
if((i__4642__auto___40103 < len__4641__auto___40102)){
args__4647__auto__.push((arguments[i__4642__auto___40103]));

var G__40104 = (i__4642__auto___40103 + (1));
i__4642__auto___40103 = G__40104;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return mranderson048.re_frame.v0v10v6.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

mranderson048.re_frame.v0v10v6.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
mranderson048.re_frame.v0v10v6.re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame:  \"register-sub\" is deprecated. Use \"reg-sub-raw\" (look for registration of",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args)),")");

return cljs.core.apply.call(null,mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub_raw,args);
});

mranderson048.re_frame.v0v10v6.re_frame.core.register_sub.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson048.re_frame.v0v10v6.re_frame.core.register_sub.cljs$lang$applyTo = (function (seq40101){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40101));
});


//# sourceMappingURL=core.js.map?rel=1575052414946
