// Compiled by ClojureScript 1.10.439 {}
goog.provide('cider.nrepl.inlined_deps.suitable.v0v2v13.suitable.js_introspection');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.object');
cider.nrepl.inlined_deps.suitable.v0v2v13.suitable.js_introspection.own_property_descriptors = (cljs.core.truth_("getOwnPropertyDescriptors" in Object)?(function (obj){
return Object.getOwnPropertyDescriptors(obj);
}):(function (obj){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,Object.getOwnPropertyDescriptor(obj,key)], null);
}),Object.getOwnPropertyNames(obj))));
}));
/**
 * 
 */
cider.nrepl.inlined_deps.suitable.v0v2v13.suitable.js_introspection.properties_by_prototype = (function cider$nrepl$inlined_deps$suitable$v0v2v13$suitable$js_introspection$properties_by_prototype(obj){
var obj__$1 = obj;
var protos = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(obj__$1)){
var G__35648 = Object.getPrototypeOf(obj__$1);
var G__35649 = cljs.core.conj.call(null,protos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"props","props",453281727),cider.nrepl.inlined_deps.suitable.v0v2v13.suitable.js_introspection.own_property_descriptors.call(null,obj__$1)], null));
obj__$1 = G__35648;
protos = G__35649;
continue;
} else {
return protos;
}
break;
}
});
cider.nrepl.inlined_deps.suitable.v0v2v13.suitable.js_introspection.property_names_and_types = (function cider$nrepl$inlined_deps$suitable$v0v2v13$suitable$js_introspection$property_names_and_types(var_args){
var G__35651 = arguments.length;
switch (G__35651) {
case 1:
return cider.nrepl.inlined_deps.suitable.v0v2v13.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cider.nrepl.inlined_deps.suitable.v0v2v13.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cider.nrepl.inlined_deps.suitable.v0v2v13.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1 = (function (js_obj){
return cider.nrepl.inlined_deps.suitable.v0v2v13.suitable.js_introspection.property_names_and_types.call(null,js_obj,null);
});

cider.nrepl.inlined_deps.suitable.v0v2v13.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,prefix){
var seen = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__4434__auto__ = ((function (seen){
return (function cider$nrepl$inlined_deps$suitable$v0v2v13$suitable$js_introspection$iter__35652(s__35653){
return (new cljs.core.LazySeq(null,((function (seen){
return (function (){
var s__35653__$1 = s__35653;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__35653__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__35658 = cljs.core.first.call(null,xs__6277__auto__);
var i = cljs.core.nth.call(null,vec__35658,(0),null);
var map__35661 = cljs.core.nth.call(null,vec__35658,(1),null);
var map__35661__$1 = (((((!((map__35661 == null))))?(((((map__35661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35661):map__35661);
var obj = cljs.core.get.call(null,map__35661__$1,new cljs.core.Keyword(null,"obj","obj",981763962));
var props = cljs.core.get.call(null,map__35661__$1,new cljs.core.Keyword(null,"props","props",453281727));
var iterys__4430__auto__ = ((function (s__35653__$1,vec__35658,i,map__35661,map__35661__$1,obj,props,xs__6277__auto__,temp__5720__auto__,seen){
return (function cider$nrepl$inlined_deps$suitable$v0v2v13$suitable$js_introspection$iter__35652_$_iter__35654(s__35655){
return (new cljs.core.LazySeq(null,((function (s__35653__$1,vec__35658,i,map__35661,map__35661__$1,obj,props,xs__6277__auto__,temp__5720__auto__,seen){
return (function (){
var s__35655__$1 = s__35655;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__35655__$1);
if(temp__5720__auto____$1){
var s__35655__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35655__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__35655__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__35657 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__35656 = (0);
while(true){
if((i__35656 < size__4433__auto__)){
var key = cljs.core._nth.call(null,c__4432__auto__,i__35656);
if(((cljs.core.not.call(null,cljs.core.get.call(null,seen,key))) && (((cljs.core.empty_QMARK_.call(null,prefix)) || (clojure.string.starts_with_QMARK_.call(null,key,prefix)))))){
cljs.core.chunk_append.call(null,b__35657,(function (){var prop = goog.object.get(props,key);
cljs.core.conj_BANG_.call(null,seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5718__auto__ = (function (){var or__4047__auto__ = goog.object.get(prop,"value");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.apply.call(null,goog.object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
if(cljs.core.fn_QMARK_.call(null,value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e35663){if((e35663 instanceof Error)){
var e = e35663;
return "var";
} else {
throw e35663;

}
}})()], null);
})());

var G__35666 = (i__35656 + (1));
i__35656 = G__35666;
continue;
} else {
var G__35667 = (i__35656 + (1));
i__35656 = G__35667;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35657),cider$nrepl$inlined_deps$suitable$v0v2v13$suitable$js_introspection$iter__35652_$_iter__35654.call(null,cljs.core.chunk_rest.call(null,s__35655__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35657),null);
}
} else {
var key = cljs.core.first.call(null,s__35655__$2);
if(((cljs.core.not.call(null,cljs.core.get.call(null,seen,key))) && (((cljs.core.empty_QMARK_.call(null,prefix)) || (clojure.string.starts_with_QMARK_.call(null,key,prefix)))))){
return cljs.core.cons.call(null,(function (){var prop = goog.object.get(props,key);
cljs.core.conj_BANG_.call(null,seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5718__auto__ = (function (){var or__4047__auto__ = goog.object.get(prop,"value");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.apply.call(null,goog.object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
if(cljs.core.fn_QMARK_.call(null,value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e35664){if((e35664 instanceof Error)){
var e = e35664;
return "var";
} else {
throw e35664;

}
}})()], null);
})(),cider$nrepl$inlined_deps$suitable$v0v2v13$suitable$js_introspection$iter__35652_$_iter__35654.call(null,cljs.core.rest.call(null,s__35655__$2)));
} else {
var G__35668 = cljs.core.rest.call(null,s__35655__$2);
s__35655__$1 = G__35668;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__35653__$1,vec__35658,i,map__35661,map__35661__$1,obj,props,xs__6277__auto__,temp__5720__auto__,seen))
,null,null));
});})(s__35653__$1,vec__35658,i,map__35661,map__35661__$1,obj,props,xs__6277__auto__,temp__5720__auto__,seen))
;
var fs__4431__auto__ = cljs.core.seq.call(null,iterys__4430__auto__.call(null,cljs.core.js_keys.call(null,props)));
if(fs__4431__auto__){
return cljs.core.concat.call(null,fs__4431__auto__,cider$nrepl$inlined_deps$suitable$v0v2v13$suitable$js_introspection$iter__35652.call(null,cljs.core.rest.call(null,s__35653__$1)));
} else {
var G__35669 = cljs.core.rest.call(null,s__35653__$1);
s__35653__$1 = G__35669;
continue;
}
} else {
return null;
}
break;
}
});})(seen))
,null,null));
});})(seen))
;
return iter__4434__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cider.nrepl.inlined_deps.suitable.v0v2v13.suitable.js_introspection.properties_by_prototype.call(null,js_obj)));
});

cider.nrepl.inlined_deps.suitable.v0v2v13.suitable.js_introspection.property_names_and_types.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=js_introspection.js.map?rel=1575052768196
