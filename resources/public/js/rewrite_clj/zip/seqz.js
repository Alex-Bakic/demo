// Compiled by ClojureScript 1.10.439 {}
goog.provide('rewrite_clj.zip.seqz');
goog.require('cljs.core');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.editz');
goog.require('rewrite_clj.zip.findz');
goog.require('rewrite_clj.zip.insert');
goog.require('rewrite_clj.zip.move');
goog.require('clojure.zip');
rewrite_clj.zip.seqz.seq_QMARK_ = (function rewrite_clj$zip$seqz$seq_QMARK_(zloc){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"list","list",765357683),null,new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"map","map",1371690461),null,new cljs.core.Keyword(null,"forms","forms",2045992350),null], null), null),rewrite_clj.zip.base.tag.call(null,zloc));
});
rewrite_clj.zip.seqz.list_QMARK_ = (function rewrite_clj$zip$seqz$list_QMARK_(zloc){
return cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,zloc),new cljs.core.Keyword(null,"list","list",765357683));
});
rewrite_clj.zip.seqz.vector_QMARK_ = (function rewrite_clj$zip$seqz$vector_QMARK_(zloc){
return cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,zloc),new cljs.core.Keyword(null,"vector","vector",1902966158));
});
rewrite_clj.zip.seqz.set_QMARK_ = (function rewrite_clj$zip$seqz$set_QMARK_(zloc){
return cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,zloc),new cljs.core.Keyword(null,"set","set",304602554));
});
rewrite_clj.zip.seqz.map_QMARK_ = (function rewrite_clj$zip$seqz$map_QMARK_(zloc){
return cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,zloc),new cljs.core.Keyword(null,"map","map",1371690461));
});
rewrite_clj.zip.seqz.map_seq = (function rewrite_clj$zip$seqz$map_seq(f,zloc){
if(rewrite_clj.zip.seqz.seq_QMARK_.call(null,zloc)){
} else {
throw (new Error("Assert failed: (seq? zloc)"));
}

var temp__5718__auto__ = rewrite_clj.zip.move.down.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var n0 = temp__5718__auto__;
var G__45738 = f.call(null,n0);
var G__45738__$1 = (((G__45738 == null))?null:cljs.core.iterate.call(null,((function (G__45738,n0,temp__5718__auto__){
return (function (loc){
var temp__5718__auto____$1 = rewrite_clj.zip.move.right.call(null,loc);
if(cljs.core.truth_(temp__5718__auto____$1)){
var n = temp__5718__auto____$1;
return f.call(null,n);
} else {
return null;
}
});})(G__45738,n0,temp__5718__auto__))
,G__45738));
var G__45738__$2 = (((G__45738__$1 == null))?null:cljs.core.take_while.call(null,cljs.core.identity,G__45738__$1));
var G__45738__$3 = (((G__45738__$2 == null))?null:cljs.core.last.call(null,G__45738__$2));
if((G__45738__$3 == null)){
return null;
} else {
return rewrite_clj.zip.move.up.call(null,G__45738__$3);
}
} else {
return zloc;
}
});
/**
 * Apply function to all value nodes of the given map node.
 */
rewrite_clj.zip.seqz.map_vals = (function rewrite_clj$zip$seqz$map_vals(f,zloc){
if(rewrite_clj.zip.seqz.map_QMARK_.call(null,zloc)){
} else {
throw (new Error("Assert failed: (map? zloc)"));
}

var loc = rewrite_clj.zip.move.down.call(null,zloc);
var parent = zloc;
while(true){
if(cljs.core.not.call(null,(function (){var and__4036__auto__ = loc;
if(cljs.core.truth_(and__4036__auto__)){
return clojure.zip.node.call(null,loc);
} else {
return and__4036__auto__;
}
})())){
return parent;
} else {
var temp__5718__auto__ = rewrite_clj.zip.move.right.call(null,loc);
if(cljs.core.truth_(temp__5718__auto__)){
var v0 = temp__5718__auto__;
var temp__5718__auto____$1 = f.call(null,v0);
if(cljs.core.truth_(temp__5718__auto____$1)){
var v = temp__5718__auto____$1;
var G__45739 = rewrite_clj.zip.move.right.call(null,v);
var G__45740 = rewrite_clj.zip.move.up.call(null,v);
loc = G__45739;
parent = G__45740;
continue;
} else {
var G__45741 = rewrite_clj.zip.move.right.call(null,v0);
var G__45742 = parent;
loc = G__45741;
parent = G__45742;
continue;
}
} else {
return parent;
}
}
break;
}
});
/**
 * Apply function to all key nodes of the given map node.
 */
