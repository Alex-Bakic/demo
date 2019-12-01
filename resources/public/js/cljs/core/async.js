// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__39497 = arguments.length;
switch (G__39497) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39498 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39498 = (function (f,blockable,meta39499){
this.f = f;
this.blockable = blockable;
this.meta39499 = meta39499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39500,meta39499__$1){
var self__ = this;
var _39500__$1 = this;
return (new cljs.core.async.t_cljs$core$async39498(self__.f,self__.blockable,meta39499__$1));
});

cljs.core.async.t_cljs$core$async39498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39500){
var self__ = this;
var _39500__$1 = this;
return self__.meta39499;
});

cljs.core.async.t_cljs$core$async39498.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39498.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39498.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async39498.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39498.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39499","meta39499",1616748971,null)], null);
});

cljs.core.async.t_cljs$core$async39498.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39498";

cljs.core.async.t_cljs$core$async39498.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async39498");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39498.
 */
cljs.core.async.__GT_t_cljs$core$async39498 = (function cljs$core$async$__GT_t_cljs$core$async39498(f__$1,blockable__$1,meta39499){
return (new cljs.core.async.t_cljs$core$async39498(f__$1,blockable__$1,meta39499));
});

}

return (new cljs.core.async.t_cljs$core$async39498(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__39504 = arguments.length;
switch (G__39504) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__39507 = arguments.length;
switch (G__39507) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__39510 = arguments.length;
switch (G__39510) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_39512 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39512);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39512,ret){
return (function (){
return fn1.call(null,val_39512);
});})(val_39512,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__39514 = arguments.length;
switch (G__39514) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___39516 = n;
var x_39517 = (0);
while(true){
if((x_39517 < n__4518__auto___39516)){
(a[x_39517] = (0));

var G__39518 = (x_39517 + (1));
x_39517 = G__39518;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__39519 = (i + (1));
i = G__39519;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39520 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39520 = (function (flag,meta39521){
this.flag = flag;
this.meta39521 = meta39521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39522,meta39521__$1){
var self__ = this;
var _39522__$1 = this;
return (new cljs.core.async.t_cljs$core$async39520(self__.flag,meta39521__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39520.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39522){
var self__ = this;
var _39522__$1 = this;
return self__.meta39521;
});})(flag))
;

cljs.core.async.t_cljs$core$async39520.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39520.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39520.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39520.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39520.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39521","meta39521",509944242,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39520.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39520.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39520";

cljs.core.async.t_cljs$core$async39520.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async39520");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39520.
 */
cljs.core.async.__GT_t_cljs$core$async39520 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39520(flag__$1,meta39521){
return (new cljs.core.async.t_cljs$core$async39520(flag__$1,meta39521));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39520(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39523 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39523 = (function (flag,cb,meta39524){
this.flag = flag;
this.cb = cb;
this.meta39524 = meta39524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39525,meta39524__$1){
var self__ = this;
var _39525__$1 = this;
return (new cljs.core.async.t_cljs$core$async39523(self__.flag,self__.cb,meta39524__$1));
});

cljs.core.async.t_cljs$core$async39523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39525){
var self__ = this;
var _39525__$1 = this;
return self__.meta39524;
});

cljs.core.async.t_cljs$core$async39523.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39523.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39523.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39523.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39523.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39524","meta39524",2027893942,null)], null);
});

cljs.core.async.t_cljs$core$async39523.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39523";

cljs.core.async.t_cljs$core$async39523.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async39523");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39523.
 */
cljs.core.async.__GT_t_cljs$core$async39523 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39523(flag__$1,cb__$1,meta39524){
return (new cljs.core.async.t_cljs$core$async39523(flag__$1,cb__$1,meta39524));
});

}

