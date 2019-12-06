// Compiled by ClojureScript 1.10.439 {}
goog.provide('mranderson048.reagent.v0v7v0.reagent.impl.component');
goog.require('cljs.core');
goog.require('mranderson048.reagent.v0v7v0.reagent.impl.util');
goog.require('mranderson048.reagent.v0v7v0.reagent.impl.batching');
goog.require('mranderson048.reagent.v0v7v0.reagent.ratom');
goog.require('mranderson048.reagent.v0v7v0.reagent.interop');
goog.require('mranderson048.reagent.v0v7v0.reagent.debug');
mranderson048.reagent.v0v7v0.reagent.impl.component.shallow_obj_to_map = (function mranderson048$reagent$v0v7v0$reagent$impl$component$shallow_obj_to_map(o){
var ks = cljs.core.js_keys.call(null,o);
var len = ks.length;
var m = cljs.core.PersistentArrayMap.EMPTY;
var i = (0);
while(true){
if((i < len)){
var k = (ks[i]);
var G__42014 = cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,k),(o[k]));
var G__42015 = (i + (1));
m = G__42014;
i = G__42015;
continue;
} else {
return m;
}
break;
}
});
mranderson048.reagent.v0v7v0.reagent.impl.component.extract_props = (function mranderson048$reagent$v0v7v0$reagent$impl$component$extract_props(v){
var p = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,p)){
return p;
} else {
return null;
}
});
mranderson048.reagent.v0v7v0.reagent.impl.component.extract_children = (function mranderson048$reagent$v0v7v0$reagent$impl$component$extract_children(v){
var p = cljs.core.nth.call(null,v,(1),null);
var first_child = (((((p == null)) || (cljs.core.map_QMARK_.call(null,p))))?(2):(1));
if((cljs.core.count.call(null,v) > first_child)){
return cljs.core.subvec.call(null,v,first_child);
} else {
return null;
}
});
mranderson048.reagent.v0v7v0.reagent.impl.component.props_argv = (function mranderson048$reagent$v0v7v0$reagent$impl$component$props_argv(c,p){
var temp__5722__auto__ = (p["argv"]);
if((temp__5722__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.constructor,mranderson048.reagent.v0v7v0.reagent.impl.component.shallow_obj_to_map.call(null,p)], null);
} else {
var a = temp__5722__auto__;
return a;
}
});
mranderson048.reagent.v0v7v0.reagent.impl.component.get_argv = (function mranderson048$reagent$v0v7v0$reagent$impl$component$get_argv(c){
return mranderson048.reagent.v0v7v0.reagent.impl.component.props_argv.call(null,c,(c["props"]));
});
mranderson048.reagent.v0v7v0.reagent.impl.component.get_props = (function mranderson048$reagent$v0v7v0$reagent$impl$component$get_props(c){
var p = (c["props"]);
var temp__5722__auto__ = (p["argv"]);
if((temp__5722__auto__ == null)){
return mranderson048.reagent.v0v7v0.reagent.impl.component.shallow_obj_to_map.call(null,p);
} else {
var v = temp__5722__auto__;
return mranderson048.reagent.v0v7v0.reagent.impl.component.extract_props.call(null,v);
}
});
mranderson048.reagent.v0v7v0.reagent.impl.component.get_children = (function mranderson048$reagent$v0v7v0$reagent$impl$component$get_children(c){
var p = (c["props"]);
var temp__5722__auto__ = (p["argv"]);
if((temp__5722__auto__ == null)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(mranderson048.reagent.v0v7v0.reagent.impl.util.react["Children"]["toArray"])((p["children"])));
} else {
var v = temp__5722__auto__;
return mranderson048.reagent.v0v7v0.reagent.impl.component.extract_children.call(null,v);
}
});
mranderson048.reagent.v0v7v0.reagent.impl.component.reagent_class_QMARK_ = (function mranderson048$reagent$v0v7v0$reagent$impl$component$reagent_class_QMARK_(c){
return ((cljs.core.fn_QMARK_.call(null,c)) && ((!(((function (){var G__42017 = c;
var G__42017__$1 = (((G__42017 == null))?null:G__42017.prototype);
if((G__42017__$1 == null)){
return null;
} else {
return (G__42017__$1["reagentRender"]);
}
})() == null)))));
});
mranderson048.reagent.v0v7v0.reagent.impl.component.react_class_QMARK_ = (function mranderson048$reagent$v0v7v0$reagent$impl$component$react_class_QMARK_(c){
return ((cljs.core.fn_QMARK_.call(null,c)) && ((!(((function (){var G__42019 = c;
var G__42019__$1 = (((G__42019 == null))?null:G__42019.prototype);
if((G__42019__$1 == null)){
return null;
} else {
return (G__42019__$1["render"]);
}
})() == null)))));
});
mranderson048.reagent.v0v7v0.reagent.impl.component.reagent_component_QMARK_ = (function mranderson048$reagent$v0v7v0$reagent$impl$component$reagent_component_QMARK_(c){
return (!(((c["reagentRender"]) == null)));
});
mranderson048.reagent.v0v7v0.reagent.impl.component.cached_react_class = (function mranderson048$reagent$v0v7v0$reagent$impl$component$cached_react_class(c){
return (c["cljsReactClass"]);
});
mranderson048.reagent.v0v7v0.reagent.impl.component.cache_react_class = (function mranderson048$reagent$v0v7v0$reagent$impl$component$cache_react_class(c,constructor$){
return (c["cljsReactClass"] = constructor$);
});
mranderson048.reagent.v0v7v0.reagent.impl.component.state_atom = (function mranderson048$reagent$v0v7v0$reagent$impl$component$state_atom(this$){
var sa = (this$["cljsState"]);
if((!((sa == null)))){
return sa;
} else {
return (this$["cljsState"] = mranderson048.reagent.v0v7v0.reagent.ratom.atom.call(null,null));
}
});
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0 !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.impl !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.impl.component !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.impl.component.as_element !== 'undefined')){
} else {
mranderson048.reagent.v0v7v0.reagent.impl.component.as_element = null;
}
mranderson048.reagent.v0v7v0.reagent.impl.component.wrap_render = (function mranderson048$reagent$v0v7v0$reagent$impl$component$wrap_render(c){
while(true){
var f = (c["reagentRender"]);
var _ = ((cljs.core.ifn_QMARK_.call(null,f))?null:(function(){throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected something callable, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,f))].join('')),"\n","(clojure.core/ifn? f)"].join('')))})());
var res = (((c["cljsLegacyRender"]) === true)?f.call(c,c):(function (){var v = mranderson048.reagent.v0v7v0.reagent.impl.component.get_argv.call(null,c);
var n = cljs.core.count.call(null,v);
var G__42020 = n;
switch (G__42020) {
case (1):
return f.call(c);

break;
case (2):
return f.call(c,cljs.core.nth.call(null,v,(1)));

break;
case (3):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)));

break;
case (4):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)),cljs.core.nth.call(null,v,(3)));

