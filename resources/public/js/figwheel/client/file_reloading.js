// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4047__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__59720_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__59720_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__59721 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__59722 = null;
var count__59723 = (0);
var i__59724 = (0);
while(true){
if((i__59724 < count__59723)){
var n = cljs.core._nth.call(null,chunk__59722,i__59724);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__59725 = seq__59721;
var G__59726 = chunk__59722;
var G__59727 = count__59723;
var G__59728 = (i__59724 + (1));
seq__59721 = G__59725;
chunk__59722 = G__59726;
count__59723 = G__59727;
i__59724 = G__59728;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__59721);
if(temp__5720__auto__){
var seq__59721__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59721__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__59721__$1);
var G__59729 = cljs.core.chunk_rest.call(null,seq__59721__$1);
var G__59730 = c__4461__auto__;
var G__59731 = cljs.core.count.call(null,c__4461__auto__);
var G__59732 = (0);
seq__59721 = G__59729;
chunk__59722 = G__59730;
count__59723 = G__59731;
i__59724 = G__59732;
continue;
} else {
var n = cljs.core.first.call(null,seq__59721__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__59733 = cljs.core.next.call(null,seq__59721__$1);
var G__59734 = null;
var G__59735 = (0);
var G__59736 = (0);
seq__59721 = G__59733;
chunk__59722 = G__59734;
count__59723 = G__59735;
i__59724 = G__59736;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__59737){
var vec__59738 = p__59737;
var _ = cljs.core.nth.call(null,vec__59738,(0),null);
var v = cljs.core.nth.call(null,vec__59738,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__59741){
var vec__59742 = p__59741;
var k = cljs.core.nth.call(null,vec__59742,(0),null);
var v = cljs.core.nth.call(null,vec__59742,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__59754_59762 = cljs.core.seq.call(null,deps);
var chunk__59755_59763 = null;
var count__59756_59764 = (0);
var i__59757_59765 = (0);
while(true){
if((i__59757_59765 < count__59756_59764)){
var dep_59766 = cljs.core._nth.call(null,chunk__59755_59763,i__59757_59765);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_59766;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_59766));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_59766,(depth + (1)),state);
} else {
}


var G__59767 = seq__59754_59762;
var G__59768 = chunk__59755_59763;
var G__59769 = count__59756_59764;
var G__59770 = (i__59757_59765 + (1));
seq__59754_59762 = G__59767;
chunk__59755_59763 = G__59768;
count__59756_59764 = G__59769;
i__59757_59765 = G__59770;
continue;
} else {
var temp__5720__auto___59771 = cljs.core.seq.call(null,seq__59754_59762);
if(temp__5720__auto___59771){
var seq__59754_59772__$1 = temp__5720__auto___59771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59754_59772__$1)){
var c__4461__auto___59773 = cljs.core.chunk_first.call(null,seq__59754_59772__$1);
var G__59774 = cljs.core.chunk_rest.call(null,seq__59754_59772__$1);
var G__59775 = c__4461__auto___59773;
var G__59776 = cljs.core.count.call(null,c__4461__auto___59773);
var G__59777 = (0);
seq__59754_59762 = G__59774;
chunk__59755_59763 = G__59775;
count__59756_59764 = G__59776;
i__59757_59765 = G__59777;
continue;
} else {
var dep_59778 = cljs.core.first.call(null,seq__59754_59772__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_59778;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_59778));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_59778,(depth + (1)),state);
} else {
}


var G__59779 = cljs.core.next.call(null,seq__59754_59772__$1);
var G__59780 = null;
var G__59781 = (0);
var G__59782 = (0);
seq__59754_59762 = G__59779;
chunk__59755_59763 = G__59780;
count__59756_59764 = G__59781;
i__59757_59765 = G__59782;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__59758){
var vec__59759 = p__59758;
var seq__59760 = cljs.core.seq.call(null,vec__59759);
var first__59761 = cljs.core.first.call(null,seq__59760);
var seq__59760__$1 = cljs.core.next.call(null,seq__59760);
var x = first__59761;
var xs = seq__59760__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__59759,seq__59760,first__59761,seq__59760__$1,x,xs,get_deps__$1){
return (function (p1__59745_SHARP_){
return clojure.set.difference.call(null,p1__59745_SHARP_,x);
});})(vec__59759,seq__59760,first__59761,seq__59760__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__59783 = cljs.core.seq.call(null,provides);
var chunk__59784 = null;
var count__59785 = (0);
var i__59786 = (0);
while(true){
if((i__59786 < count__59785)){
var prov = cljs.core._nth.call(null,chunk__59784,i__59786);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__59787_59795 = cljs.core.seq.call(null,requires);
var chunk__59788_59796 = null;
var count__59789_59797 = (0);
var i__59790_59798 = (0);
while(true){
if((i__59790_59798 < count__59789_59797)){
var req_59799 = cljs.core._nth.call(null,chunk__59788_59796,i__59790_59798);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_59799,prov);


var G__59800 = seq__59787_59795;
var G__59801 = chunk__59788_59796;
var G__59802 = count__59789_59797;
var G__59803 = (i__59790_59798 + (1));
seq__59787_59795 = G__59800;
chunk__59788_59796 = G__59801;
count__59789_59797 = G__59802;
i__59790_59798 = G__59803;
continue;
} else {
var temp__5720__auto___59804 = cljs.core.seq.call(null,seq__59787_59795);
if(temp__5720__auto___59804){
var seq__59787_59805__$1 = temp__5720__auto___59804;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59787_59805__$1)){
var c__4461__auto___59806 = cljs.core.chunk_first.call(null,seq__59787_59805__$1);
var G__59807 = cljs.core.chunk_rest.call(null,seq__59787_59805__$1);
var G__59808 = c__4461__auto___59806;
var G__59809 = cljs.core.count.call(null,c__4461__auto___59806);
var G__59810 = (0);
seq__59787_59795 = G__59807;
chunk__59788_59796 = G__59808;
count__59789_59797 = G__59809;
i__59790_59798 = G__59810;
continue;
} else {
var req_59811 = cljs.core.first.call(null,seq__59787_59805__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_59811,prov);


var G__59812 = cljs.core.next.call(null,seq__59787_59805__$1);
var G__59813 = null;
var G__59814 = (0);
var G__59815 = (0);
seq__59787_59795 = G__59812;
chunk__59788_59796 = G__59813;
count__59789_59797 = G__59814;
i__59790_59798 = G__59815;
continue;
}
} else {
}
}
break;
}


