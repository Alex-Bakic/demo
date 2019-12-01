// Compiled by ClojureScript 1.10.439 {}
goog.provide('mranderson048.reagent.v0v7v0.reagent.ratom');
goog.require('cljs.core');
goog.require('mranderson048.reagent.v0v7v0.reagent.impl.util');
goog.require('mranderson048.reagent.v0v7v0.reagent.debug');
goog.require('mranderson048.reagent.v0v7v0.reagent.impl.batching');
goog.require('clojure.set');
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0 !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.ratom !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.ratom.debug !== 'undefined')){
} else {
mranderson048.reagent.v0v7v0.reagent.ratom.debug = false;
}
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0 !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.ratom !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.ratom.generation !== 'undefined')){
} else {
mranderson048.reagent.v0v7v0.reagent.ratom.generation = (0);
}
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0 !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.ratom !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.ratom._running !== 'undefined')){
} else {
mranderson048.reagent.v0v7v0.reagent.ratom._running = cljs.core.atom.call(null,(0));
}
mranderson048.reagent.v0v7v0.reagent.ratom.reactive_QMARK_ = (function mranderson048$reagent$v0v7v0$reagent$ratom$reactive_QMARK_(){
return (!((mranderson048.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ == null)));
});
mranderson048.reagent.v0v7v0.reagent.ratom.running = (function mranderson048$reagent$v0v7v0$reagent$ratom$running(){
return cljs.core.deref.call(null,mranderson048.reagent.v0v7v0.reagent.ratom._running);
});
mranderson048.reagent.v0v7v0.reagent.ratom.arr_len = (function mranderson048$reagent$v0v7v0$reagent$ratom$arr_len(x){
if((x == null)){
return (0);
} else {
return x.length;
}
});
mranderson048.reagent.v0v7v0.reagent.ratom.arr_eq = (function mranderson048$reagent$v0v7v0$reagent$ratom$arr_eq(x,y){
var len = mranderson048.reagent.v0v7v0.reagent.ratom.arr_len.call(null,x);
var and__4036__auto__ = (len === mranderson048.reagent.v0v7v0.reagent.ratom.arr_len.call(null,y));
if(and__4036__auto__){
var i = (0);
while(true){
var or__4047__auto__ = (i === len);
if(or__4047__auto__){
return or__4047__auto__;
} else {
if(((x[i]) === (y[i]))){
var G__37156 = (i + (1));
i = G__37156;
continue;
} else {
return false;
}
}
break;
}
} else {
return and__4036__auto__;
}
});
mranderson048.reagent.v0v7v0.reagent.ratom.in_context = (function mranderson048$reagent$v0v7v0$reagent$ratom$in_context(obj,f){
var _STAR_ratom_context_STAR__orig_val__37157 = mranderson048.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__37158 = obj;
mranderson048.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__37158;

try{return f.call(null);
}finally {mranderson048.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__37157;
}});
mranderson048.reagent.v0v7v0.reagent.ratom.deref_capture = (function mranderson048$reagent$v0v7v0$reagent$ratom$deref_capture(f,r){
r.captured = null;

r.ratomGeneration = mranderson048.reagent.v0v7v0.reagent.ratom.generation = (mranderson048.reagent.v0v7v0.reagent.ratom.generation + (1));


var res = mranderson048.reagent.v0v7v0.reagent.ratom.in_context.call(null,r,f);
var c = r.captured;
r.dirty_QMARK_ = false;

if(mranderson048.reagent.v0v7v0.reagent.ratom.arr_eq.call(null,c,r.watching)){
} else {
r._update_watching(c);
}

return res;
});
mranderson048.reagent.v0v7v0.reagent.ratom.notify_deref_watcher_BANG_ = (function mranderson048$reagent$v0v7v0$reagent$ratom$notify_deref_watcher_BANG_(derefed){
var temp__5724__auto__ = mranderson048.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto__ == null)){
return null;
} else {
var r = temp__5724__auto__;
var c = r.captured;
if((c == null)){
return r.captured = [derefed];
} else {
return c.push(derefed);
}
}
});
mranderson048.reagent.v0v7v0.reagent.ratom.check_watches = (function mranderson048$reagent$v0v7v0$reagent$ratom$check_watches(old,new$){
if(mranderson048.reagent.v0v7v0.reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.ratom._running,cljs.core._PLUS_,(cljs.core.count.call(null,new$) - cljs.core.count.call(null,old)));
} else {
}

return new$;
});
mranderson048.reagent.v0v7v0.reagent.ratom.add_w = (function mranderson048$reagent$v0v7v0$reagent$ratom$add_w(this$,key,f){
var w = this$.watches;
this$.watches = mranderson048.reagent.v0v7v0.reagent.ratom.check_watches.call(null,w,cljs.core.assoc.call(null,w,key,f));

return this$.watchesArr = null;
});
mranderson048.reagent.v0v7v0.reagent.ratom.remove_w = (function mranderson048$reagent$v0v7v0$reagent$ratom$remove_w(this$,key){
var w = this$.watches;
this$.watches = mranderson048.reagent.v0v7v0.reagent.ratom.check_watches.call(null,w,cljs.core.dissoc.call(null,w,key));

return this$.watchesArr = null;
});
mranderson048.reagent.v0v7v0.reagent.ratom.notify_w = (function mranderson048$reagent$v0v7v0$reagent$ratom$notify_w(this$,old,new$){
var w = this$.watchesArr;
var a = (((w == null))?this$.watchesArr = cljs.core.reduce_kv.call(null,((function (w){
return (function (p1__37159_SHARP_,p2__37160_SHARP_,p3__37161_SHARP_){
var G__37162 = p1__37159_SHARP_;
G__37162.push(p2__37160_SHARP_);

G__37162.push(p3__37161_SHARP_);

return G__37162;
});})(w))
,[],this$.watches):w);
var len = a.length;
var i = (0);
while(true){
if((i < len)){
var k_37163 = (a[i]);
var f_37164 = (a[(i + (1))]);
f_37164.call(null,k_37163,this$,old,new$);

var G__37165 = ((2) + i);
i = G__37165;
continue;
} else {
return null;
}
break;
}
});
mranderson048.reagent.v0v7v0.reagent.ratom.pr_atom = (function mranderson048$reagent$v0v7v0$reagent$ratom$pr_atom(a,writer,opts,s){
cljs.core._write.call(null,writer,["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''));

cljs.core.pr_writer.call(null,(function (){var _STAR_ratom_context_STAR__orig_val__37166 = mranderson048.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__37167 = null;
mranderson048.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__37167;

try{return cljs.core._deref.call(null,a);
}finally {mranderson048.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__37166;
}})(),writer,opts);

return cljs.core._write.call(null,writer,">");
});
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0 !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.ratom !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.ratom.rea_queue !== 'undefined')){
} else {
mranderson048.reagent.v0v7v0.reagent.ratom.rea_queue = null;
}
mranderson048.reagent.v0v7v0.reagent.ratom.rea_enqueue = (function mranderson048$reagent$v0v7v0$reagent$ratom$rea_enqueue(r){
if((mranderson048.reagent.v0v7v0.reagent.ratom.rea_queue == null)){
mranderson048.reagent.v0v7v0.reagent.ratom.rea_queue = [];

mranderson048.reagent.v0v7v0.reagent.impl.batching.schedule.call(null);
} else {
}

return mranderson048.reagent.v0v7v0.reagent.ratom.rea_queue.push(r);
});
mranderson048.reagent.v0v7v0.reagent.ratom.flush_BANG_ = (function mranderson048$reagent$v0v7v0$reagent$ratom$flush_BANG_(){
while(true){
var q = mranderson048.reagent.v0v7v0.reagent.ratom.rea_queue;
if((q == null)){
return null;
} else {
mranderson048.reagent.v0v7v0.reagent.ratom.rea_queue = null;

var n__4518__auto___37168 = q.length;
var i_37169 = (0);
while(true){
if((i_37169 < n__4518__auto___37168)){
(q[i_37169])._queued_run();

var G__37170 = (i_37169 + (1));
i_37169 = G__37170;
continue;
} else {
}
break;
}

continue;
}
break;
}
});
mranderson048.reagent.v0v7v0.reagent.impl.batching.ratom_flush = mranderson048.reagent.v0v7v0.reagent.ratom.flush_BANG_;

