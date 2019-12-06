// Compiled by ClojureScript 1.10.439 {}
goog.provide('zprint.zutil');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.whitespace');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.zip.removez');
goog.require('rewrite_clj.zip.editz');
goog.require('clojure.zip');
zprint.zutil.down_STAR_ = clojure.zip.down;
zprint.zutil.up_STAR_ = clojure.zip.up;
zprint.zutil.right_STAR_ = clojure.zip.right;
zprint.zutil.left_STAR_ = clojure.zip.left;
zprint.zutil.next_STAR_ = clojure.zip.next;
zprint.zutil.prev_STAR_ = clojure.zip.prev;
zprint.zutil.replace_STAR_ = clojure.zip.replace;
zprint.zutil.edn_STAR_ = rewrite_clj.zip.base.edn_STAR_;
zprint.zutil.sexpr = rewrite_clj.zip.base.sexpr;
zprint.zutil.string = rewrite_clj.zip.base.string;
zprint.zutil.tag = rewrite_clj.zip.base.tag;
zprint.zutil.skip = rewrite_clj.zip.whitespace.skip;
zprint.zutil.skip_whitespace = rewrite_clj.zip.whitespace.skip_whitespace;
zprint.zutil.whitespace_QMARK_ = rewrite_clj.zip.whitespace.whitespace_QMARK_;
zprint.zutil.whitespace_or_comment_QMARK_ = rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_;
zprint.zutil.length = rewrite_clj.zip.base.length;
zprint.zutil.rightmost_QMARK_ = rewrite_clj.zip.move.rightmost_QMARK_;
zprint.zutil.zremove = rewrite_clj.zip.removez.remove;
zprint.zutil.zreplace = rewrite_clj.zip.editz.replace;
/**
 * Is the zipper zloc equivalent to the path floc.  In this
 *   case, floc isn't a zipper, but was turned into a path early on.
 */
zprint.zutil.zfocus = (function zprint$zutil$zfocus(zloc,floc){
var vec__45929 = zprint.zutil.find_root_and_path.call(null,zloc);
var _ = cljs.core.nth.call(null,vec__45929,(0),null);
var zpath = cljs.core.nth.call(null,vec__45929,(1),null);
return cljs.core._EQ_.call(null,zpath,floc);
});
/**
 * Take the various inputs and come up with a style.
 */
zprint.zutil.zfocus_style = (function zprint$zutil$zfocus_style(style,zloc,floc){
var style__$1 = ((cljs.core._EQ_.call(null,style,new cljs.core.Keyword(null,"f","f",-1597136552)))?style:((zprint.zutil.zfocus.call(null,zloc,floc))?new cljs.core.Keyword(null,"f","f",-1597136552):new cljs.core.Keyword(null,"b","b",1482224470)));
return style__$1;
});
/**
 * Is the zloc a collection?
 */
zprint.zutil.z_coll_QMARK_ = (function zprint$zutil$z_coll_QMARK_(zloc){
return rewrite_clj.zip.seq_QMARK_.call(null,zloc);
});
/**
 * Is this a #_(...)
 */
zprint.zutil.zuneval_QMARK_ = (function zprint$zutil$zuneval_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"uneval","uneval",1932037707));
});
/**
 * Is this a ^{...}
 */
zprint.zutil.zmeta_QMARK_ = (function zprint$zutil$zmeta_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"meta","meta",1499536964));
});
/**
 * Is this a '(...) or '[ ... ] or some other quote?
 */
zprint.zutil.zquote_QMARK_ = (function zprint$zutil$zquote_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"quote","quote",-262615245));
});
/**
 * Is this a @...
 */
zprint.zutil.zreader_macro_QMARK_ = (function zprint$zutil$zreader_macro_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422));
});
/**
 * Return the tag for this zloc
 */
zprint.zutil.ztag = (function zprint$zutil$ztag(zloc){
return zprint.zutil.tag.call(null,zloc);
});
/**
 * Returns true if this is a comment.
 */
zprint.zutil.zcomment_QMARK_ = (function zprint$zutil$zcomment_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"comment","comment",532206069));
} else {
return null;
}
});
/**
 * Returns true if this is a newline.
 */
zprint.zutil.znewline_QMARK_ = (function zprint$zutil$znewline_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"newline","newline",1790071323));
} else {
return null;
}
});
/**
 * Does z/string, but takes an additional argument for hex conversion.
 *   Hex conversion is not implemented for zippers, though, because at present
 *   it is only used for byte-arrays, which don't really show up here.
 */
zprint.zutil.znumstr = (function zprint$zutil$znumstr(zloc,_,___$1){
return zprint.zutil.string.call(null,zloc);
});
/**
 * Find the first non-whitespace zloc inside of this zloc, or
 *   the first whitespace zloc that is the focus.
 */
