// Compiled by ClojureScript 1.10.439 {}
goog.provide('mranderson048.garden.v1v3v3.garden.core');
goog.require('cljs.core');
goog.require('mranderson048.garden.v1v3v3.garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
mranderson048.garden.v1v3v3.garden.core.css = (function mranderson048$garden$v1v3v3$garden$core$css(var_args){
var args__4647__auto__ = [];
var len__4641__auto___51563 = arguments.length;
var i__4642__auto___51564 = (0);
while(true){
if((i__4642__auto___51564 < len__4641__auto___51563)){
args__4647__auto__.push((arguments[i__4642__auto___51564]));

var G__51565 = (i__4642__auto___51564 + (1));
i__4642__auto___51564 = G__51565;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

mranderson048.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,mranderson048.garden.v1v3v3.garden.compiler.compile_css,rules);
});

mranderson048.garden.v1v3v3.garden.core.css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.core.css.cljs$lang$applyTo = (function (seq51562){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51562));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
mranderson048.garden.v1v3v3.garden.core.style = (function mranderson048$garden$v1v3v3$garden$core$style(var_args){
var args__4647__auto__ = [];
var len__4641__auto___51567 = arguments.length;
var i__4642__auto___51568 = (0);
while(true){
if((i__4642__auto___51568 < len__4641__auto___51567)){
args__4647__auto__.push((arguments[i__4642__auto___51568]));

var G__51569 = (i__4642__auto___51568 + (1));
i__4642__auto___51568 = G__51569;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

mranderson048.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return mranderson048.garden.v1v3v3.garden.compiler.compile_style.call(null,maps);
});

mranderson048.garden.v1v3v3.garden.core.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.core.style.cljs$lang$applyTo = (function (seq51566){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51566));
});


//# sourceMappingURL=core.js.map?rel=1575465436513