/**
 * @interface
 */
mranderson048.reagent.v0v7v0.reagent.ratom.IReactiveAtom = function(){};


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {mranderson048.reagent.v0v7v0.reagent.ratom.IReactiveAtom}
*/
mranderson048.reagent.v0v7v0.reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
mranderson048.reagent.v0v7v0.reagent.ratom.RAtom.prototype.mranderson048$reagent$v0v7v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

mranderson048.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson048.reagent.v0v7v0.reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Atom:");
});

mranderson048.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

mranderson048.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

mranderson048.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

mranderson048.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error(["Assert failed: ","Validator rejected reference state","\n","(validator new-value)"].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
mranderson048.reagent.v0v7v0.reagent.ratom.notify_w.call(null,a__$1,old_value,new_value);
}

return new_value;
});

mranderson048.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

mranderson048.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

mranderson048.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

mranderson048.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

mranderson048.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v7v0.reagent.ratom.notify_w.call(null,this$__$1,old,new$);
});

mranderson048.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v7v0.reagent.ratom.add_w.call(null,this$__$1,key,f);
});

mranderson048.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v7v0.reagent.ratom.remove_w.call(null,this$__$1,key);
});

mranderson048.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
mranderson048.reagent.v0v7v0.reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
});

mranderson048.reagent.v0v7v0.reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson048.reagent.v0v7v0.reagent.ratom.RAtom.cljs$lang$type = true;

mranderson048.reagent.v0v7v0.reagent.ratom.RAtom.cljs$lang$ctorStr = "mranderson048.reagent.v0v7v0.reagent.ratom/RAtom";

mranderson048.reagent.v0v7v0.reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"mranderson048.reagent.v0v7v0.reagent.ratom/RAtom");
});

/**
 * Positional factory function for mranderson048.reagent.v0v7v0.reagent.ratom/RAtom.
 */
mranderson048.reagent.v0v7v0.reagent.ratom.__GT_RAtom = (function mranderson048$reagent$v0v7v0$reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new mranderson048.reagent.v0v7v0.reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
mranderson048.reagent.v0v7v0.reagent.ratom.atom = (function mranderson048$reagent$v0v7v0$reagent$ratom$atom(var_args){
var G__37174 = arguments.length;
switch (G__37174) {
case 1:
return mranderson048.reagent.v0v7v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4662__auto__ = [];
var len__4641__auto___37179 = arguments.length;
var i__4642__auto___37180 = (0);
while(true){
if((i__4642__auto___37180 < len__4641__auto___37179)){
args_arr__4662__auto__.push((arguments[i__4642__auto___37180]));

var G__37181 = (i__4642__auto___37180 + (1));
i__4642__auto___37180 = G__37181;
continue;
} else {
}
break;
}

var argseq__4663__auto__ = (new cljs.core.IndexedSeq(args_arr__4662__auto__.slice((1)),(0),null));
return mranderson048.reagent.v0v7v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4663__auto__);

}
});

mranderson048.reagent.v0v7v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return mranderson048.reagent.v0v7v0.reagent.ratom.__GT_RAtom.call(null,x,null,null,null);
});

