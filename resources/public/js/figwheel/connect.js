// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__42796__delegate = function (x__42780__auto__){
if(cljs.core.truth_(demo.core.init)){
return cljs.core.apply.call(null,demo.core.init,x__42780__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("demo.core/init"),"' is missing"].join(''));
}
};
var G__42796 = function (var_args){
var x__42780__auto__ = null;
if (arguments.length > 0) {
var G__42797__i = 0, G__42797__a = new Array(arguments.length -  0);
while (G__42797__i < G__42797__a.length) {G__42797__a[G__42797__i] = arguments[G__42797__i + 0]; ++G__42797__i;}
  x__42780__auto__ = new cljs.core.IndexedSeq(G__42797__a,0,null);
} 
return G__42796__delegate.call(this,x__42780__auto__);};
G__42796.cljs$lang$maxFixedArity = 0;
G__42796.cljs$lang$applyTo = (function (arglist__42798){
var x__42780__auto__ = cljs.core.seq(arglist__42798);
return G__42796__delegate(x__42780__auto__);
});
G__42796.cljs$core$IFn$_invoke$arity$variadic = G__42796__delegate;
return G__42796;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"client",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1575052466215