zprint.zutil.zfirst = (function zprint$zutil$zfirst(zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
if(cljs.core.truth_(nloc)){
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
});
/**
 * Find the first non-whitespace and non-comment zloc inside of this zloc.
 */
zprint.zutil.zfirst_no_comment = (function zprint$zutil$zfirst_no_comment(zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
if(cljs.core.truth_(nloc)){
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc);
} else {
return null;
}
});
/**
 * Find the second non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zsecond = (function zprint$zutil$zsecond(zloc){
var temp__5718__auto__ = zprint.zutil.zfirst.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var first_loc = temp__5718__auto__;
var temp__5718__auto____$1 = zprint.zutil.right_STAR_.call(null,first_loc);
if(cljs.core.truth_(temp__5718__auto____$1)){
var nloc = temp__5718__auto____$1;
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the third non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zthird = (function zprint$zutil$zthird(zloc){
var G__45932 = zprint.zutil.zfirst.call(null,zloc);
var G__45932__$1 = (((G__45932 == null))?null:zprint.zutil.right_STAR_.call(null,G__45932));
var G__45932__$2 = (((G__45932__$1 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__45932__$1));
var G__45932__$3 = (((G__45932__$2 == null))?null:zprint.zutil.right_STAR_.call(null,G__45932__$2));
if((G__45932__$3 == null)){
return null;
} else {
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__45932__$3);
}
});
/**
 * Find the fourth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zfourth = (function zprint$zutil$zfourth(zloc){
var G__45933 = zprint.zutil.zfirst.call(null,zloc);
var G__45933__$1 = (((G__45933 == null))?null:zprint.zutil.right_STAR_.call(null,G__45933));
var G__45933__$2 = (((G__45933__$1 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__45933__$1));
var G__45933__$3 = (((G__45933__$2 == null))?null:zprint.zutil.right_STAR_.call(null,G__45933__$2));
var G__45933__$4 = (((G__45933__$3 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__45933__$3));
var G__45933__$5 = (((G__45933__$4 == null))?null:zprint.zutil.right_STAR_.call(null,G__45933__$4));
if((G__45933__$5 == null)){
return null;
} else {
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__45933__$5);
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zrightnws = (function zprint$zutil$zrightnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5718__auto__ = zprint.zutil.right_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var nloc = temp__5718__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the rightmost non-whitespace zloc at this level
 */