mranderson048.reagent.v0v7v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__37175){
var map__37176 = p__37175;
var map__37176__$1 = (((((!((map__37176 == null))))?(((((map__37176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37176):map__37176);
var meta = cljs.core.get.call(null,map__37176__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var validator = cljs.core.get.call(null,map__37176__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
return mranderson048.reagent.v0v7v0.reagent.ratom.__GT_RAtom.call(null,x,meta,validator,null);
});

/** @this {Function} */
mranderson048.reagent.v0v7v0.reagent.ratom.atom.cljs$lang$applyTo = (function (seq37172){
var G__37173 = cljs.core.first.call(null,seq37172);
var seq37172__$1 = cljs.core.next.call(null,seq37172);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37173,seq37172__$1);
});

mranderson048.reagent.v0v7v0.reagent.ratom.atom.cljs$lang$maxFixedArity = (1);

mranderson048.reagent.v0v7v0.reagent.ratom.cache_key = "reagReactionCache";
mranderson048.reagent.v0v7v0.reagent.ratom.cached_reaction = (function mranderson048$reagent$v0v7v0$reagent$ratom$cached_reaction(f,o,k,obj,destroy){
var m = (o["reagReactionCache"]);
var m__$1 = (((m == null))?cljs.core.PersistentArrayMap.EMPTY:m);
var r = m__$1.call(null,k,null);
if((!((r == null)))){
return cljs.core._deref.call(null,r);
} else {
if((mranderson048.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ == null)){
return f.call(null);
} else {
var r__$1 = mranderson048.reagent.v0v7v0.reagent.ratom.make_reaction.call(null,f,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),((function (m,m__$1,r){
return (function (x){
if(mranderson048.reagent.v0v7v0.reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.ratom._running,cljs.core.dec);
} else {
}

var __37182 = (o["reagReactionCache"]);
var __37183__$1 = cljs.core.dissoc.call(null,__37182,k);
(o["reagReactionCache"] = __37183__$1);

if((!((obj == null)))){
obj.reaction = null;
} else {
}

if((!((destroy == null)))){
return destroy.call(null,x);
} else {
return null;
}
});})(m,m__$1,r))
);
var v = cljs.core._deref.call(null,r__$1);
(o["reagReactionCache"] = cljs.core.assoc.call(null,m__$1,k,r__$1));

if(mranderson048.reagent.v0v7v0.reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.ratom._running,cljs.core.inc);
} else {
}

if((!((obj == null)))){
obj.reaction = r__$1;
} else {
}

return v;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {mranderson048.reagent.v0v7v0.reagent.ratom.IReactiveAtom}
*/
mranderson048.reagent.v0v7v0.reagent.ratom.Track = (function (f,args,reaction){
this.f = f;
this.args = args;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
mranderson048.reagent.v0v7v0.reagent.ratom.Track.prototype.mranderson048$reagent$v0v7v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

mranderson048.reagent.v0v7v0.reagent.ratom.Track.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5722__auto__ = self__.reaction;
if((temp__5722__auto__ == null)){
return mranderson048.reagent.v0v7v0.reagent.ratom.cached_reaction.call(null,((function (temp__5722__auto__,this$__$1){
return (function (){
return cljs.core.apply.call(null,self__.f,self__.args);
});})(temp__5722__auto__,this$__$1))
,self__.f,self__.args,this$__$1,null);
} else {
var r = temp__5722__auto__;
return cljs.core._deref.call(null,r);
}
});

mranderson048.reagent.v0v7v0.reagent.ratom.Track.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof mranderson048.reagent.v0v7v0.reagent.ratom.Track)) && (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args)));
});

mranderson048.reagent.v0v7v0.reagent.ratom.Track.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

mranderson048.reagent.v0v7v0.reagent.ratom.Track.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson048.reagent.v0v7v0.reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Track:");
});

mranderson048.reagent.v0v7v0.reagent.ratom.Track.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson048.reagent.v0v7v0.reagent.ratom.Track.cljs$lang$type = true;

mranderson048.reagent.v0v7v0.reagent.ratom.Track.cljs$lang$ctorStr = "mranderson048.reagent.v0v7v0.reagent.ratom/Track";

mranderson048.reagent.v0v7v0.reagent.ratom.Track.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"mranderson048.reagent.v0v7v0.reagent.ratom/Track");
});

/**
 * Positional factory function for mranderson048.reagent.v0v7v0.reagent.ratom/Track.
 */
mranderson048.reagent.v0v7v0.reagent.ratom.__GT_Track = (function mranderson048$reagent$v0v7v0$reagent$ratom$__GT_Track(f,args,reaction){
return (new mranderson048.reagent.v0v7v0.reagent.ratom.Track(f,args,reaction));
});

