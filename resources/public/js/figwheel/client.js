// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e42304){if((e42304 instanceof Error)){
var e = e42304;
return "Error: Unable to stringify";
} else {
throw e42304;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__42307 = arguments.length;
switch (G__42307) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__42305_SHARP_){
if(typeof p1__42305_SHARP_ === 'string'){
return p1__42305_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__42305_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___42310 = arguments.length;
var i__4642__auto___42311 = (0);
while(true){
if((i__4642__auto___42311 < len__4641__auto___42310)){
args__4647__auto__.push((arguments[i__4642__auto___42311]));

var G__42312 = (i__4642__auto___42311 + (1));
i__4642__auto___42311 = G__42312;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq42309){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42309));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___42314 = arguments.length;
var i__4642__auto___42315 = (0);
while(true){
if((i__4642__auto___42315 < len__4641__auto___42314)){
args__4647__auto__.push((arguments[i__4642__auto___42315]));

var G__42316 = (i__4642__auto___42315 + (1));
i__4642__auto___42315 = G__42316;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq42313){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42313));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__42317){
var map__42318 = p__42317;
var map__42318__$1 = (((((!((map__42318 == null))))?(((((map__42318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42318):map__42318);
var message = cljs.core.get.call(null,map__42318__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__42318__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4047__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4036__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4036__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4036__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__39437__auto___42397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39437__auto___42397,ch){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (c__39437__auto___42397,ch){
return (function (state_42369){
var state_val_42370 = (state_42369[(1)]);
if((state_val_42370 === (7))){
var inst_42365 = (state_42369[(2)]);
var state_42369__$1 = state_42369;
var statearr_42371_42398 = state_42369__$1;
(statearr_42371_42398[(2)] = inst_42365);

(statearr_42371_42398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42370 === (1))){
var state_42369__$1 = state_42369;
var statearr_42372_42399 = state_42369__$1;
(statearr_42372_42399[(2)] = null);

(statearr_42372_42399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42370 === (4))){
var inst_42322 = (state_42369[(7)]);
var inst_42322__$1 = (state_42369[(2)]);
var state_42369__$1 = (function (){var statearr_42373 = state_42369;
(statearr_42373[(7)] = inst_42322__$1);

return statearr_42373;
})();
if(cljs.core.truth_(inst_42322__$1)){
var statearr_42374_42400 = state_42369__$1;
(statearr_42374_42400[(1)] = (5));

} else {
var statearr_42375_42401 = state_42369__$1;
(statearr_42375_42401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42370 === (15))){
var inst_42329 = (state_42369[(8)]);
var inst_42344 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42329);
var inst_42345 = cljs.core.first.call(null,inst_42344);
var inst_42346 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_42345);
var inst_42347 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42346)].join('');
var inst_42348 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_42347);
var state_42369__$1 = state_42369;
var statearr_42376_42402 = state_42369__$1;
(statearr_42376_42402[(2)] = inst_42348);

(statearr_42376_42402[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42370 === (13))){
var inst_42353 = (state_42369[(2)]);
var state_42369__$1 = state_42369;
var statearr_42377_42403 = state_42369__$1;
(statearr_42377_42403[(2)] = inst_42353);

(statearr_42377_42403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42370 === (6))){
var state_42369__$1 = state_42369;
var statearr_42378_42404 = state_42369__$1;
(statearr_42378_42404[(2)] = null);

(statearr_42378_42404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42370 === (17))){
var inst_42351 = (state_42369[(2)]);
var state_42369__$1 = state_42369;
var statearr_42379_42405 = state_42369__$1;
(statearr_42379_42405[(2)] = inst_42351);

(statearr_42379_42405[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42370 === (3))){
var inst_42367 = (state_42369[(2)]);
var state_42369__$1 = state_42369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42369__$1,inst_42367);
} else {
if((state_val_42370 === (12))){
var inst_42328 = (state_42369[(9)]);
var inst_42342 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_42328,opts);
var state_42369__$1 = state_42369;
if(inst_42342){
var statearr_42380_42406 = state_42369__$1;
(statearr_42380_42406[(1)] = (15));

} else {
var statearr_42381_42407 = state_42369__$1;
(statearr_42381_42407[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42370 === (2))){
var state_42369__$1 = state_42369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42369__$1,(4),ch);
} else {
if((state_val_42370 === (11))){
var inst_42329 = (state_42369[(8)]);
var inst_42334 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42335 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_42329);
var inst_42336 = cljs.core.async.timeout.call(null,(1000));
var inst_42337 = [inst_42335,inst_42336];
var inst_42338 = (new cljs.core.PersistentVector(null,2,(5),inst_42334,inst_42337,null));
var state_42369__$1 = state_42369;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42369__$1,(14),inst_42338);
} else {
if((state_val_42370 === (9))){
var inst_42329 = (state_42369[(8)]);
var inst_42355 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_42356 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42329);
var inst_42357 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42356);
var inst_42358 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42357)].join('');
var inst_42359 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_42358);
var state_42369__$1 = (function (){var statearr_42382 = state_42369;
(statearr_42382[(10)] = inst_42355);

return statearr_42382;
})();
var statearr_42383_42408 = state_42369__$1;
(statearr_42383_42408[(2)] = inst_42359);

(statearr_42383_42408[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42370 === (5))){
var inst_42322 = (state_42369[(7)]);
var inst_42324 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_42325 = (new cljs.core.PersistentArrayMap(null,2,inst_42324,null));
var inst_42326 = (new cljs.core.PersistentHashSet(null,inst_42325,null));
var inst_42327 = figwheel.client.focus_msgs.call(null,inst_42326,inst_42322);
var inst_42328 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_42327);
var inst_42329 = cljs.core.first.call(null,inst_42327);
var inst_42330 = figwheel.client.autoload_QMARK_.call(null);
var state_42369__$1 = (function (){var statearr_42384 = state_42369;
(statearr_42384[(9)] = inst_42328);

(statearr_42384[(8)] = inst_42329);

return statearr_42384;
})();
if(cljs.core.truth_(inst_42330)){
var statearr_42385_42409 = state_42369__$1;
(statearr_42385_42409[(1)] = (8));

} else {
var statearr_42386_42410 = state_42369__$1;
(statearr_42386_42410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42370 === (14))){
var inst_42340 = (state_42369[(2)]);
var state_42369__$1 = state_42369;
var statearr_42387_42411 = state_42369__$1;
(statearr_42387_42411[(2)] = inst_42340);

(statearr_42387_42411[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42370 === (16))){
var state_42369__$1 = state_42369;
var statearr_42388_42412 = state_42369__$1;
(statearr_42388_42412[(2)] = null);

(statearr_42388_42412[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42370 === (10))){
var inst_42361 = (state_42369[(2)]);
var state_42369__$1 = (function (){var statearr_42389 = state_42369;
(statearr_42389[(11)] = inst_42361);

return statearr_42389;
})();
var statearr_42390_42413 = state_42369__$1;
(statearr_42390_42413[(2)] = null);

(statearr_42390_42413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42370 === (8))){
var inst_42328 = (state_42369[(9)]);
var inst_42332 = figwheel.client.reload_file_state_QMARK_.call(null,inst_42328,opts);
var state_42369__$1 = state_42369;
if(cljs.core.truth_(inst_42332)){
var statearr_42391_42414 = state_42369__$1;
(statearr_42391_42414[(1)] = (11));

} else {
var statearr_42392_42415 = state_42369__$1;
(statearr_42392_42415[(1)] = (12));

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
});})(c__39437__auto___42397,ch))
;
return ((function (switch__39342__auto__,c__39437__auto___42397,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__39343__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__39343__auto____0 = (function (){
var statearr_42393 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42393[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__39343__auto__);

(statearr_42393[(1)] = (1));

return statearr_42393;
});
var figwheel$client$file_reloader_plugin_$_state_machine__39343__auto____1 = (function (state_42369){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_42369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e42394){if((e42394 instanceof Object)){
var ex__39346__auto__ = e42394;
var statearr_42395_42416 = state_42369;
(statearr_42395_42416[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42417 = state_42369;
state_42369 = G__42417;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__39343__auto__ = function(state_42369){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__39343__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__39343__auto____1.call(this,state_42369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__39343__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__39343__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__39343__auto__;
})()
;})(switch__39342__auto__,c__39437__auto___42397,ch))
})();
var state__39439__auto__ = (function (){var statearr_42396 = f__39438__auto__.call(null);
(statearr_42396[(6)] = c__39437__auto___42397);

return statearr_42396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(c__39437__auto___42397,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__42418_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__42418_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_42424 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_42424){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42420 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42421 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42422 = true;
var _STAR_print_fn_STAR__temp_val__42423 = ((function (_STAR_print_newline_STAR__orig_val__42420,_STAR_print_fn_STAR__orig_val__42421,_STAR_print_newline_STAR__temp_val__42422,sb,base_path_42424){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__42420,_STAR_print_fn_STAR__orig_val__42421,_STAR_print_newline_STAR__temp_val__42422,sb,base_path_42424))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42422;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42423;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42421;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42420;
}}catch (e42419){if((e42419 instanceof Error)){
var e = e42419;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_42424], null));
} else {
var e = e42419;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_42424))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__42425){
var map__42426 = p__42425;
var map__42426__$1 = (((((!((map__42426 == null))))?(((((map__42426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42426):map__42426);
var opts = map__42426__$1;
var build_id = cljs.core.get.call(null,map__42426__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__42426,map__42426__$1,opts,build_id){
return (function (p__42428){
var vec__42429 = p__42428;
var seq__42430 = cljs.core.seq.call(null,vec__42429);
var first__42431 = cljs.core.first.call(null,seq__42430);
var seq__42430__$1 = cljs.core.next.call(null,seq__42430);
var map__42432 = first__42431;
var map__42432__$1 = (((((!((map__42432 == null))))?(((((map__42432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42432):map__42432);
var msg = map__42432__$1;
var msg_name = cljs.core.get.call(null,map__42432__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42430__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__42429,seq__42430,first__42431,seq__42430__$1,map__42432,map__42432__$1,msg,msg_name,_,map__42426,map__42426__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__42429,seq__42430,first__42431,seq__42430__$1,map__42432,map__42432__$1,msg,msg_name,_,map__42426,map__42426__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__42426,map__42426__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__42434){
var vec__42435 = p__42434;
var seq__42436 = cljs.core.seq.call(null,vec__42435);
var first__42437 = cljs.core.first.call(null,seq__42436);
var seq__42436__$1 = cljs.core.next.call(null,seq__42436);
var map__42438 = first__42437;
var map__42438__$1 = (((((!((map__42438 == null))))?(((((map__42438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42438):map__42438);
var msg = map__42438__$1;
var msg_name = cljs.core.get.call(null,map__42438__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42436__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__42440){
var map__42441 = p__42440;
var map__42441__$1 = (((((!((map__42441 == null))))?(((((map__42441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42441):map__42441);
var on_compile_warning = cljs.core.get.call(null,map__42441__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__42441__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__42441,map__42441__$1,on_compile_warning,on_compile_fail){
return (function (p__42443){
var vec__42444 = p__42443;
var seq__42445 = cljs.core.seq.call(null,vec__42444);
var first__42446 = cljs.core.first.call(null,seq__42445);
var seq__42445__$1 = cljs.core.next.call(null,seq__42445);
var map__42447 = first__42446;
var map__42447__$1 = (((((!((map__42447 == null))))?(((((map__42447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42447):map__42447);
var msg = map__42447__$1;
var msg_name = cljs.core.get.call(null,map__42447__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42445__$1;
var pred__42449 = cljs.core._EQ_;
var expr__42450 = msg_name;
if(cljs.core.truth_(pred__42449.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__42450))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__42449.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__42450))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__42441,map__42441__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__39437__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39437__auto__,msg_hist,msg_names,msg){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (c__39437__auto__,msg_hist,msg_names,msg){
return (function (state_42539){
var state_val_42540 = (state_42539[(1)]);
if((state_val_42540 === (7))){
var inst_42459 = (state_42539[(2)]);
var state_42539__$1 = state_42539;
if(cljs.core.truth_(inst_42459)){
var statearr_42541_42588 = state_42539__$1;
(statearr_42541_42588[(1)] = (8));

} else {
var statearr_42542_42589 = state_42539__$1;
(statearr_42542_42589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42540 === (20))){
var inst_42533 = (state_42539[(2)]);
var state_42539__$1 = state_42539;
var statearr_42543_42590 = state_42539__$1;
(statearr_42543_42590[(2)] = inst_42533);

(statearr_42543_42590[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42540 === (27))){
var inst_42529 = (state_42539[(2)]);
var state_42539__$1 = state_42539;
var statearr_42544_42591 = state_42539__$1;
(statearr_42544_42591[(2)] = inst_42529);

(statearr_42544_42591[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42540 === (1))){
var inst_42452 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_42539__$1 = state_42539;
if(cljs.core.truth_(inst_42452)){
var statearr_42545_42592 = state_42539__$1;
(statearr_42545_42592[(1)] = (2));

} else {
var statearr_42546_42593 = state_42539__$1;
(statearr_42546_42593[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42540 === (24))){
var inst_42531 = (state_42539[(2)]);
var state_42539__$1 = state_42539;
var statearr_42547_42594 = state_42539__$1;
(statearr_42547_42594[(2)] = inst_42531);

(statearr_42547_42594[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42540 === (4))){
var inst_42537 = (state_42539[(2)]);
var state_42539__$1 = state_42539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42539__$1,inst_42537);
} else {
if((state_val_42540 === (15))){
var inst_42535 = (state_42539[(2)]);
var state_42539__$1 = state_42539;
var statearr_42548_42595 = state_42539__$1;
(statearr_42548_42595[(2)] = inst_42535);

(statearr_42548_42595[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42540 === (21))){
var inst_42488 = (state_42539[(2)]);
var inst_42489 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42490 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42489);
var state_42539__$1 = (function (){var statearr_42549 = state_42539;
(statearr_42549[(7)] = inst_42488);

return statearr_42549;
})();
var statearr_42550_42596 = state_42539__$1;
(statearr_42550_42596[(2)] = inst_42490);

(statearr_42550_42596[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42540 === (31))){
var inst_42518 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_42539__$1 = state_42539;
if(inst_42518){
var statearr_42551_42597 = state_42539__$1;
(statearr_42551_42597[(1)] = (34));

} else {
var statearr_42552_42598 = state_42539__$1;
(statearr_42552_42598[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42540 === (32))){
var inst_42527 = (state_42539[(2)]);
var state_42539__$1 = state_42539;
var statearr_42553_42599 = state_42539__$1;
(statearr_42553_42599[(2)] = inst_42527);

(statearr_42553_42599[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42540 === (33))){
var inst_42514 = (state_42539[(2)]);
var inst_42515 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42516 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42515);
var state_42539__$1 = (function (){var statearr_42554 = state_42539;
(statearr_42554[(8)] = inst_42514);

return statearr_42554;
})();
var statearr_42555_42600 = state_42539__$1;
(statearr_42555_42600[(2)] = inst_42516);

(statearr_42555_42600[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42540 === (13))){
var inst_42473 = figwheel.client.heads_up.clear.call(null);
var state_42539__$1 = state_42539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42539__$1,(16),inst_42473);
} else {
if((state_val_42540 === (22))){
var inst_42494 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42495 = figwheel.client.heads_up.append_warning_message.call(null,inst_42494);
var state_42539__$1 = state_42539;
var statearr_42556_42601 = state_42539__$1;
(statearr_42556_42601[(2)] = inst_42495);

(statearr_42556_42601[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42540 === (36))){
var inst_42525 = (state_42539[(2)]);
var state_42539__$1 = state_42539;
var statearr_42557_42602 = state_42539__$1;
(statearr_42557_42602[(2)] = inst_42525);

(statearr_42557_42602[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42540 === (29))){
var inst_42505 = (state_42539[(2)]);
var inst_42506 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42507 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42506);
var state_42539__$1 = (function (){var statearr_42558 = state_42539;
(statearr_42558[(9)] = inst_42505);

return statearr_42558;
})();
var statearr_42559_42603 = state_42539__$1;
(statearr_42559_42603[(2)] = inst_42507);

(statearr_42559_42603[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42540 === (6))){
var inst_42454 = (state_42539[(10)]);
var state_42539__$1 = state_42539;
var statearr_42560_42604 = state_42539__$1;
(statearr_42560_42604[(2)] = inst_42454);

(statearr_42560_42604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42540 === (28))){
var inst_42501 = (state_42539[(2)]);
var inst_42502 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42503 = figwheel.client.heads_up.display_warning.call(null,inst_42502);
var state_42539__$1 = (function (){var statearr_42561 = state_42539;
(statearr_42561[(11)] = inst_42501);

return statearr_42561;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42539__$1,(29),inst_42503);
} else {
if((state_val_42540 === (25))){
var inst_42499 = figwheel.client.heads_up.clear.call(null);
var state_42539__$1 = state_42539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42539__$1,(28),inst_42499);
} else {
if((state_val_42540 === (34))){
var inst_42520 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42539__$1 = state_42539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42539__$1,(37),inst_42520);
} else {
if((state_val_42540 === (17))){
var inst_42479 = (state_42539[(2)]);
var inst_42480 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42481 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42480);
var state_42539__$1 = (function (){var statearr_42562 = state_42539;
(statearr_42562[(12)] = inst_42479);

return statearr_42562;
})();
var statearr_42563_42605 = state_42539__$1;
(statearr_42563_42605[(2)] = inst_42481);

(statearr_42563_42605[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42540 === (3))){
var inst_42471 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_42539__$1 = state_42539;
if(inst_42471){
var statearr_42564_42606 = state_42539__$1;
(statearr_42564_42606[(1)] = (13));

} else {
var statearr_42565_42607 = state_42539__$1;
(statearr_42565_42607[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42540 === (12))){
var inst_42467 = (state_42539[(2)]);
var state_42539__$1 = state_42539;
var statearr_42566_42608 = state_42539__$1;
(statearr_42566_42608[(2)] = inst_42467);

(statearr_42566_42608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42540 === (2))){
var inst_42454 = (state_42539[(10)]);
var inst_42454__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_42539__$1 = (function (){var statearr_42567 = state_42539;
(statearr_42567[(10)] = inst_42454__$1);

return statearr_42567;
})();
if(cljs.core.truth_(inst_42454__$1)){
var statearr_42568_42609 = state_42539__$1;
(statearr_42568_42609[(1)] = (5));

} else {
var statearr_42569_42610 = state_42539__$1;
(statearr_42569_42610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42540 === (23))){
var inst_42497 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_42539__$1 = state_42539;
if(inst_42497){
var statearr_42570_42611 = state_42539__$1;
(statearr_42570_42611[(1)] = (25));

} else {
var statearr_42571_42612 = state_42539__$1;
(statearr_42571_42612[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42540 === (35))){
var state_42539__$1 = state_42539;
var statearr_42572_42613 = state_42539__$1;
(statearr_42572_42613[(2)] = null);

(statearr_42572_42613[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42540 === (19))){
var inst_42492 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_42539__$1 = state_42539;
if(inst_42492){
var statearr_42573_42614 = state_42539__$1;
(statearr_42573_42614[(1)] = (22));

} else {
var statearr_42574_42615 = state_42539__$1;
(statearr_42574_42615[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42540 === (11))){
var inst_42463 = (state_42539[(2)]);
var state_42539__$1 = state_42539;
var statearr_42575_42616 = state_42539__$1;
(statearr_42575_42616[(2)] = inst_42463);

(statearr_42575_42616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42540 === (9))){
var inst_42465 = figwheel.client.heads_up.clear.call(null);
var state_42539__$1 = state_42539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42539__$1,(12),inst_42465);
} else {
if((state_val_42540 === (5))){
var inst_42456 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_42539__$1 = state_42539;
var statearr_42576_42617 = state_42539__$1;
(statearr_42576_42617[(2)] = inst_42456);

(statearr_42576_42617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42540 === (14))){
var inst_42483 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_42539__$1 = state_42539;
if(inst_42483){
var statearr_42577_42618 = state_42539__$1;
(statearr_42577_42618[(1)] = (18));

} else {
var statearr_42578_42619 = state_42539__$1;
(statearr_42578_42619[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42540 === (26))){
var inst_42509 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_42539__$1 = state_42539;
if(inst_42509){
var statearr_42579_42620 = state_42539__$1;
(statearr_42579_42620[(1)] = (30));

} else {
var statearr_42580_42621 = state_42539__$1;
(statearr_42580_42621[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42540 === (16))){
var inst_42475 = (state_42539[(2)]);
var inst_42476 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42477 = figwheel.client.heads_up.display_exception.call(null,inst_42476);
var state_42539__$1 = (function (){var statearr_42581 = state_42539;
(statearr_42581[(13)] = inst_42475);

return statearr_42581;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42539__$1,(17),inst_42477);
} else {
if((state_val_42540 === (30))){
var inst_42511 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42512 = figwheel.client.heads_up.display_warning.call(null,inst_42511);
var state_42539__$1 = state_42539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42539__$1,(33),inst_42512);
} else {
if((state_val_42540 === (10))){
var inst_42469 = (state_42539[(2)]);
var state_42539__$1 = state_42539;
var statearr_42582_42622 = state_42539__$1;
(statearr_42582_42622[(2)] = inst_42469);

(statearr_42582_42622[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42540 === (18))){
var inst_42485 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42486 = figwheel.client.heads_up.display_exception.call(null,inst_42485);
var state_42539__$1 = state_42539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42539__$1,(21),inst_42486);
} else {
if((state_val_42540 === (37))){
var inst_42522 = (state_42539[(2)]);
var state_42539__$1 = state_42539;
var statearr_42583_42623 = state_42539__$1;
(statearr_42583_42623[(2)] = inst_42522);

(statearr_42583_42623[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42540 === (8))){
var inst_42461 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42539__$1 = state_42539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42539__$1,(11),inst_42461);
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
});})(c__39437__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__39342__auto__,c__39437__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39343__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39343__auto____0 = (function (){
var statearr_42584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42584[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39343__auto__);

(statearr_42584[(1)] = (1));

return statearr_42584;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39343__auto____1 = (function (state_42539){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_42539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e42585){if((e42585 instanceof Object)){
var ex__39346__auto__ = e42585;
var statearr_42586_42624 = state_42539;
(statearr_42586_42624[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42625 = state_42539;
state_42539 = G__42625;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39343__auto__ = function(state_42539){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39343__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39343__auto____1.call(this,state_42539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39343__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39343__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39343__auto__;
})()
;})(switch__39342__auto__,c__39437__auto__,msg_hist,msg_names,msg))
})();
var state__39439__auto__ = (function (){var statearr_42587 = f__39438__auto__.call(null);
(statearr_42587[(6)] = c__39437__auto__);

return statearr_42587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(c__39437__auto__,msg_hist,msg_names,msg))
);

return c__39437__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__39437__auto___42654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39437__auto___42654,ch){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (c__39437__auto___42654,ch){
return (function (state_42640){
var state_val_42641 = (state_42640[(1)]);
if((state_val_42641 === (1))){
var state_42640__$1 = state_42640;
var statearr_42642_42655 = state_42640__$1;
(statearr_42642_42655[(2)] = null);

(statearr_42642_42655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42641 === (2))){
var state_42640__$1 = state_42640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42640__$1,(4),ch);
} else {
if((state_val_42641 === (3))){
var inst_42638 = (state_42640[(2)]);
var state_42640__$1 = state_42640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42640__$1,inst_42638);
} else {
if((state_val_42641 === (4))){
var inst_42628 = (state_42640[(7)]);
var inst_42628__$1 = (state_42640[(2)]);
var state_42640__$1 = (function (){var statearr_42643 = state_42640;
(statearr_42643[(7)] = inst_42628__$1);

return statearr_42643;
})();
if(cljs.core.truth_(inst_42628__$1)){
var statearr_42644_42656 = state_42640__$1;
(statearr_42644_42656[(1)] = (5));

} else {
var statearr_42645_42657 = state_42640__$1;
(statearr_42645_42657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42641 === (5))){
var inst_42628 = (state_42640[(7)]);
var inst_42630 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_42628);
var state_42640__$1 = state_42640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42640__$1,(8),inst_42630);
} else {
if((state_val_42641 === (6))){
var state_42640__$1 = state_42640;
var statearr_42646_42658 = state_42640__$1;
(statearr_42646_42658[(2)] = null);

(statearr_42646_42658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42641 === (7))){
var inst_42636 = (state_42640[(2)]);
var state_42640__$1 = state_42640;
var statearr_42647_42659 = state_42640__$1;
(statearr_42647_42659[(2)] = inst_42636);

(statearr_42647_42659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42641 === (8))){
var inst_42632 = (state_42640[(2)]);
var state_42640__$1 = (function (){var statearr_42648 = state_42640;
(statearr_42648[(8)] = inst_42632);

return statearr_42648;
})();
var statearr_42649_42660 = state_42640__$1;
(statearr_42649_42660[(2)] = null);

(statearr_42649_42660[(1)] = (2));


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
});})(c__39437__auto___42654,ch))
;
return ((function (switch__39342__auto__,c__39437__auto___42654,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__39343__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__39343__auto____0 = (function (){
var statearr_42650 = [null,null,null,null,null,null,null,null,null];
(statearr_42650[(0)] = figwheel$client$heads_up_plugin_$_state_machine__39343__auto__);

(statearr_42650[(1)] = (1));

return statearr_42650;
});
var figwheel$client$heads_up_plugin_$_state_machine__39343__auto____1 = (function (state_42640){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_42640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e42651){if((e42651 instanceof Object)){
var ex__39346__auto__ = e42651;
var statearr_42652_42661 = state_42640;
(statearr_42652_42661[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42662 = state_42640;
state_42640 = G__42662;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__39343__auto__ = function(state_42640){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__39343__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__39343__auto____1.call(this,state_42640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__39343__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__39343__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__39343__auto__;
})()
;})(switch__39342__auto__,c__39437__auto___42654,ch))
})();
var state__39439__auto__ = (function (){var statearr_42653 = f__39438__auto__.call(null);
(statearr_42653[(6)] = c__39437__auto___42654);

return statearr_42653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(c__39437__auto___42654,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__39437__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39437__auto__){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (c__39437__auto__){
return (function (state_42668){
var state_val_42669 = (state_42668[(1)]);
if((state_val_42669 === (1))){
var inst_42663 = cljs.core.async.timeout.call(null,(3000));
var state_42668__$1 = state_42668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42668__$1,(2),inst_42663);
} else {
if((state_val_42669 === (2))){
var inst_42665 = (state_42668[(2)]);
var inst_42666 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_42668__$1 = (function (){var statearr_42670 = state_42668;
(statearr_42670[(7)] = inst_42665);

return statearr_42670;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42668__$1,inst_42666);
} else {
return null;
}
}
});})(c__39437__auto__))
;
return ((function (switch__39342__auto__,c__39437__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__39343__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__39343__auto____0 = (function (){
var statearr_42671 = [null,null,null,null,null,null,null,null];
(statearr_42671[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__39343__auto__);

(statearr_42671[(1)] = (1));

return statearr_42671;
});
var figwheel$client$enforce_project_plugin_$_state_machine__39343__auto____1 = (function (state_42668){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_42668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e42672){if((e42672 instanceof Object)){
var ex__39346__auto__ = e42672;
var statearr_42673_42675 = state_42668;
(statearr_42673_42675[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42676 = state_42668;
state_42668 = G__42676;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__39343__auto__ = function(state_42668){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__39343__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__39343__auto____1.call(this,state_42668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__39343__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__39343__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__39343__auto__;
})()
;})(switch__39342__auto__,c__39437__auto__))
})();
var state__39439__auto__ = (function (){var statearr_42674 = f__39438__auto__.call(null);
(statearr_42674[(6)] = c__39437__auto__);

return statearr_42674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(c__39437__auto__))
);

return c__39437__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__39437__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39437__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__39438__auto__ = (function (){var switch__39342__auto__ = ((function (c__39437__auto__,figwheel_version,temp__5720__auto__){
return (function (state_42683){
var state_val_42684 = (state_42683[(1)]);
if((state_val_42684 === (1))){
var inst_42677 = cljs.core.async.timeout.call(null,(2000));
var state_42683__$1 = state_42683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42683__$1,(2),inst_42677);
} else {
if((state_val_42684 === (2))){
var inst_42679 = (state_42683[(2)]);
var inst_42680 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_42681 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_42680);
var state_42683__$1 = (function (){var statearr_42685 = state_42683;
(statearr_42685[(7)] = inst_42679);

return statearr_42685;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42683__$1,inst_42681);
} else {
return null;
}
}
});})(c__39437__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__39342__auto__,c__39437__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39343__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39343__auto____0 = (function (){
var statearr_42686 = [null,null,null,null,null,null,null,null];
(statearr_42686[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39343__auto__);

(statearr_42686[(1)] = (1));

return statearr_42686;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39343__auto____1 = (function (state_42683){
while(true){
var ret_value__39344__auto__ = (function (){try{while(true){
var result__39345__auto__ = switch__39342__auto__.call(null,state_42683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39345__auto__;
}
break;
}
}catch (e42687){if((e42687 instanceof Object)){
var ex__39346__auto__ = e42687;
var statearr_42688_42690 = state_42683;
(statearr_42688_42690[(5)] = ex__39346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42691 = state_42683;
state_42683 = G__42691;
continue;
} else {
return ret_value__39344__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39343__auto__ = function(state_42683){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39343__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39343__auto____1.call(this,state_42683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39343__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39343__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39343__auto__;
})()
;})(switch__39342__auto__,c__39437__auto__,figwheel_version,temp__5720__auto__))
})();
var state__39439__auto__ = (function (){var statearr_42689 = f__39438__auto__.call(null);
(statearr_42689[(6)] = c__39437__auto__);

return statearr_42689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39439__auto__);
});})(c__39437__auto__,figwheel_version,temp__5720__auto__))
);

return c__39437__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__42692){
var map__42693 = p__42692;
var map__42693__$1 = (((((!((map__42693 == null))))?(((((map__42693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42693):map__42693);
var file = cljs.core.get.call(null,map__42693__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42693__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42693__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__42695 = "";
var G__42695__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42695),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__42695);
var G__42695__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42695__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__42695__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42695__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__42695__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__42696){
var map__42697 = p__42696;
var map__42697__$1 = (((((!((map__42697 == null))))?(((((map__42697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42697):map__42697);
var ed = map__42697__$1;
var exception_data = cljs.core.get.call(null,map__42697__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__42697__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_42700 = (function (){var G__42699 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42699)," Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,exception_data))].join('');
} else {
return G__42699;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_42700);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__42701){
var map__42702 = p__42701;
var map__42702__$1 = (((((!((map__42702 == null))))?(((((map__42702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42702):map__42702);
var w = map__42702__$1;
var message = cljs.core.get.call(null,map__42702__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4036__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4036__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__42704 = cljs.core.seq.call(null,plugins);
var chunk__42705 = null;
var count__42706 = (0);
var i__42707 = (0);
while(true){
if((i__42707 < count__42706)){
var vec__42708 = cljs.core._nth.call(null,chunk__42705,i__42707);
var k = cljs.core.nth.call(null,vec__42708,(0),null);
var plugin = cljs.core.nth.call(null,vec__42708,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42714 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42704,chunk__42705,count__42706,i__42707,pl_42714,vec__42708,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_42714.call(null,msg_hist);
});})(seq__42704,chunk__42705,count__42706,i__42707,pl_42714,vec__42708,k,plugin))
);
} else {
}


var G__42715 = seq__42704;
var G__42716 = chunk__42705;
var G__42717 = count__42706;
var G__42718 = (i__42707 + (1));
seq__42704 = G__42715;
chunk__42705 = G__42716;
count__42706 = G__42717;
i__42707 = G__42718;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__42704);
if(temp__5720__auto__){
var seq__42704__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42704__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__42704__$1);
var G__42719 = cljs.core.chunk_rest.call(null,seq__42704__$1);
var G__42720 = c__4461__auto__;
var G__42721 = cljs.core.count.call(null,c__4461__auto__);
var G__42722 = (0);
seq__42704 = G__42719;
chunk__42705 = G__42720;
count__42706 = G__42721;
i__42707 = G__42722;
continue;
} else {
var vec__42711 = cljs.core.first.call(null,seq__42704__$1);
var k = cljs.core.nth.call(null,vec__42711,(0),null);
var plugin = cljs.core.nth.call(null,vec__42711,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42723 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42704,chunk__42705,count__42706,i__42707,pl_42723,vec__42711,k,plugin,seq__42704__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_42723.call(null,msg_hist);
});})(seq__42704,chunk__42705,count__42706,i__42707,pl_42723,vec__42711,k,plugin,seq__42704__$1,temp__5720__auto__))
);
} else {
}


var G__42724 = cljs.core.next.call(null,seq__42704__$1);
var G__42725 = null;
var G__42726 = (0);
var G__42727 = (0);
seq__42704 = G__42724;
chunk__42705 = G__42725;
count__42706 = G__42726;
i__42707 = G__42727;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__42729 = arguments.length;
switch (G__42729) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__42730_42735 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__42731_42736 = null;
var count__42732_42737 = (0);
var i__42733_42738 = (0);
while(true){
if((i__42733_42738 < count__42732_42737)){
var msg_42739 = cljs.core._nth.call(null,chunk__42731_42736,i__42733_42738);
figwheel.client.socket.handle_incoming_message.call(null,msg_42739);


var G__42740 = seq__42730_42735;
var G__42741 = chunk__42731_42736;
var G__42742 = count__42732_42737;
var G__42743 = (i__42733_42738 + (1));
seq__42730_42735 = G__42740;
chunk__42731_42736 = G__42741;
count__42732_42737 = G__42742;
i__42733_42738 = G__42743;
continue;
} else {
var temp__5720__auto___42744 = cljs.core.seq.call(null,seq__42730_42735);
if(temp__5720__auto___42744){
var seq__42730_42745__$1 = temp__5720__auto___42744;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42730_42745__$1)){
var c__4461__auto___42746 = cljs.core.chunk_first.call(null,seq__42730_42745__$1);
var G__42747 = cljs.core.chunk_rest.call(null,seq__42730_42745__$1);
var G__42748 = c__4461__auto___42746;
var G__42749 = cljs.core.count.call(null,c__4461__auto___42746);
var G__42750 = (0);
seq__42730_42735 = G__42747;
chunk__42731_42736 = G__42748;
count__42732_42737 = G__42749;
i__42733_42738 = G__42750;
continue;
} else {
var msg_42751 = cljs.core.first.call(null,seq__42730_42745__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_42751);


var G__42752 = cljs.core.next.call(null,seq__42730_42745__$1);
var G__42753 = null;
var G__42754 = (0);
var G__42755 = (0);
seq__42730_42735 = G__42752;
chunk__42731_42736 = G__42753;
count__42732_42737 = G__42754;
i__42733_42738 = G__42755;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4647__auto__ = [];
var len__4641__auto___42760 = arguments.length;
var i__4642__auto___42761 = (0);
while(true){
if((i__4642__auto___42761 < len__4641__auto___42760)){
args__4647__auto__.push((arguments[i__4642__auto___42761]));

var G__42762 = (i__4642__auto___42761 + (1));
i__4642__auto___42761 = G__42762;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__42757){
var map__42758 = p__42757;
var map__42758__$1 = (((((!((map__42758 == null))))?(((((map__42758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42758):map__42758);
var opts = map__42758__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq42756){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42756));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e42763){if((e42763 instanceof Error)){
var e = e42763;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e42763;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__42764){
var map__42765 = p__42764;
var map__42765__$1 = (((((!((map__42765 == null))))?(((((map__42765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42765):map__42765);
var msg_name = cljs.core.get.call(null,map__42765__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1575052466122