zprint.zutil.zrightmost = (function zprint$zutil$zrightmost(zloc){
var nloc = zprint.zutil.zrightnws.call(null,zloc);
var ploc = zloc;
while(true){
if(cljs.core.not.call(null,nloc)){
return ploc;
} else {
var G__45934 = zprint.zutil.zrightnws.call(null,nloc);
var G__45935 = nloc;
nloc = G__45934;
ploc = G__45935;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zleftnws = (function zprint$zutil$zleftnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5718__auto__ = zprint.zutil.left_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var nloc = temp__5718__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.left_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the leftmost non-whitespace zloc at this level
 */
zprint.zutil.zleftmost = (function zprint$zutil$zleftmost(zloc){
var nloc = zprint.zutil.zleftnws.call(null,zloc);
var ploc = zloc;
while(true){
if(cljs.core.not.call(null,nloc)){
return ploc;
} else {
var G__45936 = zprint.zutil.zleftnws.call(null,nloc);
var G__45937 = nloc;
nloc = G__45936;
ploc = G__45937;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.znextnws = (function zprint$zutil$znextnws(zloc){
if(cljs.core.truth_(rewrite_clj.zip.end_QMARK_.call(null,zloc))){
return zloc;
} else {
var temp__5718__auto__ = zprint.zutil.next_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var nloc = temp__5718__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.next_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.zprevnws = (function zprint$zutil$zprevnws(zloc){
var temp__5718__auto__ = zprint.zutil.prev_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var ploc = temp__5718__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.prev_STAR_,zprint.zutil.whitespace_QMARK_,ploc);
} else {
return null;
}
});
/**
 * Find the nth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.znthnext = (function zprint$zutil$znthnext(zloc,n){
var nloc = zprint.zutil.skip_whitespace.call(null,zprint.zutil.down_STAR_.call(null,zloc));
var i = n;
while(true){
if((((nloc == null)) || (cljs.core._EQ_.call(null,i,(0))))){
return nloc;
} else {
var G__45938 = zprint.zutil.zrightnws.call(null,nloc);
var G__45939 = (i - (1));
nloc = G__45938;
i = G__45939;
continue;
}
break;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.zutil.zfind = (function zprint$zutil$zfind(zthing_QMARK_,zloc){
var nloc = zprint.zutil.skip_whitespace.call(null,zprint.zutil.down_STAR_.call(null,zloc));
var i = (0);
while(true){
if((!((nloc == null)))){
if(cljs.core.truth_(zthing_QMARK_.call(null,nloc))){
return i;
} else {
var G__45940 = zprint.zutil.zrightnws.call(null,nloc);
var G__45941 = (i + (1));
nloc = G__45940;
i = G__45941;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc.
 */
zprint.zutil.zmap_w_nl = (function zprint$zutil$zmap_w_nl(zfn,zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__45942 = zprint.zutil.right_STAR_.call(null,nloc);
var G__45943 = (function (){var temp__5718__auto__ = ((cljs.core.not.call(null,(function (){var and__4036__auto__ = zprint.zutil.whitespace_QMARK_.call(null,nloc);
if(cljs.core.truth_(and__4036__auto__)){
return (!(cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,nloc),new cljs.core.Keyword(null,"newline","newline",1790071323))));
} else {
return and__4036__auto__;
}
})()))?zfn.call(null,nloc):null);
if(cljs.core.truth_(temp__5718__auto__)){
var result = temp__5718__auto__;
return cljs.core.conj.call(null,out,result);
} else {
return out;
}
})();
nloc = G__45942;
out = G__45943;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc.
 */
zprint.zutil.zmap = (function zprint$zutil$zmap(zfn,zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__45944 = zprint.zutil.right_STAR_.call(null,nloc);
var G__45945 = (function (){var temp__5718__auto__ = ((cljs.core.not.call(null,zprint.zutil.whitespace_QMARK_.call(null,nloc)))?zfn.call(null,nloc):null);
if(cljs.core.truth_(temp__5718__auto__)){
var result = temp__5718__auto__;
return cljs.core.conj.call(null,out,result);
} else {
return out;
}
})();
nloc = G__45944;
out = G__45945;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every zloc inside of zloc.
 */
zprint.zutil.zmap_all = (function zprint$zutil$zmap_all(zfn,zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__45946 = zprint.zutil.right_STAR_.call(null,nloc);
var G__45947 = cljs.core.conj.call(null,out,zfn.call(null,nloc));
nloc = G__45946;
out = G__45947;
continue;
}
break;
}
});
/**
 * Apply a function to every non-whitespace zloc to right of zloc.
 */
zprint.zutil.zmap_right = (function zprint$zutil$zmap_right(zfn,zloc){
var nloc = zprint.zutil.right_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__45948 = zprint.zutil.right_STAR_.call(null,nloc);
var G__45949 = (cljs.core.truth_(zprint.zutil.whitespace_QMARK_.call(null,nloc))?out:cljs.core.conj.call(null,out,zfn.call(null,nloc)));
nloc = G__45948;
out = G__45949;
continue;
}
break;
}
});
/**
 * Return a seq of all of the non-whitespace children of zloc.
 */
zprint.zutil.zseqnws = (function zprint$zutil$zseqnws(zloc){
return zprint.zutil.zmap.call(null,cljs.core.identity,zloc);
});
/**
 * Remove everything to the right of the current zloc. In other words,
 *   make the current zloc the rightmost.
 */
zprint.zutil.zremove_right = (function zprint$zutil$zremove_right(zloc){
var nloc = zloc;
while(true){
if(cljs.core.truth_(zprint.zutil.rightmost_QMARK_.call(null,nloc))){
return nloc;
} else {
var G__45950 = zprint.zutil.zremove.call(null,zprint.zutil.right_STAR_.call(null,nloc));
nloc = G__45950;
continue;
}
break;
}
});
/**
 * Considering the current zloc a collection, move down into it and
 *   take n non-whitespace elements, dropping the rest.  Then append the
 *   given element to the end, coercing it into a node/zloc.  Note, this 
 *   is not quite implemented that way, as it uses replace.
 */
zprint.zutil.ztake_append = (function zprint$zutil$ztake_append(n,zloc,end_struct){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var index = (0);
while(true){
if((index >= n)){
return zprint.zutil.up_STAR_.call(null,zprint.zutil.zremove_right.call(null,zprint.zutil.zreplace.call(null,nloc,end_struct)));
} else {
var xloc = zprint.zutil.right_STAR_.call(null,nloc);
var G__45951 = xloc;
var G__45952 = (cljs.core.truth_(zprint.zutil.whitespace_QMARK_.call(null,xloc))?index:(index + (1)));
nloc = G__45951;
index = G__45952;
continue;
}
break;
}
});
/**
 * How many non-whitespace children does zloc have?
 */
zprint.zutil.zcount = (function zprint$zutil$zcount(zloc){
return cljs.core.count.call(null,zprint.zutil.zseqnws.call(null,zloc));
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves include
 *   both whitespace and comments.
 */
zprint.zutil.find_root_and_path = (function zprint$zutil$find_root_and_path(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not.call(null,zprint.zutil.left_STAR_.call(null,nloc))){
if(cljs.core.not.call(null,zprint.zutil.up_STAR_.call(null,nloc))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__45953 = zprint.zutil.up_STAR_.call(null,nloc);
var G__45954 = (0);
var G__45955 = cljs.core.cons.call(null,left,out);
nloc = G__45953;
left = G__45954;
out = G__45955;
continue;
}
} else {
var G__45956 = zprint.zutil.left_STAR_.call(null,nloc);
var G__45957 = (left + (1));
var G__45958 = out;
nloc = G__45956;
left = G__45957;
out = G__45958;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves are
 *   non-whitespace, but include comments.
 */
zprint.zutil.find_root_and_path_nw = (function zprint$zutil$find_root_and_path_nw(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not.call(null,zprint.zutil.left_STAR_.call(null,nloc))){
if(cljs.core.not.call(null,zprint.zutil.up_STAR_.call(null,nloc))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__45959 = zprint.zutil.up_STAR_.call(null,nloc);
var G__45960 = (0);
var G__45961 = cljs.core.cons.call(null,left,out);
nloc = G__45959;
left = G__45960;
out = G__45961;
continue;
}
} else {
var G__45962 = zprint.zutil.left_STAR_.call(null,nloc);
var G__45963 = (cljs.core.truth_(zprint.zutil.whitespace_QMARK_.call(null,nloc))?left:(left + (1)));
var G__45964 = out;
nloc = G__45962;
left = G__45963;
out = G__45964;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Find the root from a zloc by doing lots of ups.
 */
zprint.zutil.find_root = (function zprint$zutil$find_root(zloc){
var nloc = zloc;
while(true){
if(cljs.core.not.call(null,rewrite_clj.zip.up.call(null,nloc))){
return nloc;
} else {
var G__45965 = rewrite_clj.zip.up.call(null,nloc);
nloc = G__45965;
continue;
}
break;
}
});
/**
 * Move one down and then right a certain number of steps.
 */
zprint.zutil.move_down_and_right = (function zprint$zutil$move_down_and_right(zloc,right_count){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var remaining_right = right_count;
while(true){
if((remaining_right === (0))){
return nloc;
} else {
var G__45966 = zprint.zutil.right_STAR_.call(null,nloc);
var G__45967 = (remaining_right - (1));
nloc = G__45966;
remaining_right = G__45967;
continue;
}
break;
}
});
/**
 * Follow the path vector from the root and return the zloc
 *   at this location.
 */
zprint.zutil.follow_path = (function zprint$zutil$follow_path(path_vec,zloc){
return cljs.core.reduce.call(null,zprint.zutil.move_down_and_right,zloc,path_vec);
});
/**
 * Is this an anonymous fn?
 */
zprint.zutil.zanonfn_QMARK_ = (function zprint$zutil$zanonfn_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"fn","fn",-1175266204));
});
/**
 * Return the last non-whitespace (but possibly comment) element inside
 *   of this zloc.
 */
zprint.zutil.zlast = (function zprint$zutil$zlast(zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
if(cljs.core.truth_(nloc)){
return zprint.zutil.zrightmost.call(null,nloc);
} else {
return null;
}
});
/**
 * Returns true if this can be converted to an sexpr. Works around a bug
 *   where n/printable-only? returns false for n/tag :fn, but z/sexpr fails
 *   on something with n/tag :fn
 */
zprint.zutil.zsexpr_QMARK_ = (function zprint$zutil$zsexpr_QMARK_(zloc){
var and__4036__auto__ = zloc;
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),zprint.zutil.tag.call(null,zloc))) && (cljs.core.not.call(null,rewrite_clj.node.printable_only_QMARK_.call(null,rewrite_clj.zip.node.call(null,zloc)))));
} else {
return and__4036__auto__;
}
});
/**
 * Returns true if this is a keyword.
 */
zprint.zutil.zkeyword_QMARK_ = (function zprint$zutil$zkeyword_QMARK_(zloc){
var and__4036__auto__ = zloc;
if(cljs.core.truth_(and__4036__auto__)){
return clojure.string.starts_with_QMARK_.call(null,rewrite_clj.zip.string.call(null,zloc),":");
} else {
return and__4036__auto__;
}
});
/**
 * Returns true if this is a symbol.
 */
zprint.zutil.zsymbol_QMARK_ = (function zprint$zutil$zsymbol_QMARK_(zloc){
var and__4036__auto__ = zloc;
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = zprint.zutil.zsexpr_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__4036__auto____$1)){
return (zprint.zutil.sexpr.call(null,zloc) instanceof cljs.core.Symbol);
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
});
/**
 * Returns true if this is nil.
 */
zprint.zutil.znil_QMARK_ = (function zprint$zutil$znil_QMARK_(zloc){
var and__4036__auto__ = zloc;
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = zprint.zutil.zsexpr_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__4036__auto____$1)){
return (rewrite_clj.zip.sexpr.call(null,zloc) == null);
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
});
/**
 * Returns true if this is a reader-conditional with a symbol in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_symbol_QMARK_ = (function zprint$zutil$zreader_cond_w_symbol_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_.call(null,zloc))?(function (){var element = rewrite_clj.zip.down.call(null,zloc);
if(cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element),"?")){
var element__$1 = rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,element));
if(((cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":clj")) || (cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":cljs")))){
return zprint.zutil.zsymbol_QMARK_.call(null,rewrite_clj.zip.right.call(null,element__$1));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Returns true if this is a reader-conditional with a collection in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_coll_QMARK_ = (function zprint$zutil$zreader_cond_w_coll_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_.call(null,zloc))?(function (){var element = rewrite_clj.zip.down.call(null,zloc);
if(cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element),"?")){
var element__$1 = rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,element));
if(((cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":clj")) || (cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":cljs")))){
return zprint.zutil.z_coll_QMARK_.call(null,rewrite_clj.zip.right.call(null,element__$1));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Return a zloc that will turn into a string of three dots.
 */
zprint.zutil.zdotdotdot = (function zprint$zutil$zdotdotdot(){
return zprint.zutil.edn_STAR_.call(null,rewrite_clj.parser.parse_string.call(null,"..."));
});
/**
 * Returns true if this is a keyword, string, or number, in other words,
 *   a constant.
 */
zprint.zutil.zconstant_QMARK_ = (function zprint$zutil$zconstant_QMARK_(zloc){
var ztag = rewrite_clj.zip.tag.call(null,zloc);
if(((cljs.core._EQ_.call(null,ztag,new cljs.core.Keyword(null,"unquote","unquote",1649741032))) || (cljs.core._EQ_.call(null,ztag,new cljs.core.Keyword(null,"quote","quote",-262615245))) || (cljs.core._EQ_.call(null,ztag,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847))))){
return zprint.zutil.zconstant_QMARK_.call(null,zprint.zutil.zfirst.call(null,zloc));
} else {
var and__4036__auto__ = cljs.core.not.call(null,zprint.zutil.z_coll_QMARK_.call(null,zloc));
if(and__4036__auto__){
var or__4047__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.truth_(zprint.zutil.zsexpr_QMARK_.call(null,zloc))){
var sexpr = zprint.zutil.sexpr.call(null,zloc);
return ((typeof sexpr === 'string') || (typeof sexpr === 'number') || (cljs.core._EQ_.call(null,"true",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexpr))) || (cljs.core._EQ_.call(null,"false",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexpr))));
} else {
return null;
}
}
} else {
return and__4036__auto__;
}
}
});
/**
 * If this is an inline comment, returns the amount of space that
 *   was between this and the previous element.  That means that if
 *   we go left, we get something other than whitespace before a
 *   newline.  Assumes zloc is a comment.
 */
