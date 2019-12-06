// Compiled by ClojureScript 1.10.439 {}
goog.provide('zprint.sutil');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('cljs.reader');
/**
 * The string value of this sexpr.
 */
zprint.sutil.sstring = (function zprint$sutil$sstring(sexpr){
return cljs.core.pr_str.call(null,sexpr);
});
/**
 * Does pr-str.
 */
zprint.sutil.snumstr = (function zprint$sutil$snumstr(zloc,hex_QMARK_,shift_seq){
return cljs.core.pr_str.call(null,zloc);
});
/**
 * Return a seq of everything after this. Maps get
 *   special handling here, as a seq of a map is a bunch
 *   of map elements, which are pretty much vectors of
 *   [k v] pairs.
 */
zprint.sutil.sseqnws = (function zprint$sutil$sseqnws(sexpr){
if(cljs.core.map_QMARK_.call(null,sexpr)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,sexpr));
} else {
return cljs.core.seq.call(null,sexpr);
}
});
/**
 * Map a function of all of the elements to ther right
 *   of this.
 */
zprint.sutil.smap_right = (function zprint$sutil$smap_right(zfn,sexpr){
if(cljs.core.coll_QMARK_.call(null,sexpr)){
return cljs.core.mapv.call(null,zfn,cljs.core.next.call(null,sexpr));
} else {
return null;
}
});
/**
 * Considering the current sexpr a collection, move down into it and
 *   take n non-whitespace elements, dropping the rest.  Then append the
 *   given element to the end.
 */
zprint.sutil.stake_append = (function zprint$sutil$stake_append(n,sexpr,end_sexpr){
return cljs.core.concat.call(null,cljs.core.take.call(null,n,sexpr),(new cljs.core.List(null,end_sexpr,null,(1),null)));
});
/**
 * Take the various inputs and come up with a style.  But we
 *   don't do focus, so that's easy.
 */
zprint.sutil.sfocus_style = (function zprint$sutil$sfocus_style(style,_,sexpr){
return style;
});
/**
 * Find the nthnext of this sexpr.
 */
