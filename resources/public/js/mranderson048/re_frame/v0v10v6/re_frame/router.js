// Compiled by ClojureScript 1.10.439 {}
goog.provide('mranderson048.re_frame.v0v10v6.re_frame.router');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.events');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.loggers');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.trace');
mranderson048.re_frame.v0v10v6.re_frame.router.later_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816),(function (f){
return mranderson048.re_frame.v0v10v6.re_frame.interop.after_render.call(null,(function (){
return mranderson048.re_frame.v0v10v6.re_frame.interop.next_tick.call(null,f);
}));
}),new cljs.core.Keyword(null,"yield","yield",177875009),mranderson048.re_frame.v0v10v6.re_frame.interop.next_tick], null);

/**
 * @interface
 */
mranderson048.re_frame.v0v10v6.re_frame.router.IEventQueue = function(){};

mranderson048.re_frame.v0v10v6.re_frame.router.push = (function mranderson048$re_frame$v0v10v6$re_frame$router$push(this$,event){
if((((!((this$ == null)))) && ((!((this$.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$push$arity$2 == null)))))){
return this$.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$push$arity$2(this$,event);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (mranderson048.re_frame.v0v10v6.re_frame.router.push[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$,event);
} else {
var m__4348__auto____$1 = (mranderson048.re_frame.v0v10v6.re_frame.router.push["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.push",this$);
}
}
}
});

mranderson048.re_frame.v0v10v6.re_frame.router.add_post_event_callback = (function mranderson048$re_frame$v0v10v6$re_frame$router$add_post_event_callback(this$,id,callack){
if((((!((this$ == null)))) && ((!((this$.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$add_post_event_callback$arity$3 == null)))))){
return this$.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$add_post_event_callback$arity$3(this$,id,callack);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (mranderson048.re_frame.v0v10v6.re_frame.router.add_post_event_callback[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$,id,callack);
} else {
var m__4348__auto____$1 = (mranderson048.re_frame.v0v10v6.re_frame.router.add_post_event_callback["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,id,callack);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.add-post-event-callback",this$);
}
}
}
});

mranderson048.re_frame.v0v10v6.re_frame.router.remove_post_event_callback = (function mranderson048$re_frame$v0v10v6$re_frame$router$remove_post_event_callback(this$,f){
if((((!((this$ == null)))) && ((!((this$.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$remove_post_event_callback$arity$2 == null)))))){
return this$.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$remove_post_event_callback$arity$2(this$,f);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (mranderson048.re_frame.v0v10v6.re_frame.router.remove_post_event_callback[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$,f);
} else {
var m__4348__auto____$1 = (mranderson048.re_frame.v0v10v6.re_frame.router.remove_post_event_callback["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,f);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.remove-post-event-callback",this$);
}
}
}
});