zprint.zutil.zinlinecomment_QMARK_ = (function zprint$zutil$zinlinecomment_QMARK_(zloc){
var nloc = zprint.zutil.left_STAR_.call(null,zloc);
var spaces = (0);
while(true){
var tnloc = zprint.zutil.tag.call(null,nloc);
if((tnloc == null)){
return null;
} else {
if(cljs.core._EQ_.call(null,tnloc,new cljs.core.Keyword(null,"newline","newline",1790071323))){
return null;
} else {
if(cljs.core._EQ_.call(null,tnloc,new cljs.core.Keyword(null,"comment","comment",532206069))){
return null;
} else {
if(cljs.core.not_EQ_.call(null,tnloc,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))){
return spaces;
} else {
var G__45968 = zprint.zutil.left_STAR_.call(null,nloc);
var G__45969 = (zprint.zutil.length.call(null,nloc) + spaces);
nloc = G__45968;
spaces = G__45969;
continue;

}
}
}
}
break;
}
});
/**
 * Given a zloc zipper of a map, find the :doc element.
 */
zprint.zutil.find_doc_in_map = (function zprint$zutil$find_doc_in_map(zloc){
var nloc = rewrite_clj.zip.down.call(null,zloc);
while(true){
if(cljs.core.truth_(nloc)){
if(cljs.core.truth_((function (){var and__4036__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,nloc);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,nloc),":doc");
} else {
return and__4036__auto__;
}
})())){
if(typeof zprint.zutil.sexpr.call(null,rewrite_clj.zip.right.call(null,nloc)) === 'string'){
return rewrite_clj.zip.right.call(null,nloc);
} else {
return null;
}
} else {
var G__45970 = rewrite_clj.zip.right.call(null,rewrite_clj.zip.right.call(null,nloc));
nloc = G__45970;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Find a docstring in a zipper of a function.
 */
zprint.zutil.find_docstring = (function zprint$zutil$find_docstring(zloc){
var fn_name = rewrite_clj.zip.string.call(null,rewrite_clj.zip.down.call(null,zloc));
if(((cljs.core._EQ_.call(null,fn_name,"defn")) || (cljs.core._EQ_.call(null,fn_name,"defmacro")))){
var docloc = rewrite_clj.zip.right.call(null,rewrite_clj.zip.right.call(null,rewrite_clj.zip.down.call(null,zloc)));
if(typeof zprint.zutil.sexpr.call(null,docloc) === 'string'){
return docloc;
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,fn_name,"def")){
var maploc = rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,rewrite_clj.zip.down.call(null,zloc)));
if(cljs.core.truth_(rewrite_clj.zip.map_QMARK_.call(null,maploc))){
return zprint.zutil.find_doc_in_map.call(null,maploc);
} else {
return null;
}
} else {
return null;

}
}
});
/**
 * Given a zipper of a function definition, add the spec info to
 *   the docstring. Works for docstring with (def ...) functions, but
 *   the left-indent isn't optimal.  But to fix that, we'd have to do
 *   the zprinting here, where we know the indent of the existing
 *   docstring.
 */