break;
case (5):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)),cljs.core.nth.call(null,v,(3)),cljs.core.nth.call(null,v,(4)));

break;
default:
return f.apply(c,cljs.core.into_array.call(null,v).slice((1)));

}
})());
if(cljs.core.vector_QMARK_.call(null,res)){
return mranderson048.reagent.v0v7v0.reagent.impl.component.as_element.call(null,res);
} else {
if(cljs.core.ifn_QMARK_.call(null,res)){
var f__$1 = ((mranderson048.reagent.v0v7v0.reagent.impl.component.reagent_class_QMARK_.call(null,res))?((function (c,f,_,res){
return (function() { 
var G__42022__delegate = function (args){
return mranderson048.reagent.v0v7v0.reagent.impl.component.as_element.call(null,cljs.core.apply.call(null,cljs.core.vector,res,args));
};
var G__42022 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42023__i = 0, G__42023__a = new Array(arguments.length -  0);
while (G__42023__i < G__42023__a.length) {G__42023__a[G__42023__i] = arguments[G__42023__i + 0]; ++G__42023__i;}
  args = new cljs.core.IndexedSeq(G__42023__a,0,null);
} 
return G__42022__delegate.call(this,args);};
G__42022.cljs$lang$maxFixedArity = 0;
G__42022.cljs$lang$applyTo = (function (arglist__42024){
var args = cljs.core.seq(arglist__42024);
return G__42022__delegate(args);
});
G__42022.cljs$core$IFn$_invoke$arity$variadic = G__42022__delegate;
return G__42022;
})()
;})(c,f,_,res))
:res);
(c["reagentRender"] = f__$1);