mranderson048.re_frame.v0v10v6.re_frame.router.purge = (function mranderson048$re_frame$v0v10v6$re_frame$router$purge(this$){
if((((!((this$ == null)))) && ((!((this$.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$purge$arity$1 == null)))))){
return this$.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$purge$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (mranderson048.re_frame.v0v10v6.re_frame.router.purge[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (mranderson048.re_frame.v0v10v6.re_frame.router.purge["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.purge",this$);
}
}
}
});

mranderson048.re_frame.v0v10v6.re_frame.router._fsm_trigger = (function mranderson048$re_frame$v0v10v6$re_frame$router$_fsm_trigger(this$,trigger,arg){
if((((!((this$ == null)))) && ((!((this$.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$_fsm_trigger$arity$3 == null)))))){
return this$.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$_fsm_trigger$arity$3(this$,trigger,arg);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (mranderson048.re_frame.v0v10v6.re_frame.router._fsm_trigger[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$,trigger,arg);
} else {
var m__4348__auto____$1 = (mranderson048.re_frame.v0v10v6.re_frame.router._fsm_trigger["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,trigger,arg);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-fsm-trigger",this$);
}
}
}
});

mranderson048.re_frame.v0v10v6.re_frame.router._add_event = (function mranderson048$re_frame$v0v10v6$re_frame$router$_add_event(this$,event){
if((((!((this$ == null)))) && ((!((this$.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$_add_event$arity$2 == null)))))){
return this$.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$_add_event$arity$2(this$,event);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (mranderson048.re_frame.v0v10v6.re_frame.router._add_event[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$,event);
} else {
var m__4348__auto____$1 = (mranderson048.re_frame.v0v10v6.re_frame.router._add_event["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-add-event",this$);
}
}
}
});

mranderson048.re_frame.v0v10v6.re_frame.router._process_1st_event_in_queue = (function mranderson048$re_frame$v0v10v6$re_frame$router$_process_1st_event_in_queue(this$){
if((((!((this$ == null)))) && ((!((this$.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 == null)))))){
return this$.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (mranderson048.re_frame.v0v10v6.re_frame.router._process_1st_event_in_queue[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (mranderson048.re_frame.v0v10v6.re_frame.router._process_1st_event_in_queue["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-process-1st-event-in-queue",this$);
}
}
}
});

mranderson048.re_frame.v0v10v6.re_frame.router._run_next_tick = (function mranderson048$re_frame$v0v10v6$re_frame$router$_run_next_tick(this$){
if((((!((this$ == null)))) && ((!((this$.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$_run_next_tick$arity$1 == null)))))){
return this$.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$_run_next_tick$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (mranderson048.re_frame.v0v10v6.re_frame.router._run_next_tick[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (mranderson048.re_frame.v0v10v6.re_frame.router._run_next_tick["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-run-next-tick",this$);
}
}
}
});

mranderson048.re_frame.v0v10v6.re_frame.router._run_queue = (function mranderson048$re_frame$v0v10v6$re_frame$router$_run_queue(this$){
if((((!((this$ == null)))) && ((!((this$.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$_run_queue$arity$1 == null)))))){
return this$.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$_run_queue$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (mranderson048.re_frame.v0v10v6.re_frame.router._run_queue[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (mranderson048.re_frame.v0v10v6.re_frame.router._run_queue["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-run-queue",this$);
}
}
}
});

mranderson048.re_frame.v0v10v6.re_frame.router._exception = (function mranderson048$re_frame$v0v10v6$re_frame$router$_exception(this$,ex){
if((((!((this$ == null)))) && ((!((this$.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$_exception$arity$2 == null)))))){
return this$.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$_exception$arity$2(this$,ex);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (mranderson048.re_frame.v0v10v6.re_frame.router._exception[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$,ex);
} else {
var m__4348__auto____$1 = (mranderson048.re_frame.v0v10v6.re_frame.router._exception["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,ex);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-exception",this$);
}
}
}
});

mranderson048.re_frame.v0v10v6.re_frame.router._pause = (function mranderson048$re_frame$v0v10v6$re_frame$router$_pause(this$,later_fn){
if((((!((this$ == null)))) && ((!((this$.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$_pause$arity$2 == null)))))){
return this$.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$_pause$arity$2(this$,later_fn);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (mranderson048.re_frame.v0v10v6.re_frame.router._pause[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$,later_fn);
} else {
var m__4348__auto____$1 = (mranderson048.re_frame.v0v10v6.re_frame.router._pause["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,later_fn);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-pause",this$);
}
}
}
});

mranderson048.re_frame.v0v10v6.re_frame.router._resume = (function mranderson048$re_frame$v0v10v6$re_frame$router$_resume(this$){
if((((!((this$ == null)))) && ((!((this$.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$_resume$arity$1 == null)))))){
return this$.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$_resume$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (mranderson048.re_frame.v0v10v6.re_frame.router._resume[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (mranderson048.re_frame.v0v10v6.re_frame.router._resume["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-resume",this$);
}
}
}
});

mranderson048.re_frame.v0v10v6.re_frame.router._call_post_event_callbacks = (function mranderson048$re_frame$v0v10v6$re_frame$router$_call_post_event_callbacks(this$,event){
if((((!((this$ == null)))) && ((!((this$.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 == null)))))){
return this$.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(this$,event);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (mranderson048.re_frame.v0v10v6.re_frame.router._call_post_event_callbacks[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$,event);
} else {
var m__4348__auto____$1 = (mranderson048.re_frame.v0v10v6.re_frame.router._call_post_event_callbacks["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-call-post-event-callbacks",this$);
}
}
}
});


/**
* @constructor
 * @implements {mranderson048.re_frame.v0v10v6.re_frame.router.IEventQueue}
*/
mranderson048.re_frame.v0v10v6.re_frame.router.EventQueue = (function (fsm_state,queue,post_event_callback_fns){
this.fsm_state = fsm_state;
this.queue = queue;
this.post_event_callback_fns = post_event_callback_fns;
});
mranderson048.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$ = cljs.core.PROTOCOL_SENTINEL;

mranderson048.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$_run_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var n = cljs.core.count.call(null,self__.queue);
while(true){
if((n === (0))){
return mranderson048.re_frame.v0v10v6.re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"finish-run","finish-run",753148477),null);
} else {
var temp__5718__auto__ = cljs.core.some.call(null,mranderson048.re_frame.v0v10v6.re_frame.router.later_fns,cljs.core.keys.call(null,cljs.core.meta.call(null,cljs.core.peek.call(null,self__.queue))));
if(cljs.core.truth_(temp__5718__auto__)){
var later_fn = temp__5718__auto__;
return mranderson048.re_frame.v0v10v6.re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"pause","pause",-2095325672),later_fn);
} else {
mranderson048.re_frame.v0v10v6.re_frame.router._process_1st_event_in_queue.call(null,this$__$1);

var G__39882 = (n - (1));
n = G__39882;
continue;
}
}
break;
}
});