mranderson048.reagent.v0v7v0.reagent.ratom.make_track = (function mranderson048$reagent$v0v7v0$reagent$ratom$make_track(f,args){
return (new mranderson048.reagent.v0v7v0.reagent.ratom.Track(f,args,null));
});
mranderson048.reagent.v0v7v0.reagent.ratom.make_track_BANG_ = (function mranderson048$reagent$v0v7v0$reagent$ratom$make_track_BANG_(f,args){
var t = mranderson048.reagent.v0v7v0.reagent.ratom.make_track.call(null,f,args);
var r = mranderson048.reagent.v0v7v0.reagent.ratom.make_reaction.call(null,((function (t){
return (function (){
return cljs.core._deref.call(null,t);
});})(t))
,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),true);
cljs.core.deref.call(null,r);

return r;
});
mranderson048.reagent.v0v7v0.reagent.ratom.track = (function mranderson048$reagent$v0v7v0$reagent$ratom$track(var_args){
var args__4647__auto__ = [];
var len__4641__auto___37186 = arguments.length;
var i__4642__auto___37187 = (0);
while(true){
if((i__4642__auto___37187 < len__4641__auto___37186)){
args__4647__auto__.push((arguments[i__4642__auto___37187]));

var G__37188 = (i__4642__auto___37187 + (1));
i__4642__auto___37187 = G__37188;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return mranderson048.reagent.v0v7v0.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

mranderson048.reagent.v0v7v0.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return mranderson048.reagent.v0v7v0.reagent.ratom.make_track.call(null,f,args);
});

mranderson048.reagent.v0v7v0.reagent.ratom.track.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.reagent.v0v7v0.reagent.ratom.track.cljs$lang$applyTo = (function (seq37184){
var G__37185 = cljs.core.first.call(null,seq37184);
var seq37184__$1 = cljs.core.next.call(null,seq37184);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37185,seq37184__$1);
});

mranderson048.reagent.v0v7v0.reagent.ratom.track_BANG_ = (function mranderson048$reagent$v0v7v0$reagent$ratom$track_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___37191 = arguments.length;
var i__4642__auto___37192 = (0);
while(true){
if((i__4642__auto___37192 < len__4641__auto___37191)){
args__4647__auto__.push((arguments[i__4642__auto___37192]));

var G__37193 = (i__4642__auto___37192 + (1));
i__4642__auto___37192 = G__37193;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return mranderson048.reagent.v0v7v0.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

mranderson048.reagent.v0v7v0.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return mranderson048.reagent.v0v7v0.reagent.ratom.make_track_BANG_.call(null,f,args);
});

mranderson048.reagent.v0v7v0.reagent.ratom.track_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.reagent.v0v7v0.reagent.ratom.track_BANG_.cljs$lang$applyTo = (function (seq37189){
var G__37190 = cljs.core.first.call(null,seq37189);
var seq37189__$1 = cljs.core.next.call(null,seq37189);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37190,seq37189__$1);
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {mranderson048.reagent.v0v7v0.reagent.ratom.Object}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {mranderson048.reagent.v0v7v0.reagent.ratom.IReactiveAtom}
*/
mranderson048.reagent.v0v7v0.reagent.ratom.RCursor = (function (ratom,path,reaction,state,watches){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.state = state;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
mranderson048.reagent.v0v7v0.reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__37194 = mranderson048.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__37195 = null;
mranderson048.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__37195;

try{return cljs.core._deref.call(null,this$);
}finally {mranderson048.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__37194;
}});

mranderson048.reagent.v0v7v0.reagent.ratom.RCursor.prototype._set_state = (function (oldstate,newstate){
var self__ = this;
var this$ = this;
if((oldstate === newstate)){
return null;
} else {
self__.state = newstate;

if((!((self__.watches == null)))){
return mranderson048.reagent.v0v7v0.reagent.ratom.notify_w.call(null,this$,oldstate,newstate);
} else {
return null;
}
}
});

mranderson048.reagent.v0v7v0.reagent.ratom.RCursor.prototype.mranderson048$reagent$v0v7v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

mranderson048.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson048.reagent.v0v7v0.reagent.ratom.pr_atom.call(null,a__$1,w,opts,["Cursor: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path)].join(''));
});

mranderson048.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

mranderson048.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof mranderson048.reagent.v0v7v0.reagent.ratom.RCursor)) && (cljs.core._EQ_.call(null,self__.path,other.path)) && (cljs.core._EQ_.call(null,self__.ratom,other.ratom)));
});

mranderson048.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
this$__$1._set_state(oldstate,new_value);

if((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom))){
if(cljs.core._EQ_.call(null,self__.path,cljs.core.PersistentVector.EMPTY)){
cljs.core.reset_BANG_.call(null,self__.ratom,new_value);
} else {
cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,new_value);
}
} else {
self__.ratom.call(null,self__.path,new_value);
}

return new_value;
});

mranderson048.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek()));
});

mranderson048.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek(),x));
});

mranderson048.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek(),x,y));
});

mranderson048.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,a__$1._peek(),x,y,more));
});

mranderson048.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v7v0.reagent.ratom.notify_w.call(null,this$__$1,old,new$);
});

mranderson048.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v7v0.reagent.ratom.add_w.call(null,this$__$1,key,f);
});

mranderson048.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v7v0.reagent.ratom.remove_w.call(null,this$__$1,key);
});

mranderson048.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var newstate = (function (){var temp__5722__auto__ = self__.reaction;
if((temp__5722__auto__ == null)){
var f = (((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom)))?((function (temp__5722__auto__,oldstate,this$__$1){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});})(temp__5722__auto__,oldstate,this$__$1))
:((function (temp__5722__auto__,oldstate,this$__$1){
return (function (){
return self__.ratom.call(null,self__.path);
});})(temp__5722__auto__,oldstate,this$__$1))
);
return mranderson048.reagent.v0v7v0.reagent.ratom.cached_reaction.call(null,f,self__.ratom,self__.path,this$__$1,null);
} else {
var r = temp__5722__auto__;
return cljs.core._deref.call(null,r);
}
})();
this$__$1._set_state(oldstate,newstate);

return newstate;
});

mranderson048.reagent.v0v7v0.reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ratom","ratom",1514010260,null),new cljs.core.Symbol(null,"path","path",1452340359,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson048.reagent.v0v7v0.reagent.ratom.RCursor.cljs$lang$type = true;

mranderson048.reagent.v0v7v0.reagent.ratom.RCursor.cljs$lang$ctorStr = "mranderson048.reagent.v0v7v0.reagent.ratom/RCursor";

mranderson048.reagent.v0v7v0.reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"mranderson048.reagent.v0v7v0.reagent.ratom/RCursor");
});

/**
 * Positional factory function for mranderson048.reagent.v0v7v0.reagent.ratom/RCursor.
 */
mranderson048.reagent.v0v7v0.reagent.ratom.__GT_RCursor = (function mranderson048$reagent$v0v7v0$reagent$ratom$__GT_RCursor(ratom,path,reaction,state,watches){
return (new mranderson048.reagent.v0v7v0.reagent.ratom.RCursor(ratom,path,reaction,state,watches));
});

