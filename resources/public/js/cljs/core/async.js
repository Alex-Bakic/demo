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
var G__57077 = arguments.length;
switch (G__57077) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57078 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57078 = (function (f,blockable,meta57079){
this.f = f;
this.blockable = blockable;
this.meta57079 = meta57079;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async57078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57080,meta57079__$1){
var self__ = this;
var _57080__$1 = this;
return (new cljs.core.async.t_cljs$core$async57078(self__.f,self__.blockable,meta57079__$1));
});

cljs.core.async.t_cljs$core$async57078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57080){
var self__ = this;
var _57080__$1 = this;
return self__.meta57079;
});

cljs.core.async.t_cljs$core$async57078.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57078.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async57078.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async57078.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async57078.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta57079","meta57079",-492500113,null)], null);
});

cljs.core.async.t_cljs$core$async57078.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57078.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57078";

cljs.core.async.t_cljs$core$async57078.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async57078");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57078.
 */
cljs.core.async.__GT_t_cljs$core$async57078 = (function cljs$core$async$__GT_t_cljs$core$async57078(f__$1,blockable__$1,meta57079){
return (new cljs.core.async.t_cljs$core$async57078(f__$1,blockable__$1,meta57079));
});

}

return (new cljs.core.async.t_cljs$core$async57078(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__57084 = arguments.length;
switch (G__57084) {
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
var G__57087 = arguments.length;
switch (G__57087) {
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
var G__57090 = arguments.length;
switch (G__57090) {
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
var val_57092 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_57092);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_57092,ret){
return (function (){
return fn1.call(null,val_57092);
});})(val_57092,ret))
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
var G__57094 = arguments.length;
switch (G__57094) {
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
var n__4518__auto___57096 = n;
var x_57097 = (0);
while(true){
if((x_57097 < n__4518__auto___57096)){
(a[x_57097] = (0));

var G__57098 = (x_57097 + (1));
x_57097 = G__57098;
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

var G__57099 = (i + (1));
i = G__57099;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57100 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57100 = (function (flag,meta57101){
this.flag = flag;
this.meta57101 = meta57101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async57100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_57102,meta57101__$1){
var self__ = this;
var _57102__$1 = this;
return (new cljs.core.async.t_cljs$core$async57100(self__.flag,meta57101__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async57100.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_57102){
var self__ = this;
var _57102__$1 = this;
return self__.meta57101;
});})(flag))
;

cljs.core.async.t_cljs$core$async57100.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57100.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async57100.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async57100.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async57100.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta57101","meta57101",-1770892824,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async57100.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57100";

cljs.core.async.t_cljs$core$async57100.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async57100");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57100.
 */
cljs.core.async.__GT_t_cljs$core$async57100 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async57100(flag__$1,meta57101){
return (new cljs.core.async.t_cljs$core$async57100(flag__$1,meta57101));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async57100(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57103 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57103 = (function (flag,cb,meta57104){
this.flag = flag;
this.cb = cb;
this.meta57104 = meta57104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async57103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57105,meta57104__$1){
var self__ = this;
var _57105__$1 = this;
return (new cljs.core.async.t_cljs$core$async57103(self__.flag,self__.cb,meta57104__$1));
});

cljs.core.async.t_cljs$core$async57103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57105){
var self__ = this;
var _57105__$1 = this;
return self__.meta57104;
});

cljs.core.async.t_cljs$core$async57103.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57103.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async57103.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async57103.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async57103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta57104","meta57104",931101711,null)], null);
});

cljs.core.async.t_cljs$core$async57103.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57103";

cljs.core.async.t_cljs$core$async57103.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async57103");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57103.
 */
cljs.core.async.__GT_t_cljs$core$async57103 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async57103(flag__$1,cb__$1,meta57104){
return (new cljs.core.async.t_cljs$core$async57103(flag__$1,cb__$1,meta57104));
});

}