zprint.sutil.snthnext = (function zprint$sutil$snthnext(sexpr,n){
if(cljs.core.coll_QMARK_.call(null,sexpr)){
return cljs.core.nthnext.call(null,sexpr,n);
} else {
return null;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.sutil.sfind = (function zprint$sutil$sfind(zthing_QMARK_,sexpr){
if(cljs.core.coll_QMARK_.call(null,sexpr)){
var sloc = sexpr;
var i = (0);
while(true){
if(cljs.core.truth_(sloc)){
if(cljs.core.truth_(zthing_QMARK_.call(null,cljs.core.first.call(null,sloc)))){
return i;
} else {
var G__47586 = cljs.core.next.call(null,sloc);
var G__47587 = (i + (1));
sloc = G__47586;
i = G__47587;
continue;
}
} else {
return null;
}
break;
}
} else {
return null;
}
});
/**
 * How many children does sexpr have?
 */
zprint.sutil.scount = (function zprint$sutil$scount(sexpr){
if(cljs.core.coll_QMARK_.call(null,sexpr)){
return cljs.core.count.call(null,sexpr);
} else {
return (0);
}
});
/**
 * Return a vector containing the return of applying a function to
 *   every element inside of sexpr.
 */
zprint.sutil.smap = (function zprint$sutil$smap(zfn,sexpr){
var v = ((cljs.core.coll_QMARK_.call(null,sexpr))?cljs.core.mapv.call(null,zfn,sexpr):cljs.core.PersistentVector.EMPTY);
return v;
});
/**
 * Is this an anonymous fn?
 */
zprint.sutil.sfn_QMARK_ = (function zprint$sutil$sfn_QMARK_(sexpr){
return cljs.core.fn_QMARK_.call(null,sexpr);
});
/**
 * Is this the focus.  It is possible that this could
 *   be implemented with path's and such, but that is not a goal
 *   at this point.
 */
zprint.sutil.sfocus = (function zprint$sutil$sfocus(sexpr,fsexpr){
return null;
});
/**
 * This is inherently impossible, as we don't have
 *   an up capability.  But we could build one as we
 *   go down which would give us an up capability (or
 *   at least we would always know where we were).  An
 *   interesting idea, but for now, return essentially
 *   nothing.
 */
zprint.sutil.sfind_root_and_path = (function zprint$sutil$sfind_root_and_path(sexpr){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["root",cljs.core.PersistentVector.EMPTY], null);
});
/**
 * Return true if this is whitespace.  But as we
 *   don't have any whitespace in regular s-expressions,
 *   we will always return false.
 */
zprint.sutil.swhitespace_QMARK_ = (function zprint$sutil$swhitespace_QMARK_(sexpr){
return null;
});
/**
 * Do the first thing, with the right amount of arguments.
 */
zprint.sutil.sfirst = (function zprint$sutil$sfirst(sexpr){
return cljs.core.first.call(null,sexpr);
});
/**
 * Do the second thing, with the right amount of arguments.
 */
zprint.sutil.ssecond = (function zprint$sutil$ssecond(sexpr){
return cljs.core.second.call(null,sexpr);
});
/**
 * Define a third since we need one, and znth isn't really nth.
 */
zprint.sutil.sthird = (function zprint$sutil$sthird(sexpr){
return cljs.core.nth.call(null,sexpr,(2));
});
/**
 * Define a fourth since we need one, and znth isn't really nth.
 */
zprint.sutil.sfourth = (function zprint$sutil$sfourth(sexpr){
return cljs.core.nth.call(null,sexpr,(3));
});
/**
 * A list? that includes cons.
 */
zprint.sutil.slist_QMARK_ = (function zprint$sutil$slist_QMARK_(sexpr){
return ((cljs.core.list_QMARK_.call(null,sexpr)) || (cljs.core.seq_QMARK_.call(null,sexpr)));
});
/**
 * last which can take two arguments.
 */
zprint.sutil.slast = (function zprint$sutil$slast(sexpr){
if(cljs.core.coll_QMARK_.call(null,sexpr)){
return cljs.core.last.call(null,sexpr);
} else {
return sexpr;
}
});
/**
 * Is this an array?
 */
zprint.sutil.sarray_QMARK_ = (function zprint$sutil$sarray_QMARK_(x){
if(cljs.core.truth_(x)){
return cljs.core.array_QMARK_.call(null,x);
} else {
return null;
}
});
/**
 * Is this an atom?
 */
zprint.sutil.satom_QMARK_ = (function zprint$sutil$satom_QMARK_(x){
if(cljs.core.truth_(x)){
return null;
} else {
return null;
}
});
/**
 * Deref this thing.
 */
zprint.sutil.sderef = (function zprint$sutil$sderef(x){
return cljs.core.deref.call(null,x);
});
/**
 * Blow an array out into a vector.
 */
zprint.sutil.sexpandarray = (function zprint$sutil$sexpandarray(a){
return cljs.core.mapv.call(null,cljs.core.identity,a);
});
/**
 * Is this a namespace?
 */
zprint.sutil.sns_QMARK_ = (function zprint$sutil$sns_QMARK_(x){
if((x instanceof cljs.core.Symbol)){
return cljs.core.find_ns.call(null,x);
} else {
return null;
}
});
/**
 * Turn something whose pr-str starts with #object into a vector.
 *   obj is the thing that prints as #object, and val is its value.
 *   Two forms, one with and one w/out val.  val could be nil, or
 *   anything, so there isn't a particularly good sentinal here.
 */
zprint.sutil.sobj_to_vec = (function zprint$sutil$sobj_to_vec(var_args){
var G__47589 = arguments.length;
switch (G__47589) {
case 2:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2 = (function (obj,val){
var obj_term = clojure.string.split.call(null,clojure.string.replace.call(null,cljs.core.pr_str.call(null,obj),/^\#object\[/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.call(null,cljs.core.first.call(null,obj_term)),cljs.core.second.call(null,obj_term),val], null);
});

zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1 = (function (obj){
var obj_term = clojure.string.split.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.pr_str.call(null,obj),/^\#object\[/,""),/\]$/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.call(null,cljs.core.first.call(null,obj_term)),cljs.core.second.call(null,obj_term),cljs.reader.read_string.call(null,cljs.core.nth.call(null,obj_term,(2)))], null);
});

zprint.sutil.sobj_to_vec.cljs$lang$maxFixedArity = 2;

/**
 * Is this a promise?
 */
zprint.sutil.spromise_QMARK_ = (function zprint$sutil$spromise_QMARK_(x){
return null;
});
/**
 * Is this an agent?
 */
zprint.sutil.sagent_QMARK_ = (function zprint$sutil$sagent_QMARK_(x){
return null;
});
/**
 * Is this a constant?
 */
zprint.sutil.sconstant_QMARK_ = (function zprint$sutil$sconstant_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || (typeof x === 'string') || (typeof x === 'number') || (cljs.core._EQ_.call(null,"true",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))) || (cljs.core._EQ_.call(null,"false",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))));
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
zprint.sutil.slift_ns = (function zprint$sutil$slift_ns(pair_seq){
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
var vec__47591 = cljs.core.first.call(null,pair_seq__$1);
var seq__47592 = cljs.core.seq.call(null,vec__47591);
var first__47593 = cljs.core.first.call(null,seq__47592);
var seq__47592__$1 = cljs.core.next.call(null,seq__47592);
var k = first__47593;
var rest_of_pair = seq__47592__$1;
var pair = vec__47591;
var current_ns = ((((rest_of_pair) && ((((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))))))?cljs.core.namespace.call(null,k):null);
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
var G__47594 = ns;
var G__47595 = cljs.core.next.call(null,pair_seq__$1);
var G__47596 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,strip_ns.call(null,k),rest_of_pair));
ns = G__47594;
pair_seq__$1 = G__47595;
out = G__47596;
continue;
} else {
return null;
}
} else {
var G__47597 = current_ns;
var G__47598 = cljs.core.next.call(null,pair_seq__$1);
var G__47599 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,strip_ns.call(null,k),rest_of_pair));
ns = G__47597;
pair_seq__$1 = G__47598;
out = G__47599;
continue;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(1))){
var G__47600 = ns;
var G__47601 = cljs.core.next.call(null,pair_seq__$1);
var G__47602 = cljs.core.conj.call(null,out,pair);
ns = G__47600;
pair_seq__$1 = G__47601;
out = G__47602;
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
 * Redefine all of the traversal functions for s-expressions, then
 *   call the function of no arguments passed in.
 */
zprint.sutil.sredef_call = (function zprint$sutil$sredef_call(body_fn){
var zstring_orig_val__47603 = zprint.zfns.zstring;
var znumstr_orig_val__47604 = zprint.zfns.znumstr;
var zcomment_QMARK__orig_val__47605 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__47606 = zprint.zfns.zsexpr;
var zseqnws_orig_val__47607 = zprint.zfns.zseqnws;
var zmap_right_orig_val__47608 = zprint.zfns.zmap_right;
var zfocus_style_orig_val__47609 = zprint.zfns.zfocus_style;
var zfirst_orig_val__47610 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__47611 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__47612 = zprint.zfns.zsecond;
var zthird_orig_val__47613 = zprint.zfns.zthird;
var zfourth_orig_val__47614 = zprint.zfns.zfourth;
var znthnext_orig_val__47615 = zprint.zfns.znthnext;
var zcount_orig_val__47616 = zprint.zfns.zcount;
var zmap_orig_val__47617 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__47618 = zprint.zfns.zmap_w_nl;
var zanonfn_QMARK__orig_val__47619 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__47620 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__47621 = zprint.zfns.zfocus;
var zfind_path_orig_val__47622 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__47623 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__47624 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__47625 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__47626 = zprint.zfns.zmap_QMARK_;
var zset_QMARK__orig_val__47627 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__47628 = zprint.zfns.zcoll_QMARK_;
var zmeta_QMARK__orig_val__47629 = zprint.zfns.zmeta_QMARK_;
var zuneval_QMARK__orig_val__47630 = zprint.zfns.zuneval_QMARK_;
var ztag_orig_val__47631 = zprint.zfns.ztag;
var zlast_orig_val__47632 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__47633 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__47634 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__47635 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__47636 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__47637 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__47638 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__47639 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__47640 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__47641 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__47642 = zprint.zfns.zmap_all;
var zfuture_QMARK__orig_val__47643 = zprint.zfns.zfuture_QMARK_;
var zpromise_QMARK__orig_val__47644 = zprint.zfns.zpromise_QMARK_;
var zkeyword_QMARK__orig_val__47645 = zprint.zfns.zkeyword_QMARK_;
var zdelay_QMARK__orig_val__47646 = zprint.zfns.zdelay_QMARK_;
var zconstant_QMARK__orig_val__47647 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__47648 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__47649 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__47650 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__47651 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__47652 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__47653 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__47654 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__47655 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__47656 = zprint.zfns.zlift_ns;
var zinlinecomment_QMARK__orig_val__47657 = zprint.zfns.zinlinecomment_QMARK_;
var zfind_orig_val__47658 = zprint.zfns.zfind;
var ztake_append_orig_val__47659 = zprint.zfns.ztake_append;
var zstring_temp_val__47660 = zprint.sutil.sstring;
var znumstr_temp_val__47661 = zprint.sutil.snumstr;
var zcomment_QMARK__temp_val__47662 = cljs.core.constantly.call(null,false);
var zsexpr_temp_val__47663 = cljs.core.identity;
var zseqnws_temp_val__47664 = zprint.sutil.sseqnws;
var zmap_right_temp_val__47665 = zprint.sutil.smap_right;
var zfocus_style_temp_val__47666 = zprint.sutil.sfocus_style;
var zfirst_temp_val__47667 = zprint.sutil.sfirst;
var zfirst_no_comment_temp_val__47668 = zprint.sutil.sfirst;
var zsecond_temp_val__47669 = zprint.sutil.ssecond;
var zthird_temp_val__47670 = zprint.sutil.sthird;
var zfourth_temp_val__47671 = zprint.sutil.sfourth;
var znthnext_temp_val__47672 = zprint.sutil.snthnext;
var zcount_temp_val__47673 = zprint.sutil.scount;
var zmap_temp_val__47674 = zprint.sutil.smap;
var zmap_w_nl_temp_val__47675 = zprint.sutil.smap;
var zanonfn_QMARK__temp_val__47676 = cljs.core.constantly.call(null,false);
var zfn_obj_QMARK__temp_val__47677 = cljs.core.fn_QMARK_;
var zfocus_temp_val__47678 = zprint.sutil.sfocus;
var zfind_path_temp_val__47679 = zprint.sutil.sfind_root_and_path;
var zwhitespace_QMARK__temp_val__47680 = zprint.sutil.swhitespace_QMARK_;
var zlist_QMARK__temp_val__47681 = zprint.sutil.slist_QMARK_;
var zvector_QMARK__temp_val__47682 = cljs.core.vector_QMARK_;
var zmap_QMARK__temp_val__47683 = cljs.core.map_QMARK_;
var zset_QMARK__temp_val__47684 = cljs.core.set_QMARK_;
var zcoll_QMARK__temp_val__47685 = cljs.core.coll_QMARK_;
var zmeta_QMARK__temp_val__47686 = cljs.core.constantly.call(null,false);
var zuneval_QMARK__temp_val__47687 = cljs.core.constantly.call(null,false);
var ztag_temp_val__47688 = cljs.core.constantly.call(null,null);
var zlast_temp_val__47689 = zprint.sutil.slast;
var zarray_QMARK__temp_val__47690 = zprint.sutil.sarray_QMARK_;
var zatom_QMARK__temp_val__47691 = zprint.sutil.satom_QMARK_;
var zderef_temp_val__47692 = zprint.sutil.sderef;
var zrecord_QMARK__temp_val__47693 = cljs.core.record_QMARK_;
var zns_QMARK__temp_val__47694 = cljs.core.constantly.call(null,false);
var zobj_to_vec_temp_val__47695 = zprint.sutil.sobj_to_vec;
var zexpandarray_temp_val__47696 = zprint.sutil.sexpandarray;
var znewline_QMARK__temp_val__47697 = cljs.core.constantly.call(null,false);
var zwhitespaceorcomment_QMARK__temp_val__47698 = cljs.core.constantly.call(null,false);
var zmap_all_temp_val__47699 = cljs.core.map;
var zfuture_QMARK__temp_val__47700 = cljs.core.constantly.call(null,false);
var zpromise_QMARK__temp_val__47701 = zprint.sutil.spromise_QMARK_;
var zkeyword_QMARK__temp_val__47702 = cljs.core.keyword_QMARK_;
var zdelay_QMARK__temp_val__47703 = cljs.core.delay_QMARK_;
var zconstant_QMARK__temp_val__47704 = zprint.sutil.sconstant_QMARK_;
var zagent_QMARK__temp_val__47705 = zprint.sutil.sagent_QMARK_;
var zreader_macro_QMARK__temp_val__47706 = cljs.core.constantly.call(null,false);
var zarray_to_shift_seq_temp_val__47707 = null;
var zdotdotdot_temp_val__47708 = cljs.core.constantly.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null));
var zsymbol_QMARK__temp_val__47709 = cljs.core.symbol_QMARK_;
var znil_QMARK__temp_val__47710 = cljs.core.nil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__47711 = cljs.core.constantly.call(null,false);
var zreader_cond_w_coll_QMARK__temp_val__47712 = cljs.core.constantly.call(null,false);
var zlift_ns_temp_val__47713 = zprint.sutil.slift_ns;
var zinlinecomment_QMARK__temp_val__47714 = cljs.core.constantly.call(null,false);
var zfind_temp_val__47715 = zprint.sutil.sfind;
var ztake_append_temp_val__47716 = zprint.sutil.stake_append;
zprint.zfns.zstring = zstring_temp_val__47660;

zprint.zfns.znumstr = znumstr_temp_val__47661;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__47662;

zprint.zfns.zsexpr = zsexpr_temp_val__47663;

zprint.zfns.zseqnws = zseqnws_temp_val__47664;

zprint.zfns.zmap_right = zmap_right_temp_val__47665;

zprint.zfns.zfocus_style = zfocus_style_temp_val__47666;

zprint.zfns.zfirst = zfirst_temp_val__47667;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__47668;

zprint.zfns.zsecond = zsecond_temp_val__47669;

zprint.zfns.zthird = zthird_temp_val__47670;

zprint.zfns.zfourth = zfourth_temp_val__47671;

zprint.zfns.znthnext = znthnext_temp_val__47672;

zprint.zfns.zcount = zcount_temp_val__47673;

zprint.zfns.zmap = zmap_temp_val__47674;

zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__47675;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__47676;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__47677;

zprint.zfns.zfocus = zfocus_temp_val__47678;

zprint.zfns.zfind_path = zfind_path_temp_val__47679;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__47680;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__47681;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__47682;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__47683;

zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__47684;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__47685;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__47686;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__47687;

zprint.zfns.ztag = ztag_temp_val__47688;

zprint.zfns.zlast = zlast_temp_val__47689;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__47690;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__47691;

zprint.zfns.zderef = zderef_temp_val__47692;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__47693;

zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__47694;

zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__47695;

zprint.zfns.zexpandarray = zexpandarray_temp_val__47696;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__47697;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__47698;

zprint.zfns.zmap_all = zmap_all_temp_val__47699;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__47700;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__47701;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__47702;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__47703;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__47704;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__47705;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__47706;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__47707;

zprint.zfns.zdotdotdot = zdotdotdot_temp_val__47708;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__47709;

zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__47710;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__47711;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__47712;

zprint.zfns.zlift_ns = zlift_ns_temp_val__47713;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__temp_val__47714;

zprint.zfns.zfind = zfind_temp_val__47715;

zprint.zfns.ztake_append = ztake_append_temp_val__47716;

try{return body_fn.call(null);
}finally {zprint.zfns.ztake_append = ztake_append_orig_val__47659;

zprint.zfns.zfind = zfind_orig_val__47658;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__orig_val__47657;

zprint.zfns.zlift_ns = zlift_ns_orig_val__47656;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__47655;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__47654;

zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__47653;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__47652;

zprint.zfns.zdotdotdot = zdotdotdot_orig_val__47651;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__47650;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__47649;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__47648;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__47647;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__47646;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__47645;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__47644;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__47643;

zprint.zfns.zmap_all = zmap_all_orig_val__47642;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__47641;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__47640;

zprint.zfns.zexpandarray = zexpandarray_orig_val__47639;

zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__47638;

zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__47637;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__47636;

zprint.zfns.zderef = zderef_orig_val__47635;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__47634;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__47633;

zprint.zfns.zlast = zlast_orig_val__47632;

zprint.zfns.ztag = ztag_orig_val__47631;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__47630;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__47629;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__47628;

zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__47627;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__47626;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__47625;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__47624;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__47623;

zprint.zfns.zfind_path = zfind_path_orig_val__47622;

zprint.zfns.zfocus = zfocus_orig_val__47621;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__47620;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__47619;

zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__47618;

zprint.zfns.zmap = zmap_orig_val__47617;

zprint.zfns.zcount = zcount_orig_val__47616;

zprint.zfns.znthnext = znthnext_orig_val__47615;

zprint.zfns.zfourth = zfourth_orig_val__47614;

zprint.zfns.zthird = zthird_orig_val__47613;

zprint.zfns.zsecond = zsecond_orig_val__47612;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__47611;

zprint.zfns.zfirst = zfirst_orig_val__47610;

zprint.zfns.zfocus_style = zfocus_style_orig_val__47609;

zprint.zfns.zmap_right = zmap_right_orig_val__47608;

zprint.zfns.zseqnws = zseqnws_orig_val__47607;

zprint.zfns.zsexpr = zsexpr_orig_val__47606;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__47605;

zprint.zfns.znumstr = znumstr_orig_val__47604;

zprint.zfns.zstring = zstring_orig_val__47603;
}});

//# sourceMappingURL=sutil.js.map?rel=1575465431127
