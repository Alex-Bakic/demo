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
var G__33376__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__33376 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33377__i = 0, G__33377__a = new Array(arguments.length -  0);
while (G__33377__i < G__33377__a.length) {G__33377__a[G__33377__i] = arguments[G__33377__i + 0]; ++G__33377__i;}
  args = new cljs.core.IndexedSeq(G__33377__a,0,null);
} 
return G__33376__delegate.call(this,args);};
G__33376.cljs$lang$maxFixedArity = 0;
G__33376.cljs$lang$applyTo = (function (arglist__33378){
var args = cljs.core.seq(arglist__33378);
return G__33376__delegate(args);
});
G__33376.cljs$core$IFn$_invoke$arity$variadic = G__33376__delegate;
return G__33376;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__33379__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__33379 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33380__i = 0, G__33380__a = new Array(arguments.length -  0);
while (G__33380__i < G__33380__a.length) {G__33380__a[G__33380__i] = arguments[G__33380__i + 0]; ++G__33380__i;}
  args = new cljs.core.IndexedSeq(G__33380__a,0,null);
} 
return G__33379__delegate.call(this,args);};
G__33379.cljs$lang$maxFixedArity = 0;
G__33379.cljs$lang$applyTo = (function (arglist__33381){
var args = cljs.core.seq(arglist__33381);
return G__33379__delegate(args);
});
G__33379.cljs$core$IFn$_invoke$arity$variadic = G__33379__delegate;
return G__33379;
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

//# sourceMappingURL=debug.js.map?rel=1575465409475
