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
var _STAR_current_trace_STAR__orig_val__52038 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52039 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52039;

try{try{var seq__52040 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52041 = null;
var count__52042 = (0);
var i__52043 = (0);
while(true){
if((i__52043 < count__52042)){
var vec__52044 = cljs.core._nth.call(null,chunk__52041,i__52043);
var effect_key = cljs.core.nth.call(null,vec__52044,(0),null);
var effect_value = cljs.core.nth.call(null,vec__52044,(1),null);
var temp__5718__auto___52060 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___52060)){
var effect_fn_52061 = temp__5718__auto___52060;
effect_fn_52061.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__52062 = seq__52040;
var G__52063 = chunk__52041;
var G__52064 = count__52042;
var G__52065 = (i__52043 + (1));
seq__52040 = G__52062;
chunk__52041 = G__52063;
count__52042 = G__52064;
i__52043 = G__52065;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__52040);
if(temp__5720__auto__){
var seq__52040__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52040__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__52040__$1);
var G__52066 = cljs.core.chunk_rest.call(null,seq__52040__$1);
var G__52067 = c__4461__auto__;
var G__52068 = cljs.core.count.call(null,c__4461__auto__);
var G__52069 = (0);
seq__52040 = G__52066;
chunk__52041 = G__52067;
count__52042 = G__52068;
i__52043 = G__52069;
continue;
} else {
var vec__52047 = cljs.core.first.call(null,seq__52040__$1);
var effect_key = cljs.core.nth.call(null,vec__52047,(0),null);
var effect_value = cljs.core.nth.call(null,vec__52047,(1),null);
var temp__5718__auto___52070 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___52070)){
var effect_fn_52071 = temp__5718__auto___52070;
effect_fn_52071.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__52072 = cljs.core.next.call(null,seq__52040__$1);
var G__52073 = null;
var G__52074 = (0);
var G__52075 = (0);
seq__52040 = G__52072;
chunk__52041 = G__52073;
count__52042 = G__52074;
i__52043 = G__52075;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__34707__auto___52076 = re_frame.interop.now.call(null);
var duration__34708__auto___52077 = (end__34707__auto___52076 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34708__auto___52077,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__34707__auto___52076);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52038;
}} else {
var seq__52050 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52051 = null;
var count__52052 = (0);
var i__52053 = (0);
while(true){
if((i__52053 < count__52052)){
var vec__52054 = cljs.core._nth.call(null,chunk__52051,i__52053);
var effect_key = cljs.core.nth.call(null,vec__52054,(0),null);
var effect_value = cljs.core.nth.call(null,vec__52054,(1),null);
var temp__5718__auto___52078 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___52078)){
var effect_fn_52079 = temp__5718__auto___52078;
effect_fn_52079.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__52080 = seq__52050;
var G__52081 = chunk__52051;
var G__52082 = count__52052;
var G__52083 = (i__52053 + (1));
seq__52050 = G__52080;
chunk__52051 = G__52081;
count__52052 = G__52082;
i__52053 = G__52083;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__52050);
if(temp__5720__auto__){
var seq__52050__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52050__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__52050__$1);
var G__52084 = cljs.core.chunk_rest.call(null,seq__52050__$1);
var G__52085 = c__4461__auto__;
var G__52086 = cljs.core.count.call(null,c__4461__auto__);
var G__52087 = (0);
seq__52050 = G__52084;
chunk__52051 = G__52085;
count__52052 = G__52086;
i__52053 = G__52087;
continue;
} else {
var vec__52057 = cljs.core.first.call(null,seq__52050__$1);
var effect_key = cljs.core.nth.call(null,vec__52057,(0),null);
var effect_value = cljs.core.nth.call(null,vec__52057,(1),null);
var temp__5718__auto___52088 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___52088)){
var effect_fn_52089 = temp__5718__auto___52088;
effect_fn_52089.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__52090 = cljs.core.next.call(null,seq__52050__$1);
var G__52091 = null;
var G__52092 = (0);
var G__52093 = (0);
seq__52050 = G__52090;
chunk__52051 = G__52091;
count__52052 = G__52092;
i__52053 = G__52093;
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
var seq__52094 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__52095 = null;
var count__52096 = (0);
var i__52097 = (0);
while(true){
if((i__52097 < count__52096)){
var map__52098 = cljs.core._nth.call(null,chunk__52095,i__52097);
var map__52098__$1 = (((((!((map__52098 == null))))?(((((map__52098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52098):map__52098);
var effect = map__52098__$1;
var ms = cljs.core.get.call(null,map__52098__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__52098__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__52094,chunk__52095,count__52096,i__52097,map__52098,map__52098__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__52094,chunk__52095,count__52096,i__52097,map__52098,map__52098__$1,effect,ms,dispatch))
,ms);
}


var G__52102 = seq__52094;
var G__52103 = chunk__52095;
var G__52104 = count__52096;
var G__52105 = (i__52097 + (1));
seq__52094 = G__52102;
chunk__52095 = G__52103;
count__52096 = G__52104;
i__52097 = G__52105;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__52094);
if(temp__5720__auto__){
var seq__52094__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52094__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__52094__$1);
var G__52106 = cljs.core.chunk_rest.call(null,seq__52094__$1);
var G__52107 = c__4461__auto__;
var G__52108 = cljs.core.count.call(null,c__4461__auto__);
var G__52109 = (0);
seq__52094 = G__52106;
chunk__52095 = G__52107;
count__52096 = G__52108;
i__52097 = G__52109;
continue;
} else {
var map__52100 = cljs.core.first.call(null,seq__52094__$1);
var map__52100__$1 = (((((!((map__52100 == null))))?(((((map__52100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52100):map__52100);
var effect = map__52100__$1;
var ms = cljs.core.get.call(null,map__52100__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__52100__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__52094,chunk__52095,count__52096,i__52097,map__52100,map__52100__$1,effect,ms,dispatch,seq__52094__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__52094,chunk__52095,count__52096,i__52097,map__52100,map__52100__$1,effect,ms,dispatch,seq__52094__$1,temp__5720__auto__))
,ms);
}


var G__52110 = cljs.core.next.call(null,seq__52094__$1);
var G__52111 = null;
var G__52112 = (0);
var G__52113 = (0);
seq__52094 = G__52110;
chunk__52095 = G__52111;
count__52096 = G__52112;
i__52097 = G__52113;
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
var seq__52114 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__52115 = null;
var count__52116 = (0);
var i__52117 = (0);
while(true){
if((i__52117 < count__52116)){
var event = cljs.core._nth.call(null,chunk__52115,i__52117);
re_frame.router.dispatch.call(null,event);


var G__52118 = seq__52114;
var G__52119 = chunk__52115;
var G__52120 = count__52116;
var G__52121 = (i__52117 + (1));
seq__52114 = G__52118;
chunk__52115 = G__52119;
count__52116 = G__52120;
i__52117 = G__52121;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__52114);
if(temp__5720__auto__){
var seq__52114__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52114__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__52114__$1);
var G__52122 = cljs.core.chunk_rest.call(null,seq__52114__$1);
var G__52123 = c__4461__auto__;
var G__52124 = cljs.core.count.call(null,c__4461__auto__);
var G__52125 = (0);
seq__52114 = G__52122;
chunk__52115 = G__52123;
count__52116 = G__52124;
i__52117 = G__52125;
continue;
} else {
var event = cljs.core.first.call(null,seq__52114__$1);
re_frame.router.dispatch.call(null,event);


var G__52126 = cljs.core.next.call(null,seq__52114__$1);
var G__52127 = null;
var G__52128 = (0);
var G__52129 = (0);
seq__52114 = G__52126;
chunk__52115 = G__52127;
count__52116 = G__52128;
i__52117 = G__52129;
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
var seq__52130 = cljs.core.seq.call(null,value);
var chunk__52131 = null;
var count__52132 = (0);
var i__52133 = (0);
while(true){
if((i__52133 < count__52132)){
var event = cljs.core._nth.call(null,chunk__52131,i__52133);
clear_event.call(null,event);


var G__52134 = seq__52130;
var G__52135 = chunk__52131;
var G__52136 = count__52132;
var G__52137 = (i__52133 + (1));
seq__52130 = G__52134;
chunk__52131 = G__52135;
count__52132 = G__52136;
i__52133 = G__52137;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__52130);
if(temp__5720__auto__){
var seq__52130__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52130__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__52130__$1);
var G__52138 = cljs.core.chunk_rest.call(null,seq__52130__$1);
var G__52139 = c__4461__auto__;
var G__52140 = cljs.core.count.call(null,c__4461__auto__);
var G__52141 = (0);
seq__52130 = G__52138;
chunk__52131 = G__52139;
count__52132 = G__52140;
i__52133 = G__52141;
continue;
} else {
var event = cljs.core.first.call(null,seq__52130__$1);
clear_event.call(null,event);


var G__52142 = cljs.core.next.call(null,seq__52130__$1);
var G__52143 = null;
var G__52144 = (0);
var G__52145 = (0);
seq__52130 = G__52142;
chunk__52131 = G__52143;
count__52132 = G__52144;
i__52133 = G__52145;
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

//# sourceMappingURL=fx.js.map?rel=1575465437597