mranderson048.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$remove_post_event_callback$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.contains_QMARK_.call(null,self__.post_event_callback_fns,id)))){
return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: could not remove post event call back with id:",id);
} else {
return self__.post_event_callback_fns = cljs.core.dissoc.call(null,self__.post_event_callback_fns,id);
}
});

mranderson048.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$_add_event$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
return self__.queue = cljs.core.conj.call(null,self__.queue,event);
});

mranderson048.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$_resume$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
mranderson048.re_frame.v0v10v6.re_frame.router._process_1st_event_in_queue.call(null,this$__$1);

return mranderson048.re_frame.v0v10v6.re_frame.router._run_queue.call(null,this$__$1);
});

mranderson048.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$push$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
return mranderson048.re_frame.v0v10v6.re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"add-event","add-event",938429088),event);
});

mranderson048.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$_run_next_tick$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return mranderson048.re_frame.v0v10v6.re_frame.interop.next_tick.call(null,((function (this$__$1){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027),null);
});})(this$__$1))
);
});

mranderson048.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$_fsm_trigger$arity$3 = (function (this$,trigger,arg){
var self__ = this;
var this$__$1 = this;
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__39867 = mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__39868 = mranderson048.re_frame.v0v10v6.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("mranderson048.re-frame.v0v10v6.re-frame.router","fsm-trigger","mranderson048.re-frame.v0v10v6.re-frame.router/fsm-trigger",809842699)], null));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__39868;