var G__59816 = seq__59783;
var G__59817 = chunk__59784;
var G__59818 = count__59785;
var G__59819 = (i__59786 + (1));
seq__59783 = G__59816;
chunk__59784 = G__59817;
count__59785 = G__59818;
i__59786 = G__59819;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__59783);
if(temp__5720__auto__){
var seq__59783__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59783__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__59783__$1);
var G__59820 = cljs.core.chunk_rest.call(null,seq__59783__$1);
var G__59821 = c__4461__auto__;
var G__59822 = cljs.core.count.call(null,c__4461__auto__);
var G__59823 = (0);
seq__59783 = G__59820;
chunk__59784 = G__59821;
count__59785 = G__59822;
i__59786 = G__59823;
continue;
} else {
var prov = cljs.core.first.call(null,seq__59783__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__59791_59824 = cljs.core.seq.call(null,requires);
var chunk__59792_59825 = null;
var count__59793_59826 = (0);
var i__59794_59827 = (0);
while(true){
if((i__59794_59827 < count__59793_59826)){
var req_59828 = cljs.core._nth.call(null,chunk__59792_59825,i__59794_59827);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_59828,prov);


var G__59829 = seq__59791_59824;
var G__59830 = chunk__59792_59825;
var G__59831 = count__59793_59826;
var G__59832 = (i__59794_59827 + (1));
seq__59791_59824 = G__59829;
chunk__59792_59825 = G__59830;
count__59793_59826 = G__59831;
i__59794_59827 = G__59832;
continue;
} else {
var temp__5720__auto___59833__$1 = cljs.core.seq.call(null,seq__59791_59824);
if(temp__5720__auto___59833__$1){
var seq__59791_59834__$1 = temp__5720__auto___59833__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59791_59834__$1)){
var c__4461__auto___59835 = cljs.core.chunk_first.call(null,seq__59791_59834__$1);
var G__59836 = cljs.core.chunk_rest.call(null,seq__59791_59834__$1);
var G__59837 = c__4461__auto___59835;
var G__59838 = cljs.core.count.call(null,c__4461__auto___59835);
var G__59839 = (0);
seq__59791_59824 = G__59836;
chunk__59792_59825 = G__59837;
count__59793_59826 = G__59838;
i__59794_59827 = G__59839;
continue;
} else {
var req_59840 = cljs.core.first.call(null,seq__59791_59834__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_59840,prov);


var G__59841 = cljs.core.next.call(null,seq__59791_59834__$1);
var G__59842 = null;
var G__59843 = (0);
var G__59844 = (0);
seq__59791_59824 = G__59841;
chunk__59792_59825 = G__59842;
count__59793_59826 = G__59843;
i__59794_59827 = G__59844;
continue;
}
} else {
}
}
break;
}