var G__42025 = c;
c = G__42025;
continue;
} else {
return res;

}
}
break;
}
});
mranderson048.reagent.v0v7v0.reagent.impl.component.do_render = (function mranderson048$reagent$v0v7v0$reagent$impl$component$do_render(c){
var _STAR_current_component_STAR__orig_val__42026 = mranderson048.reagent.v0v7v0.reagent.impl.component._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__42027 = c;
mranderson048.reagent.v0v7v0.reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__42027;

try{var ok = [false];
try{var res = mranderson048.reagent.v0v7v0.reagent.impl.component.wrap_render.call(null,c);
(ok[(0)] = true);

return res;
}finally {if(cljs.core.truth_((ok[(0)]))){
} else {
if(cljs.core.truth_(mranderson048.reagent.v0v7v0.reagent.debug.has_console)){
(cljs.core.truth_(mranderson048.reagent.v0v7v0.reagent.debug.tracking)?mranderson048.reagent.v0v7v0.reagent.debug.track_console:console).error(cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Error rendering component",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.reagent.v0v7v0.reagent.impl.component.comp_name.call(null))].join('')));
} else {
}
}
}
}finally {mranderson048.reagent.v0v7v0.reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__42026;
}});
mranderson048.reagent.v0v7v0.reagent.impl.component.rat_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),true], null);
mranderson048.reagent.v0v7v0.reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function mranderson048$reagent$v0v7v0$reagent$impl$component$render(){
var c = this;
if(mranderson048.reagent.v0v7v0.reagent.impl.util._STAR_non_reactive_STAR_){
return mranderson048.reagent.v0v7v0.reagent.impl.component.do_render.call(null,c);
} else {
var rat = (c["cljsRatom"]);
mranderson048.reagent.v0v7v0.reagent.impl.batching.mark_rendered.call(null,c);

if((rat == null)){
return mranderson048.reagent.v0v7v0.reagent.ratom.run_in_reaction.call(null,((function (rat,c){
return (function (){
return mranderson048.reagent.v0v7v0.reagent.impl.component.do_render.call(null,c);
});})(rat,c))
,c,"cljsRatom",mranderson048.reagent.v0v7v0.reagent.impl.batching.queue_render,mranderson048.reagent.v0v7v0.reagent.impl.component.rat_opts);
} else {
return rat._run(false);
}
}
})], null);
mranderson048.reagent.v0v7v0.reagent.impl.component.custom_wrapper = (function mranderson048$reagent$v0v7v0$reagent$impl$component$custom_wrapper(key,f){
var G__42028 = key;
var G__42028__$1 = (((G__42028 instanceof cljs.core.Keyword))?G__42028.fqn:null);
switch (G__42028__$1) {
case "getDefaultProps":
throw (new Error("getDefaultProps not supported"));

break;
case "getInitialState":
return ((function (G__42028,G__42028__$1){
return (function mranderson048$reagent$v0v7v0$reagent$impl$component$custom_wrapper_$_getInitialState(){
var c = this;
return cljs.core.reset_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.impl.component.state_atom.call(null,c),f.call(c,c));
});
;})(G__42028,G__42028__$1))

break;
case "componentWillReceiveProps":
return ((function (G__42028,G__42028__$1){
return (function mranderson048$reagent$v0v7v0$reagent$impl$component$custom_wrapper_$_componentWillReceiveProps(nextprops){
var c = this;
return f.call(c,c,mranderson048.reagent.v0v7v0.reagent.impl.component.props_argv.call(null,c,nextprops));
});
;})(G__42028,G__42028__$1))

break;
case "shouldComponentUpdate":
return ((function (G__42028,G__42028__$1){
return (function mranderson048$reagent$v0v7v0$reagent$impl$component$custom_wrapper_$_shouldComponentUpdate(nextprops,nextstate){
var or__4047__auto__ = mranderson048.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_;
if(or__4047__auto__){
return or__4047__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
var noargv = (((old_argv == null)) || ((new_argv == null)));
if((f == null)){
return ((noargv) || (cljs.core.not_EQ_.call(null,old_argv,new_argv)));
} else {
if(noargv){
return f.call(c,c,mranderson048.reagent.v0v7v0.reagent.impl.component.get_argv.call(null,c),mranderson048.reagent.v0v7v0.reagent.impl.component.props_argv.call(null,c,nextprops));
} else {
return f.call(c,c,old_argv,new_argv);

}
}
}
});
;})(G__42028,G__42028__$1))

break;
case "componentWillUpdate":
return ((function (G__42028,G__42028__$1){
return (function mranderson048$reagent$v0v7v0$reagent$impl$component$custom_wrapper_$_componentWillUpdate(nextprops){
var c = this;
return f.call(c,c,mranderson048.reagent.v0v7v0.reagent.impl.component.props_argv.call(null,c,nextprops));
});
;})(G__42028,G__42028__$1))

break;
case "componentDidUpdate":
return ((function (G__42028,G__42028__$1){
return (function mranderson048$reagent$v0v7v0$reagent$impl$component$custom_wrapper_$_componentDidUpdate(oldprops){
var c = this;
return f.call(c,c,mranderson048.reagent.v0v7v0.reagent.impl.component.props_argv.call(null,c,oldprops));
});
;})(G__42028,G__42028__$1))

break;
case "componentWillMount":
return ((function (G__42028,G__42028__$1){
return (function mranderson048$reagent$v0v7v0$reagent$impl$component$custom_wrapper_$_componentWillMount(){
var c = this;
(c["cljsMountOrder"] = mranderson048.reagent.v0v7v0.reagent.impl.batching.next_mount_count.call(null));

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});
;})(G__42028,G__42028__$1))

break;
case "componentDidMount":
return ((function (G__42028,G__42028__$1){
return (function mranderson048$reagent$v0v7v0$reagent$impl$component$custom_wrapper_$_componentDidMount(){
var c = this;
return f.call(c,c);
});
;})(G__42028,G__42028__$1))

break;
case "componentWillUnmount":
return ((function (G__42028,G__42028__$1){
return (function mranderson048$reagent$v0v7v0$reagent$impl$component$custom_wrapper_$_componentWillUnmount(){
var c = this;
var G__42029_42031 = (c["cljsRatom"]);
if((G__42029_42031 == null)){
} else {
mranderson048.reagent.v0v7v0.reagent.ratom.dispose_BANG_.call(null,G__42029_42031);
}

mranderson048.reagent.v0v7v0.reagent.impl.batching.mark_rendered.call(null,c);

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});
;})(G__42028,G__42028__$1))

break;
default:
return null;

}
});
mranderson048.reagent.v0v7v0.reagent.impl.component.get_wrapper = (function mranderson048$reagent$v0v7v0$reagent$impl$component$get_wrapper(key,f,name){
var wrap = mranderson048.reagent.v0v7v0.reagent.impl.component.custom_wrapper.call(null,key,f);
if(cljs.core.truth_((function (){var and__4036__auto__ = wrap;
if(cljs.core.truth_(and__4036__auto__)){
return f;
} else {
return and__4036__auto__;
}
})())){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected something callable, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,f))].join('')),"\n","(clojure.core/ifn? f)"].join('')));
}
} else {
}