mranderson048.reagent.v0v7v0.reagent.ratom.cursor = (function mranderson048$reagent$v0v7v0$reagent$ratom$cursor(src,path){
if((function (){var or__4047__auto__ = (((!((src == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === src.mranderson048$reagent$v0v7v0$reagent$ratom$IReactiveAtom$))))?true:(((!src.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,mranderson048.reagent.v0v7v0.reagent.ratom.IReactiveAtom,src):false)):cljs.core.native_satisfies_QMARK_.call(null,mranderson048.reagent.v0v7v0.reagent.ratom.IReactiveAtom,src));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return ((cljs.core.ifn_QMARK_.call(null,src)) && ((!(cljs.core.vector_QMARK_.call(null,src)))));
}
})()){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["src must be a reactive atom or a function, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,src))].join('')),"\n","(or (satisfies? IReactiveAtom src) (and (ifn? src) (not (vector? src))))"].join('')));
}

return mranderson048.reagent.v0v7v0.reagent.ratom.__GT_RCursor.call(null,src,path,null,null,null);
});
mranderson048.reagent.v0v7v0.reagent.ratom.with_let_destroy = (function mranderson048$reagent$v0v7v0$reagent$ratom$with_let_destroy(v){
var temp__5724__auto__ = v.destroy;
if((temp__5724__auto__ == null)){
return null;
} else {
var f = temp__5724__auto__;
return f.call(null);
}
});
mranderson048.reagent.v0v7v0.reagent.ratom.with_let_values = (function mranderson048$reagent$v0v7v0$reagent$ratom$with_let_values(key){
var temp__5722__auto__ = mranderson048.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5722__auto__ == null)){
return [];
} else {
var c = temp__5722__auto__;
return mranderson048.reagent.v0v7v0.reagent.ratom.cached_reaction.call(null,cljs.core.array,c,key,null,mranderson048.reagent.v0v7v0.reagent.ratom.with_let_destroy);
}
});

/**
 * @interface
 */
mranderson048.reagent.v0v7v0.reagent.ratom.IDisposable = function(){};

mranderson048.reagent.v0v7v0.reagent.ratom.dispose_BANG_ = (function mranderson048$reagent$v0v7v0$reagent$ratom$dispose_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.mranderson048$reagent$v0v7v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1 == null)))))){
return this$.mranderson048$reagent$v0v7v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (mranderson048.reagent.v0v7v0.reagent.ratom.dispose_BANG_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (mranderson048.reagent.v0v7v0.reagent.ratom.dispose_BANG_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
}
});

mranderson048.reagent.v0v7v0.reagent.ratom.add_on_dispose_BANG_ = (function mranderson048$reagent$v0v7v0$reagent$ratom$add_on_dispose_BANG_(this$,f){
if((((!((this$ == null)))) && ((!((this$.mranderson048$reagent$v0v7v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 == null)))))){
return this$.mranderson048$reagent$v0v7v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2(this$,f);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (mranderson048.reagent.v0v7v0.reagent.ratom.add_on_dispose_BANG_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$,f);
} else {
var m__4348__auto____$1 = (mranderson048.reagent.v0v7v0.reagent.ratom.add_on_dispose_BANG_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,f);
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.add-on-dispose!",this$);
}
}
}
});


/**
 * @interface
 */
mranderson048.reagent.v0v7v0.reagent.ratom.IRunnable = function(){};

