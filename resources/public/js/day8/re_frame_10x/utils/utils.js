// Compiled by ClojureScript 1.10.439 {}
goog.provide('day8.re_frame_10x.utils.utils');
goog.require('cljs.core');
day8.re_frame_10x.utils.utils.diff_link = "https://github.com/Day8/re-frame-10x/blob/master/docs/HyperlinkedInformation/Diffs.md";
/**
 * Get the last element in the vector. Returns nil if v is empty
 */
day8.re_frame_10x.utils.utils.last_in_vec = (function day8$re_frame_10x$utils$utils$last_in_vec(v){
var num = cljs.core.count.call(null,v);
if((num === (0))){
return null;
} else {
return cljs.core.nth.call(null,v,(num - (1)));
}
});
/**
 * Gets the index of all items in vec that match the predicate
 */
day8.re_frame_10x.utils.utils.find_all_indexes_in_vec = (function day8$re_frame_10x$utils$utils$find_all_indexes_in_vec(pred,v){
return cljs.core.keep_indexed.call(null,(function (p1__39698_SHARP_,p2__39697_SHARP_){
if(cljs.core.truth_(pred.call(null,p2__39697_SHARP_))){
return p1__39698_SHARP_;
} else {
return null;
}
}),v);
});
/**
 * Gets the index of the first item in vec that matches the predicate
 */
day8.re_frame_10x.utils.utils.find_index_in_vec = (function day8$re_frame_10x$utils$utils$find_index_in_vec(pred,v){
return cljs.core.first.call(null,day8.re_frame_10x.utils.utils.find_all_indexes_in_vec.call(null,pred,v));
});
/**
 * Returns a transducer that filters for :id between beginning and ending.
 */
day8.re_frame_10x.utils.utils.id_between_xf = (function day8$re_frame_10x$utils$utils$id_between_xf(beginning,ending){
return cljs.core.filter.call(null,(function (p1__39699_SHARP_){
return (((beginning <= new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__39699_SHARP_))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__39699_SHARP_) <= ending)));
}));
});
day8.re_frame_10x.utils.utils.spy = (function day8$re_frame_10x$utils$utils$spy(var_args){
var G__39701 = arguments.length;
switch (G__39701) {
case 1:
return day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$1 = (function (x){
console.log(x);

return x;
});

day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$2 = (function (label,x){
console.log(label,x);

return x;
});

day8.re_frame_10x.utils.utils.spy.cljs$lang$maxFixedArity = 2;

/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.utils.utils.pluralize = (function day8$re_frame_10x$utils$utils$pluralize(var_args){
var args__4647__auto__ = [];
var len__4641__auto___39710 = arguments.length;
var i__4642__auto___39711 = (0);
while(true){
if((i__4642__auto___39711 < len__4641__auto___39710)){
args__4647__auto__.push((arguments[i__4642__auto___39711]));

var G__39712 = (i__4642__auto___39711 + (1));
i__4642__auto___39711 = G__39712;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.utils.utils.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

day8.re_frame_10x.utils.utils.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__39706){
var vec__39707 = p__39706;
var plural = cljs.core.nth.call(null,vec__39707,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,(1),num))?singular:(function (){var or__4047__auto__ = plural;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
});

day8.re_frame_10x.utils.utils.pluralize.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame_10x.utils.utils.pluralize.cljs$lang$applyTo = (function (seq39703){
var G__39704 = cljs.core.first.call(null,seq39703);
var seq39703__$1 = cljs.core.next.call(null,seq39703);
var G__39705 = cljs.core.first.call(null,seq39703__$1);
var seq39703__$2 = cljs.core.next.call(null,seq39703__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39704,G__39705,seq39703__$2);
});

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.utils.utils.pluralize_ = (function day8$re_frame_10x$utils$utils$pluralize_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___39720 = arguments.length;
var i__4642__auto___39721 = (0);
while(true){
if((i__4642__auto___39721 < len__4641__auto___39720)){
args__4647__auto__.push((arguments[i__4642__auto___39721]));

var G__39722 = (i__4642__auto___39721 + (1));
i__4642__auto___39721 = G__39722;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.utils.utils.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

day8.re_frame_10x.utils.utils.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__39716){
var vec__39717 = p__39716;
var plural = cljs.core.nth.call(null,vec__39717,(0),null);
if(cljs.core._EQ_.call(null,(1),num)){
return singular;
} else {
var or__4047__auto__ = plural;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
});

day8.re_frame_10x.utils.utils.pluralize_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame_10x.utils.utils.pluralize_.cljs$lang$applyTo = (function (seq39713){
var G__39714 = cljs.core.first.call(null,seq39713);
var seq39713__$1 = cljs.core.next.call(null,seq39713);
var G__39715 = cljs.core.first.call(null,seq39713__$1);
var seq39713__$2 = cljs.core.next.call(null,seq39713__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39714,G__39715,seq39713__$2);
});

day8.re_frame_10x.utils.utils.copy_to_clipboard = (function day8$re_frame_10x$utils$utils$copy_to_clipboard(text){
var el = document.createElement("textarea");
el.value = text;

el.style.position = "absolute";

el.style.left = "-9999px";

document.body.appendChild(el);

el.select();

document.execCommand("copy");

return document.body.removeChild(el);
});
day8.re_frame_10x.utils.utils.default_readers = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"uuid","uuid",-504564192,null),(function day8$re_frame_10x$utils$utils$default_uuid_reader(form){
if(typeof form === 'string'){
} else {
throw (new Error("Assert failed: (string? form)"));
}

return cljs.core.uuid.call(null,form);
})], null);

//# sourceMappingURL=utils.js.map?rel=1575052414365