var or__4047__auto__ = wrap;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return f;
}
});
mranderson048.reagent.v0v7v0.reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),null,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),null], null);
mranderson048.reagent.v0v7v0.reagent.impl.component.dash_to_camel = mranderson048.reagent.v0v7v0.reagent.impl.util.memoize_1.call(null,mranderson048.reagent.v0v7v0.reagent.impl.util.dash_to_camel);
mranderson048.reagent.v0v7v0.reagent.impl.component.camelify_map_keys = (function mranderson048$reagent$v0v7v0$reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,mranderson048.reagent.v0v7v0.reagent.impl.component.dash_to_camel.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
mranderson048.reagent.v0v7v0.reagent.impl.component.add_obligatory = (function mranderson048$reagent$v0v7v0$reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.call(null,mranderson048.reagent.v0v7v0.reagent.impl.component.obligatory,fun_map);
});
mranderson048.reagent.v0v7v0.reagent.impl.component.wrap_funs = (function mranderson048$reagent$v0v7v0$reagent$impl$component$wrap_funs(fmap){
var renders_42033 = cljs.core.select_keys.call(null,fmap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104)], null));
var render_fun_42034 = cljs.core.first.call(null,cljs.core.vals.call(null,renders_42033));
if((cljs.core.count.call(null,renders_42033) > (0))){
} else {
throw (new Error(["Assert failed: ","Missing reagent-render","\n","(pos? (count renders))"].join('')));
}

