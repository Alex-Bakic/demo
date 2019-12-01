// Compiled by ClojureScript 1.10.439 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__33378__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__33378 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33379__i = 0, G__33379__a = new Array(arguments.length -  0);
while (G__33379__i < G__33379__a.length) {G__33379__a[G__33379__i] = arguments[G__33379__i + 0]; ++G__33379__i;}
  args = new cljs.core.IndexedSeq(G__33379__a,0,null);
} 
return G__33378__delegate.call(this,args);};
G__33378.cljs$lang$maxFixedArity = 0;
G__33378.cljs$lang$applyTo = (function (arglist__33380){
var args = cljs.core.seq(arglist__33380);
return G__33378__delegate(args);
});
G__33378.cljs$core$IFn$_invoke$arity$variadic = G__33378__delegate;
return G__33378;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__33381__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__33381 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33382__i = 0, G__33382__a = new Array(arguments.length -  0);
while (G__33382__i < G__33382__a.length) {G__33382__a[G__33382__i] = arguments[G__33382__i + 0]; ++G__33382__i;}
  args = new cljs.core.IndexedSeq(G__33382__a,0,null);
} 
return G__33381__delegate.call(this,args);};
G__33381.cljs$lang$maxFixedArity = 0;
G__33381.cljs$lang$applyTo = (function (arglist__33383){
var args = cljs.core.seq(arglist__33383);
return G__33381__delegate(args);
});
G__33381.cljs$core$IFn$_invoke$arity$variadic = G__33381__delegate;
return G__33381;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1575052109529