return (new cljs.core.async.t_cljs$core$async57103(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__57106_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__57106_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__57107_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__57107_SHARP_,port], null));
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
var G__57108 = (i + (1));
i = G__57108;
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
var len__4641__auto___57114 = arguments.length;
var i__4642__auto___57115 = (0);
while(true){
if((i__4642__auto___57115 < len__4641__auto___57114)){
args__4647__auto__.push((arguments[i__4642__auto___57115]));

var G__57116 = (i__4642__auto___57115 + (1));
i__4642__auto___57115 = G__57116;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__57111){
var map__57112 = p__57111;
var map__57112__$1 = (((((!((map__57112 == null))))?(((((map__57112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57112):map__57112);
var opts = map__57112__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq57109){
var G__57110 = cljs.core.first.call(null,seq57109);
var seq57109__$1 = cljs.core.next.call(null,seq57109);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57110,seq57109__$1);
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
var G__57118 = arguments.length;
switch (G__57118) {
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
var c__55153__auto___57164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55153__auto___57164){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (c__55153__auto___57164){
return (function (state_57142){
var state_val_57143 = (state_57142[(1)]);
if((state_val_57143 === (7))){
var inst_57138 = (state_57142[(2)]);
var state_57142__$1 = state_57142;
var statearr_57144_57165 = state_57142__$1;
(statearr_57144_57165[(2)] = inst_57138);

(statearr_57144_57165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57143 === (1))){
var state_57142__$1 = state_57142;
var statearr_57145_57166 = state_57142__$1;
(statearr_57145_57166[(2)] = null);

(statearr_57145_57166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57143 === (4))){
var inst_57121 = (state_57142[(7)]);
var inst_57121__$1 = (state_57142[(2)]);
var inst_57122 = (inst_57121__$1 == null);
var state_57142__$1 = (function (){var statearr_57146 = state_57142;
(statearr_57146[(7)] = inst_57121__$1);

return statearr_57146;
})();
if(cljs.core.truth_(inst_57122)){
var statearr_57147_57167 = state_57142__$1;
(statearr_57147_57167[(1)] = (5));

} else {
var statearr_57148_57168 = state_57142__$1;
(statearr_57148_57168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57143 === (13))){
var state_57142__$1 = state_57142;
var statearr_57149_57169 = state_57142__$1;
(statearr_57149_57169[(2)] = null);

(statearr_57149_57169[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57143 === (6))){
var inst_57121 = (state_57142[(7)]);
var state_57142__$1 = state_57142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57142__$1,(11),to,inst_57121);
} else {
if((state_val_57143 === (3))){
var inst_57140 = (state_57142[(2)]);
var state_57142__$1 = state_57142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57142__$1,inst_57140);
} else {
if((state_val_57143 === (12))){
var state_57142__$1 = state_57142;
var statearr_57150_57170 = state_57142__$1;
(statearr_57150_57170[(2)] = null);

(statearr_57150_57170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57143 === (2))){
var state_57142__$1 = state_57142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57142__$1,(4),from);
} else {
if((state_val_57143 === (11))){
var inst_57131 = (state_57142[(2)]);
var state_57142__$1 = state_57142;
if(cljs.core.truth_(inst_57131)){
var statearr_57151_57171 = state_57142__$1;
(statearr_57151_57171[(1)] = (12));

} else {
var statearr_57152_57172 = state_57142__$1;
(statearr_57152_57172[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57143 === (9))){
var state_57142__$1 = state_57142;
var statearr_57153_57173 = state_57142__$1;
(statearr_57153_57173[(2)] = null);

(statearr_57153_57173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57143 === (5))){
var state_57142__$1 = state_57142;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57154_57174 = state_57142__$1;
(statearr_57154_57174[(1)] = (8));

} else {
var statearr_57155_57175 = state_57142__$1;
(statearr_57155_57175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57143 === (14))){
var inst_57136 = (state_57142[(2)]);
var state_57142__$1 = state_57142;
var statearr_57156_57176 = state_57142__$1;
(statearr_57156_57176[(2)] = inst_57136);

(statearr_57156_57176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57143 === (10))){
var inst_57128 = (state_57142[(2)]);
var state_57142__$1 = state_57142;
var statearr_57157_57177 = state_57142__$1;
(statearr_57157_57177[(2)] = inst_57128);

(statearr_57157_57177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57143 === (8))){
var inst_57125 = cljs.core.async.close_BANG_.call(null,to);
var state_57142__$1 = state_57142;
var statearr_57158_57178 = state_57142__$1;
(statearr_57158_57178[(2)] = inst_57125);

(statearr_57158_57178[(1)] = (10));


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
});})(c__55153__auto___57164))
;
return ((function (switch__54986__auto__,c__55153__auto___57164){
return (function() {
var cljs$core$async$state_machine__54987__auto__ = null;
var cljs$core$async$state_machine__54987__auto____0 = (function (){
var statearr_57159 = [null,null,null,null,null,null,null,null];
(statearr_57159[(0)] = cljs$core$async$state_machine__54987__auto__);

(statearr_57159[(1)] = (1));

return statearr_57159;
});
var cljs$core$async$state_machine__54987__auto____1 = (function (state_57142){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_57142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e57160){if((e57160 instanceof Object)){
var ex__54990__auto__ = e57160;
var statearr_57161_57179 = state_57142;
(statearr_57161_57179[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57180 = state_57142;
state_57142 = G__57180;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
cljs$core$async$state_machine__54987__auto__ = function(state_57142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54987__auto____1.call(this,state_57142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54987__auto____0;
cljs$core$async$state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54987__auto____1;
return cljs$core$async$state_machine__54987__auto__;
})()
;})(switch__54986__auto__,c__55153__auto___57164))
})();
var state__55155__auto__ = (function (){var statearr_57162 = f__55154__auto__.call(null);
(statearr_57162[(6)] = c__55153__auto___57164);

return statearr_57162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(c__55153__auto___57164))
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
return (function (p__57181){
var vec__57182 = p__57181;
var v = cljs.core.nth.call(null,vec__57182,(0),null);
var p = cljs.core.nth.call(null,vec__57182,(1),null);
var job = vec__57182;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__55153__auto___57353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55153__auto___57353,res,vec__57182,v,p,job,jobs,results){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (c__55153__auto___57353,res,vec__57182,v,p,job,jobs,results){
return (function (state_57189){
var state_val_57190 = (state_57189[(1)]);
if((state_val_57190 === (1))){
var state_57189__$1 = state_57189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57189__$1,(2),res,v);
} else {
if((state_val_57190 === (2))){
var inst_57186 = (state_57189[(2)]);
var inst_57187 = cljs.core.async.close_BANG_.call(null,res);
var state_57189__$1 = (function (){var statearr_57191 = state_57189;
(statearr_57191[(7)] = inst_57186);

return statearr_57191;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57189__$1,inst_57187);
} else {
return null;
}
}
});})(c__55153__auto___57353,res,vec__57182,v,p,job,jobs,results))
;
return ((function (switch__54986__auto__,c__55153__auto___57353,res,vec__57182,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____0 = (function (){
var statearr_57192 = [null,null,null,null,null,null,null,null];
(statearr_57192[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__);

(statearr_57192[(1)] = (1));

return statearr_57192;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____1 = (function (state_57189){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_57189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e57193){if((e57193 instanceof Object)){
var ex__54990__auto__ = e57193;
var statearr_57194_57354 = state_57189;
(statearr_57194_57354[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57355 = state_57189;
state_57189 = G__57355;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__ = function(state_57189){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____1.call(this,state_57189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__;
})()
;})(switch__54986__auto__,c__55153__auto___57353,res,vec__57182,v,p,job,jobs,results))
})();
var state__55155__auto__ = (function (){var statearr_57195 = f__55154__auto__.call(null);
(statearr_57195[(6)] = c__55153__auto___57353);

return statearr_57195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(c__55153__auto___57353,res,vec__57182,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__57196){
var vec__57197 = p__57196;
var v = cljs.core.nth.call(null,vec__57197,(0),null);
var p = cljs.core.nth.call(null,vec__57197,(1),null);
var job = vec__57197;
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
var n__4518__auto___57356 = n;
var __57357 = (0);
while(true){
if((__57357 < n__4518__auto___57356)){
var G__57200_57358 = type;
var G__57200_57359__$1 = (((G__57200_57358 instanceof cljs.core.Keyword))?G__57200_57358.fqn:null);
switch (G__57200_57359__$1) {
case "compute":
var c__55153__auto___57361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__57357,c__55153__auto___57361,G__57200_57358,G__57200_57359__$1,n__4518__auto___57356,jobs,results,process,async){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (__57357,c__55153__auto___57361,G__57200_57358,G__57200_57359__$1,n__4518__auto___57356,jobs,results,process,async){
return (function (state_57213){
var state_val_57214 = (state_57213[(1)]);
if((state_val_57214 === (1))){
var state_57213__$1 = state_57213;
var statearr_57215_57362 = state_57213__$1;
(statearr_57215_57362[(2)] = null);

(statearr_57215_57362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57214 === (2))){
var state_57213__$1 = state_57213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57213__$1,(4),jobs);
} else {
if((state_val_57214 === (3))){
var inst_57211 = (state_57213[(2)]);
var state_57213__$1 = state_57213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57213__$1,inst_57211);
} else {
if((state_val_57214 === (4))){
var inst_57203 = (state_57213[(2)]);
var inst_57204 = process.call(null,inst_57203);
var state_57213__$1 = state_57213;
if(cljs.core.truth_(inst_57204)){
var statearr_57216_57363 = state_57213__$1;
(statearr_57216_57363[(1)] = (5));

} else {
var statearr_57217_57364 = state_57213__$1;
(statearr_57217_57364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57214 === (5))){
var state_57213__$1 = state_57213;
var statearr_57218_57365 = state_57213__$1;
(statearr_57218_57365[(2)] = null);

(statearr_57218_57365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57214 === (6))){
var state_57213__$1 = state_57213;
var statearr_57219_57366 = state_57213__$1;
(statearr_57219_57366[(2)] = null);

(statearr_57219_57366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57214 === (7))){
var inst_57209 = (state_57213[(2)]);
var state_57213__$1 = state_57213;
var statearr_57220_57367 = state_57213__$1;
(statearr_57220_57367[(2)] = inst_57209);

(statearr_57220_57367[(1)] = (3));


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
});})(__57357,c__55153__auto___57361,G__57200_57358,G__57200_57359__$1,n__4518__auto___57356,jobs,results,process,async))
;
return ((function (__57357,switch__54986__auto__,c__55153__auto___57361,G__57200_57358,G__57200_57359__$1,n__4518__auto___57356,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____0 = (function (){
var statearr_57221 = [null,null,null,null,null,null,null];
(statearr_57221[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__);

(statearr_57221[(1)] = (1));

return statearr_57221;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____1 = (function (state_57213){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_57213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e57222){if((e57222 instanceof Object)){
var ex__54990__auto__ = e57222;
var statearr_57223_57368 = state_57213;
(statearr_57223_57368[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57369 = state_57213;
state_57213 = G__57369;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__ = function(state_57213){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____1.call(this,state_57213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__;
})()
;})(__57357,switch__54986__auto__,c__55153__auto___57361,G__57200_57358,G__57200_57359__$1,n__4518__auto___57356,jobs,results,process,async))
})();
var state__55155__auto__ = (function (){var statearr_57224 = f__55154__auto__.call(null);
(statearr_57224[(6)] = c__55153__auto___57361);

return statearr_57224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(__57357,c__55153__auto___57361,G__57200_57358,G__57200_57359__$1,n__4518__auto___57356,jobs,results,process,async))
);


break;
case "async":
var c__55153__auto___57370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__57357,c__55153__auto___57370,G__57200_57358,G__57200_57359__$1,n__4518__auto___57356,jobs,results,process,async){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (__57357,c__55153__auto___57370,G__57200_57358,G__57200_57359__$1,n__4518__auto___57356,jobs,results,process,async){
return (function (state_57237){
var state_val_57238 = (state_57237[(1)]);
if((state_val_57238 === (1))){
var state_57237__$1 = state_57237;
var statearr_57239_57371 = state_57237__$1;
(statearr_57239_57371[(2)] = null);

(statearr_57239_57371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57238 === (2))){
var state_57237__$1 = state_57237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57237__$1,(4),jobs);
} else {
if((state_val_57238 === (3))){
var inst_57235 = (state_57237[(2)]);
var state_57237__$1 = state_57237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57237__$1,inst_57235);
} else {
if((state_val_57238 === (4))){
var inst_57227 = (state_57237[(2)]);
var inst_57228 = async.call(null,inst_57227);
var state_57237__$1 = state_57237;
if(cljs.core.truth_(inst_57228)){
var statearr_57240_57372 = state_57237__$1;
(statearr_57240_57372[(1)] = (5));

} else {
var statearr_57241_57373 = state_57237__$1;
(statearr_57241_57373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57238 === (5))){
var state_57237__$1 = state_57237;
var statearr_57242_57374 = state_57237__$1;
(statearr_57242_57374[(2)] = null);

(statearr_57242_57374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57238 === (6))){
var state_57237__$1 = state_57237;
var statearr_57243_57375 = state_57237__$1;
(statearr_57243_57375[(2)] = null);

(statearr_57243_57375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57238 === (7))){
var inst_57233 = (state_57237[(2)]);
var state_57237__$1 = state_57237;
var statearr_57244_57376 = state_57237__$1;
(statearr_57244_57376[(2)] = inst_57233);

(statearr_57244_57376[(1)] = (3));


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
});})(__57357,c__55153__auto___57370,G__57200_57358,G__57200_57359__$1,n__4518__auto___57356,jobs,results,process,async))
;
return ((function (__57357,switch__54986__auto__,c__55153__auto___57370,G__57200_57358,G__57200_57359__$1,n__4518__auto___57356,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____0 = (function (){
var statearr_57245 = [null,null,null,null,null,null,null];
(statearr_57245[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__);

(statearr_57245[(1)] = (1));

return statearr_57245;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____1 = (function (state_57237){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_57237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e57246){if((e57246 instanceof Object)){
var ex__54990__auto__ = e57246;
var statearr_57247_57377 = state_57237;
(statearr_57247_57377[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57378 = state_57237;
state_57237 = G__57378;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__ = function(state_57237){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____1.call(this,state_57237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__;
})()
;})(__57357,switch__54986__auto__,c__55153__auto___57370,G__57200_57358,G__57200_57359__$1,n__4518__auto___57356,jobs,results,process,async))
})();
var state__55155__auto__ = (function (){var statearr_57248 = f__55154__auto__.call(null);
(statearr_57248[(6)] = c__55153__auto___57370);

return statearr_57248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(__57357,c__55153__auto___57370,G__57200_57358,G__57200_57359__$1,n__4518__auto___57356,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57200_57359__$1)].join('')));

}

var G__57379 = (__57357 + (1));
__57357 = G__57379;
continue;
} else {
}
break;
}

var c__55153__auto___57380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55153__auto___57380,jobs,results,process,async){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (c__55153__auto___57380,jobs,results,process,async){
return (function (state_57270){
var state_val_57271 = (state_57270[(1)]);
if((state_val_57271 === (7))){
var inst_57266 = (state_57270[(2)]);
var state_57270__$1 = state_57270;
var statearr_57272_57381 = state_57270__$1;
(statearr_57272_57381[(2)] = inst_57266);

(statearr_57272_57381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57271 === (1))){
var state_57270__$1 = state_57270;
var statearr_57273_57382 = state_57270__$1;
(statearr_57273_57382[(2)] = null);

(statearr_57273_57382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57271 === (4))){
var inst_57251 = (state_57270[(7)]);
var inst_57251__$1 = (state_57270[(2)]);
var inst_57252 = (inst_57251__$1 == null);
var state_57270__$1 = (function (){var statearr_57274 = state_57270;
(statearr_57274[(7)] = inst_57251__$1);

return statearr_57274;
})();
if(cljs.core.truth_(inst_57252)){
var statearr_57275_57383 = state_57270__$1;
(statearr_57275_57383[(1)] = (5));

} else {
var statearr_57276_57384 = state_57270__$1;
(statearr_57276_57384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57271 === (6))){
var inst_57256 = (state_57270[(8)]);
var inst_57251 = (state_57270[(7)]);
var inst_57256__$1 = cljs.core.async.chan.call(null,(1));
var inst_57257 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57258 = [inst_57251,inst_57256__$1];
var inst_57259 = (new cljs.core.PersistentVector(null,2,(5),inst_57257,inst_57258,null));
var state_57270__$1 = (function (){var statearr_57277 = state_57270;
(statearr_57277[(8)] = inst_57256__$1);

return statearr_57277;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57270__$1,(8),jobs,inst_57259);
} else {
if((state_val_57271 === (3))){
var inst_57268 = (state_57270[(2)]);
var state_57270__$1 = state_57270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57270__$1,inst_57268);
} else {
if((state_val_57271 === (2))){
var state_57270__$1 = state_57270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57270__$1,(4),from);
} else {
if((state_val_57271 === (9))){
var inst_57263 = (state_57270[(2)]);
var state_57270__$1 = (function (){var statearr_57278 = state_57270;
(statearr_57278[(9)] = inst_57263);

return statearr_57278;
})();
var statearr_57279_57385 = state_57270__$1;
(statearr_57279_57385[(2)] = null);

(statearr_57279_57385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57271 === (5))){
var inst_57254 = cljs.core.async.close_BANG_.call(null,jobs);
var state_57270__$1 = state_57270;
var statearr_57280_57386 = state_57270__$1;
(statearr_57280_57386[(2)] = inst_57254);

(statearr_57280_57386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57271 === (8))){
var inst_57256 = (state_57270[(8)]);
var inst_57261 = (state_57270[(2)]);
var state_57270__$1 = (function (){var statearr_57281 = state_57270;
(statearr_57281[(10)] = inst_57261);

return statearr_57281;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57270__$1,(9),results,inst_57256);
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
});})(c__55153__auto___57380,jobs,results,process,async))
;
return ((function (switch__54986__auto__,c__55153__auto___57380,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____0 = (function (){
var statearr_57282 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57282[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__);

(statearr_57282[(1)] = (1));

return statearr_57282;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____1 = (function (state_57270){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_57270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e57283){if((e57283 instanceof Object)){
var ex__54990__auto__ = e57283;
var statearr_57284_57387 = state_57270;
(statearr_57284_57387[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57388 = state_57270;
state_57270 = G__57388;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__ = function(state_57270){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____1.call(this,state_57270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__;
})()
;})(switch__54986__auto__,c__55153__auto___57380,jobs,results,process,async))
})();
var state__55155__auto__ = (function (){var statearr_57285 = f__55154__auto__.call(null);
(statearr_57285[(6)] = c__55153__auto___57380);

return statearr_57285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(c__55153__auto___57380,jobs,results,process,async))
);


var c__55153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55153__auto__,jobs,results,process,async){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (c__55153__auto__,jobs,results,process,async){
return (function (state_57323){
var state_val_57324 = (state_57323[(1)]);
if((state_val_57324 === (7))){
var inst_57319 = (state_57323[(2)]);
var state_57323__$1 = state_57323;
var statearr_57325_57389 = state_57323__$1;
(statearr_57325_57389[(2)] = inst_57319);

(statearr_57325_57389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57324 === (20))){
var state_57323__$1 = state_57323;
var statearr_57326_57390 = state_57323__$1;
(statearr_57326_57390[(2)] = null);

(statearr_57326_57390[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57324 === (1))){
var state_57323__$1 = state_57323;
var statearr_57327_57391 = state_57323__$1;
(statearr_57327_57391[(2)] = null);

(statearr_57327_57391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57324 === (4))){
var inst_57288 = (state_57323[(7)]);
var inst_57288__$1 = (state_57323[(2)]);
var inst_57289 = (inst_57288__$1 == null);
var state_57323__$1 = (function (){var statearr_57328 = state_57323;
(statearr_57328[(7)] = inst_57288__$1);

return statearr_57328;
})();
if(cljs.core.truth_(inst_57289)){
var statearr_57329_57392 = state_57323__$1;
(statearr_57329_57392[(1)] = (5));

} else {
var statearr_57330_57393 = state_57323__$1;
(statearr_57330_57393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57324 === (15))){
var inst_57301 = (state_57323[(8)]);
var state_57323__$1 = state_57323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57323__$1,(18),to,inst_57301);
} else {
if((state_val_57324 === (21))){
var inst_57314 = (state_57323[(2)]);
var state_57323__$1 = state_57323;
var statearr_57331_57394 = state_57323__$1;
(statearr_57331_57394[(2)] = inst_57314);

(statearr_57331_57394[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57324 === (13))){
var inst_57316 = (state_57323[(2)]);
var state_57323__$1 = (function (){var statearr_57332 = state_57323;
(statearr_57332[(9)] = inst_57316);

return statearr_57332;
})();
var statearr_57333_57395 = state_57323__$1;
(statearr_57333_57395[(2)] = null);

(statearr_57333_57395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57324 === (6))){
var inst_57288 = (state_57323[(7)]);
var state_57323__$1 = state_57323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57323__$1,(11),inst_57288);
} else {
if((state_val_57324 === (17))){
var inst_57309 = (state_57323[(2)]);
var state_57323__$1 = state_57323;
if(cljs.core.truth_(inst_57309)){
var statearr_57334_57396 = state_57323__$1;
(statearr_57334_57396[(1)] = (19));

} else {
var statearr_57335_57397 = state_57323__$1;
(statearr_57335_57397[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57324 === (3))){
var inst_57321 = (state_57323[(2)]);
var state_57323__$1 = state_57323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57323__$1,inst_57321);
} else {
if((state_val_57324 === (12))){
var inst_57298 = (state_57323[(10)]);
var state_57323__$1 = state_57323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57323__$1,(14),inst_57298);
} else {
if((state_val_57324 === (2))){
var state_57323__$1 = state_57323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57323__$1,(4),results);
} else {
if((state_val_57324 === (19))){
var state_57323__$1 = state_57323;
var statearr_57336_57398 = state_57323__$1;
(statearr_57336_57398[(2)] = null);

(statearr_57336_57398[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57324 === (11))){
var inst_57298 = (state_57323[(2)]);
var state_57323__$1 = (function (){var statearr_57337 = state_57323;
(statearr_57337[(10)] = inst_57298);

return statearr_57337;
})();
var statearr_57338_57399 = state_57323__$1;
(statearr_57338_57399[(2)] = null);

(statearr_57338_57399[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57324 === (9))){
var state_57323__$1 = state_57323;
var statearr_57339_57400 = state_57323__$1;
(statearr_57339_57400[(2)] = null);

(statearr_57339_57400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57324 === (5))){
var state_57323__$1 = state_57323;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57340_57401 = state_57323__$1;
(statearr_57340_57401[(1)] = (8));

} else {
var statearr_57341_57402 = state_57323__$1;
(statearr_57341_57402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57324 === (14))){
var inst_57303 = (state_57323[(11)]);
var inst_57301 = (state_57323[(8)]);
var inst_57301__$1 = (state_57323[(2)]);
var inst_57302 = (inst_57301__$1 == null);
var inst_57303__$1 = cljs.core.not.call(null,inst_57302);
var state_57323__$1 = (function (){var statearr_57342 = state_57323;
(statearr_57342[(11)] = inst_57303__$1);

(statearr_57342[(8)] = inst_57301__$1);

return statearr_57342;
})();
if(inst_57303__$1){
var statearr_57343_57403 = state_57323__$1;
(statearr_57343_57403[(1)] = (15));

} else {
var statearr_57344_57404 = state_57323__$1;
(statearr_57344_57404[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57324 === (16))){
var inst_57303 = (state_57323[(11)]);
var state_57323__$1 = state_57323;
var statearr_57345_57405 = state_57323__$1;
(statearr_57345_57405[(2)] = inst_57303);

(statearr_57345_57405[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57324 === (10))){
var inst_57295 = (state_57323[(2)]);
var state_57323__$1 = state_57323;
var statearr_57346_57406 = state_57323__$1;
(statearr_57346_57406[(2)] = inst_57295);

(statearr_57346_57406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57324 === (18))){
var inst_57306 = (state_57323[(2)]);
var state_57323__$1 = state_57323;
var statearr_57347_57407 = state_57323__$1;
(statearr_57347_57407[(2)] = inst_57306);

(statearr_57347_57407[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57324 === (8))){
var inst_57292 = cljs.core.async.close_BANG_.call(null,to);
var state_57323__$1 = state_57323;
var statearr_57348_57408 = state_57323__$1;
(statearr_57348_57408[(2)] = inst_57292);

(statearr_57348_57408[(1)] = (10));


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
});})(c__55153__auto__,jobs,results,process,async))
;
return ((function (switch__54986__auto__,c__55153__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____0 = (function (){
var statearr_57349 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57349[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__);

(statearr_57349[(1)] = (1));

return statearr_57349;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____1 = (function (state_57323){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_57323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e57350){if((e57350 instanceof Object)){
var ex__54990__auto__ = e57350;
var statearr_57351_57409 = state_57323;
(statearr_57351_57409[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57410 = state_57323;
state_57323 = G__57410;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__ = function(state_57323){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____1.call(this,state_57323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54987__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54987__auto__;
})()
;})(switch__54986__auto__,c__55153__auto__,jobs,results,process,async))
})();
var state__55155__auto__ = (function (){var statearr_57352 = f__55154__auto__.call(null);
(statearr_57352[(6)] = c__55153__auto__);

return statearr_57352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(c__55153__auto__,jobs,results,process,async))
);

return c__55153__auto__;
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
var G__57412 = arguments.length;
switch (G__57412) {
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
var G__57415 = arguments.length;
switch (G__57415) {
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
var G__57418 = arguments.length;
switch (G__57418) {
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
var c__55153__auto___57467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55153__auto___57467,tc,fc){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (c__55153__auto___57467,tc,fc){
return (function (state_57444){
var state_val_57445 = (state_57444[(1)]);
if((state_val_57445 === (7))){
var inst_57440 = (state_57444[(2)]);
var state_57444__$1 = state_57444;
var statearr_57446_57468 = state_57444__$1;
(statearr_57446_57468[(2)] = inst_57440);

(statearr_57446_57468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57445 === (1))){
var state_57444__$1 = state_57444;
var statearr_57447_57469 = state_57444__$1;
(statearr_57447_57469[(2)] = null);

(statearr_57447_57469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57445 === (4))){
var inst_57421 = (state_57444[(7)]);
var inst_57421__$1 = (state_57444[(2)]);
var inst_57422 = (inst_57421__$1 == null);
var state_57444__$1 = (function (){var statearr_57448 = state_57444;
(statearr_57448[(7)] = inst_57421__$1);

return statearr_57448;
})();
if(cljs.core.truth_(inst_57422)){
var statearr_57449_57470 = state_57444__$1;
(statearr_57449_57470[(1)] = (5));

} else {
var statearr_57450_57471 = state_57444__$1;
(statearr_57450_57471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57445 === (13))){
var state_57444__$1 = state_57444;
var statearr_57451_57472 = state_57444__$1;
(statearr_57451_57472[(2)] = null);

(statearr_57451_57472[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57445 === (6))){
var inst_57421 = (state_57444[(7)]);
var inst_57427 = p.call(null,inst_57421);
var state_57444__$1 = state_57444;
if(cljs.core.truth_(inst_57427)){
var statearr_57452_57473 = state_57444__$1;
(statearr_57452_57473[(1)] = (9));

} else {
var statearr_57453_57474 = state_57444__$1;
(statearr_57453_57474[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57445 === (3))){
var inst_57442 = (state_57444[(2)]);
var state_57444__$1 = state_57444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57444__$1,inst_57442);
} else {
if((state_val_57445 === (12))){
var state_57444__$1 = state_57444;
var statearr_57454_57475 = state_57444__$1;
(statearr_57454_57475[(2)] = null);

(statearr_57454_57475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57445 === (2))){
var state_57444__$1 = state_57444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57444__$1,(4),ch);
} else {
if((state_val_57445 === (11))){
var inst_57421 = (state_57444[(7)]);
var inst_57431 = (state_57444[(2)]);
var state_57444__$1 = state_57444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57444__$1,(8),inst_57431,inst_57421);
} else {
if((state_val_57445 === (9))){
var state_57444__$1 = state_57444;
var statearr_57455_57476 = state_57444__$1;
(statearr_57455_57476[(2)] = tc);

(statearr_57455_57476[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57445 === (5))){
var inst_57424 = cljs.core.async.close_BANG_.call(null,tc);
var inst_57425 = cljs.core.async.close_BANG_.call(null,fc);
var state_57444__$1 = (function (){var statearr_57456 = state_57444;
(statearr_57456[(8)] = inst_57424);

return statearr_57456;
})();
var statearr_57457_57477 = state_57444__$1;
(statearr_57457_57477[(2)] = inst_57425);

(statearr_57457_57477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57445 === (14))){
var inst_57438 = (state_57444[(2)]);
var state_57444__$1 = state_57444;
var statearr_57458_57478 = state_57444__$1;
(statearr_57458_57478[(2)] = inst_57438);

(statearr_57458_57478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57445 === (10))){
var state_57444__$1 = state_57444;
var statearr_57459_57479 = state_57444__$1;
(statearr_57459_57479[(2)] = fc);

(statearr_57459_57479[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57445 === (8))){
var inst_57433 = (state_57444[(2)]);
var state_57444__$1 = state_57444;
if(cljs.core.truth_(inst_57433)){
var statearr_57460_57480 = state_57444__$1;
(statearr_57460_57480[(1)] = (12));

} else {
var statearr_57461_57481 = state_57444__$1;
(statearr_57461_57481[(1)] = (13));

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
});})(c__55153__auto___57467,tc,fc))
;
return ((function (switch__54986__auto__,c__55153__auto___57467,tc,fc){
return (function() {
var cljs$core$async$state_machine__54987__auto__ = null;
var cljs$core$async$state_machine__54987__auto____0 = (function (){
var statearr_57462 = [null,null,null,null,null,null,null,null,null];
(statearr_57462[(0)] = cljs$core$async$state_machine__54987__auto__);

(statearr_57462[(1)] = (1));

return statearr_57462;
});
var cljs$core$async$state_machine__54987__auto____1 = (function (state_57444){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_57444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e57463){if((e57463 instanceof Object)){
var ex__54990__auto__ = e57463;
var statearr_57464_57482 = state_57444;
(statearr_57464_57482[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57483 = state_57444;
state_57444 = G__57483;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
cljs$core$async$state_machine__54987__auto__ = function(state_57444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54987__auto____1.call(this,state_57444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54987__auto____0;
cljs$core$async$state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54987__auto____1;
return cljs$core$async$state_machine__54987__auto__;
})()
;})(switch__54986__auto__,c__55153__auto___57467,tc,fc))
})();
var state__55155__auto__ = (function (){var statearr_57465 = f__55154__auto__.call(null);
(statearr_57465[(6)] = c__55153__auto___57467);

return statearr_57465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(c__55153__auto___57467,tc,fc))
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
var c__55153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55153__auto__){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (c__55153__auto__){
return (function (state_57504){
var state_val_57505 = (state_57504[(1)]);
if((state_val_57505 === (7))){
var inst_57500 = (state_57504[(2)]);
var state_57504__$1 = state_57504;
var statearr_57506_57524 = state_57504__$1;
(statearr_57506_57524[(2)] = inst_57500);

(statearr_57506_57524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57505 === (1))){
var inst_57484 = init;
var state_57504__$1 = (function (){var statearr_57507 = state_57504;
(statearr_57507[(7)] = inst_57484);

return statearr_57507;
})();
var statearr_57508_57525 = state_57504__$1;
(statearr_57508_57525[(2)] = null);

(statearr_57508_57525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57505 === (4))){
var inst_57487 = (state_57504[(8)]);
var inst_57487__$1 = (state_57504[(2)]);
var inst_57488 = (inst_57487__$1 == null);
var state_57504__$1 = (function (){var statearr_57509 = state_57504;
(statearr_57509[(8)] = inst_57487__$1);

return statearr_57509;
})();
if(cljs.core.truth_(inst_57488)){
var statearr_57510_57526 = state_57504__$1;
(statearr_57510_57526[(1)] = (5));

} else {
var statearr_57511_57527 = state_57504__$1;
(statearr_57511_57527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57505 === (6))){
var inst_57484 = (state_57504[(7)]);
var inst_57491 = (state_57504[(9)]);
var inst_57487 = (state_57504[(8)]);
var inst_57491__$1 = f.call(null,inst_57484,inst_57487);
var inst_57492 = cljs.core.reduced_QMARK_.call(null,inst_57491__$1);
var state_57504__$1 = (function (){var statearr_57512 = state_57504;
(statearr_57512[(9)] = inst_57491__$1);

return statearr_57512;
})();
if(inst_57492){
var statearr_57513_57528 = state_57504__$1;
(statearr_57513_57528[(1)] = (8));

} else {
var statearr_57514_57529 = state_57504__$1;
(statearr_57514_57529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57505 === (3))){
var inst_57502 = (state_57504[(2)]);
var state_57504__$1 = state_57504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57504__$1,inst_57502);
} else {
if((state_val_57505 === (2))){
var state_57504__$1 = state_57504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57504__$1,(4),ch);
} else {
if((state_val_57505 === (9))){
var inst_57491 = (state_57504[(9)]);
var inst_57484 = inst_57491;
var state_57504__$1 = (function (){var statearr_57515 = state_57504;
(statearr_57515[(7)] = inst_57484);

return statearr_57515;
})();
var statearr_57516_57530 = state_57504__$1;
(statearr_57516_57530[(2)] = null);

(statearr_57516_57530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57505 === (5))){
var inst_57484 = (state_57504[(7)]);
var state_57504__$1 = state_57504;
var statearr_57517_57531 = state_57504__$1;
(statearr_57517_57531[(2)] = inst_57484);

(statearr_57517_57531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57505 === (10))){
var inst_57498 = (state_57504[(2)]);
var state_57504__$1 = state_57504;
var statearr_57518_57532 = state_57504__$1;
(statearr_57518_57532[(2)] = inst_57498);

(statearr_57518_57532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57505 === (8))){
var inst_57491 = (state_57504[(9)]);
var inst_57494 = cljs.core.deref.call(null,inst_57491);
var state_57504__$1 = state_57504;
var statearr_57519_57533 = state_57504__$1;
(statearr_57519_57533[(2)] = inst_57494);

(statearr_57519_57533[(1)] = (10));


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
});})(c__55153__auto__))
;
return ((function (switch__54986__auto__,c__55153__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__54987__auto__ = null;
var cljs$core$async$reduce_$_state_machine__54987__auto____0 = (function (){
var statearr_57520 = [null,null,null,null,null,null,null,null,null,null];
(statearr_57520[(0)] = cljs$core$async$reduce_$_state_machine__54987__auto__);

(statearr_57520[(1)] = (1));

return statearr_57520;
});
var cljs$core$async$reduce_$_state_machine__54987__auto____1 = (function (state_57504){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_57504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e57521){if((e57521 instanceof Object)){
var ex__54990__auto__ = e57521;
var statearr_57522_57534 = state_57504;
(statearr_57522_57534[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57535 = state_57504;
state_57504 = G__57535;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__54987__auto__ = function(state_57504){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__54987__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__54987__auto____1.call(this,state_57504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__54987__auto____0;
cljs$core$async$reduce_$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__54987__auto____1;
return cljs$core$async$reduce_$_state_machine__54987__auto__;
})()
;})(switch__54986__auto__,c__55153__auto__))
})();
var state__55155__auto__ = (function (){var statearr_57523 = f__55154__auto__.call(null);
(statearr_57523[(6)] = c__55153__auto__);

return statearr_57523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(c__55153__auto__))
);

return c__55153__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__55153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55153__auto__,f__$1){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (c__55153__auto__,f__$1){
return (function (state_57541){
var state_val_57542 = (state_57541[(1)]);
if((state_val_57542 === (1))){
var inst_57536 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_57541__$1 = state_57541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57541__$1,(2),inst_57536);
} else {
if((state_val_57542 === (2))){
var inst_57538 = (state_57541[(2)]);
var inst_57539 = f__$1.call(null,inst_57538);
var state_57541__$1 = state_57541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57541__$1,inst_57539);
} else {
return null;
}
}
});})(c__55153__auto__,f__$1))
;
return ((function (switch__54986__auto__,c__55153__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__54987__auto__ = null;
var cljs$core$async$transduce_$_state_machine__54987__auto____0 = (function (){
var statearr_57543 = [null,null,null,null,null,null,null];
(statearr_57543[(0)] = cljs$core$async$transduce_$_state_machine__54987__auto__);

(statearr_57543[(1)] = (1));

return statearr_57543;
});
var cljs$core$async$transduce_$_state_machine__54987__auto____1 = (function (state_57541){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_57541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e57544){if((e57544 instanceof Object)){
var ex__54990__auto__ = e57544;
var statearr_57545_57547 = state_57541;
(statearr_57545_57547[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57548 = state_57541;
state_57541 = G__57548;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__54987__auto__ = function(state_57541){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__54987__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__54987__auto____1.call(this,state_57541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__54987__auto____0;
cljs$core$async$transduce_$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__54987__auto____1;
return cljs$core$async$transduce_$_state_machine__54987__auto__;
})()
;})(switch__54986__auto__,c__55153__auto__,f__$1))
})();
var state__55155__auto__ = (function (){var statearr_57546 = f__55154__auto__.call(null);
(statearr_57546[(6)] = c__55153__auto__);

return statearr_57546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(c__55153__auto__,f__$1))
);

return c__55153__auto__;
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
var G__57550 = arguments.length;
switch (G__57550) {
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
var c__55153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55153__auto__){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (c__55153__auto__){
return (function (state_57575){
var state_val_57576 = (state_57575[(1)]);
if((state_val_57576 === (7))){
var inst_57557 = (state_57575[(2)]);
var state_57575__$1 = state_57575;
var statearr_57577_57598 = state_57575__$1;
(statearr_57577_57598[(2)] = inst_57557);

(statearr_57577_57598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57576 === (1))){
var inst_57551 = cljs.core.seq.call(null,coll);
var inst_57552 = inst_57551;
var state_57575__$1 = (function (){var statearr_57578 = state_57575;
(statearr_57578[(7)] = inst_57552);

return statearr_57578;
})();
var statearr_57579_57599 = state_57575__$1;
(statearr_57579_57599[(2)] = null);

(statearr_57579_57599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57576 === (4))){
var inst_57552 = (state_57575[(7)]);
var inst_57555 = cljs.core.first.call(null,inst_57552);
var state_57575__$1 = state_57575;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57575__$1,(7),ch,inst_57555);
} else {
if((state_val_57576 === (13))){
var inst_57569 = (state_57575[(2)]);
var state_57575__$1 = state_57575;
var statearr_57580_57600 = state_57575__$1;
(statearr_57580_57600[(2)] = inst_57569);

(statearr_57580_57600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57576 === (6))){
var inst_57560 = (state_57575[(2)]);
var state_57575__$1 = state_57575;
if(cljs.core.truth_(inst_57560)){
var statearr_57581_57601 = state_57575__$1;
(statearr_57581_57601[(1)] = (8));

} else {
var statearr_57582_57602 = state_57575__$1;
(statearr_57582_57602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57576 === (3))){
var inst_57573 = (state_57575[(2)]);
var state_57575__$1 = state_57575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57575__$1,inst_57573);
} else {
if((state_val_57576 === (12))){
var state_57575__$1 = state_57575;
var statearr_57583_57603 = state_57575__$1;
(statearr_57583_57603[(2)] = null);

(statearr_57583_57603[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57576 === (2))){
var inst_57552 = (state_57575[(7)]);
var state_57575__$1 = state_57575;
if(cljs.core.truth_(inst_57552)){
var statearr_57584_57604 = state_57575__$1;
(statearr_57584_57604[(1)] = (4));

} else {
var statearr_57585_57605 = state_57575__$1;
(statearr_57585_57605[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57576 === (11))){
var inst_57566 = cljs.core.async.close_BANG_.call(null,ch);
var state_57575__$1 = state_57575;
var statearr_57586_57606 = state_57575__$1;
(statearr_57586_57606[(2)] = inst_57566);

(statearr_57586_57606[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57576 === (9))){
var state_57575__$1 = state_57575;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57587_57607 = state_57575__$1;
(statearr_57587_57607[(1)] = (11));

} else {
var statearr_57588_57608 = state_57575__$1;
(statearr_57588_57608[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57576 === (5))){
var inst_57552 = (state_57575[(7)]);
var state_57575__$1 = state_57575;
var statearr_57589_57609 = state_57575__$1;
(statearr_57589_57609[(2)] = inst_57552);

(statearr_57589_57609[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57576 === (10))){
var inst_57571 = (state_57575[(2)]);
var state_57575__$1 = state_57575;
var statearr_57590_57610 = state_57575__$1;
(statearr_57590_57610[(2)] = inst_57571);

(statearr_57590_57610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57576 === (8))){
var inst_57552 = (state_57575[(7)]);
var inst_57562 = cljs.core.next.call(null,inst_57552);
var inst_57552__$1 = inst_57562;
var state_57575__$1 = (function (){var statearr_57591 = state_57575;
(statearr_57591[(7)] = inst_57552__$1);

return statearr_57591;
})();
var statearr_57592_57611 = state_57575__$1;
(statearr_57592_57611[(2)] = null);

(statearr_57592_57611[(1)] = (2));


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
});})(c__55153__auto__))
;
return ((function (switch__54986__auto__,c__55153__auto__){
return (function() {
var cljs$core$async$state_machine__54987__auto__ = null;
var cljs$core$async$state_machine__54987__auto____0 = (function (){
var statearr_57593 = [null,null,null,null,null,null,null,null];
(statearr_57593[(0)] = cljs$core$async$state_machine__54987__auto__);

(statearr_57593[(1)] = (1));

return statearr_57593;
});
var cljs$core$async$state_machine__54987__auto____1 = (function (state_57575){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_57575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e57594){if((e57594 instanceof Object)){
var ex__54990__auto__ = e57594;
var statearr_57595_57612 = state_57575;
(statearr_57595_57612[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57613 = state_57575;
state_57575 = G__57613;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
cljs$core$async$state_machine__54987__auto__ = function(state_57575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54987__auto____1.call(this,state_57575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54987__auto____0;
cljs$core$async$state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54987__auto____1;
return cljs$core$async$state_machine__54987__auto__;
})()
;})(switch__54986__auto__,c__55153__auto__))
})();
var state__55155__auto__ = (function (){var statearr_57596 = f__55154__auto__.call(null);
(statearr_57596[(6)] = c__55153__auto__);

return statearr_57596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(c__55153__auto__))
);

return c__55153__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57614 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57614 = (function (ch,cs,meta57615){
this.ch = ch;
this.cs = cs;
this.meta57615 = meta57615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async57614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_57616,meta57615__$1){
var self__ = this;
var _57616__$1 = this;
return (new cljs.core.async.t_cljs$core$async57614(self__.ch,self__.cs,meta57615__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async57614.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_57616){
var self__ = this;
var _57616__$1 = this;
return self__.meta57615;
});})(cs))
;

cljs.core.async.t_cljs$core$async57614.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57614.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async57614.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57614.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async57614.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async57614.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async57614.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta57615","meta57615",-905993716,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async57614.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57614";

cljs.core.async.t_cljs$core$async57614.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async57614");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57614.
 */
cljs.core.async.__GT_t_cljs$core$async57614 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async57614(ch__$1,cs__$1,meta57615){
return (new cljs.core.async.t_cljs$core$async57614(ch__$1,cs__$1,meta57615));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async57614(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__55153__auto___57836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55153__auto___57836,cs,m,dchan,dctr,done){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (c__55153__auto___57836,cs,m,dchan,dctr,done){
return (function (state_57751){
var state_val_57752 = (state_57751[(1)]);
if((state_val_57752 === (7))){
var inst_57747 = (state_57751[(2)]);
var state_57751__$1 = state_57751;
var statearr_57753_57837 = state_57751__$1;
(statearr_57753_57837[(2)] = inst_57747);

(statearr_57753_57837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (20))){
var inst_57650 = (state_57751[(7)]);
var inst_57662 = cljs.core.first.call(null,inst_57650);
var inst_57663 = cljs.core.nth.call(null,inst_57662,(0),null);
var inst_57664 = cljs.core.nth.call(null,inst_57662,(1),null);
var state_57751__$1 = (function (){var statearr_57754 = state_57751;
(statearr_57754[(8)] = inst_57663);

return statearr_57754;
})();
if(cljs.core.truth_(inst_57664)){
var statearr_57755_57838 = state_57751__$1;
(statearr_57755_57838[(1)] = (22));

} else {
var statearr_57756_57839 = state_57751__$1;
(statearr_57756_57839[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (27))){
var inst_57694 = (state_57751[(9)]);
var inst_57699 = (state_57751[(10)]);
var inst_57692 = (state_57751[(11)]);
var inst_57619 = (state_57751[(12)]);
var inst_57699__$1 = cljs.core._nth.call(null,inst_57692,inst_57694);
var inst_57700 = cljs.core.async.put_BANG_.call(null,inst_57699__$1,inst_57619,done);
var state_57751__$1 = (function (){var statearr_57757 = state_57751;
(statearr_57757[(10)] = inst_57699__$1);

return statearr_57757;
})();
if(cljs.core.truth_(inst_57700)){
var statearr_57758_57840 = state_57751__$1;
(statearr_57758_57840[(1)] = (30));

} else {
var statearr_57759_57841 = state_57751__$1;
(statearr_57759_57841[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (1))){
var state_57751__$1 = state_57751;
var statearr_57760_57842 = state_57751__$1;
(statearr_57760_57842[(2)] = null);

(statearr_57760_57842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (24))){
var inst_57650 = (state_57751[(7)]);
var inst_57669 = (state_57751[(2)]);
var inst_57670 = cljs.core.next.call(null,inst_57650);
var inst_57628 = inst_57670;
var inst_57629 = null;
var inst_57630 = (0);
var inst_57631 = (0);
var state_57751__$1 = (function (){var statearr_57761 = state_57751;
(statearr_57761[(13)] = inst_57630);

(statearr_57761[(14)] = inst_57628);

(statearr_57761[(15)] = inst_57629);

(statearr_57761[(16)] = inst_57669);

(statearr_57761[(17)] = inst_57631);

return statearr_57761;
})();
var statearr_57762_57843 = state_57751__$1;
(statearr_57762_57843[(2)] = null);

(statearr_57762_57843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (39))){
var state_57751__$1 = state_57751;
var statearr_57766_57844 = state_57751__$1;
(statearr_57766_57844[(2)] = null);

(statearr_57766_57844[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (4))){
var inst_57619 = (state_57751[(12)]);
var inst_57619__$1 = (state_57751[(2)]);
var inst_57620 = (inst_57619__$1 == null);
var state_57751__$1 = (function (){var statearr_57767 = state_57751;
(statearr_57767[(12)] = inst_57619__$1);

return statearr_57767;
})();
if(cljs.core.truth_(inst_57620)){
var statearr_57768_57845 = state_57751__$1;
(statearr_57768_57845[(1)] = (5));

} else {
var statearr_57769_57846 = state_57751__$1;
(statearr_57769_57846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (15))){
var inst_57630 = (state_57751[(13)]);
var inst_57628 = (state_57751[(14)]);
var inst_57629 = (state_57751[(15)]);
var inst_57631 = (state_57751[(17)]);
var inst_57646 = (state_57751[(2)]);
var inst_57647 = (inst_57631 + (1));
var tmp57763 = inst_57630;
var tmp57764 = inst_57628;
var tmp57765 = inst_57629;
var inst_57628__$1 = tmp57764;
var inst_57629__$1 = tmp57765;
var inst_57630__$1 = tmp57763;
var inst_57631__$1 = inst_57647;
var state_57751__$1 = (function (){var statearr_57770 = state_57751;
(statearr_57770[(18)] = inst_57646);

(statearr_57770[(13)] = inst_57630__$1);

(statearr_57770[(14)] = inst_57628__$1);

(statearr_57770[(15)] = inst_57629__$1);

(statearr_57770[(17)] = inst_57631__$1);

return statearr_57770;
})();
var statearr_57771_57847 = state_57751__$1;
(statearr_57771_57847[(2)] = null);

(statearr_57771_57847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (21))){
var inst_57673 = (state_57751[(2)]);
var state_57751__$1 = state_57751;
var statearr_57775_57848 = state_57751__$1;
(statearr_57775_57848[(2)] = inst_57673);

(statearr_57775_57848[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (31))){
var inst_57699 = (state_57751[(10)]);
var inst_57703 = done.call(null,null);
var inst_57704 = cljs.core.async.untap_STAR_.call(null,m,inst_57699);
var state_57751__$1 = (function (){var statearr_57776 = state_57751;
(statearr_57776[(19)] = inst_57703);

return statearr_57776;
})();
var statearr_57777_57849 = state_57751__$1;
(statearr_57777_57849[(2)] = inst_57704);

(statearr_57777_57849[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (32))){
var inst_57694 = (state_57751[(9)]);
var inst_57693 = (state_57751[(20)]);
var inst_57692 = (state_57751[(11)]);
var inst_57691 = (state_57751[(21)]);
var inst_57706 = (state_57751[(2)]);
var inst_57707 = (inst_57694 + (1));
var tmp57772 = inst_57693;
var tmp57773 = inst_57692;
var tmp57774 = inst_57691;
var inst_57691__$1 = tmp57774;
var inst_57692__$1 = tmp57773;
var inst_57693__$1 = tmp57772;
var inst_57694__$1 = inst_57707;
var state_57751__$1 = (function (){var statearr_57778 = state_57751;
(statearr_57778[(9)] = inst_57694__$1);

(statearr_57778[(22)] = inst_57706);

(statearr_57778[(20)] = inst_57693__$1);

(statearr_57778[(11)] = inst_57692__$1);

(statearr_57778[(21)] = inst_57691__$1);

return statearr_57778;
})();
var statearr_57779_57850 = state_57751__$1;
(statearr_57779_57850[(2)] = null);

(statearr_57779_57850[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (40))){
var inst_57719 = (state_57751[(23)]);
var inst_57723 = done.call(null,null);
var inst_57724 = cljs.core.async.untap_STAR_.call(null,m,inst_57719);
var state_57751__$1 = (function (){var statearr_57780 = state_57751;
(statearr_57780[(24)] = inst_57723);

return statearr_57780;
})();
var statearr_57781_57851 = state_57751__$1;
(statearr_57781_57851[(2)] = inst_57724);

(statearr_57781_57851[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (33))){
var inst_57710 = (state_57751[(25)]);
var inst_57712 = cljs.core.chunked_seq_QMARK_.call(null,inst_57710);
var state_57751__$1 = state_57751;
if(inst_57712){
var statearr_57782_57852 = state_57751__$1;
(statearr_57782_57852[(1)] = (36));

} else {
var statearr_57783_57853 = state_57751__$1;
(statearr_57783_57853[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (13))){
var inst_57640 = (state_57751[(26)]);
var inst_57643 = cljs.core.async.close_BANG_.call(null,inst_57640);
var state_57751__$1 = state_57751;
var statearr_57784_57854 = state_57751__$1;
(statearr_57784_57854[(2)] = inst_57643);

(statearr_57784_57854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (22))){
var inst_57663 = (state_57751[(8)]);
var inst_57666 = cljs.core.async.close_BANG_.call(null,inst_57663);
var state_57751__$1 = state_57751;
var statearr_57785_57855 = state_57751__$1;
(statearr_57785_57855[(2)] = inst_57666);

(statearr_57785_57855[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (36))){
var inst_57710 = (state_57751[(25)]);
var inst_57714 = cljs.core.chunk_first.call(null,inst_57710);
var inst_57715 = cljs.core.chunk_rest.call(null,inst_57710);
var inst_57716 = cljs.core.count.call(null,inst_57714);
var inst_57691 = inst_57715;
var inst_57692 = inst_57714;
var inst_57693 = inst_57716;
var inst_57694 = (0);
var state_57751__$1 = (function (){var statearr_57786 = state_57751;
(statearr_57786[(9)] = inst_57694);

(statearr_57786[(20)] = inst_57693);

(statearr_57786[(11)] = inst_57692);

(statearr_57786[(21)] = inst_57691);

return statearr_57786;
})();
var statearr_57787_57856 = state_57751__$1;
(statearr_57787_57856[(2)] = null);

(statearr_57787_57856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (41))){
var inst_57710 = (state_57751[(25)]);
var inst_57726 = (state_57751[(2)]);
var inst_57727 = cljs.core.next.call(null,inst_57710);
var inst_57691 = inst_57727;
var inst_57692 = null;
var inst_57693 = (0);
var inst_57694 = (0);
var state_57751__$1 = (function (){var statearr_57788 = state_57751;
(statearr_57788[(27)] = inst_57726);

(statearr_57788[(9)] = inst_57694);

(statearr_57788[(20)] = inst_57693);

(statearr_57788[(11)] = inst_57692);

(statearr_57788[(21)] = inst_57691);

return statearr_57788;
})();
var statearr_57789_57857 = state_57751__$1;
(statearr_57789_57857[(2)] = null);

(statearr_57789_57857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (43))){
var state_57751__$1 = state_57751;
var statearr_57790_57858 = state_57751__$1;
(statearr_57790_57858[(2)] = null);

(statearr_57790_57858[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (29))){
var inst_57735 = (state_57751[(2)]);
var state_57751__$1 = state_57751;
var statearr_57791_57859 = state_57751__$1;
(statearr_57791_57859[(2)] = inst_57735);

(statearr_57791_57859[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (44))){
var inst_57744 = (state_57751[(2)]);
var state_57751__$1 = (function (){var statearr_57792 = state_57751;
(statearr_57792[(28)] = inst_57744);

return statearr_57792;
})();
var statearr_57793_57860 = state_57751__$1;
(statearr_57793_57860[(2)] = null);

(statearr_57793_57860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (6))){
var inst_57683 = (state_57751[(29)]);
var inst_57682 = cljs.core.deref.call(null,cs);
var inst_57683__$1 = cljs.core.keys.call(null,inst_57682);
var inst_57684 = cljs.core.count.call(null,inst_57683__$1);
var inst_57685 = cljs.core.reset_BANG_.call(null,dctr,inst_57684);
var inst_57690 = cljs.core.seq.call(null,inst_57683__$1);
var inst_57691 = inst_57690;
var inst_57692 = null;
var inst_57693 = (0);
var inst_57694 = (0);
var state_57751__$1 = (function (){var statearr_57794 = state_57751;
(statearr_57794[(9)] = inst_57694);

(statearr_57794[(20)] = inst_57693);

(statearr_57794[(11)] = inst_57692);

(statearr_57794[(30)] = inst_57685);

(statearr_57794[(29)] = inst_57683__$1);

(statearr_57794[(21)] = inst_57691);

return statearr_57794;
})();
var statearr_57795_57861 = state_57751__$1;
(statearr_57795_57861[(2)] = null);

(statearr_57795_57861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (28))){
var inst_57691 = (state_57751[(21)]);
var inst_57710 = (state_57751[(25)]);
var inst_57710__$1 = cljs.core.seq.call(null,inst_57691);
var state_57751__$1 = (function (){var statearr_57796 = state_57751;
(statearr_57796[(25)] = inst_57710__$1);

return statearr_57796;
})();
if(inst_57710__$1){
var statearr_57797_57862 = state_57751__$1;
(statearr_57797_57862[(1)] = (33));

} else {
var statearr_57798_57863 = state_57751__$1;
(statearr_57798_57863[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (25))){
var inst_57694 = (state_57751[(9)]);
var inst_57693 = (state_57751[(20)]);
var inst_57696 = (inst_57694 < inst_57693);
var inst_57697 = inst_57696;
var state_57751__$1 = state_57751;
if(cljs.core.truth_(inst_57697)){
var statearr_57799_57864 = state_57751__$1;
(statearr_57799_57864[(1)] = (27));

} else {
var statearr_57800_57865 = state_57751__$1;
(statearr_57800_57865[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (34))){
var state_57751__$1 = state_57751;
var statearr_57801_57866 = state_57751__$1;
(statearr_57801_57866[(2)] = null);

(statearr_57801_57866[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (17))){
var state_57751__$1 = state_57751;
var statearr_57802_57867 = state_57751__$1;
(statearr_57802_57867[(2)] = null);

(statearr_57802_57867[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (3))){
var inst_57749 = (state_57751[(2)]);
var state_57751__$1 = state_57751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57751__$1,inst_57749);
} else {
if((state_val_57752 === (12))){
var inst_57678 = (state_57751[(2)]);
var state_57751__$1 = state_57751;
var statearr_57803_57868 = state_57751__$1;
(statearr_57803_57868[(2)] = inst_57678);

(statearr_57803_57868[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (2))){
var state_57751__$1 = state_57751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57751__$1,(4),ch);
} else {
if((state_val_57752 === (23))){
var state_57751__$1 = state_57751;
var statearr_57804_57869 = state_57751__$1;
(statearr_57804_57869[(2)] = null);

(statearr_57804_57869[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (35))){
var inst_57733 = (state_57751[(2)]);
var state_57751__$1 = state_57751;
var statearr_57805_57870 = state_57751__$1;
(statearr_57805_57870[(2)] = inst_57733);

(statearr_57805_57870[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (19))){
var inst_57650 = (state_57751[(7)]);
var inst_57654 = cljs.core.chunk_first.call(null,inst_57650);
var inst_57655 = cljs.core.chunk_rest.call(null,inst_57650);
var inst_57656 = cljs.core.count.call(null,inst_57654);
var inst_57628 = inst_57655;
var inst_57629 = inst_57654;
var inst_57630 = inst_57656;
var inst_57631 = (0);
var state_57751__$1 = (function (){var statearr_57806 = state_57751;
(statearr_57806[(13)] = inst_57630);

(statearr_57806[(14)] = inst_57628);

(statearr_57806[(15)] = inst_57629);

(statearr_57806[(17)] = inst_57631);

return statearr_57806;
})();
var statearr_57807_57871 = state_57751__$1;
(statearr_57807_57871[(2)] = null);

(statearr_57807_57871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (11))){
var inst_57628 = (state_57751[(14)]);
var inst_57650 = (state_57751[(7)]);
var inst_57650__$1 = cljs.core.seq.call(null,inst_57628);
var state_57751__$1 = (function (){var statearr_57808 = state_57751;
(statearr_57808[(7)] = inst_57650__$1);

return statearr_57808;
})();
if(inst_57650__$1){
var statearr_57809_57872 = state_57751__$1;
(statearr_57809_57872[(1)] = (16));

} else {
var statearr_57810_57873 = state_57751__$1;
(statearr_57810_57873[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (9))){
var inst_57680 = (state_57751[(2)]);
var state_57751__$1 = state_57751;
var statearr_57811_57874 = state_57751__$1;
(statearr_57811_57874[(2)] = inst_57680);

(statearr_57811_57874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (5))){
var inst_57626 = cljs.core.deref.call(null,cs);
var inst_57627 = cljs.core.seq.call(null,inst_57626);
var inst_57628 = inst_57627;
var inst_57629 = null;
var inst_57630 = (0);
var inst_57631 = (0);
var state_57751__$1 = (function (){var statearr_57812 = state_57751;
(statearr_57812[(13)] = inst_57630);

(statearr_57812[(14)] = inst_57628);

(statearr_57812[(15)] = inst_57629);

(statearr_57812[(17)] = inst_57631);

return statearr_57812;
})();
var statearr_57813_57875 = state_57751__$1;
(statearr_57813_57875[(2)] = null);

(statearr_57813_57875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (14))){
var state_57751__$1 = state_57751;
var statearr_57814_57876 = state_57751__$1;
(statearr_57814_57876[(2)] = null);

(statearr_57814_57876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (45))){
var inst_57741 = (state_57751[(2)]);
var state_57751__$1 = state_57751;
var statearr_57815_57877 = state_57751__$1;
(statearr_57815_57877[(2)] = inst_57741);

(statearr_57815_57877[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (26))){
var inst_57683 = (state_57751[(29)]);
var inst_57737 = (state_57751[(2)]);
var inst_57738 = cljs.core.seq.call(null,inst_57683);
var state_57751__$1 = (function (){var statearr_57816 = state_57751;
(statearr_57816[(31)] = inst_57737);

return statearr_57816;
})();
if(inst_57738){
var statearr_57817_57878 = state_57751__$1;
(statearr_57817_57878[(1)] = (42));

} else {
var statearr_57818_57879 = state_57751__$1;
(statearr_57818_57879[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (16))){
var inst_57650 = (state_57751[(7)]);
var inst_57652 = cljs.core.chunked_seq_QMARK_.call(null,inst_57650);
var state_57751__$1 = state_57751;
if(inst_57652){
var statearr_57819_57880 = state_57751__$1;
(statearr_57819_57880[(1)] = (19));

} else {
var statearr_57820_57881 = state_57751__$1;
(statearr_57820_57881[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (38))){
var inst_57730 = (state_57751[(2)]);
var state_57751__$1 = state_57751;
var statearr_57821_57882 = state_57751__$1;
(statearr_57821_57882[(2)] = inst_57730);

(statearr_57821_57882[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (30))){
var state_57751__$1 = state_57751;
var statearr_57822_57883 = state_57751__$1;
(statearr_57822_57883[(2)] = null);

(statearr_57822_57883[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (10))){
var inst_57629 = (state_57751[(15)]);
var inst_57631 = (state_57751[(17)]);
var inst_57639 = cljs.core._nth.call(null,inst_57629,inst_57631);
var inst_57640 = cljs.core.nth.call(null,inst_57639,(0),null);
var inst_57641 = cljs.core.nth.call(null,inst_57639,(1),null);
var state_57751__$1 = (function (){var statearr_57823 = state_57751;
(statearr_57823[(26)] = inst_57640);

return statearr_57823;
})();
if(cljs.core.truth_(inst_57641)){
var statearr_57824_57884 = state_57751__$1;
(statearr_57824_57884[(1)] = (13));

} else {
var statearr_57825_57885 = state_57751__$1;
(statearr_57825_57885[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (18))){
var inst_57676 = (state_57751[(2)]);
var state_57751__$1 = state_57751;
var statearr_57826_57886 = state_57751__$1;
(statearr_57826_57886[(2)] = inst_57676);

(statearr_57826_57886[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (42))){
var state_57751__$1 = state_57751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57751__$1,(45),dchan);
} else {
if((state_val_57752 === (37))){
var inst_57619 = (state_57751[(12)]);
var inst_57719 = (state_57751[(23)]);
var inst_57710 = (state_57751[(25)]);
var inst_57719__$1 = cljs.core.first.call(null,inst_57710);
var inst_57720 = cljs.core.async.put_BANG_.call(null,inst_57719__$1,inst_57619,done);
var state_57751__$1 = (function (){var statearr_57827 = state_57751;
(statearr_57827[(23)] = inst_57719__$1);

return statearr_57827;
})();
if(cljs.core.truth_(inst_57720)){
var statearr_57828_57887 = state_57751__$1;
(statearr_57828_57887[(1)] = (39));

} else {
var statearr_57829_57888 = state_57751__$1;
(statearr_57829_57888[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (8))){
var inst_57630 = (state_57751[(13)]);
var inst_57631 = (state_57751[(17)]);
var inst_57633 = (inst_57631 < inst_57630);
var inst_57634 = inst_57633;
var state_57751__$1 = state_57751;
if(cljs.core.truth_(inst_57634)){
var statearr_57830_57889 = state_57751__$1;
(statearr_57830_57889[(1)] = (10));

} else {
var statearr_57831_57890 = state_57751__$1;
(statearr_57831_57890[(1)] = (11));

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
});})(c__55153__auto___57836,cs,m,dchan,dctr,done))
;
return ((function (switch__54986__auto__,c__55153__auto___57836,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__54987__auto__ = null;
var cljs$core$async$mult_$_state_machine__54987__auto____0 = (function (){
var statearr_57832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57832[(0)] = cljs$core$async$mult_$_state_machine__54987__auto__);

(statearr_57832[(1)] = (1));

return statearr_57832;
});
var cljs$core$async$mult_$_state_machine__54987__auto____1 = (function (state_57751){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_57751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e57833){if((e57833 instanceof Object)){
var ex__54990__auto__ = e57833;
var statearr_57834_57891 = state_57751;
(statearr_57834_57891[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57892 = state_57751;
state_57751 = G__57892;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__54987__auto__ = function(state_57751){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__54987__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__54987__auto____1.call(this,state_57751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__54987__auto____0;
cljs$core$async$mult_$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__54987__auto____1;
return cljs$core$async$mult_$_state_machine__54987__auto__;
})()
;})(switch__54986__auto__,c__55153__auto___57836,cs,m,dchan,dctr,done))
})();
var state__55155__auto__ = (function (){var statearr_57835 = f__55154__auto__.call(null);
(statearr_57835[(6)] = c__55153__auto___57836);

return statearr_57835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(c__55153__auto___57836,cs,m,dchan,dctr,done))
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
var G__57894 = arguments.length;
switch (G__57894) {
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
var len__4641__auto___57906 = arguments.length;
var i__4642__auto___57907 = (0);
while(true){
if((i__4642__auto___57907 < len__4641__auto___57906)){
args__4647__auto__.push((arguments[i__4642__auto___57907]));

var G__57908 = (i__4642__auto___57907 + (1));
i__4642__auto___57907 = G__57908;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__57900){
var map__57901 = p__57900;
var map__57901__$1 = (((((!((map__57901 == null))))?(((((map__57901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57901):map__57901);
var opts = map__57901__$1;
var statearr_57903_57909 = state;
(statearr_57903_57909[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__57901,map__57901__$1,opts){
return (function (val){
var statearr_57904_57910 = state;
(statearr_57904_57910[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__57901,map__57901__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_57905_57911 = state;
(statearr_57905_57911[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq57896){
var G__57897 = cljs.core.first.call(null,seq57896);
var seq57896__$1 = cljs.core.next.call(null,seq57896);
var G__57898 = cljs.core.first.call(null,seq57896__$1);
var seq57896__$2 = cljs.core.next.call(null,seq57896__$1);
var G__57899 = cljs.core.first.call(null,seq57896__$2);
var seq57896__$3 = cljs.core.next.call(null,seq57896__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57897,G__57898,G__57899,seq57896__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57912 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57912 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta57913){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta57913 = meta57913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async57912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_57914,meta57913__$1){
var self__ = this;
var _57914__$1 = this;
return (new cljs.core.async.t_cljs$core$async57912(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta57913__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57912.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_57914){
var self__ = this;
var _57914__$1 = this;
return self__.meta57913;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57912.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57912.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57912.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57912.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57912.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57912.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57912.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57912.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async57912.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta57913","meta57913",-1188325578,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57912.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57912";

cljs.core.async.t_cljs$core$async57912.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async57912");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57912.
 */
cljs.core.async.__GT_t_cljs$core$async57912 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async57912(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta57913){
return (new cljs.core.async.t_cljs$core$async57912(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta57913));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async57912(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__55153__auto___58076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55153__auto___58076,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (c__55153__auto___58076,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_58016){
var state_val_58017 = (state_58016[(1)]);
if((state_val_58017 === (7))){
var inst_57931 = (state_58016[(2)]);
var state_58016__$1 = state_58016;
var statearr_58018_58077 = state_58016__$1;
(statearr_58018_58077[(2)] = inst_57931);

(statearr_58018_58077[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (20))){
var inst_57943 = (state_58016[(7)]);
var state_58016__$1 = state_58016;
var statearr_58019_58078 = state_58016__$1;
(statearr_58019_58078[(2)] = inst_57943);

(statearr_58019_58078[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (27))){
var state_58016__$1 = state_58016;
var statearr_58020_58079 = state_58016__$1;
(statearr_58020_58079[(2)] = null);

(statearr_58020_58079[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (1))){
var inst_57918 = (state_58016[(8)]);
var inst_57918__$1 = calc_state.call(null);
var inst_57920 = (inst_57918__$1 == null);
var inst_57921 = cljs.core.not.call(null,inst_57920);
var state_58016__$1 = (function (){var statearr_58021 = state_58016;
(statearr_58021[(8)] = inst_57918__$1);

return statearr_58021;
})();
if(inst_57921){
var statearr_58022_58080 = state_58016__$1;
(statearr_58022_58080[(1)] = (2));

} else {
var statearr_58023_58081 = state_58016__$1;
(statearr_58023_58081[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (24))){
var inst_57976 = (state_58016[(9)]);
var inst_57967 = (state_58016[(10)]);
var inst_57990 = (state_58016[(11)]);
var inst_57990__$1 = inst_57967.call(null,inst_57976);
var state_58016__$1 = (function (){var statearr_58024 = state_58016;
(statearr_58024[(11)] = inst_57990__$1);

return statearr_58024;
})();
if(cljs.core.truth_(inst_57990__$1)){
var statearr_58025_58082 = state_58016__$1;
(statearr_58025_58082[(1)] = (29));

} else {
var statearr_58026_58083 = state_58016__$1;
(statearr_58026_58083[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (4))){
var inst_57934 = (state_58016[(2)]);
var state_58016__$1 = state_58016;
if(cljs.core.truth_(inst_57934)){
var statearr_58027_58084 = state_58016__$1;
(statearr_58027_58084[(1)] = (8));

} else {
var statearr_58028_58085 = state_58016__$1;
(statearr_58028_58085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (15))){
var inst_57961 = (state_58016[(2)]);
var state_58016__$1 = state_58016;
if(cljs.core.truth_(inst_57961)){
var statearr_58029_58086 = state_58016__$1;
(statearr_58029_58086[(1)] = (19));

} else {
var statearr_58030_58087 = state_58016__$1;
(statearr_58030_58087[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (21))){
var inst_57966 = (state_58016[(12)]);
var inst_57966__$1 = (state_58016[(2)]);
var inst_57967 = cljs.core.get.call(null,inst_57966__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57968 = cljs.core.get.call(null,inst_57966__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57969 = cljs.core.get.call(null,inst_57966__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_58016__$1 = (function (){var statearr_58031 = state_58016;
(statearr_58031[(12)] = inst_57966__$1);

(statearr_58031[(10)] = inst_57967);

(statearr_58031[(13)] = inst_57968);

return statearr_58031;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_58016__$1,(22),inst_57969);
} else {
if((state_val_58017 === (31))){
var inst_57998 = (state_58016[(2)]);
var state_58016__$1 = state_58016;
if(cljs.core.truth_(inst_57998)){
var statearr_58032_58088 = state_58016__$1;
(statearr_58032_58088[(1)] = (32));

} else {
var statearr_58033_58089 = state_58016__$1;
(statearr_58033_58089[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (32))){
var inst_57975 = (state_58016[(14)]);
var state_58016__$1 = state_58016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58016__$1,(35),out,inst_57975);
} else {
if((state_val_58017 === (33))){
var inst_57966 = (state_58016[(12)]);
var inst_57943 = inst_57966;
var state_58016__$1 = (function (){var statearr_58034 = state_58016;
(statearr_58034[(7)] = inst_57943);

return statearr_58034;
})();
var statearr_58035_58090 = state_58016__$1;
(statearr_58035_58090[(2)] = null);

(statearr_58035_58090[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (13))){
var inst_57943 = (state_58016[(7)]);
var inst_57950 = inst_57943.cljs$lang$protocol_mask$partition0$;
var inst_57951 = (inst_57950 & (64));
var inst_57952 = inst_57943.cljs$core$ISeq$;
var inst_57953 = (cljs.core.PROTOCOL_SENTINEL === inst_57952);
var inst_57954 = ((inst_57951) || (inst_57953));
var state_58016__$1 = state_58016;
if(cljs.core.truth_(inst_57954)){
var statearr_58036_58091 = state_58016__$1;
(statearr_58036_58091[(1)] = (16));

} else {
var statearr_58037_58092 = state_58016__$1;
(statearr_58037_58092[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (22))){
var inst_57975 = (state_58016[(14)]);
var inst_57976 = (state_58016[(9)]);
var inst_57974 = (state_58016[(2)]);
var inst_57975__$1 = cljs.core.nth.call(null,inst_57974,(0),null);
var inst_57976__$1 = cljs.core.nth.call(null,inst_57974,(1),null);
var inst_57977 = (inst_57975__$1 == null);
var inst_57978 = cljs.core._EQ_.call(null,inst_57976__$1,change);
var inst_57979 = ((inst_57977) || (inst_57978));
var state_58016__$1 = (function (){var statearr_58038 = state_58016;
(statearr_58038[(14)] = inst_57975__$1);

(statearr_58038[(9)] = inst_57976__$1);

return statearr_58038;
})();
if(cljs.core.truth_(inst_57979)){
var statearr_58039_58093 = state_58016__$1;
(statearr_58039_58093[(1)] = (23));

} else {
var statearr_58040_58094 = state_58016__$1;
(statearr_58040_58094[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (36))){
var inst_57966 = (state_58016[(12)]);
var inst_57943 = inst_57966;
var state_58016__$1 = (function (){var statearr_58041 = state_58016;
(statearr_58041[(7)] = inst_57943);

return statearr_58041;
})();
var statearr_58042_58095 = state_58016__$1;
(statearr_58042_58095[(2)] = null);

(statearr_58042_58095[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (29))){
var inst_57990 = (state_58016[(11)]);
var state_58016__$1 = state_58016;
var statearr_58043_58096 = state_58016__$1;
(statearr_58043_58096[(2)] = inst_57990);

(statearr_58043_58096[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (6))){
var state_58016__$1 = state_58016;
var statearr_58044_58097 = state_58016__$1;
(statearr_58044_58097[(2)] = false);

(statearr_58044_58097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (28))){
var inst_57986 = (state_58016[(2)]);
var inst_57987 = calc_state.call(null);
var inst_57943 = inst_57987;
var state_58016__$1 = (function (){var statearr_58045 = state_58016;
(statearr_58045[(15)] = inst_57986);

(statearr_58045[(7)] = inst_57943);

return statearr_58045;
})();
var statearr_58046_58098 = state_58016__$1;
(statearr_58046_58098[(2)] = null);

(statearr_58046_58098[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (25))){
var inst_58012 = (state_58016[(2)]);
var state_58016__$1 = state_58016;
var statearr_58047_58099 = state_58016__$1;
(statearr_58047_58099[(2)] = inst_58012);

(statearr_58047_58099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (34))){
var inst_58010 = (state_58016[(2)]);
var state_58016__$1 = state_58016;
var statearr_58048_58100 = state_58016__$1;
(statearr_58048_58100[(2)] = inst_58010);

(statearr_58048_58100[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (17))){
var state_58016__$1 = state_58016;
var statearr_58049_58101 = state_58016__$1;
(statearr_58049_58101[(2)] = false);

(statearr_58049_58101[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (3))){
var state_58016__$1 = state_58016;
var statearr_58050_58102 = state_58016__$1;
(statearr_58050_58102[(2)] = false);

(statearr_58050_58102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (12))){
var inst_58014 = (state_58016[(2)]);
var state_58016__$1 = state_58016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58016__$1,inst_58014);
} else {
if((state_val_58017 === (2))){
var inst_57918 = (state_58016[(8)]);
var inst_57923 = inst_57918.cljs$lang$protocol_mask$partition0$;
var inst_57924 = (inst_57923 & (64));
var inst_57925 = inst_57918.cljs$core$ISeq$;
var inst_57926 = (cljs.core.PROTOCOL_SENTINEL === inst_57925);
var inst_57927 = ((inst_57924) || (inst_57926));
var state_58016__$1 = state_58016;
if(cljs.core.truth_(inst_57927)){
var statearr_58051_58103 = state_58016__$1;
(statearr_58051_58103[(1)] = (5));

} else {
var statearr_58052_58104 = state_58016__$1;
(statearr_58052_58104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (23))){
var inst_57975 = (state_58016[(14)]);
var inst_57981 = (inst_57975 == null);
var state_58016__$1 = state_58016;
if(cljs.core.truth_(inst_57981)){
var statearr_58053_58105 = state_58016__$1;
(statearr_58053_58105[(1)] = (26));

} else {
var statearr_58054_58106 = state_58016__$1;
(statearr_58054_58106[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (35))){
var inst_58001 = (state_58016[(2)]);
var state_58016__$1 = state_58016;
if(cljs.core.truth_(inst_58001)){
var statearr_58055_58107 = state_58016__$1;
(statearr_58055_58107[(1)] = (36));

} else {
var statearr_58056_58108 = state_58016__$1;
(statearr_58056_58108[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (19))){
var inst_57943 = (state_58016[(7)]);
var inst_57963 = cljs.core.apply.call(null,cljs.core.hash_map,inst_57943);
var state_58016__$1 = state_58016;
var statearr_58057_58109 = state_58016__$1;
(statearr_58057_58109[(2)] = inst_57963);

(statearr_58057_58109[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (11))){
var inst_57943 = (state_58016[(7)]);
var inst_57947 = (inst_57943 == null);
var inst_57948 = cljs.core.not.call(null,inst_57947);
var state_58016__$1 = state_58016;
if(inst_57948){
var statearr_58058_58110 = state_58016__$1;
(statearr_58058_58110[(1)] = (13));

} else {
var statearr_58059_58111 = state_58016__$1;
(statearr_58059_58111[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (9))){
var inst_57918 = (state_58016[(8)]);
var state_58016__$1 = state_58016;
var statearr_58060_58112 = state_58016__$1;
(statearr_58060_58112[(2)] = inst_57918);

(statearr_58060_58112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (5))){
var state_58016__$1 = state_58016;
var statearr_58061_58113 = state_58016__$1;
(statearr_58061_58113[(2)] = true);

(statearr_58061_58113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (14))){
var state_58016__$1 = state_58016;
var statearr_58062_58114 = state_58016__$1;
(statearr_58062_58114[(2)] = false);

(statearr_58062_58114[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (26))){
var inst_57976 = (state_58016[(9)]);
var inst_57983 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_57976);
var state_58016__$1 = state_58016;
var statearr_58063_58115 = state_58016__$1;
(statearr_58063_58115[(2)] = inst_57983);

(statearr_58063_58115[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (16))){
var state_58016__$1 = state_58016;
var statearr_58064_58116 = state_58016__$1;
(statearr_58064_58116[(2)] = true);

(statearr_58064_58116[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (38))){
var inst_58006 = (state_58016[(2)]);
var state_58016__$1 = state_58016;
var statearr_58065_58117 = state_58016__$1;
(statearr_58065_58117[(2)] = inst_58006);

(statearr_58065_58117[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (30))){
var inst_57976 = (state_58016[(9)]);
var inst_57967 = (state_58016[(10)]);
var inst_57968 = (state_58016[(13)]);
var inst_57993 = cljs.core.empty_QMARK_.call(null,inst_57967);
var inst_57994 = inst_57968.call(null,inst_57976);
var inst_57995 = cljs.core.not.call(null,inst_57994);
var inst_57996 = ((inst_57993) && (inst_57995));
var state_58016__$1 = state_58016;
var statearr_58066_58118 = state_58016__$1;
(statearr_58066_58118[(2)] = inst_57996);

(statearr_58066_58118[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (10))){
var inst_57918 = (state_58016[(8)]);
var inst_57939 = (state_58016[(2)]);
var inst_57940 = cljs.core.get.call(null,inst_57939,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57941 = cljs.core.get.call(null,inst_57939,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57942 = cljs.core.get.call(null,inst_57939,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_57943 = inst_57918;
var state_58016__$1 = (function (){var statearr_58067 = state_58016;
(statearr_58067[(7)] = inst_57943);

(statearr_58067[(16)] = inst_57942);

(statearr_58067[(17)] = inst_57940);

(statearr_58067[(18)] = inst_57941);

return statearr_58067;
})();
var statearr_58068_58119 = state_58016__$1;
(statearr_58068_58119[(2)] = null);

(statearr_58068_58119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (18))){
var inst_57958 = (state_58016[(2)]);
var state_58016__$1 = state_58016;
var statearr_58069_58120 = state_58016__$1;
(statearr_58069_58120[(2)] = inst_57958);

(statearr_58069_58120[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (37))){
var state_58016__$1 = state_58016;
var statearr_58070_58121 = state_58016__$1;
(statearr_58070_58121[(2)] = null);

(statearr_58070_58121[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58017 === (8))){
var inst_57918 = (state_58016[(8)]);
var inst_57936 = cljs.core.apply.call(null,cljs.core.hash_map,inst_57918);
var state_58016__$1 = state_58016;
var statearr_58071_58122 = state_58016__$1;
(statearr_58071_58122[(2)] = inst_57936);

(statearr_58071_58122[(1)] = (10));


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
});})(c__55153__auto___58076,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__54986__auto__,c__55153__auto___58076,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__54987__auto__ = null;
var cljs$core$async$mix_$_state_machine__54987__auto____0 = (function (){
var statearr_58072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58072[(0)] = cljs$core$async$mix_$_state_machine__54987__auto__);

(statearr_58072[(1)] = (1));

return statearr_58072;
});
var cljs$core$async$mix_$_state_machine__54987__auto____1 = (function (state_58016){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_58016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e58073){if((e58073 instanceof Object)){
var ex__54990__auto__ = e58073;
var statearr_58074_58123 = state_58016;
(statearr_58074_58123[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58124 = state_58016;
state_58016 = G__58124;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__54987__auto__ = function(state_58016){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__54987__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__54987__auto____1.call(this,state_58016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__54987__auto____0;
cljs$core$async$mix_$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__54987__auto____1;
return cljs$core$async$mix_$_state_machine__54987__auto__;
})()
;})(switch__54986__auto__,c__55153__auto___58076,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__55155__auto__ = (function (){var statearr_58075 = f__55154__auto__.call(null);
(statearr_58075[(6)] = c__55153__auto___58076);

return statearr_58075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(c__55153__auto___58076,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__58126 = arguments.length;
switch (G__58126) {
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
var G__58130 = arguments.length;
switch (G__58130) {
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
return (function (p1__58128_SHARP_){
if(cljs.core.truth_(p1__58128_SHARP_.call(null,topic))){
return p1__58128_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__58128_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58131 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58131 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta58132){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta58132 = meta58132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async58131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_58133,meta58132__$1){
var self__ = this;
var _58133__$1 = this;
return (new cljs.core.async.t_cljs$core$async58131(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta58132__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58131.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_58133){
var self__ = this;
var _58133__$1 = this;
return self__.meta58132;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58131.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58131.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58131.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58131.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58131.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async58131.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58131.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58131.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta58132","meta58132",344542628,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58131.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58131";

cljs.core.async.t_cljs$core$async58131.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async58131");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58131.
 */
cljs.core.async.__GT_t_cljs$core$async58131 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async58131(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58132){
return (new cljs.core.async.t_cljs$core$async58131(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58132));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async58131(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__55153__auto___58251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55153__auto___58251,mults,ensure_mult,p){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (c__55153__auto___58251,mults,ensure_mult,p){
return (function (state_58205){
var state_val_58206 = (state_58205[(1)]);
if((state_val_58206 === (7))){
var inst_58201 = (state_58205[(2)]);
var state_58205__$1 = state_58205;
var statearr_58207_58252 = state_58205__$1;
(statearr_58207_58252[(2)] = inst_58201);

(statearr_58207_58252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58206 === (20))){
var state_58205__$1 = state_58205;
var statearr_58208_58253 = state_58205__$1;
(statearr_58208_58253[(2)] = null);

(statearr_58208_58253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58206 === (1))){
var state_58205__$1 = state_58205;
var statearr_58209_58254 = state_58205__$1;
(statearr_58209_58254[(2)] = null);

(statearr_58209_58254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58206 === (24))){
var inst_58184 = (state_58205[(7)]);
var inst_58193 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_58184);
var state_58205__$1 = state_58205;
var statearr_58210_58255 = state_58205__$1;
(statearr_58210_58255[(2)] = inst_58193);

(statearr_58210_58255[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58206 === (4))){
var inst_58136 = (state_58205[(8)]);
var inst_58136__$1 = (state_58205[(2)]);
var inst_58137 = (inst_58136__$1 == null);
var state_58205__$1 = (function (){var statearr_58211 = state_58205;
(statearr_58211[(8)] = inst_58136__$1);

return statearr_58211;
})();
if(cljs.core.truth_(inst_58137)){
var statearr_58212_58256 = state_58205__$1;
(statearr_58212_58256[(1)] = (5));

} else {
var statearr_58213_58257 = state_58205__$1;
(statearr_58213_58257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58206 === (15))){
var inst_58178 = (state_58205[(2)]);
var state_58205__$1 = state_58205;
var statearr_58214_58258 = state_58205__$1;
(statearr_58214_58258[(2)] = inst_58178);

(statearr_58214_58258[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58206 === (21))){
var inst_58198 = (state_58205[(2)]);
var state_58205__$1 = (function (){var statearr_58215 = state_58205;
(statearr_58215[(9)] = inst_58198);

return statearr_58215;
})();
var statearr_58216_58259 = state_58205__$1;
(statearr_58216_58259[(2)] = null);

(statearr_58216_58259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58206 === (13))){
var inst_58160 = (state_58205[(10)]);
var inst_58162 = cljs.core.chunked_seq_QMARK_.call(null,inst_58160);
var state_58205__$1 = state_58205;
if(inst_58162){
var statearr_58217_58260 = state_58205__$1;
(statearr_58217_58260[(1)] = (16));

} else {
var statearr_58218_58261 = state_58205__$1;
(statearr_58218_58261[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58206 === (22))){
var inst_58190 = (state_58205[(2)]);
var state_58205__$1 = state_58205;
if(cljs.core.truth_(inst_58190)){
var statearr_58219_58262 = state_58205__$1;
(statearr_58219_58262[(1)] = (23));

} else {
var statearr_58220_58263 = state_58205__$1;
(statearr_58220_58263[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58206 === (6))){
var inst_58136 = (state_58205[(8)]);
var inst_58184 = (state_58205[(7)]);
var inst_58186 = (state_58205[(11)]);
var inst_58184__$1 = topic_fn.call(null,inst_58136);
var inst_58185 = cljs.core.deref.call(null,mults);
var inst_58186__$1 = cljs.core.get.call(null,inst_58185,inst_58184__$1);
var state_58205__$1 = (function (){var statearr_58221 = state_58205;
(statearr_58221[(7)] = inst_58184__$1);

(statearr_58221[(11)] = inst_58186__$1);

return statearr_58221;
})();
if(cljs.core.truth_(inst_58186__$1)){
var statearr_58222_58264 = state_58205__$1;
(statearr_58222_58264[(1)] = (19));

} else {
var statearr_58223_58265 = state_58205__$1;
(statearr_58223_58265[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58206 === (25))){
var inst_58195 = (state_58205[(2)]);
var state_58205__$1 = state_58205;
var statearr_58224_58266 = state_58205__$1;
(statearr_58224_58266[(2)] = inst_58195);

(statearr_58224_58266[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58206 === (17))){
var inst_58160 = (state_58205[(10)]);
var inst_58169 = cljs.core.first.call(null,inst_58160);
var inst_58170 = cljs.core.async.muxch_STAR_.call(null,inst_58169);
var inst_58171 = cljs.core.async.close_BANG_.call(null,inst_58170);
var inst_58172 = cljs.core.next.call(null,inst_58160);
var inst_58146 = inst_58172;
var inst_58147 = null;
var inst_58148 = (0);
var inst_58149 = (0);
var state_58205__$1 = (function (){var statearr_58225 = state_58205;
(statearr_58225[(12)] = inst_58146);

(statearr_58225[(13)] = inst_58149);

(statearr_58225[(14)] = inst_58171);

(statearr_58225[(15)] = inst_58148);

(statearr_58225[(16)] = inst_58147);

return statearr_58225;
})();
var statearr_58226_58267 = state_58205__$1;
(statearr_58226_58267[(2)] = null);

(statearr_58226_58267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58206 === (3))){
var inst_58203 = (state_58205[(2)]);
var state_58205__$1 = state_58205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58205__$1,inst_58203);
} else {
if((state_val_58206 === (12))){
var inst_58180 = (state_58205[(2)]);
var state_58205__$1 = state_58205;
var statearr_58227_58268 = state_58205__$1;
(statearr_58227_58268[(2)] = inst_58180);

(statearr_58227_58268[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58206 === (2))){
var state_58205__$1 = state_58205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58205__$1,(4),ch);
} else {
if((state_val_58206 === (23))){
var state_58205__$1 = state_58205;
var statearr_58228_58269 = state_58205__$1;
(statearr_58228_58269[(2)] = null);

(statearr_58228_58269[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58206 === (19))){
var inst_58136 = (state_58205[(8)]);
var inst_58186 = (state_58205[(11)]);
var inst_58188 = cljs.core.async.muxch_STAR_.call(null,inst_58186);
var state_58205__$1 = state_58205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58205__$1,(22),inst_58188,inst_58136);
} else {
if((state_val_58206 === (11))){
var inst_58146 = (state_58205[(12)]);
var inst_58160 = (state_58205[(10)]);
var inst_58160__$1 = cljs.core.seq.call(null,inst_58146);
var state_58205__$1 = (function (){var statearr_58229 = state_58205;
(statearr_58229[(10)] = inst_58160__$1);

return statearr_58229;
})();
if(inst_58160__$1){
var statearr_58230_58270 = state_58205__$1;
(statearr_58230_58270[(1)] = (13));

} else {
var statearr_58231_58271 = state_58205__$1;
(statearr_58231_58271[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58206 === (9))){
var inst_58182 = (state_58205[(2)]);
var state_58205__$1 = state_58205;
var statearr_58232_58272 = state_58205__$1;
(statearr_58232_58272[(2)] = inst_58182);

(statearr_58232_58272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58206 === (5))){
var inst_58143 = cljs.core.deref.call(null,mults);
var inst_58144 = cljs.core.vals.call(null,inst_58143);
var inst_58145 = cljs.core.seq.call(null,inst_58144);
var inst_58146 = inst_58145;
var inst_58147 = null;
var inst_58148 = (0);
var inst_58149 = (0);
var state_58205__$1 = (function (){var statearr_58233 = state_58205;
(statearr_58233[(12)] = inst_58146);

(statearr_58233[(13)] = inst_58149);

(statearr_58233[(15)] = inst_58148);

(statearr_58233[(16)] = inst_58147);

return statearr_58233;
})();
var statearr_58234_58273 = state_58205__$1;
(statearr_58234_58273[(2)] = null);

(statearr_58234_58273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58206 === (14))){
var state_58205__$1 = state_58205;
var statearr_58238_58274 = state_58205__$1;
(statearr_58238_58274[(2)] = null);

(statearr_58238_58274[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58206 === (16))){
var inst_58160 = (state_58205[(10)]);
var inst_58164 = cljs.core.chunk_first.call(null,inst_58160);
var inst_58165 = cljs.core.chunk_rest.call(null,inst_58160);
var inst_58166 = cljs.core.count.call(null,inst_58164);
var inst_58146 = inst_58165;
var inst_58147 = inst_58164;
var inst_58148 = inst_58166;
var inst_58149 = (0);
var state_58205__$1 = (function (){var statearr_58239 = state_58205;
(statearr_58239[(12)] = inst_58146);

(statearr_58239[(13)] = inst_58149);

(statearr_58239[(15)] = inst_58148);

(statearr_58239[(16)] = inst_58147);

return statearr_58239;
})();
var statearr_58240_58275 = state_58205__$1;
(statearr_58240_58275[(2)] = null);

(statearr_58240_58275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58206 === (10))){
var inst_58146 = (state_58205[(12)]);
var inst_58149 = (state_58205[(13)]);
var inst_58148 = (state_58205[(15)]);
var inst_58147 = (state_58205[(16)]);
var inst_58154 = cljs.core._nth.call(null,inst_58147,inst_58149);
var inst_58155 = cljs.core.async.muxch_STAR_.call(null,inst_58154);
var inst_58156 = cljs.core.async.close_BANG_.call(null,inst_58155);
var inst_58157 = (inst_58149 + (1));
var tmp58235 = inst_58146;
var tmp58236 = inst_58148;
var tmp58237 = inst_58147;
var inst_58146__$1 = tmp58235;
var inst_58147__$1 = tmp58237;
var inst_58148__$1 = tmp58236;
var inst_58149__$1 = inst_58157;
var state_58205__$1 = (function (){var statearr_58241 = state_58205;
(statearr_58241[(12)] = inst_58146__$1);

(statearr_58241[(13)] = inst_58149__$1);

(statearr_58241[(15)] = inst_58148__$1);

(statearr_58241[(16)] = inst_58147__$1);

(statearr_58241[(17)] = inst_58156);

return statearr_58241;
})();
var statearr_58242_58276 = state_58205__$1;
(statearr_58242_58276[(2)] = null);

(statearr_58242_58276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58206 === (18))){
var inst_58175 = (state_58205[(2)]);
var state_58205__$1 = state_58205;
var statearr_58243_58277 = state_58205__$1;
(statearr_58243_58277[(2)] = inst_58175);

(statearr_58243_58277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58206 === (8))){
var inst_58149 = (state_58205[(13)]);
var inst_58148 = (state_58205[(15)]);
var inst_58151 = (inst_58149 < inst_58148);
var inst_58152 = inst_58151;
var state_58205__$1 = state_58205;
if(cljs.core.truth_(inst_58152)){
var statearr_58244_58278 = state_58205__$1;
(statearr_58244_58278[(1)] = (10));

} else {
var statearr_58245_58279 = state_58205__$1;
(statearr_58245_58279[(1)] = (11));

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
});})(c__55153__auto___58251,mults,ensure_mult,p))
;
return ((function (switch__54986__auto__,c__55153__auto___58251,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__54987__auto__ = null;
var cljs$core$async$state_machine__54987__auto____0 = (function (){
var statearr_58246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58246[(0)] = cljs$core$async$state_machine__54987__auto__);

(statearr_58246[(1)] = (1));

return statearr_58246;
});
var cljs$core$async$state_machine__54987__auto____1 = (function (state_58205){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_58205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e58247){if((e58247 instanceof Object)){
var ex__54990__auto__ = e58247;
var statearr_58248_58280 = state_58205;
(statearr_58248_58280[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58281 = state_58205;
state_58205 = G__58281;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
cljs$core$async$state_machine__54987__auto__ = function(state_58205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54987__auto____1.call(this,state_58205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54987__auto____0;
cljs$core$async$state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54987__auto____1;
return cljs$core$async$state_machine__54987__auto__;
})()
;})(switch__54986__auto__,c__55153__auto___58251,mults,ensure_mult,p))
})();
var state__55155__auto__ = (function (){var statearr_58249 = f__55154__auto__.call(null);
(statearr_58249[(6)] = c__55153__auto___58251);

return statearr_58249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(c__55153__auto___58251,mults,ensure_mult,p))
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
var G__58283 = arguments.length;
switch (G__58283) {
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
var G__58286 = arguments.length;
switch (G__58286) {
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
var G__58289 = arguments.length;
switch (G__58289) {
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
var c__55153__auto___58356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55153__auto___58356,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (c__55153__auto___58356,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_58328){
var state_val_58329 = (state_58328[(1)]);
if((state_val_58329 === (7))){
var state_58328__$1 = state_58328;
var statearr_58330_58357 = state_58328__$1;
(statearr_58330_58357[(2)] = null);

(statearr_58330_58357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58329 === (1))){
var state_58328__$1 = state_58328;
var statearr_58331_58358 = state_58328__$1;
(statearr_58331_58358[(2)] = null);

(statearr_58331_58358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58329 === (4))){
var inst_58292 = (state_58328[(7)]);
var inst_58294 = (inst_58292 < cnt);
var state_58328__$1 = state_58328;
if(cljs.core.truth_(inst_58294)){
var statearr_58332_58359 = state_58328__$1;
(statearr_58332_58359[(1)] = (6));

} else {
var statearr_58333_58360 = state_58328__$1;
(statearr_58333_58360[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58329 === (15))){
var inst_58324 = (state_58328[(2)]);
var state_58328__$1 = state_58328;
var statearr_58334_58361 = state_58328__$1;
(statearr_58334_58361[(2)] = inst_58324);

(statearr_58334_58361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58329 === (13))){
var inst_58317 = cljs.core.async.close_BANG_.call(null,out);
var state_58328__$1 = state_58328;
var statearr_58335_58362 = state_58328__$1;
(statearr_58335_58362[(2)] = inst_58317);

(statearr_58335_58362[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58329 === (6))){
var state_58328__$1 = state_58328;
var statearr_58336_58363 = state_58328__$1;
(statearr_58336_58363[(2)] = null);

(statearr_58336_58363[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58329 === (3))){
var inst_58326 = (state_58328[(2)]);
var state_58328__$1 = state_58328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58328__$1,inst_58326);
} else {
if((state_val_58329 === (12))){
var inst_58314 = (state_58328[(8)]);
var inst_58314__$1 = (state_58328[(2)]);
var inst_58315 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_58314__$1);
var state_58328__$1 = (function (){var statearr_58337 = state_58328;
(statearr_58337[(8)] = inst_58314__$1);

return statearr_58337;
})();
if(cljs.core.truth_(inst_58315)){
var statearr_58338_58364 = state_58328__$1;
(statearr_58338_58364[(1)] = (13));

} else {
var statearr_58339_58365 = state_58328__$1;
(statearr_58339_58365[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58329 === (2))){
var inst_58291 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_58292 = (0);
var state_58328__$1 = (function (){var statearr_58340 = state_58328;
(statearr_58340[(7)] = inst_58292);

(statearr_58340[(9)] = inst_58291);

return statearr_58340;
})();
var statearr_58341_58366 = state_58328__$1;
(statearr_58341_58366[(2)] = null);

(statearr_58341_58366[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58329 === (11))){
var inst_58292 = (state_58328[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_58328,(10),Object,null,(9));
var inst_58301 = chs__$1.call(null,inst_58292);
var inst_58302 = done.call(null,inst_58292);
var inst_58303 = cljs.core.async.take_BANG_.call(null,inst_58301,inst_58302);
var state_58328__$1 = state_58328;
var statearr_58342_58367 = state_58328__$1;
(statearr_58342_58367[(2)] = inst_58303);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58328__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58329 === (9))){
var inst_58292 = (state_58328[(7)]);
var inst_58305 = (state_58328[(2)]);
var inst_58306 = (inst_58292 + (1));
var inst_58292__$1 = inst_58306;
var state_58328__$1 = (function (){var statearr_58343 = state_58328;
(statearr_58343[(7)] = inst_58292__$1);

(statearr_58343[(10)] = inst_58305);

return statearr_58343;
})();
var statearr_58344_58368 = state_58328__$1;
(statearr_58344_58368[(2)] = null);

(statearr_58344_58368[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58329 === (5))){
var inst_58312 = (state_58328[(2)]);
var state_58328__$1 = (function (){var statearr_58345 = state_58328;
(statearr_58345[(11)] = inst_58312);

return statearr_58345;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58328__$1,(12),dchan);
} else {
if((state_val_58329 === (14))){
var inst_58314 = (state_58328[(8)]);
var inst_58319 = cljs.core.apply.call(null,f,inst_58314);
var state_58328__$1 = state_58328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58328__$1,(16),out,inst_58319);
} else {
if((state_val_58329 === (16))){
var inst_58321 = (state_58328[(2)]);
var state_58328__$1 = (function (){var statearr_58346 = state_58328;
(statearr_58346[(12)] = inst_58321);

return statearr_58346;
})();
var statearr_58347_58369 = state_58328__$1;
(statearr_58347_58369[(2)] = null);

(statearr_58347_58369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58329 === (10))){
var inst_58296 = (state_58328[(2)]);
var inst_58297 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_58328__$1 = (function (){var statearr_58348 = state_58328;
(statearr_58348[(13)] = inst_58296);

return statearr_58348;
})();
var statearr_58349_58370 = state_58328__$1;
(statearr_58349_58370[(2)] = inst_58297);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58328__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58329 === (8))){
var inst_58310 = (state_58328[(2)]);
var state_58328__$1 = state_58328;
var statearr_58350_58371 = state_58328__$1;
(statearr_58350_58371[(2)] = inst_58310);

(statearr_58350_58371[(1)] = (5));


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
});})(c__55153__auto___58356,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__54986__auto__,c__55153__auto___58356,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__54987__auto__ = null;
var cljs$core$async$state_machine__54987__auto____0 = (function (){
var statearr_58351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58351[(0)] = cljs$core$async$state_machine__54987__auto__);

(statearr_58351[(1)] = (1));

return statearr_58351;
});
var cljs$core$async$state_machine__54987__auto____1 = (function (state_58328){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_58328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e58352){if((e58352 instanceof Object)){
var ex__54990__auto__ = e58352;
var statearr_58353_58372 = state_58328;
(statearr_58353_58372[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58373 = state_58328;
state_58328 = G__58373;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
cljs$core$async$state_machine__54987__auto__ = function(state_58328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54987__auto____1.call(this,state_58328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54987__auto____0;
cljs$core$async$state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54987__auto____1;
return cljs$core$async$state_machine__54987__auto__;
})()
;})(switch__54986__auto__,c__55153__auto___58356,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__55155__auto__ = (function (){var statearr_58354 = f__55154__auto__.call(null);
(statearr_58354[(6)] = c__55153__auto___58356);

return statearr_58354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(c__55153__auto___58356,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__58376 = arguments.length;
switch (G__58376) {
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
var c__55153__auto___58430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55153__auto___58430,out){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (c__55153__auto___58430,out){
return (function (state_58408){
var state_val_58409 = (state_58408[(1)]);
if((state_val_58409 === (7))){
var inst_58387 = (state_58408[(7)]);
var inst_58388 = (state_58408[(8)]);
var inst_58387__$1 = (state_58408[(2)]);
var inst_58388__$1 = cljs.core.nth.call(null,inst_58387__$1,(0),null);
var inst_58389 = cljs.core.nth.call(null,inst_58387__$1,(1),null);
var inst_58390 = (inst_58388__$1 == null);
var state_58408__$1 = (function (){var statearr_58410 = state_58408;
(statearr_58410[(7)] = inst_58387__$1);

(statearr_58410[(9)] = inst_58389);

(statearr_58410[(8)] = inst_58388__$1);

return statearr_58410;
})();
if(cljs.core.truth_(inst_58390)){
var statearr_58411_58431 = state_58408__$1;
(statearr_58411_58431[(1)] = (8));

} else {
var statearr_58412_58432 = state_58408__$1;
(statearr_58412_58432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58409 === (1))){
var inst_58377 = cljs.core.vec.call(null,chs);
var inst_58378 = inst_58377;
var state_58408__$1 = (function (){var statearr_58413 = state_58408;
(statearr_58413[(10)] = inst_58378);

return statearr_58413;
})();
var statearr_58414_58433 = state_58408__$1;
(statearr_58414_58433[(2)] = null);

(statearr_58414_58433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58409 === (4))){
var inst_58378 = (state_58408[(10)]);
var state_58408__$1 = state_58408;
return cljs.core.async.ioc_alts_BANG_.call(null,state_58408__$1,(7),inst_58378);
} else {
if((state_val_58409 === (6))){
var inst_58404 = (state_58408[(2)]);
var state_58408__$1 = state_58408;
var statearr_58415_58434 = state_58408__$1;
(statearr_58415_58434[(2)] = inst_58404);

(statearr_58415_58434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58409 === (3))){
var inst_58406 = (state_58408[(2)]);
var state_58408__$1 = state_58408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58408__$1,inst_58406);
} else {
if((state_val_58409 === (2))){
var inst_58378 = (state_58408[(10)]);
var inst_58380 = cljs.core.count.call(null,inst_58378);
var inst_58381 = (inst_58380 > (0));
var state_58408__$1 = state_58408;
if(cljs.core.truth_(inst_58381)){
var statearr_58417_58435 = state_58408__$1;
(statearr_58417_58435[(1)] = (4));

} else {
var statearr_58418_58436 = state_58408__$1;
(statearr_58418_58436[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58409 === (11))){
var inst_58378 = (state_58408[(10)]);
var inst_58397 = (state_58408[(2)]);
var tmp58416 = inst_58378;
var inst_58378__$1 = tmp58416;
var state_58408__$1 = (function (){var statearr_58419 = state_58408;
(statearr_58419[(11)] = inst_58397);

(statearr_58419[(10)] = inst_58378__$1);

return statearr_58419;
})();
var statearr_58420_58437 = state_58408__$1;
(statearr_58420_58437[(2)] = null);

(statearr_58420_58437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58409 === (9))){
var inst_58388 = (state_58408[(8)]);
var state_58408__$1 = state_58408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58408__$1,(11),out,inst_58388);
} else {
if((state_val_58409 === (5))){
var inst_58402 = cljs.core.async.close_BANG_.call(null,out);
var state_58408__$1 = state_58408;
var statearr_58421_58438 = state_58408__$1;
(statearr_58421_58438[(2)] = inst_58402);

(statearr_58421_58438[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58409 === (10))){
var inst_58400 = (state_58408[(2)]);
var state_58408__$1 = state_58408;
var statearr_58422_58439 = state_58408__$1;
(statearr_58422_58439[(2)] = inst_58400);

(statearr_58422_58439[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58409 === (8))){
var inst_58387 = (state_58408[(7)]);
var inst_58389 = (state_58408[(9)]);
var inst_58388 = (state_58408[(8)]);
var inst_58378 = (state_58408[(10)]);
var inst_58392 = (function (){var cs = inst_58378;
var vec__58383 = inst_58387;
var v = inst_58388;
var c = inst_58389;
return ((function (cs,vec__58383,v,c,inst_58387,inst_58389,inst_58388,inst_58378,state_val_58409,c__55153__auto___58430,out){
return (function (p1__58374_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__58374_SHARP_);
});
;})(cs,vec__58383,v,c,inst_58387,inst_58389,inst_58388,inst_58378,state_val_58409,c__55153__auto___58430,out))
})();
var inst_58393 = cljs.core.filterv.call(null,inst_58392,inst_58378);
var inst_58378__$1 = inst_58393;
var state_58408__$1 = (function (){var statearr_58423 = state_58408;
(statearr_58423[(10)] = inst_58378__$1);

return statearr_58423;
})();
var statearr_58424_58440 = state_58408__$1;
(statearr_58424_58440[(2)] = null);

(statearr_58424_58440[(1)] = (2));


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
});})(c__55153__auto___58430,out))
;
return ((function (switch__54986__auto__,c__55153__auto___58430,out){
return (function() {
var cljs$core$async$state_machine__54987__auto__ = null;
var cljs$core$async$state_machine__54987__auto____0 = (function (){
var statearr_58425 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58425[(0)] = cljs$core$async$state_machine__54987__auto__);

(statearr_58425[(1)] = (1));

return statearr_58425;
});
var cljs$core$async$state_machine__54987__auto____1 = (function (state_58408){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_58408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e58426){if((e58426 instanceof Object)){
var ex__54990__auto__ = e58426;
var statearr_58427_58441 = state_58408;
(statearr_58427_58441[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58442 = state_58408;
state_58408 = G__58442;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
cljs$core$async$state_machine__54987__auto__ = function(state_58408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54987__auto____1.call(this,state_58408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54987__auto____0;
cljs$core$async$state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54987__auto____1;
return cljs$core$async$state_machine__54987__auto__;
})()
;})(switch__54986__auto__,c__55153__auto___58430,out))
})();
var state__55155__auto__ = (function (){var statearr_58428 = f__55154__auto__.call(null);
(statearr_58428[(6)] = c__55153__auto___58430);

return statearr_58428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(c__55153__auto___58430,out))
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
var G__58444 = arguments.length;
switch (G__58444) {
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
var c__55153__auto___58489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55153__auto___58489,out){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (c__55153__auto___58489,out){
return (function (state_58468){
var state_val_58469 = (state_58468[(1)]);
if((state_val_58469 === (7))){
var inst_58450 = (state_58468[(7)]);
var inst_58450__$1 = (state_58468[(2)]);
var inst_58451 = (inst_58450__$1 == null);
var inst_58452 = cljs.core.not.call(null,inst_58451);
var state_58468__$1 = (function (){var statearr_58470 = state_58468;
(statearr_58470[(7)] = inst_58450__$1);

return statearr_58470;
})();
if(inst_58452){
var statearr_58471_58490 = state_58468__$1;
(statearr_58471_58490[(1)] = (8));

} else {
var statearr_58472_58491 = state_58468__$1;
(statearr_58472_58491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58469 === (1))){
var inst_58445 = (0);
var state_58468__$1 = (function (){var statearr_58473 = state_58468;
(statearr_58473[(8)] = inst_58445);

return statearr_58473;
})();
var statearr_58474_58492 = state_58468__$1;
(statearr_58474_58492[(2)] = null);

(statearr_58474_58492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58469 === (4))){
var state_58468__$1 = state_58468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58468__$1,(7),ch);
} else {
if((state_val_58469 === (6))){
var inst_58463 = (state_58468[(2)]);
var state_58468__$1 = state_58468;
var statearr_58475_58493 = state_58468__$1;
(statearr_58475_58493[(2)] = inst_58463);

(statearr_58475_58493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58469 === (3))){
var inst_58465 = (state_58468[(2)]);
var inst_58466 = cljs.core.async.close_BANG_.call(null,out);
var state_58468__$1 = (function (){var statearr_58476 = state_58468;
(statearr_58476[(9)] = inst_58465);

return statearr_58476;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58468__$1,inst_58466);
} else {
if((state_val_58469 === (2))){
var inst_58445 = (state_58468[(8)]);
var inst_58447 = (inst_58445 < n);
var state_58468__$1 = state_58468;
if(cljs.core.truth_(inst_58447)){
var statearr_58477_58494 = state_58468__$1;
(statearr_58477_58494[(1)] = (4));

} else {
var statearr_58478_58495 = state_58468__$1;
(statearr_58478_58495[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58469 === (11))){
var inst_58445 = (state_58468[(8)]);
var inst_58455 = (state_58468[(2)]);
var inst_58456 = (inst_58445 + (1));
var inst_58445__$1 = inst_58456;
var state_58468__$1 = (function (){var statearr_58479 = state_58468;
(statearr_58479[(10)] = inst_58455);

(statearr_58479[(8)] = inst_58445__$1);

return statearr_58479;
})();
var statearr_58480_58496 = state_58468__$1;
(statearr_58480_58496[(2)] = null);

(statearr_58480_58496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58469 === (9))){
var state_58468__$1 = state_58468;
var statearr_58481_58497 = state_58468__$1;
(statearr_58481_58497[(2)] = null);

(statearr_58481_58497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58469 === (5))){
var state_58468__$1 = state_58468;
var statearr_58482_58498 = state_58468__$1;
(statearr_58482_58498[(2)] = null);

(statearr_58482_58498[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58469 === (10))){
var inst_58460 = (state_58468[(2)]);
var state_58468__$1 = state_58468;
var statearr_58483_58499 = state_58468__$1;
(statearr_58483_58499[(2)] = inst_58460);

(statearr_58483_58499[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58469 === (8))){
var inst_58450 = (state_58468[(7)]);
var state_58468__$1 = state_58468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58468__$1,(11),out,inst_58450);
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
});})(c__55153__auto___58489,out))
;
return ((function (switch__54986__auto__,c__55153__auto___58489,out){
return (function() {
var cljs$core$async$state_machine__54987__auto__ = null;
var cljs$core$async$state_machine__54987__auto____0 = (function (){
var statearr_58484 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58484[(0)] = cljs$core$async$state_machine__54987__auto__);

(statearr_58484[(1)] = (1));

return statearr_58484;
});
var cljs$core$async$state_machine__54987__auto____1 = (function (state_58468){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_58468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e58485){if((e58485 instanceof Object)){
var ex__54990__auto__ = e58485;
var statearr_58486_58500 = state_58468;
(statearr_58486_58500[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58501 = state_58468;
state_58468 = G__58501;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
cljs$core$async$state_machine__54987__auto__ = function(state_58468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54987__auto____1.call(this,state_58468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54987__auto____0;
cljs$core$async$state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54987__auto____1;
return cljs$core$async$state_machine__54987__auto__;
})()
;})(switch__54986__auto__,c__55153__auto___58489,out))
})();
var state__55155__auto__ = (function (){var statearr_58487 = f__55154__auto__.call(null);
(statearr_58487[(6)] = c__55153__auto___58489);

return statearr_58487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(c__55153__auto___58489,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58503 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58503 = (function (f,ch,meta58504){
this.f = f;
this.ch = ch;
this.meta58504 = meta58504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async58503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58505,meta58504__$1){
var self__ = this;
var _58505__$1 = this;
return (new cljs.core.async.t_cljs$core$async58503(self__.f,self__.ch,meta58504__$1));
});

cljs.core.async.t_cljs$core$async58503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58505){
var self__ = this;
var _58505__$1 = this;
return self__.meta58504;
});

cljs.core.async.t_cljs$core$async58503.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58503.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58503.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58503.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58503.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58506 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58506 = (function (f,ch,meta58504,_,fn1,meta58507){
this.f = f;
this.ch = ch;
this.meta58504 = meta58504;
this._ = _;
this.fn1 = fn1;
this.meta58507 = meta58507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async58506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_58508,meta58507__$1){
var self__ = this;
var _58508__$1 = this;
return (new cljs.core.async.t_cljs$core$async58506(self__.f,self__.ch,self__.meta58504,self__._,self__.fn1,meta58507__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async58506.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_58508){
var self__ = this;
var _58508__$1 = this;
return self__.meta58507;
});})(___$1))
;

cljs.core.async.t_cljs$core$async58506.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58506.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async58506.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async58506.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__58502_SHARP_){
return f1.call(null,(((p1__58502_SHARP_ == null))?null:self__.f.call(null,p1__58502_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async58506.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58504","meta58504",1733218974,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async58503","cljs.core.async/t_cljs$core$async58503",-718335151,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta58507","meta58507",1602465927,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async58506.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58506.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58506";

cljs.core.async.t_cljs$core$async58506.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async58506");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58506.
 */
cljs.core.async.__GT_t_cljs$core$async58506 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58506(f__$1,ch__$1,meta58504__$1,___$2,fn1__$1,meta58507){
return (new cljs.core.async.t_cljs$core$async58506(f__$1,ch__$1,meta58504__$1,___$2,fn1__$1,meta58507));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async58506(self__.f,self__.ch,self__.meta58504,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async58503.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58503.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async58503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58504","meta58504",1733218974,null)], null);
});

cljs.core.async.t_cljs$core$async58503.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58503";

cljs.core.async.t_cljs$core$async58503.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async58503");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58503.
 */
cljs.core.async.__GT_t_cljs$core$async58503 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58503(f__$1,ch__$1,meta58504){
return (new cljs.core.async.t_cljs$core$async58503(f__$1,ch__$1,meta58504));
});

}

return (new cljs.core.async.t_cljs$core$async58503(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58509 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58509 = (function (f,ch,meta58510){
this.f = f;
this.ch = ch;
this.meta58510 = meta58510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async58509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58511,meta58510__$1){
var self__ = this;
var _58511__$1 = this;
return (new cljs.core.async.t_cljs$core$async58509(self__.f,self__.ch,meta58510__$1));
});

cljs.core.async.t_cljs$core$async58509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58511){
var self__ = this;
var _58511__$1 = this;
return self__.meta58510;
});

cljs.core.async.t_cljs$core$async58509.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58509.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58509.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58509.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async58509.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58509.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async58509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58510","meta58510",-2127267355,null)], null);
});

cljs.core.async.t_cljs$core$async58509.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58509";

cljs.core.async.t_cljs$core$async58509.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async58509");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58509.
 */
cljs.core.async.__GT_t_cljs$core$async58509 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async58509(f__$1,ch__$1,meta58510){
return (new cljs.core.async.t_cljs$core$async58509(f__$1,ch__$1,meta58510));
});

}

return (new cljs.core.async.t_cljs$core$async58509(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58512 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58512 = (function (p,ch,meta58513){
this.p = p;
this.ch = ch;
this.meta58513 = meta58513;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async58512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58514,meta58513__$1){
var self__ = this;
var _58514__$1 = this;
return (new cljs.core.async.t_cljs$core$async58512(self__.p,self__.ch,meta58513__$1));
});

cljs.core.async.t_cljs$core$async58512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58514){
var self__ = this;
var _58514__$1 = this;
return self__.meta58513;
});

cljs.core.async.t_cljs$core$async58512.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58512.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58512.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58512.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58512.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async58512.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58512.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async58512.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58513","meta58513",-1366675339,null)], null);
});

cljs.core.async.t_cljs$core$async58512.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58512.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58512";

cljs.core.async.t_cljs$core$async58512.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async58512");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58512.
 */
cljs.core.async.__GT_t_cljs$core$async58512 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async58512(p__$1,ch__$1,meta58513){
return (new cljs.core.async.t_cljs$core$async58512(p__$1,ch__$1,meta58513));
});

}

return (new cljs.core.async.t_cljs$core$async58512(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__58516 = arguments.length;
switch (G__58516) {
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
var c__55153__auto___58556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55153__auto___58556,out){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (c__55153__auto___58556,out){
return (function (state_58537){
var state_val_58538 = (state_58537[(1)]);
if((state_val_58538 === (7))){
var inst_58533 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
var statearr_58539_58557 = state_58537__$1;
(statearr_58539_58557[(2)] = inst_58533);

(statearr_58539_58557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (1))){
var state_58537__$1 = state_58537;
var statearr_58540_58558 = state_58537__$1;
(statearr_58540_58558[(2)] = null);

(statearr_58540_58558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (4))){
var inst_58519 = (state_58537[(7)]);
var inst_58519__$1 = (state_58537[(2)]);
var inst_58520 = (inst_58519__$1 == null);
var state_58537__$1 = (function (){var statearr_58541 = state_58537;
(statearr_58541[(7)] = inst_58519__$1);

return statearr_58541;
})();
if(cljs.core.truth_(inst_58520)){
var statearr_58542_58559 = state_58537__$1;
(statearr_58542_58559[(1)] = (5));

} else {
var statearr_58543_58560 = state_58537__$1;
(statearr_58543_58560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (6))){
var inst_58519 = (state_58537[(7)]);
var inst_58524 = p.call(null,inst_58519);
var state_58537__$1 = state_58537;
if(cljs.core.truth_(inst_58524)){
var statearr_58544_58561 = state_58537__$1;
(statearr_58544_58561[(1)] = (8));

} else {
var statearr_58545_58562 = state_58537__$1;
(statearr_58545_58562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (3))){
var inst_58535 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58537__$1,inst_58535);
} else {
if((state_val_58538 === (2))){
var state_58537__$1 = state_58537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58537__$1,(4),ch);
} else {
if((state_val_58538 === (11))){
var inst_58527 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
var statearr_58546_58563 = state_58537__$1;
(statearr_58546_58563[(2)] = inst_58527);

(statearr_58546_58563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (9))){
var state_58537__$1 = state_58537;
var statearr_58547_58564 = state_58537__$1;
(statearr_58547_58564[(2)] = null);

(statearr_58547_58564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (5))){
var inst_58522 = cljs.core.async.close_BANG_.call(null,out);
var state_58537__$1 = state_58537;
var statearr_58548_58565 = state_58537__$1;
(statearr_58548_58565[(2)] = inst_58522);

(statearr_58548_58565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (10))){
var inst_58530 = (state_58537[(2)]);
var state_58537__$1 = (function (){var statearr_58549 = state_58537;
(statearr_58549[(8)] = inst_58530);

return statearr_58549;
})();
var statearr_58550_58566 = state_58537__$1;
(statearr_58550_58566[(2)] = null);

(statearr_58550_58566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (8))){
var inst_58519 = (state_58537[(7)]);
var state_58537__$1 = state_58537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58537__$1,(11),out,inst_58519);
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
});})(c__55153__auto___58556,out))
;
return ((function (switch__54986__auto__,c__55153__auto___58556,out){
return (function() {
var cljs$core$async$state_machine__54987__auto__ = null;
var cljs$core$async$state_machine__54987__auto____0 = (function (){
var statearr_58551 = [null,null,null,null,null,null,null,null,null];
(statearr_58551[(0)] = cljs$core$async$state_machine__54987__auto__);

(statearr_58551[(1)] = (1));

return statearr_58551;
});
var cljs$core$async$state_machine__54987__auto____1 = (function (state_58537){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_58537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e58552){if((e58552 instanceof Object)){
var ex__54990__auto__ = e58552;
var statearr_58553_58567 = state_58537;
(statearr_58553_58567[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58568 = state_58537;
state_58537 = G__58568;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
cljs$core$async$state_machine__54987__auto__ = function(state_58537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54987__auto____1.call(this,state_58537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54987__auto____0;
cljs$core$async$state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54987__auto____1;
return cljs$core$async$state_machine__54987__auto__;
})()
;})(switch__54986__auto__,c__55153__auto___58556,out))
})();
var state__55155__auto__ = (function (){var statearr_58554 = f__55154__auto__.call(null);
(statearr_58554[(6)] = c__55153__auto___58556);

return statearr_58554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(c__55153__auto___58556,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__58570 = arguments.length;
switch (G__58570) {
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
var c__55153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55153__auto__){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (c__55153__auto__){
return (function (state_58633){
var state_val_58634 = (state_58633[(1)]);
if((state_val_58634 === (7))){
var inst_58629 = (state_58633[(2)]);
var state_58633__$1 = state_58633;
var statearr_58635_58673 = state_58633__$1;
(statearr_58635_58673[(2)] = inst_58629);

(statearr_58635_58673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58634 === (20))){
var inst_58599 = (state_58633[(7)]);
var inst_58610 = (state_58633[(2)]);
var inst_58611 = cljs.core.next.call(null,inst_58599);
var inst_58585 = inst_58611;
var inst_58586 = null;
var inst_58587 = (0);
var inst_58588 = (0);
var state_58633__$1 = (function (){var statearr_58636 = state_58633;
(statearr_58636[(8)] = inst_58587);

(statearr_58636[(9)] = inst_58588);

(statearr_58636[(10)] = inst_58586);

(statearr_58636[(11)] = inst_58610);

(statearr_58636[(12)] = inst_58585);

return statearr_58636;
})();
var statearr_58637_58674 = state_58633__$1;
(statearr_58637_58674[(2)] = null);

(statearr_58637_58674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58634 === (1))){
var state_58633__$1 = state_58633;
var statearr_58638_58675 = state_58633__$1;
(statearr_58638_58675[(2)] = null);

(statearr_58638_58675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58634 === (4))){
var inst_58574 = (state_58633[(13)]);
var inst_58574__$1 = (state_58633[(2)]);
var inst_58575 = (inst_58574__$1 == null);
var state_58633__$1 = (function (){var statearr_58639 = state_58633;
(statearr_58639[(13)] = inst_58574__$1);

return statearr_58639;
})();
if(cljs.core.truth_(inst_58575)){
var statearr_58640_58676 = state_58633__$1;
(statearr_58640_58676[(1)] = (5));

} else {
var statearr_58641_58677 = state_58633__$1;
(statearr_58641_58677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58634 === (15))){
var state_58633__$1 = state_58633;
var statearr_58645_58678 = state_58633__$1;
(statearr_58645_58678[(2)] = null);

(statearr_58645_58678[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58634 === (21))){
var state_58633__$1 = state_58633;
var statearr_58646_58679 = state_58633__$1;
(statearr_58646_58679[(2)] = null);

(statearr_58646_58679[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58634 === (13))){
var inst_58587 = (state_58633[(8)]);
var inst_58588 = (state_58633[(9)]);
var inst_58586 = (state_58633[(10)]);
var inst_58585 = (state_58633[(12)]);
var inst_58595 = (state_58633[(2)]);
var inst_58596 = (inst_58588 + (1));
var tmp58642 = inst_58587;
var tmp58643 = inst_58586;
var tmp58644 = inst_58585;
var inst_58585__$1 = tmp58644;
var inst_58586__$1 = tmp58643;
var inst_58587__$1 = tmp58642;
var inst_58588__$1 = inst_58596;
var state_58633__$1 = (function (){var statearr_58647 = state_58633;
(statearr_58647[(8)] = inst_58587__$1);

(statearr_58647[(9)] = inst_58588__$1);

(statearr_58647[(10)] = inst_58586__$1);

(statearr_58647[(14)] = inst_58595);

(statearr_58647[(12)] = inst_58585__$1);

return statearr_58647;
})();
var statearr_58648_58680 = state_58633__$1;
(statearr_58648_58680[(2)] = null);

(statearr_58648_58680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58634 === (22))){
var state_58633__$1 = state_58633;
var statearr_58649_58681 = state_58633__$1;
(statearr_58649_58681[(2)] = null);

(statearr_58649_58681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58634 === (6))){
var inst_58574 = (state_58633[(13)]);
var inst_58583 = f.call(null,inst_58574);
var inst_58584 = cljs.core.seq.call(null,inst_58583);
var inst_58585 = inst_58584;
var inst_58586 = null;
var inst_58587 = (0);
var inst_58588 = (0);
var state_58633__$1 = (function (){var statearr_58650 = state_58633;
(statearr_58650[(8)] = inst_58587);

(statearr_58650[(9)] = inst_58588);

(statearr_58650[(10)] = inst_58586);

(statearr_58650[(12)] = inst_58585);

return statearr_58650;
})();
var statearr_58651_58682 = state_58633__$1;
(statearr_58651_58682[(2)] = null);

(statearr_58651_58682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58634 === (17))){
var inst_58599 = (state_58633[(7)]);
var inst_58603 = cljs.core.chunk_first.call(null,inst_58599);
var inst_58604 = cljs.core.chunk_rest.call(null,inst_58599);
var inst_58605 = cljs.core.count.call(null,inst_58603);
var inst_58585 = inst_58604;
var inst_58586 = inst_58603;
var inst_58587 = inst_58605;
var inst_58588 = (0);
var state_58633__$1 = (function (){var statearr_58652 = state_58633;
(statearr_58652[(8)] = inst_58587);

(statearr_58652[(9)] = inst_58588);

(statearr_58652[(10)] = inst_58586);

(statearr_58652[(12)] = inst_58585);

return statearr_58652;
})();
var statearr_58653_58683 = state_58633__$1;
(statearr_58653_58683[(2)] = null);

(statearr_58653_58683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58634 === (3))){
var inst_58631 = (state_58633[(2)]);
var state_58633__$1 = state_58633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58633__$1,inst_58631);
} else {
if((state_val_58634 === (12))){
var inst_58619 = (state_58633[(2)]);
var state_58633__$1 = state_58633;
var statearr_58654_58684 = state_58633__$1;
(statearr_58654_58684[(2)] = inst_58619);

(statearr_58654_58684[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58634 === (2))){
var state_58633__$1 = state_58633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58633__$1,(4),in$);
} else {
if((state_val_58634 === (23))){
var inst_58627 = (state_58633[(2)]);
var state_58633__$1 = state_58633;
var statearr_58655_58685 = state_58633__$1;
(statearr_58655_58685[(2)] = inst_58627);

(statearr_58655_58685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58634 === (19))){
var inst_58614 = (state_58633[(2)]);
var state_58633__$1 = state_58633;
var statearr_58656_58686 = state_58633__$1;
(statearr_58656_58686[(2)] = inst_58614);

(statearr_58656_58686[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58634 === (11))){
var inst_58599 = (state_58633[(7)]);
var inst_58585 = (state_58633[(12)]);
var inst_58599__$1 = cljs.core.seq.call(null,inst_58585);
var state_58633__$1 = (function (){var statearr_58657 = state_58633;
(statearr_58657[(7)] = inst_58599__$1);

return statearr_58657;
})();
if(inst_58599__$1){
var statearr_58658_58687 = state_58633__$1;
(statearr_58658_58687[(1)] = (14));

} else {
var statearr_58659_58688 = state_58633__$1;
(statearr_58659_58688[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58634 === (9))){
var inst_58621 = (state_58633[(2)]);
var inst_58622 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_58633__$1 = (function (){var statearr_58660 = state_58633;
(statearr_58660[(15)] = inst_58621);

return statearr_58660;
})();
if(cljs.core.truth_(inst_58622)){
var statearr_58661_58689 = state_58633__$1;
(statearr_58661_58689[(1)] = (21));

} else {
var statearr_58662_58690 = state_58633__$1;
(statearr_58662_58690[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58634 === (5))){
var inst_58577 = cljs.core.async.close_BANG_.call(null,out);
var state_58633__$1 = state_58633;
var statearr_58663_58691 = state_58633__$1;
(statearr_58663_58691[(2)] = inst_58577);

(statearr_58663_58691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58634 === (14))){
var inst_58599 = (state_58633[(7)]);
var inst_58601 = cljs.core.chunked_seq_QMARK_.call(null,inst_58599);
var state_58633__$1 = state_58633;
if(inst_58601){
var statearr_58664_58692 = state_58633__$1;
(statearr_58664_58692[(1)] = (17));

} else {
var statearr_58665_58693 = state_58633__$1;
(statearr_58665_58693[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58634 === (16))){
var inst_58617 = (state_58633[(2)]);
var state_58633__$1 = state_58633;
var statearr_58666_58694 = state_58633__$1;
(statearr_58666_58694[(2)] = inst_58617);

(statearr_58666_58694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58634 === (10))){
var inst_58588 = (state_58633[(9)]);
var inst_58586 = (state_58633[(10)]);
var inst_58593 = cljs.core._nth.call(null,inst_58586,inst_58588);
var state_58633__$1 = state_58633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58633__$1,(13),out,inst_58593);
} else {
if((state_val_58634 === (18))){
var inst_58599 = (state_58633[(7)]);
var inst_58608 = cljs.core.first.call(null,inst_58599);
var state_58633__$1 = state_58633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58633__$1,(20),out,inst_58608);
} else {
if((state_val_58634 === (8))){
var inst_58587 = (state_58633[(8)]);
var inst_58588 = (state_58633[(9)]);
var inst_58590 = (inst_58588 < inst_58587);
var inst_58591 = inst_58590;
var state_58633__$1 = state_58633;
if(cljs.core.truth_(inst_58591)){
var statearr_58667_58695 = state_58633__$1;
(statearr_58667_58695[(1)] = (10));

} else {
var statearr_58668_58696 = state_58633__$1;
(statearr_58668_58696[(1)] = (11));

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
});})(c__55153__auto__))
;
return ((function (switch__54986__auto__,c__55153__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__54987__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__54987__auto____0 = (function (){
var statearr_58669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58669[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__54987__auto__);

(statearr_58669[(1)] = (1));

return statearr_58669;
});
var cljs$core$async$mapcat_STAR__$_state_machine__54987__auto____1 = (function (state_58633){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_58633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e58670){if((e58670 instanceof Object)){
var ex__54990__auto__ = e58670;
var statearr_58671_58697 = state_58633;
(statearr_58671_58697[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58698 = state_58633;
state_58633 = G__58698;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__54987__auto__ = function(state_58633){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__54987__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__54987__auto____1.call(this,state_58633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__54987__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__54987__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__54987__auto__;
})()
;})(switch__54986__auto__,c__55153__auto__))
})();
var state__55155__auto__ = (function (){var statearr_58672 = f__55154__auto__.call(null);
(statearr_58672[(6)] = c__55153__auto__);

return statearr_58672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(c__55153__auto__))
);

return c__55153__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__58700 = arguments.length;
switch (G__58700) {
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
var G__58703 = arguments.length;
switch (G__58703) {
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
var G__58706 = arguments.length;
switch (G__58706) {
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
var c__55153__auto___58753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55153__auto___58753,out){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (c__55153__auto___58753,out){
return (function (state_58730){
var state_val_58731 = (state_58730[(1)]);
if((state_val_58731 === (7))){
var inst_58725 = (state_58730[(2)]);
var state_58730__$1 = state_58730;
var statearr_58732_58754 = state_58730__$1;
(statearr_58732_58754[(2)] = inst_58725);

(statearr_58732_58754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58731 === (1))){
var inst_58707 = null;
var state_58730__$1 = (function (){var statearr_58733 = state_58730;
(statearr_58733[(7)] = inst_58707);

return statearr_58733;
})();
var statearr_58734_58755 = state_58730__$1;
(statearr_58734_58755[(2)] = null);

(statearr_58734_58755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58731 === (4))){
var inst_58710 = (state_58730[(8)]);
var inst_58710__$1 = (state_58730[(2)]);
var inst_58711 = (inst_58710__$1 == null);
var inst_58712 = cljs.core.not.call(null,inst_58711);
var state_58730__$1 = (function (){var statearr_58735 = state_58730;
(statearr_58735[(8)] = inst_58710__$1);

return statearr_58735;
})();
if(inst_58712){
var statearr_58736_58756 = state_58730__$1;
(statearr_58736_58756[(1)] = (5));

} else {
var statearr_58737_58757 = state_58730__$1;
(statearr_58737_58757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58731 === (6))){
var state_58730__$1 = state_58730;
var statearr_58738_58758 = state_58730__$1;
(statearr_58738_58758[(2)] = null);

(statearr_58738_58758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58731 === (3))){
var inst_58727 = (state_58730[(2)]);
var inst_58728 = cljs.core.async.close_BANG_.call(null,out);
var state_58730__$1 = (function (){var statearr_58739 = state_58730;
(statearr_58739[(9)] = inst_58727);

return statearr_58739;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58730__$1,inst_58728);
} else {
if((state_val_58731 === (2))){
var state_58730__$1 = state_58730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58730__$1,(4),ch);
} else {
if((state_val_58731 === (11))){
var inst_58710 = (state_58730[(8)]);
var inst_58719 = (state_58730[(2)]);
var inst_58707 = inst_58710;
var state_58730__$1 = (function (){var statearr_58740 = state_58730;
(statearr_58740[(10)] = inst_58719);

(statearr_58740[(7)] = inst_58707);

return statearr_58740;
})();
var statearr_58741_58759 = state_58730__$1;
(statearr_58741_58759[(2)] = null);

(statearr_58741_58759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58731 === (9))){
var inst_58710 = (state_58730[(8)]);
var state_58730__$1 = state_58730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58730__$1,(11),out,inst_58710);
} else {
if((state_val_58731 === (5))){
var inst_58710 = (state_58730[(8)]);
var inst_58707 = (state_58730[(7)]);
var inst_58714 = cljs.core._EQ_.call(null,inst_58710,inst_58707);
var state_58730__$1 = state_58730;
if(inst_58714){
var statearr_58743_58760 = state_58730__$1;
(statearr_58743_58760[(1)] = (8));

} else {
var statearr_58744_58761 = state_58730__$1;
(statearr_58744_58761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58731 === (10))){
var inst_58722 = (state_58730[(2)]);
var state_58730__$1 = state_58730;
var statearr_58745_58762 = state_58730__$1;
(statearr_58745_58762[(2)] = inst_58722);

(statearr_58745_58762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58731 === (8))){
var inst_58707 = (state_58730[(7)]);
var tmp58742 = inst_58707;
var inst_58707__$1 = tmp58742;
var state_58730__$1 = (function (){var statearr_58746 = state_58730;
(statearr_58746[(7)] = inst_58707__$1);

return statearr_58746;
})();
var statearr_58747_58763 = state_58730__$1;
(statearr_58747_58763[(2)] = null);

(statearr_58747_58763[(1)] = (2));


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
});})(c__55153__auto___58753,out))
;
return ((function (switch__54986__auto__,c__55153__auto___58753,out){
return (function() {
var cljs$core$async$state_machine__54987__auto__ = null;
var cljs$core$async$state_machine__54987__auto____0 = (function (){
var statearr_58748 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58748[(0)] = cljs$core$async$state_machine__54987__auto__);

(statearr_58748[(1)] = (1));

return statearr_58748;
});
var cljs$core$async$state_machine__54987__auto____1 = (function (state_58730){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_58730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e58749){if((e58749 instanceof Object)){
var ex__54990__auto__ = e58749;
var statearr_58750_58764 = state_58730;
(statearr_58750_58764[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58765 = state_58730;
state_58730 = G__58765;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
cljs$core$async$state_machine__54987__auto__ = function(state_58730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54987__auto____1.call(this,state_58730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54987__auto____0;
cljs$core$async$state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54987__auto____1;
return cljs$core$async$state_machine__54987__auto__;
})()
;})(switch__54986__auto__,c__55153__auto___58753,out))
})();
var state__55155__auto__ = (function (){var statearr_58751 = f__55154__auto__.call(null);
(statearr_58751[(6)] = c__55153__auto___58753);

return statearr_58751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(c__55153__auto___58753,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__58767 = arguments.length;
switch (G__58767) {
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
var c__55153__auto___58833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55153__auto___58833,out){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (c__55153__auto___58833,out){
return (function (state_58805){
var state_val_58806 = (state_58805[(1)]);
if((state_val_58806 === (7))){
var inst_58801 = (state_58805[(2)]);
var state_58805__$1 = state_58805;
var statearr_58807_58834 = state_58805__$1;
(statearr_58807_58834[(2)] = inst_58801);

(statearr_58807_58834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58806 === (1))){
var inst_58768 = (new Array(n));
var inst_58769 = inst_58768;
var inst_58770 = (0);
var state_58805__$1 = (function (){var statearr_58808 = state_58805;
(statearr_58808[(7)] = inst_58769);

(statearr_58808[(8)] = inst_58770);

return statearr_58808;
})();
var statearr_58809_58835 = state_58805__$1;
(statearr_58809_58835[(2)] = null);

(statearr_58809_58835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58806 === (4))){
var inst_58773 = (state_58805[(9)]);
var inst_58773__$1 = (state_58805[(2)]);
var inst_58774 = (inst_58773__$1 == null);
var inst_58775 = cljs.core.not.call(null,inst_58774);
var state_58805__$1 = (function (){var statearr_58810 = state_58805;
(statearr_58810[(9)] = inst_58773__$1);

return statearr_58810;
})();
if(inst_58775){
var statearr_58811_58836 = state_58805__$1;
(statearr_58811_58836[(1)] = (5));

} else {
var statearr_58812_58837 = state_58805__$1;
(statearr_58812_58837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58806 === (15))){
var inst_58795 = (state_58805[(2)]);
var state_58805__$1 = state_58805;
var statearr_58813_58838 = state_58805__$1;
(statearr_58813_58838[(2)] = inst_58795);

(statearr_58813_58838[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58806 === (13))){
var state_58805__$1 = state_58805;
var statearr_58814_58839 = state_58805__$1;
(statearr_58814_58839[(2)] = null);

(statearr_58814_58839[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58806 === (6))){
var inst_58770 = (state_58805[(8)]);
var inst_58791 = (inst_58770 > (0));
var state_58805__$1 = state_58805;
if(cljs.core.truth_(inst_58791)){
var statearr_58815_58840 = state_58805__$1;
(statearr_58815_58840[(1)] = (12));

} else {
var statearr_58816_58841 = state_58805__$1;
(statearr_58816_58841[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58806 === (3))){
var inst_58803 = (state_58805[(2)]);
var state_58805__$1 = state_58805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58805__$1,inst_58803);
} else {
if((state_val_58806 === (12))){
var inst_58769 = (state_58805[(7)]);
var inst_58793 = cljs.core.vec.call(null,inst_58769);
var state_58805__$1 = state_58805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58805__$1,(15),out,inst_58793);
} else {
if((state_val_58806 === (2))){
var state_58805__$1 = state_58805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58805__$1,(4),ch);
} else {
if((state_val_58806 === (11))){
var inst_58785 = (state_58805[(2)]);
var inst_58786 = (new Array(n));
var inst_58769 = inst_58786;
var inst_58770 = (0);
var state_58805__$1 = (function (){var statearr_58817 = state_58805;
(statearr_58817[(10)] = inst_58785);

(statearr_58817[(7)] = inst_58769);

(statearr_58817[(8)] = inst_58770);

return statearr_58817;
})();
var statearr_58818_58842 = state_58805__$1;
(statearr_58818_58842[(2)] = null);

(statearr_58818_58842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58806 === (9))){
var inst_58769 = (state_58805[(7)]);
var inst_58783 = cljs.core.vec.call(null,inst_58769);
var state_58805__$1 = state_58805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58805__$1,(11),out,inst_58783);
} else {
if((state_val_58806 === (5))){
var inst_58778 = (state_58805[(11)]);
var inst_58773 = (state_58805[(9)]);
var inst_58769 = (state_58805[(7)]);
var inst_58770 = (state_58805[(8)]);
var inst_58777 = (inst_58769[inst_58770] = inst_58773);
var inst_58778__$1 = (inst_58770 + (1));
var inst_58779 = (inst_58778__$1 < n);
var state_58805__$1 = (function (){var statearr_58819 = state_58805;
(statearr_58819[(12)] = inst_58777);

(statearr_58819[(11)] = inst_58778__$1);

return statearr_58819;
})();
if(cljs.core.truth_(inst_58779)){
var statearr_58820_58843 = state_58805__$1;
(statearr_58820_58843[(1)] = (8));

} else {
var statearr_58821_58844 = state_58805__$1;
(statearr_58821_58844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58806 === (14))){
var inst_58798 = (state_58805[(2)]);
var inst_58799 = cljs.core.async.close_BANG_.call(null,out);
var state_58805__$1 = (function (){var statearr_58823 = state_58805;
(statearr_58823[(13)] = inst_58798);

return statearr_58823;
})();
var statearr_58824_58845 = state_58805__$1;
(statearr_58824_58845[(2)] = inst_58799);

(statearr_58824_58845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58806 === (10))){
var inst_58789 = (state_58805[(2)]);
var state_58805__$1 = state_58805;
var statearr_58825_58846 = state_58805__$1;
(statearr_58825_58846[(2)] = inst_58789);

(statearr_58825_58846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58806 === (8))){
var inst_58778 = (state_58805[(11)]);
var inst_58769 = (state_58805[(7)]);
var tmp58822 = inst_58769;
var inst_58769__$1 = tmp58822;
var inst_58770 = inst_58778;
var state_58805__$1 = (function (){var statearr_58826 = state_58805;
(statearr_58826[(7)] = inst_58769__$1);

(statearr_58826[(8)] = inst_58770);

return statearr_58826;
})();
var statearr_58827_58847 = state_58805__$1;
(statearr_58827_58847[(2)] = null);

(statearr_58827_58847[(1)] = (2));


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
});})(c__55153__auto___58833,out))
;
return ((function (switch__54986__auto__,c__55153__auto___58833,out){
return (function() {
var cljs$core$async$state_machine__54987__auto__ = null;
var cljs$core$async$state_machine__54987__auto____0 = (function (){
var statearr_58828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58828[(0)] = cljs$core$async$state_machine__54987__auto__);

(statearr_58828[(1)] = (1));

return statearr_58828;
});
var cljs$core$async$state_machine__54987__auto____1 = (function (state_58805){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_58805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e58829){if((e58829 instanceof Object)){
var ex__54990__auto__ = e58829;
var statearr_58830_58848 = state_58805;
(statearr_58830_58848[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58849 = state_58805;
state_58805 = G__58849;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
cljs$core$async$state_machine__54987__auto__ = function(state_58805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54987__auto____1.call(this,state_58805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54987__auto____0;
cljs$core$async$state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54987__auto____1;
return cljs$core$async$state_machine__54987__auto__;
})()
;})(switch__54986__auto__,c__55153__auto___58833,out))
})();
var state__55155__auto__ = (function (){var statearr_58831 = f__55154__auto__.call(null);
(statearr_58831[(6)] = c__55153__auto___58833);

return statearr_58831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(c__55153__auto___58833,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__58851 = arguments.length;
switch (G__58851) {
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
var c__55153__auto___58921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55153__auto___58921,out){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (c__55153__auto___58921,out){
return (function (state_58893){
var state_val_58894 = (state_58893[(1)]);
if((state_val_58894 === (7))){
var inst_58889 = (state_58893[(2)]);
var state_58893__$1 = state_58893;
var statearr_58895_58922 = state_58893__$1;
(statearr_58895_58922[(2)] = inst_58889);

(statearr_58895_58922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58894 === (1))){
var inst_58852 = [];
var inst_58853 = inst_58852;
var inst_58854 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_58893__$1 = (function (){var statearr_58896 = state_58893;
(statearr_58896[(7)] = inst_58853);

(statearr_58896[(8)] = inst_58854);

return statearr_58896;
})();
var statearr_58897_58923 = state_58893__$1;
(statearr_58897_58923[(2)] = null);

(statearr_58897_58923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58894 === (4))){
var inst_58857 = (state_58893[(9)]);
var inst_58857__$1 = (state_58893[(2)]);
var inst_58858 = (inst_58857__$1 == null);
var inst_58859 = cljs.core.not.call(null,inst_58858);
var state_58893__$1 = (function (){var statearr_58898 = state_58893;
(statearr_58898[(9)] = inst_58857__$1);

return statearr_58898;
})();
if(inst_58859){
var statearr_58899_58924 = state_58893__$1;
(statearr_58899_58924[(1)] = (5));

} else {
var statearr_58900_58925 = state_58893__$1;
(statearr_58900_58925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58894 === (15))){
var inst_58883 = (state_58893[(2)]);
var state_58893__$1 = state_58893;
var statearr_58901_58926 = state_58893__$1;
(statearr_58901_58926[(2)] = inst_58883);

(statearr_58901_58926[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58894 === (13))){
var state_58893__$1 = state_58893;
var statearr_58902_58927 = state_58893__$1;
(statearr_58902_58927[(2)] = null);

(statearr_58902_58927[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58894 === (6))){
var inst_58853 = (state_58893[(7)]);
var inst_58878 = inst_58853.length;
var inst_58879 = (inst_58878 > (0));
var state_58893__$1 = state_58893;
if(cljs.core.truth_(inst_58879)){
var statearr_58903_58928 = state_58893__$1;
(statearr_58903_58928[(1)] = (12));

} else {
var statearr_58904_58929 = state_58893__$1;
(statearr_58904_58929[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58894 === (3))){
var inst_58891 = (state_58893[(2)]);
var state_58893__$1 = state_58893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58893__$1,inst_58891);
} else {
if((state_val_58894 === (12))){
var inst_58853 = (state_58893[(7)]);
var inst_58881 = cljs.core.vec.call(null,inst_58853);
var state_58893__$1 = state_58893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58893__$1,(15),out,inst_58881);
} else {
if((state_val_58894 === (2))){
var state_58893__$1 = state_58893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58893__$1,(4),ch);
} else {
if((state_val_58894 === (11))){
var inst_58861 = (state_58893[(10)]);
var inst_58857 = (state_58893[(9)]);
var inst_58871 = (state_58893[(2)]);
var inst_58872 = [];
var inst_58873 = inst_58872.push(inst_58857);
var inst_58853 = inst_58872;
var inst_58854 = inst_58861;
var state_58893__$1 = (function (){var statearr_58905 = state_58893;
(statearr_58905[(11)] = inst_58873);

(statearr_58905[(7)] = inst_58853);

(statearr_58905[(8)] = inst_58854);

(statearr_58905[(12)] = inst_58871);

return statearr_58905;
})();
var statearr_58906_58930 = state_58893__$1;
(statearr_58906_58930[(2)] = null);

(statearr_58906_58930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58894 === (9))){
var inst_58853 = (state_58893[(7)]);
var inst_58869 = cljs.core.vec.call(null,inst_58853);
var state_58893__$1 = state_58893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58893__$1,(11),out,inst_58869);
} else {
if((state_val_58894 === (5))){
var inst_58861 = (state_58893[(10)]);
var inst_58854 = (state_58893[(8)]);
var inst_58857 = (state_58893[(9)]);
var inst_58861__$1 = f.call(null,inst_58857);
var inst_58862 = cljs.core._EQ_.call(null,inst_58861__$1,inst_58854);
var inst_58863 = cljs.core.keyword_identical_QMARK_.call(null,inst_58854,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_58864 = ((inst_58862) || (inst_58863));
var state_58893__$1 = (function (){var statearr_58907 = state_58893;
(statearr_58907[(10)] = inst_58861__$1);

return statearr_58907;
})();
if(cljs.core.truth_(inst_58864)){
var statearr_58908_58931 = state_58893__$1;
(statearr_58908_58931[(1)] = (8));

} else {
var statearr_58909_58932 = state_58893__$1;
(statearr_58909_58932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58894 === (14))){
var inst_58886 = (state_58893[(2)]);
var inst_58887 = cljs.core.async.close_BANG_.call(null,out);
var state_58893__$1 = (function (){var statearr_58911 = state_58893;
(statearr_58911[(13)] = inst_58886);

return statearr_58911;
})();
var statearr_58912_58933 = state_58893__$1;
(statearr_58912_58933[(2)] = inst_58887);

(statearr_58912_58933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58894 === (10))){
var inst_58876 = (state_58893[(2)]);
var state_58893__$1 = state_58893;
var statearr_58913_58934 = state_58893__$1;
(statearr_58913_58934[(2)] = inst_58876);

(statearr_58913_58934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58894 === (8))){
var inst_58861 = (state_58893[(10)]);
var inst_58853 = (state_58893[(7)]);
var inst_58857 = (state_58893[(9)]);
var inst_58866 = inst_58853.push(inst_58857);
var tmp58910 = inst_58853;
var inst_58853__$1 = tmp58910;
var inst_58854 = inst_58861;
var state_58893__$1 = (function (){var statearr_58914 = state_58893;
(statearr_58914[(7)] = inst_58853__$1);

(statearr_58914[(8)] = inst_58854);

(statearr_58914[(14)] = inst_58866);

return statearr_58914;
})();
var statearr_58915_58935 = state_58893__$1;
(statearr_58915_58935[(2)] = null);

(statearr_58915_58935[(1)] = (2));


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
});})(c__55153__auto___58921,out))
;
return ((function (switch__54986__auto__,c__55153__auto___58921,out){
return (function() {
var cljs$core$async$state_machine__54987__auto__ = null;
var cljs$core$async$state_machine__54987__auto____0 = (function (){
var statearr_58916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58916[(0)] = cljs$core$async$state_machine__54987__auto__);

(statearr_58916[(1)] = (1));

return statearr_58916;
});
var cljs$core$async$state_machine__54987__auto____1 = (function (state_58893){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_58893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e58917){if((e58917 instanceof Object)){
var ex__54990__auto__ = e58917;
var statearr_58918_58936 = state_58893;
(statearr_58918_58936[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58937 = state_58893;
state_58893 = G__58937;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
cljs$core$async$state_machine__54987__auto__ = function(state_58893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54987__auto____1.call(this,state_58893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54987__auto____0;
cljs$core$async$state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54987__auto____1;
return cljs$core$async$state_machine__54987__auto__;
})()
;})(switch__54986__auto__,c__55153__auto___58921,out))
})();
var state__55155__auto__ = (function (){var statearr_58919 = f__55154__auto__.call(null);
(statearr_58919[(6)] = c__55153__auto___58921);

return statearr_58919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(c__55153__auto___58921,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1575465441882