mranderson048.reagent.v0v7v0.reagent.ratom.run = (function mranderson048$reagent$v0v7v0$reagent$ratom$run(this$){
if((((!((this$ == null)))) && ((!((this$.mranderson048$reagent$v0v7v0$reagent$ratom$IRunnable$run$arity$1 == null)))))){
return this$.mranderson048$reagent$v0v7v0$reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (mranderson048.reagent.v0v7v0.reagent.ratom.run[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (mranderson048.reagent.v0v7v0.reagent.ratom.run["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
}
});

mranderson048.reagent.v0v7v0.reagent.ratom.handle_reaction_change = (function mranderson048$reagent$v0v7v0$reagent$ratom$handle_reaction_change(this$,sender,old,new$){
return this$._handle_change(sender,old,new$);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {mranderson048.reagent.v0v7v0.reagent.ratom.IDisposable}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {mranderson048.reagent.v0v7v0.reagent.ratom.Object}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {mranderson048.reagent.v0v7v0.reagent.ratom.IReactiveAtom}
 * @implements {mranderson048.reagent.v0v7v0.reagent.ratom.IRunnable}
*/
mranderson048.reagent.v0v7v0.reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.nocache_QMARK_ = nocache_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.caught = caught;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.prototype._peek_at = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__37200 = mranderson048.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__37201 = null;
mranderson048.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__37201;

try{return cljs.core._deref.call(null,this$);
}finally {mranderson048.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__37200;
}});

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.prototype._handle_change = (function (sender,oldval,newval){
var self__ = this;
var this$ = this;
if((((oldval === newval)) || (self__.dirty_QMARK_))){
return null;
} else {
if((self__.auto_run == null)){
self__.dirty_QMARK_ = true;

return mranderson048.reagent.v0v7v0.reagent.ratom.rea_enqueue.call(null,this$);
} else {
if(self__.auto_run === true){
return this$._run(false);
} else {
return self__.auto_run.call(null,this$);
}
}
}
});

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.prototype._update_watching = (function (derefed){
var self__ = this;
var this$ = this;
var new$ = cljs.core.set.call(null,derefed);
var old = cljs.core.set.call(null,self__.watching);
self__.watching = derefed;

var seq__37202_37218 = cljs.core.seq.call(null,clojure.set.difference.call(null,new$,old));
var chunk__37203_37219 = null;
var count__37204_37220 = (0);
var i__37205_37221 = (0);
while(true){
if((i__37205_37221 < count__37204_37220)){
var w_37222 = cljs.core._nth.call(null,chunk__37203_37219,i__37205_37221);
cljs.core._add_watch.call(null,w_37222,this$,mranderson048.reagent.v0v7v0.reagent.ratom.handle_reaction_change);


var G__37223 = seq__37202_37218;
var G__37224 = chunk__37203_37219;
var G__37225 = count__37204_37220;
var G__37226 = (i__37205_37221 + (1));
seq__37202_37218 = G__37223;
chunk__37203_37219 = G__37224;
count__37204_37220 = G__37225;
i__37205_37221 = G__37226;
continue;
} else {
var temp__5720__auto___37227 = cljs.core.seq.call(null,seq__37202_37218);
if(temp__5720__auto___37227){
var seq__37202_37228__$1 = temp__5720__auto___37227;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37202_37228__$1)){
var c__4461__auto___37229 = cljs.core.chunk_first.call(null,seq__37202_37228__$1);
var G__37230 = cljs.core.chunk_rest.call(null,seq__37202_37228__$1);
var G__37231 = c__4461__auto___37229;
var G__37232 = cljs.core.count.call(null,c__4461__auto___37229);
var G__37233 = (0);
seq__37202_37218 = G__37230;
chunk__37203_37219 = G__37231;
count__37204_37220 = G__37232;
i__37205_37221 = G__37233;
continue;
} else {
var w_37234 = cljs.core.first.call(null,seq__37202_37228__$1);
cljs.core._add_watch.call(null,w_37234,this$,mranderson048.reagent.v0v7v0.reagent.ratom.handle_reaction_change);


var G__37235 = cljs.core.next.call(null,seq__37202_37228__$1);
var G__37236 = null;
var G__37237 = (0);
var G__37238 = (0);
seq__37202_37218 = G__37235;
chunk__37203_37219 = G__37236;
count__37204_37220 = G__37237;
i__37205_37221 = G__37238;
continue;
}
} else {
}
}
break;
}

var seq__37206 = cljs.core.seq.call(null,clojure.set.difference.call(null,old,new$));
var chunk__37207 = null;
var count__37208 = (0);
var i__37209 = (0);
while(true){
if((i__37209 < count__37208)){
var w = cljs.core._nth.call(null,chunk__37207,i__37209);
cljs.core._remove_watch.call(null,w,this$);


var G__37239 = seq__37206;
var G__37240 = chunk__37207;
var G__37241 = count__37208;
var G__37242 = (i__37209 + (1));
seq__37206 = G__37239;
chunk__37207 = G__37240;
count__37208 = G__37241;
i__37209 = G__37242;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__37206);
if(temp__5720__auto__){
var seq__37206__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37206__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__37206__$1);
var G__37243 = cljs.core.chunk_rest.call(null,seq__37206__$1);
var G__37244 = c__4461__auto__;
var G__37245 = cljs.core.count.call(null,c__4461__auto__);
var G__37246 = (0);
seq__37206 = G__37243;
chunk__37207 = G__37244;
count__37208 = G__37245;
i__37209 = G__37246;
continue;
} else {
var w = cljs.core.first.call(null,seq__37206__$1);
cljs.core._remove_watch.call(null,w,this$);


var G__37247 = cljs.core.next.call(null,seq__37206__$1);
var G__37248 = null;
var G__37249 = (0);
var G__37250 = (0);
seq__37206 = G__37247;
chunk__37207 = G__37248;
count__37208 = G__37249;
i__37209 = G__37250;
continue;
}
} else {
return null;
}
}
break;
}
});

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.prototype._queued_run = (function (){
var self__ = this;
var this$ = this;
if(((self__.dirty_QMARK_) && ((!((self__.watching == null)))))){
return this$._run(true);
} else {
return null;
}
});

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.prototype._try_capture = (function (f__$1){
var self__ = this;
var this$ = this;
try{self__.caught = null;

return mranderson048.reagent.v0v7v0.reagent.ratom.deref_capture.call(null,f__$1,this$);
}catch (e37210){var e = e37210;
self__.state = e;

self__.caught = e;

return self__.dirty_QMARK_ = false;
}});

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.prototype._run = (function (check){
var self__ = this;
var this$ = this;
var oldstate = self__.state;
var res = (cljs.core.truth_(check)?this$._try_capture(self__.f):mranderson048.reagent.v0v7v0.reagent.ratom.deref_capture.call(null,self__.f,this$));
if(self__.nocache_QMARK_){
} else {
self__.state = res;

if((((self__.watches == null)) || (cljs.core._EQ_.call(null,oldstate,res)))){
} else {
mranderson048.reagent.v0v7v0.reagent.ratom.notify_w.call(null,this$,oldstate,res);
}
}

return res;
});

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.prototype._set_opts = (function (p__37211){
var self__ = this;
var map__37212 = p__37211;
var map__37212__$1 = (((((!((map__37212 == null))))?(((((map__37212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37212):map__37212);
var auto_run__$1 = cljs.core.get.call(null,map__37212__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.call(null,map__37212__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.call(null,map__37212__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var no_cache = cljs.core.get.call(null,map__37212__$1,new cljs.core.Keyword(null,"no-cache","no-cache",1588056370));
var this$ = this;
if((!((auto_run__$1 == null)))){
this$.auto_run = auto_run__$1;
} else {
}

if((!((on_set == null)))){
this$.on_set = on_set;
} else {
}

if((!((on_dispose == null)))){
this$.on_dispose = on_dispose;
} else {
}

if((!((no_cache == null)))){
return this$.nocache_QMARK_ = no_cache;
} else {
return null;
}
});

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.prototype.mranderson048$reagent$v0v7v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson048.reagent.v0v7v0.reagent.ratom.pr_atom.call(null,a__$1,w,opts,["Reaction ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,a__$1)),":"].join(''));
});

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.prototype.mranderson048$reagent$v0v7v0$reagent$ratom$IDisposable$ = cljs.core.PROTOCOL_SENTINEL;

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.prototype.mranderson048$reagent$v0v7v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var s = self__.state;
var wg = self__.watching;
self__.watching = null;

self__.state = null;

self__.auto_run = null;

self__.dirty_QMARK_ = true;

var seq__37214_37251 = cljs.core.seq.call(null,cljs.core.set.call(null,wg));
var chunk__37215_37252 = null;
var count__37216_37253 = (0);
var i__37217_37254 = (0);
while(true){
if((i__37217_37254 < count__37216_37253)){
var w_37255 = cljs.core._nth.call(null,chunk__37215_37252,i__37217_37254);
cljs.core._remove_watch.call(null,w_37255,this$__$1);


var G__37256 = seq__37214_37251;
var G__37257 = chunk__37215_37252;
var G__37258 = count__37216_37253;
var G__37259 = (i__37217_37254 + (1));
seq__37214_37251 = G__37256;
chunk__37215_37252 = G__37257;
count__37216_37253 = G__37258;
i__37217_37254 = G__37259;
continue;
} else {
var temp__5720__auto___37260 = cljs.core.seq.call(null,seq__37214_37251);
if(temp__5720__auto___37260){
var seq__37214_37261__$1 = temp__5720__auto___37260;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37214_37261__$1)){
var c__4461__auto___37262 = cljs.core.chunk_first.call(null,seq__37214_37261__$1);
var G__37263 = cljs.core.chunk_rest.call(null,seq__37214_37261__$1);
var G__37264 = c__4461__auto___37262;
var G__37265 = cljs.core.count.call(null,c__4461__auto___37262);
var G__37266 = (0);
seq__37214_37251 = G__37263;
chunk__37215_37252 = G__37264;
count__37216_37253 = G__37265;
i__37217_37254 = G__37266;
continue;
} else {
var w_37267 = cljs.core.first.call(null,seq__37214_37261__$1);
cljs.core._remove_watch.call(null,w_37267,this$__$1);


var G__37268 = cljs.core.next.call(null,seq__37214_37261__$1);
var G__37269 = null;
var G__37270 = (0);
var G__37271 = (0);
seq__37214_37251 = G__37268;
chunk__37215_37252 = G__37269;
count__37216_37253 = G__37270;
i__37217_37254 = G__37271;
continue;
}
} else {
}
}
break;
}

if((!((this$__$1.on_dispose == null)))){
this$__$1.on_dispose(s);
} else {
}

var temp__5724__auto__ = this$__$1.on_dispose_arr;
if((temp__5724__auto__ == null)){
return null;
} else {
var a = temp__5724__auto__;
var n__4518__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4518__auto__)){
(a[i]).call(null,this$__$1);

var G__37272 = (i + (1));
i = G__37272;
continue;
} else {
return null;
}
break;
}
}
});

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.prototype.mranderson048$reagent$v0v7v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 = (function (this$,f__$1){
var self__ = this;
var this$__$1 = this;
var temp__5722__auto__ = this$__$1.on_dispose_arr;
if((temp__5722__auto__ == null)){
return this$__$1.on_dispose_arr = [f__$1];
} else {
var a = temp__5722__auto__;
return a.push(f__$1);
}
});

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
if(cljs.core.fn_QMARK_.call(null,a__$1.on_set)){
} else {
throw (new Error(["Assert failed: ","Reaction is read only; on-set is not allowed","\n","(fn? (.-on-set a))"].join('')));
}

var oldval = self__.state;
self__.state = newval;

a__$1.on_set(oldval,newval);

mranderson048.reagent.v0v7v0.reagent.ratom.notify_w.call(null,a__$1,oldval,newval);

return newval;
});

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at()));
});

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at(),x));
});

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at(),x,y));
});

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,a__$1._peek_at(),x,y,more));
});

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.prototype.mranderson048$reagent$v0v7v0$reagent$ratom$IRunnable$ = cljs.core.PROTOCOL_SENTINEL;

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.prototype.mranderson048$reagent$v0v7v0$reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
mranderson048.reagent.v0v7v0.reagent.ratom.flush_BANG_.call(null);

