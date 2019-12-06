// Compiled by ClojureScript 1.10.439 {}
goog.provide('mranderson048.reagent.v0v7v0.reagent.debug');
goog.require('cljs.core');
mranderson048.reagent.v0v7v0.reagent.debug.has_console = (typeof console !== 'undefined');
mranderson048.reagent.v0v7v0.reagent.debug.tracking = false;
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0 !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.debug !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.debug.warnings !== 'undefined')){
} else {
mranderson048.reagent.v0v7v0.reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0 !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.debug !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.debug.track_console !== 'undefined')){
} else {
mranderson048.reagent.v0v7v0.reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__41634__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__41634 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41635__i = 0, G__41635__a = new Array(arguments.length -  0);
while (G__41635__i < G__41635__a.length) {G__41635__a[G__41635__i] = arguments[G__41635__i + 0]; ++G__41635__i;}
  args = new cljs.core.IndexedSeq(G__41635__a,0,null);
} 
return G__41634__delegate.call(this,args);};
G__41634.cljs$lang$maxFixedArity = 0;
G__41634.cljs$lang$applyTo = (function (arglist__41636){
var args = cljs.core.seq(arglist__41636);
return G__41634__delegate(args);
});
G__41634.cljs$core$IFn$_invoke$arity$variadic = G__41634__delegate;
return G__41634;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__41637__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__41637 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41638__i = 0, G__41638__a = new Array(arguments.length -  0);
while (G__41638__i < G__41638__a.length) {G__41638__a[G__41638__i] = arguments[G__41638__i + 0]; ++G__41638__i;}
  args = new cljs.core.IndexedSeq(G__41638__a,0,null);
} 
return G__41637__delegate.call(this,args);};
G__41637.cljs$lang$maxFixedArity = 0;
G__41637.cljs$lang$applyTo = (function (arglist__41639){
var args = cljs.core.seq(arglist__41639);
return G__41637__delegate(args);
});
G__41637.cljs$core$IFn$_invoke$arity$variadic = G__41637__delegate;
return G__41637;
})()
;})(o))
;

return o;
})();
}
mranderson048.reagent.v0v7v0.reagent.debug.track_warnings = (function mranderson048$reagent$v0v7v0$reagent$debug$track_warnings(f){
mranderson048.reagent.v0v7v0.reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,null);

mranderson048.reagent.v0v7v0.reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1575465420896