var G__59845 = cljs.core.next.call(null,seq__59783__$1);
var G__59846 = null;
var G__59847 = (0);
var G__59848 = (0);
seq__59783 = G__59845;
chunk__59784 = G__59846;
count__59785 = G__59847;
i__59786 = G__59848;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__59849_59853 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__59850_59854 = null;
var count__59851_59855 = (0);
var i__59852_59856 = (0);
while(true){
if((i__59852_59856 < count__59851_59855)){
var ns_59857 = cljs.core._nth.call(null,chunk__59850_59854,i__59852_59856);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_59857);


var G__59858 = seq__59849_59853;
var G__59859 = chunk__59850_59854;
var G__59860 = count__59851_59855;
var G__59861 = (i__59852_59856 + (1));
seq__59849_59853 = G__59858;
chunk__59850_59854 = G__59859;
count__59851_59855 = G__59860;
i__59852_59856 = G__59861;
continue;
} else {
var temp__5720__auto___59862 = cljs.core.seq.call(null,seq__59849_59853);
if(temp__5720__auto___59862){
var seq__59849_59863__$1 = temp__5720__auto___59862;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59849_59863__$1)){
var c__4461__auto___59864 = cljs.core.chunk_first.call(null,seq__59849_59863__$1);
var G__59865 = cljs.core.chunk_rest.call(null,seq__59849_59863__$1);
var G__59866 = c__4461__auto___59864;
var G__59867 = cljs.core.count.call(null,c__4461__auto___59864);
var G__59868 = (0);
seq__59849_59853 = G__59865;
chunk__59850_59854 = G__59866;
count__59851_59855 = G__59867;
i__59852_59856 = G__59868;
continue;
} else {
var ns_59869 = cljs.core.first.call(null,seq__59849_59863__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_59869);


var G__59870 = cljs.core.next.call(null,seq__59849_59863__$1);
var G__59871 = null;
var G__59872 = (0);
var G__59873 = (0);
seq__59849_59853 = G__59870;
chunk__59850_59854 = G__59871;
count__59851_59855 = G__59872;
i__59852_59856 = G__59873;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4047__auto__ = goog.require__;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__59874__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__59874 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59875__i = 0, G__59875__a = new Array(arguments.length -  0);
while (G__59875__i < G__59875__a.length) {G__59875__a[G__59875__i] = arguments[G__59875__i + 0]; ++G__59875__i;}
  args = new cljs.core.IndexedSeq(G__59875__a,0,null);
} 
return G__59874__delegate.call(this,args);};
G__59874.cljs$lang$maxFixedArity = 0;
G__59874.cljs$lang$applyTo = (function (arglist__59876){
var args = cljs.core.seq(arglist__59876);
return G__59874__delegate(args);
});
G__59874.cljs$core$IFn$_invoke$arity$variadic = G__59874__delegate;
return G__59874;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__59877_SHARP_,p2__59878_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__59877_SHARP_)),p2__59878_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__59879_SHARP_,p2__59880_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__59879_SHARP_),p2__59880_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__59881 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__59881.addCallback(((function (G__59881){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__59881))
);

G__59881.addErrback(((function (G__59881){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__59881))
);

return G__59881;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e59882){if((e59882 instanceof Error)){
var e = e59882;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e59882;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e59883){if((e59883 instanceof Error)){
var e = e59883;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e59883;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__59884 = cljs.core._EQ_;
var expr__59885 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__59884.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__59885))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__59884.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__59885))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__59884.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__59885))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__59884,expr__59885){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__59884,expr__59885))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__59887,callback){
var map__59888 = p__59887;
var map__59888__$1 = (((((!((map__59888 == null))))?(((((map__59888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59888):map__59888);
var file_msg = map__59888__$1;
var request_url = cljs.core.get.call(null,map__59888__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__59888,map__59888__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__59888,map__59888__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__55153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55153__auto__){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (c__55153__auto__){
return (function (state_59926){
var state_val_59927 = (state_59926[(1)]);
if((state_val_59927 === (7))){
var inst_59922 = (state_59926[(2)]);
var state_59926__$1 = state_59926;
var statearr_59928_59954 = state_59926__$1;
(statearr_59928_59954[(2)] = inst_59922);

(statearr_59928_59954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59927 === (1))){
var state_59926__$1 = state_59926;
var statearr_59929_59955 = state_59926__$1;
(statearr_59929_59955[(2)] = null);

(statearr_59929_59955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59927 === (4))){
var inst_59892 = (state_59926[(7)]);
var inst_59892__$1 = (state_59926[(2)]);
var state_59926__$1 = (function (){var statearr_59930 = state_59926;
(statearr_59930[(7)] = inst_59892__$1);

return statearr_59930;
})();
if(cljs.core.truth_(inst_59892__$1)){
var statearr_59931_59956 = state_59926__$1;
(statearr_59931_59956[(1)] = (5));

} else {
var statearr_59932_59957 = state_59926__$1;
(statearr_59932_59957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59927 === (15))){
var inst_59905 = (state_59926[(8)]);
var inst_59907 = (state_59926[(9)]);
var inst_59909 = inst_59907.call(null,inst_59905);
var state_59926__$1 = state_59926;
var statearr_59933_59958 = state_59926__$1;
(statearr_59933_59958[(2)] = inst_59909);

(statearr_59933_59958[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59927 === (13))){
var inst_59916 = (state_59926[(2)]);
var state_59926__$1 = state_59926;
var statearr_59934_59959 = state_59926__$1;
(statearr_59934_59959[(2)] = inst_59916);

(statearr_59934_59959[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59927 === (6))){
var state_59926__$1 = state_59926;
var statearr_59935_59960 = state_59926__$1;
(statearr_59935_59960[(2)] = null);

(statearr_59935_59960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59927 === (17))){
var inst_59913 = (state_59926[(2)]);
var state_59926__$1 = state_59926;
var statearr_59936_59961 = state_59926__$1;
(statearr_59936_59961[(2)] = inst_59913);

(statearr_59936_59961[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59927 === (3))){
var inst_59924 = (state_59926[(2)]);
var state_59926__$1 = state_59926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59926__$1,inst_59924);
} else {
if((state_val_59927 === (12))){
var state_59926__$1 = state_59926;
var statearr_59937_59962 = state_59926__$1;
(statearr_59937_59962[(2)] = null);

(statearr_59937_59962[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59927 === (2))){
var state_59926__$1 = state_59926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59926__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_59927 === (11))){
var inst_59897 = (state_59926[(10)]);
var inst_59903 = figwheel.client.file_reloading.blocking_load.call(null,inst_59897);
var state_59926__$1 = state_59926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59926__$1,(14),inst_59903);
} else {
if((state_val_59927 === (9))){
var inst_59897 = (state_59926[(10)]);
var state_59926__$1 = state_59926;
if(cljs.core.truth_(inst_59897)){
var statearr_59938_59963 = state_59926__$1;
(statearr_59938_59963[(1)] = (11));

} else {
var statearr_59939_59964 = state_59926__$1;
(statearr_59939_59964[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59927 === (5))){
var inst_59892 = (state_59926[(7)]);
var inst_59898 = (state_59926[(11)]);
var inst_59897 = cljs.core.nth.call(null,inst_59892,(0),null);
var inst_59898__$1 = cljs.core.nth.call(null,inst_59892,(1),null);
var state_59926__$1 = (function (){var statearr_59940 = state_59926;
(statearr_59940[(10)] = inst_59897);

(statearr_59940[(11)] = inst_59898__$1);

return statearr_59940;
})();
if(cljs.core.truth_(inst_59898__$1)){
var statearr_59941_59965 = state_59926__$1;
(statearr_59941_59965[(1)] = (8));

} else {
var statearr_59942_59966 = state_59926__$1;
(statearr_59942_59966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59927 === (14))){
var inst_59907 = (state_59926[(9)]);
var inst_59897 = (state_59926[(10)]);
var inst_59905 = (state_59926[(2)]);
var inst_59906 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_59907__$1 = cljs.core.get.call(null,inst_59906,inst_59897);
var state_59926__$1 = (function (){var statearr_59943 = state_59926;
(statearr_59943[(8)] = inst_59905);

(statearr_59943[(9)] = inst_59907__$1);

return statearr_59943;
})();
if(cljs.core.truth_(inst_59907__$1)){
var statearr_59944_59967 = state_59926__$1;
(statearr_59944_59967[(1)] = (15));

} else {
var statearr_59945_59968 = state_59926__$1;
(statearr_59945_59968[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59927 === (16))){
var inst_59905 = (state_59926[(8)]);
var inst_59911 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_59905);
var state_59926__$1 = state_59926;
var statearr_59946_59969 = state_59926__$1;
(statearr_59946_59969[(2)] = inst_59911);

(statearr_59946_59969[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59927 === (10))){
var inst_59918 = (state_59926[(2)]);
var state_59926__$1 = (function (){var statearr_59947 = state_59926;
(statearr_59947[(12)] = inst_59918);

return statearr_59947;
})();
var statearr_59948_59970 = state_59926__$1;
(statearr_59948_59970[(2)] = null);

(statearr_59948_59970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59927 === (8))){
var inst_59898 = (state_59926[(11)]);
var inst_59900 = eval(inst_59898);
var state_59926__$1 = state_59926;
var statearr_59949_59971 = state_59926__$1;
(statearr_59949_59971[(2)] = inst_59900);

(statearr_59949_59971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__55153__auto__))
;
return ((function (switch__54986__auto__,c__55153__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__54987__auto__ = null;
var figwheel$client$file_reloading$state_machine__54987__auto____0 = (function (){
var statearr_59950 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59950[(0)] = figwheel$client$file_reloading$state_machine__54987__auto__);

(statearr_59950[(1)] = (1));

return statearr_59950;
});
var figwheel$client$file_reloading$state_machine__54987__auto____1 = (function (state_59926){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_59926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e59951){if((e59951 instanceof Object)){
var ex__54990__auto__ = e59951;
var statearr_59952_59972 = state_59926;
(statearr_59952_59972[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59973 = state_59926;
state_59926 = G__59973;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__54987__auto__ = function(state_59926){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__54987__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__54987__auto____1.call(this,state_59926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__54987__auto____0;
figwheel$client$file_reloading$state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__54987__auto____1;
return figwheel$client$file_reloading$state_machine__54987__auto__;
})()
;})(switch__54986__auto__,c__55153__auto__))
})();
var state__55155__auto__ = (function (){var statearr_59953 = f__55154__auto__.call(null);
(statearr_59953[(6)] = c__55153__auto__);

return statearr_59953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(c__55153__auto__))
);

return c__55153__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__59975 = arguments.length;
switch (G__59975) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__59977,callback){
var map__59978 = p__59977;
var map__59978__$1 = (((((!((map__59978 == null))))?(((((map__59978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59978):map__59978);
var file_msg = map__59978__$1;
var namespace = cljs.core.get.call(null,map__59978__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__59978,map__59978__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__59978,map__59978__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__59980){
var map__59981 = p__59980;
var map__59981__$1 = (((((!((map__59981 == null))))?(((((map__59981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59981):map__59981);
var file_msg = map__59981__$1;
var namespace = cljs.core.get.call(null,map__59981__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__59983){
var map__59984 = p__59983;
var map__59984__$1 = (((((!((map__59984 == null))))?(((((map__59984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59984):map__59984);
var file_msg = map__59984__$1;
var namespace = cljs.core.get.call(null,map__59984__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4036__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4036__auto__){
var or__4047__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4036__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__59986,callback){
var map__59987 = p__59986;
var map__59987__$1 = (((((!((map__59987 == null))))?(((((map__59987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59987):map__59987);
var file_msg = map__59987__$1;
var request_url = cljs.core.get.call(null,map__59987__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__59987__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__55153__auto___60037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55153__auto___60037,out){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (c__55153__auto___60037,out){
return (function (state_60022){
var state_val_60023 = (state_60022[(1)]);
if((state_val_60023 === (1))){
var inst_59996 = cljs.core.seq.call(null,files);
var inst_59997 = cljs.core.first.call(null,inst_59996);
var inst_59998 = cljs.core.next.call(null,inst_59996);
var inst_59999 = files;
var state_60022__$1 = (function (){var statearr_60024 = state_60022;
(statearr_60024[(7)] = inst_59999);

(statearr_60024[(8)] = inst_59997);

(statearr_60024[(9)] = inst_59998);

return statearr_60024;
})();
var statearr_60025_60038 = state_60022__$1;
(statearr_60025_60038[(2)] = null);

(statearr_60025_60038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60023 === (2))){
var inst_59999 = (state_60022[(7)]);
var inst_60005 = (state_60022[(10)]);
var inst_60004 = cljs.core.seq.call(null,inst_59999);
var inst_60005__$1 = cljs.core.first.call(null,inst_60004);
var inst_60006 = cljs.core.next.call(null,inst_60004);
var inst_60007 = (inst_60005__$1 == null);
var inst_60008 = cljs.core.not.call(null,inst_60007);
var state_60022__$1 = (function (){var statearr_60026 = state_60022;
(statearr_60026[(10)] = inst_60005__$1);

(statearr_60026[(11)] = inst_60006);

return statearr_60026;
})();
if(inst_60008){
var statearr_60027_60039 = state_60022__$1;
(statearr_60027_60039[(1)] = (4));

} else {
var statearr_60028_60040 = state_60022__$1;
(statearr_60028_60040[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60023 === (3))){
var inst_60020 = (state_60022[(2)]);
var state_60022__$1 = state_60022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60022__$1,inst_60020);
} else {
if((state_val_60023 === (4))){
var inst_60005 = (state_60022[(10)]);
var inst_60010 = figwheel.client.file_reloading.reload_js_file.call(null,inst_60005);
var state_60022__$1 = state_60022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60022__$1,(7),inst_60010);
} else {
if((state_val_60023 === (5))){
var inst_60016 = cljs.core.async.close_BANG_.call(null,out);
var state_60022__$1 = state_60022;
var statearr_60029_60041 = state_60022__$1;
(statearr_60029_60041[(2)] = inst_60016);

(statearr_60029_60041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60023 === (6))){
var inst_60018 = (state_60022[(2)]);
var state_60022__$1 = state_60022;
var statearr_60030_60042 = state_60022__$1;
(statearr_60030_60042[(2)] = inst_60018);

(statearr_60030_60042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60023 === (7))){
var inst_60006 = (state_60022[(11)]);
var inst_60012 = (state_60022[(2)]);
var inst_60013 = cljs.core.async.put_BANG_.call(null,out,inst_60012);
var inst_59999 = inst_60006;
var state_60022__$1 = (function (){var statearr_60031 = state_60022;
(statearr_60031[(7)] = inst_59999);

(statearr_60031[(12)] = inst_60013);

return statearr_60031;
})();
var statearr_60032_60043 = state_60022__$1;
(statearr_60032_60043[(2)] = null);

(statearr_60032_60043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__55153__auto___60037,out))
;
return ((function (switch__54986__auto__,c__55153__auto___60037,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__54987__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__54987__auto____0 = (function (){
var statearr_60033 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60033[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__54987__auto__);

(statearr_60033[(1)] = (1));

return statearr_60033;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__54987__auto____1 = (function (state_60022){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_60022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e60034){if((e60034 instanceof Object)){
var ex__54990__auto__ = e60034;
var statearr_60035_60044 = state_60022;
(statearr_60035_60044[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60045 = state_60022;
state_60022 = G__60045;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__54987__auto__ = function(state_60022){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__54987__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__54987__auto____1.call(this,state_60022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__54987__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__54987__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__54987__auto__;
})()
;})(switch__54986__auto__,c__55153__auto___60037,out))
})();
var state__55155__auto__ = (function (){var statearr_60036 = f__55154__auto__.call(null);
(statearr_60036[(6)] = c__55153__auto___60037);

return statearr_60036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(c__55153__auto___60037,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__60046,opts){
var map__60047 = p__60046;
var map__60047__$1 = (((((!((map__60047 == null))))?(((((map__60047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60047):map__60047);
var eval_body = cljs.core.get.call(null,map__60047__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__60047__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4036__auto__ = eval_body;
if(cljs.core.truth_(and__4036__auto__)){
return typeof eval_body === 'string';
} else {
return and__4036__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e60049){var e = e60049;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__60050_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__60050_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__60051){
var vec__60052 = p__60051;
var k = cljs.core.nth.call(null,vec__60052,(0),null);
var v = cljs.core.nth.call(null,vec__60052,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__60055){
var vec__60056 = p__60055;
var k = cljs.core.nth.call(null,vec__60056,(0),null);
var v = cljs.core.nth.call(null,vec__60056,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__60062,p__60063){
var map__60064 = p__60062;
var map__60064__$1 = (((((!((map__60064 == null))))?(((((map__60064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60064):map__60064);
var opts = map__60064__$1;
var before_jsload = cljs.core.get.call(null,map__60064__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__60064__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__60064__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__60065 = p__60063;
var map__60065__$1 = (((((!((map__60065 == null))))?(((((map__60065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60065):map__60065);
var msg = map__60065__$1;
var files = cljs.core.get.call(null,map__60065__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__60065__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__60065__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__55153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55153__auto__,map__60064,map__60064__$1,opts,before_jsload,on_jsload,reload_dependents,map__60065,map__60065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (c__55153__auto__,map__60064,map__60064__$1,opts,before_jsload,on_jsload,reload_dependents,map__60065,map__60065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_60219){
var state_val_60220 = (state_60219[(1)]);
if((state_val_60220 === (7))){
var inst_60082 = (state_60219[(7)]);
var inst_60080 = (state_60219[(8)]);
var inst_60079 = (state_60219[(9)]);
var inst_60081 = (state_60219[(10)]);
var inst_60087 = cljs.core._nth.call(null,inst_60080,inst_60082);
var inst_60088 = figwheel.client.file_reloading.eval_body.call(null,inst_60087,opts);
var inst_60089 = (inst_60082 + (1));
var tmp60221 = inst_60080;
var tmp60222 = inst_60079;
var tmp60223 = inst_60081;
var inst_60079__$1 = tmp60222;
var inst_60080__$1 = tmp60221;
var inst_60081__$1 = tmp60223;
var inst_60082__$1 = inst_60089;
var state_60219__$1 = (function (){var statearr_60224 = state_60219;
(statearr_60224[(11)] = inst_60088);

(statearr_60224[(7)] = inst_60082__$1);

(statearr_60224[(8)] = inst_60080__$1);

(statearr_60224[(9)] = inst_60079__$1);

(statearr_60224[(10)] = inst_60081__$1);

return statearr_60224;
})();
var statearr_60225_60308 = state_60219__$1;
(statearr_60225_60308[(2)] = null);

(statearr_60225_60308[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (20))){
var inst_60122 = (state_60219[(12)]);
var inst_60130 = figwheel.client.file_reloading.sort_files.call(null,inst_60122);
var state_60219__$1 = state_60219;
var statearr_60226_60309 = state_60219__$1;
(statearr_60226_60309[(2)] = inst_60130);

(statearr_60226_60309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (27))){
var state_60219__$1 = state_60219;
var statearr_60227_60310 = state_60219__$1;
(statearr_60227_60310[(2)] = null);

(statearr_60227_60310[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (1))){
var inst_60071 = (state_60219[(13)]);
var inst_60068 = before_jsload.call(null,files);
var inst_60069 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_60070 = (function (){return ((function (inst_60071,inst_60068,inst_60069,state_val_60220,c__55153__auto__,map__60064,map__60064__$1,opts,before_jsload,on_jsload,reload_dependents,map__60065,map__60065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__60059_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__60059_SHARP_);
});
;})(inst_60071,inst_60068,inst_60069,state_val_60220,c__55153__auto__,map__60064,map__60064__$1,opts,before_jsload,on_jsload,reload_dependents,map__60065,map__60065__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60071__$1 = cljs.core.filter.call(null,inst_60070,files);
var inst_60072 = cljs.core.not_empty.call(null,inst_60071__$1);
var state_60219__$1 = (function (){var statearr_60228 = state_60219;
(statearr_60228[(14)] = inst_60069);

(statearr_60228[(13)] = inst_60071__$1);

(statearr_60228[(15)] = inst_60068);

return statearr_60228;
})();
if(cljs.core.truth_(inst_60072)){
var statearr_60229_60311 = state_60219__$1;
(statearr_60229_60311[(1)] = (2));

} else {
var statearr_60230_60312 = state_60219__$1;
(statearr_60230_60312[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (24))){
var state_60219__$1 = state_60219;
var statearr_60231_60313 = state_60219__$1;
(statearr_60231_60313[(2)] = null);

(statearr_60231_60313[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (39))){
var inst_60172 = (state_60219[(16)]);
var state_60219__$1 = state_60219;
var statearr_60232_60314 = state_60219__$1;
(statearr_60232_60314[(2)] = inst_60172);

(statearr_60232_60314[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (46))){
var inst_60214 = (state_60219[(2)]);
var state_60219__$1 = state_60219;
var statearr_60233_60315 = state_60219__$1;
(statearr_60233_60315[(2)] = inst_60214);

(statearr_60233_60315[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (4))){
var inst_60116 = (state_60219[(2)]);
var inst_60117 = cljs.core.List.EMPTY;
var inst_60118 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_60117);
var inst_60119 = (function (){return ((function (inst_60116,inst_60117,inst_60118,state_val_60220,c__55153__auto__,map__60064,map__60064__$1,opts,before_jsload,on_jsload,reload_dependents,map__60065,map__60065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__60060_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__60060_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__60060_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__60060_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_60116,inst_60117,inst_60118,state_val_60220,c__55153__auto__,map__60064,map__60064__$1,opts,before_jsload,on_jsload,reload_dependents,map__60065,map__60065__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60120 = cljs.core.filter.call(null,inst_60119,files);
var inst_60121 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_60122 = cljs.core.concat.call(null,inst_60120,inst_60121);
var state_60219__$1 = (function (){var statearr_60234 = state_60219;
(statearr_60234[(12)] = inst_60122);

(statearr_60234[(17)] = inst_60116);

(statearr_60234[(18)] = inst_60118);

return statearr_60234;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_60235_60316 = state_60219__$1;
(statearr_60235_60316[(1)] = (16));

} else {
var statearr_60236_60317 = state_60219__$1;
(statearr_60236_60317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (15))){
var inst_60106 = (state_60219[(2)]);
var state_60219__$1 = state_60219;
var statearr_60237_60318 = state_60219__$1;
(statearr_60237_60318[(2)] = inst_60106);

(statearr_60237_60318[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (21))){
var inst_60132 = (state_60219[(19)]);
var inst_60132__$1 = (state_60219[(2)]);
var inst_60133 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_60132__$1);
var state_60219__$1 = (function (){var statearr_60238 = state_60219;
(statearr_60238[(19)] = inst_60132__$1);

return statearr_60238;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60219__$1,(22),inst_60133);
} else {
if((state_val_60220 === (31))){
var inst_60217 = (state_60219[(2)]);
var state_60219__$1 = state_60219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60219__$1,inst_60217);
} else {
if((state_val_60220 === (32))){
var inst_60172 = (state_60219[(16)]);
var inst_60177 = inst_60172.cljs$lang$protocol_mask$partition0$;
var inst_60178 = (inst_60177 & (64));
var inst_60179 = inst_60172.cljs$core$ISeq$;
var inst_60180 = (cljs.core.PROTOCOL_SENTINEL === inst_60179);
var inst_60181 = ((inst_60178) || (inst_60180));
var state_60219__$1 = state_60219;
if(cljs.core.truth_(inst_60181)){
var statearr_60239_60319 = state_60219__$1;
(statearr_60239_60319[(1)] = (35));

} else {
var statearr_60240_60320 = state_60219__$1;
(statearr_60240_60320[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (40))){
var inst_60194 = (state_60219[(20)]);
var inst_60193 = (state_60219[(2)]);
var inst_60194__$1 = cljs.core.get.call(null,inst_60193,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_60195 = cljs.core.get.call(null,inst_60193,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_60196 = cljs.core.not_empty.call(null,inst_60194__$1);
var state_60219__$1 = (function (){var statearr_60241 = state_60219;
(statearr_60241[(20)] = inst_60194__$1);

(statearr_60241[(21)] = inst_60195);

return statearr_60241;
})();
if(cljs.core.truth_(inst_60196)){
var statearr_60242_60321 = state_60219__$1;
(statearr_60242_60321[(1)] = (41));

} else {
var statearr_60243_60322 = state_60219__$1;
(statearr_60243_60322[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (33))){
var state_60219__$1 = state_60219;
var statearr_60244_60323 = state_60219__$1;
(statearr_60244_60323[(2)] = false);

(statearr_60244_60323[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (13))){
var inst_60092 = (state_60219[(22)]);
var inst_60096 = cljs.core.chunk_first.call(null,inst_60092);
var inst_60097 = cljs.core.chunk_rest.call(null,inst_60092);
var inst_60098 = cljs.core.count.call(null,inst_60096);
var inst_60079 = inst_60097;
var inst_60080 = inst_60096;
var inst_60081 = inst_60098;
var inst_60082 = (0);
var state_60219__$1 = (function (){var statearr_60245 = state_60219;
(statearr_60245[(7)] = inst_60082);

(statearr_60245[(8)] = inst_60080);

(statearr_60245[(9)] = inst_60079);

(statearr_60245[(10)] = inst_60081);

return statearr_60245;
})();
var statearr_60246_60324 = state_60219__$1;
(statearr_60246_60324[(2)] = null);

(statearr_60246_60324[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (22))){
var inst_60140 = (state_60219[(23)]);
var inst_60136 = (state_60219[(24)]);
var inst_60135 = (state_60219[(25)]);
var inst_60132 = (state_60219[(19)]);
var inst_60135__$1 = (state_60219[(2)]);
var inst_60136__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_60135__$1);
var inst_60137 = (function (){var all_files = inst_60132;
var res_SINGLEQUOTE_ = inst_60135__$1;
var res = inst_60136__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_60140,inst_60136,inst_60135,inst_60132,inst_60135__$1,inst_60136__$1,state_val_60220,c__55153__auto__,map__60064,map__60064__$1,opts,before_jsload,on_jsload,reload_dependents,map__60065,map__60065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__60061_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__60061_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_60140,inst_60136,inst_60135,inst_60132,inst_60135__$1,inst_60136__$1,state_val_60220,c__55153__auto__,map__60064,map__60064__$1,opts,before_jsload,on_jsload,reload_dependents,map__60065,map__60065__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60138 = cljs.core.filter.call(null,inst_60137,inst_60135__$1);
var inst_60139 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_60140__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_60139);
var inst_60141 = cljs.core.not_empty.call(null,inst_60140__$1);
var state_60219__$1 = (function (){var statearr_60247 = state_60219;
(statearr_60247[(23)] = inst_60140__$1);

(statearr_60247[(24)] = inst_60136__$1);

(statearr_60247[(25)] = inst_60135__$1);

(statearr_60247[(26)] = inst_60138);

return statearr_60247;
})();
if(cljs.core.truth_(inst_60141)){
var statearr_60248_60325 = state_60219__$1;
(statearr_60248_60325[(1)] = (23));

} else {
var statearr_60249_60326 = state_60219__$1;
(statearr_60249_60326[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (36))){
var state_60219__$1 = state_60219;
var statearr_60250_60327 = state_60219__$1;
(statearr_60250_60327[(2)] = false);

(statearr_60250_60327[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (41))){
var inst_60194 = (state_60219[(20)]);
var inst_60198 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_60199 = cljs.core.map.call(null,inst_60198,inst_60194);
var inst_60200 = cljs.core.pr_str.call(null,inst_60199);
var inst_60201 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_60200)].join('');
var inst_60202 = figwheel.client.utils.log.call(null,inst_60201);
var state_60219__$1 = state_60219;
var statearr_60251_60328 = state_60219__$1;
(statearr_60251_60328[(2)] = inst_60202);

(statearr_60251_60328[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (43))){
var inst_60195 = (state_60219[(21)]);
var inst_60205 = (state_60219[(2)]);
var inst_60206 = cljs.core.not_empty.call(null,inst_60195);
var state_60219__$1 = (function (){var statearr_60252 = state_60219;
(statearr_60252[(27)] = inst_60205);

return statearr_60252;
})();
if(cljs.core.truth_(inst_60206)){
var statearr_60253_60329 = state_60219__$1;
(statearr_60253_60329[(1)] = (44));

} else {
var statearr_60254_60330 = state_60219__$1;
(statearr_60254_60330[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (29))){
var inst_60140 = (state_60219[(23)]);
var inst_60136 = (state_60219[(24)]);
var inst_60135 = (state_60219[(25)]);
var inst_60138 = (state_60219[(26)]);
var inst_60172 = (state_60219[(16)]);
var inst_60132 = (state_60219[(19)]);
var inst_60168 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_60171 = (function (){var all_files = inst_60132;
var res_SINGLEQUOTE_ = inst_60135;
var res = inst_60136;
var files_not_loaded = inst_60138;
var dependencies_that_loaded = inst_60140;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60140,inst_60136,inst_60135,inst_60138,inst_60172,inst_60132,inst_60168,state_val_60220,c__55153__auto__,map__60064,map__60064__$1,opts,before_jsload,on_jsload,reload_dependents,map__60065,map__60065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__60170){
var map__60255 = p__60170;
var map__60255__$1 = (((((!((map__60255 == null))))?(((((map__60255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60255):map__60255);
var namespace = cljs.core.get.call(null,map__60255__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60140,inst_60136,inst_60135,inst_60138,inst_60172,inst_60132,inst_60168,state_val_60220,c__55153__auto__,map__60064,map__60064__$1,opts,before_jsload,on_jsload,reload_dependents,map__60065,map__60065__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60172__$1 = cljs.core.group_by.call(null,inst_60171,inst_60138);
var inst_60174 = (inst_60172__$1 == null);
var inst_60175 = cljs.core.not.call(null,inst_60174);
var state_60219__$1 = (function (){var statearr_60257 = state_60219;
(statearr_60257[(28)] = inst_60168);

(statearr_60257[(16)] = inst_60172__$1);

return statearr_60257;
})();
if(inst_60175){
var statearr_60258_60331 = state_60219__$1;
(statearr_60258_60331[(1)] = (32));

} else {
var statearr_60259_60332 = state_60219__$1;
(statearr_60259_60332[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (44))){
var inst_60195 = (state_60219[(21)]);
var inst_60208 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_60195);
var inst_60209 = cljs.core.pr_str.call(null,inst_60208);
var inst_60210 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_60209)].join('');
var inst_60211 = figwheel.client.utils.log.call(null,inst_60210);
var state_60219__$1 = state_60219;
var statearr_60260_60333 = state_60219__$1;
(statearr_60260_60333[(2)] = inst_60211);

(statearr_60260_60333[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (6))){
var inst_60113 = (state_60219[(2)]);
var state_60219__$1 = state_60219;
var statearr_60261_60334 = state_60219__$1;
(statearr_60261_60334[(2)] = inst_60113);

(statearr_60261_60334[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (28))){
var inst_60138 = (state_60219[(26)]);
var inst_60165 = (state_60219[(2)]);
var inst_60166 = cljs.core.not_empty.call(null,inst_60138);
var state_60219__$1 = (function (){var statearr_60262 = state_60219;
(statearr_60262[(29)] = inst_60165);

return statearr_60262;
})();
if(cljs.core.truth_(inst_60166)){
var statearr_60263_60335 = state_60219__$1;
(statearr_60263_60335[(1)] = (29));

} else {
var statearr_60264_60336 = state_60219__$1;
(statearr_60264_60336[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (25))){
var inst_60136 = (state_60219[(24)]);
var inst_60152 = (state_60219[(2)]);
var inst_60153 = cljs.core.not_empty.call(null,inst_60136);
var state_60219__$1 = (function (){var statearr_60265 = state_60219;
(statearr_60265[(30)] = inst_60152);

return statearr_60265;
})();
if(cljs.core.truth_(inst_60153)){
var statearr_60266_60337 = state_60219__$1;
(statearr_60266_60337[(1)] = (26));

} else {
var statearr_60267_60338 = state_60219__$1;
(statearr_60267_60338[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (34))){
var inst_60188 = (state_60219[(2)]);
var state_60219__$1 = state_60219;
if(cljs.core.truth_(inst_60188)){
var statearr_60268_60339 = state_60219__$1;
(statearr_60268_60339[(1)] = (38));

} else {
var statearr_60269_60340 = state_60219__$1;
(statearr_60269_60340[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (17))){
var state_60219__$1 = state_60219;
var statearr_60270_60341 = state_60219__$1;
(statearr_60270_60341[(2)] = recompile_dependents);

(statearr_60270_60341[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (3))){
var state_60219__$1 = state_60219;
var statearr_60271_60342 = state_60219__$1;
(statearr_60271_60342[(2)] = null);

(statearr_60271_60342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (12))){
var inst_60109 = (state_60219[(2)]);
var state_60219__$1 = state_60219;
var statearr_60272_60343 = state_60219__$1;
(statearr_60272_60343[(2)] = inst_60109);

(statearr_60272_60343[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (2))){
var inst_60071 = (state_60219[(13)]);
var inst_60078 = cljs.core.seq.call(null,inst_60071);
var inst_60079 = inst_60078;
var inst_60080 = null;
var inst_60081 = (0);
var inst_60082 = (0);
var state_60219__$1 = (function (){var statearr_60273 = state_60219;
(statearr_60273[(7)] = inst_60082);

(statearr_60273[(8)] = inst_60080);

(statearr_60273[(9)] = inst_60079);

(statearr_60273[(10)] = inst_60081);

return statearr_60273;
})();
var statearr_60274_60344 = state_60219__$1;
(statearr_60274_60344[(2)] = null);

(statearr_60274_60344[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (23))){
var inst_60140 = (state_60219[(23)]);
var inst_60136 = (state_60219[(24)]);
var inst_60135 = (state_60219[(25)]);
var inst_60138 = (state_60219[(26)]);
var inst_60132 = (state_60219[(19)]);
var inst_60143 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_60145 = (function (){var all_files = inst_60132;
var res_SINGLEQUOTE_ = inst_60135;
var res = inst_60136;
var files_not_loaded = inst_60138;
var dependencies_that_loaded = inst_60140;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60140,inst_60136,inst_60135,inst_60138,inst_60132,inst_60143,state_val_60220,c__55153__auto__,map__60064,map__60064__$1,opts,before_jsload,on_jsload,reload_dependents,map__60065,map__60065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__60144){
var map__60275 = p__60144;
var map__60275__$1 = (((((!((map__60275 == null))))?(((((map__60275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60275):map__60275);
var request_url = cljs.core.get.call(null,map__60275__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60140,inst_60136,inst_60135,inst_60138,inst_60132,inst_60143,state_val_60220,c__55153__auto__,map__60064,map__60064__$1,opts,before_jsload,on_jsload,reload_dependents,map__60065,map__60065__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60146 = cljs.core.reverse.call(null,inst_60140);
var inst_60147 = cljs.core.map.call(null,inst_60145,inst_60146);
var inst_60148 = cljs.core.pr_str.call(null,inst_60147);
var inst_60149 = figwheel.client.utils.log.call(null,inst_60148);
var state_60219__$1 = (function (){var statearr_60277 = state_60219;
(statearr_60277[(31)] = inst_60143);

return statearr_60277;
})();
var statearr_60278_60345 = state_60219__$1;
(statearr_60278_60345[(2)] = inst_60149);

(statearr_60278_60345[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (35))){
var state_60219__$1 = state_60219;
var statearr_60279_60346 = state_60219__$1;
(statearr_60279_60346[(2)] = true);

(statearr_60279_60346[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (19))){
var inst_60122 = (state_60219[(12)]);
var inst_60128 = figwheel.client.file_reloading.expand_files.call(null,inst_60122);
var state_60219__$1 = state_60219;
var statearr_60280_60347 = state_60219__$1;
(statearr_60280_60347[(2)] = inst_60128);

(statearr_60280_60347[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (11))){
var state_60219__$1 = state_60219;
var statearr_60281_60348 = state_60219__$1;
(statearr_60281_60348[(2)] = null);

(statearr_60281_60348[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (9))){
var inst_60111 = (state_60219[(2)]);
var state_60219__$1 = state_60219;
var statearr_60282_60349 = state_60219__$1;
(statearr_60282_60349[(2)] = inst_60111);

(statearr_60282_60349[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (5))){
var inst_60082 = (state_60219[(7)]);
var inst_60081 = (state_60219[(10)]);
var inst_60084 = (inst_60082 < inst_60081);
var inst_60085 = inst_60084;
var state_60219__$1 = state_60219;
if(cljs.core.truth_(inst_60085)){
var statearr_60283_60350 = state_60219__$1;
(statearr_60283_60350[(1)] = (7));

} else {
var statearr_60284_60351 = state_60219__$1;
(statearr_60284_60351[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (14))){
var inst_60092 = (state_60219[(22)]);
var inst_60101 = cljs.core.first.call(null,inst_60092);
var inst_60102 = figwheel.client.file_reloading.eval_body.call(null,inst_60101,opts);
var inst_60103 = cljs.core.next.call(null,inst_60092);
var inst_60079 = inst_60103;
var inst_60080 = null;
var inst_60081 = (0);
var inst_60082 = (0);
var state_60219__$1 = (function (){var statearr_60285 = state_60219;
(statearr_60285[(7)] = inst_60082);

(statearr_60285[(8)] = inst_60080);

(statearr_60285[(9)] = inst_60079);

(statearr_60285[(32)] = inst_60102);

(statearr_60285[(10)] = inst_60081);

return statearr_60285;
})();
var statearr_60286_60352 = state_60219__$1;
(statearr_60286_60352[(2)] = null);

(statearr_60286_60352[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (45))){
var state_60219__$1 = state_60219;
var statearr_60287_60353 = state_60219__$1;
(statearr_60287_60353[(2)] = null);

(statearr_60287_60353[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (26))){
var inst_60140 = (state_60219[(23)]);
var inst_60136 = (state_60219[(24)]);
var inst_60135 = (state_60219[(25)]);
var inst_60138 = (state_60219[(26)]);
var inst_60132 = (state_60219[(19)]);
var inst_60155 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_60157 = (function (){var all_files = inst_60132;
var res_SINGLEQUOTE_ = inst_60135;
var res = inst_60136;
var files_not_loaded = inst_60138;
var dependencies_that_loaded = inst_60140;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60140,inst_60136,inst_60135,inst_60138,inst_60132,inst_60155,state_val_60220,c__55153__auto__,map__60064,map__60064__$1,opts,before_jsload,on_jsload,reload_dependents,map__60065,map__60065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__60156){
var map__60288 = p__60156;
var map__60288__$1 = (((((!((map__60288 == null))))?(((((map__60288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60288):map__60288);
var namespace = cljs.core.get.call(null,map__60288__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__60288__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60140,inst_60136,inst_60135,inst_60138,inst_60132,inst_60155,state_val_60220,c__55153__auto__,map__60064,map__60064__$1,opts,before_jsload,on_jsload,reload_dependents,map__60065,map__60065__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60158 = cljs.core.map.call(null,inst_60157,inst_60136);
var inst_60159 = cljs.core.pr_str.call(null,inst_60158);
var inst_60160 = figwheel.client.utils.log.call(null,inst_60159);
var inst_60161 = (function (){var all_files = inst_60132;
var res_SINGLEQUOTE_ = inst_60135;
var res = inst_60136;
var files_not_loaded = inst_60138;
var dependencies_that_loaded = inst_60140;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60140,inst_60136,inst_60135,inst_60138,inst_60132,inst_60155,inst_60157,inst_60158,inst_60159,inst_60160,state_val_60220,c__55153__auto__,map__60064,map__60064__$1,opts,before_jsload,on_jsload,reload_dependents,map__60065,map__60065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60140,inst_60136,inst_60135,inst_60138,inst_60132,inst_60155,inst_60157,inst_60158,inst_60159,inst_60160,state_val_60220,c__55153__auto__,map__60064,map__60064__$1,opts,before_jsload,on_jsload,reload_dependents,map__60065,map__60065__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60162 = setTimeout(inst_60161,(10));
var state_60219__$1 = (function (){var statearr_60290 = state_60219;
(statearr_60290[(33)] = inst_60155);

(statearr_60290[(34)] = inst_60160);

return statearr_60290;
})();
var statearr_60291_60354 = state_60219__$1;
(statearr_60291_60354[(2)] = inst_60162);

(statearr_60291_60354[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (16))){
var state_60219__$1 = state_60219;
var statearr_60292_60355 = state_60219__$1;
(statearr_60292_60355[(2)] = reload_dependents);

(statearr_60292_60355[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (38))){
var inst_60172 = (state_60219[(16)]);
var inst_60190 = cljs.core.apply.call(null,cljs.core.hash_map,inst_60172);
var state_60219__$1 = state_60219;
var statearr_60293_60356 = state_60219__$1;
(statearr_60293_60356[(2)] = inst_60190);

(statearr_60293_60356[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (30))){
var state_60219__$1 = state_60219;
var statearr_60294_60357 = state_60219__$1;
(statearr_60294_60357[(2)] = null);

(statearr_60294_60357[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (10))){
var inst_60092 = (state_60219[(22)]);
var inst_60094 = cljs.core.chunked_seq_QMARK_.call(null,inst_60092);
var state_60219__$1 = state_60219;
if(inst_60094){
var statearr_60295_60358 = state_60219__$1;
(statearr_60295_60358[(1)] = (13));

} else {
var statearr_60296_60359 = state_60219__$1;
(statearr_60296_60359[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (18))){
var inst_60126 = (state_60219[(2)]);
var state_60219__$1 = state_60219;
if(cljs.core.truth_(inst_60126)){
var statearr_60297_60360 = state_60219__$1;
(statearr_60297_60360[(1)] = (19));

} else {
var statearr_60298_60361 = state_60219__$1;
(statearr_60298_60361[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (42))){
var state_60219__$1 = state_60219;
var statearr_60299_60362 = state_60219__$1;
(statearr_60299_60362[(2)] = null);

(statearr_60299_60362[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (37))){
var inst_60185 = (state_60219[(2)]);
var state_60219__$1 = state_60219;
var statearr_60300_60363 = state_60219__$1;
(statearr_60300_60363[(2)] = inst_60185);

(statearr_60300_60363[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60220 === (8))){
var inst_60092 = (state_60219[(22)]);
var inst_60079 = (state_60219[(9)]);
var inst_60092__$1 = cljs.core.seq.call(null,inst_60079);
var state_60219__$1 = (function (){var statearr_60301 = state_60219;
(statearr_60301[(22)] = inst_60092__$1);

return statearr_60301;
})();
if(inst_60092__$1){
var statearr_60302_60364 = state_60219__$1;
(statearr_60302_60364[(1)] = (10));

} else {
var statearr_60303_60365 = state_60219__$1;
(statearr_60303_60365[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__55153__auto__,map__60064,map__60064__$1,opts,before_jsload,on_jsload,reload_dependents,map__60065,map__60065__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__54986__auto__,c__55153__auto__,map__60064,map__60064__$1,opts,before_jsload,on_jsload,reload_dependents,map__60065,map__60065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__54987__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__54987__auto____0 = (function (){
var statearr_60304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60304[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__54987__auto__);

(statearr_60304[(1)] = (1));

return statearr_60304;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__54987__auto____1 = (function (state_60219){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_60219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e60305){if((e60305 instanceof Object)){
var ex__54990__auto__ = e60305;
var statearr_60306_60366 = state_60219;
(statearr_60306_60366[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60367 = state_60219;
state_60219 = G__60367;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__54987__auto__ = function(state_60219){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__54987__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__54987__auto____1.call(this,state_60219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__54987__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__54987__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__54987__auto__;
})()
;})(switch__54986__auto__,c__55153__auto__,map__60064,map__60064__$1,opts,before_jsload,on_jsload,reload_dependents,map__60065,map__60065__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__55155__auto__ = (function (){var statearr_60307 = f__55154__auto__.call(null);
(statearr_60307[(6)] = c__55153__auto__);

return statearr_60307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(c__55153__auto__,map__60064,map__60064__$1,opts,before_jsload,on_jsload,reload_dependents,map__60065,map__60065__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__55153__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__60370,link){
var map__60371 = p__60370;
var map__60371__$1 = (((((!((map__60371 == null))))?(((((map__60371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60371):map__60371);
var file = cljs.core.get.call(null,map__60371__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__60371,map__60371__$1,file){
return (function (p1__60368_SHARP_,p2__60369_SHARP_){
if(cljs.core._EQ_.call(null,p1__60368_SHARP_,p2__60369_SHARP_)){
return p1__60368_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__60371,map__60371__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__60374){
var map__60375 = p__60374;
var map__60375__$1 = (((((!((map__60375 == null))))?(((((map__60375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60375):map__60375);
var match_length = cljs.core.get.call(null,map__60375__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__60375__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__60373_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__60373_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__60377_SHARP_,p2__60378_SHARP_){
return cljs.core.assoc.call(null,p1__60377_SHARP_,cljs.core.get.call(null,p2__60378_SHARP_,key),p2__60378_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_60379 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_60379);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_60379);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__60380,p__60381){
var map__60382 = p__60380;
var map__60382__$1 = (((((!((map__60382 == null))))?(((((map__60382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60382):map__60382);
var on_cssload = cljs.core.get.call(null,map__60382__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__60383 = p__60381;
var map__60383__$1 = (((((!((map__60383 == null))))?(((((map__60383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60383):map__60383);
var files_msg = map__60383__$1;
var files = cljs.core.get.call(null,map__60383__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1575465442787