return (new cljs.core.async.t_cljs$core$async39523(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39526_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39526_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39527_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39527_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__39528 = (i + (1));
i = G__39528;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___39534 = arguments.length;
var i__4642__auto___39535 = (0);
while(true){
if((i__4642__auto___39535 < len__4641__auto___39534)){
args__4647__auto__.push((arguments[i__4642__auto___39535]));

var G__39536 = (i__4642__auto___39535 + (1));
i__4642__auto___39535 = G__39536;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39531){
var map__39532 = p__39531;
var map__39532__$1 = (((((!((map__39532 == null))))?(((((map__39532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39532):map__39532);
var opts = map__39532__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39529){
var G__39530 = cljs.core.first.call(null,seq39529);
var seq39529__$1 = cljs.core.next.call(null,seq39529);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39530,seq39529__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__39538 = arguments.length;
switch (G__39538) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__39437__auto___39584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39437__auto___39584){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (c__39437__auto___39584){
return (function (state_39562){
var state_val_39563 = (state_39562[(1)]);
if((state_val_39563 === (7))){
var inst_39558 = (state_39562[(2)]);
var state_39562__$1 = state_39562;
var statearr_39564_39585 = state_39562__$1;
(statearr_39564_39585[(2)] = inst_39558);

(statearr_39564_39585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39563 === (1))){
var state_39562__$1 = state_39562;
var statearr_39565_39586 = state_39562__$1;
(statearr_39565_39586[(2)] = null);

(statearr_39565_39586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39563 === (4))){
var inst_39541 = (state_39562[(7)]);
var inst_39541__$1 = (state_39562[(2)]);
var inst_39542 = (inst_39541__$1 == null);
var state_39562__$1 = (function (){var statearr_39566 = state_39562;
(statearr_39566[(7)] = inst_39541__$1);

return statearr_39566;
})();
if(cljs.core.truth_(inst_39542)){
var statearr_39567_39587 = state_39562__$1;
(statearr_39567_39587[(1)] = (5));

} else {
var statearr_39568_39588 = state_39562__$1;
(statearr_39568_39588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39563 === (13))){
var state_39562__$1 = state_39562;
var statearr_39569_39589 = state_39562__$1;
(statearr_39569_39589[(2)] = null);

(statearr_39569_39589[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39563 === (6))){
var inst_39541 = (state_39562[(7)]);
var state_39562__$1 = state_39562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39562__$1,(11),to,inst_39541);
} else {
if((state_val_39563 === (3))){
var inst_39560 = (state_39562[(2)]);
var state_39562__$1 = state_39562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39562__$1,inst_39560);
} else {
if((state_val_39563 === (12))){
var state_39562__$1 = state_39562;
var statearr_39570_39590 = state_39562__$1;
(statearr_39570_39590[(2)] = null);

(statearr_39570_39590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39563 === (2))){
var state_39562__$1 = state_39562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39562__$1,(4),from);
} else {
if((state_val_39563 === (11))){
var inst_39551 = (state_39562[(2)]);
var state_39562__$1 = state_39562;
if(cljs.core.truth_(inst_39551)){
var statearr_39571_39591 = state_39562__$1;
(statearr_39571_39591[(1)] = (12));

} else {
var statearr_39572_39592 = state_39562__$1;
(statearr_39572_39592[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39563 === (9))){
var state_39562__$1 = state_39562;
var statearr_39573_39593 = state_39562__$1;
(statearr_39573_39593[(2)] = null);

(statearr_39573_39593[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39563 === (5))){
var state_39562__$1 = state_39562;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39574_39594 = state_39562__$1;
(statearr_39574_39594[(1)] = (8));

} else {
var statearr_39575_39595 = state_39562__$1;
(statearr_39575_39595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39563 === (14))){
var inst_39556 = (state_39562[(2)]);
var state_39562__$1 = state_39562;
var statearr_39576_39596 = state_39562__$1;
(statearr_39576_39596[(2)] = inst_39556);

(statearr_39576_39596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39563 === (10))){
var inst_39548 = (state_39562[(2)]);
var state_39562__$1 = state_39562;
var statearr_39577_39597 = state_39562__$1;
(statearr_39577_39597[(2)] = inst_39548);

(statearr_39577_39597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39563 === (8))){
var inst_39545 = cljs.core.async.close_BANG_.call(null,to);
var state_39562__$1 = state_39562;
var statearr_39578_39598 = state_39562__$1;
(statearr_39578_39598[(2)] = inst_39545);

(statearr_39578_39598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39437__auto___39584))
;
return ((function (switch__39342__auto__,c__39437__auto___39584){
return (function() {
var cljs$core$async$state_machine__39343__auto__ = null;
var cljs$core$async$state_machine__39343__auto____0 = (function (){
var statearr_39579 = [null,null,null,null,null,null,null,null];
(statearr_39579[(0)] = cljs$core$async$state_machine__39343__auto__);

(statearr_39579[(1)] = (1));

return statearr_39579;
});
var cljs$core$async$state_machine__39343__auto____1 = (function (state_39562){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_39562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e39580){if((e39580 instanceof Object)){
var ex__39346__auto__ = e39580;
var statearr_39581_39599 = state_39562;
(statearr_39581_39599[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39600 = state_39562;
state_39562 = G__39600;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
cljs$core$async$state_machine__39343__auto__ = function(state_39562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39343__auto____1.call(this,state_39562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39343__auto____0;
cljs$core$async$state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39343__auto____1;
return cljs$core$async$state_machine__39343__auto__;
})()
;})(switch__39342__auto__,c__39437__auto___39584))
})();
var state__39439__auto__ = (function (){var statearr_39582 = f__39438__auto__.call(null);
(statearr_39582[(6)] = c__39437__auto___39584);

return statearr_39582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(c__39437__auto___39584))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__39601){
var vec__39602 = p__39601;
var v = cljs.core.nth.call(null,vec__39602,(0),null);
var p = cljs.core.nth.call(null,vec__39602,(1),null);
var job = vec__39602;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__39437__auto___39773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39437__auto___39773,res,vec__39602,v,p,job,jobs,results){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (c__39437__auto___39773,res,vec__39602,v,p,job,jobs,results){
return (function (state_39609){
var state_val_39610 = (state_39609[(1)]);
if((state_val_39610 === (1))){
var state_39609__$1 = state_39609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39609__$1,(2),res,v);
} else {
if((state_val_39610 === (2))){
var inst_39606 = (state_39609[(2)]);
var inst_39607 = cljs.core.async.close_BANG_.call(null,res);
var state_39609__$1 = (function (){var statearr_39611 = state_39609;
(statearr_39611[(7)] = inst_39606);

return statearr_39611;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39609__$1,inst_39607);
} else {
return null;
}
}
});})(c__39437__auto___39773,res,vec__39602,v,p,job,jobs,results))
;
return ((function (switch__39342__auto__,c__39437__auto___39773,res,vec__39602,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____0 = (function (){
var statearr_39612 = [null,null,null,null,null,null,null,null];
(statearr_39612[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__);

(statearr_39612[(1)] = (1));

return statearr_39612;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____1 = (function (state_39609){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_39609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e39613){if((e39613 instanceof Object)){
var ex__39346__auto__ = e39613;
var statearr_39614_39774 = state_39609;
(statearr_39614_39774[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39775 = state_39609;
state_39609 = G__39775;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__ = function(state_39609){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____1.call(this,state_39609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__;
})()
;})(switch__39342__auto__,c__39437__auto___39773,res,vec__39602,v,p,job,jobs,results))
})();
var state__39439__auto__ = (function (){var statearr_39615 = f__39438__auto__.call(null);
(statearr_39615[(6)] = c__39437__auto___39773);

return statearr_39615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(c__39437__auto___39773,res,vec__39602,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__39616){
var vec__39617 = p__39616;
var v = cljs.core.nth.call(null,vec__39617,(0),null);
var p = cljs.core.nth.call(null,vec__39617,(1),null);
var job = vec__39617;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___39776 = n;
var __39777 = (0);
while(true){
if((__39777 < n__4518__auto___39776)){
var G__39620_39778 = type;
var G__39620_39779__$1 = (((G__39620_39778 instanceof cljs.core.Keyword))?G__39620_39778.fqn:null);
switch (G__39620_39779__$1) {
case "compute":
var c__39437__auto___39781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39777,c__39437__auto___39781,G__39620_39778,G__39620_39779__$1,n__4518__auto___39776,jobs,results,process,async){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (__39777,c__39437__auto___39781,G__39620_39778,G__39620_39779__$1,n__4518__auto___39776,jobs,results,process,async){
return (function (state_39633){
var state_val_39634 = (state_39633[(1)]);
if((state_val_39634 === (1))){
var state_39633__$1 = state_39633;
var statearr_39635_39782 = state_39633__$1;
(statearr_39635_39782[(2)] = null);

(statearr_39635_39782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39634 === (2))){
var state_39633__$1 = state_39633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39633__$1,(4),jobs);
} else {
if((state_val_39634 === (3))){
var inst_39631 = (state_39633[(2)]);
var state_39633__$1 = state_39633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39633__$1,inst_39631);
} else {
if((state_val_39634 === (4))){
var inst_39623 = (state_39633[(2)]);
var inst_39624 = process.call(null,inst_39623);
var state_39633__$1 = state_39633;
if(cljs.core.truth_(inst_39624)){
var statearr_39636_39783 = state_39633__$1;
(statearr_39636_39783[(1)] = (5));

} else {
var statearr_39637_39784 = state_39633__$1;
(statearr_39637_39784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39634 === (5))){
var state_39633__$1 = state_39633;
var statearr_39638_39785 = state_39633__$1;
(statearr_39638_39785[(2)] = null);

(statearr_39638_39785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39634 === (6))){
var state_39633__$1 = state_39633;
var statearr_39639_39786 = state_39633__$1;
(statearr_39639_39786[(2)] = null);

(statearr_39639_39786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39634 === (7))){
var inst_39629 = (state_39633[(2)]);
var state_39633__$1 = state_39633;
var statearr_39640_39787 = state_39633__$1;
(statearr_39640_39787[(2)] = inst_39629);

(statearr_39640_39787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__39777,c__39437__auto___39781,G__39620_39778,G__39620_39779__$1,n__4518__auto___39776,jobs,results,process,async))
;
return ((function (__39777,switch__39342__auto__,c__39437__auto___39781,G__39620_39778,G__39620_39779__$1,n__4518__auto___39776,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____0 = (function (){
var statearr_39641 = [null,null,null,null,null,null,null];
(statearr_39641[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__);

(statearr_39641[(1)] = (1));

return statearr_39641;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____1 = (function (state_39633){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_39633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e39642){if((e39642 instanceof Object)){
var ex__39346__auto__ = e39642;
var statearr_39643_39788 = state_39633;
(statearr_39643_39788[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39789 = state_39633;
state_39633 = G__39789;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__ = function(state_39633){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____1.call(this,state_39633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__;
})()
;})(__39777,switch__39342__auto__,c__39437__auto___39781,G__39620_39778,G__39620_39779__$1,n__4518__auto___39776,jobs,results,process,async))
})();
var state__39439__auto__ = (function (){var statearr_39644 = f__39438__auto__.call(null);
(statearr_39644[(6)] = c__39437__auto___39781);

return statearr_39644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(__39777,c__39437__auto___39781,G__39620_39778,G__39620_39779__$1,n__4518__auto___39776,jobs,results,process,async))
);


break;
case "async":
var c__39437__auto___39790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39777,c__39437__auto___39790,G__39620_39778,G__39620_39779__$1,n__4518__auto___39776,jobs,results,process,async){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (__39777,c__39437__auto___39790,G__39620_39778,G__39620_39779__$1,n__4518__auto___39776,jobs,results,process,async){
return (function (state_39657){
var state_val_39658 = (state_39657[(1)]);
if((state_val_39658 === (1))){
var state_39657__$1 = state_39657;
var statearr_39659_39791 = state_39657__$1;
(statearr_39659_39791[(2)] = null);

(statearr_39659_39791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39658 === (2))){
var state_39657__$1 = state_39657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39657__$1,(4),jobs);
} else {
if((state_val_39658 === (3))){
var inst_39655 = (state_39657[(2)]);
var state_39657__$1 = state_39657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39657__$1,inst_39655);
} else {
if((state_val_39658 === (4))){
var inst_39647 = (state_39657[(2)]);
var inst_39648 = async.call(null,inst_39647);
var state_39657__$1 = state_39657;
if(cljs.core.truth_(inst_39648)){
var statearr_39660_39792 = state_39657__$1;
(statearr_39660_39792[(1)] = (5));

} else {
var statearr_39661_39793 = state_39657__$1;
(statearr_39661_39793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39658 === (5))){
var state_39657__$1 = state_39657;
var statearr_39662_39794 = state_39657__$1;
(statearr_39662_39794[(2)] = null);

(statearr_39662_39794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39658 === (6))){
var state_39657__$1 = state_39657;
var statearr_39663_39795 = state_39657__$1;
(statearr_39663_39795[(2)] = null);

(statearr_39663_39795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39658 === (7))){
var inst_39653 = (state_39657[(2)]);
var state_39657__$1 = state_39657;
var statearr_39664_39796 = state_39657__$1;
(statearr_39664_39796[(2)] = inst_39653);

(statearr_39664_39796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__39777,c__39437__auto___39790,G__39620_39778,G__39620_39779__$1,n__4518__auto___39776,jobs,results,process,async))
;
return ((function (__39777,switch__39342__auto__,c__39437__auto___39790,G__39620_39778,G__39620_39779__$1,n__4518__auto___39776,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____0 = (function (){
var statearr_39665 = [null,null,null,null,null,null,null];
(statearr_39665[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__);

(statearr_39665[(1)] = (1));

return statearr_39665;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____1 = (function (state_39657){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_39657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e39666){if((e39666 instanceof Object)){
var ex__39346__auto__ = e39666;
var statearr_39667_39797 = state_39657;
(statearr_39667_39797[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39798 = state_39657;
state_39657 = G__39798;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__ = function(state_39657){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____1.call(this,state_39657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__;
})()
;})(__39777,switch__39342__auto__,c__39437__auto___39790,G__39620_39778,G__39620_39779__$1,n__4518__auto___39776,jobs,results,process,async))
})();
var state__39439__auto__ = (function (){var statearr_39668 = f__39438__auto__.call(null);
(statearr_39668[(6)] = c__39437__auto___39790);

return statearr_39668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(__39777,c__39437__auto___39790,G__39620_39778,G__39620_39779__$1,n__4518__auto___39776,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39620_39779__$1)].join('')));

}

var G__39799 = (__39777 + (1));
__39777 = G__39799;
continue;
} else {
}
break;
}

var c__39437__auto___39800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39437__auto___39800,jobs,results,process,async){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (c__39437__auto___39800,jobs,results,process,async){
return (function (state_39690){
var state_val_39691 = (state_39690[(1)]);
if((state_val_39691 === (7))){
var inst_39686 = (state_39690[(2)]);
var state_39690__$1 = state_39690;
var statearr_39692_39801 = state_39690__$1;
(statearr_39692_39801[(2)] = inst_39686);

(statearr_39692_39801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39691 === (1))){
var state_39690__$1 = state_39690;
var statearr_39693_39802 = state_39690__$1;
(statearr_39693_39802[(2)] = null);

(statearr_39693_39802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39691 === (4))){
var inst_39671 = (state_39690[(7)]);
var inst_39671__$1 = (state_39690[(2)]);
var inst_39672 = (inst_39671__$1 == null);
var state_39690__$1 = (function (){var statearr_39694 = state_39690;
(statearr_39694[(7)] = inst_39671__$1);

return statearr_39694;
})();
if(cljs.core.truth_(inst_39672)){
var statearr_39695_39803 = state_39690__$1;
(statearr_39695_39803[(1)] = (5));

} else {
var statearr_39696_39804 = state_39690__$1;
(statearr_39696_39804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39691 === (6))){
var inst_39676 = (state_39690[(8)]);
var inst_39671 = (state_39690[(7)]);
var inst_39676__$1 = cljs.core.async.chan.call(null,(1));
var inst_39677 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39678 = [inst_39671,inst_39676__$1];
var inst_39679 = (new cljs.core.PersistentVector(null,2,(5),inst_39677,inst_39678,null));
var state_39690__$1 = (function (){var statearr_39697 = state_39690;
(statearr_39697[(8)] = inst_39676__$1);

return statearr_39697;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39690__$1,(8),jobs,inst_39679);
} else {
if((state_val_39691 === (3))){
var inst_39688 = (state_39690[(2)]);
var state_39690__$1 = state_39690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39690__$1,inst_39688);
} else {
if((state_val_39691 === (2))){
var state_39690__$1 = state_39690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39690__$1,(4),from);
} else {
if((state_val_39691 === (9))){
var inst_39683 = (state_39690[(2)]);
var state_39690__$1 = (function (){var statearr_39698 = state_39690;
(statearr_39698[(9)] = inst_39683);

return statearr_39698;
})();
var statearr_39699_39805 = state_39690__$1;
(statearr_39699_39805[(2)] = null);

(statearr_39699_39805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39691 === (5))){
var inst_39674 = cljs.core.async.close_BANG_.call(null,jobs);
var state_39690__$1 = state_39690;
var statearr_39700_39806 = state_39690__$1;
(statearr_39700_39806[(2)] = inst_39674);

(statearr_39700_39806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39691 === (8))){
var inst_39676 = (state_39690[(8)]);
var inst_39681 = (state_39690[(2)]);
var state_39690__$1 = (function (){var statearr_39701 = state_39690;
(statearr_39701[(10)] = inst_39681);

return statearr_39701;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39690__$1,(9),results,inst_39676);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__39437__auto___39800,jobs,results,process,async))
;
return ((function (switch__39342__auto__,c__39437__auto___39800,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____0 = (function (){
var statearr_39702 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39702[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__);

(statearr_39702[(1)] = (1));

return statearr_39702;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____1 = (function (state_39690){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_39690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e39703){if((e39703 instanceof Object)){
var ex__39346__auto__ = e39703;
var statearr_39704_39807 = state_39690;
(statearr_39704_39807[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39808 = state_39690;
state_39690 = G__39808;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__ = function(state_39690){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____1.call(this,state_39690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__;
})()
;})(switch__39342__auto__,c__39437__auto___39800,jobs,results,process,async))
})();
var state__39439__auto__ = (function (){var statearr_39705 = f__39438__auto__.call(null);
(statearr_39705[(6)] = c__39437__auto___39800);

return statearr_39705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(c__39437__auto___39800,jobs,results,process,async))
);


var c__39437__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39437__auto__,jobs,results,process,async){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (c__39437__auto__,jobs,results,process,async){
return (function (state_39743){
var state_val_39744 = (state_39743[(1)]);
if((state_val_39744 === (7))){
var inst_39739 = (state_39743[(2)]);
var state_39743__$1 = state_39743;
var statearr_39745_39809 = state_39743__$1;
(statearr_39745_39809[(2)] = inst_39739);

(statearr_39745_39809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39744 === (20))){
var state_39743__$1 = state_39743;
var statearr_39746_39810 = state_39743__$1;
(statearr_39746_39810[(2)] = null);

(statearr_39746_39810[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39744 === (1))){
var state_39743__$1 = state_39743;
var statearr_39747_39811 = state_39743__$1;
(statearr_39747_39811[(2)] = null);

(statearr_39747_39811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39744 === (4))){
var inst_39708 = (state_39743[(7)]);
var inst_39708__$1 = (state_39743[(2)]);
var inst_39709 = (inst_39708__$1 == null);
var state_39743__$1 = (function (){var statearr_39748 = state_39743;
(statearr_39748[(7)] = inst_39708__$1);

return statearr_39748;
})();
if(cljs.core.truth_(inst_39709)){
var statearr_39749_39812 = state_39743__$1;
(statearr_39749_39812[(1)] = (5));

} else {
var statearr_39750_39813 = state_39743__$1;
(statearr_39750_39813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39744 === (15))){
var inst_39721 = (state_39743[(8)]);
var state_39743__$1 = state_39743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39743__$1,(18),to,inst_39721);
} else {
if((state_val_39744 === (21))){
var inst_39734 = (state_39743[(2)]);
var state_39743__$1 = state_39743;
var statearr_39751_39814 = state_39743__$1;
(statearr_39751_39814[(2)] = inst_39734);

(statearr_39751_39814[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39744 === (13))){
var inst_39736 = (state_39743[(2)]);
var state_39743__$1 = (function (){var statearr_39752 = state_39743;
(statearr_39752[(9)] = inst_39736);

return statearr_39752;
})();
var statearr_39753_39815 = state_39743__$1;
(statearr_39753_39815[(2)] = null);

(statearr_39753_39815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39744 === (6))){
var inst_39708 = (state_39743[(7)]);
var state_39743__$1 = state_39743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39743__$1,(11),inst_39708);
} else {
if((state_val_39744 === (17))){
var inst_39729 = (state_39743[(2)]);
var state_39743__$1 = state_39743;
if(cljs.core.truth_(inst_39729)){
var statearr_39754_39816 = state_39743__$1;
(statearr_39754_39816[(1)] = (19));

} else {
var statearr_39755_39817 = state_39743__$1;
(statearr_39755_39817[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39744 === (3))){
var inst_39741 = (state_39743[(2)]);
var state_39743__$1 = state_39743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39743__$1,inst_39741);
} else {
if((state_val_39744 === (12))){
var inst_39718 = (state_39743[(10)]);
var state_39743__$1 = state_39743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39743__$1,(14),inst_39718);
} else {
if((state_val_39744 === (2))){
var state_39743__$1 = state_39743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39743__$1,(4),results);
} else {
if((state_val_39744 === (19))){
var state_39743__$1 = state_39743;
var statearr_39756_39818 = state_39743__$1;
(statearr_39756_39818[(2)] = null);

(statearr_39756_39818[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39744 === (11))){
var inst_39718 = (state_39743[(2)]);
var state_39743__$1 = (function (){var statearr_39757 = state_39743;
(statearr_39757[(10)] = inst_39718);

return statearr_39757;
})();
var statearr_39758_39819 = state_39743__$1;
(statearr_39758_39819[(2)] = null);

(statearr_39758_39819[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39744 === (9))){
var state_39743__$1 = state_39743;
var statearr_39759_39820 = state_39743__$1;
(statearr_39759_39820[(2)] = null);

(statearr_39759_39820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39744 === (5))){
var state_39743__$1 = state_39743;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39760_39821 = state_39743__$1;
(statearr_39760_39821[(1)] = (8));

} else {
var statearr_39761_39822 = state_39743__$1;
(statearr_39761_39822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39744 === (14))){
var inst_39721 = (state_39743[(8)]);
var inst_39723 = (state_39743[(11)]);
var inst_39721__$1 = (state_39743[(2)]);
var inst_39722 = (inst_39721__$1 == null);
var inst_39723__$1 = cljs.core.not.call(null,inst_39722);
var state_39743__$1 = (function (){var statearr_39762 = state_39743;
(statearr_39762[(8)] = inst_39721__$1);

(statearr_39762[(11)] = inst_39723__$1);

return statearr_39762;
})();
if(inst_39723__$1){
var statearr_39763_39823 = state_39743__$1;
(statearr_39763_39823[(1)] = (15));

} else {
var statearr_39764_39824 = state_39743__$1;
(statearr_39764_39824[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39744 === (16))){
var inst_39723 = (state_39743[(11)]);
var state_39743__$1 = state_39743;
var statearr_39765_39825 = state_39743__$1;
(statearr_39765_39825[(2)] = inst_39723);

(statearr_39765_39825[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39744 === (10))){
var inst_39715 = (state_39743[(2)]);
var state_39743__$1 = state_39743;
var statearr_39766_39826 = state_39743__$1;
(statearr_39766_39826[(2)] = inst_39715);

(statearr_39766_39826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39744 === (18))){
var inst_39726 = (state_39743[(2)]);
var state_39743__$1 = state_39743;
var statearr_39767_39827 = state_39743__$1;
(statearr_39767_39827[(2)] = inst_39726);

(statearr_39767_39827[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39744 === (8))){
var inst_39712 = cljs.core.async.close_BANG_.call(null,to);
var state_39743__$1 = state_39743;
var statearr_39768_39828 = state_39743__$1;
(statearr_39768_39828[(2)] = inst_39712);

(statearr_39768_39828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39437__auto__,jobs,results,process,async))
;
return ((function (switch__39342__auto__,c__39437__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____0 = (function (){
var statearr_39769 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39769[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__);

(statearr_39769[(1)] = (1));

return statearr_39769;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____1 = (function (state_39743){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_39743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e39770){if((e39770 instanceof Object)){
var ex__39346__auto__ = e39770;
var statearr_39771_39829 = state_39743;
(statearr_39771_39829[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39830 = state_39743;
state_39743 = G__39830;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__ = function(state_39743){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____1.call(this,state_39743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39343__auto__;
})()
;})(switch__39342__auto__,c__39437__auto__,jobs,results,process,async))
})();
var state__39439__auto__ = (function (){var statearr_39772 = f__39438__auto__.call(null);
(statearr_39772[(6)] = c__39437__auto__);

return statearr_39772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(c__39437__auto__,jobs,results,process,async))
);

return c__39437__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__39832 = arguments.length;
switch (G__39832) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__39835 = arguments.length;
switch (G__39835) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__39838 = arguments.length;
switch (G__39838) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__39437__auto___39887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39437__auto___39887,tc,fc){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (c__39437__auto___39887,tc,fc){
return (function (state_39864){
var state_val_39865 = (state_39864[(1)]);
if((state_val_39865 === (7))){
var inst_39860 = (state_39864[(2)]);
var state_39864__$1 = state_39864;
var statearr_39866_39888 = state_39864__$1;
(statearr_39866_39888[(2)] = inst_39860);

(statearr_39866_39888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39865 === (1))){
var state_39864__$1 = state_39864;
var statearr_39867_39889 = state_39864__$1;
(statearr_39867_39889[(2)] = null);

(statearr_39867_39889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39865 === (4))){
var inst_39841 = (state_39864[(7)]);
var inst_39841__$1 = (state_39864[(2)]);
var inst_39842 = (inst_39841__$1 == null);
var state_39864__$1 = (function (){var statearr_39868 = state_39864;
(statearr_39868[(7)] = inst_39841__$1);

return statearr_39868;
})();
if(cljs.core.truth_(inst_39842)){
var statearr_39869_39890 = state_39864__$1;
(statearr_39869_39890[(1)] = (5));

} else {
var statearr_39870_39891 = state_39864__$1;
(statearr_39870_39891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39865 === (13))){
var state_39864__$1 = state_39864;
var statearr_39871_39892 = state_39864__$1;
(statearr_39871_39892[(2)] = null);

(statearr_39871_39892[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39865 === (6))){
var inst_39841 = (state_39864[(7)]);
var inst_39847 = p.call(null,inst_39841);
var state_39864__$1 = state_39864;
if(cljs.core.truth_(inst_39847)){
var statearr_39872_39893 = state_39864__$1;
(statearr_39872_39893[(1)] = (9));

} else {
var statearr_39873_39894 = state_39864__$1;
(statearr_39873_39894[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39865 === (3))){
var inst_39862 = (state_39864[(2)]);
var state_39864__$1 = state_39864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39864__$1,inst_39862);
} else {
if((state_val_39865 === (12))){
var state_39864__$1 = state_39864;
var statearr_39874_39895 = state_39864__$1;
(statearr_39874_39895[(2)] = null);

(statearr_39874_39895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39865 === (2))){
var state_39864__$1 = state_39864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39864__$1,(4),ch);
} else {
if((state_val_39865 === (11))){
var inst_39841 = (state_39864[(7)]);
var inst_39851 = (state_39864[(2)]);
var state_39864__$1 = state_39864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39864__$1,(8),inst_39851,inst_39841);
} else {
if((state_val_39865 === (9))){
var state_39864__$1 = state_39864;
var statearr_39875_39896 = state_39864__$1;
(statearr_39875_39896[(2)] = tc);

(statearr_39875_39896[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39865 === (5))){
var inst_39844 = cljs.core.async.close_BANG_.call(null,tc);
var inst_39845 = cljs.core.async.close_BANG_.call(null,fc);
var state_39864__$1 = (function (){var statearr_39876 = state_39864;
(statearr_39876[(8)] = inst_39844);

return statearr_39876;
})();
var statearr_39877_39897 = state_39864__$1;
(statearr_39877_39897[(2)] = inst_39845);

(statearr_39877_39897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39865 === (14))){
var inst_39858 = (state_39864[(2)]);
var state_39864__$1 = state_39864;
var statearr_39878_39898 = state_39864__$1;
(statearr_39878_39898[(2)] = inst_39858);

(statearr_39878_39898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39865 === (10))){
var state_39864__$1 = state_39864;
var statearr_39879_39899 = state_39864__$1;
(statearr_39879_39899[(2)] = fc);

(statearr_39879_39899[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39865 === (8))){
var inst_39853 = (state_39864[(2)]);
var state_39864__$1 = state_39864;
if(cljs.core.truth_(inst_39853)){
var statearr_39880_39900 = state_39864__$1;
(statearr_39880_39900[(1)] = (12));

} else {
var statearr_39881_39901 = state_39864__$1;
(statearr_39881_39901[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39437__auto___39887,tc,fc))
;
return ((function (switch__39342__auto__,c__39437__auto___39887,tc,fc){
return (function() {
var cljs$core$async$state_machine__39343__auto__ = null;
var cljs$core$async$state_machine__39343__auto____0 = (function (){
var statearr_39882 = [null,null,null,null,null,null,null,null,null];
(statearr_39882[(0)] = cljs$core$async$state_machine__39343__auto__);

(statearr_39882[(1)] = (1));

return statearr_39882;
});
var cljs$core$async$state_machine__39343__auto____1 = (function (state_39864){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_39864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e39883){if((e39883 instanceof Object)){
var ex__39346__auto__ = e39883;
var statearr_39884_39902 = state_39864;
(statearr_39884_39902[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39903 = state_39864;
state_39864 = G__39903;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
cljs$core$async$state_machine__39343__auto__ = function(state_39864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39343__auto____1.call(this,state_39864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39343__auto____0;
cljs$core$async$state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39343__auto____1;
return cljs$core$async$state_machine__39343__auto__;
})()
;})(switch__39342__auto__,c__39437__auto___39887,tc,fc))
})();
var state__39439__auto__ = (function (){var statearr_39885 = f__39438__auto__.call(null);
(statearr_39885[(6)] = c__39437__auto___39887);

return statearr_39885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(c__39437__auto___39887,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__39437__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39437__auto__){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (c__39437__auto__){
return (function (state_39924){
var state_val_39925 = (state_39924[(1)]);
if((state_val_39925 === (7))){
var inst_39920 = (state_39924[(2)]);
var state_39924__$1 = state_39924;
var statearr_39926_39944 = state_39924__$1;
(statearr_39926_39944[(2)] = inst_39920);

(statearr_39926_39944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39925 === (1))){
var inst_39904 = init;
var state_39924__$1 = (function (){var statearr_39927 = state_39924;
(statearr_39927[(7)] = inst_39904);

return statearr_39927;
})();
var statearr_39928_39945 = state_39924__$1;
(statearr_39928_39945[(2)] = null);

(statearr_39928_39945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39925 === (4))){
var inst_39907 = (state_39924[(8)]);
var inst_39907__$1 = (state_39924[(2)]);
var inst_39908 = (inst_39907__$1 == null);
var state_39924__$1 = (function (){var statearr_39929 = state_39924;
(statearr_39929[(8)] = inst_39907__$1);

return statearr_39929;
})();
if(cljs.core.truth_(inst_39908)){
var statearr_39930_39946 = state_39924__$1;
(statearr_39930_39946[(1)] = (5));

} else {
var statearr_39931_39947 = state_39924__$1;
(statearr_39931_39947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39925 === (6))){
var inst_39911 = (state_39924[(9)]);
var inst_39907 = (state_39924[(8)]);
var inst_39904 = (state_39924[(7)]);
var inst_39911__$1 = f.call(null,inst_39904,inst_39907);
var inst_39912 = cljs.core.reduced_QMARK_.call(null,inst_39911__$1);
var state_39924__$1 = (function (){var statearr_39932 = state_39924;
(statearr_39932[(9)] = inst_39911__$1);

return statearr_39932;
})();
if(inst_39912){
var statearr_39933_39948 = state_39924__$1;
(statearr_39933_39948[(1)] = (8));

} else {
var statearr_39934_39949 = state_39924__$1;
(statearr_39934_39949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39925 === (3))){
var inst_39922 = (state_39924[(2)]);
var state_39924__$1 = state_39924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39924__$1,inst_39922);
} else {
if((state_val_39925 === (2))){
var state_39924__$1 = state_39924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39924__$1,(4),ch);
} else {
if((state_val_39925 === (9))){
var inst_39911 = (state_39924[(9)]);
var inst_39904 = inst_39911;
var state_39924__$1 = (function (){var statearr_39935 = state_39924;
(statearr_39935[(7)] = inst_39904);

return statearr_39935;
})();
var statearr_39936_39950 = state_39924__$1;
(statearr_39936_39950[(2)] = null);

(statearr_39936_39950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39925 === (5))){
var inst_39904 = (state_39924[(7)]);
var state_39924__$1 = state_39924;
var statearr_39937_39951 = state_39924__$1;
(statearr_39937_39951[(2)] = inst_39904);

(statearr_39937_39951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39925 === (10))){
var inst_39918 = (state_39924[(2)]);
var state_39924__$1 = state_39924;
var statearr_39938_39952 = state_39924__$1;
(statearr_39938_39952[(2)] = inst_39918);

(statearr_39938_39952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39925 === (8))){
var inst_39911 = (state_39924[(9)]);
var inst_39914 = cljs.core.deref.call(null,inst_39911);
var state_39924__$1 = state_39924;
var statearr_39939_39953 = state_39924__$1;
(statearr_39939_39953[(2)] = inst_39914);

(statearr_39939_39953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__39437__auto__))
;
return ((function (switch__39342__auto__,c__39437__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__39343__auto__ = null;
var cljs$core$async$reduce_$_state_machine__39343__auto____0 = (function (){
var statearr_39940 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39940[(0)] = cljs$core$async$reduce_$_state_machine__39343__auto__);

(statearr_39940[(1)] = (1));

return statearr_39940;
});
var cljs$core$async$reduce_$_state_machine__39343__auto____1 = (function (state_39924){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_39924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e39941){if((e39941 instanceof Object)){
var ex__39346__auto__ = e39941;
var statearr_39942_39954 = state_39924;
(statearr_39942_39954[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39955 = state_39924;
state_39924 = G__39955;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__39343__auto__ = function(state_39924){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__39343__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__39343__auto____1.call(this,state_39924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__39343__auto____0;
cljs$core$async$reduce_$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__39343__auto____1;
return cljs$core$async$reduce_$_state_machine__39343__auto__;
})()
;})(switch__39342__auto__,c__39437__auto__))
})();
var state__39439__auto__ = (function (){var statearr_39943 = f__39438__auto__.call(null);
(statearr_39943[(6)] = c__39437__auto__);

return statearr_39943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(c__39437__auto__))
);

return c__39437__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__39437__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39437__auto__,f__$1){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (c__39437__auto__,f__$1){
return (function (state_39961){
var state_val_39962 = (state_39961[(1)]);
if((state_val_39962 === (1))){
var inst_39956 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_39961__$1 = state_39961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39961__$1,(2),inst_39956);
} else {
if((state_val_39962 === (2))){
var inst_39958 = (state_39961[(2)]);
var inst_39959 = f__$1.call(null,inst_39958);
var state_39961__$1 = state_39961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39961__$1,inst_39959);
} else {
return null;
}
}
});})(c__39437__auto__,f__$1))
;
return ((function (switch__39342__auto__,c__39437__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__39343__auto__ = null;
var cljs$core$async$transduce_$_state_machine__39343__auto____0 = (function (){
var statearr_39963 = [null,null,null,null,null,null,null];
(statearr_39963[(0)] = cljs$core$async$transduce_$_state_machine__39343__auto__);

(statearr_39963[(1)] = (1));

return statearr_39963;
});
var cljs$core$async$transduce_$_state_machine__39343__auto____1 = (function (state_39961){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_39961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e39964){if((e39964 instanceof Object)){
var ex__39346__auto__ = e39964;
var statearr_39965_39967 = state_39961;
(statearr_39965_39967[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39968 = state_39961;
state_39961 = G__39968;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__39343__auto__ = function(state_39961){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__39343__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__39343__auto____1.call(this,state_39961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__39343__auto____0;
cljs$core$async$transduce_$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__39343__auto____1;
return cljs$core$async$transduce_$_state_machine__39343__auto__;
})()
;})(switch__39342__auto__,c__39437__auto__,f__$1))
})();
var state__39439__auto__ = (function (){var statearr_39966 = f__39438__auto__.call(null);
(statearr_39966[(6)] = c__39437__auto__);

return statearr_39966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(c__39437__auto__,f__$1))
);

return c__39437__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__39970 = arguments.length;
switch (G__39970) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__39437__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39437__auto__){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (c__39437__auto__){
return (function (state_39995){
var state_val_39996 = (state_39995[(1)]);
if((state_val_39996 === (7))){
var inst_39977 = (state_39995[(2)]);
var state_39995__$1 = state_39995;
var statearr_39997_40018 = state_39995__$1;
(statearr_39997_40018[(2)] = inst_39977);

(statearr_39997_40018[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39996 === (1))){
var inst_39971 = cljs.core.seq.call(null,coll);
var inst_39972 = inst_39971;
var state_39995__$1 = (function (){var statearr_39998 = state_39995;
(statearr_39998[(7)] = inst_39972);

return statearr_39998;
})();
var statearr_39999_40019 = state_39995__$1;
(statearr_39999_40019[(2)] = null);

(statearr_39999_40019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39996 === (4))){
var inst_39972 = (state_39995[(7)]);
var inst_39975 = cljs.core.first.call(null,inst_39972);
var state_39995__$1 = state_39995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39995__$1,(7),ch,inst_39975);
} else {
if((state_val_39996 === (13))){
var inst_39989 = (state_39995[(2)]);
var state_39995__$1 = state_39995;
var statearr_40000_40020 = state_39995__$1;
(statearr_40000_40020[(2)] = inst_39989);

(statearr_40000_40020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39996 === (6))){
var inst_39980 = (state_39995[(2)]);
var state_39995__$1 = state_39995;
if(cljs.core.truth_(inst_39980)){
var statearr_40001_40021 = state_39995__$1;
(statearr_40001_40021[(1)] = (8));

} else {
var statearr_40002_40022 = state_39995__$1;
(statearr_40002_40022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39996 === (3))){
var inst_39993 = (state_39995[(2)]);
var state_39995__$1 = state_39995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39995__$1,inst_39993);
} else {
if((state_val_39996 === (12))){
var state_39995__$1 = state_39995;
var statearr_40003_40023 = state_39995__$1;
(statearr_40003_40023[(2)] = null);

(statearr_40003_40023[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39996 === (2))){
var inst_39972 = (state_39995[(7)]);
var state_39995__$1 = state_39995;
if(cljs.core.truth_(inst_39972)){
var statearr_40004_40024 = state_39995__$1;
(statearr_40004_40024[(1)] = (4));

} else {
var statearr_40005_40025 = state_39995__$1;
(statearr_40005_40025[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39996 === (11))){
var inst_39986 = cljs.core.async.close_BANG_.call(null,ch);
var state_39995__$1 = state_39995;
var statearr_40006_40026 = state_39995__$1;
(statearr_40006_40026[(2)] = inst_39986);

(statearr_40006_40026[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39996 === (9))){
var state_39995__$1 = state_39995;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40007_40027 = state_39995__$1;
(statearr_40007_40027[(1)] = (11));

} else {
var statearr_40008_40028 = state_39995__$1;
(statearr_40008_40028[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39996 === (5))){
var inst_39972 = (state_39995[(7)]);
var state_39995__$1 = state_39995;
var statearr_40009_40029 = state_39995__$1;
(statearr_40009_40029[(2)] = inst_39972);

(statearr_40009_40029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39996 === (10))){
var inst_39991 = (state_39995[(2)]);
var state_39995__$1 = state_39995;
var statearr_40010_40030 = state_39995__$1;
(statearr_40010_40030[(2)] = inst_39991);

(statearr_40010_40030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39996 === (8))){
var inst_39972 = (state_39995[(7)]);
var inst_39982 = cljs.core.next.call(null,inst_39972);
var inst_39972__$1 = inst_39982;
var state_39995__$1 = (function (){var statearr_40011 = state_39995;
(statearr_40011[(7)] = inst_39972__$1);

return statearr_40011;
})();
var statearr_40012_40031 = state_39995__$1;
(statearr_40012_40031[(2)] = null);

(statearr_40012_40031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39437__auto__))
;
return ((function (switch__39342__auto__,c__39437__auto__){
return (function() {
var cljs$core$async$state_machine__39343__auto__ = null;
var cljs$core$async$state_machine__39343__auto____0 = (function (){
var statearr_40013 = [null,null,null,null,null,null,null,null];
(statearr_40013[(0)] = cljs$core$async$state_machine__39343__auto__);

(statearr_40013[(1)] = (1));

return statearr_40013;
});
var cljs$core$async$state_machine__39343__auto____1 = (function (state_39995){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_39995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e40014){if((e40014 instanceof Object)){
var ex__39346__auto__ = e40014;
var statearr_40015_40032 = state_39995;
(statearr_40015_40032[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40033 = state_39995;
state_39995 = G__40033;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
cljs$core$async$state_machine__39343__auto__ = function(state_39995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39343__auto____1.call(this,state_39995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39343__auto____0;
cljs$core$async$state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39343__auto____1;
return cljs$core$async$state_machine__39343__auto__;
})()
;})(switch__39342__auto__,c__39437__auto__))
})();
var state__39439__auto__ = (function (){var statearr_40016 = f__39438__auto__.call(null);
(statearr_40016[(6)] = c__39437__auto__);

return statearr_40016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(c__39437__auto__))
);

return c__39437__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40034 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40034 = (function (ch,cs,meta40035){
this.ch = ch;
this.cs = cs;
this.meta40035 = meta40035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_40036,meta40035__$1){
var self__ = this;
var _40036__$1 = this;
return (new cljs.core.async.t_cljs$core$async40034(self__.ch,self__.cs,meta40035__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async40034.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_40036){
var self__ = this;
var _40036__$1 = this;
return self__.meta40035;
});})(cs))
;

cljs.core.async.t_cljs$core$async40034.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40034.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async40034.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40034.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40034.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40034.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40034.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40035","meta40035",384201994,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async40034.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40034.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40034";

cljs.core.async.t_cljs$core$async40034.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async40034");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40034.
 */
cljs.core.async.__GT_t_cljs$core$async40034 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async40034(ch__$1,cs__$1,meta40035){
return (new cljs.core.async.t_cljs$core$async40034(ch__$1,cs__$1,meta40035));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async40034(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__39437__auto___40256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39437__auto___40256,cs,m,dchan,dctr,done){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (c__39437__auto___40256,cs,m,dchan,dctr,done){
return (function (state_40171){
var state_val_40172 = (state_40171[(1)]);
if((state_val_40172 === (7))){
var inst_40167 = (state_40171[(2)]);
var state_40171__$1 = state_40171;
var statearr_40173_40257 = state_40171__$1;
(statearr_40173_40257[(2)] = inst_40167);

(statearr_40173_40257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (20))){
var inst_40070 = (state_40171[(7)]);
var inst_40082 = cljs.core.first.call(null,inst_40070);
var inst_40083 = cljs.core.nth.call(null,inst_40082,(0),null);
var inst_40084 = cljs.core.nth.call(null,inst_40082,(1),null);
var state_40171__$1 = (function (){var statearr_40174 = state_40171;
(statearr_40174[(8)] = inst_40083);

return statearr_40174;
})();
if(cljs.core.truth_(inst_40084)){
var statearr_40175_40258 = state_40171__$1;
(statearr_40175_40258[(1)] = (22));

} else {
var statearr_40176_40259 = state_40171__$1;
(statearr_40176_40259[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (27))){
var inst_40112 = (state_40171[(9)]);
var inst_40119 = (state_40171[(10)]);
var inst_40039 = (state_40171[(11)]);
var inst_40114 = (state_40171[(12)]);
var inst_40119__$1 = cljs.core._nth.call(null,inst_40112,inst_40114);
var inst_40120 = cljs.core.async.put_BANG_.call(null,inst_40119__$1,inst_40039,done);
var state_40171__$1 = (function (){var statearr_40177 = state_40171;
(statearr_40177[(10)] = inst_40119__$1);

return statearr_40177;
})();
if(cljs.core.truth_(inst_40120)){
var statearr_40178_40260 = state_40171__$1;
(statearr_40178_40260[(1)] = (30));

} else {
var statearr_40179_40261 = state_40171__$1;
(statearr_40179_40261[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (1))){
var state_40171__$1 = state_40171;
var statearr_40180_40262 = state_40171__$1;
(statearr_40180_40262[(2)] = null);

(statearr_40180_40262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (24))){
var inst_40070 = (state_40171[(7)]);
var inst_40089 = (state_40171[(2)]);
var inst_40090 = cljs.core.next.call(null,inst_40070);
var inst_40048 = inst_40090;
var inst_40049 = null;
var inst_40050 = (0);
var inst_40051 = (0);
var state_40171__$1 = (function (){var statearr_40181 = state_40171;
(statearr_40181[(13)] = inst_40048);

(statearr_40181[(14)] = inst_40089);

(statearr_40181[(15)] = inst_40049);

(statearr_40181[(16)] = inst_40050);

(statearr_40181[(17)] = inst_40051);

return statearr_40181;
})();
var statearr_40182_40263 = state_40171__$1;
(statearr_40182_40263[(2)] = null);

(statearr_40182_40263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (39))){
var state_40171__$1 = state_40171;
var statearr_40186_40264 = state_40171__$1;
(statearr_40186_40264[(2)] = null);

(statearr_40186_40264[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (4))){
var inst_40039 = (state_40171[(11)]);
var inst_40039__$1 = (state_40171[(2)]);
var inst_40040 = (inst_40039__$1 == null);
var state_40171__$1 = (function (){var statearr_40187 = state_40171;
(statearr_40187[(11)] = inst_40039__$1);

return statearr_40187;
})();
if(cljs.core.truth_(inst_40040)){
var statearr_40188_40265 = state_40171__$1;
(statearr_40188_40265[(1)] = (5));

} else {
var statearr_40189_40266 = state_40171__$1;
(statearr_40189_40266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (15))){
var inst_40048 = (state_40171[(13)]);
var inst_40049 = (state_40171[(15)]);
var inst_40050 = (state_40171[(16)]);
var inst_40051 = (state_40171[(17)]);
var inst_40066 = (state_40171[(2)]);
var inst_40067 = (inst_40051 + (1));
var tmp40183 = inst_40048;
var tmp40184 = inst_40049;
var tmp40185 = inst_40050;
var inst_40048__$1 = tmp40183;
var inst_40049__$1 = tmp40184;
var inst_40050__$1 = tmp40185;
var inst_40051__$1 = inst_40067;
var state_40171__$1 = (function (){var statearr_40190 = state_40171;
(statearr_40190[(13)] = inst_40048__$1);

(statearr_40190[(15)] = inst_40049__$1);

(statearr_40190[(18)] = inst_40066);

(statearr_40190[(16)] = inst_40050__$1);

(statearr_40190[(17)] = inst_40051__$1);

return statearr_40190;
})();
var statearr_40191_40267 = state_40171__$1;
(statearr_40191_40267[(2)] = null);

(statearr_40191_40267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (21))){
var inst_40093 = (state_40171[(2)]);
var state_40171__$1 = state_40171;
var statearr_40195_40268 = state_40171__$1;
(statearr_40195_40268[(2)] = inst_40093);

(statearr_40195_40268[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (31))){
var inst_40119 = (state_40171[(10)]);
var inst_40123 = done.call(null,null);
var inst_40124 = cljs.core.async.untap_STAR_.call(null,m,inst_40119);
var state_40171__$1 = (function (){var statearr_40196 = state_40171;
(statearr_40196[(19)] = inst_40123);

return statearr_40196;
})();
var statearr_40197_40269 = state_40171__$1;
(statearr_40197_40269[(2)] = inst_40124);

(statearr_40197_40269[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (32))){
var inst_40112 = (state_40171[(9)]);
var inst_40111 = (state_40171[(20)]);
var inst_40113 = (state_40171[(21)]);
var inst_40114 = (state_40171[(12)]);
var inst_40126 = (state_40171[(2)]);
var inst_40127 = (inst_40114 + (1));
var tmp40192 = inst_40112;
var tmp40193 = inst_40111;
var tmp40194 = inst_40113;
var inst_40111__$1 = tmp40193;
var inst_40112__$1 = tmp40192;
var inst_40113__$1 = tmp40194;
var inst_40114__$1 = inst_40127;
var state_40171__$1 = (function (){var statearr_40198 = state_40171;
(statearr_40198[(9)] = inst_40112__$1);

(statearr_40198[(20)] = inst_40111__$1);

(statearr_40198[(21)] = inst_40113__$1);

(statearr_40198[(12)] = inst_40114__$1);

(statearr_40198[(22)] = inst_40126);

return statearr_40198;
})();
var statearr_40199_40270 = state_40171__$1;
(statearr_40199_40270[(2)] = null);

(statearr_40199_40270[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (40))){
var inst_40139 = (state_40171[(23)]);
var inst_40143 = done.call(null,null);
var inst_40144 = cljs.core.async.untap_STAR_.call(null,m,inst_40139);
var state_40171__$1 = (function (){var statearr_40200 = state_40171;
(statearr_40200[(24)] = inst_40143);

return statearr_40200;
})();
var statearr_40201_40271 = state_40171__$1;
(statearr_40201_40271[(2)] = inst_40144);

(statearr_40201_40271[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (33))){
var inst_40130 = (state_40171[(25)]);
var inst_40132 = cljs.core.chunked_seq_QMARK_.call(null,inst_40130);
var state_40171__$1 = state_40171;
if(inst_40132){
var statearr_40202_40272 = state_40171__$1;
(statearr_40202_40272[(1)] = (36));

} else {
var statearr_40203_40273 = state_40171__$1;
(statearr_40203_40273[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (13))){
var inst_40060 = (state_40171[(26)]);
var inst_40063 = cljs.core.async.close_BANG_.call(null,inst_40060);
var state_40171__$1 = state_40171;
var statearr_40204_40274 = state_40171__$1;
(statearr_40204_40274[(2)] = inst_40063);

(statearr_40204_40274[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (22))){
var inst_40083 = (state_40171[(8)]);
var inst_40086 = cljs.core.async.close_BANG_.call(null,inst_40083);
var state_40171__$1 = state_40171;
var statearr_40205_40275 = state_40171__$1;
(statearr_40205_40275[(2)] = inst_40086);

(statearr_40205_40275[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (36))){
var inst_40130 = (state_40171[(25)]);
var inst_40134 = cljs.core.chunk_first.call(null,inst_40130);
var inst_40135 = cljs.core.chunk_rest.call(null,inst_40130);
var inst_40136 = cljs.core.count.call(null,inst_40134);
var inst_40111 = inst_40135;
var inst_40112 = inst_40134;
var inst_40113 = inst_40136;
var inst_40114 = (0);
var state_40171__$1 = (function (){var statearr_40206 = state_40171;
(statearr_40206[(9)] = inst_40112);

(statearr_40206[(20)] = inst_40111);

(statearr_40206[(21)] = inst_40113);

(statearr_40206[(12)] = inst_40114);

return statearr_40206;
})();
var statearr_40207_40276 = state_40171__$1;
(statearr_40207_40276[(2)] = null);

(statearr_40207_40276[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (41))){
var inst_40130 = (state_40171[(25)]);
var inst_40146 = (state_40171[(2)]);
var inst_40147 = cljs.core.next.call(null,inst_40130);
var inst_40111 = inst_40147;
var inst_40112 = null;
var inst_40113 = (0);
var inst_40114 = (0);
var state_40171__$1 = (function (){var statearr_40208 = state_40171;
(statearr_40208[(9)] = inst_40112);

(statearr_40208[(20)] = inst_40111);

(statearr_40208[(21)] = inst_40113);

(statearr_40208[(27)] = inst_40146);

(statearr_40208[(12)] = inst_40114);

return statearr_40208;
})();
var statearr_40209_40277 = state_40171__$1;
(statearr_40209_40277[(2)] = null);

(statearr_40209_40277[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (43))){
var state_40171__$1 = state_40171;
var statearr_40210_40278 = state_40171__$1;
(statearr_40210_40278[(2)] = null);

(statearr_40210_40278[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (29))){
var inst_40155 = (state_40171[(2)]);
var state_40171__$1 = state_40171;
var statearr_40211_40279 = state_40171__$1;
(statearr_40211_40279[(2)] = inst_40155);

(statearr_40211_40279[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (44))){
var inst_40164 = (state_40171[(2)]);
var state_40171__$1 = (function (){var statearr_40212 = state_40171;
(statearr_40212[(28)] = inst_40164);

return statearr_40212;
})();
var statearr_40213_40280 = state_40171__$1;
(statearr_40213_40280[(2)] = null);

(statearr_40213_40280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (6))){
var inst_40103 = (state_40171[(29)]);
var inst_40102 = cljs.core.deref.call(null,cs);
var inst_40103__$1 = cljs.core.keys.call(null,inst_40102);
var inst_40104 = cljs.core.count.call(null,inst_40103__$1);
var inst_40105 = cljs.core.reset_BANG_.call(null,dctr,inst_40104);
var inst_40110 = cljs.core.seq.call(null,inst_40103__$1);
var inst_40111 = inst_40110;
var inst_40112 = null;
var inst_40113 = (0);
var inst_40114 = (0);
var state_40171__$1 = (function (){var statearr_40214 = state_40171;
(statearr_40214[(9)] = inst_40112);

(statearr_40214[(20)] = inst_40111);

(statearr_40214[(21)] = inst_40113);

(statearr_40214[(30)] = inst_40105);

(statearr_40214[(29)] = inst_40103__$1);

(statearr_40214[(12)] = inst_40114);

return statearr_40214;
})();
var statearr_40215_40281 = state_40171__$1;
(statearr_40215_40281[(2)] = null);

(statearr_40215_40281[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (28))){
var inst_40111 = (state_40171[(20)]);
var inst_40130 = (state_40171[(25)]);
var inst_40130__$1 = cljs.core.seq.call(null,inst_40111);
var state_40171__$1 = (function (){var statearr_40216 = state_40171;
(statearr_40216[(25)] = inst_40130__$1);

return statearr_40216;
})();
if(inst_40130__$1){
var statearr_40217_40282 = state_40171__$1;
(statearr_40217_40282[(1)] = (33));

} else {
var statearr_40218_40283 = state_40171__$1;
(statearr_40218_40283[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (25))){
var inst_40113 = (state_40171[(21)]);
var inst_40114 = (state_40171[(12)]);
var inst_40116 = (inst_40114 < inst_40113);
var inst_40117 = inst_40116;
var state_40171__$1 = state_40171;
if(cljs.core.truth_(inst_40117)){
var statearr_40219_40284 = state_40171__$1;
(statearr_40219_40284[(1)] = (27));

} else {
var statearr_40220_40285 = state_40171__$1;
(statearr_40220_40285[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (34))){
var state_40171__$1 = state_40171;
var statearr_40221_40286 = state_40171__$1;
(statearr_40221_40286[(2)] = null);

(statearr_40221_40286[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (17))){
var state_40171__$1 = state_40171;
var statearr_40222_40287 = state_40171__$1;
(statearr_40222_40287[(2)] = null);

(statearr_40222_40287[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (3))){
var inst_40169 = (state_40171[(2)]);
var state_40171__$1 = state_40171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40171__$1,inst_40169);
} else {
if((state_val_40172 === (12))){
var inst_40098 = (state_40171[(2)]);
var state_40171__$1 = state_40171;
var statearr_40223_40288 = state_40171__$1;
(statearr_40223_40288[(2)] = inst_40098);

(statearr_40223_40288[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (2))){
var state_40171__$1 = state_40171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40171__$1,(4),ch);
} else {
if((state_val_40172 === (23))){
var state_40171__$1 = state_40171;
var statearr_40224_40289 = state_40171__$1;
(statearr_40224_40289[(2)] = null);

(statearr_40224_40289[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (35))){
var inst_40153 = (state_40171[(2)]);
var state_40171__$1 = state_40171;
var statearr_40225_40290 = state_40171__$1;
(statearr_40225_40290[(2)] = inst_40153);

(statearr_40225_40290[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (19))){
var inst_40070 = (state_40171[(7)]);
var inst_40074 = cljs.core.chunk_first.call(null,inst_40070);
var inst_40075 = cljs.core.chunk_rest.call(null,inst_40070);
var inst_40076 = cljs.core.count.call(null,inst_40074);
var inst_40048 = inst_40075;
var inst_40049 = inst_40074;
var inst_40050 = inst_40076;
var inst_40051 = (0);
var state_40171__$1 = (function (){var statearr_40226 = state_40171;
(statearr_40226[(13)] = inst_40048);

(statearr_40226[(15)] = inst_40049);

(statearr_40226[(16)] = inst_40050);

(statearr_40226[(17)] = inst_40051);

return statearr_40226;
})();
var statearr_40227_40291 = state_40171__$1;
(statearr_40227_40291[(2)] = null);

(statearr_40227_40291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (11))){
var inst_40048 = (state_40171[(13)]);
var inst_40070 = (state_40171[(7)]);
var inst_40070__$1 = cljs.core.seq.call(null,inst_40048);
var state_40171__$1 = (function (){var statearr_40228 = state_40171;
(statearr_40228[(7)] = inst_40070__$1);

return statearr_40228;
})();
if(inst_40070__$1){
var statearr_40229_40292 = state_40171__$1;
(statearr_40229_40292[(1)] = (16));

} else {
var statearr_40230_40293 = state_40171__$1;
(statearr_40230_40293[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (9))){
var inst_40100 = (state_40171[(2)]);
var state_40171__$1 = state_40171;
var statearr_40231_40294 = state_40171__$1;
(statearr_40231_40294[(2)] = inst_40100);

(statearr_40231_40294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (5))){
var inst_40046 = cljs.core.deref.call(null,cs);
var inst_40047 = cljs.core.seq.call(null,inst_40046);
var inst_40048 = inst_40047;
var inst_40049 = null;
var inst_40050 = (0);
var inst_40051 = (0);
var state_40171__$1 = (function (){var statearr_40232 = state_40171;
(statearr_40232[(13)] = inst_40048);

(statearr_40232[(15)] = inst_40049);

(statearr_40232[(16)] = inst_40050);

(statearr_40232[(17)] = inst_40051);

return statearr_40232;
})();
var statearr_40233_40295 = state_40171__$1;
(statearr_40233_40295[(2)] = null);

(statearr_40233_40295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (14))){
var state_40171__$1 = state_40171;
var statearr_40234_40296 = state_40171__$1;
(statearr_40234_40296[(2)] = null);

(statearr_40234_40296[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (45))){
var inst_40161 = (state_40171[(2)]);
var state_40171__$1 = state_40171;
var statearr_40235_40297 = state_40171__$1;
(statearr_40235_40297[(2)] = inst_40161);

(statearr_40235_40297[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (26))){
var inst_40103 = (state_40171[(29)]);
var inst_40157 = (state_40171[(2)]);
var inst_40158 = cljs.core.seq.call(null,inst_40103);
var state_40171__$1 = (function (){var statearr_40236 = state_40171;
(statearr_40236[(31)] = inst_40157);

return statearr_40236;
})();
if(inst_40158){
var statearr_40237_40298 = state_40171__$1;
(statearr_40237_40298[(1)] = (42));

} else {
var statearr_40238_40299 = state_40171__$1;
(statearr_40238_40299[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (16))){
var inst_40070 = (state_40171[(7)]);
var inst_40072 = cljs.core.chunked_seq_QMARK_.call(null,inst_40070);
var state_40171__$1 = state_40171;
if(inst_40072){
var statearr_40239_40300 = state_40171__$1;
(statearr_40239_40300[(1)] = (19));

} else {
var statearr_40240_40301 = state_40171__$1;
(statearr_40240_40301[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (38))){
var inst_40150 = (state_40171[(2)]);
var state_40171__$1 = state_40171;
var statearr_40241_40302 = state_40171__$1;
(statearr_40241_40302[(2)] = inst_40150);

(statearr_40241_40302[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (30))){
var state_40171__$1 = state_40171;
var statearr_40242_40303 = state_40171__$1;
(statearr_40242_40303[(2)] = null);

(statearr_40242_40303[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (10))){
var inst_40049 = (state_40171[(15)]);
var inst_40051 = (state_40171[(17)]);
var inst_40059 = cljs.core._nth.call(null,inst_40049,inst_40051);
var inst_40060 = cljs.core.nth.call(null,inst_40059,(0),null);
var inst_40061 = cljs.core.nth.call(null,inst_40059,(1),null);
var state_40171__$1 = (function (){var statearr_40243 = state_40171;
(statearr_40243[(26)] = inst_40060);

return statearr_40243;
})();
if(cljs.core.truth_(inst_40061)){
var statearr_40244_40304 = state_40171__$1;
(statearr_40244_40304[(1)] = (13));

} else {
var statearr_40245_40305 = state_40171__$1;
(statearr_40245_40305[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (18))){
var inst_40096 = (state_40171[(2)]);
var state_40171__$1 = state_40171;
var statearr_40246_40306 = state_40171__$1;
(statearr_40246_40306[(2)] = inst_40096);

(statearr_40246_40306[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (42))){
var state_40171__$1 = state_40171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40171__$1,(45),dchan);
} else {
if((state_val_40172 === (37))){
var inst_40139 = (state_40171[(23)]);
var inst_40039 = (state_40171[(11)]);
var inst_40130 = (state_40171[(25)]);
var inst_40139__$1 = cljs.core.first.call(null,inst_40130);
var inst_40140 = cljs.core.async.put_BANG_.call(null,inst_40139__$1,inst_40039,done);
var state_40171__$1 = (function (){var statearr_40247 = state_40171;
(statearr_40247[(23)] = inst_40139__$1);

return statearr_40247;
})();
if(cljs.core.truth_(inst_40140)){
var statearr_40248_40307 = state_40171__$1;
(statearr_40248_40307[(1)] = (39));

} else {
var statearr_40249_40308 = state_40171__$1;
(statearr_40249_40308[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40172 === (8))){
var inst_40050 = (state_40171[(16)]);
var inst_40051 = (state_40171[(17)]);
var inst_40053 = (inst_40051 < inst_40050);
var inst_40054 = inst_40053;
var state_40171__$1 = state_40171;
if(cljs.core.truth_(inst_40054)){
var statearr_40250_40309 = state_40171__$1;
(statearr_40250_40309[(1)] = (10));

} else {
var statearr_40251_40310 = state_40171__$1;
(statearr_40251_40310[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39437__auto___40256,cs,m,dchan,dctr,done))
;
return ((function (switch__39342__auto__,c__39437__auto___40256,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__39343__auto__ = null;
var cljs$core$async$mult_$_state_machine__39343__auto____0 = (function (){
var statearr_40252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40252[(0)] = cljs$core$async$mult_$_state_machine__39343__auto__);

(statearr_40252[(1)] = (1));

return statearr_40252;
});
var cljs$core$async$mult_$_state_machine__39343__auto____1 = (function (state_40171){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_40171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e40253){if((e40253 instanceof Object)){
var ex__39346__auto__ = e40253;
var statearr_40254_40311 = state_40171;
(statearr_40254_40311[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40312 = state_40171;
state_40171 = G__40312;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__39343__auto__ = function(state_40171){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__39343__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__39343__auto____1.call(this,state_40171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__39343__auto____0;
cljs$core$async$mult_$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__39343__auto____1;
return cljs$core$async$mult_$_state_machine__39343__auto__;
})()
;})(switch__39342__auto__,c__39437__auto___40256,cs,m,dchan,dctr,done))
})();
var state__39439__auto__ = (function (){var statearr_40255 = f__39438__auto__.call(null);
(statearr_40255[(6)] = c__39437__auto___40256);

return statearr_40255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(c__39437__auto___40256,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__40314 = arguments.length;
switch (G__40314) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___40326 = arguments.length;
var i__4642__auto___40327 = (0);
while(true){
if((i__4642__auto___40327 < len__4641__auto___40326)){
args__4647__auto__.push((arguments[i__4642__auto___40327]));

var G__40328 = (i__4642__auto___40327 + (1));
i__4642__auto___40327 = G__40328;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40320){
var map__40321 = p__40320;
var map__40321__$1 = (((((!((map__40321 == null))))?(((((map__40321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40321):map__40321);
var opts = map__40321__$1;
var statearr_40323_40329 = state;
(statearr_40323_40329[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__40321,map__40321__$1,opts){
return (function (val){
var statearr_40324_40330 = state;
(statearr_40324_40330[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__40321,map__40321__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_40325_40331 = state;
(statearr_40325_40331[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40316){
var G__40317 = cljs.core.first.call(null,seq40316);
var seq40316__$1 = cljs.core.next.call(null,seq40316);
var G__40318 = cljs.core.first.call(null,seq40316__$1);
var seq40316__$2 = cljs.core.next.call(null,seq40316__$1);
var G__40319 = cljs.core.first.call(null,seq40316__$2);
var seq40316__$3 = cljs.core.next.call(null,seq40316__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40317,G__40318,G__40319,seq40316__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40332 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40332 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta40333){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta40333 = meta40333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40334,meta40333__$1){
var self__ = this;
var _40334__$1 = this;
return (new cljs.core.async.t_cljs$core$async40332(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta40333__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40332.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40334){
var self__ = this;
var _40334__$1 = this;
return self__.meta40333;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40332.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40332.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40332.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40332.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40332.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40332.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40332.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40332.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40332.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta40333","meta40333",-1389648104,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40332.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40332";

cljs.core.async.t_cljs$core$async40332.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async40332");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40332.
 */
cljs.core.async.__GT_t_cljs$core$async40332 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async40332(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40333){
return (new cljs.core.async.t_cljs$core$async40332(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40333));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async40332(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39437__auto___40496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39437__auto___40496,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (c__39437__auto___40496,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40436){
var state_val_40437 = (state_40436[(1)]);
if((state_val_40437 === (7))){
var inst_40351 = (state_40436[(2)]);
var state_40436__$1 = state_40436;
var statearr_40438_40497 = state_40436__$1;
(statearr_40438_40497[(2)] = inst_40351);

(statearr_40438_40497[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (20))){
var inst_40363 = (state_40436[(7)]);
var state_40436__$1 = state_40436;
var statearr_40439_40498 = state_40436__$1;
(statearr_40439_40498[(2)] = inst_40363);

(statearr_40439_40498[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (27))){
var state_40436__$1 = state_40436;
var statearr_40440_40499 = state_40436__$1;
(statearr_40440_40499[(2)] = null);

(statearr_40440_40499[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (1))){
var inst_40338 = (state_40436[(8)]);
var inst_40338__$1 = calc_state.call(null);
var inst_40340 = (inst_40338__$1 == null);
var inst_40341 = cljs.core.not.call(null,inst_40340);
var state_40436__$1 = (function (){var statearr_40441 = state_40436;
(statearr_40441[(8)] = inst_40338__$1);

return statearr_40441;
})();
if(inst_40341){
var statearr_40442_40500 = state_40436__$1;
(statearr_40442_40500[(1)] = (2));

} else {
var statearr_40443_40501 = state_40436__$1;
(statearr_40443_40501[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (24))){
var inst_40387 = (state_40436[(9)]);
var inst_40396 = (state_40436[(10)]);
var inst_40410 = (state_40436[(11)]);
var inst_40410__$1 = inst_40387.call(null,inst_40396);
var state_40436__$1 = (function (){var statearr_40444 = state_40436;
(statearr_40444[(11)] = inst_40410__$1);

return statearr_40444;
})();
if(cljs.core.truth_(inst_40410__$1)){
var statearr_40445_40502 = state_40436__$1;
(statearr_40445_40502[(1)] = (29));

} else {
var statearr_40446_40503 = state_40436__$1;
(statearr_40446_40503[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (4))){
var inst_40354 = (state_40436[(2)]);
var state_40436__$1 = state_40436;
if(cljs.core.truth_(inst_40354)){
var statearr_40447_40504 = state_40436__$1;
(statearr_40447_40504[(1)] = (8));

} else {
var statearr_40448_40505 = state_40436__$1;
(statearr_40448_40505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (15))){
var inst_40381 = (state_40436[(2)]);
var state_40436__$1 = state_40436;
if(cljs.core.truth_(inst_40381)){
var statearr_40449_40506 = state_40436__$1;
(statearr_40449_40506[(1)] = (19));

} else {
var statearr_40450_40507 = state_40436__$1;
(statearr_40450_40507[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (21))){
var inst_40386 = (state_40436[(12)]);
var inst_40386__$1 = (state_40436[(2)]);
var inst_40387 = cljs.core.get.call(null,inst_40386__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40388 = cljs.core.get.call(null,inst_40386__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40389 = cljs.core.get.call(null,inst_40386__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40436__$1 = (function (){var statearr_40451 = state_40436;
(statearr_40451[(9)] = inst_40387);

(statearr_40451[(12)] = inst_40386__$1);

(statearr_40451[(13)] = inst_40388);

return statearr_40451;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40436__$1,(22),inst_40389);
} else {
if((state_val_40437 === (31))){
var inst_40418 = (state_40436[(2)]);
var state_40436__$1 = state_40436;
if(cljs.core.truth_(inst_40418)){
var statearr_40452_40508 = state_40436__$1;
(statearr_40452_40508[(1)] = (32));

} else {
var statearr_40453_40509 = state_40436__$1;
(statearr_40453_40509[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (32))){
var inst_40395 = (state_40436[(14)]);
var state_40436__$1 = state_40436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40436__$1,(35),out,inst_40395);
} else {
if((state_val_40437 === (33))){
var inst_40386 = (state_40436[(12)]);
var inst_40363 = inst_40386;
var state_40436__$1 = (function (){var statearr_40454 = state_40436;
(statearr_40454[(7)] = inst_40363);

return statearr_40454;
})();
var statearr_40455_40510 = state_40436__$1;
(statearr_40455_40510[(2)] = null);

(statearr_40455_40510[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (13))){
var inst_40363 = (state_40436[(7)]);
var inst_40370 = inst_40363.cljs$lang$protocol_mask$partition0$;
var inst_40371 = (inst_40370 & (64));
var inst_40372 = inst_40363.cljs$core$ISeq$;
var inst_40373 = (cljs.core.PROTOCOL_SENTINEL === inst_40372);
var inst_40374 = ((inst_40371) || (inst_40373));
var state_40436__$1 = state_40436;
if(cljs.core.truth_(inst_40374)){
var statearr_40456_40511 = state_40436__$1;
(statearr_40456_40511[(1)] = (16));

} else {
var statearr_40457_40512 = state_40436__$1;
(statearr_40457_40512[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (22))){
var inst_40395 = (state_40436[(14)]);
var inst_40396 = (state_40436[(10)]);
var inst_40394 = (state_40436[(2)]);
var inst_40395__$1 = cljs.core.nth.call(null,inst_40394,(0),null);
var inst_40396__$1 = cljs.core.nth.call(null,inst_40394,(1),null);
var inst_40397 = (inst_40395__$1 == null);
var inst_40398 = cljs.core._EQ_.call(null,inst_40396__$1,change);
var inst_40399 = ((inst_40397) || (inst_40398));
var state_40436__$1 = (function (){var statearr_40458 = state_40436;
(statearr_40458[(14)] = inst_40395__$1);

(statearr_40458[(10)] = inst_40396__$1);

return statearr_40458;
})();
if(cljs.core.truth_(inst_40399)){
var statearr_40459_40513 = state_40436__$1;
(statearr_40459_40513[(1)] = (23));

} else {
var statearr_40460_40514 = state_40436__$1;
(statearr_40460_40514[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (36))){
var inst_40386 = (state_40436[(12)]);
var inst_40363 = inst_40386;
var state_40436__$1 = (function (){var statearr_40461 = state_40436;
(statearr_40461[(7)] = inst_40363);

return statearr_40461;
})();
var statearr_40462_40515 = state_40436__$1;
(statearr_40462_40515[(2)] = null);

(statearr_40462_40515[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (29))){
var inst_40410 = (state_40436[(11)]);
var state_40436__$1 = state_40436;
var statearr_40463_40516 = state_40436__$1;
(statearr_40463_40516[(2)] = inst_40410);

(statearr_40463_40516[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (6))){
var state_40436__$1 = state_40436;
var statearr_40464_40517 = state_40436__$1;
(statearr_40464_40517[(2)] = false);

(statearr_40464_40517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (28))){
var inst_40406 = (state_40436[(2)]);
var inst_40407 = calc_state.call(null);
var inst_40363 = inst_40407;
var state_40436__$1 = (function (){var statearr_40465 = state_40436;
(statearr_40465[(15)] = inst_40406);

(statearr_40465[(7)] = inst_40363);

return statearr_40465;
})();
var statearr_40466_40518 = state_40436__$1;
(statearr_40466_40518[(2)] = null);

(statearr_40466_40518[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (25))){
var inst_40432 = (state_40436[(2)]);
var state_40436__$1 = state_40436;
var statearr_40467_40519 = state_40436__$1;
(statearr_40467_40519[(2)] = inst_40432);

(statearr_40467_40519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (34))){
var inst_40430 = (state_40436[(2)]);
var state_40436__$1 = state_40436;
var statearr_40468_40520 = state_40436__$1;
(statearr_40468_40520[(2)] = inst_40430);

(statearr_40468_40520[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (17))){
var state_40436__$1 = state_40436;
var statearr_40469_40521 = state_40436__$1;
(statearr_40469_40521[(2)] = false);

(statearr_40469_40521[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (3))){
var state_40436__$1 = state_40436;
var statearr_40470_40522 = state_40436__$1;
(statearr_40470_40522[(2)] = false);

(statearr_40470_40522[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (12))){
var inst_40434 = (state_40436[(2)]);
var state_40436__$1 = state_40436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40436__$1,inst_40434);
} else {
if((state_val_40437 === (2))){
var inst_40338 = (state_40436[(8)]);
var inst_40343 = inst_40338.cljs$lang$protocol_mask$partition0$;
var inst_40344 = (inst_40343 & (64));
var inst_40345 = inst_40338.cljs$core$ISeq$;
var inst_40346 = (cljs.core.PROTOCOL_SENTINEL === inst_40345);
var inst_40347 = ((inst_40344) || (inst_40346));
var state_40436__$1 = state_40436;
if(cljs.core.truth_(inst_40347)){
var statearr_40471_40523 = state_40436__$1;
(statearr_40471_40523[(1)] = (5));

} else {
var statearr_40472_40524 = state_40436__$1;
(statearr_40472_40524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (23))){
var inst_40395 = (state_40436[(14)]);
var inst_40401 = (inst_40395 == null);
var state_40436__$1 = state_40436;
if(cljs.core.truth_(inst_40401)){
var statearr_40473_40525 = state_40436__$1;
(statearr_40473_40525[(1)] = (26));

} else {
var statearr_40474_40526 = state_40436__$1;
(statearr_40474_40526[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (35))){
var inst_40421 = (state_40436[(2)]);
var state_40436__$1 = state_40436;
if(cljs.core.truth_(inst_40421)){
var statearr_40475_40527 = state_40436__$1;
(statearr_40475_40527[(1)] = (36));

} else {
var statearr_40476_40528 = state_40436__$1;
(statearr_40476_40528[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (19))){
var inst_40363 = (state_40436[(7)]);
var inst_40383 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40363);
var state_40436__$1 = state_40436;
var statearr_40477_40529 = state_40436__$1;
(statearr_40477_40529[(2)] = inst_40383);

(statearr_40477_40529[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (11))){
var inst_40363 = (state_40436[(7)]);
var inst_40367 = (inst_40363 == null);
var inst_40368 = cljs.core.not.call(null,inst_40367);
var state_40436__$1 = state_40436;
if(inst_40368){
var statearr_40478_40530 = state_40436__$1;
(statearr_40478_40530[(1)] = (13));

} else {
var statearr_40479_40531 = state_40436__$1;
(statearr_40479_40531[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (9))){
var inst_40338 = (state_40436[(8)]);
var state_40436__$1 = state_40436;
var statearr_40480_40532 = state_40436__$1;
(statearr_40480_40532[(2)] = inst_40338);

(statearr_40480_40532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (5))){
var state_40436__$1 = state_40436;
var statearr_40481_40533 = state_40436__$1;
(statearr_40481_40533[(2)] = true);

(statearr_40481_40533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (14))){
var state_40436__$1 = state_40436;
var statearr_40482_40534 = state_40436__$1;
(statearr_40482_40534[(2)] = false);

(statearr_40482_40534[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (26))){
var inst_40396 = (state_40436[(10)]);
var inst_40403 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40396);
var state_40436__$1 = state_40436;
var statearr_40483_40535 = state_40436__$1;
(statearr_40483_40535[(2)] = inst_40403);

(statearr_40483_40535[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (16))){
var state_40436__$1 = state_40436;
var statearr_40484_40536 = state_40436__$1;
(statearr_40484_40536[(2)] = true);

(statearr_40484_40536[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (38))){
var inst_40426 = (state_40436[(2)]);
var state_40436__$1 = state_40436;
var statearr_40485_40537 = state_40436__$1;
(statearr_40485_40537[(2)] = inst_40426);

(statearr_40485_40537[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (30))){
var inst_40387 = (state_40436[(9)]);
var inst_40396 = (state_40436[(10)]);
var inst_40388 = (state_40436[(13)]);
var inst_40413 = cljs.core.empty_QMARK_.call(null,inst_40387);
var inst_40414 = inst_40388.call(null,inst_40396);
var inst_40415 = cljs.core.not.call(null,inst_40414);
var inst_40416 = ((inst_40413) && (inst_40415));
var state_40436__$1 = state_40436;
var statearr_40486_40538 = state_40436__$1;
(statearr_40486_40538[(2)] = inst_40416);

(statearr_40486_40538[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (10))){
var inst_40338 = (state_40436[(8)]);
var inst_40359 = (state_40436[(2)]);
var inst_40360 = cljs.core.get.call(null,inst_40359,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40361 = cljs.core.get.call(null,inst_40359,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40362 = cljs.core.get.call(null,inst_40359,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40363 = inst_40338;
var state_40436__$1 = (function (){var statearr_40487 = state_40436;
(statearr_40487[(16)] = inst_40361);

(statearr_40487[(17)] = inst_40360);

(statearr_40487[(7)] = inst_40363);

(statearr_40487[(18)] = inst_40362);

return statearr_40487;
})();
var statearr_40488_40539 = state_40436__$1;
(statearr_40488_40539[(2)] = null);

(statearr_40488_40539[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (18))){
var inst_40378 = (state_40436[(2)]);
var state_40436__$1 = state_40436;
var statearr_40489_40540 = state_40436__$1;
(statearr_40489_40540[(2)] = inst_40378);

(statearr_40489_40540[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (37))){
var state_40436__$1 = state_40436;
var statearr_40490_40541 = state_40436__$1;
(statearr_40490_40541[(2)] = null);

(statearr_40490_40541[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (8))){
var inst_40338 = (state_40436[(8)]);
var inst_40356 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40338);
var state_40436__$1 = state_40436;
var statearr_40491_40542 = state_40436__$1;
(statearr_40491_40542[(2)] = inst_40356);

(statearr_40491_40542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39437__auto___40496,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__39342__auto__,c__39437__auto___40496,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__39343__auto__ = null;
var cljs$core$async$mix_$_state_machine__39343__auto____0 = (function (){
var statearr_40492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40492[(0)] = cljs$core$async$mix_$_state_machine__39343__auto__);

(statearr_40492[(1)] = (1));

return statearr_40492;
});
var cljs$core$async$mix_$_state_machine__39343__auto____1 = (function (state_40436){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_40436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e40493){if((e40493 instanceof Object)){
var ex__39346__auto__ = e40493;
var statearr_40494_40543 = state_40436;
(statearr_40494_40543[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40544 = state_40436;
state_40436 = G__40544;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__39343__auto__ = function(state_40436){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__39343__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__39343__auto____1.call(this,state_40436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__39343__auto____0;
cljs$core$async$mix_$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__39343__auto____1;
return cljs$core$async$mix_$_state_machine__39343__auto__;
})()
;})(switch__39342__auto__,c__39437__auto___40496,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__39439__auto__ = (function (){var statearr_40495 = f__39438__auto__.call(null);
(statearr_40495[(6)] = c__39437__auto___40496);

return statearr_40495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(c__39437__auto___40496,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__40546 = arguments.length;
switch (G__40546) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__40550 = arguments.length;
switch (G__40550) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__40548_SHARP_){
if(cljs.core.truth_(p1__40548_SHARP_.call(null,topic))){
return p1__40548_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40548_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40551 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40551 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40552){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40552 = meta40552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40553,meta40552__$1){
var self__ = this;
var _40553__$1 = this;
return (new cljs.core.async.t_cljs$core$async40551(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40552__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40551.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40553){
var self__ = this;
var _40553__$1 = this;
return self__.meta40552;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40551.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40551.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40551.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40551.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40551.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40551.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40551.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40551.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40552","meta40552",2075426635,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40551.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40551";

cljs.core.async.t_cljs$core$async40551.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async40551");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40551.
 */
cljs.core.async.__GT_t_cljs$core$async40551 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40551(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40552){
return (new cljs.core.async.t_cljs$core$async40551(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40552));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40551(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39437__auto___40671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39437__auto___40671,mults,ensure_mult,p){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (c__39437__auto___40671,mults,ensure_mult,p){
return (function (state_40625){
var state_val_40626 = (state_40625[(1)]);
if((state_val_40626 === (7))){
var inst_40621 = (state_40625[(2)]);
var state_40625__$1 = state_40625;
var statearr_40627_40672 = state_40625__$1;
(statearr_40627_40672[(2)] = inst_40621);

(statearr_40627_40672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (20))){
var state_40625__$1 = state_40625;
var statearr_40628_40673 = state_40625__$1;
(statearr_40628_40673[(2)] = null);

(statearr_40628_40673[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (1))){
var state_40625__$1 = state_40625;
var statearr_40629_40674 = state_40625__$1;
(statearr_40629_40674[(2)] = null);

(statearr_40629_40674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (24))){
var inst_40604 = (state_40625[(7)]);
var inst_40613 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40604);
var state_40625__$1 = state_40625;
var statearr_40630_40675 = state_40625__$1;
(statearr_40630_40675[(2)] = inst_40613);

(statearr_40630_40675[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (4))){
var inst_40556 = (state_40625[(8)]);
var inst_40556__$1 = (state_40625[(2)]);
var inst_40557 = (inst_40556__$1 == null);
var state_40625__$1 = (function (){var statearr_40631 = state_40625;
(statearr_40631[(8)] = inst_40556__$1);

return statearr_40631;
})();
if(cljs.core.truth_(inst_40557)){
var statearr_40632_40676 = state_40625__$1;
(statearr_40632_40676[(1)] = (5));

} else {
var statearr_40633_40677 = state_40625__$1;
(statearr_40633_40677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (15))){
var inst_40598 = (state_40625[(2)]);
var state_40625__$1 = state_40625;
var statearr_40634_40678 = state_40625__$1;
(statearr_40634_40678[(2)] = inst_40598);

(statearr_40634_40678[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (21))){
var inst_40618 = (state_40625[(2)]);
var state_40625__$1 = (function (){var statearr_40635 = state_40625;
(statearr_40635[(9)] = inst_40618);

return statearr_40635;
})();
var statearr_40636_40679 = state_40625__$1;
(statearr_40636_40679[(2)] = null);

(statearr_40636_40679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (13))){
var inst_40580 = (state_40625[(10)]);
var inst_40582 = cljs.core.chunked_seq_QMARK_.call(null,inst_40580);
var state_40625__$1 = state_40625;
if(inst_40582){
var statearr_40637_40680 = state_40625__$1;
(statearr_40637_40680[(1)] = (16));

} else {
var statearr_40638_40681 = state_40625__$1;
(statearr_40638_40681[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (22))){
var inst_40610 = (state_40625[(2)]);
var state_40625__$1 = state_40625;
if(cljs.core.truth_(inst_40610)){
var statearr_40639_40682 = state_40625__$1;
(statearr_40639_40682[(1)] = (23));

} else {
var statearr_40640_40683 = state_40625__$1;
(statearr_40640_40683[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (6))){
var inst_40556 = (state_40625[(8)]);
var inst_40604 = (state_40625[(7)]);
var inst_40606 = (state_40625[(11)]);
var inst_40604__$1 = topic_fn.call(null,inst_40556);
var inst_40605 = cljs.core.deref.call(null,mults);
var inst_40606__$1 = cljs.core.get.call(null,inst_40605,inst_40604__$1);
var state_40625__$1 = (function (){var statearr_40641 = state_40625;
(statearr_40641[(7)] = inst_40604__$1);

(statearr_40641[(11)] = inst_40606__$1);

return statearr_40641;
})();
if(cljs.core.truth_(inst_40606__$1)){
var statearr_40642_40684 = state_40625__$1;
(statearr_40642_40684[(1)] = (19));

} else {
var statearr_40643_40685 = state_40625__$1;
(statearr_40643_40685[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (25))){
var inst_40615 = (state_40625[(2)]);
var state_40625__$1 = state_40625;
var statearr_40644_40686 = state_40625__$1;
(statearr_40644_40686[(2)] = inst_40615);

(statearr_40644_40686[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (17))){
var inst_40580 = (state_40625[(10)]);
var inst_40589 = cljs.core.first.call(null,inst_40580);
var inst_40590 = cljs.core.async.muxch_STAR_.call(null,inst_40589);
var inst_40591 = cljs.core.async.close_BANG_.call(null,inst_40590);
var inst_40592 = cljs.core.next.call(null,inst_40580);
var inst_40566 = inst_40592;
var inst_40567 = null;
var inst_40568 = (0);
var inst_40569 = (0);
var state_40625__$1 = (function (){var statearr_40645 = state_40625;
(statearr_40645[(12)] = inst_40591);

(statearr_40645[(13)] = inst_40566);

(statearr_40645[(14)] = inst_40568);

(statearr_40645[(15)] = inst_40569);

(statearr_40645[(16)] = inst_40567);

return statearr_40645;
})();
var statearr_40646_40687 = state_40625__$1;
(statearr_40646_40687[(2)] = null);

(statearr_40646_40687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (3))){
var inst_40623 = (state_40625[(2)]);
var state_40625__$1 = state_40625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40625__$1,inst_40623);
} else {
if((state_val_40626 === (12))){
var inst_40600 = (state_40625[(2)]);
var state_40625__$1 = state_40625;
var statearr_40647_40688 = state_40625__$1;
(statearr_40647_40688[(2)] = inst_40600);

(statearr_40647_40688[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (2))){
var state_40625__$1 = state_40625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40625__$1,(4),ch);
} else {
if((state_val_40626 === (23))){
var state_40625__$1 = state_40625;
var statearr_40648_40689 = state_40625__$1;
(statearr_40648_40689[(2)] = null);

(statearr_40648_40689[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (19))){
var inst_40556 = (state_40625[(8)]);
var inst_40606 = (state_40625[(11)]);
var inst_40608 = cljs.core.async.muxch_STAR_.call(null,inst_40606);
var state_40625__$1 = state_40625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40625__$1,(22),inst_40608,inst_40556);
} else {
if((state_val_40626 === (11))){
var inst_40566 = (state_40625[(13)]);
var inst_40580 = (state_40625[(10)]);
var inst_40580__$1 = cljs.core.seq.call(null,inst_40566);
var state_40625__$1 = (function (){var statearr_40649 = state_40625;
(statearr_40649[(10)] = inst_40580__$1);

return statearr_40649;
})();
if(inst_40580__$1){
var statearr_40650_40690 = state_40625__$1;
(statearr_40650_40690[(1)] = (13));

} else {
var statearr_40651_40691 = state_40625__$1;
(statearr_40651_40691[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (9))){
var inst_40602 = (state_40625[(2)]);
var state_40625__$1 = state_40625;
var statearr_40652_40692 = state_40625__$1;
(statearr_40652_40692[(2)] = inst_40602);

(statearr_40652_40692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (5))){
var inst_40563 = cljs.core.deref.call(null,mults);
var inst_40564 = cljs.core.vals.call(null,inst_40563);
var inst_40565 = cljs.core.seq.call(null,inst_40564);
var inst_40566 = inst_40565;
var inst_40567 = null;
var inst_40568 = (0);
var inst_40569 = (0);
var state_40625__$1 = (function (){var statearr_40653 = state_40625;
(statearr_40653[(13)] = inst_40566);

(statearr_40653[(14)] = inst_40568);

(statearr_40653[(15)] = inst_40569);

(statearr_40653[(16)] = inst_40567);

return statearr_40653;
})();
var statearr_40654_40693 = state_40625__$1;
(statearr_40654_40693[(2)] = null);

(statearr_40654_40693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (14))){
var state_40625__$1 = state_40625;
var statearr_40658_40694 = state_40625__$1;
(statearr_40658_40694[(2)] = null);

(statearr_40658_40694[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (16))){
var inst_40580 = (state_40625[(10)]);
var inst_40584 = cljs.core.chunk_first.call(null,inst_40580);
var inst_40585 = cljs.core.chunk_rest.call(null,inst_40580);
var inst_40586 = cljs.core.count.call(null,inst_40584);
var inst_40566 = inst_40585;
var inst_40567 = inst_40584;
var inst_40568 = inst_40586;
var inst_40569 = (0);
var state_40625__$1 = (function (){var statearr_40659 = state_40625;
(statearr_40659[(13)] = inst_40566);

(statearr_40659[(14)] = inst_40568);

(statearr_40659[(15)] = inst_40569);

(statearr_40659[(16)] = inst_40567);

return statearr_40659;
})();
var statearr_40660_40695 = state_40625__$1;
(statearr_40660_40695[(2)] = null);

(statearr_40660_40695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (10))){
var inst_40566 = (state_40625[(13)]);
var inst_40568 = (state_40625[(14)]);
var inst_40569 = (state_40625[(15)]);
var inst_40567 = (state_40625[(16)]);
var inst_40574 = cljs.core._nth.call(null,inst_40567,inst_40569);
var inst_40575 = cljs.core.async.muxch_STAR_.call(null,inst_40574);
var inst_40576 = cljs.core.async.close_BANG_.call(null,inst_40575);
var inst_40577 = (inst_40569 + (1));
var tmp40655 = inst_40566;
var tmp40656 = inst_40568;
var tmp40657 = inst_40567;
var inst_40566__$1 = tmp40655;
var inst_40567__$1 = tmp40657;
var inst_40568__$1 = tmp40656;
var inst_40569__$1 = inst_40577;
var state_40625__$1 = (function (){var statearr_40661 = state_40625;
(statearr_40661[(17)] = inst_40576);

(statearr_40661[(13)] = inst_40566__$1);

(statearr_40661[(14)] = inst_40568__$1);

(statearr_40661[(15)] = inst_40569__$1);

(statearr_40661[(16)] = inst_40567__$1);

return statearr_40661;
})();
var statearr_40662_40696 = state_40625__$1;
(statearr_40662_40696[(2)] = null);

(statearr_40662_40696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (18))){
var inst_40595 = (state_40625[(2)]);
var state_40625__$1 = state_40625;
var statearr_40663_40697 = state_40625__$1;
(statearr_40663_40697[(2)] = inst_40595);

(statearr_40663_40697[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (8))){
var inst_40568 = (state_40625[(14)]);
var inst_40569 = (state_40625[(15)]);
var inst_40571 = (inst_40569 < inst_40568);
var inst_40572 = inst_40571;
var state_40625__$1 = state_40625;
if(cljs.core.truth_(inst_40572)){
var statearr_40664_40698 = state_40625__$1;
(statearr_40664_40698[(1)] = (10));

} else {
var statearr_40665_40699 = state_40625__$1;
(statearr_40665_40699[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39437__auto___40671,mults,ensure_mult,p))
;
return ((function (switch__39342__auto__,c__39437__auto___40671,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__39343__auto__ = null;
var cljs$core$async$state_machine__39343__auto____0 = (function (){
var statearr_40666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40666[(0)] = cljs$core$async$state_machine__39343__auto__);

(statearr_40666[(1)] = (1));

return statearr_40666;
});
var cljs$core$async$state_machine__39343__auto____1 = (function (state_40625){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_40625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e40667){if((e40667 instanceof Object)){
var ex__39346__auto__ = e40667;
var statearr_40668_40700 = state_40625;
(statearr_40668_40700[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40701 = state_40625;
state_40625 = G__40701;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
cljs$core$async$state_machine__39343__auto__ = function(state_40625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39343__auto____1.call(this,state_40625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39343__auto____0;
cljs$core$async$state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39343__auto____1;
return cljs$core$async$state_machine__39343__auto__;
})()
;})(switch__39342__auto__,c__39437__auto___40671,mults,ensure_mult,p))
})();
var state__39439__auto__ = (function (){var statearr_40669 = f__39438__auto__.call(null);
(statearr_40669[(6)] = c__39437__auto___40671);

return statearr_40669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(c__39437__auto___40671,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__40703 = arguments.length;
switch (G__40703) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__40706 = arguments.length;
switch (G__40706) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__40709 = arguments.length;
switch (G__40709) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__39437__auto___40776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39437__auto___40776,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (c__39437__auto___40776,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40748){
var state_val_40749 = (state_40748[(1)]);
if((state_val_40749 === (7))){
var state_40748__$1 = state_40748;
var statearr_40750_40777 = state_40748__$1;
(statearr_40750_40777[(2)] = null);

(statearr_40750_40777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40749 === (1))){
var state_40748__$1 = state_40748;
var statearr_40751_40778 = state_40748__$1;
(statearr_40751_40778[(2)] = null);

(statearr_40751_40778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40749 === (4))){
var inst_40712 = (state_40748[(7)]);
var inst_40714 = (inst_40712 < cnt);
var state_40748__$1 = state_40748;
if(cljs.core.truth_(inst_40714)){
var statearr_40752_40779 = state_40748__$1;
(statearr_40752_40779[(1)] = (6));

} else {
var statearr_40753_40780 = state_40748__$1;
(statearr_40753_40780[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40749 === (15))){
var inst_40744 = (state_40748[(2)]);
var state_40748__$1 = state_40748;
var statearr_40754_40781 = state_40748__$1;
(statearr_40754_40781[(2)] = inst_40744);

(statearr_40754_40781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40749 === (13))){
var inst_40737 = cljs.core.async.close_BANG_.call(null,out);
var state_40748__$1 = state_40748;
var statearr_40755_40782 = state_40748__$1;
(statearr_40755_40782[(2)] = inst_40737);

(statearr_40755_40782[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40749 === (6))){
var state_40748__$1 = state_40748;
var statearr_40756_40783 = state_40748__$1;
(statearr_40756_40783[(2)] = null);

(statearr_40756_40783[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40749 === (3))){
var inst_40746 = (state_40748[(2)]);
var state_40748__$1 = state_40748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40748__$1,inst_40746);
} else {
if((state_val_40749 === (12))){
var inst_40734 = (state_40748[(8)]);
var inst_40734__$1 = (state_40748[(2)]);
var inst_40735 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40734__$1);
var state_40748__$1 = (function (){var statearr_40757 = state_40748;
(statearr_40757[(8)] = inst_40734__$1);

return statearr_40757;
})();
if(cljs.core.truth_(inst_40735)){
var statearr_40758_40784 = state_40748__$1;
(statearr_40758_40784[(1)] = (13));

} else {
var statearr_40759_40785 = state_40748__$1;
(statearr_40759_40785[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40749 === (2))){
var inst_40711 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40712 = (0);
var state_40748__$1 = (function (){var statearr_40760 = state_40748;
(statearr_40760[(9)] = inst_40711);

(statearr_40760[(7)] = inst_40712);

return statearr_40760;
})();
var statearr_40761_40786 = state_40748__$1;
(statearr_40761_40786[(2)] = null);

(statearr_40761_40786[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40749 === (11))){
var inst_40712 = (state_40748[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40748,(10),Object,null,(9));
var inst_40721 = chs__$1.call(null,inst_40712);
var inst_40722 = done.call(null,inst_40712);
var inst_40723 = cljs.core.async.take_BANG_.call(null,inst_40721,inst_40722);
var state_40748__$1 = state_40748;
var statearr_40762_40787 = state_40748__$1;
(statearr_40762_40787[(2)] = inst_40723);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40748__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40749 === (9))){
var inst_40712 = (state_40748[(7)]);
var inst_40725 = (state_40748[(2)]);
var inst_40726 = (inst_40712 + (1));
var inst_40712__$1 = inst_40726;
var state_40748__$1 = (function (){var statearr_40763 = state_40748;
(statearr_40763[(10)] = inst_40725);

(statearr_40763[(7)] = inst_40712__$1);

return statearr_40763;
})();
var statearr_40764_40788 = state_40748__$1;
(statearr_40764_40788[(2)] = null);

(statearr_40764_40788[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40749 === (5))){
var inst_40732 = (state_40748[(2)]);
var state_40748__$1 = (function (){var statearr_40765 = state_40748;
(statearr_40765[(11)] = inst_40732);

return statearr_40765;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40748__$1,(12),dchan);
} else {
if((state_val_40749 === (14))){
var inst_40734 = (state_40748[(8)]);
var inst_40739 = cljs.core.apply.call(null,f,inst_40734);
var state_40748__$1 = state_40748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40748__$1,(16),out,inst_40739);
} else {
if((state_val_40749 === (16))){
var inst_40741 = (state_40748[(2)]);
var state_40748__$1 = (function (){var statearr_40766 = state_40748;
(statearr_40766[(12)] = inst_40741);

return statearr_40766;
})();
var statearr_40767_40789 = state_40748__$1;
(statearr_40767_40789[(2)] = null);

(statearr_40767_40789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40749 === (10))){
var inst_40716 = (state_40748[(2)]);
var inst_40717 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40748__$1 = (function (){var statearr_40768 = state_40748;
(statearr_40768[(13)] = inst_40716);

return statearr_40768;
})();
var statearr_40769_40790 = state_40748__$1;
(statearr_40769_40790[(2)] = inst_40717);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40748__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40749 === (8))){
var inst_40730 = (state_40748[(2)]);
var state_40748__$1 = state_40748;
var statearr_40770_40791 = state_40748__$1;
(statearr_40770_40791[(2)] = inst_40730);

(statearr_40770_40791[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39437__auto___40776,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__39342__auto__,c__39437__auto___40776,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__39343__auto__ = null;
var cljs$core$async$state_machine__39343__auto____0 = (function (){
var statearr_40771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40771[(0)] = cljs$core$async$state_machine__39343__auto__);

(statearr_40771[(1)] = (1));

return statearr_40771;
});
var cljs$core$async$state_machine__39343__auto____1 = (function (state_40748){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_40748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e40772){if((e40772 instanceof Object)){
var ex__39346__auto__ = e40772;
var statearr_40773_40792 = state_40748;
(statearr_40773_40792[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40793 = state_40748;
state_40748 = G__40793;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
cljs$core$async$state_machine__39343__auto__ = function(state_40748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39343__auto____1.call(this,state_40748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39343__auto____0;
cljs$core$async$state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39343__auto____1;
return cljs$core$async$state_machine__39343__auto__;
})()
;})(switch__39342__auto__,c__39437__auto___40776,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__39439__auto__ = (function (){var statearr_40774 = f__39438__auto__.call(null);
(statearr_40774[(6)] = c__39437__auto___40776);

return statearr_40774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(c__39437__auto___40776,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__40796 = arguments.length;
switch (G__40796) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39437__auto___40850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39437__auto___40850,out){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (c__39437__auto___40850,out){
return (function (state_40828){
var state_val_40829 = (state_40828[(1)]);
if((state_val_40829 === (7))){
var inst_40807 = (state_40828[(7)]);
var inst_40808 = (state_40828[(8)]);
var inst_40807__$1 = (state_40828[(2)]);
var inst_40808__$1 = cljs.core.nth.call(null,inst_40807__$1,(0),null);
var inst_40809 = cljs.core.nth.call(null,inst_40807__$1,(1),null);
var inst_40810 = (inst_40808__$1 == null);
var state_40828__$1 = (function (){var statearr_40830 = state_40828;
(statearr_40830[(7)] = inst_40807__$1);

(statearr_40830[(8)] = inst_40808__$1);

(statearr_40830[(9)] = inst_40809);

return statearr_40830;
})();
if(cljs.core.truth_(inst_40810)){
var statearr_40831_40851 = state_40828__$1;
(statearr_40831_40851[(1)] = (8));

} else {
var statearr_40832_40852 = state_40828__$1;
(statearr_40832_40852[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40829 === (1))){
var inst_40797 = cljs.core.vec.call(null,chs);
var inst_40798 = inst_40797;
var state_40828__$1 = (function (){var statearr_40833 = state_40828;
(statearr_40833[(10)] = inst_40798);

return statearr_40833;
})();
var statearr_40834_40853 = state_40828__$1;
(statearr_40834_40853[(2)] = null);

(statearr_40834_40853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40829 === (4))){
var inst_40798 = (state_40828[(10)]);
var state_40828__$1 = state_40828;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40828__$1,(7),inst_40798);
} else {
if((state_val_40829 === (6))){
var inst_40824 = (state_40828[(2)]);
var state_40828__$1 = state_40828;
var statearr_40835_40854 = state_40828__$1;
(statearr_40835_40854[(2)] = inst_40824);

(statearr_40835_40854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40829 === (3))){
var inst_40826 = (state_40828[(2)]);
var state_40828__$1 = state_40828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40828__$1,inst_40826);
} else {
if((state_val_40829 === (2))){
var inst_40798 = (state_40828[(10)]);
var inst_40800 = cljs.core.count.call(null,inst_40798);
var inst_40801 = (inst_40800 > (0));
var state_40828__$1 = state_40828;
if(cljs.core.truth_(inst_40801)){
var statearr_40837_40855 = state_40828__$1;
(statearr_40837_40855[(1)] = (4));

} else {
var statearr_40838_40856 = state_40828__$1;
(statearr_40838_40856[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40829 === (11))){
var inst_40798 = (state_40828[(10)]);
var inst_40817 = (state_40828[(2)]);
var tmp40836 = inst_40798;
var inst_40798__$1 = tmp40836;
var state_40828__$1 = (function (){var statearr_40839 = state_40828;
(statearr_40839[(11)] = inst_40817);

(statearr_40839[(10)] = inst_40798__$1);

return statearr_40839;
})();
var statearr_40840_40857 = state_40828__$1;
(statearr_40840_40857[(2)] = null);

(statearr_40840_40857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40829 === (9))){
var inst_40808 = (state_40828[(8)]);
var state_40828__$1 = state_40828;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40828__$1,(11),out,inst_40808);
} else {
if((state_val_40829 === (5))){
var inst_40822 = cljs.core.async.close_BANG_.call(null,out);
var state_40828__$1 = state_40828;
var statearr_40841_40858 = state_40828__$1;
(statearr_40841_40858[(2)] = inst_40822);

(statearr_40841_40858[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40829 === (10))){
var inst_40820 = (state_40828[(2)]);
var state_40828__$1 = state_40828;
var statearr_40842_40859 = state_40828__$1;
(statearr_40842_40859[(2)] = inst_40820);

(statearr_40842_40859[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40829 === (8))){
var inst_40807 = (state_40828[(7)]);
var inst_40808 = (state_40828[(8)]);
var inst_40809 = (state_40828[(9)]);
var inst_40798 = (state_40828[(10)]);
var inst_40812 = (function (){var cs = inst_40798;
var vec__40803 = inst_40807;
var v = inst_40808;
var c = inst_40809;
return ((function (cs,vec__40803,v,c,inst_40807,inst_40808,inst_40809,inst_40798,state_val_40829,c__39437__auto___40850,out){
return (function (p1__40794_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40794_SHARP_);
});
;})(cs,vec__40803,v,c,inst_40807,inst_40808,inst_40809,inst_40798,state_val_40829,c__39437__auto___40850,out))
})();
var inst_40813 = cljs.core.filterv.call(null,inst_40812,inst_40798);
var inst_40798__$1 = inst_40813;
var state_40828__$1 = (function (){var statearr_40843 = state_40828;
(statearr_40843[(10)] = inst_40798__$1);

return statearr_40843;
})();
var statearr_40844_40860 = state_40828__$1;
(statearr_40844_40860[(2)] = null);

(statearr_40844_40860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__39437__auto___40850,out))
;
return ((function (switch__39342__auto__,c__39437__auto___40850,out){
return (function() {
var cljs$core$async$state_machine__39343__auto__ = null;
var cljs$core$async$state_machine__39343__auto____0 = (function (){
var statearr_40845 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40845[(0)] = cljs$core$async$state_machine__39343__auto__);

(statearr_40845[(1)] = (1));

return statearr_40845;
});
var cljs$core$async$state_machine__39343__auto____1 = (function (state_40828){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_40828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e40846){if((e40846 instanceof Object)){
var ex__39346__auto__ = e40846;
var statearr_40847_40861 = state_40828;
(statearr_40847_40861[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40862 = state_40828;
state_40828 = G__40862;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
cljs$core$async$state_machine__39343__auto__ = function(state_40828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39343__auto____1.call(this,state_40828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39343__auto____0;
cljs$core$async$state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39343__auto____1;
return cljs$core$async$state_machine__39343__auto__;
})()
;})(switch__39342__auto__,c__39437__auto___40850,out))
})();
var state__39439__auto__ = (function (){var statearr_40848 = f__39438__auto__.call(null);
(statearr_40848[(6)] = c__39437__auto___40850);

return statearr_40848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(c__39437__auto___40850,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__40864 = arguments.length;
switch (G__40864) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39437__auto___40909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39437__auto___40909,out){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (c__39437__auto___40909,out){
return (function (state_40888){
var state_val_40889 = (state_40888[(1)]);
if((state_val_40889 === (7))){
var inst_40870 = (state_40888[(7)]);
var inst_40870__$1 = (state_40888[(2)]);
var inst_40871 = (inst_40870__$1 == null);
var inst_40872 = cljs.core.not.call(null,inst_40871);
var state_40888__$1 = (function (){var statearr_40890 = state_40888;
(statearr_40890[(7)] = inst_40870__$1);

return statearr_40890;
})();
if(inst_40872){
var statearr_40891_40910 = state_40888__$1;
(statearr_40891_40910[(1)] = (8));

} else {
var statearr_40892_40911 = state_40888__$1;
(statearr_40892_40911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40889 === (1))){
var inst_40865 = (0);
var state_40888__$1 = (function (){var statearr_40893 = state_40888;
(statearr_40893[(8)] = inst_40865);

return statearr_40893;
})();
var statearr_40894_40912 = state_40888__$1;
(statearr_40894_40912[(2)] = null);

(statearr_40894_40912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40889 === (4))){
var state_40888__$1 = state_40888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40888__$1,(7),ch);
} else {
if((state_val_40889 === (6))){
var inst_40883 = (state_40888[(2)]);
var state_40888__$1 = state_40888;
var statearr_40895_40913 = state_40888__$1;
(statearr_40895_40913[(2)] = inst_40883);

(statearr_40895_40913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40889 === (3))){
var inst_40885 = (state_40888[(2)]);
var inst_40886 = cljs.core.async.close_BANG_.call(null,out);
var state_40888__$1 = (function (){var statearr_40896 = state_40888;
(statearr_40896[(9)] = inst_40885);

return statearr_40896;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40888__$1,inst_40886);
} else {
if((state_val_40889 === (2))){
var inst_40865 = (state_40888[(8)]);
var inst_40867 = (inst_40865 < n);
var state_40888__$1 = state_40888;
if(cljs.core.truth_(inst_40867)){
var statearr_40897_40914 = state_40888__$1;
(statearr_40897_40914[(1)] = (4));

} else {
var statearr_40898_40915 = state_40888__$1;
(statearr_40898_40915[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40889 === (11))){
var inst_40865 = (state_40888[(8)]);
var inst_40875 = (state_40888[(2)]);
var inst_40876 = (inst_40865 + (1));
var inst_40865__$1 = inst_40876;
var state_40888__$1 = (function (){var statearr_40899 = state_40888;
(statearr_40899[(8)] = inst_40865__$1);

(statearr_40899[(10)] = inst_40875);

return statearr_40899;
})();
var statearr_40900_40916 = state_40888__$1;
(statearr_40900_40916[(2)] = null);

(statearr_40900_40916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40889 === (9))){
var state_40888__$1 = state_40888;
var statearr_40901_40917 = state_40888__$1;
(statearr_40901_40917[(2)] = null);

(statearr_40901_40917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40889 === (5))){
var state_40888__$1 = state_40888;
var statearr_40902_40918 = state_40888__$1;
(statearr_40902_40918[(2)] = null);

(statearr_40902_40918[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40889 === (10))){
var inst_40880 = (state_40888[(2)]);
var state_40888__$1 = state_40888;
var statearr_40903_40919 = state_40888__$1;
(statearr_40903_40919[(2)] = inst_40880);

(statearr_40903_40919[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40889 === (8))){
var inst_40870 = (state_40888[(7)]);
var state_40888__$1 = state_40888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40888__$1,(11),out,inst_40870);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__39437__auto___40909,out))
;
return ((function (switch__39342__auto__,c__39437__auto___40909,out){
return (function() {
var cljs$core$async$state_machine__39343__auto__ = null;
var cljs$core$async$state_machine__39343__auto____0 = (function (){
var statearr_40904 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40904[(0)] = cljs$core$async$state_machine__39343__auto__);

(statearr_40904[(1)] = (1));

return statearr_40904;
});
var cljs$core$async$state_machine__39343__auto____1 = (function (state_40888){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_40888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e40905){if((e40905 instanceof Object)){
var ex__39346__auto__ = e40905;
var statearr_40906_40920 = state_40888;
(statearr_40906_40920[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40921 = state_40888;
state_40888 = G__40921;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
cljs$core$async$state_machine__39343__auto__ = function(state_40888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39343__auto____1.call(this,state_40888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39343__auto____0;
cljs$core$async$state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39343__auto____1;
return cljs$core$async$state_machine__39343__auto__;
})()
;})(switch__39342__auto__,c__39437__auto___40909,out))
})();
var state__39439__auto__ = (function (){var statearr_40907 = f__39438__auto__.call(null);
(statearr_40907[(6)] = c__39437__auto___40909);

return statearr_40907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(c__39437__auto___40909,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40923 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40923 = (function (f,ch,meta40924){
this.f = f;
this.ch = ch;
this.meta40924 = meta40924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40925,meta40924__$1){
var self__ = this;
var _40925__$1 = this;
return (new cljs.core.async.t_cljs$core$async40923(self__.f,self__.ch,meta40924__$1));
});

cljs.core.async.t_cljs$core$async40923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40925){
var self__ = this;
var _40925__$1 = this;
return self__.meta40924;
});

cljs.core.async.t_cljs$core$async40923.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40923.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40923.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40923.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40923.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40926 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40926 = (function (f,ch,meta40924,_,fn1,meta40927){
this.f = f;
this.ch = ch;
this.meta40924 = meta40924;
this._ = _;
this.fn1 = fn1;
this.meta40927 = meta40927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40928,meta40927__$1){
var self__ = this;
var _40928__$1 = this;
return (new cljs.core.async.t_cljs$core$async40926(self__.f,self__.ch,self__.meta40924,self__._,self__.fn1,meta40927__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async40926.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40928){
var self__ = this;
var _40928__$1 = this;
return self__.meta40927;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40926.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40926.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40926.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40926.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40922_SHARP_){
return f1.call(null,(((p1__40922_SHARP_ == null))?null:self__.f.call(null,p1__40922_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40926.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40924","meta40924",-467546132,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40923","cljs.core.async/t_cljs$core$async40923",-808846964,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40927","meta40927",59504830,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40926.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40926";

cljs.core.async.t_cljs$core$async40926.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async40926");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40926.
 */
cljs.core.async.__GT_t_cljs$core$async40926 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40926(f__$1,ch__$1,meta40924__$1,___$2,fn1__$1,meta40927){
return (new cljs.core.async.t_cljs$core$async40926(f__$1,ch__$1,meta40924__$1,___$2,fn1__$1,meta40927));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40926(self__.f,self__.ch,self__.meta40924,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async40923.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40923.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async40923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40924","meta40924",-467546132,null)], null);
});

cljs.core.async.t_cljs$core$async40923.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40923";

cljs.core.async.t_cljs$core$async40923.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async40923");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40923.
 */
cljs.core.async.__GT_t_cljs$core$async40923 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40923(f__$1,ch__$1,meta40924){
return (new cljs.core.async.t_cljs$core$async40923(f__$1,ch__$1,meta40924));
});

}

return (new cljs.core.async.t_cljs$core$async40923(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40929 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40929 = (function (f,ch,meta40930){
this.f = f;
this.ch = ch;
this.meta40930 = meta40930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40931,meta40930__$1){
var self__ = this;
var _40931__$1 = this;
return (new cljs.core.async.t_cljs$core$async40929(self__.f,self__.ch,meta40930__$1));
});

cljs.core.async.t_cljs$core$async40929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40931){
var self__ = this;
var _40931__$1 = this;
return self__.meta40930;
});

cljs.core.async.t_cljs$core$async40929.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40929.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40929.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40929.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40929.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40929.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async40929.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40930","meta40930",521990554,null)], null);
});

cljs.core.async.t_cljs$core$async40929.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40929.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40929";

cljs.core.async.t_cljs$core$async40929.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async40929");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40929.
 */
cljs.core.async.__GT_t_cljs$core$async40929 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40929(f__$1,ch__$1,meta40930){
return (new cljs.core.async.t_cljs$core$async40929(f__$1,ch__$1,meta40930));
});

}

return (new cljs.core.async.t_cljs$core$async40929(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40932 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40932 = (function (p,ch,meta40933){
this.p = p;
this.ch = ch;
this.meta40933 = meta40933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40934,meta40933__$1){
var self__ = this;
var _40934__$1 = this;
return (new cljs.core.async.t_cljs$core$async40932(self__.p,self__.ch,meta40933__$1));
});

cljs.core.async.t_cljs$core$async40932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40934){
var self__ = this;
var _40934__$1 = this;
return self__.meta40933;
});

cljs.core.async.t_cljs$core$async40932.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40932.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40932.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40932.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40932.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40932.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40932.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async40932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40933","meta40933",-487500444,null)], null);
});

cljs.core.async.t_cljs$core$async40932.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40932";

cljs.core.async.t_cljs$core$async40932.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async40932");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40932.
 */
cljs.core.async.__GT_t_cljs$core$async40932 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40932(p__$1,ch__$1,meta40933){
return (new cljs.core.async.t_cljs$core$async40932(p__$1,ch__$1,meta40933));
});

}

return (new cljs.core.async.t_cljs$core$async40932(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__40936 = arguments.length;
switch (G__40936) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39437__auto___40976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39437__auto___40976,out){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (c__39437__auto___40976,out){
return (function (state_40957){
var state_val_40958 = (state_40957[(1)]);
if((state_val_40958 === (7))){
var inst_40953 = (state_40957[(2)]);
var state_40957__$1 = state_40957;
var statearr_40959_40977 = state_40957__$1;
(statearr_40959_40977[(2)] = inst_40953);

(statearr_40959_40977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40958 === (1))){
var state_40957__$1 = state_40957;
var statearr_40960_40978 = state_40957__$1;
(statearr_40960_40978[(2)] = null);

(statearr_40960_40978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40958 === (4))){
var inst_40939 = (state_40957[(7)]);
var inst_40939__$1 = (state_40957[(2)]);
var inst_40940 = (inst_40939__$1 == null);
var state_40957__$1 = (function (){var statearr_40961 = state_40957;
(statearr_40961[(7)] = inst_40939__$1);

return statearr_40961;
})();
if(cljs.core.truth_(inst_40940)){
var statearr_40962_40979 = state_40957__$1;
(statearr_40962_40979[(1)] = (5));

} else {
var statearr_40963_40980 = state_40957__$1;
(statearr_40963_40980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40958 === (6))){
var inst_40939 = (state_40957[(7)]);
var inst_40944 = p.call(null,inst_40939);
var state_40957__$1 = state_40957;
if(cljs.core.truth_(inst_40944)){
var statearr_40964_40981 = state_40957__$1;
(statearr_40964_40981[(1)] = (8));

} else {
var statearr_40965_40982 = state_40957__$1;
(statearr_40965_40982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40958 === (3))){
var inst_40955 = (state_40957[(2)]);
var state_40957__$1 = state_40957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40957__$1,inst_40955);
} else {
if((state_val_40958 === (2))){
var state_40957__$1 = state_40957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40957__$1,(4),ch);
} else {
if((state_val_40958 === (11))){
var inst_40947 = (state_40957[(2)]);
var state_40957__$1 = state_40957;
var statearr_40966_40983 = state_40957__$1;
(statearr_40966_40983[(2)] = inst_40947);

(statearr_40966_40983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40958 === (9))){
var state_40957__$1 = state_40957;
var statearr_40967_40984 = state_40957__$1;
(statearr_40967_40984[(2)] = null);

(statearr_40967_40984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40958 === (5))){
var inst_40942 = cljs.core.async.close_BANG_.call(null,out);
var state_40957__$1 = state_40957;
var statearr_40968_40985 = state_40957__$1;
(statearr_40968_40985[(2)] = inst_40942);

(statearr_40968_40985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40958 === (10))){
var inst_40950 = (state_40957[(2)]);
var state_40957__$1 = (function (){var statearr_40969 = state_40957;
(statearr_40969[(8)] = inst_40950);

return statearr_40969;
})();
var statearr_40970_40986 = state_40957__$1;
(statearr_40970_40986[(2)] = null);

(statearr_40970_40986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40958 === (8))){
var inst_40939 = (state_40957[(7)]);
var state_40957__$1 = state_40957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40957__$1,(11),out,inst_40939);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__39437__auto___40976,out))
;
return ((function (switch__39342__auto__,c__39437__auto___40976,out){
return (function() {
var cljs$core$async$state_machine__39343__auto__ = null;
var cljs$core$async$state_machine__39343__auto____0 = (function (){
var statearr_40971 = [null,null,null,null,null,null,null,null,null];
(statearr_40971[(0)] = cljs$core$async$state_machine__39343__auto__);

(statearr_40971[(1)] = (1));

return statearr_40971;
});
var cljs$core$async$state_machine__39343__auto____1 = (function (state_40957){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_40957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e40972){if((e40972 instanceof Object)){
var ex__39346__auto__ = e40972;
var statearr_40973_40987 = state_40957;
(statearr_40973_40987[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40988 = state_40957;
state_40957 = G__40988;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
cljs$core$async$state_machine__39343__auto__ = function(state_40957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39343__auto____1.call(this,state_40957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39343__auto____0;
cljs$core$async$state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39343__auto____1;
return cljs$core$async$state_machine__39343__auto__;
})()
;})(switch__39342__auto__,c__39437__auto___40976,out))
})();
var state__39439__auto__ = (function (){var statearr_40974 = f__39438__auto__.call(null);
(statearr_40974[(6)] = c__39437__auto___40976);

return statearr_40974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(c__39437__auto___40976,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40990 = arguments.length;
switch (G__40990) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__39437__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39437__auto__){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (c__39437__auto__){
return (function (state_41053){
var state_val_41054 = (state_41053[(1)]);
if((state_val_41054 === (7))){
var inst_41049 = (state_41053[(2)]);
var state_41053__$1 = state_41053;
var statearr_41055_41093 = state_41053__$1;
(statearr_41055_41093[(2)] = inst_41049);

(statearr_41055_41093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41054 === (20))){
var inst_41019 = (state_41053[(7)]);
var inst_41030 = (state_41053[(2)]);
var inst_41031 = cljs.core.next.call(null,inst_41019);
var inst_41005 = inst_41031;
var inst_41006 = null;
var inst_41007 = (0);
var inst_41008 = (0);
var state_41053__$1 = (function (){var statearr_41056 = state_41053;
(statearr_41056[(8)] = inst_41005);

(statearr_41056[(9)] = inst_41030);

(statearr_41056[(10)] = inst_41007);

(statearr_41056[(11)] = inst_41006);

(statearr_41056[(12)] = inst_41008);

return statearr_41056;
})();
var statearr_41057_41094 = state_41053__$1;
(statearr_41057_41094[(2)] = null);

(statearr_41057_41094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41054 === (1))){
var state_41053__$1 = state_41053;
var statearr_41058_41095 = state_41053__$1;
(statearr_41058_41095[(2)] = null);

(statearr_41058_41095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41054 === (4))){
var inst_40994 = (state_41053[(13)]);
var inst_40994__$1 = (state_41053[(2)]);
var inst_40995 = (inst_40994__$1 == null);
var state_41053__$1 = (function (){var statearr_41059 = state_41053;
(statearr_41059[(13)] = inst_40994__$1);

return statearr_41059;
})();
if(cljs.core.truth_(inst_40995)){
var statearr_41060_41096 = state_41053__$1;
(statearr_41060_41096[(1)] = (5));

} else {
var statearr_41061_41097 = state_41053__$1;
(statearr_41061_41097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41054 === (15))){
var state_41053__$1 = state_41053;
var statearr_41065_41098 = state_41053__$1;
(statearr_41065_41098[(2)] = null);

(statearr_41065_41098[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41054 === (21))){
var state_41053__$1 = state_41053;
var statearr_41066_41099 = state_41053__$1;
(statearr_41066_41099[(2)] = null);

(statearr_41066_41099[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41054 === (13))){
var inst_41005 = (state_41053[(8)]);
var inst_41007 = (state_41053[(10)]);
var inst_41006 = (state_41053[(11)]);
var inst_41008 = (state_41053[(12)]);
var inst_41015 = (state_41053[(2)]);
var inst_41016 = (inst_41008 + (1));
var tmp41062 = inst_41005;
var tmp41063 = inst_41007;
var tmp41064 = inst_41006;
var inst_41005__$1 = tmp41062;
var inst_41006__$1 = tmp41064;
var inst_41007__$1 = tmp41063;
var inst_41008__$1 = inst_41016;
var state_41053__$1 = (function (){var statearr_41067 = state_41053;
(statearr_41067[(8)] = inst_41005__$1);

(statearr_41067[(10)] = inst_41007__$1);

(statearr_41067[(11)] = inst_41006__$1);

(statearr_41067[(12)] = inst_41008__$1);

(statearr_41067[(14)] = inst_41015);

return statearr_41067;
})();
var statearr_41068_41100 = state_41053__$1;
(statearr_41068_41100[(2)] = null);

(statearr_41068_41100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41054 === (22))){
var state_41053__$1 = state_41053;
var statearr_41069_41101 = state_41053__$1;
(statearr_41069_41101[(2)] = null);

(statearr_41069_41101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41054 === (6))){
var inst_40994 = (state_41053[(13)]);
var inst_41003 = f.call(null,inst_40994);
var inst_41004 = cljs.core.seq.call(null,inst_41003);
var inst_41005 = inst_41004;
var inst_41006 = null;
var inst_41007 = (0);
var inst_41008 = (0);
var state_41053__$1 = (function (){var statearr_41070 = state_41053;
(statearr_41070[(8)] = inst_41005);

(statearr_41070[(10)] = inst_41007);

(statearr_41070[(11)] = inst_41006);

(statearr_41070[(12)] = inst_41008);

return statearr_41070;
})();
var statearr_41071_41102 = state_41053__$1;
(statearr_41071_41102[(2)] = null);

(statearr_41071_41102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41054 === (17))){
var inst_41019 = (state_41053[(7)]);
var inst_41023 = cljs.core.chunk_first.call(null,inst_41019);
var inst_41024 = cljs.core.chunk_rest.call(null,inst_41019);
var inst_41025 = cljs.core.count.call(null,inst_41023);
var inst_41005 = inst_41024;
var inst_41006 = inst_41023;
var inst_41007 = inst_41025;
var inst_41008 = (0);
var state_41053__$1 = (function (){var statearr_41072 = state_41053;
(statearr_41072[(8)] = inst_41005);

(statearr_41072[(10)] = inst_41007);

(statearr_41072[(11)] = inst_41006);

(statearr_41072[(12)] = inst_41008);

return statearr_41072;
})();
var statearr_41073_41103 = state_41053__$1;
(statearr_41073_41103[(2)] = null);

(statearr_41073_41103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41054 === (3))){
var inst_41051 = (state_41053[(2)]);
var state_41053__$1 = state_41053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41053__$1,inst_41051);
} else {
if((state_val_41054 === (12))){
var inst_41039 = (state_41053[(2)]);
var state_41053__$1 = state_41053;
var statearr_41074_41104 = state_41053__$1;
(statearr_41074_41104[(2)] = inst_41039);

(statearr_41074_41104[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41054 === (2))){
var state_41053__$1 = state_41053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41053__$1,(4),in$);
} else {
if((state_val_41054 === (23))){
var inst_41047 = (state_41053[(2)]);
var state_41053__$1 = state_41053;
var statearr_41075_41105 = state_41053__$1;
(statearr_41075_41105[(2)] = inst_41047);

(statearr_41075_41105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41054 === (19))){
var inst_41034 = (state_41053[(2)]);
var state_41053__$1 = state_41053;
var statearr_41076_41106 = state_41053__$1;
(statearr_41076_41106[(2)] = inst_41034);

(statearr_41076_41106[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41054 === (11))){
var inst_41005 = (state_41053[(8)]);
var inst_41019 = (state_41053[(7)]);
var inst_41019__$1 = cljs.core.seq.call(null,inst_41005);
var state_41053__$1 = (function (){var statearr_41077 = state_41053;
(statearr_41077[(7)] = inst_41019__$1);

return statearr_41077;
})();
if(inst_41019__$1){
var statearr_41078_41107 = state_41053__$1;
(statearr_41078_41107[(1)] = (14));

} else {
var statearr_41079_41108 = state_41053__$1;
(statearr_41079_41108[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41054 === (9))){
var inst_41041 = (state_41053[(2)]);
var inst_41042 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_41053__$1 = (function (){var statearr_41080 = state_41053;
(statearr_41080[(15)] = inst_41041);

return statearr_41080;
})();
if(cljs.core.truth_(inst_41042)){
var statearr_41081_41109 = state_41053__$1;
(statearr_41081_41109[(1)] = (21));

} else {
var statearr_41082_41110 = state_41053__$1;
(statearr_41082_41110[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41054 === (5))){
var inst_40997 = cljs.core.async.close_BANG_.call(null,out);
var state_41053__$1 = state_41053;
var statearr_41083_41111 = state_41053__$1;
(statearr_41083_41111[(2)] = inst_40997);

(statearr_41083_41111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41054 === (14))){
var inst_41019 = (state_41053[(7)]);
var inst_41021 = cljs.core.chunked_seq_QMARK_.call(null,inst_41019);
var state_41053__$1 = state_41053;
if(inst_41021){
var statearr_41084_41112 = state_41053__$1;
(statearr_41084_41112[(1)] = (17));

} else {
var statearr_41085_41113 = state_41053__$1;
(statearr_41085_41113[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41054 === (16))){
var inst_41037 = (state_41053[(2)]);
var state_41053__$1 = state_41053;
var statearr_41086_41114 = state_41053__$1;
(statearr_41086_41114[(2)] = inst_41037);

(statearr_41086_41114[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41054 === (10))){
var inst_41006 = (state_41053[(11)]);
var inst_41008 = (state_41053[(12)]);
var inst_41013 = cljs.core._nth.call(null,inst_41006,inst_41008);
var state_41053__$1 = state_41053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41053__$1,(13),out,inst_41013);
} else {
if((state_val_41054 === (18))){
var inst_41019 = (state_41053[(7)]);
var inst_41028 = cljs.core.first.call(null,inst_41019);
var state_41053__$1 = state_41053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41053__$1,(20),out,inst_41028);
} else {
if((state_val_41054 === (8))){
var inst_41007 = (state_41053[(10)]);
var inst_41008 = (state_41053[(12)]);
var inst_41010 = (inst_41008 < inst_41007);
var inst_41011 = inst_41010;
var state_41053__$1 = state_41053;
if(cljs.core.truth_(inst_41011)){
var statearr_41087_41115 = state_41053__$1;
(statearr_41087_41115[(1)] = (10));

} else {
var statearr_41088_41116 = state_41053__$1;
(statearr_41088_41116[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39437__auto__))
;
return ((function (switch__39342__auto__,c__39437__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__39343__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__39343__auto____0 = (function (){
var statearr_41089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41089[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__39343__auto__);

(statearr_41089[(1)] = (1));

return statearr_41089;
});
var cljs$core$async$mapcat_STAR__$_state_machine__39343__auto____1 = (function (state_41053){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_41053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e41090){if((e41090 instanceof Object)){
var ex__39346__auto__ = e41090;
var statearr_41091_41117 = state_41053;
(statearr_41091_41117[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41118 = state_41053;
state_41053 = G__41118;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__39343__auto__ = function(state_41053){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__39343__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__39343__auto____1.call(this,state_41053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__39343__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__39343__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__39343__auto__;
})()
;})(switch__39342__auto__,c__39437__auto__))
})();
var state__39439__auto__ = (function (){var statearr_41092 = f__39438__auto__.call(null);
(statearr_41092[(6)] = c__39437__auto__);

return statearr_41092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(c__39437__auto__))
);

return c__39437__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__41120 = arguments.length;
switch (G__41120) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__41123 = arguments.length;
switch (G__41123) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__41126 = arguments.length;
switch (G__41126) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39437__auto___41173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39437__auto___41173,out){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (c__39437__auto___41173,out){
return (function (state_41150){
var state_val_41151 = (state_41150[(1)]);
if((state_val_41151 === (7))){
var inst_41145 = (state_41150[(2)]);
var state_41150__$1 = state_41150;
var statearr_41152_41174 = state_41150__$1;
(statearr_41152_41174[(2)] = inst_41145);

(statearr_41152_41174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (1))){
var inst_41127 = null;
var state_41150__$1 = (function (){var statearr_41153 = state_41150;
(statearr_41153[(7)] = inst_41127);

return statearr_41153;
})();
var statearr_41154_41175 = state_41150__$1;
(statearr_41154_41175[(2)] = null);

(statearr_41154_41175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (4))){
var inst_41130 = (state_41150[(8)]);
var inst_41130__$1 = (state_41150[(2)]);
var inst_41131 = (inst_41130__$1 == null);
var inst_41132 = cljs.core.not.call(null,inst_41131);
var state_41150__$1 = (function (){var statearr_41155 = state_41150;
(statearr_41155[(8)] = inst_41130__$1);

return statearr_41155;
})();
if(inst_41132){
var statearr_41156_41176 = state_41150__$1;
(statearr_41156_41176[(1)] = (5));

} else {
var statearr_41157_41177 = state_41150__$1;
(statearr_41157_41177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (6))){
var state_41150__$1 = state_41150;
var statearr_41158_41178 = state_41150__$1;
(statearr_41158_41178[(2)] = null);

(statearr_41158_41178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (3))){
var inst_41147 = (state_41150[(2)]);
var inst_41148 = cljs.core.async.close_BANG_.call(null,out);
var state_41150__$1 = (function (){var statearr_41159 = state_41150;
(statearr_41159[(9)] = inst_41147);

return statearr_41159;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41150__$1,inst_41148);
} else {
if((state_val_41151 === (2))){
var state_41150__$1 = state_41150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41150__$1,(4),ch);
} else {
if((state_val_41151 === (11))){
var inst_41130 = (state_41150[(8)]);
var inst_41139 = (state_41150[(2)]);
var inst_41127 = inst_41130;
var state_41150__$1 = (function (){var statearr_41160 = state_41150;
(statearr_41160[(10)] = inst_41139);

(statearr_41160[(7)] = inst_41127);

return statearr_41160;
})();
var statearr_41161_41179 = state_41150__$1;
(statearr_41161_41179[(2)] = null);

(statearr_41161_41179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (9))){
var inst_41130 = (state_41150[(8)]);
var state_41150__$1 = state_41150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41150__$1,(11),out,inst_41130);
} else {
if((state_val_41151 === (5))){
var inst_41130 = (state_41150[(8)]);
var inst_41127 = (state_41150[(7)]);
var inst_41134 = cljs.core._EQ_.call(null,inst_41130,inst_41127);
var state_41150__$1 = state_41150;
if(inst_41134){
var statearr_41163_41180 = state_41150__$1;
(statearr_41163_41180[(1)] = (8));

} else {
var statearr_41164_41181 = state_41150__$1;
(statearr_41164_41181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (10))){
var inst_41142 = (state_41150[(2)]);
var state_41150__$1 = state_41150;
var statearr_41165_41182 = state_41150__$1;
(statearr_41165_41182[(2)] = inst_41142);

(statearr_41165_41182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (8))){
var inst_41127 = (state_41150[(7)]);
var tmp41162 = inst_41127;
var inst_41127__$1 = tmp41162;
var state_41150__$1 = (function (){var statearr_41166 = state_41150;
(statearr_41166[(7)] = inst_41127__$1);

return statearr_41166;
})();
var statearr_41167_41183 = state_41150__$1;
(statearr_41167_41183[(2)] = null);

(statearr_41167_41183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__39437__auto___41173,out))
;
return ((function (switch__39342__auto__,c__39437__auto___41173,out){
return (function() {
var cljs$core$async$state_machine__39343__auto__ = null;
var cljs$core$async$state_machine__39343__auto____0 = (function (){
var statearr_41168 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41168[(0)] = cljs$core$async$state_machine__39343__auto__);

(statearr_41168[(1)] = (1));

return statearr_41168;
});
var cljs$core$async$state_machine__39343__auto____1 = (function (state_41150){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_41150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e41169){if((e41169 instanceof Object)){
var ex__39346__auto__ = e41169;
var statearr_41170_41184 = state_41150;
(statearr_41170_41184[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41185 = state_41150;
state_41150 = G__41185;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
cljs$core$async$state_machine__39343__auto__ = function(state_41150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39343__auto____1.call(this,state_41150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39343__auto____0;
cljs$core$async$state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39343__auto____1;
return cljs$core$async$state_machine__39343__auto__;
})()
;})(switch__39342__auto__,c__39437__auto___41173,out))
})();
var state__39439__auto__ = (function (){var statearr_41171 = f__39438__auto__.call(null);
(statearr_41171[(6)] = c__39437__auto___41173);

return statearr_41171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(c__39437__auto___41173,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41187 = arguments.length;
switch (G__41187) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39437__auto___41253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39437__auto___41253,out){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (c__39437__auto___41253,out){
return (function (state_41225){
var state_val_41226 = (state_41225[(1)]);
if((state_val_41226 === (7))){
var inst_41221 = (state_41225[(2)]);
var state_41225__$1 = state_41225;
var statearr_41227_41254 = state_41225__$1;
(statearr_41227_41254[(2)] = inst_41221);

(statearr_41227_41254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41226 === (1))){
var inst_41188 = (new Array(n));
var inst_41189 = inst_41188;
var inst_41190 = (0);
var state_41225__$1 = (function (){var statearr_41228 = state_41225;
(statearr_41228[(7)] = inst_41190);

(statearr_41228[(8)] = inst_41189);

return statearr_41228;
})();
var statearr_41229_41255 = state_41225__$1;
(statearr_41229_41255[(2)] = null);

(statearr_41229_41255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41226 === (4))){
var inst_41193 = (state_41225[(9)]);
var inst_41193__$1 = (state_41225[(2)]);
var inst_41194 = (inst_41193__$1 == null);
var inst_41195 = cljs.core.not.call(null,inst_41194);
var state_41225__$1 = (function (){var statearr_41230 = state_41225;
(statearr_41230[(9)] = inst_41193__$1);

return statearr_41230;
})();
if(inst_41195){
var statearr_41231_41256 = state_41225__$1;
(statearr_41231_41256[(1)] = (5));

} else {
var statearr_41232_41257 = state_41225__$1;
(statearr_41232_41257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41226 === (15))){
var inst_41215 = (state_41225[(2)]);
var state_41225__$1 = state_41225;
var statearr_41233_41258 = state_41225__$1;
(statearr_41233_41258[(2)] = inst_41215);

(statearr_41233_41258[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41226 === (13))){
var state_41225__$1 = state_41225;
var statearr_41234_41259 = state_41225__$1;
(statearr_41234_41259[(2)] = null);

(statearr_41234_41259[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41226 === (6))){
var inst_41190 = (state_41225[(7)]);
var inst_41211 = (inst_41190 > (0));
var state_41225__$1 = state_41225;
if(cljs.core.truth_(inst_41211)){
var statearr_41235_41260 = state_41225__$1;
(statearr_41235_41260[(1)] = (12));

} else {
var statearr_41236_41261 = state_41225__$1;
(statearr_41236_41261[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41226 === (3))){
var inst_41223 = (state_41225[(2)]);
var state_41225__$1 = state_41225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41225__$1,inst_41223);
} else {
if((state_val_41226 === (12))){
var inst_41189 = (state_41225[(8)]);
var inst_41213 = cljs.core.vec.call(null,inst_41189);
var state_41225__$1 = state_41225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41225__$1,(15),out,inst_41213);
} else {
if((state_val_41226 === (2))){
var state_41225__$1 = state_41225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41225__$1,(4),ch);
} else {
if((state_val_41226 === (11))){
var inst_41205 = (state_41225[(2)]);
var inst_41206 = (new Array(n));
var inst_41189 = inst_41206;
var inst_41190 = (0);
var state_41225__$1 = (function (){var statearr_41237 = state_41225;
(statearr_41237[(10)] = inst_41205);

(statearr_41237[(7)] = inst_41190);

(statearr_41237[(8)] = inst_41189);

return statearr_41237;
})();
var statearr_41238_41262 = state_41225__$1;
(statearr_41238_41262[(2)] = null);

(statearr_41238_41262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41226 === (9))){
var inst_41189 = (state_41225[(8)]);
var inst_41203 = cljs.core.vec.call(null,inst_41189);
var state_41225__$1 = state_41225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41225__$1,(11),out,inst_41203);
} else {
if((state_val_41226 === (5))){
var inst_41190 = (state_41225[(7)]);
var inst_41198 = (state_41225[(11)]);
var inst_41193 = (state_41225[(9)]);
var inst_41189 = (state_41225[(8)]);
var inst_41197 = (inst_41189[inst_41190] = inst_41193);
var inst_41198__$1 = (inst_41190 + (1));
var inst_41199 = (inst_41198__$1 < n);
var state_41225__$1 = (function (){var statearr_41239 = state_41225;
(statearr_41239[(12)] = inst_41197);

(statearr_41239[(11)] = inst_41198__$1);

return statearr_41239;
})();
if(cljs.core.truth_(inst_41199)){
var statearr_41240_41263 = state_41225__$1;
(statearr_41240_41263[(1)] = (8));

} else {
var statearr_41241_41264 = state_41225__$1;
(statearr_41241_41264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41226 === (14))){
var inst_41218 = (state_41225[(2)]);
var inst_41219 = cljs.core.async.close_BANG_.call(null,out);
var state_41225__$1 = (function (){var statearr_41243 = state_41225;
(statearr_41243[(13)] = inst_41218);

return statearr_41243;
})();
var statearr_41244_41265 = state_41225__$1;
(statearr_41244_41265[(2)] = inst_41219);

(statearr_41244_41265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41226 === (10))){
var inst_41209 = (state_41225[(2)]);
var state_41225__$1 = state_41225;
var statearr_41245_41266 = state_41225__$1;
(statearr_41245_41266[(2)] = inst_41209);

(statearr_41245_41266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41226 === (8))){
var inst_41198 = (state_41225[(11)]);
var inst_41189 = (state_41225[(8)]);
var tmp41242 = inst_41189;
var inst_41189__$1 = tmp41242;
var inst_41190 = inst_41198;
var state_41225__$1 = (function (){var statearr_41246 = state_41225;
(statearr_41246[(7)] = inst_41190);

(statearr_41246[(8)] = inst_41189__$1);

return statearr_41246;
})();
var statearr_41247_41267 = state_41225__$1;
(statearr_41247_41267[(2)] = null);

(statearr_41247_41267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39437__auto___41253,out))
;
return ((function (switch__39342__auto__,c__39437__auto___41253,out){
return (function() {
var cljs$core$async$state_machine__39343__auto__ = null;
var cljs$core$async$state_machine__39343__auto____0 = (function (){
var statearr_41248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41248[(0)] = cljs$core$async$state_machine__39343__auto__);

(statearr_41248[(1)] = (1));

return statearr_41248;
});
var cljs$core$async$state_machine__39343__auto____1 = (function (state_41225){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_41225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e41249){if((e41249 instanceof Object)){
var ex__39346__auto__ = e41249;
var statearr_41250_41268 = state_41225;
(statearr_41250_41268[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41269 = state_41225;
state_41225 = G__41269;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
cljs$core$async$state_machine__39343__auto__ = function(state_41225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39343__auto____1.call(this,state_41225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39343__auto____0;
cljs$core$async$state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39343__auto____1;
return cljs$core$async$state_machine__39343__auto__;
})()
;})(switch__39342__auto__,c__39437__auto___41253,out))
})();
var state__39439__auto__ = (function (){var statearr_41251 = f__39438__auto__.call(null);
(statearr_41251[(6)] = c__39437__auto___41253);

return statearr_41251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(c__39437__auto___41253,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41271 = arguments.length;
switch (G__41271) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39437__auto___41341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39437__auto___41341,out){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (c__39437__auto___41341,out){
return (function (state_41313){
var state_val_41314 = (state_41313[(1)]);
if((state_val_41314 === (7))){
var inst_41309 = (state_41313[(2)]);
var state_41313__$1 = state_41313;
var statearr_41315_41342 = state_41313__$1;
(statearr_41315_41342[(2)] = inst_41309);

(statearr_41315_41342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41314 === (1))){
var inst_41272 = [];
var inst_41273 = inst_41272;
var inst_41274 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41313__$1 = (function (){var statearr_41316 = state_41313;
(statearr_41316[(7)] = inst_41274);

(statearr_41316[(8)] = inst_41273);

return statearr_41316;
})();
var statearr_41317_41343 = state_41313__$1;
(statearr_41317_41343[(2)] = null);

(statearr_41317_41343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41314 === (4))){
var inst_41277 = (state_41313[(9)]);
var inst_41277__$1 = (state_41313[(2)]);
var inst_41278 = (inst_41277__$1 == null);
var inst_41279 = cljs.core.not.call(null,inst_41278);
var state_41313__$1 = (function (){var statearr_41318 = state_41313;
(statearr_41318[(9)] = inst_41277__$1);

return statearr_41318;
})();
if(inst_41279){
var statearr_41319_41344 = state_41313__$1;
(statearr_41319_41344[(1)] = (5));

} else {
var statearr_41320_41345 = state_41313__$1;
(statearr_41320_41345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41314 === (15))){
var inst_41303 = (state_41313[(2)]);
var state_41313__$1 = state_41313;
var statearr_41321_41346 = state_41313__$1;
(statearr_41321_41346[(2)] = inst_41303);

(statearr_41321_41346[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41314 === (13))){
var state_41313__$1 = state_41313;
var statearr_41322_41347 = state_41313__$1;
(statearr_41322_41347[(2)] = null);

(statearr_41322_41347[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41314 === (6))){
var inst_41273 = (state_41313[(8)]);
var inst_41298 = inst_41273.length;
var inst_41299 = (inst_41298 > (0));
var state_41313__$1 = state_41313;
if(cljs.core.truth_(inst_41299)){
var statearr_41323_41348 = state_41313__$1;
(statearr_41323_41348[(1)] = (12));

} else {
var statearr_41324_41349 = state_41313__$1;
(statearr_41324_41349[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41314 === (3))){
var inst_41311 = (state_41313[(2)]);
var state_41313__$1 = state_41313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41313__$1,inst_41311);
} else {
if((state_val_41314 === (12))){
var inst_41273 = (state_41313[(8)]);
var inst_41301 = cljs.core.vec.call(null,inst_41273);
var state_41313__$1 = state_41313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41313__$1,(15),out,inst_41301);
} else {
if((state_val_41314 === (2))){
var state_41313__$1 = state_41313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41313__$1,(4),ch);
} else {
if((state_val_41314 === (11))){
var inst_41281 = (state_41313[(10)]);
var inst_41277 = (state_41313[(9)]);
var inst_41291 = (state_41313[(2)]);
var inst_41292 = [];
var inst_41293 = inst_41292.push(inst_41277);
var inst_41273 = inst_41292;
var inst_41274 = inst_41281;
var state_41313__$1 = (function (){var statearr_41325 = state_41313;
(statearr_41325[(11)] = inst_41293);

(statearr_41325[(7)] = inst_41274);

(statearr_41325[(8)] = inst_41273);

(statearr_41325[(12)] = inst_41291);

return statearr_41325;
})();
var statearr_41326_41350 = state_41313__$1;
(statearr_41326_41350[(2)] = null);

(statearr_41326_41350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41314 === (9))){
var inst_41273 = (state_41313[(8)]);
var inst_41289 = cljs.core.vec.call(null,inst_41273);
var state_41313__$1 = state_41313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41313__$1,(11),out,inst_41289);
} else {
if((state_val_41314 === (5))){
var inst_41281 = (state_41313[(10)]);
var inst_41274 = (state_41313[(7)]);
var inst_41277 = (state_41313[(9)]);
var inst_41281__$1 = f.call(null,inst_41277);
var inst_41282 = cljs.core._EQ_.call(null,inst_41281__$1,inst_41274);
var inst_41283 = cljs.core.keyword_identical_QMARK_.call(null,inst_41274,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41284 = ((inst_41282) || (inst_41283));
var state_41313__$1 = (function (){var statearr_41327 = state_41313;
(statearr_41327[(10)] = inst_41281__$1);

return statearr_41327;
})();
if(cljs.core.truth_(inst_41284)){
var statearr_41328_41351 = state_41313__$1;
(statearr_41328_41351[(1)] = (8));

} else {
var statearr_41329_41352 = state_41313__$1;
(statearr_41329_41352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41314 === (14))){
var inst_41306 = (state_41313[(2)]);
var inst_41307 = cljs.core.async.close_BANG_.call(null,out);
var state_41313__$1 = (function (){var statearr_41331 = state_41313;
(statearr_41331[(13)] = inst_41306);

return statearr_41331;
})();
var statearr_41332_41353 = state_41313__$1;
(statearr_41332_41353[(2)] = inst_41307);

(statearr_41332_41353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41314 === (10))){
var inst_41296 = (state_41313[(2)]);
var state_41313__$1 = state_41313;
var statearr_41333_41354 = state_41313__$1;
(statearr_41333_41354[(2)] = inst_41296);

(statearr_41333_41354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41314 === (8))){
var inst_41281 = (state_41313[(10)]);
var inst_41273 = (state_41313[(8)]);
var inst_41277 = (state_41313[(9)]);
var inst_41286 = inst_41273.push(inst_41277);
var tmp41330 = inst_41273;
var inst_41273__$1 = tmp41330;
var inst_41274 = inst_41281;
var state_41313__$1 = (function (){var statearr_41334 = state_41313;
(statearr_41334[(7)] = inst_41274);

(statearr_41334[(8)] = inst_41273__$1);

(statearr_41334[(14)] = inst_41286);

return statearr_41334;
})();
var statearr_41335_41355 = state_41313__$1;
(statearr_41335_41355[(2)] = null);

(statearr_41335_41355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39437__auto___41341,out))
;
return ((function (switch__39342__auto__,c__39437__auto___41341,out){
return (function() {
var cljs$core$async$state_machine__39343__auto__ = null;
var cljs$core$async$state_machine__39343__auto____0 = (function (){
var statearr_41336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41336[(0)] = cljs$core$async$state_machine__39343__auto__);

(statearr_41336[(1)] = (1));

return statearr_41336;
});
var cljs$core$async$state_machine__39343__auto____1 = (function (state_41313){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_41313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e41337){if((e41337 instanceof Object)){
var ex__39346__auto__ = e41337;
var statearr_41338_41356 = state_41313;
(statearr_41338_41356[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41357 = state_41313;
state_41313 = G__41357;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
cljs$core$async$state_machine__39343__auto__ = function(state_41313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39343__auto____1.call(this,state_41313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39343__auto____0;
cljs$core$async$state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39343__auto____1;
return cljs$core$async$state_machine__39343__auto__;
})()
;})(switch__39342__auto__,c__39437__auto___41341,out))
})();
var state__39439__auto__ = (function (){var statearr_41339 = f__39438__auto__.call(null);
(statearr_41339[(6)] = c__39437__auto___41341);

return statearr_41339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(c__39437__auto___41341,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1575052465003