try{try{var vec__39869 = (function (){var G__39872 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__39872)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__39872,_STAR_current_trace_STAR__orig_val__39867,_STAR_current_trace_STAR__temp_val__39868,this$__$1){
return (function (){
mranderson048.re_frame.v0v10v6.re_frame.router._add_event.call(null,this$__$1,arg);

return mranderson048.re_frame.v0v10v6.re_frame.router._run_next_tick.call(null,this$__$1);
});})(G__39872,_STAR_current_trace_STAR__orig_val__39867,_STAR_current_trace_STAR__temp_val__39868,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),G__39872)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),((function (G__39872,_STAR_current_trace_STAR__orig_val__39867,_STAR_current_trace_STAR__temp_val__39868,this$__$1){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router._exception.call(null,this$__$1,arg);
});})(G__39872,_STAR_current_trace_STAR__orig_val__39867,_STAR_current_trace_STAR__temp_val__39868,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"finish-run","finish-run",753148477)], null),G__39872)){
if(cljs.core.empty_QMARK_.call(null,self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__39872,_STAR_current_trace_STAR__orig_val__39867,_STAR_current_trace_STAR__temp_val__39868,this$__$1){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router._run_next_tick.call(null,this$__$1);
});})(G__39872,_STAR_current_trace_STAR__orig_val__39867,_STAR_current_trace_STAR__temp_val__39868,this$__$1))
], null);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"pause","pause",-2095325672)], null),G__39872)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),((function (G__39872,_STAR_current_trace_STAR__orig_val__39867,_STAR_current_trace_STAR__temp_val__39868,this$__$1){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router._pause.call(null,this$__$1,arg);
});})(G__39872,_STAR_current_trace_STAR__orig_val__39867,_STAR_current_trace_STAR__temp_val__39868,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"resume","resume",-118572261)], null),G__39872)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__39872,_STAR_current_trace_STAR__orig_val__39867,_STAR_current_trace_STAR__temp_val__39868,this$__$1){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router._resume.call(null,this$__$1);
});})(G__39872,_STAR_current_trace_STAR__orig_val__39867,_STAR_current_trace_STAR__temp_val__39868,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027)], null),G__39872)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__39872,_STAR_current_trace_STAR__orig_val__39867,_STAR_current_trace_STAR__temp_val__39868,this$__$1){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router._run_queue.call(null,this$__$1);
});})(G__39872,_STAR_current_trace_STAR__orig_val__39867,_STAR_current_trace_STAR__temp_val__39868,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__39872)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),((function (G__39872,_STAR_current_trace_STAR__orig_val__39867,_STAR_current_trace_STAR__temp_val__39868,this$__$1){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__39872,_STAR_current_trace_STAR__orig_val__39867,_STAR_current_trace_STAR__temp_val__39868,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__39872)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__39872,_STAR_current_trace_STAR__orig_val__39867,_STAR_current_trace_STAR__temp_val__39868,this$__$1){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__39872,_STAR_current_trace_STAR__orig_val__39867,_STAR_current_trace_STAR__temp_val__39868,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__39872)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__39872,_STAR_current_trace_STAR__orig_val__39867,_STAR_current_trace_STAR__temp_val__39868,this$__$1){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__39872,_STAR_current_trace_STAR__orig_val__39867,_STAR_current_trace_STAR__temp_val__39868,this$__$1))
], null);
} else {
throw cljs.core.ex_info.call(null,["re-frame: router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fsm-state","fsm-state",1656310533),self__.fsm_state,new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.call(null,vec__39869,(0),null);
var action_fn = cljs.core.nth.call(null,vec__39869,(1),null);
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__37582__auto___39883 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__37582__auto___39883;

} else {
}

self__.fsm_state = new_fsm_state;

if(cljs.core.truth_(action_fn)){
return action_fn.call(null);
} else {
return null;
}
}finally {if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__37580__auto___39884 = mranderson048.re_frame.v0v10v6.re_frame.interop.now.call(null);
var duration__37581__auto___39885 = (end__37580__auto___39884 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37581__auto___39885,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v6.re_frame.interop.now.call(null)));