return this$__$1._run(false);
});

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v7v0.reagent.ratom.notify_w.call(null,this$__$1,old,new$);
});

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v7v0.reagent.ratom.add_w.call(null,this$__$1,key,f__$1);
});

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var was_empty = cljs.core.empty_QMARK_.call(null,self__.watches);
mranderson048.reagent.v0v7v0.reagent.ratom.remove_w.call(null,this$__$1,key);

if((((!(was_empty))) && (cljs.core.empty_QMARK_.call(null,self__.watches)) && ((self__.auto_run == null)))){
return mranderson048.reagent.v0v7v0.reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
});

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5724__auto___37273 = self__.caught;
if((temp__5724__auto___37273 == null)){
} else {
var e_37274 = temp__5724__auto___37273;
throw e_37274;
}

var non_reactive_37275 = (mranderson048.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ == null);
if(non_reactive_37275){
mranderson048.reagent.v0v7v0.reagent.ratom.flush_BANG_.call(null);
} else {
}

if(((non_reactive_37275) && ((self__.auto_run == null)))){
if(self__.dirty_QMARK_){
var oldstate_37276 = self__.state;
self__.state = self__.f.call(null);

if((((self__.watches == null)) || (cljs.core._EQ_.call(null,oldstate_37276,self__.state)))){
} else {
mranderson048.reagent.v0v7v0.reagent.ratom.notify_w.call(null,this$__$1,oldstate_37276,self__.state);
}
} else {
}
} else {
mranderson048.reagent.v0v7v0.reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(self__.dirty_QMARK_){
this$__$1._run(false);
} else {
}
}

return self__.state;
});

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty?","dirty?",-419314319,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"nocache?","nocache?",-1065670978,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watching","watching",1947648227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"caught","caught",2084008322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.cljs$lang$type = true;

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.cljs$lang$ctorStr = "mranderson048.reagent.v0v7v0.reagent.ratom/Reaction";

mranderson048.reagent.v0v7v0.reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"mranderson048.reagent.v0v7v0.reagent.ratom/Reaction");
});

/**
 * Positional factory function for mranderson048.reagent.v0v7v0.reagent.ratom/Reaction.
 */
