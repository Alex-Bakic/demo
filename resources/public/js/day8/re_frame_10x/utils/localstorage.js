// Compiled by ClojureScript 1.10.439 {}
goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.utils.localstorage.safe_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__36781 = arguments.length;
switch (G__36781) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.call(null,key,null);
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.call(null,value);
}
});

day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2;

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key),cljs.core.pr_str.call(null,value));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__36783 = cljs.core.seq.call(null,Object.keys(localStorage));
var chunk__36784 = null;
var count__36785 = (0);
var i__36786 = (0);
while(true){
if((i__36786 < count__36785)){
var k = cljs.core._nth.call(null,chunk__36784,i__36786);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__36787 = seq__36783;
var G__36788 = chunk__36784;
var G__36789 = count__36785;
var G__36790 = (i__36786 + (1));
seq__36783 = G__36787;
chunk__36784 = G__36788;
count__36785 = G__36789;
i__36786 = G__36790;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__36783);
if(temp__5720__auto__){
var seq__36783__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36783__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__36783__$1);
var G__36791 = cljs.core.chunk_rest.call(null,seq__36783__$1);
var G__36792 = c__4461__auto__;
var G__36793 = cljs.core.count.call(null,c__4461__auto__);
var G__36794 = (0);
seq__36783 = G__36791;
chunk__36784 = G__36792;
count__36785 = G__36793;
i__36786 = G__36794;
continue;
} else {
var k = cljs.core.first.call(null,seq__36783__$1);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__36795 = cljs.core.next.call(null,seq__36783__$1);
var G__36796 = null;
var G__36797 = (0);
var G__36798 = (0);
seq__36783 = G__36795;
chunk__36784 = G__36796;
count__36785 = G__36797;
i__36786 = G__36798;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=localstorage.js.map?rel=1575052461106