zprint.zutil.add_spec_to_docstring = (function zprint$zutil$add_spec_to_docstring(zloc,spec_str){
var temp__5718__auto__ = zprint.zutil.find_docstring.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var doc_zloc = temp__5718__auto__;
var new_doc_zloc = zprint.zutil.replace_STAR_.call(null,doc_zloc,rewrite_clj.zip.node.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.parser.parse_string.call(null,["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zutil.sexpr.call(null,doc_zloc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_str),"\""].join('')))));
return zprint.zutil.edn_STAR_.call(null,rewrite_clj.zip.root.call(null,new_doc_zloc));
} else {
return zloc;
}
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.zutil.zlift_ns = (function zprint$zutil$zlift_ns(pair_seq){
var strip_ns = (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,null,cljs.core.name.call(null,named));
} else {
return cljs.core.keyword.call(null,null,cljs.core.name.call(null,named));
}
});
var ns = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__45971 = cljs.core.first.call(null,pair_seq__$1);
var seq__45972 = cljs.core.seq.call(null,vec__45971);
var first__45973 = cljs.core.first.call(null,seq__45972);
var seq__45972__$1 = cljs.core.next.call(null,seq__45972);
var k = first__45973;
var rest_of_pair = seq__45972__$1;
var pair = vec__45971;
var current_ns = (cljs.core.truth_((function (){var and__4036__auto__ = rest_of_pair;
if(and__4036__auto__){
var and__4036__auto____$1 = (!(clojure.string.starts_with_QMARK_.call(null,rewrite_clj.zip.string.call(null,k),"::")));
if(and__4036__auto____$1){
var or__4047__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return zprint.zutil.zsymbol_QMARK_.call(null,k);
}
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})())?cljs.core.namespace.call(null,rewrite_clj.zip.sexpr.call(null,k)):null);
if(cljs.core.not.call(null,k)){
if(cljs.core.truth_(ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns)){
if(cljs.core._EQ_.call(null,ns,current_ns)){
var G__45974 = ns;
var G__45975 = cljs.core.next.call(null,pair_seq__$1);
var G__45976 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.node.token_node.call(null,strip_ns.call(null,rewrite_clj.zip.sexpr.call(null,k)))),rest_of_pair));
ns = G__45974;
pair_seq__$1 = G__45975;
out = G__45976;
continue;
} else {
return null;
}
} else {
var G__45977 = current_ns;
var G__45978 = cljs.core.next.call(null,pair_seq__$1);
var G__45979 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.node.token_node.call(null,strip_ns.call(null,rewrite_clj.zip.sexpr.call(null,k)))),rest_of_pair));
ns = G__45977;
pair_seq__$1 = G__45978;
out = G__45979;
continue;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(1))){
var G__45980 = ns;
var G__45981 = cljs.core.next.call(null,pair_seq__$1);
var G__45982 = cljs.core.conj.call(null,out,pair);
ns = G__45980;
pair_seq__$1 = G__45981;
out = G__45982;
continue;
} else {
return null;
}
}
}
break;
}
});
/**
 * Redefine all of the traversal functions for zippers, then
 *   call the function of no arguments passed in.
 */