mranderson048.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__37580__auto___39884);
} else {
}
}}finally {mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__39867;
}} else {
var vec__39873 = (function (){var G__39876 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__39876)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__39876,this$__$1){
return (function (){
mranderson048.re_frame.v0v10v6.re_frame.router._add_event.call(null,this$__$1,arg);

return mranderson048.re_frame.v0v10v6.re_frame.router._run_next_tick.call(null,this$__$1);
});})(G__39876,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),G__39876)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),((function (G__39876,this$__$1){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router._exception.call(null,this$__$1,arg);
});})(G__39876,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"finish-run","finish-run",753148477)], null),G__39876)){
if(cljs.core.empty_QMARK_.call(null,self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__39876,this$__$1){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router._run_next_tick.call(null,this$__$1);
});})(G__39876,this$__$1))
], null);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"pause","pause",-2095325672)], null),G__39876)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),((function (G__39876,this$__$1){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router._pause.call(null,this$__$1,arg);
});})(G__39876,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"resume","resume",-118572261)], null),G__39876)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__39876,this$__$1){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router._resume.call(null,this$__$1);
});})(G__39876,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027)], null),G__39876)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__39876,this$__$1){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router._run_queue.call(null,this$__$1);
});})(G__39876,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__39876)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),((function (G__39876,this$__$1){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__39876,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__39876)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__39876,this$__$1){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__39876,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__39876)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__39876,this$__$1){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__39876,this$__$1))
], null);
} else {
throw cljs.core.ex_info.call(null,["re-frame: router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fsm-state","fsm-state",1656310533),self__.fsm_state,new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.call(null,vec__39873,(0),null);
var action_fn = cljs.core.nth.call(null,vec__39873,(1),null);
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__37582__auto___39886 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__37582__auto___39886;

} else {
}

self__.fsm_state = new_fsm_state;

if(cljs.core.truth_(action_fn)){
return action_fn.call(null);
} else {
return null;
}
}
});

mranderson048.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$_pause$arity$2 = (function (this$,later_fn){
var self__ = this;
var this$__$1 = this;
return later_fn.call(null,((function (this$__$1){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"resume","resume",-118572261),null);
});})(this$__$1))
);
});

mranderson048.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$add_post_event_callback$arity$3 = (function (_,id,callback_fn){
var self__ = this;
var ___$1 = this;
if(cljs.core.contains_QMARK_.call(null,self__.post_event_callback_fns,id)){
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: overwriting existing post event call back with id:",id);
} else {
}

return self__.post_event_callback_fns = cljs.core.assoc.call(null,self__.post_event_callback_fns,id,callback_fn);
});

mranderson048.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_v = cljs.core.peek.call(null,self__.queue);
try{mranderson048.re_frame.v0v10v6.re_frame.events.handle.call(null,event_v);

self__.queue = cljs.core.pop.call(null,self__.queue);

return mranderson048.re_frame.v0v10v6.re_frame.router._call_post_event_callbacks.call(null,this$__$1,event_v);
}catch (e39877){var ex = e39877;
return mranderson048.re_frame.v0v10v6.re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"exception","exception",-335277064),ex);
}});

mranderson048.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 = (function (_,event_v){
var self__ = this;
var ___$1 = this;
var seq__39878 = cljs.core.seq.call(null,cljs.core.vals.call(null,self__.post_event_callback_fns));
var chunk__39879 = null;
var count__39880 = (0);
var i__39881 = (0);
while(true){
if((i__39881 < count__39880)){
var callback = cljs.core._nth.call(null,chunk__39879,i__39881);
callback.call(null,event_v,self__.queue);


var G__39887 = seq__39878;
var G__39888 = chunk__39879;
var G__39889 = count__39880;
var G__39890 = (i__39881 + (1));
seq__39878 = G__39887;
chunk__39879 = G__39888;
count__39880 = G__39889;
i__39881 = G__39890;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__39878);
if(temp__5720__auto__){
var seq__39878__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39878__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__39878__$1);
var G__39891 = cljs.core.chunk_rest.call(null,seq__39878__$1);
var G__39892 = c__4461__auto__;
var G__39893 = cljs.core.count.call(null,c__4461__auto__);
var G__39894 = (0);
seq__39878 = G__39891;
chunk__39879 = G__39892;
count__39880 = G__39893;
i__39881 = G__39894;
continue;
} else {
var callback = cljs.core.first.call(null,seq__39878__$1);
callback.call(null,event_v,self__.queue);


var G__39895 = cljs.core.next.call(null,seq__39878__$1);
var G__39896 = null;
var G__39897 = (0);
var G__39898 = (0);
seq__39878 = G__39895;
chunk__39879 = G__39896;
count__39880 = G__39897;
i__39881 = G__39898;
continue;
}
} else {
return null;
}
}
break;
}
});

