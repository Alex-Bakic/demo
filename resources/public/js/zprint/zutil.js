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
var vec__38618 = zprint.zutil.find_root_and_path.call(null,zloc);
var _ = cljs.core.nth.call(null,vec__38618,(0),null);
var zpath = cljs.core.nth.call(null,vec__38618,(1),null);
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
var G__38621 = zprint.zutil.zfirst.call(null,zloc);
var G__38621__$1 = (((G__38621 == null))?null:zprint.zutil.right_STAR_.call(null,G__38621));
var G__38621__$2 = (((G__38621__$1 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__38621__$1));
var G__38621__$3 = (((G__38621__$2 == null))?null:zprint.zutil.right_STAR_.call(null,G__38621__$2));
if((G__38621__$3 == null)){
return null;
} else {
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__38621__$3);
}
});
/**
 * Find the fourth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zfourth = (function zprint$zutil$zfourth(zloc){
var G__38622 = zprint.zutil.zfirst.call(null,zloc);
var G__38622__$1 = (((G__38622 == null))?null:zprint.zutil.right_STAR_.call(null,G__38622));
var G__38622__$2 = (((G__38622__$1 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__38622__$1));
var G__38622__$3 = (((G__38622__$2 == null))?null:zprint.zutil.right_STAR_.call(null,G__38622__$2));
var G__38622__$4 = (((G__38622__$3 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__38622__$3));
var G__38622__$5 = (((G__38622__$4 == null))?null:zprint.zutil.right_STAR_.call(null,G__38622__$4));
if((G__38622__$5 == null)){
return null;
} else {
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__38622__$5);
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
var G__38623 = zprint.zutil.zrightnws.call(null,nloc);
var G__38624 = nloc;
nloc = G__38623;
ploc = G__38624;
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
var G__38625 = zprint.zutil.zleftnws.call(null,nloc);
var G__38626 = nloc;
nloc = G__38625;
ploc = G__38626;
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
var G__38627 = zprint.zutil.zrightnws.call(null,nloc);
var G__38628 = (i - (1));
nloc = G__38627;
i = G__38628;
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
var G__38629 = zprint.zutil.zrightnws.call(null,nloc);
var G__38630 = (i + (1));
nloc = G__38629;
i = G__38630;
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
var G__38631 = zprint.zutil.right_STAR_.call(null,nloc);
var G__38632 = (function (){var temp__5718__auto__ = ((cljs.core.not.call(null,(function (){var and__4036__auto__ = zprint.zutil.whitespace_QMARK_.call(null,nloc);
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
nloc = G__38631;
out = G__38632;
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
var G__38633 = zprint.zutil.right_STAR_.call(null,nloc);
var G__38634 = (function (){var temp__5718__auto__ = ((cljs.core.not.call(null,zprint.zutil.whitespace_QMARK_.call(null,nloc)))?zfn.call(null,nloc):null);
if(cljs.core.truth_(temp__5718__auto__)){
var result = temp__5718__auto__;
return cljs.core.conj.call(null,out,result);
} else {
return out;
}
})();
nloc = G__38633;
out = G__38634;
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
var G__38635 = zprint.zutil.right_STAR_.call(null,nloc);
var G__38636 = cljs.core.conj.call(null,out,zfn.call(null,nloc));
nloc = G__38635;
out = G__38636;
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
var G__38637 = zprint.zutil.right_STAR_.call(null,nloc);
var G__38638 = (cljs.core.truth_(zprint.zutil.whitespace_QMARK_.call(null,nloc))?out:cljs.core.conj.call(null,out,zfn.call(null,nloc)));
nloc = G__38637;
out = G__38638;
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
var G__38639 = zprint.zutil.zremove.call(null,zprint.zutil.right_STAR_.call(null,nloc));
nloc = G__38639;
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
var G__38640 = xloc;
var G__38641 = (cljs.core.truth_(zprint.zutil.whitespace_QMARK_.call(null,xloc))?index:(index + (1)));
nloc = G__38640;
index = G__38641;
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
var G__38642 = zprint.zutil.up_STAR_.call(null,nloc);
var G__38643 = (0);
var G__38644 = cljs.core.cons.call(null,left,out);
nloc = G__38642;
left = G__38643;
out = G__38644;
continue;
}
} else {
var G__38645 = zprint.zutil.left_STAR_.call(null,nloc);
var G__38646 = (left + (1));
var G__38647 = out;
nloc = G__38645;
left = G__38646;
out = G__38647;
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
var G__38648 = zprint.zutil.up_STAR_.call(null,nloc);
var G__38649 = (0);
var G__38650 = cljs.core.cons.call(null,left,out);
nloc = G__38648;
left = G__38649;
out = G__38650;
continue;
}
} else {
var G__38651 = zprint.zutil.left_STAR_.call(null,nloc);
var G__38652 = (cljs.core.truth_(zprint.zutil.whitespace_QMARK_.call(null,nloc))?left:(left + (1)));
var G__38653 = out;
nloc = G__38651;
left = G__38652;
out = G__38653;
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
var G__38654 = rewrite_clj.zip.up.call(null,nloc);
nloc = G__38654;
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
var G__38655 = zprint.zutil.right_STAR_.call(null,nloc);
var G__38656 = (remaining_right - (1));
nloc = G__38655;
remaining_right = G__38656;
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
var G__38657 = zprint.zutil.left_STAR_.call(null,nloc);
var G__38658 = (zprint.zutil.length.call(null,nloc) + spaces);
nloc = G__38657;
spaces = G__38658;
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
var G__38659 = rewrite_clj.zip.right.call(null,rewrite_clj.zip.right.call(null,nloc));
nloc = G__38659;
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
var vec__38660 = cljs.core.first.call(null,pair_seq__$1);
var seq__38661 = cljs.core.seq.call(null,vec__38660);
var first__38662 = cljs.core.first.call(null,seq__38661);
var seq__38661__$1 = cljs.core.next.call(null,seq__38661);
var k = first__38662;
var rest_of_pair = seq__38661__$1;
var pair = vec__38660;
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
var G__38663 = ns;
var G__38664 = cljs.core.next.call(null,pair_seq__$1);
var G__38665 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.node.token_node.call(null,strip_ns.call(null,rewrite_clj.zip.sexpr.call(null,k)))),rest_of_pair));
ns = G__38663;
pair_seq__$1 = G__38664;
out = G__38665;
continue;
} else {
return null;
}
} else {
var G__38666 = current_ns;
var G__38667 = cljs.core.next.call(null,pair_seq__$1);
var G__38668 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.node.token_node.call(null,strip_ns.call(null,rewrite_clj.zip.sexpr.call(null,k)))),rest_of_pair));
ns = G__38666;
pair_seq__$1 = G__38667;
out = G__38668;
continue;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(1))){
var G__38669 = ns;
var G__38670 = cljs.core.next.call(null,pair_seq__$1);
var G__38671 = cljs.core.conj.call(null,out,pair);
ns = G__38669;
pair_seq__$1 = G__38670;
out = G__38671;
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
var zstring_orig_val__38672 = zprint.zfns.zstring;
var znumstr_orig_val__38673 = zprint.zfns.znumstr;
var zbyte_array_QMARK__orig_val__38674 = zprint.zfns.zbyte_array_QMARK_;
var zcomment_QMARK__orig_val__38675 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__38676 = zprint.zfns.zsexpr;
var zseqnws_orig_val__38677 = zprint.zfns.zseqnws;
var zmap_right_orig_val__38678 = zprint.zfns.zmap_right;
var zfocus_style_orig_val__38679 = zprint.zfns.zfocus_style;
var zfirst_orig_val__38680 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__38681 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__38682 = zprint.zfns.zsecond;
var zthird_orig_val__38683 = zprint.zfns.zthird;
var zfourth_orig_val__38684 = zprint.zfns.zfourth;
var znthnext_orig_val__38685 = zprint.zfns.znthnext;
var zcount_orig_val__38686 = zprint.zfns.zcount;
var zmap_orig_val__38687 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__38688 = zprint.zfns.zmap_w_nl;
var zanonfn_QMARK__orig_val__38689 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__38690 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__38691 = zprint.zfns.zfocus;
var zfind_path_orig_val__38692 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__38693 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__38694 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__38695 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__38696 = zprint.zfns.zmap_QMARK_;
var zset_QMARK__orig_val__38697 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__38698 = zprint.zfns.zcoll_QMARK_;
var zuneval_QMARK__orig_val__38699 = zprint.zfns.zuneval_QMARK_;
var zmeta_QMARK__orig_val__38700 = zprint.zfns.zmeta_QMARK_;
var ztag_orig_val__38701 = zprint.zfns.ztag;
var zlast_orig_val__38702 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__38703 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__38704 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__38705 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__38706 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__38707 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__38708 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__38709 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__38710 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__38711 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__38712 = zprint.zfns.zmap_all;
var zpromise_QMARK__orig_val__38713 = zprint.zfns.zpromise_QMARK_;
var zfuture_QMARK__orig_val__38714 = zprint.zfns.zfuture_QMARK_;
var zdelay_QMARK__orig_val__38715 = zprint.zfns.zdelay_QMARK_;
var zkeyword_QMARK__orig_val__38716 = zprint.zfns.zkeyword_QMARK_;
var zconstant_QMARK__orig_val__38717 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__38718 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__38719 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__38720 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__38721 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__38722 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__38723 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__38724 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__38725 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__38726 = zprint.zfns.zlift_ns;
var zinlinecomment_QMARK__orig_val__38727 = zprint.zfns.zinlinecomment_QMARK_;
var zfind_orig_val__38728 = zprint.zfns.zfind;
var ztake_append_orig_val__38729 = zprint.zfns.ztake_append;
var zstring_temp_val__38730 = rewrite_clj.zip.string;
var znumstr_temp_val__38731 = zprint.zutil.znumstr;
var zbyte_array_QMARK__temp_val__38732 = cljs.core.constantly.call(null,false);
var zcomment_QMARK__temp_val__38733 = zprint.zutil.zcomment_QMARK_;
var zsexpr_temp_val__38734 = zprint.zutil.sexpr;
var zseqnws_temp_val__38735 = zprint.zutil.zseqnws;
var zmap_right_temp_val__38736 = zprint.zutil.zmap_right;
var zfocus_style_temp_val__38737 = zprint.zutil.zfocus_style;
var zfirst_temp_val__38738 = zprint.zutil.zfirst;
var zfirst_no_comment_temp_val__38739 = zprint.zutil.zfirst_no_comment;
var zsecond_temp_val__38740 = zprint.zutil.zsecond;
var zthird_temp_val__38741 = zprint.zutil.zthird;
var zfourth_temp_val__38742 = zprint.zutil.zfourth;
var znthnext_temp_val__38743 = zprint.zutil.znthnext;
var zcount_temp_val__38744 = zprint.zutil.zcount;
var zmap_temp_val__38745 = zprint.zutil.zmap;
var zmap_w_nl_temp_val__38746 = zprint.zutil.zmap_w_nl;
var zanonfn_QMARK__temp_val__38747 = zprint.zutil.zanonfn_QMARK_;
var zfn_obj_QMARK__temp_val__38748 = cljs.core.constantly.call(null,false);
var zfocus_temp_val__38749 = zprint.zutil.zfocus;
var zfind_path_temp_val__38750 = zprint.zutil.find_root_and_path_nw;
var zwhitespace_QMARK__temp_val__38751 = zprint.zutil.whitespace_QMARK_;
var zlist_QMARK__temp_val__38752 = rewrite_clj.zip.list_QMARK_;
var zvector_QMARK__temp_val__38753 = rewrite_clj.zip.vector_QMARK_;
var zmap_QMARK__temp_val__38754 = rewrite_clj.zip.map_QMARK_;
var zset_QMARK__temp_val__38755 = rewrite_clj.zip.set_QMARK_;
var zcoll_QMARK__temp_val__38756 = zprint.zutil.z_coll_QMARK_;
var zuneval_QMARK__temp_val__38757 = zprint.zutil.zuneval_QMARK_;
var zmeta_QMARK__temp_val__38758 = zprint.zutil.zmeta_QMARK_;
var ztag_temp_val__38759 = zprint.zutil.ztag;
var zlast_temp_val__38760 = zprint.zutil.zlast;
var zarray_QMARK__temp_val__38761 = cljs.core.constantly.call(null,false);
var zatom_QMARK__temp_val__38762 = cljs.core.constantly.call(null,false);
var zderef_temp_val__38763 = cljs.core.constantly.call(null,false);
var zrecord_QMARK__temp_val__38764 = cljs.core.constantly.call(null,false);
var zns_QMARK__temp_val__38765 = cljs.core.constantly.call(null,false);
var zobj_to_vec_temp_val__38766 = cljs.core.constantly.call(null,null);
var zexpandarray_temp_val__38767 = cljs.core.constantly.call(null,null);
var znewline_QMARK__temp_val__38768 = zprint.zutil.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__temp_val__38769 = zprint.zutil.whitespace_or_comment_QMARK_;
var zmap_all_temp_val__38770 = zprint.zutil.zmap_all;
var zpromise_QMARK__temp_val__38771 = cljs.core.constantly.call(null,false);
var zfuture_QMARK__temp_val__38772 = cljs.core.constantly.call(null,false);
var zdelay_QMARK__temp_val__38773 = cljs.core.constantly.call(null,false);
var zkeyword_QMARK__temp_val__38774 = zprint.zutil.zkeyword_QMARK_;
var zconstant_QMARK__temp_val__38775 = zprint.zutil.zconstant_QMARK_;
var zagent_QMARK__temp_val__38776 = cljs.core.constantly.call(null,false);
var zreader_macro_QMARK__temp_val__38777 = zprint.zutil.zreader_macro_QMARK_;
var zarray_to_shift_seq_temp_val__38778 = cljs.core.constantly.call(null,null);
var zdotdotdot_temp_val__38779 = zprint.zutil.zdotdotdot;
var zsymbol_QMARK__temp_val__38780 = zprint.zutil.zsymbol_QMARK_;
var znil_QMARK__temp_val__38781 = zprint.zutil.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__38782 = zprint.zutil.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__temp_val__38783 = zprint.zutil.zreader_cond_w_coll_QMARK_;
var zlift_ns_temp_val__38784 = zprint.zutil.zlift_ns;
var zinlinecomment_QMARK__temp_val__38785 = zprint.zutil.zinlinecomment_QMARK_;
var zfind_temp_val__38786 = zprint.zutil.zfind;
var ztake_append_temp_val__38787 = zprint.zutil.ztake_append;
zprint.zfns.zstring = zstring_temp_val__38730;

zprint.zfns.znumstr = znumstr_temp_val__38731;

zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__temp_val__38732;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__38733;

zprint.zfns.zsexpr = zsexpr_temp_val__38734;

zprint.zfns.zseqnws = zseqnws_temp_val__38735;

zprint.zfns.zmap_right = zmap_right_temp_val__38736;

zprint.zfns.zfocus_style = zfocus_style_temp_val__38737;

zprint.zfns.zfirst = zfirst_temp_val__38738;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__38739;

zprint.zfns.zsecond = zsecond_temp_val__38740;

zprint.zfns.zthird = zthird_temp_val__38741;

zprint.zfns.zfourth = zfourth_temp_val__38742;

zprint.zfns.znthnext = znthnext_temp_val__38743;

zprint.zfns.zcount = zcount_temp_val__38744;

zprint.zfns.zmap = zmap_temp_val__38745;

zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__38746;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__38747;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__38748;

zprint.zfns.zfocus = zfocus_temp_val__38749;

zprint.zfns.zfind_path = zfind_path_temp_val__38750;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__38751;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__38752;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__38753;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__38754;

zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__38755;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__38756;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__38757;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__38758;

zprint.zfns.ztag = ztag_temp_val__38759;

zprint.zfns.zlast = zlast_temp_val__38760;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__38761;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__38762;

zprint.zfns.zderef = zderef_temp_val__38763;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__38764;

zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__38765;

zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__38766;

zprint.zfns.zexpandarray = zexpandarray_temp_val__38767;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__38768;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__38769;

zprint.zfns.zmap_all = zmap_all_temp_val__38770;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__38771;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__38772;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__38773;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__38774;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__38775;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__38776;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__38777;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__38778;

zprint.zfns.zdotdotdot = zdotdotdot_temp_val__38779;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__38780;

zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__38781;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__38782;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__38783;

zprint.zfns.zlift_ns = zlift_ns_temp_val__38784;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__temp_val__38785;

zprint.zfns.zfind = zfind_temp_val__38786;

zprint.zfns.ztake_append = ztake_append_temp_val__38787;

try{return body_fn.call(null);
}finally {zprint.zfns.ztake_append = ztake_append_orig_val__38729;

zprint.zfns.zfind = zfind_orig_val__38728;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__orig_val__38727;

zprint.zfns.zlift_ns = zlift_ns_orig_val__38726;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__38725;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__38724;

zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__38723;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__38722;

zprint.zfns.zdotdotdot = zdotdotdot_orig_val__38721;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__38720;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__38719;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__38718;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__38717;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__38716;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__38715;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__38714;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__38713;

zprint.zfns.zmap_all = zmap_all_orig_val__38712;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__38711;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__38710;

zprint.zfns.zexpandarray = zexpandarray_orig_val__38709;

zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__38708;

zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__38707;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__38706;

zprint.zfns.zderef = zderef_orig_val__38705;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__38704;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__38703;

zprint.zfns.zlast = zlast_orig_val__38702;

zprint.zfns.ztag = ztag_orig_val__38701;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__38700;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__38699;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__38698;

zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__38697;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__38696;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__38695;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__38694;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__38693;

zprint.zfns.zfind_path = zfind_path_orig_val__38692;

zprint.zfns.zfocus = zfocus_orig_val__38691;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__38690;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__38689;

zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__38688;

zprint.zfns.zmap = zmap_orig_val__38687;

zprint.zfns.zcount = zcount_orig_val__38686;

zprint.zfns.znthnext = znthnext_orig_val__38685;

zprint.zfns.zfourth = zfourth_orig_val__38684;

zprint.zfns.zthird = zthird_orig_val__38683;

zprint.zfns.zsecond = zsecond_orig_val__38682;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__38681;

zprint.zfns.zfirst = zfirst_orig_val__38680;

zprint.zfns.zfocus_style = zfocus_style_orig_val__38679;

zprint.zfns.zmap_right = zmap_right_orig_val__38678;

zprint.zfns.zseqnws = zseqnws_orig_val__38677;

zprint.zfns.zsexpr = zsexpr_orig_val__38676;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__38675;

zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__orig_val__38674;

zprint.zfns.znumstr = znumstr_orig_val__38673;

zprint.zfns.zstring = zstring_orig_val__38672;
}});

//# sourceMappingURL=zutil.js.map?rel=1575052412749
