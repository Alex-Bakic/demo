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
var _STAR_current_trace_STAR__orig_val__39901 = mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__39902 = mranderson048.re_frame.v0v10v6.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__39902;

try{try{var seq__39903 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__39904 = null;
var count__39905 = (0);
var i__39906 = (0);
while(true){
if((i__39906 < count__39905)){
var vec__39907 = cljs.core._nth.call(null,chunk__39904,i__39906);
var effect_key = cljs.core.nth.call(null,vec__39907,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39907,(1),null);
var temp__5718__auto___39923 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___39923)){
var effect_fn_39924 = temp__5718__auto___39923;
effect_fn_39924.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__39925 = seq__39903;
var G__39926 = chunk__39904;
var G__39927 = count__39905;
var G__39928 = (i__39906 + (1));
seq__39903 = G__39925;
chunk__39904 = G__39926;
count__39905 = G__39927;
i__39906 = G__39928;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__39903);
if(temp__5720__auto__){
var seq__39903__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39903__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__39903__$1);
var G__39929 = cljs.core.chunk_rest.call(null,seq__39903__$1);
var G__39930 = c__4461__auto__;
var G__39931 = cljs.core.count.call(null,c__4461__auto__);
var G__39932 = (0);
seq__39903 = G__39929;
chunk__39904 = G__39930;
count__39905 = G__39931;
i__39906 = G__39932;
continue;
} else {
var vec__39910 = cljs.core.first.call(null,seq__39903__$1);
var effect_key = cljs.core.nth.call(null,vec__39910,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39910,(1),null);
var temp__5718__auto___39933 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___39933)){
var effect_fn_39934 = temp__5718__auto___39933;
effect_fn_39934.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__39935 = cljs.core.next.call(null,seq__39903__$1);
var G__39936 = null;
var G__39937 = (0);
var G__39938 = (0);
seq__39903 = G__39935;
chunk__39904 = G__39936;
count__39905 = G__39937;
i__39906 = G__39938;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__37580__auto___39939 = mranderson048.re_frame.v0v10v6.re_frame.interop.now.call(null);
var duration__37581__auto___39940 = (end__37580__auto___39939 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37581__auto___39940,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v6.re_frame.interop.now.call(null)));