mranderson048.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$purge$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.queue = mranderson048.re_frame.v0v10v6.re_frame.interop.empty_queue;
});

mranderson048.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.mranderson048$re_frame$v0v10v6$re_frame$router$IEventQueue$_exception$arity$2 = (function (this$,ex){
var self__ = this;
var this$__$1 = this;
mranderson048.re_frame.v0v10v6.re_frame.router.purge.call(null,this$__$1);

throw ex;
});

mranderson048.re_frame.v0v10v6.re_frame.router.EventQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fsm-state","fsm-state",-998125236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"queue","queue",-1198599890,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"post-event-callback-fns","post-event-callback-fns",-297038335,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson048.re_frame.v0v10v6.re_frame.router.EventQueue.cljs$lang$type = true;

mranderson048.re_frame.v0v10v6.re_frame.router.EventQueue.cljs$lang$ctorStr = "mranderson048.re-frame.v0v10v6.re-frame.router/EventQueue";

mranderson048.re_frame.v0v10v6.re_frame.router.EventQueue.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"mranderson048.re-frame.v0v10v6.re-frame.router/EventQueue");
});

/**
 * Positional factory function for mranderson048.re-frame.v0v10v6.re-frame.router/EventQueue.
 */
mranderson048.re_frame.v0v10v6.re_frame.router.__GT_EventQueue = (function mranderson048$re_frame$v0v10v6$re_frame$router$__GT_EventQueue(fsm_state,queue,post_event_callback_fns){
return (new mranderson048.re_frame.v0v10v6.re_frame.router.EventQueue(fsm_state,queue,post_event_callback_fns));
});

mranderson048.re_frame.v0v10v6.re_frame.router.event_queue = mranderson048.re_frame.v0v10v6.re_frame.router.__GT_EventQueue.call(null,new cljs.core.Keyword(null,"idle","idle",-2007156861),mranderson048.re_frame.v0v10v6.re_frame.interop.empty_queue,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Enqueue `event` for processing by event handling machinery.
 * 
 *   `event` is a vector of length >= 1. The 1st element identifies the kind of event.
 * 
 *   Note: the event handler is not run immediately - it is not run
 *   synchronously. It will likely be run 'very soon', although it may be
 *   added to the end of a FIFO queue which already contain events.
 * 
 *   Usage:
 *   (dispatch [:order-pizza {:supreme 2 :meatlovers 1 :veg 1})
 */
mranderson048.re_frame.v0v10v6.re_frame.router.dispatch = (function mranderson048$re_frame$v0v10v6$re_frame$router$dispatch(event){
if((event == null)){
throw cljs.core.ex_info.call(null,"re-frame: you called \"dispatch\" without an event vector.",cljs.core.PersistentArrayMap.EMPTY);
} else {
mranderson048.re_frame.v0v10v6.re_frame.router.push.call(null,mranderson048.re_frame.v0v10v6.re_frame.router.event_queue,event);
}

return null;
});
/**
 * Synchronously (immediately) process `event`. Do not queue.
 * 
 *   Generally, don't use this. Instead use `dispatch`. It is an error
 *   to use `dispatch-sync` within an event handler.
 * 
 *   Useful when any delay in processing is a problem:
 *   1. the `:on-change` handler of a text field where we are expecting fast typing.
 *   2  when initialising your app - see 'main' in todomvc examples
 *   3. in a unit test where we don't want the action 'later'
 * 
 *   Usage:
 *   (dispatch-sync [:sing :falsetto 634])
 */
mranderson048.re_frame.v0v10v6.re_frame.router.dispatch_sync = (function mranderson048$re_frame$v0v10v6$re_frame$router$dispatch_sync(event_v){
mranderson048.re_frame.v0v10v6.re_frame.events.handle.call(null,event_v);

mranderson048.re_frame.v0v10v6.re_frame.router._call_post_event_callbacks.call(null,mranderson048.re_frame.v0v10v6.re_frame.router.event_queue,event_v);

return null;
});

//# sourceMappingURL=router.js.map?rel=1575052414728