if(((1) === cljs.core.count.call(null,renders_42033))){
} else {
throw (new Error(["Assert failed: ","Too many render functions supplied","\n","(== 1 (count renders))"].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,render_fun_42034)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected something callable, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,render_fun_42034))].join('')),"\n","(clojure.core/ifn? render-fun)"].join('')));
}


var render_fun = (function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var legacy_render = (render_fun == null);
var render_fun__$1 = (function (){var or__4047__auto__ = render_fun;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var name = cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return mranderson048.reagent.v0v7v0.reagent.impl.util.fun_name.call(null,render_fun__$1);
}
})());
var name__$1 = (function (){var G__42032 = name;
switch (G__42032) {
case "":
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"reagent"));

break;
default:
return name;

}
})();
var fmap__$1 = cljs.core.reduce_kv.call(null,((function (render_fun,legacy_render,render_fun__$1,name,name__$1){
return (function (m,k,v){
return cljs.core.assoc.call(null,m,k,mranderson048.reagent.v0v7v0.reagent.impl.component.get_wrapper.call(null,k,v,name__$1));
});})(render_fun,legacy_render,render_fun__$1,name,name__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap);
return cljs.core.assoc.call(null,fmap__$1,new cljs.core.Keyword(null,"displayName","displayName",-809144601),name__$1,new cljs.core.Keyword(null,"autobind","autobind",-570650245),false,new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",-1527295613),legacy_render,new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),render_fun__$1,new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(mranderson048.reagent.v0v7v0.reagent.impl.component.static_fns));
});
mranderson048.reagent.v0v7v0.reagent.impl.component.map_to_js = (function mranderson048$reagent$v0v7v0$reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv.call(null,(function (o,k,v){
var G__42036 = o;
(G__42036[cljs.core.name.call(null,k)] = v);

return G__42036;
}),({}),m);
});
mranderson048.reagent.v0v7v0.reagent.impl.component.cljsify = (function mranderson048$reagent$v0v7v0$reagent$impl$component$cljsify(body){
return mranderson048.reagent.v0v7v0.reagent.impl.component.map_to_js.call(null,mranderson048.reagent.v0v7v0.reagent.impl.component.wrap_funs.call(null,mranderson048.reagent.v0v7v0.reagent.impl.component.add_obligatory.call(null,mranderson048.reagent.v0v7v0.reagent.impl.component.camelify_map_keys.call(null,body))));
});
mranderson048.reagent.v0v7v0.reagent.impl.component.create_class = (function mranderson048$reagent$v0v7v0$reagent$impl$component$create_class(body){
if(cljs.core.map_QMARK_.call(null,body)){
} else {
throw (new Error("Assert failed: (map? body)"));
}

return mranderson048.reagent.v0v7v0.reagent.impl.util.create_class.call(null,mranderson048.reagent.v0v7v0.reagent.impl.component.cljsify.call(null,body));
});
mranderson048.reagent.v0v7v0.reagent.impl.component.component_path = (function mranderson048$reagent$v0v7v0$reagent$impl$component$component_path(c){
var elem = (function (){var G__42037 = (function (){var or__4047__auto__ = (function (){var G__42039 = c;
if((G__42039 == null)){
return null;
} else {
return (G__42039["_reactInternalInstance"]);
}
})();
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return c;
}
})();
if((G__42037 == null)){
return null;
} else {
return (G__42037["_currentElement"]);
}
})();
var name = (function (){var G__42040 = elem;
var G__42040__$1 = (((G__42040 == null))?null:(G__42040["type"]));
if((G__42040__$1 == null)){
return null;
} else {
return (G__42040__$1["displayName"]);
}
})();
var path = (function (){var G__42041 = elem;
var G__42041__$1 = (((G__42041 == null))?null:(G__42041["_owner"]));
var G__42041__$2 = (((G__42041__$1 == null))?null:mranderson048.reagent.v0v7v0.reagent.impl.component.component_path.call(null,G__42041__$1));
if((G__42041__$2 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42041__$2)," > "].join('');
}
})();
var res = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
});
mranderson048.reagent.v0v7v0.reagent.impl.component.comp_name = (function mranderson048$reagent$v0v7v0$reagent$impl$component$comp_name(){
var c = mranderson048.reagent.v0v7v0.reagent.impl.component._STAR_current_component_STAR_;
var n = (function (){var or__4047__auto__ = mranderson048.reagent.v0v7v0.reagent.impl.component.component_path.call(null,c);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var G__42042 = c;
var G__42042__$1 = (((G__42042 == null))?null:G__42042.constructor);
if((G__42042__$1 == null)){
return null;
} else {
return mranderson048.reagent.v0v7v0.reagent.impl.util.fun_name.call(null,G__42042__$1);
}
}
})();
if((!(cljs.core.empty_QMARK_.call(null,n)))){
return [" (in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),")"].join('');
} else {
return "";
}

});
mranderson048.reagent.v0v7v0.reagent.impl.component.fn_to_class = (function mranderson048$reagent$v0v7v0$reagent$impl$component$fn_to_class(f){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected something callable, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,f))].join('')),"\n","(clojure.core/ifn? f)"].join('')));
}

