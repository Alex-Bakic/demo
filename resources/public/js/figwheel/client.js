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
}catch (e61429){if((e61429 instanceof Error)){
var e = e61429;
return "Error: Unable to stringify";
} else {
throw e61429;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__61432 = arguments.length;
switch (G__61432) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__61430_SHARP_){
if(typeof p1__61430_SHARP_ === 'string'){
return p1__61430_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__61430_SHARP_);
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
var len__4641__auto___61435 = arguments.length;
var i__4642__auto___61436 = (0);
while(true){
if((i__4642__auto___61436 < len__4641__auto___61435)){
args__4647__auto__.push((arguments[i__4642__auto___61436]));

var G__61437 = (i__4642__auto___61436 + (1));
i__4642__auto___61436 = G__61437;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq61434){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61434));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___61439 = arguments.length;
var i__4642__auto___61440 = (0);
while(true){
if((i__4642__auto___61440 < len__4641__auto___61439)){
args__4647__auto__.push((arguments[i__4642__auto___61440]));

var G__61441 = (i__4642__auto___61440 + (1));
i__4642__auto___61440 = G__61441;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq61438){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61438));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__61442){
var map__61443 = p__61442;
var map__61443__$1 = (((((!((map__61443 == null))))?(((((map__61443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61443):map__61443);
var message = cljs.core.get.call(null,map__61443__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__61443__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__55153__auto___61522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55153__auto___61522,ch){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (c__55153__auto___61522,ch){
return (function (state_61494){
var state_val_61495 = (state_61494[(1)]);
if((state_val_61495 === (7))){
var inst_61490 = (state_61494[(2)]);
var state_61494__$1 = state_61494;
var statearr_61496_61523 = state_61494__$1;
(statearr_61496_61523[(2)] = inst_61490);

(statearr_61496_61523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61495 === (1))){
var state_61494__$1 = state_61494;
var statearr_61497_61524 = state_61494__$1;
(statearr_61497_61524[(2)] = null);

(statearr_61497_61524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61495 === (4))){
var inst_61447 = (state_61494[(7)]);
var inst_61447__$1 = (state_61494[(2)]);
var state_61494__$1 = (function (){var statearr_61498 = state_61494;
(statearr_61498[(7)] = inst_61447__$1);

return statearr_61498;
})();
if(cljs.core.truth_(inst_61447__$1)){
var statearr_61499_61525 = state_61494__$1;
(statearr_61499_61525[(1)] = (5));

} else {
var statearr_61500_61526 = state_61494__$1;
(statearr_61500_61526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61495 === (15))){
var inst_61454 = (state_61494[(8)]);
var inst_61469 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_61454);
var inst_61470 = cljs.core.first.call(null,inst_61469);
var inst_61471 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_61470);
var inst_61472 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_61471)].join('');
var inst_61473 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_61472);
var state_61494__$1 = state_61494;
var statearr_61501_61527 = state_61494__$1;
(statearr_61501_61527[(2)] = inst_61473);

(statearr_61501_61527[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61495 === (13))){
var inst_61478 = (state_61494[(2)]);
var state_61494__$1 = state_61494;
var statearr_61502_61528 = state_61494__$1;
(statearr_61502_61528[(2)] = inst_61478);

(statearr_61502_61528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61495 === (6))){
var state_61494__$1 = state_61494;
var statearr_61503_61529 = state_61494__$1;
(statearr_61503_61529[(2)] = null);

(statearr_61503_61529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61495 === (17))){
var inst_61476 = (state_61494[(2)]);
var state_61494__$1 = state_61494;
var statearr_61504_61530 = state_61494__$1;
(statearr_61504_61530[(2)] = inst_61476);

(statearr_61504_61530[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61495 === (3))){
var inst_61492 = (state_61494[(2)]);
var state_61494__$1 = state_61494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61494__$1,inst_61492);
} else {
if((state_val_61495 === (12))){
var inst_61453 = (state_61494[(9)]);
var inst_61467 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_61453,opts);
var state_61494__$1 = state_61494;
if(inst_61467){
var statearr_61505_61531 = state_61494__$1;
(statearr_61505_61531[(1)] = (15));

} else {
var statearr_61506_61532 = state_61494__$1;
(statearr_61506_61532[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61495 === (2))){
var state_61494__$1 = state_61494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61494__$1,(4),ch);
} else {
if((state_val_61495 === (11))){
var inst_61454 = (state_61494[(8)]);
var inst_61459 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61460 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_61454);
var inst_61461 = cljs.core.async.timeout.call(null,(1000));
var inst_61462 = [inst_61460,inst_61461];
var inst_61463 = (new cljs.core.PersistentVector(null,2,(5),inst_61459,inst_61462,null));
var state_61494__$1 = state_61494;
return cljs.core.async.ioc_alts_BANG_.call(null,state_61494__$1,(14),inst_61463);
} else {
if((state_val_61495 === (9))){
var inst_61454 = (state_61494[(8)]);
var inst_61480 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_61481 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_61454);
var inst_61482 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_61481);
var inst_61483 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_61482)].join('');
var inst_61484 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_61483);
var state_61494__$1 = (function (){var statearr_61507 = state_61494;
(statearr_61507[(10)] = inst_61480);

return statearr_61507;
})();
var statearr_61508_61533 = state_61494__$1;
(statearr_61508_61533[(2)] = inst_61484);

(statearr_61508_61533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61495 === (5))){
var inst_61447 = (state_61494[(7)]);
var inst_61449 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_61450 = (new cljs.core.PersistentArrayMap(null,2,inst_61449,null));
var inst_61451 = (new cljs.core.PersistentHashSet(null,inst_61450,null));
var inst_61452 = figwheel.client.focus_msgs.call(null,inst_61451,inst_61447);
var inst_61453 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_61452);
var inst_61454 = cljs.core.first.call(null,inst_61452);
var inst_61455 = figwheel.client.autoload_QMARK_.call(null);
var state_61494__$1 = (function (){var statearr_61509 = state_61494;
(statearr_61509[(8)] = inst_61454);

(statearr_61509[(9)] = inst_61453);

return statearr_61509;
})();
if(cljs.core.truth_(inst_61455)){
var statearr_61510_61534 = state_61494__$1;
(statearr_61510_61534[(1)] = (8));

} else {
var statearr_61511_61535 = state_61494__$1;
(statearr_61511_61535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61495 === (14))){
var inst_61465 = (state_61494[(2)]);
var state_61494__$1 = state_61494;
var statearr_61512_61536 = state_61494__$1;
(statearr_61512_61536[(2)] = inst_61465);

(statearr_61512_61536[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61495 === (16))){
var state_61494__$1 = state_61494;
var statearr_61513_61537 = state_61494__$1;
(statearr_61513_61537[(2)] = null);

(statearr_61513_61537[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61495 === (10))){
var inst_61486 = (state_61494[(2)]);
var state_61494__$1 = (function (){var statearr_61514 = state_61494;
(statearr_61514[(11)] = inst_61486);

return statearr_61514;
})();
var statearr_61515_61538 = state_61494__$1;
(statearr_61515_61538[(2)] = null);

(statearr_61515_61538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61495 === (8))){
var inst_61453 = (state_61494[(9)]);
var inst_61457 = figwheel.client.reload_file_state_QMARK_.call(null,inst_61453,opts);
var state_61494__$1 = state_61494;
if(cljs.core.truth_(inst_61457)){
var statearr_61516_61539 = state_61494__$1;
(statearr_61516_61539[(1)] = (11));

} else {
var statearr_61517_61540 = state_61494__$1;
(statearr_61517_61540[(1)] = (12));

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
});})(c__55153__auto___61522,ch))
;
return ((function (switch__54986__auto__,c__55153__auto___61522,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__54987__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__54987__auto____0 = (function (){
var statearr_61518 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61518[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__54987__auto__);

(statearr_61518[(1)] = (1));

return statearr_61518;
});
var figwheel$client$file_reloader_plugin_$_state_machine__54987__auto____1 = (function (state_61494){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_61494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e61519){if((e61519 instanceof Object)){
var ex__54990__auto__ = e61519;
var statearr_61520_61541 = state_61494;
(statearr_61520_61541[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61542 = state_61494;
state_61494 = G__61542;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__54987__auto__ = function(state_61494){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__54987__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__54987__auto____1.call(this,state_61494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__54987__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__54987__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__54987__auto__;
})()
;})(switch__54986__auto__,c__55153__auto___61522,ch))
})();
var state__55155__auto__ = (function (){var statearr_61521 = f__55154__auto__.call(null);
(statearr_61521[(6)] = c__55153__auto___61522);

return statearr_61521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(c__55153__auto___61522,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__61543_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__61543_SHARP_));
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
var base_path_61549 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_61549){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__61545 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__61546 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__61547 = true;
var _STAR_print_fn_STAR__temp_val__61548 = ((function (_STAR_print_newline_STAR__orig_val__61545,_STAR_print_fn_STAR__orig_val__61546,_STAR_print_newline_STAR__temp_val__61547,sb,base_path_61549){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__61545,_STAR_print_fn_STAR__orig_val__61546,_STAR_print_newline_STAR__temp_val__61547,sb,base_path_61549))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__61547;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__61548;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__61546;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__61545;
}}catch (e61544){if((e61544 instanceof Error)){
var e = e61544;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_61549], null));
} else {
var e = e61544;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_61549))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__61550){
var map__61551 = p__61550;
var map__61551__$1 = (((((!((map__61551 == null))))?(((((map__61551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61551):map__61551);
var opts = map__61551__$1;
var build_id = cljs.core.get.call(null,map__61551__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__61551,map__61551__$1,opts,build_id){
return (function (p__61553){
var vec__61554 = p__61553;
var seq__61555 = cljs.core.seq.call(null,vec__61554);
var first__61556 = cljs.core.first.call(null,seq__61555);
var seq__61555__$1 = cljs.core.next.call(null,seq__61555);
var map__61557 = first__61556;
var map__61557__$1 = (((((!((map__61557 == null))))?(((((map__61557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61557):map__61557);
var msg = map__61557__$1;
var msg_name = cljs.core.get.call(null,map__61557__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__61555__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__61554,seq__61555,first__61556,seq__61555__$1,map__61557,map__61557__$1,msg,msg_name,_,map__61551,map__61551__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__61554,seq__61555,first__61556,seq__61555__$1,map__61557,map__61557__$1,msg,msg_name,_,map__61551,map__61551__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__61551,map__61551__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__61559){
var vec__61560 = p__61559;
var seq__61561 = cljs.core.seq.call(null,vec__61560);
var first__61562 = cljs.core.first.call(null,seq__61561);
var seq__61561__$1 = cljs.core.next.call(null,seq__61561);
var map__61563 = first__61562;
var map__61563__$1 = (((((!((map__61563 == null))))?(((((map__61563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61563):map__61563);
var msg = map__61563__$1;
var msg_name = cljs.core.get.call(null,map__61563__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__61561__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__61565){
var map__61566 = p__61565;
var map__61566__$1 = (((((!((map__61566 == null))))?(((((map__61566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61566):map__61566);
var on_compile_warning = cljs.core.get.call(null,map__61566__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__61566__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__61566,map__61566__$1,on_compile_warning,on_compile_fail){
return (function (p__61568){
var vec__61569 = p__61568;
var seq__61570 = cljs.core.seq.call(null,vec__61569);
var first__61571 = cljs.core.first.call(null,seq__61570);
var seq__61570__$1 = cljs.core.next.call(null,seq__61570);
var map__61572 = first__61571;
var map__61572__$1 = (((((!((map__61572 == null))))?(((((map__61572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61572):map__61572);
var msg = map__61572__$1;
var msg_name = cljs.core.get.call(null,map__61572__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__61570__$1;
var pred__61574 = cljs.core._EQ_;
var expr__61575 = msg_name;
if(cljs.core.truth_(pred__61574.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__61575))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__61574.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__61575))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__61566,map__61566__$1,on_compile_warning,on_compile_fail))
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
var c__55153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55153__auto__,msg_hist,msg_names,msg){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (c__55153__auto__,msg_hist,msg_names,msg){
return (function (state_61664){
var state_val_61665 = (state_61664[(1)]);
if((state_val_61665 === (7))){
var inst_61584 = (state_61664[(2)]);
var state_61664__$1 = state_61664;
if(cljs.core.truth_(inst_61584)){
var statearr_61666_61713 = state_61664__$1;
(statearr_61666_61713[(1)] = (8));

} else {
var statearr_61667_61714 = state_61664__$1;
(statearr_61667_61714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61665 === (20))){
var inst_61658 = (state_61664[(2)]);
var state_61664__$1 = state_61664;
var statearr_61668_61715 = state_61664__$1;
(statearr_61668_61715[(2)] = inst_61658);

(statearr_61668_61715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61665 === (27))){
var inst_61654 = (state_61664[(2)]);
var state_61664__$1 = state_61664;
var statearr_61669_61716 = state_61664__$1;
(statearr_61669_61716[(2)] = inst_61654);

(statearr_61669_61716[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61665 === (1))){
var inst_61577 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_61664__$1 = state_61664;
if(cljs.core.truth_(inst_61577)){
var statearr_61670_61717 = state_61664__$1;
(statearr_61670_61717[(1)] = (2));

} else {
var statearr_61671_61718 = state_61664__$1;
(statearr_61671_61718[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61665 === (24))){
var inst_61656 = (state_61664[(2)]);
var state_61664__$1 = state_61664;
var statearr_61672_61719 = state_61664__$1;
(statearr_61672_61719[(2)] = inst_61656);

(statearr_61672_61719[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61665 === (4))){
var inst_61662 = (state_61664[(2)]);
var state_61664__$1 = state_61664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61664__$1,inst_61662);
} else {
if((state_val_61665 === (15))){
var inst_61660 = (state_61664[(2)]);
var state_61664__$1 = state_61664;
var statearr_61673_61720 = state_61664__$1;
(statearr_61673_61720[(2)] = inst_61660);

(statearr_61673_61720[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61665 === (21))){
var inst_61613 = (state_61664[(2)]);
var inst_61614 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_61615 = figwheel.client.auto_jump_to_error.call(null,opts,inst_61614);
var state_61664__$1 = (function (){var statearr_61674 = state_61664;
(statearr_61674[(7)] = inst_61613);

return statearr_61674;
})();
var statearr_61675_61721 = state_61664__$1;
(statearr_61675_61721[(2)] = inst_61615);

(statearr_61675_61721[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61665 === (31))){
var inst_61643 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_61664__$1 = state_61664;
if(inst_61643){
var statearr_61676_61722 = state_61664__$1;
(statearr_61676_61722[(1)] = (34));

} else {
var statearr_61677_61723 = state_61664__$1;
(statearr_61677_61723[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61665 === (32))){
var inst_61652 = (state_61664[(2)]);
var state_61664__$1 = state_61664;
var statearr_61678_61724 = state_61664__$1;
(statearr_61678_61724[(2)] = inst_61652);

(statearr_61678_61724[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61665 === (33))){
var inst_61639 = (state_61664[(2)]);
var inst_61640 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_61641 = figwheel.client.auto_jump_to_error.call(null,opts,inst_61640);
var state_61664__$1 = (function (){var statearr_61679 = state_61664;
(statearr_61679[(8)] = inst_61639);

return statearr_61679;
})();
var statearr_61680_61725 = state_61664__$1;
(statearr_61680_61725[(2)] = inst_61641);

(statearr_61680_61725[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61665 === (13))){
var inst_61598 = figwheel.client.heads_up.clear.call(null);
var state_61664__$1 = state_61664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61664__$1,(16),inst_61598);
} else {
if((state_val_61665 === (22))){
var inst_61619 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_61620 = figwheel.client.heads_up.append_warning_message.call(null,inst_61619);
var state_61664__$1 = state_61664;
var statearr_61681_61726 = state_61664__$1;
(statearr_61681_61726[(2)] = inst_61620);

(statearr_61681_61726[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61665 === (36))){
var inst_61650 = (state_61664[(2)]);
var state_61664__$1 = state_61664;
var statearr_61682_61727 = state_61664__$1;
(statearr_61682_61727[(2)] = inst_61650);

(statearr_61682_61727[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61665 === (29))){
var inst_61630 = (state_61664[(2)]);
var inst_61631 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_61632 = figwheel.client.auto_jump_to_error.call(null,opts,inst_61631);
var state_61664__$1 = (function (){var statearr_61683 = state_61664;
(statearr_61683[(9)] = inst_61630);

return statearr_61683;
})();
var statearr_61684_61728 = state_61664__$1;
(statearr_61684_61728[(2)] = inst_61632);

(statearr_61684_61728[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61665 === (6))){
var inst_61579 = (state_61664[(10)]);
var state_61664__$1 = state_61664;
var statearr_61685_61729 = state_61664__$1;
(statearr_61685_61729[(2)] = inst_61579);

(statearr_61685_61729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61665 === (28))){
var inst_61626 = (state_61664[(2)]);
var inst_61627 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_61628 = figwheel.client.heads_up.display_warning.call(null,inst_61627);
var state_61664__$1 = (function (){var statearr_61686 = state_61664;
(statearr_61686[(11)] = inst_61626);

return statearr_61686;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61664__$1,(29),inst_61628);
} else {
if((state_val_61665 === (25))){
var inst_61624 = figwheel.client.heads_up.clear.call(null);
var state_61664__$1 = state_61664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61664__$1,(28),inst_61624);
} else {
if((state_val_61665 === (34))){
var inst_61645 = figwheel.client.heads_up.flash_loaded.call(null);
var state_61664__$1 = state_61664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61664__$1,(37),inst_61645);
} else {
if((state_val_61665 === (17))){
var inst_61604 = (state_61664[(2)]);
var inst_61605 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_61606 = figwheel.client.auto_jump_to_error.call(null,opts,inst_61605);
var state_61664__$1 = (function (){var statearr_61687 = state_61664;
(statearr_61687[(12)] = inst_61604);

return statearr_61687;
})();
var statearr_61688_61730 = state_61664__$1;
(statearr_61688_61730[(2)] = inst_61606);

(statearr_61688_61730[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61665 === (3))){
var inst_61596 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_61664__$1 = state_61664;
if(inst_61596){
var statearr_61689_61731 = state_61664__$1;
(statearr_61689_61731[(1)] = (13));

} else {
var statearr_61690_61732 = state_61664__$1;
(statearr_61690_61732[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61665 === (12))){
var inst_61592 = (state_61664[(2)]);
var state_61664__$1 = state_61664;
var statearr_61691_61733 = state_61664__$1;
(statearr_61691_61733[(2)] = inst_61592);

(statearr_61691_61733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61665 === (2))){
var inst_61579 = (state_61664[(10)]);
var inst_61579__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_61664__$1 = (function (){var statearr_61692 = state_61664;
(statearr_61692[(10)] = inst_61579__$1);

return statearr_61692;
})();
if(cljs.core.truth_(inst_61579__$1)){
var statearr_61693_61734 = state_61664__$1;
(statearr_61693_61734[(1)] = (5));

} else {
var statearr_61694_61735 = state_61664__$1;
(statearr_61694_61735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61665 === (23))){
var inst_61622 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_61664__$1 = state_61664;
if(inst_61622){
var statearr_61695_61736 = state_61664__$1;
(statearr_61695_61736[(1)] = (25));

} else {
var statearr_61696_61737 = state_61664__$1;
(statearr_61696_61737[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61665 === (35))){
var state_61664__$1 = state_61664;
var statearr_61697_61738 = state_61664__$1;
(statearr_61697_61738[(2)] = null);

(statearr_61697_61738[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61665 === (19))){
var inst_61617 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_61664__$1 = state_61664;
if(inst_61617){
var statearr_61698_61739 = state_61664__$1;
(statearr_61698_61739[(1)] = (22));

} else {
var statearr_61699_61740 = state_61664__$1;
(statearr_61699_61740[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61665 === (11))){
var inst_61588 = (state_61664[(2)]);
var state_61664__$1 = state_61664;
var statearr_61700_61741 = state_61664__$1;
(statearr_61700_61741[(2)] = inst_61588);

(statearr_61700_61741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61665 === (9))){
var inst_61590 = figwheel.client.heads_up.clear.call(null);
var state_61664__$1 = state_61664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61664__$1,(12),inst_61590);
} else {
if((state_val_61665 === (5))){
var inst_61581 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_61664__$1 = state_61664;
var statearr_61701_61742 = state_61664__$1;
(statearr_61701_61742[(2)] = inst_61581);

(statearr_61701_61742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61665 === (14))){
var inst_61608 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_61664__$1 = state_61664;
if(inst_61608){
var statearr_61702_61743 = state_61664__$1;
(statearr_61702_61743[(1)] = (18));

} else {
var statearr_61703_61744 = state_61664__$1;
(statearr_61703_61744[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61665 === (26))){
var inst_61634 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_61664__$1 = state_61664;
if(inst_61634){
var statearr_61704_61745 = state_61664__$1;
(statearr_61704_61745[(1)] = (30));

} else {
var statearr_61705_61746 = state_61664__$1;
(statearr_61705_61746[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61665 === (16))){
var inst_61600 = (state_61664[(2)]);
var inst_61601 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_61602 = figwheel.client.heads_up.display_exception.call(null,inst_61601);
var state_61664__$1 = (function (){var statearr_61706 = state_61664;
(statearr_61706[(13)] = inst_61600);

return statearr_61706;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61664__$1,(17),inst_61602);
} else {
if((state_val_61665 === (30))){
var inst_61636 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_61637 = figwheel.client.heads_up.display_warning.call(null,inst_61636);
var state_61664__$1 = state_61664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61664__$1,(33),inst_61637);
} else {
if((state_val_61665 === (10))){
var inst_61594 = (state_61664[(2)]);
var state_61664__$1 = state_61664;
var statearr_61707_61747 = state_61664__$1;
(statearr_61707_61747[(2)] = inst_61594);

(statearr_61707_61747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61665 === (18))){
var inst_61610 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_61611 = figwheel.client.heads_up.display_exception.call(null,inst_61610);
var state_61664__$1 = state_61664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61664__$1,(21),inst_61611);
} else {
if((state_val_61665 === (37))){
var inst_61647 = (state_61664[(2)]);
var state_61664__$1 = state_61664;
var statearr_61708_61748 = state_61664__$1;
(statearr_61708_61748[(2)] = inst_61647);

(statearr_61708_61748[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61665 === (8))){
var inst_61586 = figwheel.client.heads_up.flash_loaded.call(null);
var state_61664__$1 = state_61664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61664__$1,(11),inst_61586);
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
});})(c__55153__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__54986__auto__,c__55153__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__54987__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__54987__auto____0 = (function (){
var statearr_61709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61709[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__54987__auto__);

(statearr_61709[(1)] = (1));

return statearr_61709;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__54987__auto____1 = (function (state_61664){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_61664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e61710){if((e61710 instanceof Object)){
var ex__54990__auto__ = e61710;
var statearr_61711_61749 = state_61664;
(statearr_61711_61749[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61750 = state_61664;
state_61664 = G__61750;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__54987__auto__ = function(state_61664){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__54987__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__54987__auto____1.call(this,state_61664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__54987__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__54987__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__54987__auto__;
})()
;})(switch__54986__auto__,c__55153__auto__,msg_hist,msg_names,msg))
})();
var state__55155__auto__ = (function (){var statearr_61712 = f__55154__auto__.call(null);
(statearr_61712[(6)] = c__55153__auto__);

return statearr_61712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(c__55153__auto__,msg_hist,msg_names,msg))
);

return c__55153__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__55153__auto___61779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55153__auto___61779,ch){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (c__55153__auto___61779,ch){
return (function (state_61765){
var state_val_61766 = (state_61765[(1)]);
if((state_val_61766 === (1))){
var state_61765__$1 = state_61765;
var statearr_61767_61780 = state_61765__$1;
(statearr_61767_61780[(2)] = null);

(statearr_61767_61780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61766 === (2))){
var state_61765__$1 = state_61765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61765__$1,(4),ch);
} else {
if((state_val_61766 === (3))){
var inst_61763 = (state_61765[(2)]);
var state_61765__$1 = state_61765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61765__$1,inst_61763);
} else {
if((state_val_61766 === (4))){
var inst_61753 = (state_61765[(7)]);
var inst_61753__$1 = (state_61765[(2)]);
var state_61765__$1 = (function (){var statearr_61768 = state_61765;
(statearr_61768[(7)] = inst_61753__$1);

return statearr_61768;
})();
if(cljs.core.truth_(inst_61753__$1)){
var statearr_61769_61781 = state_61765__$1;
(statearr_61769_61781[(1)] = (5));

} else {
var statearr_61770_61782 = state_61765__$1;
(statearr_61770_61782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61766 === (5))){
var inst_61753 = (state_61765[(7)]);
var inst_61755 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_61753);
var state_61765__$1 = state_61765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61765__$1,(8),inst_61755);
} else {
if((state_val_61766 === (6))){
var state_61765__$1 = state_61765;
var statearr_61771_61783 = state_61765__$1;
(statearr_61771_61783[(2)] = null);

(statearr_61771_61783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61766 === (7))){
var inst_61761 = (state_61765[(2)]);
var state_61765__$1 = state_61765;
var statearr_61772_61784 = state_61765__$1;
(statearr_61772_61784[(2)] = inst_61761);

(statearr_61772_61784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61766 === (8))){
var inst_61757 = (state_61765[(2)]);
var state_61765__$1 = (function (){var statearr_61773 = state_61765;
(statearr_61773[(8)] = inst_61757);

return statearr_61773;
})();
var statearr_61774_61785 = state_61765__$1;
(statearr_61774_61785[(2)] = null);

(statearr_61774_61785[(1)] = (2));


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
});})(c__55153__auto___61779,ch))
;
return ((function (switch__54986__auto__,c__55153__auto___61779,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__54987__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__54987__auto____0 = (function (){
var statearr_61775 = [null,null,null,null,null,null,null,null,null];
(statearr_61775[(0)] = figwheel$client$heads_up_plugin_$_state_machine__54987__auto__);

(statearr_61775[(1)] = (1));

return statearr_61775;
});
var figwheel$client$heads_up_plugin_$_state_machine__54987__auto____1 = (function (state_61765){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_61765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e61776){if((e61776 instanceof Object)){
var ex__54990__auto__ = e61776;
var statearr_61777_61786 = state_61765;
(statearr_61777_61786[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61787 = state_61765;
state_61765 = G__61787;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__54987__auto__ = function(state_61765){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__54987__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__54987__auto____1.call(this,state_61765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__54987__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__54987__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__54987__auto__;
})()
;})(switch__54986__auto__,c__55153__auto___61779,ch))
})();
var state__55155__auto__ = (function (){var statearr_61778 = f__55154__auto__.call(null);
(statearr_61778[(6)] = c__55153__auto___61779);

return statearr_61778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(c__55153__auto___61779,ch))
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
var c__55153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55153__auto__){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (c__55153__auto__){
return (function (state_61793){
var state_val_61794 = (state_61793[(1)]);
if((state_val_61794 === (1))){
var inst_61788 = cljs.core.async.timeout.call(null,(3000));
var state_61793__$1 = state_61793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61793__$1,(2),inst_61788);
} else {
if((state_val_61794 === (2))){
var inst_61790 = (state_61793[(2)]);
var inst_61791 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_61793__$1 = (function (){var statearr_61795 = state_61793;
(statearr_61795[(7)] = inst_61790);

return statearr_61795;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61793__$1,inst_61791);
} else {
return null;
}
}
});})(c__55153__auto__))
;
return ((function (switch__54986__auto__,c__55153__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__54987__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__54987__auto____0 = (function (){
var statearr_61796 = [null,null,null,null,null,null,null,null];
(statearr_61796[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__54987__auto__);

(statearr_61796[(1)] = (1));

return statearr_61796;
});
var figwheel$client$enforce_project_plugin_$_state_machine__54987__auto____1 = (function (state_61793){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_61793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e61797){if((e61797 instanceof Object)){
var ex__54990__auto__ = e61797;
var statearr_61798_61800 = state_61793;
(statearr_61798_61800[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61801 = state_61793;
state_61793 = G__61801;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__54987__auto__ = function(state_61793){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__54987__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__54987__auto____1.call(this,state_61793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__54987__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__54987__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__54987__auto__;
})()
;})(switch__54986__auto__,c__55153__auto__))
})();
var state__55155__auto__ = (function (){var statearr_61799 = f__55154__auto__.call(null);
(statearr_61799[(6)] = c__55153__auto__);

return statearr_61799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(c__55153__auto__))
);

return c__55153__auto__;
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
var c__55153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__55153__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__55154__auto__ = (function (){var switch__54986__auto__ = ((function (c__55153__auto__,figwheel_version,temp__5720__auto__){
return (function (state_61808){
var state_val_61809 = (state_61808[(1)]);
if((state_val_61809 === (1))){
var inst_61802 = cljs.core.async.timeout.call(null,(2000));
var state_61808__$1 = state_61808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61808__$1,(2),inst_61802);
} else {
if((state_val_61809 === (2))){
var inst_61804 = (state_61808[(2)]);
var inst_61805 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_61806 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_61805);
var state_61808__$1 = (function (){var statearr_61810 = state_61808;
(statearr_61810[(7)] = inst_61804);

return statearr_61810;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61808__$1,inst_61806);
} else {
return null;
}
}
});})(c__55153__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__54986__auto__,c__55153__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__54987__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__54987__auto____0 = (function (){
var statearr_61811 = [null,null,null,null,null,null,null,null];
(statearr_61811[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__54987__auto__);

(statearr_61811[(1)] = (1));

return statearr_61811;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__54987__auto____1 = (function (state_61808){
while(true){
var ret_value__54988__auto__ = (function (){try{while(true){
var result__54989__auto__ = switch__54986__auto__.call(null,state_61808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54989__auto__;
}
break;
}
}catch (e61812){if((e61812 instanceof Object)){
var ex__54990__auto__ = e61812;
var statearr_61813_61815 = state_61808;
(statearr_61813_61815[(5)] = ex__54990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61816 = state_61808;
state_61808 = G__61816;
continue;
} else {
return ret_value__54988__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__54987__auto__ = function(state_61808){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__54987__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__54987__auto____1.call(this,state_61808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__54987__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__54987__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__54987__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__54987__auto__;
})()
;})(switch__54986__auto__,c__55153__auto__,figwheel_version,temp__5720__auto__))
})();
var state__55155__auto__ = (function (){var statearr_61814 = f__55154__auto__.call(null);
(statearr_61814[(6)] = c__55153__auto__);

return statearr_61814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__55155__auto__);
});})(c__55153__auto__,figwheel_version,temp__5720__auto__))
);

return c__55153__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__61817){
var map__61818 = p__61817;
var map__61818__$1 = (((((!((map__61818 == null))))?(((((map__61818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61818):map__61818);
var file = cljs.core.get.call(null,map__61818__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__61818__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__61818__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__61820 = "";
var G__61820__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61820),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__61820);
var G__61820__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61820__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__61820__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61820__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__61820__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__61821){
var map__61822 = p__61821;
var map__61822__$1 = (((((!((map__61822 == null))))?(((((map__61822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61822):map__61822);
var ed = map__61822__$1;
var exception_data = cljs.core.get.call(null,map__61822__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__61822__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_61825 = (function (){var G__61824 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61824)," Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,exception_data))].join('');
} else {
return G__61824;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_61825);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__61826){
var map__61827 = p__61826;
var map__61827__$1 = (((((!((map__61827 == null))))?(((((map__61827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61827):map__61827);
var w = map__61827__$1;
var message = cljs.core.get.call(null,map__61827__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__61829 = cljs.core.seq.call(null,plugins);
var chunk__61830 = null;
var count__61831 = (0);
var i__61832 = (0);
while(true){
if((i__61832 < count__61831)){
var vec__61833 = cljs.core._nth.call(null,chunk__61830,i__61832);
var k = cljs.core.nth.call(null,vec__61833,(0),null);
var plugin = cljs.core.nth.call(null,vec__61833,(1),null);
if(cljs.core.truth_(plugin)){
var pl_61839 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__61829,chunk__61830,count__61831,i__61832,pl_61839,vec__61833,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_61839.call(null,msg_hist);
});})(seq__61829,chunk__61830,count__61831,i__61832,pl_61839,vec__61833,k,plugin))
);
} else {
}


var G__61840 = seq__61829;
var G__61841 = chunk__61830;
var G__61842 = count__61831;
var G__61843 = (i__61832 + (1));
seq__61829 = G__61840;
chunk__61830 = G__61841;
count__61831 = G__61842;
i__61832 = G__61843;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__61829);
if(temp__5720__auto__){
var seq__61829__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61829__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__61829__$1);
var G__61844 = cljs.core.chunk_rest.call(null,seq__61829__$1);
var G__61845 = c__4461__auto__;
var G__61846 = cljs.core.count.call(null,c__4461__auto__);
var G__61847 = (0);
seq__61829 = G__61844;
chunk__61830 = G__61845;
count__61831 = G__61846;
i__61832 = G__61847;
continue;
} else {
var vec__61836 = cljs.core.first.call(null,seq__61829__$1);
var k = cljs.core.nth.call(null,vec__61836,(0),null);
var plugin = cljs.core.nth.call(null,vec__61836,(1),null);
if(cljs.core.truth_(plugin)){
var pl_61848 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__61829,chunk__61830,count__61831,i__61832,pl_61848,vec__61836,k,plugin,seq__61829__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_61848.call(null,msg_hist);
});})(seq__61829,chunk__61830,count__61831,i__61832,pl_61848,vec__61836,k,plugin,seq__61829__$1,temp__5720__auto__))
);
} else {
}


var G__61849 = cljs.core.next.call(null,seq__61829__$1);
var G__61850 = null;
var G__61851 = (0);
var G__61852 = (0);
seq__61829 = G__61849;
chunk__61830 = G__61850;
count__61831 = G__61851;
i__61832 = G__61852;
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
var G__61854 = arguments.length;
switch (G__61854) {
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

var seq__61855_61860 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__61856_61861 = null;
var count__61857_61862 = (0);
var i__61858_61863 = (0);
while(true){
if((i__61858_61863 < count__61857_61862)){
var msg_61864 = cljs.core._nth.call(null,chunk__61856_61861,i__61858_61863);
figwheel.client.socket.handle_incoming_message.call(null,msg_61864);


var G__61865 = seq__61855_61860;
var G__61866 = chunk__61856_61861;
var G__61867 = count__61857_61862;
var G__61868 = (i__61858_61863 + (1));
seq__61855_61860 = G__61865;
chunk__61856_61861 = G__61866;
count__61857_61862 = G__61867;
i__61858_61863 = G__61868;
continue;
} else {
var temp__5720__auto___61869 = cljs.core.seq.call(null,seq__61855_61860);
if(temp__5720__auto___61869){
var seq__61855_61870__$1 = temp__5720__auto___61869;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61855_61870__$1)){
var c__4461__auto___61871 = cljs.core.chunk_first.call(null,seq__61855_61870__$1);
var G__61872 = cljs.core.chunk_rest.call(null,seq__61855_61870__$1);
var G__61873 = c__4461__auto___61871;
var G__61874 = cljs.core.count.call(null,c__4461__auto___61871);
var G__61875 = (0);
seq__61855_61860 = G__61872;
chunk__61856_61861 = G__61873;
count__61857_61862 = G__61874;
i__61858_61863 = G__61875;
continue;
} else {
var msg_61876 = cljs.core.first.call(null,seq__61855_61870__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_61876);


var G__61877 = cljs.core.next.call(null,seq__61855_61870__$1);
var G__61878 = null;
var G__61879 = (0);
var G__61880 = (0);
seq__61855_61860 = G__61877;
chunk__61856_61861 = G__61878;
count__61857_61862 = G__61879;
i__61858_61863 = G__61880;
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
var len__4641__auto___61885 = arguments.length;
var i__4642__auto___61886 = (0);
while(true){
if((i__4642__auto___61886 < len__4641__auto___61885)){
args__4647__auto__.push((arguments[i__4642__auto___61886]));

var G__61887 = (i__4642__auto___61886 + (1));
i__4642__auto___61886 = G__61887;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__61882){
var map__61883 = p__61882;
var map__61883__$1 = (((((!((map__61883 == null))))?(((((map__61883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61883):map__61883);
var opts = map__61883__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq61881){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61881));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e61888){if((e61888 instanceof Error)){
var e = e61888;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e61888;

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
return (function (p__61889){
var map__61890 = p__61889;
var map__61890__$1 = (((((!((map__61890 == null))))?(((((map__61890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61890):map__61890);
var msg_name = cljs.core.get.call(null,map__61890__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1575465443811
