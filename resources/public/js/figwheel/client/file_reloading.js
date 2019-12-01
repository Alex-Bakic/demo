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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__41444_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__41444_SHARP_));
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
var seq__41445 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__41446 = null;
var count__41447 = (0);
var i__41448 = (0);
while(true){
if((i__41448 < count__41447)){
var n = cljs.core._nth.call(null,chunk__41446,i__41448);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__41449 = seq__41445;
var G__41450 = chunk__41446;
var G__41451 = count__41447;
var G__41452 = (i__41448 + (1));
seq__41445 = G__41449;
chunk__41446 = G__41450;
count__41447 = G__41451;
i__41448 = G__41452;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__41445);
if(temp__5720__auto__){
var seq__41445__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41445__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__41445__$1);
var G__41453 = cljs.core.chunk_rest.call(null,seq__41445__$1);
var G__41454 = c__4461__auto__;
var G__41455 = cljs.core.count.call(null,c__4461__auto__);
var G__41456 = (0);
seq__41445 = G__41453;
chunk__41446 = G__41454;
count__41447 = G__41455;
i__41448 = G__41456;
continue;
} else {
var n = cljs.core.first.call(null,seq__41445__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__41457 = cljs.core.next.call(null,seq__41445__$1);
var G__41458 = null;
var G__41459 = (0);
var G__41460 = (0);
seq__41445 = G__41457;
chunk__41446 = G__41458;
count__41447 = G__41459;
i__41448 = G__41460;
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
return cljs.core.some.call(null,(function (p__41461){
var vec__41462 = p__41461;
var _ = cljs.core.nth.call(null,vec__41462,(0),null);
var v = cljs.core.nth.call(null,vec__41462,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__41465){
var vec__41466 = p__41465;
var k = cljs.core.nth.call(null,vec__41466,(0),null);
var v = cljs.core.nth.call(null,vec__41466,(1),null);
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

var seq__41478_41486 = cljs.core.seq.call(null,deps);
var chunk__41479_41487 = null;
var count__41480_41488 = (0);
var i__41481_41489 = (0);
while(true){
if((i__41481_41489 < count__41480_41488)){
var dep_41490 = cljs.core._nth.call(null,chunk__41479_41487,i__41481_41489);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_41490;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_41490));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_41490,(depth + (1)),state);
} else {
}


var G__41491 = seq__41478_41486;
var G__41492 = chunk__41479_41487;
var G__41493 = count__41480_41488;
var G__41494 = (i__41481_41489 + (1));
seq__41478_41486 = G__41491;
chunk__41479_41487 = G__41492;
count__41480_41488 = G__41493;
i__41481_41489 = G__41494;
continue;
} else {
var temp__5720__auto___41495 = cljs.core.seq.call(null,seq__41478_41486);
if(temp__5720__auto___41495){
var seq__41478_41496__$1 = temp__5720__auto___41495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41478_41496__$1)){
var c__4461__auto___41497 = cljs.core.chunk_first.call(null,seq__41478_41496__$1);
var G__41498 = cljs.core.chunk_rest.call(null,seq__41478_41496__$1);
var G__41499 = c__4461__auto___41497;
var G__41500 = cljs.core.count.call(null,c__4461__auto___41497);
var G__41501 = (0);
seq__41478_41486 = G__41498;
chunk__41479_41487 = G__41499;
count__41480_41488 = G__41500;
i__41481_41489 = G__41501;
continue;
} else {
var dep_41502 = cljs.core.first.call(null,seq__41478_41496__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_41502;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_41502));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_41502,(depth + (1)),state);
} else {
}


var G__41503 = cljs.core.next.call(null,seq__41478_41496__$1);
var G__41504 = null;
var G__41505 = (0);
var G__41506 = (0);
seq__41478_41486 = G__41503;
chunk__41479_41487 = G__41504;
count__41480_41488 = G__41505;
i__41481_41489 = G__41506;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__41482){
var vec__41483 = p__41482;
var seq__41484 = cljs.core.seq.call(null,vec__41483);
var first__41485 = cljs.core.first.call(null,seq__41484);
var seq__41484__$1 = cljs.core.next.call(null,seq__41484);
var x = first__41485;
var xs = seq__41484__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__41483,seq__41484,first__41485,seq__41484__$1,x,xs,get_deps__$1){
return (function (p1__41469_SHARP_){
return clojure.set.difference.call(null,p1__41469_SHARP_,x);
});})(vec__41483,seq__41484,first__41485,seq__41484__$1,x,xs,get_deps__$1))
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
var seq__41507 = cljs.core.seq.call(null,provides);
var chunk__41508 = null;
var count__41509 = (0);
var i__41510 = (0);
while(true){
if((i__41510 < count__41509)){
var prov = cljs.core._nth.call(null,chunk__41508,i__41510);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41511_41519 = cljs.core.seq.call(null,requires);
var chunk__41512_41520 = null;
var count__41513_41521 = (0);
var i__41514_41522 = (0);
while(true){
if((i__41514_41522 < count__41513_41521)){
var req_41523 = cljs.core._nth.call(null,chunk__41512_41520,i__41514_41522);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41523,prov);


var G__41524 = seq__41511_41519;
var G__41525 = chunk__41512_41520;
var G__41526 = count__41513_41521;
var G__41527 = (i__41514_41522 + (1));
seq__41511_41519 = G__41524;
chunk__41512_41520 = G__41525;
count__41513_41521 = G__41526;
i__41514_41522 = G__41527;
continue;
} else {
var temp__5720__auto___41528 = cljs.core.seq.call(null,seq__41511_41519);
if(temp__5720__auto___41528){
var seq__41511_41529__$1 = temp__5720__auto___41528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41511_41529__$1)){
var c__4461__auto___41530 = cljs.core.chunk_first.call(null,seq__41511_41529__$1);
var G__41531 = cljs.core.chunk_rest.call(null,seq__41511_41529__$1);
var G__41532 = c__4461__auto___41530;
var G__41533 = cljs.core.count.call(null,c__4461__auto___41530);
var G__41534 = (0);
seq__41511_41519 = G__41531;
chunk__41512_41520 = G__41532;
count__41513_41521 = G__41533;
i__41514_41522 = G__41534;
continue;
} else {
var req_41535 = cljs.core.first.call(null,seq__41511_41529__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41535,prov);


var G__41536 = cljs.core.next.call(null,seq__41511_41529__$1);
var G__41537 = null;
var G__41538 = (0);
var G__41539 = (0);
seq__41511_41519 = G__41536;
chunk__41512_41520 = G__41537;
count__41513_41521 = G__41538;
i__41514_41522 = G__41539;
continue;
}
} else {
}
}
break;
}