zprint.zutil.zredef_call = (function zprint$zutil$zredef_call(body_fn){
var zstring_orig_val__45983 = zprint.zfns.zstring;
var znumstr_orig_val__45984 = zprint.zfns.znumstr;
var zbyte_array_QMARK__orig_val__45985 = zprint.zfns.zbyte_array_QMARK_;
var zcomment_QMARK__orig_val__45986 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__45987 = zprint.zfns.zsexpr;
var zseqnws_orig_val__45988 = zprint.zfns.zseqnws;
var zmap_right_orig_val__45989 = zprint.zfns.zmap_right;
var zfocus_style_orig_val__45990 = zprint.zfns.zfocus_style;
var zfirst_orig_val__45991 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__45992 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__45993 = zprint.zfns.zsecond;
var zthird_orig_val__45994 = zprint.zfns.zthird;
var zfourth_orig_val__45995 = zprint.zfns.zfourth;
var znthnext_orig_val__45996 = zprint.zfns.znthnext;
var zcount_orig_val__45997 = zprint.zfns.zcount;
var zmap_orig_val__45998 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__45999 = zprint.zfns.zmap_w_nl;
var zanonfn_QMARK__orig_val__46000 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__46001 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__46002 = zprint.zfns.zfocus;
var zfind_path_orig_val__46003 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__46004 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__46005 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__46006 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__46007 = zprint.zfns.zmap_QMARK_;
var zset_QMARK__orig_val__46008 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__46009 = zprint.zfns.zcoll_QMARK_;
var zuneval_QMARK__orig_val__46010 = zprint.zfns.zuneval_QMARK_;
var zmeta_QMARK__orig_val__46011 = zprint.zfns.zmeta_QMARK_;
var ztag_orig_val__46012 = zprint.zfns.ztag;
var zlast_orig_val__46013 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__46014 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__46015 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__46016 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__46017 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__46018 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__46019 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__46020 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__46021 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__46022 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__46023 = zprint.zfns.zmap_all;
var zpromise_QMARK__orig_val__46024 = zprint.zfns.zpromise_QMARK_;
var zfuture_QMARK__orig_val__46025 = zprint.zfns.zfuture_QMARK_;
var zdelay_QMARK__orig_val__46026 = zprint.zfns.zdelay_QMARK_;
var zkeyword_QMARK__orig_val__46027 = zprint.zfns.zkeyword_QMARK_;
var zconstant_QMARK__orig_val__46028 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__46029 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__46030 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__46031 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__46032 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__46033 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__46034 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__46035 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__46036 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__46037 = zprint.zfns.zlift_ns;
var zinlinecomment_QMARK__orig_val__46038 = zprint.zfns.zinlinecomment_QMARK_;
var zfind_orig_val__46039 = zprint.zfns.zfind;
var ztake_append_orig_val__46040 = zprint.zfns.ztake_append;
var zstring_temp_val__46041 = rewrite_clj.zip.string;
var znumstr_temp_val__46042 = zprint.zutil.znumstr;
var zbyte_array_QMARK__temp_val__46043 = cljs.core.constantly.call(null,false);
var zcomment_QMARK__temp_val__46044 = zprint.zutil.zcomment_QMARK_;
var zsexpr_temp_val__46045 = zprint.zutil.sexpr;
var zseqnws_temp_val__46046 = zprint.zutil.zseqnws;
var zmap_right_temp_val__46047 = zprint.zutil.zmap_right;
var zfocus_style_temp_val__46048 = zprint.zutil.zfocus_style;
var zfirst_temp_val__46049 = zprint.zutil.zfirst;
var zfirst_no_comment_temp_val__46050 = zprint.zutil.zfirst_no_comment;
var zsecond_temp_val__46051 = zprint.zutil.zsecond;
var zthird_temp_val__46052 = zprint.zutil.zthird;
var zfourth_temp_val__46053 = zprint.zutil.zfourth;
var znthnext_temp_val__46054 = zprint.zutil.znthnext;
var zcount_temp_val__46055 = zprint.zutil.zcount;
var zmap_temp_val__46056 = zprint.zutil.zmap;
var zmap_w_nl_temp_val__46057 = zprint.zutil.zmap_w_nl;
var zanonfn_QMARK__temp_val__46058 = zprint.zutil.zanonfn_QMARK_;
var zfn_obj_QMARK__temp_val__46059 = cljs.core.constantly.call(null,false);
var zfocus_temp_val__46060 = zprint.zutil.zfocus;
var zfind_path_temp_val__46061 = zprint.zutil.find_root_and_path_nw;
var zwhitespace_QMARK__temp_val__46062 = zprint.zutil.whitespace_QMARK_;
var zlist_QMARK__temp_val__46063 = rewrite_clj.zip.list_QMARK_;
var zvector_QMARK__temp_val__46064 = rewrite_clj.zip.vector_QMARK_;
var zmap_QMARK__temp_val__46065 = rewrite_clj.zip.map_QMARK_;
var zset_QMARK__temp_val__46066 = rewrite_clj.zip.set_QMARK_;
var zcoll_QMARK__temp_val__46067 = zprint.zutil.z_coll_QMARK_;
var zuneval_QMARK__temp_val__46068 = zprint.zutil.zuneval_QMARK_;
var zmeta_QMARK__temp_val__46069 = zprint.zutil.zmeta_QMARK_;
var ztag_temp_val__46070 = zprint.zutil.ztag;
var zlast_temp_val__46071 = zprint.zutil.zlast;
var zarray_QMARK__temp_val__46072 = cljs.core.constantly.call(null,false);
var zatom_QMARK__temp_val__46073 = cljs.core.constantly.call(null,false);
var zderef_temp_val__46074 = cljs.core.constantly.call(null,false);
var zrecord_QMARK__temp_val__46075 = cljs.core.constantly.call(null,false);
var zns_QMARK__temp_val__46076 = cljs.core.constantly.call(null,false);
var zobj_to_vec_temp_val__46077 = cljs.core.constantly.call(null,null);
var zexpandarray_temp_val__46078 = cljs.core.constantly.call(null,null);
var znewline_QMARK__temp_val__46079 = zprint.zutil.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__temp_val__46080 = zprint.zutil.whitespace_or_comment_QMARK_;
var zmap_all_temp_val__46081 = zprint.zutil.zmap_all;
var zpromise_QMARK__temp_val__46082 = cljs.core.constantly.call(null,false);
var zfuture_QMARK__temp_val__46083 = cljs.core.constantly.call(null,false);
var zdelay_QMARK__temp_val__46084 = cljs.core.constantly.call(null,false);
var zkeyword_QMARK__temp_val__46085 = zprint.zutil.zkeyword_QMARK_;
var zconstant_QMARK__temp_val__46086 = zprint.zutil.zconstant_QMARK_;
var zagent_QMARK__temp_val__46087 = cljs.core.constantly.call(null,false);
var zreader_macro_QMARK__temp_val__46088 = zprint.zutil.zreader_macro_QMARK_;
var zarray_to_shift_seq_temp_val__46089 = cljs.core.constantly.call(null,null);
var zdotdotdot_temp_val__46090 = zprint.zutil.zdotdotdot;
var zsymbol_QMARK__temp_val__46091 = zprint.zutil.zsymbol_QMARK_;
var znil_QMARK__temp_val__46092 = zprint.zutil.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__46093 = zprint.zutil.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__temp_val__46094 = zprint.zutil.zreader_cond_w_coll_QMARK_;
var zlift_ns_temp_val__46095 = zprint.zutil.zlift_ns;
var zinlinecomment_QMARK__temp_val__46096 = zprint.zutil.zinlinecomment_QMARK_;
var zfind_temp_val__46097 = zprint.zutil.zfind;
var ztake_append_temp_val__46098 = zprint.zutil.ztake_append;
zprint.zfns.zstring = zstring_temp_val__46041;

zprint.zfns.znumstr = znumstr_temp_val__46042;

zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__temp_val__46043;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__46044;

zprint.zfns.zsexpr = zsexpr_temp_val__46045;

zprint.zfns.zseqnws = zseqnws_temp_val__46046;

zprint.zfns.zmap_right = zmap_right_temp_val__46047;

zprint.zfns.zfocus_style = zfocus_style_temp_val__46048;

zprint.zfns.zfirst = zfirst_temp_val__46049;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__46050;

zprint.zfns.zsecond = zsecond_temp_val__46051;

zprint.zfns.zthird = zthird_temp_val__46052;

zprint.zfns.zfourth = zfourth_temp_val__46053;

zprint.zfns.znthnext = znthnext_temp_val__46054;

zprint.zfns.zcount = zcount_temp_val__46055;

zprint.zfns.zmap = zmap_temp_val__46056;

zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__46057;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__46058;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__46059;

zprint.zfns.zfocus = zfocus_temp_val__46060;

zprint.zfns.zfind_path = zfind_path_temp_val__46061;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__46062;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__46063;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__46064;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__46065;

zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__46066;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__46067;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__46068;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__46069;

zprint.zfns.ztag = ztag_temp_val__46070;

zprint.zfns.zlast = zlast_temp_val__46071;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__46072;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__46073;

zprint.zfns.zderef = zderef_temp_val__46074;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__46075;

zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__46076;

zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__46077;

zprint.zfns.zexpandarray = zexpandarray_temp_val__46078;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__46079;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__46080;

zprint.zfns.zmap_all = zmap_all_temp_val__46081;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__46082;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__46083;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__46084;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__46085;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__46086;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__46087;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__46088;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__46089;

zprint.zfns.zdotdotdot = zdotdotdot_temp_val__46090;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__46091;

zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__46092;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__46093;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__46094;

zprint.zfns.zlift_ns = zlift_ns_temp_val__46095;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__temp_val__46096;

zprint.zfns.zfind = zfind_temp_val__46097;

zprint.zfns.ztake_append = ztake_append_temp_val__46098;

try{return body_fn.call(null);
}finally {zprint.zfns.ztake_append = ztake_append_orig_val__46040;

zprint.zfns.zfind = zfind_orig_val__46039;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__orig_val__46038;

zprint.zfns.zlift_ns = zlift_ns_orig_val__46037;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__46036;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__46035;

zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__46034;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__46033;

zprint.zfns.zdotdotdot = zdotdotdot_orig_val__46032;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__46031;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__46030;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__46029;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__46028;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__46027;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__46026;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__46025;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__46024;

zprint.zfns.zmap_all = zmap_all_orig_val__46023;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__46022;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__46021;

zprint.zfns.zexpandarray = zexpandarray_orig_val__46020;

zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__46019;

zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__46018;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__46017;

zprint.zfns.zderef = zderef_orig_val__46016;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__46015;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__46014;

zprint.zfns.zlast = zlast_orig_val__46013;

zprint.zfns.ztag = ztag_orig_val__46012;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__46011;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__46010;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__46009;

zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__46008;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__46007;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__46006;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__46005;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__46004;

zprint.zfns.zfind_path = zfind_path_orig_val__46003;

zprint.zfns.zfocus = zfocus_orig_val__46002;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__46001;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__46000;

zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__45999;

zprint.zfns.zmap = zmap_orig_val__45998;

zprint.zfns.zcount = zcount_orig_val__45997;

zprint.zfns.znthnext = znthnext_orig_val__45996;

zprint.zfns.zfourth = zfourth_orig_val__45995;

zprint.zfns.zthird = zthird_orig_val__45994;

zprint.zfns.zsecond = zsecond_orig_val__45993;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__45992;

zprint.zfns.zfirst = zfirst_orig_val__45991;

zprint.zfns.zfocus_style = zfocus_style_orig_val__45990;

zprint.zfns.zmap_right = zmap_right_orig_val__45989;

zprint.zfns.zseqnws = zseqnws_orig_val__45988;

zprint.zfns.zsexpr = zsexpr_orig_val__45987;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__45986;

zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__orig_val__45985;

zprint.zfns.znumstr = znumstr_orig_val__45984;

zprint.zfns.zstring = zstring_orig_val__45983;
}});

//# sourceMappingURL=zutil.js.map?rel=1575465428504
