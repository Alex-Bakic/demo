// Compiled by ClojureScript 1.10.439 {}
goog.provide('mranderson048.re_frame.v0v10v6.re_frame.fx');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.router');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.interceptor');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.events');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.loggers');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.trace');
mranderson048.re_frame.v0v10v6.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(mranderson048.re_frame.v0v10v6.re_frame.registrar.kinds.call(null,mranderson048.re_frame.v0v10v6.re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v6.re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx = (function mranderson048$re_frame$v0v10v6$re_frame$fx$reg_fx(id,handler){
return mranderson048.re_frame.v0v10v6.re_frame.registrar.register_handler.call(null,mranderson048.re_frame.v0v10v6.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
mranderson048.re_frame.v0v10v6.re_frame.fx.do_fx = mranderson048.re_frame.v0v10v6.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson048$re_frame$v0v10v6$re_frame$fx$do_fx_after(context){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__48342 = mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__48343 = mranderson048.re_frame.v0v10v6.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__48343;

try{try{var seq__48344 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__48345 = null;
var count__48346 = (0);
var i__48347 = (0);
while(true){
if((i__48347 < count__48346)){
var vec__48348 = cljs.core._nth.call(null,chunk__48345,i__48347);
var effect_key = cljs.core.nth.call(null,vec__48348,(0),null);
var effect_value = cljs.core.nth.call(null,vec__48348,(1),null);
var temp__5718__auto___48364 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___48364)){
var effect_fn_48365 = temp__5718__auto___48364;
effect_fn_48365.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__48366 = seq__48344;
var G__48367 = chunk__48345;
var G__48368 = count__48346;
var G__48369 = (i__48347 + (1));
seq__48344 = G__48366;
chunk__48345 = G__48367;
count__48346 = G__48368;
i__48347 = G__48369;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__48344);
if(temp__5720__auto__){
var seq__48344__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48344__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__48344__$1);
var G__48370 = cljs.core.chunk_rest.call(null,seq__48344__$1);
var G__48371 = c__4461__auto__;
var G__48372 = cljs.core.count.call(null,c__4461__auto__);
var G__48373 = (0);
seq__48344 = G__48370;
chunk__48345 = G__48371;
count__48346 = G__48372;
i__48347 = G__48373;
continue;
} else {
var vec__48351 = cljs.core.first.call(null,seq__48344__$1);
var effect_key = cljs.core.nth.call(null,vec__48351,(0),null);
var effect_value = cljs.core.nth.call(null,vec__48351,(1),null);
var temp__5718__auto___48374 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___48374)){
var effect_fn_48375 = temp__5718__auto___48374;
effect_fn_48375.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__48376 = cljs.core.next.call(null,seq__48344__$1);
var G__48377 = null;
var G__48378 = (0);
var G__48379 = (0);
seq__48344 = G__48376;
chunk__48345 = G__48377;
count__48346 = G__48378;
i__48347 = G__48379;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__42452__auto___48380 = mranderson048.re_frame.v0v10v6.re_frame.interop.now.call(null);
var duration__42453__auto___48381 = (end__42452__auto___48380 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__42453__auto___48381,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v6.re_frame.interop.now.call(null)));

mranderson048.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__42452__auto___48380);
} else {
}
}}finally {mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__48342;
}} else {
var seq__48354 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__48355 = null;
var count__48356 = (0);
var i__48357 = (0);
while(true){
if((i__48357 < count__48356)){
var vec__48358 = cljs.core._nth.call(null,chunk__48355,i__48357);
var effect_key = cljs.core.nth.call(null,vec__48358,(0),null);
var effect_value = cljs.core.nth.call(null,vec__48358,(1),null);
var temp__5718__auto___48382 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___48382)){
var effect_fn_48383 = temp__5718__auto___48382;
effect_fn_48383.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__48384 = seq__48354;
var G__48385 = chunk__48355;
var G__48386 = count__48356;
var G__48387 = (i__48357 + (1));
seq__48354 = G__48384;
chunk__48355 = G__48385;
count__48356 = G__48386;
i__48357 = G__48387;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__48354);
if(temp__5720__auto__){
var seq__48354__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48354__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__48354__$1);
var G__48388 = cljs.core.chunk_rest.call(null,seq__48354__$1);
var G__48389 = c__4461__auto__;
var G__48390 = cljs.core.count.call(null,c__4461__auto__);
var G__48391 = (0);
seq__48354 = G__48388;
chunk__48355 = G__48389;
count__48356 = G__48390;
i__48357 = G__48391;
continue;
} else {
var vec__48361 = cljs.core.first.call(null,seq__48354__$1);
var effect_key = cljs.core.nth.call(null,vec__48361,(0),null);
var effect_value = cljs.core.nth.call(null,vec__48361,(1),null);
var temp__5718__auto___48392 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___48392)){
var effect_fn_48393 = temp__5718__auto___48392;
effect_fn_48393.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__48394 = cljs.core.next.call(null,seq__48354__$1);
var G__48395 = null;
var G__48396 = (0);
var G__48397 = (0);
seq__48354 = G__48394;
chunk__48355 = G__48395;
count__48356 = G__48396;
i__48357 = G__48397;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__48398 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__48399 = null;
var count__48400 = (0);
var i__48401 = (0);
while(true){
if((i__48401 < count__48400)){
var map__48402 = cljs.core._nth.call(null,chunk__48399,i__48401);
var map__48402__$1 = (((((!((map__48402 == null))))?(((((map__48402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48402):map__48402);
var effect = map__48402__$1;
var ms = cljs.core.get.call(null,map__48402__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__48402__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson048.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__48398,chunk__48399,count__48400,i__48401,map__48402,map__48402__$1,effect,ms,dispatch){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router.dispatch.call(null,dispatch);
});})(seq__48398,chunk__48399,count__48400,i__48401,map__48402,map__48402__$1,effect,ms,dispatch))
,ms);
}


var G__48406 = seq__48398;
var G__48407 = chunk__48399;
var G__48408 = count__48400;
var G__48409 = (i__48401 + (1));
seq__48398 = G__48406;
chunk__48399 = G__48407;
count__48400 = G__48408;
i__48401 = G__48409;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__48398);
if(temp__5720__auto__){
var seq__48398__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48398__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__48398__$1);
var G__48410 = cljs.core.chunk_rest.call(null,seq__48398__$1);
var G__48411 = c__4461__auto__;
var G__48412 = cljs.core.count.call(null,c__4461__auto__);
var G__48413 = (0);
seq__48398 = G__48410;
chunk__48399 = G__48411;
count__48400 = G__48412;
i__48401 = G__48413;
continue;
} else {
var map__48404 = cljs.core.first.call(null,seq__48398__$1);
var map__48404__$1 = (((((!((map__48404 == null))))?(((((map__48404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48404):map__48404);
var effect = map__48404__$1;
var ms = cljs.core.get.call(null,map__48404__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__48404__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson048.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__48398,chunk__48399,count__48400,i__48401,map__48404,map__48404__$1,effect,ms,dispatch,seq__48398__$1,temp__5720__auto__){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router.dispatch.call(null,dispatch);
});})(seq__48398,chunk__48399,count__48400,i__48401,map__48404,map__48404__$1,effect,ms,dispatch,seq__48398__$1,temp__5720__auto__))
,ms);
}


var G__48414 = cljs.core.next.call(null,seq__48398__$1);
var G__48415 = null;
var G__48416 = (0);
var G__48417 = (0);
seq__48398 = G__48414;
chunk__48399 = G__48415;
count__48400 = G__48416;
i__48401 = G__48417;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return mranderson048.re_frame.v0v10v6.re_frame.router.dispatch.call(null,value);
}
}));
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__48418 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__48419 = null;
var count__48420 = (0);
var i__48421 = (0);
while(true){
if((i__48421 < count__48420)){
var event = cljs.core._nth.call(null,chunk__48419,i__48421);
mranderson048.re_frame.v0v10v6.re_frame.router.dispatch.call(null,event);


var G__48422 = seq__48418;
var G__48423 = chunk__48419;
var G__48424 = count__48420;
var G__48425 = (i__48421 + (1));
seq__48418 = G__48422;
chunk__48419 = G__48423;
count__48420 = G__48424;
i__48421 = G__48425;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__48418);
if(temp__5720__auto__){
var seq__48418__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48418__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__48418__$1);
var G__48426 = cljs.core.chunk_rest.call(null,seq__48418__$1);
var G__48427 = c__4461__auto__;
var G__48428 = cljs.core.count.call(null,c__4461__auto__);
var G__48429 = (0);
seq__48418 = G__48426;
chunk__48419 = G__48427;
count__48420 = G__48428;
i__48421 = G__48429;
continue;
} else {
var event = cljs.core.first.call(null,seq__48418__$1);
mranderson048.re_frame.v0v10v6.re_frame.router.dispatch.call(null,event);


var G__48430 = cljs.core.next.call(null,seq__48418__$1);
var G__48431 = null;
var G__48432 = (0);
var G__48433 = (0);
seq__48418 = G__48430;
chunk__48419 = G__48431;
count__48420 = G__48432;
i__48421 = G__48433;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,mranderson048.re_frame.v0v10v6.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v6.re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__48434 = cljs.core.seq.call(null,value);
var chunk__48435 = null;
var count__48436 = (0);
var i__48437 = (0);
while(true){
if((i__48437 < count__48436)){
var event = cljs.core._nth.call(null,chunk__48435,i__48437);
clear_event.call(null,event);


var G__48438 = seq__48434;
var G__48439 = chunk__48435;
var G__48440 = count__48436;
var G__48441 = (i__48437 + (1));
seq__48434 = G__48438;
chunk__48435 = G__48439;
count__48436 = G__48440;
i__48437 = G__48441;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__48434);
if(temp__5720__auto__){
var seq__48434__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48434__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__48434__$1);
var G__48442 = cljs.core.chunk_rest.call(null,seq__48434__$1);
var G__48443 = c__4461__auto__;
var G__48444 = cljs.core.count.call(null,c__4461__auto__);
var G__48445 = (0);
seq__48434 = G__48442;
chunk__48435 = G__48443;
count__48436 = G__48444;
i__48437 = G__48445;
continue;
} else {
var event = cljs.core.first.call(null,seq__48434__$1);
clear_event.call(null,event);


var G__48446 = cljs.core.next.call(null,seq__48434__$1);
var G__48447 = null;
var G__48448 = (0);
var G__48449 = (0);
seq__48434 = G__48446;
chunk__48435 = G__48447;
count__48436 = G__48448;
i__48437 = G__48449;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,mranderson048.re_frame.v0v10v6.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1575465432138