rewrite_clj.zip.seqz.map_keys = (function rewrite_clj$zip$seqz$map_keys(f,zloc){
if(rewrite_clj.zip.seqz.map_QMARK_.call(null,zloc)){
} else {
throw (new Error("Assert failed: (map? zloc)"));
}

var loc = rewrite_clj.zip.move.down.call(null,zloc);
var parent = zloc;
while(true){
if(cljs.core.not.call(null,(function (){var and__4036__auto__ = loc;
if(cljs.core.truth_(and__4036__auto__)){
return clojure.zip.node.call(null,loc);
} else {
return and__4036__auto__;
}
})())){
return parent;
} else {
var temp__5718__auto__ = f.call(null,loc);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
var G__45743 = rewrite_clj.zip.move.right.call(null,rewrite_clj.zip.move.right.call(null,v));
var G__45744 = rewrite_clj.zip.move.up.call(null,v);
loc = G__45743;
parent = G__45744;
continue;
} else {
var G__45745 = rewrite_clj.zip.move.right.call(null,rewrite_clj.zip.move.right.call(null,loc));
var G__45746 = parent;
loc = G__45745;
parent = G__45746;
continue;
}
}
break;
}
});
/**
 * Apply function to all value nodes in the given seq node. Iterates over
 * value nodes of maps but over each element of a seq.
 */
rewrite_clj.zip.seqz.map = (function rewrite_clj$zip$seqz$map(f,zloc){
if(rewrite_clj.zip.seqz.seq_QMARK_.call(null,zloc)){
} else {
throw (new Error("Assert failed: (seq? zloc)"));
}

if(rewrite_clj.zip.seqz.map_QMARK_.call(null,zloc)){
return rewrite_clj.zip.seqz.map_vals.call(null,f,zloc);
} else {
return rewrite_clj.zip.seqz.map_seq.call(null,f,zloc);
}
});
/**
 * If a map is given, get element with the given key; if a seq is given, get nth element.
 */
rewrite_clj.zip.seqz.get = (function rewrite_clj$zip$seqz$get(zloc,k){
if(((rewrite_clj.zip.seqz.map_QMARK_.call(null,zloc)) || (((rewrite_clj.zip.seqz.seq_QMARK_.call(null,zloc)) && (cljs.core.integer_QMARK_.call(null,k)))))){
} else {
throw (new Error("Assert failed: (or (map? zloc) (and (seq? zloc) (integer? k)))"));
}

if(rewrite_clj.zip.seqz.map_QMARK_.call(null,zloc)){
var G__45747 = zloc;
var G__45747__$1 = (((G__45747 == null))?null:rewrite_clj.zip.move.down.call(null,G__45747));
var G__45747__$2 = (((G__45747__$1 == null))?null:rewrite_clj.zip.findz.find_value.call(null,G__45747__$1,k));
if((G__45747__$2 == null)){
return null;
} else {
return rewrite_clj.zip.move.right.call(null,G__45747__$2);
}
} else {
return cljs.core.nth.call(null,(function (){var G__45748 = rewrite_clj.zip.move.down.call(null,zloc);
var G__45748__$1 = (((G__45748 == null))?null:cljs.core.iterate.call(null,rewrite_clj.zip.move.right,G__45748));
if((G__45748__$1 == null)){
return null;
} else {
return cljs.core.take_while.call(null,cljs.core.identity,G__45748__$1);
}
})(),k);
}
});
/**
 * Set map/seq element to the given value.
 */
rewrite_clj.zip.seqz.assoc = (function rewrite_clj$zip$seqz$assoc(zloc,k,v){
var temp__5718__auto__ = rewrite_clj.zip.seqz.get.call(null,zloc,k);
if(cljs.core.truth_(temp__5718__auto__)){
var vloc = temp__5718__auto__;
return rewrite_clj.zip.move.up.call(null,rewrite_clj.zip.editz.replace.call(null,vloc,v));
} else {
if(rewrite_clj.zip.seqz.map_QMARK_.call(null,zloc)){
return rewrite_clj.zip.insert.append_child.call(null,rewrite_clj.zip.insert.append_child.call(null,zloc,k),v);
} else {
throw (new Error(["index out of bounds: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));
}
}
});

//# sourceMappingURL=seqz.js.map?rel=1575465428170
