// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__61926__delegate = function (x__61905__auto__){
if(cljs.core.truth_(demo.core.init)){
return cljs.core.apply.call(null,demo.core.init,x__61905__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("demo.core/init"),"' is missing"].join(''));
}
};
var G__61926 = function (var_args){
var x__61905__auto__ = null;
if (arguments.length > 0) {
var G__61927__i = 0, G__61927__a = new Array(arguments.length -  0);
while (G__61927__i < G__61927__a.length) {G__61927__a[G__61927__i] = arguments[G__61927__i + 0]; ++G__61927__i;}
  x__61905__auto__ = new cljs.core.IndexedSeq(G__61927__a,0,null);
} 
return G__61926__delegate.call(this,x__61905__auto__);};
G__61926.cljs$lang$maxFixedArity = 0;
G__61926.cljs$lang$applyTo = (function (arglist__61928){
var x__61905__auto__ = cljs.core.seq(arglist__61928);
return G__61926__delegate(x__61905__auto__);
});
G__61926.cljs$core$IFn$_invoke$arity$variadic = G__61926__delegate;
return G__61926;
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

//# sourceMappingURL=connect.js.map?rel=1575465443881
