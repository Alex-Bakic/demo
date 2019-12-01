// Compiled by ClojureScript 1.10.439 {}
goog.provide('rewrite_clj.zip.base');
goog.require('cljs.core');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.zip.whitespace');
goog.require('clojure.zip');
/**
 * Create zipper over the given Clojure/EDN node.
 */
rewrite_clj.zip.base.edn_STAR_ = (function rewrite_clj$zip$base$edn_STAR_(node){
return clojure.zip.zipper.call(null,rewrite_clj.node.inner_QMARK_,cljs.core.comp.call(null,cljs.core.seq,rewrite_clj.node.children),rewrite_clj.node.replace_children,node);
});
/**
 * Create zipper over the given Clojure/EDN node and move
 * to the first non-whitespace/non-comment child.
 */
rewrite_clj.zip.base.edn = (function rewrite_clj$zip$base$edn(node){
while(true){
if(cljs.core._EQ_.call(null,rewrite_clj.node.tag.call(null,node),new cljs.core.Keyword(null,"forms","forms",2045992350))){
var top = rewrite_clj.zip.base.edn_STAR_.call(null,node);
var or__4047__auto__ = rewrite_clj.zip.whitespace.skip_whitespace.call(null,clojure.zip.down.call(null,top));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return top;
}
} else {
var G__38520 = rewrite_clj.node.forms_node.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null));
node = G__38520;
continue;
}
break;
}
});
/**
 * Get tag of node at the current zipper location.
 */
rewrite_clj.zip.base.tag = (function rewrite_clj$zip$base$tag(zloc){
var G__38521 = zloc;
var G__38521__$1 = (((G__38521 == null))?null:clojure.zip.node.call(null,G__38521));
if((G__38521__$1 == null)){
return null;
} else {
return rewrite_clj.node.tag.call(null,G__38521__$1);
}
});
/**
 * Get sexpr represented by the given node.
 */
rewrite_clj.zip.base.sexpr = (function rewrite_clj$zip$base$sexpr(zloc){
var G__38522 = zloc;
var G__38522__$1 = (((G__38522 == null))?null:clojure.zip.node.call(null,G__38522));
if((G__38522__$1 == null)){
return null;
} else {
return rewrite_clj.node.sexpr.call(null,G__38522__$1);
}
});
/**
 * Get children as s-expressions.
 */
rewrite_clj.zip.base.child_sexprs = (function rewrite_clj$zip$base$child_sexprs(zloc){
var G__38523 = zloc;
var G__38523__$1 = (((G__38523 == null))?null:clojure.zip.node.call(null,G__38523));
if((G__38523__$1 == null)){
return null;
} else {
return rewrite_clj.node.child_sexprs.call(null,G__38523__$1);
}
});
/**
 * Get length of printable string for the given zipper location.
 */
rewrite_clj.zip.base.length = (function rewrite_clj$zip$base$length(zloc){
var or__4047__auto__ = (function (){var G__38525 = zloc;
var G__38525__$1 = (((G__38525 == null))?null:clojure.zip.node.call(null,G__38525));
if((G__38525__$1 == null)){
return null;
} else {
return rewrite_clj.node.length.call(null,G__38525__$1);
}
})();
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
});
/**
 * Create zipper from String.
 */
rewrite_clj.zip.base.of_string = (function rewrite_clj$zip$base$of_string(s){
var G__38526 = s;
var G__38526__$1 = (((G__38526 == null))?null:rewrite_clj.parser.parse_string_all.call(null,G__38526));
if((G__38526__$1 == null)){
return null;
} else {
return rewrite_clj.zip.base.edn.call(null,G__38526__$1);
}
});
/**
 * Create string representing the current zipper location.
 */
rewrite_clj.zip.base.string = (function rewrite_clj$zip$base$string(zloc){
var G__38527 = zloc;
var G__38527__$1 = (((G__38527 == null))?null:clojure.zip.node.call(null,G__38527));
if((G__38527__$1 == null)){
return null;
} else {
return rewrite_clj.node.string.call(null,G__38527__$1);
}
});
/**
 * Create string representing the zipped-up zipper.
 */
rewrite_clj.zip.base.root_string = (function rewrite_clj$zip$base$root_string(zloc){
var G__38528 = zloc;
var G__38528__$1 = (((G__38528 == null))?null:clojure.zip.root.call(null,G__38528));
if((G__38528__$1 == null)){
return null;
} else {
return rewrite_clj.node.string.call(null,G__38528__$1);
}
});

//# sourceMappingURL=base.js.map?rel=1575052412417