var G__41540 = seq__41507;
var G__41541 = chunk__41508;
var G__41542 = count__41509;
var G__41543 = (i__41510 + (1));
seq__41507 = G__41540;
chunk__41508 = G__41541;
count__41509 = G__41542;
i__41510 = G__41543;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__41507);
if(temp__5720__auto__){
var seq__41507__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41507__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__41507__$1);
var G__41544 = cljs.core.chunk_rest.call(null,seq__41507__$1);
var G__41545 = c__4461__auto__;
var G__41546 = cljs.core.count.call(null,c__4461__auto__);
var G__41547 = (0);
seq__41507 = G__41544;
chunk__41508 = G__41545;
count__41509 = G__41546;
i__41510 = G__41547;
continue;
} else {
var prov = cljs.core.first.call(null,seq__41507__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41515_41548 = cljs.core.seq.call(null,requires);
var chunk__41516_41549 = null;
var count__41517_41550 = (0);
var i__41518_41551 = (0);
while(true){
if((i__41518_41551 < count__41517_41550)){
var req_41552 = cljs.core._nth.call(null,chunk__41516_41549,i__41518_41551);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41552,prov);


var G__41553 = seq__41515_41548;
var G__41554 = chunk__41516_41549;
var G__41555 = count__41517_41550;
var G__41556 = (i__41518_41551 + (1));
seq__41515_41548 = G__41553;
chunk__41516_41549 = G__41554;
count__41517_41550 = G__41555;
i__41518_41551 = G__41556;
continue;
} else {
var temp__5720__auto___41557__$1 = cljs.core.seq.call(null,seq__41515_41548);
if(temp__5720__auto___41557__$1){
var seq__41515_41558__$1 = temp__5720__auto___41557__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41515_41558__$1)){
var c__4461__auto___41559 = cljs.core.chunk_first.call(null,seq__41515_41558__$1);
var G__41560 = cljs.core.chunk_rest.call(null,seq__41515_41558__$1);
var G__41561 = c__4461__auto___41559;
var G__41562 = cljs.core.count.call(null,c__4461__auto___41559);
var G__41563 = (0);
seq__41515_41548 = G__41560;
chunk__41516_41549 = G__41561;
count__41517_41550 = G__41562;
i__41518_41551 = G__41563;
continue;
} else {
var req_41564 = cljs.core.first.call(null,seq__41515_41558__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41564,prov);


var G__41565 = cljs.core.next.call(null,seq__41515_41558__$1);
var G__41566 = null;
var G__41567 = (0);
var G__41568 = (0);
seq__41515_41548 = G__41565;
chunk__41516_41549 = G__41566;
count__41517_41550 = G__41567;
i__41518_41551 = G__41568;
continue;
}
} else {
}
}
break;
}


