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
var G__37093__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__37093 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37094__i = 0, G__37094__a = new Array(arguments.length -  0);
while (G__37094__i < G__37094__a.length) {G__37094__a[G__37094__i] = arguments[G__37094__i + 0]; ++G__37094__i;}
  args = new cljs.core.IndexedSeq(G__37094__a,0,null);
} 
return G__37093__delegate.call(this,args);};
G__37093.cljs$lang$maxFixedArity = 0;
G__37093.cljs$lang$applyTo = (function (arglist__37095){
var args = cljs.core.seq(arglist__37095);
return G__37093__delegate(args);
});
G__37093.cljs$core$IFn$_invoke$arity$variadic = G__37093__delegate;
return G__37093;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__37096__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__37096 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37097__i = 0, G__37097__a = new Array(arguments.length -  0);
while (G__37097__i < G__37097__a.length) {G__37097__a[G__37097__i] = arguments[G__37097__i + 0]; ++G__37097__i;}
  args = new cljs.core.IndexedSeq(G__37097__a,0,null);
} 
return G__37096__delegate.call(this,args);};
G__37096.cljs$lang$maxFixedArity = 0;
G__37096.cljs$lang$applyTo = (function (arglist__37098){
var args = cljs.core.seq(arglist__37098);
return G__37096__delegate(args);
});
G__37096.cljs$core$IFn$_invoke$arity$variadic = G__37096__delegate;
return G__37096;
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

//# sourceMappingURL=debug.js.map?rel=1575052409441