mranderson048.reagent.v0v7v0.reagent.ratom.__GT_Reaction = (function mranderson048$reagent$v0v7v0$reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
return (new mranderson048.reagent.v0v7v0.reagent.ratom.Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught));
});

mranderson048.reagent.v0v7v0.reagent.ratom.make_reaction = (function mranderson048$reagent$v0v7v0$reagent$ratom$make_reaction(var_args){
var args__4647__auto__ = [];
var len__4641__auto___37282 = arguments.length;
var i__4642__auto___37283 = (0);
while(true){
if((i__4642__auto___37283 < len__4641__auto___37282)){
args__4647__auto__.push((arguments[i__4642__auto___37283]));

var G__37284 = (i__4642__auto___37283 + (1));
i__4642__auto___37283 = G__37284;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return mranderson048.reagent.v0v7v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

mranderson048.reagent.v0v7v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__37279){
var map__37280 = p__37279;
var map__37280__$1 = (((((!((map__37280 == null))))?(((((map__37280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37280):map__37280);
var auto_run = cljs.core.get.call(null,map__37280__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.call(null,map__37280__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.call(null,map__37280__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var reaction = mranderson048.reagent.v0v7v0.reagent.ratom.__GT_Reaction.call(null,f,null,true,false,null,null,null,null);
reaction._set_opts(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),auto_run,new cljs.core.Keyword(null,"on-set","on-set",-140953470),on_set,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),on_dispose], null));

return reaction;
});

mranderson048.reagent.v0v7v0.reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.reagent.v0v7v0.reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq37277){
var G__37278 = cljs.core.first.call(null,seq37277);
var seq37277__$1 = cljs.core.next.call(null,seq37277);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37278,seq37277__$1);
});

mranderson048.reagent.v0v7v0.reagent.ratom.temp_reaction = mranderson048.reagent.v0v7v0.reagent.ratom.make_reaction.call(null,null);
mranderson048.reagent.v0v7v0.reagent.ratom.run_in_reaction = (function mranderson048$reagent$v0v7v0$reagent$ratom$run_in_reaction(f,obj,key,run,opts){
var r = mranderson048.reagent.v0v7v0.reagent.ratom.temp_reaction;
var res = mranderson048.reagent.v0v7v0.reagent.ratom.deref_capture.call(null,f,r);
if((r.watching == null)){
} else {
mranderson048.reagent.v0v7v0.reagent.ratom.temp_reaction = mranderson048.reagent.v0v7v0.reagent.ratom.make_reaction.call(null,null);

r._set_opts(opts);

r.f = f;

r.auto_run = ((function (r,res){
return (function (){
return run.call(null,obj);
});})(r,res))
;

(obj[key] = r);
}

return res;
});
mranderson048.reagent.v0v7v0.reagent.ratom.check_derefs = (function mranderson048$reagent$v0v7v0$reagent$ratom$check_derefs(f){
var ctx = {};
var res = mranderson048.reagent.v0v7v0.reagent.ratom.in_context.call(null,ctx,f);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,(!((ctx.captured == null)))], null);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
mranderson048.reagent.v0v7v0.reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
});
mranderson048.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(((self__.changed) && ((!((mranderson048.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ == null)))))){
if(cljs.core.truth_(mranderson048.reagent.v0v7v0.reagent.debug.has_console)){
(cljs.core.truth_(mranderson048.reagent.v0v7v0.reagent.debug.tracking)?mranderson048.reagent.v0v7v0.reagent.debug.track_console:console).warn(["Warning: ","derefing stale wrap: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,this$__$1))].join(''));
} else {
}
} else {
}


return self__.state;
});

mranderson048.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if((!((self__.watches == null)))){
mranderson048.reagent.v0v7v0.reagent.ratom.notify_w.call(null,this$__$1,oldval,newval);
} else {
}

self__.callback.call(null,newval);

return newval;
});

mranderson048.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

mranderson048.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

mranderson048.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

mranderson048.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

mranderson048.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof mranderson048.reagent.v0v7v0.reagent.ratom.Wrapper)) && ((!(self__.changed))) && (cljs.core.not.call(null,other.changed)) && (cljs.core._EQ_.call(null,self__.state,other.state)) && (cljs.core._EQ_.call(null,self__.callback,other.callback)));
});

mranderson048.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v7v0.reagent.ratom.notify_w.call(null,this$__$1,old,new$);
});

mranderson048.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v7v0.reagent.ratom.add_w.call(null,this$__$1,key,f);
});

mranderson048.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v7v0.reagent.ratom.remove_w.call(null,this$__$1,key);
});

mranderson048.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson048.reagent.v0v7v0.reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Wrap:");
});

mranderson048.reagent.v0v7v0.reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null),cljs.core.with_meta(new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson048.reagent.v0v7v0.reagent.ratom.Wrapper.cljs$lang$type = true;

mranderson048.reagent.v0v7v0.reagent.ratom.Wrapper.cljs$lang$ctorStr = "mranderson048.reagent.v0v7v0.reagent.ratom/Wrapper";

mranderson048.reagent.v0v7v0.reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"mranderson048.reagent.v0v7v0.reagent.ratom/Wrapper");
});

/**
 * Positional factory function for mranderson048.reagent.v0v7v0.reagent.ratom/Wrapper.
 */
mranderson048.reagent.v0v7v0.reagent.ratom.__GT_Wrapper = (function mranderson048$reagent$v0v7v0$reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new mranderson048.reagent.v0v7v0.reagent.ratom.Wrapper(state,callback,changed,watches));
});

mranderson048.reagent.v0v7v0.reagent.ratom.make_wrapper = (function mranderson048$reagent$v0v7v0$reagent$ratom$make_wrapper(value,callback_fn,args){
return mranderson048.reagent.v0v7v0.reagent.ratom.__GT_Wrapper.call(null,value,mranderson048.reagent.v0v7v0.reagent.impl.util.make_partial_fn.call(null,callback_fn,args),false,null);
});

//# sourceMappingURL=ratom.js.map?rel=1575052409782
