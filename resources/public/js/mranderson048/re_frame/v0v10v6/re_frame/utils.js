// Compiled by ClojureScript 1.10.439 {}
goog.provide('mranderson048.re_frame.v0v10v6.re_frame.utils');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.loggers');
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 *   The key thing is that 'm' remains identical? to istelf if the path was never present
 */
mranderson048.re_frame.v0v10v6.re_frame.utils.dissoc_in = (function mranderson048$re_frame$v0v10v6$re_frame$utils$dissoc_in(m,p__43304){
var vec__43305 = p__43304;
var seq__43306 = cljs.core.seq.call(null,vec__43305);
var first__43307 = cljs.core.first.call(null,seq__43306);
var seq__43306__$1 = cljs.core.next.call(null,seq__43306);
var k = first__43307;
var ks = seq__43306__$1;
var keys = vec__43305;
if(ks){
var temp__5718__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5718__auto__)){
var nextmap = temp__5718__auto__;
var newmap = mranderson048.re_frame.v0v10v6.re_frame.utils.dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});
mranderson048.re_frame.v0v10v6.re_frame.utils.first_in_vector = (function mranderson048$re_frame$v0v10v6$re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: expected a vector, but got:",v);
}
});

//# sourceMappingURL=utils.js.map?rel=1575465424176