var G__41569 = cljs.core.next.call(null,seq__41507__$1);
var G__41570 = null;
var G__41571 = (0);
var G__41572 = (0);
seq__41507 = G__41569;
chunk__41508 = G__41570;
count__41509 = G__41571;
i__41510 = G__41572;
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
var seq__41573_41577 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__41574_41578 = null;
var count__41575_41579 = (0);
var i__41576_41580 = (0);
while(true){
if((i__41576_41580 < count__41575_41579)){
var ns_41581 = cljs.core._nth.call(null,chunk__41574_41578,i__41576_41580);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41581);


var G__41582 = seq__41573_41577;
var G__41583 = chunk__41574_41578;
var G__41584 = count__41575_41579;
var G__41585 = (i__41576_41580 + (1));
seq__41573_41577 = G__41582;
chunk__41574_41578 = G__41583;
count__41575_41579 = G__41584;
i__41576_41580 = G__41585;
continue;
} else {
var temp__5720__auto___41586 = cljs.core.seq.call(null,seq__41573_41577);
if(temp__5720__auto___41586){
var seq__41573_41587__$1 = temp__5720__auto___41586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41573_41587__$1)){
var c__4461__auto___41588 = cljs.core.chunk_first.call(null,seq__41573_41587__$1);
var G__41589 = cljs.core.chunk_rest.call(null,seq__41573_41587__$1);
var G__41590 = c__4461__auto___41588;
var G__41591 = cljs.core.count.call(null,c__4461__auto___41588);
var G__41592 = (0);
seq__41573_41577 = G__41589;
chunk__41574_41578 = G__41590;
count__41575_41579 = G__41591;
i__41576_41580 = G__41592;
continue;
} else {
var ns_41593 = cljs.core.first.call(null,seq__41573_41587__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41593);


var G__41594 = cljs.core.next.call(null,seq__41573_41587__$1);
var G__41595 = null;
var G__41596 = (0);
var G__41597 = (0);
seq__41573_41577 = G__41594;
chunk__41574_41578 = G__41595;
count__41575_41579 = G__41596;
i__41576_41580 = G__41597;
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
var G__41598__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__41598 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41599__i = 0, G__41599__a = new Array(arguments.length -  0);
while (G__41599__i < G__41599__a.length) {G__41599__a[G__41599__i] = arguments[G__41599__i + 0]; ++G__41599__i;}
  args = new cljs.core.IndexedSeq(G__41599__a,0,null);
} 
return G__41598__delegate.call(this,args);};
G__41598.cljs$lang$maxFixedArity = 0;
G__41598.cljs$lang$applyTo = (function (arglist__41600){
var args = cljs.core.seq(arglist__41600);
return G__41598__delegate(args);
});
G__41598.cljs$core$IFn$_invoke$arity$variadic = G__41598__delegate;
return G__41598;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__41601_SHARP_,p2__41602_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41601_SHARP_)),p2__41602_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__41603_SHARP_,p2__41604_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41603_SHARP_),p2__41604_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__41605 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__41605.addCallback(((function (G__41605){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__41605))
);

G__41605.addErrback(((function (G__41605){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__41605))
);

return G__41605;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e41606){if((e41606 instanceof Error)){
var e = e41606;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41606;

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
}catch (e41607){if((e41607 instanceof Error)){
var e = e41607;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41607;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__41608 = cljs.core._EQ_;
var expr__41609 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__41608.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__41609))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__41608.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__41609))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__41608.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__41609))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__41608,expr__41609){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__41608,expr__41609))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__41611,callback){
var map__41612 = p__41611;
var map__41612__$1 = (((((!((map__41612 == null))))?(((((map__41612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41612):map__41612);
var file_msg = map__41612__$1;
var request_url = cljs.core.get.call(null,map__41612__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__41612,map__41612__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__41612,map__41612__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__39437__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39437__auto__){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (c__39437__auto__){
return (function (state_41650){
var state_val_41651 = (state_41650[(1)]);
if((state_val_41651 === (7))){
var inst_41646 = (state_41650[(2)]);
var state_41650__$1 = state_41650;
var statearr_41652_41678 = state_41650__$1;
(statearr_41652_41678[(2)] = inst_41646);

(statearr_41652_41678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (1))){
var state_41650__$1 = state_41650;
var statearr_41653_41679 = state_41650__$1;
(statearr_41653_41679[(2)] = null);

(statearr_41653_41679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (4))){
var inst_41616 = (state_41650[(7)]);
var inst_41616__$1 = (state_41650[(2)]);
var state_41650__$1 = (function (){var statearr_41654 = state_41650;
(statearr_41654[(7)] = inst_41616__$1);

return statearr_41654;
})();
if(cljs.core.truth_(inst_41616__$1)){
var statearr_41655_41680 = state_41650__$1;
(statearr_41655_41680[(1)] = (5));

} else {
var statearr_41656_41681 = state_41650__$1;
(statearr_41656_41681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (15))){
var inst_41629 = (state_41650[(8)]);
var inst_41631 = (state_41650[(9)]);
var inst_41633 = inst_41631.call(null,inst_41629);
var state_41650__$1 = state_41650;
var statearr_41657_41682 = state_41650__$1;
(statearr_41657_41682[(2)] = inst_41633);

(statearr_41657_41682[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (13))){
var inst_41640 = (state_41650[(2)]);
var state_41650__$1 = state_41650;
var statearr_41658_41683 = state_41650__$1;
(statearr_41658_41683[(2)] = inst_41640);

(statearr_41658_41683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (6))){
var state_41650__$1 = state_41650;
var statearr_41659_41684 = state_41650__$1;
(statearr_41659_41684[(2)] = null);

(statearr_41659_41684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (17))){
var inst_41637 = (state_41650[(2)]);
var state_41650__$1 = state_41650;
var statearr_41660_41685 = state_41650__$1;
(statearr_41660_41685[(2)] = inst_41637);

(statearr_41660_41685[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (3))){
var inst_41648 = (state_41650[(2)]);
var state_41650__$1 = state_41650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41650__$1,inst_41648);
} else {
if((state_val_41651 === (12))){
var state_41650__$1 = state_41650;
var statearr_41661_41686 = state_41650__$1;
(statearr_41661_41686[(2)] = null);

(statearr_41661_41686[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (2))){
var state_41650__$1 = state_41650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41650__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_41651 === (11))){
var inst_41621 = (state_41650[(10)]);
var inst_41627 = figwheel.client.file_reloading.blocking_load.call(null,inst_41621);
var state_41650__$1 = state_41650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41650__$1,(14),inst_41627);
} else {
if((state_val_41651 === (9))){
var inst_41621 = (state_41650[(10)]);
var state_41650__$1 = state_41650;
if(cljs.core.truth_(inst_41621)){
var statearr_41662_41687 = state_41650__$1;
(statearr_41662_41687[(1)] = (11));

} else {
var statearr_41663_41688 = state_41650__$1;
(statearr_41663_41688[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (5))){
var inst_41622 = (state_41650[(11)]);
var inst_41616 = (state_41650[(7)]);
var inst_41621 = cljs.core.nth.call(null,inst_41616,(0),null);
var inst_41622__$1 = cljs.core.nth.call(null,inst_41616,(1),null);
var state_41650__$1 = (function (){var statearr_41664 = state_41650;
(statearr_41664[(10)] = inst_41621);

(statearr_41664[(11)] = inst_41622__$1);

return statearr_41664;
})();
if(cljs.core.truth_(inst_41622__$1)){
var statearr_41665_41689 = state_41650__$1;
(statearr_41665_41689[(1)] = (8));

} else {
var statearr_41666_41690 = state_41650__$1;
(statearr_41666_41690[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (14))){
var inst_41621 = (state_41650[(10)]);
var inst_41631 = (state_41650[(9)]);
var inst_41629 = (state_41650[(2)]);
var inst_41630 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_41631__$1 = cljs.core.get.call(null,inst_41630,inst_41621);
var state_41650__$1 = (function (){var statearr_41667 = state_41650;
(statearr_41667[(8)] = inst_41629);

(statearr_41667[(9)] = inst_41631__$1);

return statearr_41667;
})();
if(cljs.core.truth_(inst_41631__$1)){
var statearr_41668_41691 = state_41650__$1;
(statearr_41668_41691[(1)] = (15));

} else {
var statearr_41669_41692 = state_41650__$1;
(statearr_41669_41692[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (16))){
var inst_41629 = (state_41650[(8)]);
var inst_41635 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_41629);
var state_41650__$1 = state_41650;
var statearr_41670_41693 = state_41650__$1;
(statearr_41670_41693[(2)] = inst_41635);

(statearr_41670_41693[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (10))){
var inst_41642 = (state_41650[(2)]);
var state_41650__$1 = (function (){var statearr_41671 = state_41650;
(statearr_41671[(12)] = inst_41642);

return statearr_41671;
})();
var statearr_41672_41694 = state_41650__$1;
(statearr_41672_41694[(2)] = null);

(statearr_41672_41694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (8))){
var inst_41622 = (state_41650[(11)]);
var inst_41624 = eval(inst_41622);
var state_41650__$1 = state_41650;
var statearr_41673_41695 = state_41650__$1;
(statearr_41673_41695[(2)] = inst_41624);

(statearr_41673_41695[(1)] = (10));


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
});})(c__39437__auto__))
;
return ((function (switch__39342__auto__,c__39437__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__39343__auto__ = null;
var figwheel$client$file_reloading$state_machine__39343__auto____0 = (function (){
var statearr_41674 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41674[(0)] = figwheel$client$file_reloading$state_machine__39343__auto__);

(statearr_41674[(1)] = (1));

return statearr_41674;
});
var figwheel$client$file_reloading$state_machine__39343__auto____1 = (function (state_41650){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_41650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e41675){if((e41675 instanceof Object)){
var ex__39346__auto__ = e41675;
var statearr_41676_41696 = state_41650;
(statearr_41676_41696[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41697 = state_41650;
state_41650 = G__41697;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__39343__auto__ = function(state_41650){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__39343__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__39343__auto____1.call(this,state_41650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__39343__auto____0;
figwheel$client$file_reloading$state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__39343__auto____1;
return figwheel$client$file_reloading$state_machine__39343__auto__;
})()
;})(switch__39342__auto__,c__39437__auto__))
})();
var state__39439__auto__ = (function (){var statearr_41677 = f__39438__auto__.call(null);
(statearr_41677[(6)] = c__39437__auto__);

return statearr_41677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(c__39437__auto__))
);

return c__39437__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__41699 = arguments.length;
switch (G__41699) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__41701,callback){
var map__41702 = p__41701;
var map__41702__$1 = (((((!((map__41702 == null))))?(((((map__41702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41702):map__41702);
var file_msg = map__41702__$1;
var namespace = cljs.core.get.call(null,map__41702__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__41702,map__41702__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__41702,map__41702__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__41704){
var map__41705 = p__41704;
var map__41705__$1 = (((((!((map__41705 == null))))?(((((map__41705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41705):map__41705);
var file_msg = map__41705__$1;
var namespace = cljs.core.get.call(null,map__41705__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__41707){
var map__41708 = p__41707;
var map__41708__$1 = (((((!((map__41708 == null))))?(((((map__41708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41708):map__41708);
var file_msg = map__41708__$1;
var namespace = cljs.core.get.call(null,map__41708__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__41710,callback){
var map__41711 = p__41710;
var map__41711__$1 = (((((!((map__41711 == null))))?(((((map__41711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41711):map__41711);
var file_msg = map__41711__$1;
var request_url = cljs.core.get.call(null,map__41711__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__41711__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__39437__auto___41761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39437__auto___41761,out){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (c__39437__auto___41761,out){
return (function (state_41746){
var state_val_41747 = (state_41746[(1)]);
if((state_val_41747 === (1))){
var inst_41720 = cljs.core.seq.call(null,files);
var inst_41721 = cljs.core.first.call(null,inst_41720);
var inst_41722 = cljs.core.next.call(null,inst_41720);
var inst_41723 = files;
var state_41746__$1 = (function (){var statearr_41748 = state_41746;
(statearr_41748[(7)] = inst_41723);

(statearr_41748[(8)] = inst_41721);

(statearr_41748[(9)] = inst_41722);

return statearr_41748;
})();
var statearr_41749_41762 = state_41746__$1;
(statearr_41749_41762[(2)] = null);

(statearr_41749_41762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41747 === (2))){
var inst_41723 = (state_41746[(7)]);
var inst_41729 = (state_41746[(10)]);
var inst_41728 = cljs.core.seq.call(null,inst_41723);
var inst_41729__$1 = cljs.core.first.call(null,inst_41728);
var inst_41730 = cljs.core.next.call(null,inst_41728);
var inst_41731 = (inst_41729__$1 == null);
var inst_41732 = cljs.core.not.call(null,inst_41731);
var state_41746__$1 = (function (){var statearr_41750 = state_41746;
(statearr_41750[(11)] = inst_41730);

(statearr_41750[(10)] = inst_41729__$1);

return statearr_41750;
})();
if(inst_41732){
var statearr_41751_41763 = state_41746__$1;
(statearr_41751_41763[(1)] = (4));

} else {
var statearr_41752_41764 = state_41746__$1;
(statearr_41752_41764[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41747 === (3))){
var inst_41744 = (state_41746[(2)]);
var state_41746__$1 = state_41746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41746__$1,inst_41744);
} else {
if((state_val_41747 === (4))){
var inst_41729 = (state_41746[(10)]);
var inst_41734 = figwheel.client.file_reloading.reload_js_file.call(null,inst_41729);
var state_41746__$1 = state_41746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41746__$1,(7),inst_41734);
} else {
if((state_val_41747 === (5))){
var inst_41740 = cljs.core.async.close_BANG_.call(null,out);
var state_41746__$1 = state_41746;
var statearr_41753_41765 = state_41746__$1;
(statearr_41753_41765[(2)] = inst_41740);

(statearr_41753_41765[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41747 === (6))){
var inst_41742 = (state_41746[(2)]);
var state_41746__$1 = state_41746;
var statearr_41754_41766 = state_41746__$1;
(statearr_41754_41766[(2)] = inst_41742);

(statearr_41754_41766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41747 === (7))){
var inst_41730 = (state_41746[(11)]);
var inst_41736 = (state_41746[(2)]);
var inst_41737 = cljs.core.async.put_BANG_.call(null,out,inst_41736);
var inst_41723 = inst_41730;
var state_41746__$1 = (function (){var statearr_41755 = state_41746;
(statearr_41755[(7)] = inst_41723);

(statearr_41755[(12)] = inst_41737);

return statearr_41755;
})();
var statearr_41756_41767 = state_41746__$1;
(statearr_41756_41767[(2)] = null);

(statearr_41756_41767[(1)] = (2));


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
});})(c__39437__auto___41761,out))
;
return ((function (switch__39342__auto__,c__39437__auto___41761,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39343__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39343__auto____0 = (function (){
var statearr_41757 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41757[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39343__auto__);

(statearr_41757[(1)] = (1));

return statearr_41757;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39343__auto____1 = (function (state_41746){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_41746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e41758){if((e41758 instanceof Object)){
var ex__39346__auto__ = e41758;
var statearr_41759_41768 = state_41746;
(statearr_41759_41768[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41769 = state_41746;
state_41746 = G__41769;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39343__auto__ = function(state_41746){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39343__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39343__auto____1.call(this,state_41746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39343__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39343__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39343__auto__;
})()
;})(switch__39342__auto__,c__39437__auto___41761,out))
})();
var state__39439__auto__ = (function (){var statearr_41760 = f__39438__auto__.call(null);
(statearr_41760[(6)] = c__39437__auto___41761);

return statearr_41760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(c__39437__auto___41761,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__41770,opts){
var map__41771 = p__41770;
var map__41771__$1 = (((((!((map__41771 == null))))?(((((map__41771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41771):map__41771);
var eval_body = cljs.core.get.call(null,map__41771__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__41771__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e41773){var e = e41773;
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
return (function (p1__41774_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41774_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__41775){
var vec__41776 = p__41775;
var k = cljs.core.nth.call(null,vec__41776,(0),null);
var v = cljs.core.nth.call(null,vec__41776,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__41779){
var vec__41780 = p__41779;
var k = cljs.core.nth.call(null,vec__41780,(0),null);
var v = cljs.core.nth.call(null,vec__41780,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__41786,p__41787){
var map__41788 = p__41786;
var map__41788__$1 = (((((!((map__41788 == null))))?(((((map__41788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41788):map__41788);
var opts = map__41788__$1;
var before_jsload = cljs.core.get.call(null,map__41788__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__41788__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__41788__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__41789 = p__41787;
var map__41789__$1 = (((((!((map__41789 == null))))?(((((map__41789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41789):map__41789);
var msg = map__41789__$1;
var files = cljs.core.get.call(null,map__41789__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__41789__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__41789__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__39437__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39437__auto__,map__41788,map__41788__$1,opts,before_jsload,on_jsload,reload_dependents,map__41789,map__41789__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (c__39437__auto__,map__41788,map__41788__$1,opts,before_jsload,on_jsload,reload_dependents,map__41789,map__41789__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_41943){
var state_val_41944 = (state_41943[(1)]);
if((state_val_41944 === (7))){
var inst_41803 = (state_41943[(7)]);
var inst_41805 = (state_41943[(8)]);
var inst_41806 = (state_41943[(9)]);
var inst_41804 = (state_41943[(10)]);
var inst_41811 = cljs.core._nth.call(null,inst_41804,inst_41806);
var inst_41812 = figwheel.client.file_reloading.eval_body.call(null,inst_41811,opts);
var inst_41813 = (inst_41806 + (1));
var tmp41945 = inst_41803;
var tmp41946 = inst_41805;
var tmp41947 = inst_41804;
var inst_41803__$1 = tmp41945;
var inst_41804__$1 = tmp41947;
var inst_41805__$1 = tmp41946;
var inst_41806__$1 = inst_41813;
var state_41943__$1 = (function (){var statearr_41948 = state_41943;
(statearr_41948[(7)] = inst_41803__$1);

(statearr_41948[(8)] = inst_41805__$1);

(statearr_41948[(9)] = inst_41806__$1);

(statearr_41948[(11)] = inst_41812);

(statearr_41948[(10)] = inst_41804__$1);

return statearr_41948;
})();
var statearr_41949_42032 = state_41943__$1;
(statearr_41949_42032[(2)] = null);

(statearr_41949_42032[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (20))){
var inst_41846 = (state_41943[(12)]);
var inst_41854 = figwheel.client.file_reloading.sort_files.call(null,inst_41846);
var state_41943__$1 = state_41943;
var statearr_41950_42033 = state_41943__$1;
(statearr_41950_42033[(2)] = inst_41854);

(statearr_41950_42033[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (27))){
var state_41943__$1 = state_41943;
var statearr_41951_42034 = state_41943__$1;
(statearr_41951_42034[(2)] = null);

(statearr_41951_42034[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (1))){
var inst_41795 = (state_41943[(13)]);
var inst_41792 = before_jsload.call(null,files);
var inst_41793 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_41794 = (function (){return ((function (inst_41795,inst_41792,inst_41793,state_val_41944,c__39437__auto__,map__41788,map__41788__$1,opts,before_jsload,on_jsload,reload_dependents,map__41789,map__41789__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41783_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41783_SHARP_);
});
;})(inst_41795,inst_41792,inst_41793,state_val_41944,c__39437__auto__,map__41788,map__41788__$1,opts,before_jsload,on_jsload,reload_dependents,map__41789,map__41789__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41795__$1 = cljs.core.filter.call(null,inst_41794,files);
var inst_41796 = cljs.core.not_empty.call(null,inst_41795__$1);
var state_41943__$1 = (function (){var statearr_41952 = state_41943;
(statearr_41952[(14)] = inst_41792);

(statearr_41952[(13)] = inst_41795__$1);

(statearr_41952[(15)] = inst_41793);

return statearr_41952;
})();
if(cljs.core.truth_(inst_41796)){
var statearr_41953_42035 = state_41943__$1;
(statearr_41953_42035[(1)] = (2));

} else {
var statearr_41954_42036 = state_41943__$1;
(statearr_41954_42036[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (24))){
var state_41943__$1 = state_41943;
var statearr_41955_42037 = state_41943__$1;
(statearr_41955_42037[(2)] = null);

(statearr_41955_42037[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (39))){
var inst_41896 = (state_41943[(16)]);
var state_41943__$1 = state_41943;
var statearr_41956_42038 = state_41943__$1;
(statearr_41956_42038[(2)] = inst_41896);

(statearr_41956_42038[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (46))){
var inst_41938 = (state_41943[(2)]);
var state_41943__$1 = state_41943;
var statearr_41957_42039 = state_41943__$1;
(statearr_41957_42039[(2)] = inst_41938);

(statearr_41957_42039[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (4))){
var inst_41840 = (state_41943[(2)]);
var inst_41841 = cljs.core.List.EMPTY;
var inst_41842 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_41841);
var inst_41843 = (function (){return ((function (inst_41840,inst_41841,inst_41842,state_val_41944,c__39437__auto__,map__41788,map__41788__$1,opts,before_jsload,on_jsload,reload_dependents,map__41789,map__41789__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41784_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41784_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41784_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__41784_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_41840,inst_41841,inst_41842,state_val_41944,c__39437__auto__,map__41788,map__41788__$1,opts,before_jsload,on_jsload,reload_dependents,map__41789,map__41789__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41844 = cljs.core.filter.call(null,inst_41843,files);
var inst_41845 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_41846 = cljs.core.concat.call(null,inst_41844,inst_41845);
var state_41943__$1 = (function (){var statearr_41958 = state_41943;
(statearr_41958[(12)] = inst_41846);

(statearr_41958[(17)] = inst_41840);

(statearr_41958[(18)] = inst_41842);

return statearr_41958;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_41959_42040 = state_41943__$1;
(statearr_41959_42040[(1)] = (16));

} else {
var statearr_41960_42041 = state_41943__$1;
(statearr_41960_42041[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (15))){
var inst_41830 = (state_41943[(2)]);
var state_41943__$1 = state_41943;
var statearr_41961_42042 = state_41943__$1;
(statearr_41961_42042[(2)] = inst_41830);

(statearr_41961_42042[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (21))){
var inst_41856 = (state_41943[(19)]);
var inst_41856__$1 = (state_41943[(2)]);
var inst_41857 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_41856__$1);
var state_41943__$1 = (function (){var statearr_41962 = state_41943;
(statearr_41962[(19)] = inst_41856__$1);

return statearr_41962;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41943__$1,(22),inst_41857);
} else {
if((state_val_41944 === (31))){
var inst_41941 = (state_41943[(2)]);
var state_41943__$1 = state_41943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41943__$1,inst_41941);
} else {
if((state_val_41944 === (32))){
var inst_41896 = (state_41943[(16)]);
var inst_41901 = inst_41896.cljs$lang$protocol_mask$partition0$;
var inst_41902 = (inst_41901 & (64));
var inst_41903 = inst_41896.cljs$core$ISeq$;
var inst_41904 = (cljs.core.PROTOCOL_SENTINEL === inst_41903);
var inst_41905 = ((inst_41902) || (inst_41904));
var state_41943__$1 = state_41943;
if(cljs.core.truth_(inst_41905)){
var statearr_41963_42043 = state_41943__$1;
(statearr_41963_42043[(1)] = (35));

} else {
var statearr_41964_42044 = state_41943__$1;
(statearr_41964_42044[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (40))){
var inst_41918 = (state_41943[(20)]);
var inst_41917 = (state_41943[(2)]);
var inst_41918__$1 = cljs.core.get.call(null,inst_41917,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_41919 = cljs.core.get.call(null,inst_41917,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_41920 = cljs.core.not_empty.call(null,inst_41918__$1);
var state_41943__$1 = (function (){var statearr_41965 = state_41943;
(statearr_41965[(20)] = inst_41918__$1);

(statearr_41965[(21)] = inst_41919);

return statearr_41965;
})();
if(cljs.core.truth_(inst_41920)){
var statearr_41966_42045 = state_41943__$1;
(statearr_41966_42045[(1)] = (41));

} else {
var statearr_41967_42046 = state_41943__$1;
(statearr_41967_42046[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (33))){
var state_41943__$1 = state_41943;
var statearr_41968_42047 = state_41943__$1;
(statearr_41968_42047[(2)] = false);

(statearr_41968_42047[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (13))){
var inst_41816 = (state_41943[(22)]);
var inst_41820 = cljs.core.chunk_first.call(null,inst_41816);
var inst_41821 = cljs.core.chunk_rest.call(null,inst_41816);
var inst_41822 = cljs.core.count.call(null,inst_41820);
var inst_41803 = inst_41821;
var inst_41804 = inst_41820;
var inst_41805 = inst_41822;
var inst_41806 = (0);
var state_41943__$1 = (function (){var statearr_41969 = state_41943;
(statearr_41969[(7)] = inst_41803);

(statearr_41969[(8)] = inst_41805);

(statearr_41969[(9)] = inst_41806);

(statearr_41969[(10)] = inst_41804);

return statearr_41969;
})();
var statearr_41970_42048 = state_41943__$1;
(statearr_41970_42048[(2)] = null);

(statearr_41970_42048[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (22))){
var inst_41860 = (state_41943[(23)]);
var inst_41856 = (state_41943[(19)]);
var inst_41864 = (state_41943[(24)]);
var inst_41859 = (state_41943[(25)]);
var inst_41859__$1 = (state_41943[(2)]);
var inst_41860__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41859__$1);
var inst_41861 = (function (){var all_files = inst_41856;
var res_SINGLEQUOTE_ = inst_41859__$1;
var res = inst_41860__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_41860,inst_41856,inst_41864,inst_41859,inst_41859__$1,inst_41860__$1,state_val_41944,c__39437__auto__,map__41788,map__41788__$1,opts,before_jsload,on_jsload,reload_dependents,map__41789,map__41789__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41785_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__41785_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_41860,inst_41856,inst_41864,inst_41859,inst_41859__$1,inst_41860__$1,state_val_41944,c__39437__auto__,map__41788,map__41788__$1,opts,before_jsload,on_jsload,reload_dependents,map__41789,map__41789__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41862 = cljs.core.filter.call(null,inst_41861,inst_41859__$1);
var inst_41863 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_41864__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41863);
var inst_41865 = cljs.core.not_empty.call(null,inst_41864__$1);
var state_41943__$1 = (function (){var statearr_41971 = state_41943;
(statearr_41971[(23)] = inst_41860__$1);

(statearr_41971[(26)] = inst_41862);

(statearr_41971[(24)] = inst_41864__$1);

(statearr_41971[(25)] = inst_41859__$1);

return statearr_41971;
})();
if(cljs.core.truth_(inst_41865)){
var statearr_41972_42049 = state_41943__$1;
(statearr_41972_42049[(1)] = (23));

} else {
var statearr_41973_42050 = state_41943__$1;
(statearr_41973_42050[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (36))){
var state_41943__$1 = state_41943;
var statearr_41974_42051 = state_41943__$1;
(statearr_41974_42051[(2)] = false);

(statearr_41974_42051[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (41))){
var inst_41918 = (state_41943[(20)]);
var inst_41922 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_41923 = cljs.core.map.call(null,inst_41922,inst_41918);
var inst_41924 = cljs.core.pr_str.call(null,inst_41923);
var inst_41925 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41924)].join('');
var inst_41926 = figwheel.client.utils.log.call(null,inst_41925);
var state_41943__$1 = state_41943;
var statearr_41975_42052 = state_41943__$1;
(statearr_41975_42052[(2)] = inst_41926);

(statearr_41975_42052[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (43))){
var inst_41919 = (state_41943[(21)]);
var inst_41929 = (state_41943[(2)]);
var inst_41930 = cljs.core.not_empty.call(null,inst_41919);
var state_41943__$1 = (function (){var statearr_41976 = state_41943;
(statearr_41976[(27)] = inst_41929);

return statearr_41976;
})();
if(cljs.core.truth_(inst_41930)){
var statearr_41977_42053 = state_41943__$1;
(statearr_41977_42053[(1)] = (44));

} else {
var statearr_41978_42054 = state_41943__$1;
(statearr_41978_42054[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (29))){
var inst_41860 = (state_41943[(23)]);
var inst_41862 = (state_41943[(26)]);
var inst_41856 = (state_41943[(19)]);
var inst_41864 = (state_41943[(24)]);
var inst_41896 = (state_41943[(16)]);
var inst_41859 = (state_41943[(25)]);
var inst_41892 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_41895 = (function (){var all_files = inst_41856;
var res_SINGLEQUOTE_ = inst_41859;
var res = inst_41860;
var files_not_loaded = inst_41862;
var dependencies_that_loaded = inst_41864;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41860,inst_41862,inst_41856,inst_41864,inst_41896,inst_41859,inst_41892,state_val_41944,c__39437__auto__,map__41788,map__41788__$1,opts,before_jsload,on_jsload,reload_dependents,map__41789,map__41789__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41894){
var map__41979 = p__41894;
var map__41979__$1 = (((((!((map__41979 == null))))?(((((map__41979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41979):map__41979);
var namespace = cljs.core.get.call(null,map__41979__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41860,inst_41862,inst_41856,inst_41864,inst_41896,inst_41859,inst_41892,state_val_41944,c__39437__auto__,map__41788,map__41788__$1,opts,before_jsload,on_jsload,reload_dependents,map__41789,map__41789__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41896__$1 = cljs.core.group_by.call(null,inst_41895,inst_41862);
var inst_41898 = (inst_41896__$1 == null);
var inst_41899 = cljs.core.not.call(null,inst_41898);
var state_41943__$1 = (function (){var statearr_41981 = state_41943;
(statearr_41981[(28)] = inst_41892);

(statearr_41981[(16)] = inst_41896__$1);

return statearr_41981;
})();
if(inst_41899){
var statearr_41982_42055 = state_41943__$1;
(statearr_41982_42055[(1)] = (32));

} else {
var statearr_41983_42056 = state_41943__$1;
(statearr_41983_42056[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (44))){
var inst_41919 = (state_41943[(21)]);
var inst_41932 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41919);
var inst_41933 = cljs.core.pr_str.call(null,inst_41932);
var inst_41934 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41933)].join('');
var inst_41935 = figwheel.client.utils.log.call(null,inst_41934);
var state_41943__$1 = state_41943;
var statearr_41984_42057 = state_41943__$1;
(statearr_41984_42057[(2)] = inst_41935);

(statearr_41984_42057[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (6))){
var inst_41837 = (state_41943[(2)]);
var state_41943__$1 = state_41943;
var statearr_41985_42058 = state_41943__$1;
(statearr_41985_42058[(2)] = inst_41837);

(statearr_41985_42058[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (28))){
var inst_41862 = (state_41943[(26)]);
var inst_41889 = (state_41943[(2)]);
var inst_41890 = cljs.core.not_empty.call(null,inst_41862);
var state_41943__$1 = (function (){var statearr_41986 = state_41943;
(statearr_41986[(29)] = inst_41889);

return statearr_41986;
})();
if(cljs.core.truth_(inst_41890)){
var statearr_41987_42059 = state_41943__$1;
(statearr_41987_42059[(1)] = (29));

} else {
var statearr_41988_42060 = state_41943__$1;
(statearr_41988_42060[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (25))){
var inst_41860 = (state_41943[(23)]);
var inst_41876 = (state_41943[(2)]);
var inst_41877 = cljs.core.not_empty.call(null,inst_41860);
var state_41943__$1 = (function (){var statearr_41989 = state_41943;
(statearr_41989[(30)] = inst_41876);

return statearr_41989;
})();
if(cljs.core.truth_(inst_41877)){
var statearr_41990_42061 = state_41943__$1;
(statearr_41990_42061[(1)] = (26));

} else {
var statearr_41991_42062 = state_41943__$1;
(statearr_41991_42062[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (34))){
var inst_41912 = (state_41943[(2)]);
var state_41943__$1 = state_41943;
if(cljs.core.truth_(inst_41912)){
var statearr_41992_42063 = state_41943__$1;
(statearr_41992_42063[(1)] = (38));

} else {
var statearr_41993_42064 = state_41943__$1;
(statearr_41993_42064[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (17))){
var state_41943__$1 = state_41943;
var statearr_41994_42065 = state_41943__$1;
(statearr_41994_42065[(2)] = recompile_dependents);

(statearr_41994_42065[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (3))){
var state_41943__$1 = state_41943;
var statearr_41995_42066 = state_41943__$1;
(statearr_41995_42066[(2)] = null);

(statearr_41995_42066[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (12))){
var inst_41833 = (state_41943[(2)]);
var state_41943__$1 = state_41943;
var statearr_41996_42067 = state_41943__$1;
(statearr_41996_42067[(2)] = inst_41833);

(statearr_41996_42067[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (2))){
var inst_41795 = (state_41943[(13)]);
var inst_41802 = cljs.core.seq.call(null,inst_41795);
var inst_41803 = inst_41802;
var inst_41804 = null;
var inst_41805 = (0);
var inst_41806 = (0);
var state_41943__$1 = (function (){var statearr_41997 = state_41943;
(statearr_41997[(7)] = inst_41803);

(statearr_41997[(8)] = inst_41805);

(statearr_41997[(9)] = inst_41806);

(statearr_41997[(10)] = inst_41804);

return statearr_41997;
})();
var statearr_41998_42068 = state_41943__$1;
(statearr_41998_42068[(2)] = null);

(statearr_41998_42068[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (23))){
var inst_41860 = (state_41943[(23)]);
var inst_41862 = (state_41943[(26)]);
var inst_41856 = (state_41943[(19)]);
var inst_41864 = (state_41943[(24)]);
var inst_41859 = (state_41943[(25)]);
var inst_41867 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_41869 = (function (){var all_files = inst_41856;
var res_SINGLEQUOTE_ = inst_41859;
var res = inst_41860;
var files_not_loaded = inst_41862;
var dependencies_that_loaded = inst_41864;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41860,inst_41862,inst_41856,inst_41864,inst_41859,inst_41867,state_val_41944,c__39437__auto__,map__41788,map__41788__$1,opts,before_jsload,on_jsload,reload_dependents,map__41789,map__41789__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41868){
var map__41999 = p__41868;
var map__41999__$1 = (((((!((map__41999 == null))))?(((((map__41999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41999):map__41999);
var request_url = cljs.core.get.call(null,map__41999__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41860,inst_41862,inst_41856,inst_41864,inst_41859,inst_41867,state_val_41944,c__39437__auto__,map__41788,map__41788__$1,opts,before_jsload,on_jsload,reload_dependents,map__41789,map__41789__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41870 = cljs.core.reverse.call(null,inst_41864);
var inst_41871 = cljs.core.map.call(null,inst_41869,inst_41870);
var inst_41872 = cljs.core.pr_str.call(null,inst_41871);
var inst_41873 = figwheel.client.utils.log.call(null,inst_41872);
var state_41943__$1 = (function (){var statearr_42001 = state_41943;
(statearr_42001[(31)] = inst_41867);

return statearr_42001;
})();
var statearr_42002_42069 = state_41943__$1;
(statearr_42002_42069[(2)] = inst_41873);

(statearr_42002_42069[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (35))){
var state_41943__$1 = state_41943;
var statearr_42003_42070 = state_41943__$1;
(statearr_42003_42070[(2)] = true);

(statearr_42003_42070[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (19))){
var inst_41846 = (state_41943[(12)]);
var inst_41852 = figwheel.client.file_reloading.expand_files.call(null,inst_41846);
var state_41943__$1 = state_41943;
var statearr_42004_42071 = state_41943__$1;
(statearr_42004_42071[(2)] = inst_41852);

(statearr_42004_42071[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (11))){
var state_41943__$1 = state_41943;
var statearr_42005_42072 = state_41943__$1;
(statearr_42005_42072[(2)] = null);

(statearr_42005_42072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (9))){
var inst_41835 = (state_41943[(2)]);
var state_41943__$1 = state_41943;
var statearr_42006_42073 = state_41943__$1;
(statearr_42006_42073[(2)] = inst_41835);

(statearr_42006_42073[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (5))){
var inst_41805 = (state_41943[(8)]);
var inst_41806 = (state_41943[(9)]);
var inst_41808 = (inst_41806 < inst_41805);
var inst_41809 = inst_41808;
var state_41943__$1 = state_41943;
if(cljs.core.truth_(inst_41809)){
var statearr_42007_42074 = state_41943__$1;
(statearr_42007_42074[(1)] = (7));

} else {
var statearr_42008_42075 = state_41943__$1;
(statearr_42008_42075[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (14))){
var inst_41816 = (state_41943[(22)]);
var inst_41825 = cljs.core.first.call(null,inst_41816);
var inst_41826 = figwheel.client.file_reloading.eval_body.call(null,inst_41825,opts);
var inst_41827 = cljs.core.next.call(null,inst_41816);
var inst_41803 = inst_41827;
var inst_41804 = null;
var inst_41805 = (0);
var inst_41806 = (0);
var state_41943__$1 = (function (){var statearr_42009 = state_41943;
(statearr_42009[(7)] = inst_41803);

(statearr_42009[(8)] = inst_41805);

(statearr_42009[(9)] = inst_41806);

(statearr_42009[(10)] = inst_41804);

(statearr_42009[(32)] = inst_41826);

return statearr_42009;
})();
var statearr_42010_42076 = state_41943__$1;
(statearr_42010_42076[(2)] = null);

(statearr_42010_42076[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (45))){
var state_41943__$1 = state_41943;
var statearr_42011_42077 = state_41943__$1;
(statearr_42011_42077[(2)] = null);

(statearr_42011_42077[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (26))){
var inst_41860 = (state_41943[(23)]);
var inst_41862 = (state_41943[(26)]);
var inst_41856 = (state_41943[(19)]);
var inst_41864 = (state_41943[(24)]);
var inst_41859 = (state_41943[(25)]);
var inst_41879 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_41881 = (function (){var all_files = inst_41856;
var res_SINGLEQUOTE_ = inst_41859;
var res = inst_41860;
var files_not_loaded = inst_41862;
var dependencies_that_loaded = inst_41864;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41860,inst_41862,inst_41856,inst_41864,inst_41859,inst_41879,state_val_41944,c__39437__auto__,map__41788,map__41788__$1,opts,before_jsload,on_jsload,reload_dependents,map__41789,map__41789__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41880){
var map__42012 = p__41880;
var map__42012__$1 = (((((!((map__42012 == null))))?(((((map__42012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42012):map__42012);
var namespace = cljs.core.get.call(null,map__42012__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__42012__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41860,inst_41862,inst_41856,inst_41864,inst_41859,inst_41879,state_val_41944,c__39437__auto__,map__41788,map__41788__$1,opts,before_jsload,on_jsload,reload_dependents,map__41789,map__41789__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41882 = cljs.core.map.call(null,inst_41881,inst_41860);
var inst_41883 = cljs.core.pr_str.call(null,inst_41882);
var inst_41884 = figwheel.client.utils.log.call(null,inst_41883);
var inst_41885 = (function (){var all_files = inst_41856;
var res_SINGLEQUOTE_ = inst_41859;
var res = inst_41860;
var files_not_loaded = inst_41862;
var dependencies_that_loaded = inst_41864;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41860,inst_41862,inst_41856,inst_41864,inst_41859,inst_41879,inst_41881,inst_41882,inst_41883,inst_41884,state_val_41944,c__39437__auto__,map__41788,map__41788__$1,opts,before_jsload,on_jsload,reload_dependents,map__41789,map__41789__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41860,inst_41862,inst_41856,inst_41864,inst_41859,inst_41879,inst_41881,inst_41882,inst_41883,inst_41884,state_val_41944,c__39437__auto__,map__41788,map__41788__$1,opts,before_jsload,on_jsload,reload_dependents,map__41789,map__41789__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41886 = setTimeout(inst_41885,(10));
var state_41943__$1 = (function (){var statearr_42014 = state_41943;
(statearr_42014[(33)] = inst_41879);

(statearr_42014[(34)] = inst_41884);

return statearr_42014;
})();
var statearr_42015_42078 = state_41943__$1;
(statearr_42015_42078[(2)] = inst_41886);

(statearr_42015_42078[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (16))){
var state_41943__$1 = state_41943;
var statearr_42016_42079 = state_41943__$1;
(statearr_42016_42079[(2)] = reload_dependents);

(statearr_42016_42079[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (38))){
var inst_41896 = (state_41943[(16)]);
var inst_41914 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41896);
var state_41943__$1 = state_41943;
var statearr_42017_42080 = state_41943__$1;
(statearr_42017_42080[(2)] = inst_41914);

(statearr_42017_42080[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (30))){
var state_41943__$1 = state_41943;
var statearr_42018_42081 = state_41943__$1;
(statearr_42018_42081[(2)] = null);

(statearr_42018_42081[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (10))){
var inst_41816 = (state_41943[(22)]);
var inst_41818 = cljs.core.chunked_seq_QMARK_.call(null,inst_41816);
var state_41943__$1 = state_41943;
if(inst_41818){
var statearr_42019_42082 = state_41943__$1;
(statearr_42019_42082[(1)] = (13));

} else {
var statearr_42020_42083 = state_41943__$1;
(statearr_42020_42083[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (18))){
var inst_41850 = (state_41943[(2)]);
var state_41943__$1 = state_41943;
if(cljs.core.truth_(inst_41850)){
var statearr_42021_42084 = state_41943__$1;
(statearr_42021_42084[(1)] = (19));

} else {
var statearr_42022_42085 = state_41943__$1;
(statearr_42022_42085[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (42))){
var state_41943__$1 = state_41943;
var statearr_42023_42086 = state_41943__$1;
(statearr_42023_42086[(2)] = null);

(statearr_42023_42086[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (37))){
var inst_41909 = (state_41943[(2)]);
var state_41943__$1 = state_41943;
var statearr_42024_42087 = state_41943__$1;
(statearr_42024_42087[(2)] = inst_41909);

(statearr_42024_42087[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41944 === (8))){
var inst_41803 = (state_41943[(7)]);
var inst_41816 = (state_41943[(22)]);
var inst_41816__$1 = cljs.core.seq.call(null,inst_41803);
var state_41943__$1 = (function (){var statearr_42025 = state_41943;
(statearr_42025[(22)] = inst_41816__$1);

return statearr_42025;
})();
if(inst_41816__$1){
var statearr_42026_42088 = state_41943__$1;
(statearr_42026_42088[(1)] = (10));

} else {
var statearr_42027_42089 = state_41943__$1;
(statearr_42027_42089[(1)] = (11));

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
});})(c__39437__auto__,map__41788,map__41788__$1,opts,before_jsload,on_jsload,reload_dependents,map__41789,map__41789__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__39342__auto__,c__39437__auto__,map__41788,map__41788__$1,opts,before_jsload,on_jsload,reload_dependents,map__41789,map__41789__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39343__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39343__auto____0 = (function (){
var statearr_42028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42028[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__39343__auto__);

(statearr_42028[(1)] = (1));

return statearr_42028;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39343__auto____1 = (function (state_41943){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_41943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e42029){if((e42029 instanceof Object)){
var ex__39346__auto__ = e42029;
var statearr_42030_42090 = state_41943;
(statearr_42030_42090[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42091 = state_41943;
state_41943 = G__42091;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__39343__auto__ = function(state_41943){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39343__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39343__auto____1.call(this,state_41943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39343__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39343__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39343__auto__;
})()
;})(switch__39342__auto__,c__39437__auto__,map__41788,map__41788__$1,opts,before_jsload,on_jsload,reload_dependents,map__41789,map__41789__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__39439__auto__ = (function (){var statearr_42031 = f__39438__auto__.call(null);
(statearr_42031[(6)] = c__39437__auto__);

return statearr_42031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(c__39437__auto__,map__41788,map__41788__$1,opts,before_jsload,on_jsload,reload_dependents,map__41789,map__41789__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__39437__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__42094,link){
var map__42095 = p__42094;
var map__42095__$1 = (((((!((map__42095 == null))))?(((((map__42095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42095):map__42095);
var file = cljs.core.get.call(null,map__42095__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__42095,map__42095__$1,file){
return (function (p1__42092_SHARP_,p2__42093_SHARP_){
if(cljs.core._EQ_.call(null,p1__42092_SHARP_,p2__42093_SHARP_)){
return p1__42092_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__42095,map__42095__$1,file))
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
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__42098){
var map__42099 = p__42098;
var map__42099__$1 = (((((!((map__42099 == null))))?(((((map__42099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42099):map__42099);
var match_length = cljs.core.get.call(null,map__42099__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__42099__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__42097_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__42097_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__42101_SHARP_,p2__42102_SHARP_){
return cljs.core.assoc.call(null,p1__42101_SHARP_,cljs.core.get.call(null,p2__42102_SHARP_,key),p2__42102_SHARP_);
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
var loaded_f_datas_42103 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_42103);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_42103);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__42104,p__42105){
var map__42106 = p__42104;
var map__42106__$1 = (((((!((map__42106 == null))))?(((((map__42106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42106):map__42106);
var on_cssload = cljs.core.get.call(null,map__42106__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__42107 = p__42105;
var map__42107__$1 = (((((!((map__42107 == null))))?(((((map__42107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42107):map__42107);
var files_msg = map__42107__$1;
var files = cljs.core.get.call(null,map__42107__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1575052465579
