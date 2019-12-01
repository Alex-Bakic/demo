// Compiled by ClojureScript 1.10.439 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
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
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__34512 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__34513 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__34513;

try{try{var seq__34514 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__34515 = null;
var count__34516 = (0);
var i__34517 = (0);
while(true){
if((i__34517 < count__34516)){
var vec__34518 = cljs.core._nth.call(null,chunk__34515,i__34517);
var effect_key = cljs.core.nth.call(null,vec__34518,(0),null);
var effect_value = cljs.core.nth.call(null,vec__34518,(1),null);
var temp__5718__auto___34534 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___34534)){
var effect_fn_34535 = temp__5718__auto___34534;
effect_fn_34535.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__34536 = seq__34514;
var G__34537 = chunk__34515;
var G__34538 = count__34516;
var G__34539 = (i__34517 + (1));
seq__34514 = G__34536;
chunk__34515 = G__34537;
count__34516 = G__34538;
i__34517 = G__34539;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34514);
if(temp__5720__auto__){
var seq__34514__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34514__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__34514__$1);
var G__34540 = cljs.core.chunk_rest.call(null,seq__34514__$1);
var G__34541 = c__4461__auto__;
var G__34542 = cljs.core.count.call(null,c__4461__auto__);
var G__34543 = (0);
seq__34514 = G__34540;
chunk__34515 = G__34541;
count__34516 = G__34542;
i__34517 = G__34543;
continue;
} else {
var vec__34521 = cljs.core.first.call(null,seq__34514__$1);
var effect_key = cljs.core.nth.call(null,vec__34521,(0),null);
var effect_value = cljs.core.nth.call(null,vec__34521,(1),null);
var temp__5718__auto___34544 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___34544)){
var effect_fn_34545 = temp__5718__auto___34544;
effect_fn_34545.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__34546 = cljs.core.next.call(null,seq__34514__$1);
var G__34547 = null;
var G__34548 = (0);
var G__34549 = (0);
seq__34514 = G__34546;
chunk__34515 = G__34547;
count__34516 = G__34548;
i__34517 = G__34549;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__34349__auto___34550 = re_frame.interop.now.call(null);
var duration__34350__auto___34551 = (end__34349__auto___34550 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34350__auto___34551,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__34349__auto___34550);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__34512;
}} else {
var seq__34524 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__34525 = null;
var count__34526 = (0);
var i__34527 = (0);
while(true){
if((i__34527 < count__34526)){
var vec__34528 = cljs.core._nth.call(null,chunk__34525,i__34527);
var effect_key = cljs.core.nth.call(null,vec__34528,(0),null);
var effect_value = cljs.core.nth.call(null,vec__34528,(1),null);
var temp__5718__auto___34552 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___34552)){
var effect_fn_34553 = temp__5718__auto___34552;
effect_fn_34553.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__34554 = seq__34524;
var G__34555 = chunk__34525;
var G__34556 = count__34526;
var G__34557 = (i__34527 + (1));
seq__34524 = G__34554;
chunk__34525 = G__34555;
count__34526 = G__34556;
i__34527 = G__34557;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34524);
if(temp__5720__auto__){
var seq__34524__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34524__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__34524__$1);
var G__34558 = cljs.core.chunk_rest.call(null,seq__34524__$1);
var G__34559 = c__4461__auto__;
var G__34560 = cljs.core.count.call(null,c__4461__auto__);
var G__34561 = (0);
seq__34524 = G__34558;
chunk__34525 = G__34559;
count__34526 = G__34560;
i__34527 = G__34561;
continue;
} else {
var vec__34531 = cljs.core.first.call(null,seq__34524__$1);
var effect_key = cljs.core.nth.call(null,vec__34531,(0),null);
var effect_value = cljs.core.nth.call(null,vec__34531,(1),null);
var temp__5718__auto___34562 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___34562)){
var effect_fn_34563 = temp__5718__auto___34562;
effect_fn_34563.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__34564 = cljs.core.next.call(null,seq__34524__$1);
var G__34565 = null;
var G__34566 = (0);
var G__34567 = (0);
seq__34524 = G__34564;
chunk__34525 = G__34565;
count__34526 = G__34566;
i__34527 = G__34567;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__34568 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__34569 = null;
var count__34570 = (0);
var i__34571 = (0);
while(true){
if((i__34571 < count__34570)){
var map__34572 = cljs.core._nth.call(null,chunk__34569,i__34571);
var map__34572__$1 = (((((!((map__34572 == null))))?(((((map__34572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34572):map__34572);
var effect = map__34572__$1;
var ms = cljs.core.get.call(null,map__34572__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__34572__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__34568,chunk__34569,count__34570,i__34571,map__34572,map__34572__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__34568,chunk__34569,count__34570,i__34571,map__34572,map__34572__$1,effect,ms,dispatch))
,ms);
}


var G__34576 = seq__34568;
var G__34577 = chunk__34569;
var G__34578 = count__34570;
var G__34579 = (i__34571 + (1));
seq__34568 = G__34576;
chunk__34569 = G__34577;
count__34570 = G__34578;
i__34571 = G__34579;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34568);
if(temp__5720__auto__){
var seq__34568__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34568__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__34568__$1);
var G__34580 = cljs.core.chunk_rest.call(null,seq__34568__$1);
var G__34581 = c__4461__auto__;
var G__34582 = cljs.core.count.call(null,c__4461__auto__);
var G__34583 = (0);
seq__34568 = G__34580;
chunk__34569 = G__34581;
count__34570 = G__34582;
i__34571 = G__34583;
continue;
} else {
var map__34574 = cljs.core.first.call(null,seq__34568__$1);
var map__34574__$1 = (((((!((map__34574 == null))))?(((((map__34574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34574):map__34574);
var effect = map__34574__$1;
var ms = cljs.core.get.call(null,map__34574__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__34574__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__34568,chunk__34569,count__34570,i__34571,map__34574,map__34574__$1,effect,ms,dispatch,seq__34568__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__34568,chunk__34569,count__34570,i__34571,map__34574,map__34574__$1,effect,ms,dispatch,seq__34568__$1,temp__5720__auto__))
,ms);
}


var G__34584 = cljs.core.next.call(null,seq__34568__$1);
var G__34585 = null;
var G__34586 = (0);
var G__34587 = (0);
seq__34568 = G__34584;
chunk__34569 = G__34585;
count__34570 = G__34586;
i__34571 = G__34587;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__34588 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__34589 = null;
var count__34590 = (0);
var i__34591 = (0);
while(true){
if((i__34591 < count__34590)){
var event = cljs.core._nth.call(null,chunk__34589,i__34591);
re_frame.router.dispatch.call(null,event);


var G__34592 = seq__34588;
var G__34593 = chunk__34589;
var G__34594 = count__34590;
var G__34595 = (i__34591 + (1));
seq__34588 = G__34592;
chunk__34589 = G__34593;
count__34590 = G__34594;
i__34591 = G__34595;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34588);
if(temp__5720__auto__){
var seq__34588__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34588__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__34588__$1);
var G__34596 = cljs.core.chunk_rest.call(null,seq__34588__$1);
var G__34597 = c__4461__auto__;
var G__34598 = cljs.core.count.call(null,c__4461__auto__);
var G__34599 = (0);
seq__34588 = G__34596;
chunk__34589 = G__34597;
count__34590 = G__34598;
i__34591 = G__34599;
continue;
} else {
var event = cljs.core.first.call(null,seq__34588__$1);
re_frame.router.dispatch.call(null,event);


var G__34600 = cljs.core.next.call(null,seq__34588__$1);
var G__34601 = null;
var G__34602 = (0);
var G__34603 = (0);
seq__34588 = G__34600;
chunk__34589 = G__34601;
count__34590 = G__34602;
i__34591 = G__34603;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__34604 = cljs.core.seq.call(null,value);
var chunk__34605 = null;
var count__34606 = (0);
var i__34607 = (0);
while(true){
if((i__34607 < count__34606)){
var event = cljs.core._nth.call(null,chunk__34605,i__34607);
clear_event.call(null,event);


var G__34608 = seq__34604;
var G__34609 = chunk__34605;
var G__34610 = count__34606;
var G__34611 = (i__34607 + (1));
seq__34604 = G__34608;
chunk__34605 = G__34609;
count__34606 = G__34610;
i__34607 = G__34611;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34604);
if(temp__5720__auto__){
var seq__34604__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34604__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__34604__$1);
var G__34612 = cljs.core.chunk_rest.call(null,seq__34604__$1);
var G__34613 = c__4461__auto__;
var G__34614 = cljs.core.count.call(null,c__4461__auto__);
var G__34615 = (0);
seq__34604 = G__34612;
chunk__34605 = G__34613;
count__34606 = G__34614;
i__34607 = G__34615;
continue;
} else {
var event = cljs.core.first.call(null,seq__34604__$1);
clear_event.call(null,event);


var G__34616 = cljs.core.next.call(null,seq__34604__$1);
var G__34617 = null;
var G__34618 = (0);
var G__34619 = (0);
seq__34604 = G__34616;
chunk__34605 = G__34617;
count__34606 = G__34618;
i__34607 = G__34619;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1575052111291