if((!((!(((mranderson048.reagent.v0v7v0.reagent.impl.component.react_class_QMARK_.call(null,f)) && ((!(mranderson048.reagent.v0v7v0.reagent.impl.component.reagent_class_QMARK_.call(null,f)))))))))){
if(cljs.core.truth_(mranderson048.reagent.v0v7v0.reagent.debug.has_console)){
(cljs.core.truth_(mranderson048.reagent.v0v7v0.reagent.debug.tracking)?mranderson048.reagent.v0v7v0.reagent.debug.track_console:console).warn(["Warning: ","Using native React classes directly in Hiccup forms ","is not supported. Use create-element or ","adapt-react-class instead: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var n = mranderson048.reagent.v0v7v0.reagent.impl.util.fun_name.call(null,f);
if(cljs.core.empty_QMARK_.call(null,n)){
return f;
} else {
return n;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.reagent.v0v7v0.reagent.impl.component.comp_name.call(null))].join(''));
} else {
}
} else {
}

if(mranderson048.reagent.v0v7v0.reagent.impl.component.reagent_class_QMARK_.call(null,f)){
return mranderson048.reagent.v0v7v0.reagent.impl.component.cache_react_class.call(null,f,f);
} else {
var spec = cljs.core.meta.call(null,f);
var withrender = cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),f);
var res = mranderson048.reagent.v0v7v0.reagent.impl.component.create_class.call(null,withrender);
return mranderson048.reagent.v0v7v0.reagent.impl.component.cache_react_class.call(null,f,res);
}
});
mranderson048.reagent.v0v7v0.reagent.impl.component.as_class = (function mranderson048$reagent$v0v7v0$reagent$impl$component$as_class(tag){
var temp__5722__auto__ = mranderson048.reagent.v0v7v0.reagent.impl.component.cached_react_class.call(null,tag);
if((temp__5722__auto__ == null)){
return mranderson048.reagent.v0v7v0.reagent.impl.component.fn_to_class.call(null,tag);
} else {
var cached_class = temp__5722__auto__;
return cached_class;
}
});
mranderson048.reagent.v0v7v0.reagent.impl.component.reactify_component = (function mranderson048$reagent$v0v7v0$reagent$impl$component$reactify_component(comp){
if(mranderson048.reagent.v0v7v0.reagent.impl.component.react_class_QMARK_.call(null,comp)){
return comp;
} else {
return mranderson048.reagent.v0v7v0.reagent.impl.component.as_class.call(null,comp);
}
});

//# sourceMappingURL=component.js.map?rel=1575465421778