mranderson048.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__37580__auto___39939);
} else {
}
}}finally {mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__39901;
}} else {
var seq__39913 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__39914 = null;
var count__39915 = (0);
var i__39916 = (0);
while(true){
if((i__39916 < count__39915)){
var vec__39917 = cljs.core._nth.call(null,chunk__39914,i__39916);
var effect_key = cljs.core.nth.call(null,vec__39917,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39917,(1),null);
var temp__5718__auto___39941 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___39941)){
var effect_fn_39942 = temp__5718__auto___39941;
effect_fn_39942.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__39943 = seq__39913;
var G__39944 = chunk__39914;
var G__39945 = count__39915;
var G__39946 = (i__39916 + (1));
seq__39913 = G__39943;
chunk__39914 = G__39944;
count__39915 = G__39945;
i__39916 = G__39946;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__39913);
if(temp__5720__auto__){
var seq__39913__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39913__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__39913__$1);
var G__39947 = cljs.core.chunk_rest.call(null,seq__39913__$1);
var G__39948 = c__4461__auto__;
var G__39949 = cljs.core.count.call(null,c__4461__auto__);
var G__39950 = (0);
seq__39913 = G__39947;
chunk__39914 = G__39948;
count__39915 = G__39949;
i__39916 = G__39950;
continue;
} else {
var vec__39920 = cljs.core.first.call(null,seq__39913__$1);
var effect_key = cljs.core.nth.call(null,vec__39920,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39920,(1),null);
var temp__5718__auto___39951 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___39951)){
var effect_fn_39952 = temp__5718__auto___39951;
effect_fn_39952.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__39953 = cljs.core.next.call(null,seq__39913__$1);
var G__39954 = null;
var G__39955 = (0);
var G__39956 = (0);
seq__39913 = G__39953;
chunk__39914 = G__39954;
count__39915 = G__39955;
i__39916 = G__39956;
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
var seq__39957 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__39958 = null;
var count__39959 = (0);
var i__39960 = (0);
while(true){
if((i__39960 < count__39959)){
var map__39961 = cljs.core._nth.call(null,chunk__39958,i__39960);
var map__39961__$1 = (((((!((map__39961 == null))))?(((((map__39961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39961):map__39961);
var effect = map__39961__$1;
var ms = cljs.core.get.call(null,map__39961__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39961__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson048.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39957,chunk__39958,count__39959,i__39960,map__39961,map__39961__$1,effect,ms,dispatch){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router.dispatch.call(null,dispatch);
});})(seq__39957,chunk__39958,count__39959,i__39960,map__39961,map__39961__$1,effect,ms,dispatch))
,ms);
}


var G__39965 = seq__39957;
var G__39966 = chunk__39958;
var G__39967 = count__39959;
var G__39968 = (i__39960 + (1));
seq__39957 = G__39965;
chunk__39958 = G__39966;
count__39959 = G__39967;
i__39960 = G__39968;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__39957);
if(temp__5720__auto__){
var seq__39957__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39957__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__39957__$1);
var G__39969 = cljs.core.chunk_rest.call(null,seq__39957__$1);
var G__39970 = c__4461__auto__;
var G__39971 = cljs.core.count.call(null,c__4461__auto__);
var G__39972 = (0);
seq__39957 = G__39969;
chunk__39958 = G__39970;
count__39959 = G__39971;
i__39960 = G__39972;
continue;
} else {
var map__39963 = cljs.core.first.call(null,seq__39957__$1);
var map__39963__$1 = (((((!((map__39963 == null))))?(((((map__39963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39963):map__39963);
var effect = map__39963__$1;
var ms = cljs.core.get.call(null,map__39963__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39963__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson048.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39957,chunk__39958,count__39959,i__39960,map__39963,map__39963__$1,effect,ms,dispatch,seq__39957__$1,temp__5720__auto__){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router.dispatch.call(null,dispatch);
});})(seq__39957,chunk__39958,count__39959,i__39960,map__39963,map__39963__$1,effect,ms,dispatch,seq__39957__$1,temp__5720__auto__))
,ms);
}


var G__39973 = cljs.core.next.call(null,seq__39957__$1);
var G__39974 = null;
var G__39975 = (0);
var G__39976 = (0);
seq__39957 = G__39973;
chunk__39958 = G__39974;
count__39959 = G__39975;
i__39960 = G__39976;
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
var seq__39977 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__39978 = null;
var count__39979 = (0);
var i__39980 = (0);
while(true){
if((i__39980 < count__39979)){
var event = cljs.core._nth.call(null,chunk__39978,i__39980);
mranderson048.re_frame.v0v10v6.re_frame.router.dispatch.call(null,event);


var G__39981 = seq__39977;
var G__39982 = chunk__39978;
var G__39983 = count__39979;
var G__39984 = (i__39980 + (1));
seq__39977 = G__39981;
chunk__39978 = G__39982;
count__39979 = G__39983;
i__39980 = G__39984;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__39977);
if(temp__5720__auto__){
var seq__39977__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39977__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__39977__$1);
var G__39985 = cljs.core.chunk_rest.call(null,seq__39977__$1);
var G__39986 = c__4461__auto__;
var G__39987 = cljs.core.count.call(null,c__4461__auto__);
var G__39988 = (0);
seq__39977 = G__39985;
chunk__39978 = G__39986;
count__39979 = G__39987;
i__39980 = G__39988;
continue;
} else {
var event = cljs.core.first.call(null,seq__39977__$1);
mranderson048.re_frame.v0v10v6.re_frame.router.dispatch.call(null,event);


var G__39989 = cljs.core.next.call(null,seq__39977__$1);
var G__39990 = null;
var G__39991 = (0);
var G__39992 = (0);
seq__39977 = G__39989;
chunk__39978 = G__39990;
count__39979 = G__39991;
i__39980 = G__39992;
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
var seq__39993 = cljs.core.seq.call(null,value);
var chunk__39994 = null;
var count__39995 = (0);
var i__39996 = (0);
while(true){
if((i__39996 < count__39995)){
var event = cljs.core._nth.call(null,chunk__39994,i__39996);
clear_event.call(null,event);


var G__39997 = seq__39993;
var G__39998 = chunk__39994;
var G__39999 = count__39995;
var G__40000 = (i__39996 + (1));
seq__39993 = G__39997;
chunk__39994 = G__39998;
count__39995 = G__39999;
i__39996 = G__40000;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__39993);
if(temp__5720__auto__){
var seq__39993__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39993__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__39993__$1);
var G__40001 = cljs.core.chunk_rest.call(null,seq__39993__$1);
var G__40002 = c__4461__auto__;
var G__40003 = cljs.core.count.call(null,c__4461__auto__);
var G__40004 = (0);
seq__39993 = G__40001;
chunk__39994 = G__40002;
count__39995 = G__40003;
i__39996 = G__40004;
continue;
} else {
var event = cljs.core.first.call(null,seq__39993__$1);
clear_event.call(null,event);


var G__40005 = cljs.core.next.call(null,seq__39993__$1);
var G__40006 = null;
var G__40007 = (0);
var G__40008 = (0);
seq__39993 = G__40005;
chunk__39994 = G__40006;
count__39995 = G__40007;
i__39996 = G__40008;
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

//# sourceMappingURL=fx.js.map?rel=1575052414789
