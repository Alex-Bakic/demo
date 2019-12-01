// Compiled by ClojureScript 1.10.439 {}
goog.provide('day8.re_frame_10x.events');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.core');
goog.require('mranderson048.reagent.v0v7v0.reagent.core');
goog.require('cljs.tools.reader.edn');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('day8.re_frame_10x.utils.localstorage');
goog.require('reagent.impl.batching');
goog.require('clojure.string');
goog.require('goog.object');
goog.require('goog.string');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.core');
goog.require('re_frame.trace');
goog.require('day8.re_frame_10x.view.container');
goog.require('day8.re_frame_10x.styles');
goog.require('clojure.set');
goog.require('day8.re_frame_10x.metamorphic');
day8.re_frame_10x.events.fixed_after = (function day8$re_frame_10x$events$fixed_after(f){
return mranderson048.re_frame.v0v10v6.re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$events$fixed_after_$_after_after(context){
var db = ((cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"db","db",993250759)))?cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"db","db",993250759)], null)):cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"db","db",993250759)], null)));
var event = cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null));
f.call(null,db,event);

return context;
}));
});
day8.re_frame_10x.events.log_trace_QMARK_ = (function day8$re_frame_10x$events$log_trace_QMARK_(trace){
var render_operation_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"render","render",-1408033454))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814))));
var component_path = cljs.core.get_in.call(null,trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"component-path","component-path",-1014945685)], null),"");
if((!(render_operation_QMARK_))){
return true;
} else {
return (!(clojure.string.includes_QMARK_.call(null,component_path,"devtools outer")));
}
});
day8.re_frame_10x.events.disable_tracing_BANG_ = (function day8$re_frame_10x$events$disable_tracing_BANG_(){
return re_frame.trace.remove_trace_cb.call(null,new cljs.core.Keyword("day8.re-frame-10x.events","cb","day8.re-frame-10x.events/cb",-1614608881));
});
day8.re_frame_10x.events.enable_tracing_BANG_ = (function day8$re_frame_10x$events$enable_tracing_BANG_(){
return re_frame.trace.register_trace_cb.call(null,new cljs.core.Keyword("day8.re-frame-10x.events","cb","day8.re-frame-10x.events/cb",-1614608881),(function (p1__37516_SHARP_){
return mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","receive-new-traces","epochs/receive-new-traces",-1949348546),p1__37516_SHARP_], null));
}));
});
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
day8.re_frame_10x.events.dissoc_in = (function day8$re_frame_10x$events$dissoc_in(m,p__37517){
var vec__37518 = p__37517;
var seq__37519 = cljs.core.seq.call(null,vec__37518);
var first__37520 = cljs.core.first.call(null,seq__37519);
var seq__37519__$1 = cljs.core.next.call(null,seq__37519);
var k = first__37520;
var ks = seq__37519__$1;
var keys = vec__37518;
if(ks){
var temp__5718__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5718__auto__)){
var nextmap = temp__5718__auto__;
var newmap = day8.re_frame_10x.events.dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});
day8.re_frame_10x.events.read_string_maybe = (function day8$re_frame_10x$events$read_string_maybe(s){
try{return cljs.tools.reader.edn.read_string.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readers","readers",-2118263030),day8.re_frame_10x.utils.utils.default_readers], null),s);
}catch (e37521){var e = e37521;
return null;
}});
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808),(function (db,p__37522){
var vec__37523 = p__37522;
var _ = cljs.core.nth.call(null,vec__37523,(0),null);
var width_PERCENT_ = cljs.core.nth.call(null,vec__37523,(1),null);
day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"panel-width-ratio",(function (){var x__4135__auto__ = width_PERCENT_;
var y__4136__auto__ = 0.05;
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})());

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341)], null),(function (){var x__4135__auto__ = width_PERCENT_;
var y__4136__auto__ = 0.05;
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})());
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","window-width","settings/window-width",640332180),(function (db,p__37526){
var vec__37527 = p__37526;
var _ = cljs.core.nth.call(null,vec__37527,(0),null);
var width = cljs.core.nth.call(null,vec__37527,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"window-width","window-width",2057825599)], null),width);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089),(function (db,p__37530){
var vec__37531 = p__37530;
var _ = cljs.core.nth.call(null,vec__37531,(0),null);
var selected_tab = cljs.core.nth.call(null,vec__37531,(1),null);
day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"selected-tab",selected_tab);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156)], null),selected_tab);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","toggle-settings","settings/toggle-settings",-1691581698),(function (db,_){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878)], null),cljs.core.not);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),(function (db,p__37534){
var vec__37535 = p__37534;
var _ = cljs.core.nth.call(null,vec__37535,(0),null);
var show_panel_QMARK_ = cljs.core.nth.call(null,vec__37535,(1),null);
day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"show-panel",show_panel_QMARK_);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892)], null),show_panel_QMARK_);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","factory-reset","settings/factory-reset",1863855805),(function (db,_){
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_.call(null);

location.reload();

return db;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","user-toggle-panel","settings/user-toggle-panel",322795573),(function (db,_){
var now_showing_QMARK_ = cljs.core.not.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892)], null)));
var external_panel_QMARK_ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window?","external-window?",-1259873803)], null));
var using_trace_QMARK_ = (function (){var or__4047__auto__ = external_panel_QMARK_;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return now_showing_QMARK_;
}
})();
if(now_showing_QMARK_){
day8.re_frame_10x.events.enable_tracing_BANG_.call(null);
} else {
if(cljs.core.truth_(external_panel_QMARK_)){
} else {
day8.re_frame_10x.events.disable_tracing_BANG_.call(null);
}
}

day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"using-trace?",using_trace_QMARK_);

day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"show-panel",now_showing_QMARK_);

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"using-trace?","using-trace?",2036904112)], null),using_trace_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892)], null),now_showing_QMARK_);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","set-number-of-retained-epochs","settings/set-number-of-retained-epochs",-1910736736),(function (db,p__37538){
var vec__37539 = p__37538;
var _ = cljs.core.nth.call(null,vec__37539,(0),null);
var num_str = cljs.core.nth.call(null,vec__37539,(1),null);
var num = parseInt(num_str);
var num__$1 = ((((cljs.core.not.call(null,isNaN(num))) && (cljs.core.pos_int_QMARK_.call(null,num))))?num:(5));
day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"retained-epochs",num__$1);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252)], null),num__$1);
}));
day8.re_frame_10x.events.ignored_event_mw = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589)], null)),day8.re_frame_10x.events.fixed_after.call(null,(function (p1__37542_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"ignored-events",p1__37542_SHARP_);
}))], null);
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","add-ignored-event","settings/add-ignored-event",-1185281607),day8.re_frame_10x.events.ignored_event_mw,(function (ignored_events,_){
var id = cljs.core.random_uuid.call(null);
return cljs.core.assoc.call(null,ignored_events,id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event-str","event-str",381347778),"",new cljs.core.Keyword(null,"event-id","event-id",2130210178),null,new cljs.core.Keyword(null,"sort","sort",953465918),Date.now()], null));
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","remove-ignored-event","settings/remove-ignored-event",-391073521),day8.re_frame_10x.events.ignored_event_mw,(function (ignored_events,p__37543){
var vec__37544 = p__37543;
var _ = cljs.core.nth.call(null,vec__37544,(0),null);
var id = cljs.core.nth.call(null,vec__37544,(1),null);
return cljs.core.dissoc.call(null,ignored_events,id);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","update-ignored-event","settings/update-ignored-event",-407164743),day8.re_frame_10x.events.ignored_event_mw,(function (ignored_events,p__37547){
var vec__37548 = p__37547;
var _ = cljs.core.nth.call(null,vec__37548,(0),null);
var id = cljs.core.nth.call(null,vec__37548,(1),null);
var event_str = cljs.core.nth.call(null,vec__37548,(2),null);
var event = day8.re_frame_10x.events.read_string_maybe.call(null,event_str);
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,ignored_events,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"event-str","event-str",381347778)], null),event_str),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"event-id","event-id",2130210178)], null),((function (event,vec__37548,_,id,event_str){
return (function (old_event){
if(cljs.core.truth_(event)){
return event;
} else {
return old_event;
}
});})(event,vec__37548,_,id,event_str))
);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","set-ignored-events","settings/set-ignored-events",-10379659),day8.re_frame_10x.events.ignored_event_mw,(function (_,p__37551){
var vec__37552 = p__37551;
var ___$1 = cljs.core.nth.call(null,vec__37552,(0),null);
var ignored_events = cljs.core.nth.call(null,vec__37552,(1),null);
return ignored_events;
}));
day8.re_frame_10x.events.filtered_view_trace_mw = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599)], null)),day8.re_frame_10x.events.fixed_after.call(null,(function (p1__37555_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"filtered-view-trace",p1__37555_SHARP_);
}))], null);
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","add-filtered-view-trace","settings/add-filtered-view-trace",1856187997),day8.re_frame_10x.events.filtered_view_trace_mw,(function (filtered_view_trace,_){
var id = cljs.core.random_uuid.call(null);
return cljs.core.assoc.call(null,filtered_view_trace,id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),"",new cljs.core.Keyword(null,"ns","ns",441598760),null,new cljs.core.Keyword(null,"sort","sort",953465918),Date.now()], null));
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","remove-filtered-view-trace","settings/remove-filtered-view-trace",970685301),day8.re_frame_10x.events.filtered_view_trace_mw,(function (filtered_view_trace,p__37556){
var vec__37557 = p__37556;
var _ = cljs.core.nth.call(null,vec__37557,(0),null);
var id = cljs.core.nth.call(null,vec__37557,(1),null);
return cljs.core.dissoc.call(null,filtered_view_trace,id);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","update-filtered-view-trace","settings/update-filtered-view-trace",-530575796),day8.re_frame_10x.events.filtered_view_trace_mw,(function (filtered_view_trace,p__37560){
var vec__37561 = p__37560;
var _ = cljs.core.nth.call(null,vec__37561,(0),null);
var id = cljs.core.nth.call(null,vec__37561,(1),null);
var ns_str = cljs.core.nth.call(null,vec__37561,(2),null);
var event = day8.re_frame_10x.events.read_string_maybe.call(null,ns_str);
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,filtered_view_trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)], null),ns_str),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"ns","ns",441598760)], null),((function (event,vec__37561,_,id,ns_str){
return (function (old_event){
if(cljs.core.truth_(event)){
return event;
} else {
return old_event;
}
});})(event,vec__37561,_,id,ns_str))
);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","set-filtered-view-trace","settings/set-filtered-view-trace",-803299732),day8.re_frame_10x.events.filtered_view_trace_mw,(function (_,p__37564){
var vec__37565 = p__37564;
var ___$1 = cljs.core.nth.call(null,vec__37565,(0),null);
var ignored_events = cljs.core.nth.call(null,vec__37565,(1),null);
return ignored_events;
}));
day8.re_frame_10x.events.low_level_trace_mw = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092)], null)),day8.re_frame_10x.events.fixed_after.call(null,(function (p1__37568_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"low-level-trace",p1__37568_SHARP_);
}))], null);
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","set-low-level-trace","settings/set-low-level-trace",-664705158),day8.re_frame_10x.events.low_level_trace_mw,(function (_,p__37569){
var vec__37570 = p__37569;
var ___$1 = cljs.core.nth.call(null,vec__37570,(0),null);
var low_level = cljs.core.nth.call(null,vec__37570,(1),null);
return low_level;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289),day8.re_frame_10x.events.low_level_trace_mw,(function (low_level,p__37573){
var vec__37574 = p__37573;
var _ = cljs.core.nth.call(null,vec__37574,(0),null);
var trace_type = cljs.core.nth.call(null,vec__37574,(1),null);
var capture_QMARK_ = cljs.core.nth.call(null,vec__37574,(2),null);
return cljs.core.assoc.call(null,low_level,trace_type,capture_QMARK_);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920),(function (db,p__37577){
var vec__37578 = p__37577;
var _ = cljs.core.nth.call(null,vec__37578,(0),null);
var debug_QMARK_ = cljs.core.nth.call(null,vec__37578,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"debug?","debug?",-1831756173)], null),debug_QMARK_);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462)], null)),day8.re_frame_10x.events.fixed_after.call(null,(function (p1__37581_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"app-db-follows-events?",p1__37581_SHARP_);
}))], null),(function (db,p__37582){
var vec__37583 = p__37582;
var _ = cljs.core.nth.call(null,vec__37583,(0),null);
var follows_events_QMARK_ = cljs.core.nth.call(null,vec__37583,(1),null);
return follows_events_QMARK_;
}));
day8.re_frame_10x.events.mount = (function day8$re_frame_10x$events$mount(popup_window,popup_document){
var app = popup_document.getElementById("--re-frame-10x--");
var resize_update_scheduled_QMARK_ = cljs.core.atom.call(null,false);
var handle_window_resize = ((function (app,resize_update_scheduled_QMARK_){
return (function (e){
if(cljs.core.truth_(cljs.core.deref.call(null,resize_update_scheduled_QMARK_))){
return null;
} else {
reagent.impl.batching.next_tick.call(null,((function (app,resize_update_scheduled_QMARK_){
return (function (){
var width_37589 = popup_window.innerWidth;
var height_37590 = popup_window.innerHeight;
mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","external-window-resize","settings/external-window-resize",1415354649),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width_37589,new cljs.core.Keyword(null,"height","height",1025178622),height_37590], null)], null));

return cljs.core.reset_BANG_.call(null,resize_update_scheduled_QMARK_,false);
});})(app,resize_update_scheduled_QMARK_))
);

return cljs.core.reset_BANG_.call(null,resize_update_scheduled_QMARK_,true);
}
});})(app,resize_update_scheduled_QMARK_))
;
var handle_window_position = (function (){var pos = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (pos,app,resize_update_scheduled_QMARK_,handle_window_resize){
return (function (){
var map__37586 = cljs.core.deref.call(null,pos);
var map__37586__$1 = (((((!((map__37586 == null))))?(((((map__37586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37586):map__37586);
var left = cljs.core.get.call(null,map__37586__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.call(null,map__37586__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var screen_left = popup_window.screenX;
var screen_top = popup_window.screenY;
if(((cljs.core.not_EQ_.call(null,left,screen_left)) || (cljs.core.not_EQ_.call(null,top,screen_top)))){
mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","external-window-position","settings/external-window-position",-1880269094),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),screen_left,new cljs.core.Keyword(null,"top","top",-1856271961),screen_top], null)], null));

return cljs.core.reset_BANG_.call(null,pos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),screen_left,new cljs.core.Keyword(null,"top","top",-1856271961),screen_top], null));
} else {
return null;
}
});
;})(pos,app,resize_update_scheduled_QMARK_,handle_window_resize))
})();
var window_position_interval = cljs.core.atom.call(null,null);
var unmount = ((function (app,resize_update_scheduled_QMARK_,handle_window_resize,handle_window_position,window_position_interval){
return (function (_){
popup_window.removeEventListener("resize",handle_window_resize);

var G__37588_37591 = cljs.core.deref.call(null,window_position_interval);
if((G__37588_37591 == null)){
} else {
clearInterval(G__37588_37591);
}

return null;
});})(app,resize_update_scheduled_QMARK_,handle_window_resize,handle_window_position,window_position_interval))
;
day8.re_frame_10x.styles.inject_trace_styles.call(null,popup_document);

goog.object.set(popup_window,"onunload",((function (app,resize_update_scheduled_QMARK_,handle_window_resize,handle_window_position,window_position_interval,unmount){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","external-closed","global/external-closed",1633013375)], null));
});})(app,resize_update_scheduled_QMARK_,handle_window_resize,handle_window_position,window_position_interval,unmount))
);

return mranderson048.reagent.v0v7v0.reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.reagent.v0v7v0.reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"devtools outer external",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (app,resize_update_scheduled_QMARK_,handle_window_resize,handle_window_position,window_position_interval,unmount){
return (function (){
popup_window.addEventListener("resize",handle_window_resize);

popup_window.addEventListener("beforeunload",unmount);

return cljs.core.reset_BANG_.call(null,window_position_interval,setInterval(handle_window_position,(2000)));
});})(app,resize_update_scheduled_QMARK_,handle_window_resize,handle_window_position,window_position_interval,unmount))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),unmount,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (app,resize_update_scheduled_QMARK_,handle_window_resize,handle_window_position,window_position_interval,unmount){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.container.devtools_inner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panel-type","panel-type",-1211695095),new cljs.core.Keyword(null,"popup","popup",635890211)], null)], null);
});})(app,resize_update_scheduled_QMARK_,handle_window_resize,handle_window_position,window_position_interval,unmount))
], null))], null),app);
});
/**
 * Originally copied from re-frisk.devtool/open-debugger-window
 */
day8.re_frame_10x.events.open_debugger_window = (function day8$re_frame_10x$events$open_debugger_window(p__37592){
var map__37593 = p__37592;
var map__37593__$1 = (((((!((map__37593 == null))))?(((((map__37593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37593):map__37593);
var dimensions = map__37593__$1;
var width = cljs.core.get.call(null,map__37593__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__37593__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var top = cljs.core.get.call(null,map__37593__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var left = cljs.core.get.call(null,map__37593__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var doc_title = document.title;
var new_window_title = goog.string.escapeString(["re-frame-10x | ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(doc_title)].join(''));
var new_window_html = ["<head><title>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_window_title),"</title></head><body style=\"margin: 0px;\"><div id=\"--re-frame-10x--\" class=\"external-window\"></div></body>"].join('');
var temp__5718__auto__ = window.open("about:blank","re-frame-10x-popout",["width=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),",height=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),",left=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(left),",top=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(top),",resizable=yes,scrollbars=yes,status=no,directories=no,toolbar=no,menubar=no"].join(''));
if(cljs.core.truth_(temp__5718__auto__)){
var w = temp__5718__auto__;
var d = w.document;
var temp__5720__auto___37595 = d.getElementById("--re-frame-10x--");
if(cljs.core.truth_(temp__5720__auto___37595)){
var el_37596 = temp__5720__auto___37595;
mranderson048.reagent.v0v7v0.reagent.core.unmount_component_at_node.call(null,el_37596);
} else {
}

d.open();

d.write(new_window_html);

goog.object.set(w,"onload",((function (d,w,temp__5718__auto__,doc_title,new_window_title,new_window_html,map__37593,map__37593__$1,dimensions,width,height,top,left){
return (function (){
return day8.re_frame_10x.events.mount.call(null,w,d);
});})(d,w,temp__5718__auto__,doc_title,new_window_title,new_window_html,map__37593,map__37593__$1,dimensions,width,height,top,left))
);

d.close();

return true;
} else {
return false;
}
});
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("global","launch-external","global/launch-external",821773827),(function (ctx,_){
if(day8.re_frame_10x.events.open_debugger_window.call(null,cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window-dimensions","external-window-dimensions",-1264257454)], null)))){
day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"external-window?",true);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),day8.re_frame_10x.events.dissoc_in.call(null,cljs.core.assoc_in.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window?","external-window?",-1259873803)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682)], null)),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(200),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),false], null)], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682)], null),true),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","external-closed","global/external-closed",1633013375)], null)], null);
}
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("global","external-closed","global/external-closed",1633013375),(function (ctx,_){
day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"external-window?",false);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window?","external-window?",-1259873803)], null),false),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(400),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),true], null)], null)], null)], null);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","external-window-dimensions","settings/external-window-dimensions",-501632461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window-dimensions","external-window-dimensions",-1264257454)], null)),mranderson048.re_frame.v0v10v6.re_frame.core.after.call(null,(function (p1__37597_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"external-window-dimensions",p1__37597_SHARP_);
}))], null),(function (dim,p__37598){
var vec__37599 = p__37598;
var _ = cljs.core.nth.call(null,vec__37599,(0),null);
var new_dim = cljs.core.nth.call(null,vec__37599,(1),null);
return new_dim;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","external-window-resize","settings/external-window-resize",1415354649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window-dimensions","external-window-dimensions",-1264257454)], null)),mranderson048.re_frame.v0v10v6.re_frame.core.after.call(null,(function (p1__37602_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"external-window-dimensions",p1__37602_SHARP_);
}))], null),(function (dim,p__37603){
var vec__37604 = p__37603;
var _ = cljs.core.nth.call(null,vec__37604,(0),null);
var map__37607 = cljs.core.nth.call(null,vec__37604,(1),null);
var map__37607__$1 = (((((!((map__37607 == null))))?(((((map__37607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37607):map__37607);
var width = cljs.core.get.call(null,map__37607__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__37607__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return cljs.core.assoc.call(null,dim,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","external-window-position","settings/external-window-position",-1880269094),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window-dimensions","external-window-dimensions",-1264257454)], null)),mranderson048.re_frame.v0v10v6.re_frame.core.after.call(null,(function (p1__37609_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"external-window-dimensions",p1__37609_SHARP_);
}))], null),(function (dim,p__37610){
var vec__37611 = p__37610;
var _ = cljs.core.nth.call(null,vec__37611,(0),null);
var map__37614 = cljs.core.nth.call(null,vec__37611,(1),null);
var map__37614__$1 = (((((!((map__37614 == null))))?(((((map__37614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37614):map__37614);
var left = cljs.core.get.call(null,map__37614__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.call(null,map__37614__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
return cljs.core.assoc.call(null,dim,new cljs.core.Keyword(null,"left","left",-399115937),left,new cljs.core.Keyword(null,"top","top",-1856271961),top);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("global","enable-tracing","global/enable-tracing",-1791988359),(function (ctx,_){
day8.re_frame_10x.events.enable_tracing_BANG_.call(null);

return null;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("global","disable-tracing","global/disable-tracing",-1646696295),(function (ctx,_){
day8.re_frame_10x.events.disable_tracing_BANG_.call(null);

return null;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("global","add-unload-hook","global/add-unload-hook",1304719430),(function (_,___$1){
window.addEventListener("beforeunload",(function (){
return mranderson048.re_frame.v0v10v6.re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001),true], null));
}));

return null;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001),(function (db,p__37616){
var vec__37617 = p__37616;
var _ = cljs.core.nth.call(null,vec__37617,(0),null);
var unloading_QMARK_ = cljs.core.nth.call(null,vec__37617,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null),unloading_QMARK_);
}));
day8.re_frame_10x.events.save_filter_items = (function day8$re_frame_10x$events$save_filter_items(filter_items){
return day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"filter-items",filter_items);
});
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347),(function (db,p__37620){
var vec__37621 = p__37620;
var _ = cljs.core.nth.call(null,vec__37621,(0),null);
var filter_items = cljs.core.nth.call(null,vec__37621,(1),null);
day8.re_frame_10x.events.save_filter_items.call(null,filter_items);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null),filter_items);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("traces","add-filter","traces/add-filter",1646631802),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null))], null),(function (filter_items,p__37627){
var vec__37628 = p__37627;
var _ = cljs.core.nth.call(null,vec__37628,(0),null);
var filter_input = cljs.core.nth.call(null,vec__37628,(1),null);
var filter_type = cljs.core.nth.call(null,vec__37628,(2),null);
var new_db = (cljs.core.truth_(cljs.core.some.call(null,((function (vec__37628,_,filter_input,filter_type){
return (function (p1__37624_SHARP_){
return cljs.core._EQ_.call(null,filter_input,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(p1__37624_SHARP_));
});})(vec__37628,_,filter_input,filter_type))
,filter_items))?null:(function (){var filter_items__$1 = (cljs.core.truth_((function (){var and__4036__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"slower-than","slower-than",1137227767),filter_type);
if(and__4036__auto__){
return cljs.core.some.call(null,((function (and__4036__auto__,vec__37628,_,filter_input,filter_type){
return (function (p1__37625_SHARP_){
return cljs.core._EQ_.call(null,filter_type,new cljs.core.Keyword(null,"filter-type","filter-type",1785113735).cljs$core$IFn$_invoke$arity$1(p1__37625_SHARP_));
});})(and__4036__auto__,vec__37628,_,filter_input,filter_type))
,filter_items);
} else {
return and__4036__auto__;
}
})())?cljs.core.remove.call(null,((function (vec__37628,_,filter_input,filter_type){
return (function (p1__37626_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"slower-than","slower-than",1137227767),new cljs.core.Keyword(null,"filter-type","filter-type",1785113735).cljs$core$IFn$_invoke$arity$1(p1__37626_SHARP_));
});})(vec__37628,_,filter_input,filter_type))
,filter_items):filter_items);
return cljs.core.conj.call(null,filter_items__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null),new cljs.core.Keyword(null,"query","query",-1288509510),((cljs.core._EQ_.call(null,filter_type,new cljs.core.Keyword(null,"contains","contains",676899812)))?clojure.string.lower_case.call(null,filter_input):parseFloat(filter_input)),new cljs.core.Keyword(null,"filter-type","filter-type",1785113735),filter_type], null));
})());
day8.re_frame_10x.events.save_filter_items.call(null,new_db);

return new_db;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("traces","remove-filter","traces/remove-filter",-1645830686),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null))], null),(function (filter_items,p__37632){
var vec__37633 = p__37632;
var _ = cljs.core.nth.call(null,vec__37633,(0),null);
var filter_id = cljs.core.nth.call(null,vec__37633,(1),null);
var new_db = cljs.core.remove.call(null,((function (vec__37633,_,filter_id){
return (function (p1__37631_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__37631_SHARP_),filter_id);
});})(vec__37633,_,filter_id))
,filter_items);
day8.re_frame_10x.events.save_filter_items.call(null,new_db);

return new_db;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("traces","reset-filter-items","traces/reset-filter-items",983693273),(function (db,_){
var new_db = day8.re_frame_10x.events.dissoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
day8.re_frame_10x.events.save_filter_items.call(null,cljs.core.get_in.call(null,new_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null)));

return new_db;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("traces","toggle-all-expansions","traces/toggle-all-expansions",1714341025),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null))], null),(function (trace_detail_expansions,_){
return cljs.core.update.call(null,cljs.core.assoc.call(null,trace_detail_expansions,new cljs.core.Keyword(null,"overrides","overrides",1738628867),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"show-all?","show-all?",503618702),cljs.core.not);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("traces","toggle-trace","traces/toggle-trace",-995872006),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null))], null),(function (expansions,p__37637){
var vec__37638 = p__37637;
var _ = cljs.core.nth.call(null,vec__37638,(0),null);
var id = cljs.core.nth.call(null,vec__37638,(1),null);
var showing_QMARK_ = cljs.core.get_in.call(null,expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overrides","overrides",1738628867),id], null),new cljs.core.Keyword(null,"show-all?","show-all?",503618702).cljs$core$IFn$_invoke$arity$1(expansions));
return cljs.core.update_in.call(null,expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overrides","overrides",1738628867),id], null),((function (showing_QMARK_,vec__37638,_,id){
return (function (p1__37636_SHARP_){
if(cljs.core.truth_(showing_QMARK_)){
return false;
} else {
return cljs.core.not.call(null,p1__37636_SHARP_);
}
});})(showing_QMARK_,vec__37638,_,id))
);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("traces","toggle-categories","traces/toggle-categories",-1164634070),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null))], null),(function (categories,p__37641){
var vec__37642 = p__37641;
var _ = cljs.core.nth.call(null,vec__37642,(0),null);
var new_categories = cljs.core.nth.call(null,vec__37642,(1),null);
var new_categories__$1 = ((clojure.set.superset_QMARK_.call(null,categories,new_categories))?clojure.set.difference.call(null,categories,new_categories):clojure.set.union.call(null,categories,new_categories));
day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"categories",new_categories__$1);

return new_categories__$1;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("traces","set-categories","traces/set-categories",-1873940666),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null))], null),(function (categories,p__37645){
var vec__37646 = p__37645;
var _ = cljs.core.nth.call(null,vec__37646,(0),null);
var new_categories = cljs.core.nth.call(null,vec__37646,(1),null);
return new_categories;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("trace-panel","update-show-epoch-traces?","trace-panel/update-show-epoch-traces?",-1935503516),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665),new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323)], null)),day8.re_frame_10x.events.fixed_after.call(null,(function (p1__37649_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"show-epoch-traces?",p1__37649_SHARP_);
}))], null),(function (_,p__37650){
var vec__37651 = p__37650;
var k = cljs.core.nth.call(null,vec__37651,(0),null);
var show_epoch_traces_QMARK_ = cljs.core.nth.call(null,vec__37651,(1),null);
return show_epoch_traces_QMARK_;
}));
day8.re_frame_10x.events.app_db_path_mw = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"paths","paths",-1807389588)], null)),day8.re_frame_10x.events.fixed_after.call(null,(function (p1__37654_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"app-db-paths",p1__37654_SHARP_);
}))], null);
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","create-path","app-db/create-path",-1109143265),day8.re_frame_10x.events.app_db_path_mw,(function (paths,_){
return cljs.core.assoc.call(null,paths,Date.now(),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"diff?","diff?",117225601),false,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"path-str","path-str",259306316),"",new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226),true], null));
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","update-path","app-db/update-path",-2057697283),day8.re_frame_10x.events.app_db_path_mw,(function (paths,p__37655){
var vec__37656 = p__37655;
var _ = cljs.core.nth.call(null,vec__37656,(0),null);
var path_id = cljs.core.nth.call(null,vec__37656,(1),null);
var path_str = cljs.core.nth.call(null,vec__37656,(2),null);
var path = day8.re_frame_10x.events.read_string_maybe.call(null,path_str);
var paths__$1 = cljs.core.assoc_in.call(null,paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"path-str","path-str",259306316)], null),path_str);
if((((((!((path == null)))) && (cljs.core.sequential_QMARK_.call(null,path)))) || (clojure.string.blank_QMARK_.call(null,path_str)))){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,paths__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"path","path",-188191168)], null),path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226)], null),true);
} else {
return cljs.core.assoc_in.call(null,paths__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226)], null),false);
}
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","update-path-blur","app-db/update-path-blur",637142516),day8.re_frame_10x.events.app_db_path_mw,(function (paths,p__37659){
var vec__37660 = p__37659;
var _ = cljs.core.nth.call(null,vec__37660,(0),null);
var path_id = cljs.core.nth.call(null,vec__37660,(1),null);
var map__37663 = cljs.core.get.call(null,paths,path_id);
var map__37663__$1 = (((((!((map__37663 == null))))?(((((map__37663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37663):map__37663);
var valid_path_QMARK_ = cljs.core.get.call(null,map__37663__$1,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226));
var path = cljs.core.get.call(null,map__37663__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_(valid_path_QMARK_)){
return paths;
} else {
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"path-str","path-str",259306316)], null),cljs.core.pr_str.call(null,path)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226)], null),true);
}
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","set-path-visibility","app-db/set-path-visibility",1482573598),day8.re_frame_10x.events.app_db_path_mw,(function (paths,p__37665){
var vec__37666 = p__37665;
var _ = cljs.core.nth.call(null,vec__37666,(0),null);
var path_id = cljs.core.nth.call(null,vec__37666,(1),null);
var open_QMARK_ = cljs.core.nth.call(null,vec__37666,(2),null);
return cljs.core.assoc_in.call(null,paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","set-diff-visibility","app-db/set-diff-visibility",709297655),day8.re_frame_10x.events.app_db_path_mw,(function (paths,p__37669){
var vec__37670 = p__37669;
var _ = cljs.core.nth.call(null,vec__37670,(0),null);
var path_id = cljs.core.nth.call(null,vec__37670,(1),null);
var diff_QMARK_ = cljs.core.nth.call(null,vec__37670,(2),null);
var open_QMARK_ = (cljs.core.truth_(diff_QMARK_)?true:cljs.core.get_in.call(null,paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null)));
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"diff?","diff?",117225601)], null),diff_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","remove-path","app-db/remove-path",-1233894231),day8.re_frame_10x.events.app_db_path_mw,(function (paths,p__37673){
var vec__37674 = p__37673;
var _ = cljs.core.nth.call(null,vec__37674,(0),null);
var path_id = cljs.core.nth.call(null,vec__37674,(1),null);
return cljs.core.dissoc.call(null,paths,path_id);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730),day8.re_frame_10x.events.app_db_path_mw,(function (db,p__37677){
var vec__37678 = p__37677;
var _ = cljs.core.nth.call(null,vec__37678,(0),null);
var paths = cljs.core.nth.call(null,vec__37678,(1),null);
return paths;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656),(function (db,p__37683){
var vec__37684 = p__37683;
var _ = cljs.core.nth.call(null,vec__37684,(0),null);
var search_string = cljs.core.nth.call(null,vec__37684,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"search-string","search-string",68818394)], null),search_string);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","set-json-ml-paths","app-db/set-json-ml-paths",582043654),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261)], null))], null),(function (db,p__37687){
var vec__37688 = p__37687;
var _ = cljs.core.nth.call(null,vec__37688,(0),null);
var paths = cljs.core.nth.call(null,vec__37688,(1),null);
day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"app-db-json-ml-expansions",paths);

return paths;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","toggle-expansion","app-db/toggle-expansion",-1617765538),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261)], null))], null),(function (paths,p__37691){
var vec__37692 = p__37691;
var _ = cljs.core.nth.call(null,vec__37692,(0),null);
var path = cljs.core.nth.call(null,vec__37692,(1),null);
var new_paths = ((cljs.core.contains_QMARK_.call(null,paths,path))?cljs.core.disj.call(null,paths,path):cljs.core.conj.call(null,paths,path));
day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"app-db-json-ml-expansions",new_paths);

return new_paths;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415)], null))], null),(function (paths,_){
return re_frame.interop.reagent_id.call(null,re_frame.db.app_db);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),(function (db,p__37695){
var vec__37696 = p__37695;
var _ = cljs.core.nth.call(null,vec__37696,(0),null);
var new_id = cljs.core.nth.call(null,vec__37696,(1),null);
if(cljs.core.truth_(cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462)], null)))){
var epochs_37699 = new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
var match_id_37700 = (function (){var or__4047__auto__ = new_id;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return day8.re_frame_10x.utils.utils.last_in_vec.call(null,cljs.core.get.call(null,epochs_37699,new cljs.core.Keyword(null,"match-ids","match-ids",752973161)));
}
})();
var match_37701 = cljs.core.get_in.call(null,epochs_37699,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562),match_id_37700], null));
var event_37702 = day8.re_frame_10x.metamorphic.matched_event.call(null,new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_37701));
var temp__5724__auto___37703 = day8.re_frame_10x.metamorphic.app_db_after.call(null,event_37702);
if((temp__5724__auto___37703 == null)){
} else {
var new_db_37704 = temp__5724__auto___37703;
cljs.core.reset_BANG_.call(null,re_frame.db.app_db,new_db_37704);
}
} else {
}

return db;
}));
day8.re_frame_10x.events.first_match_id = (function day8$re_frame_10x$events$first_match_id(m){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(m)));
});
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("epochs","receive-new-traces","epochs/receive-new-traces",-1949348546),(function (p__37706,p__37707){
var map__37708 = p__37706;
var map__37708__$1 = (((((!((map__37708 == null))))?(((((map__37708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37708):map__37708);
var db = cljs.core.get.call(null,map__37708__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__37709 = p__37707;
var _ = cljs.core.nth.call(null,vec__37709,(0),null);
var new_traces = cljs.core.nth.call(null,vec__37709,(1),null);
var temp__5718__auto__ = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.call(null,day8.re_frame_10x.events.log_trace_QMARK_,new_traces));
if(cljs.core.truth_(temp__5718__auto__)){
var filtered_traces = temp__5718__auto__;
var number_of_epochs_to_retain = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252)], null));
var events_to_ignore = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"event-id","event-id",2130210178),cljs.core.vals.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589)], null)))));
var previous_traces = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641)], null),cljs.core.PersistentVector.EMPTY);
var parse_state = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"parse-state","parse-state",-1931312535)], null),day8.re_frame_10x.metamorphic.initial_parse_state);
var map__37713 = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092)], null));
var map__37713__$1 = (((((!((map__37713 == null))))?(((((map__37713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37713):map__37713);
var drop_re_frame = cljs.core.get.call(null,map__37713__$1,new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033));
var drop_reagent = cljs.core.get.call(null,map__37713__$1,new cljs.core.Keyword(null,"reagent","reagent",2131627322));
var all_traces = cljs.core.reduce.call(null,cljs.core.conj,previous_traces,filtered_traces);
var parse_state__$1 = day8.re_frame_10x.metamorphic.parse_traces.call(null,parse_state,filtered_traces);
var new_matches = new cljs.core.Keyword(null,"partitions","partitions",602979514).cljs$core$IFn$_invoke$arity$1(parse_state__$1);
var previous_matches = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"matches","matches",635497998)], null),cljs.core.PersistentVector.EMPTY);
var parse_state__$2 = cljs.core.assoc.call(null,parse_state__$1,new cljs.core.Keyword(null,"partitions","partitions",602979514),cljs.core.PersistentVector.EMPTY);
var new_matches__$1 = cljs.core.remove.call(null,((function (number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__37713,map__37713__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,filtered_traces,temp__5718__auto__,map__37708,map__37708__$1,db,vec__37709,_,new_traces){
return (function (match){
var event = cljs.core.get_in.call(null,day8.re_frame_10x.metamorphic.matched_event.call(null,match),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
return cljs.core.contains_QMARK_.call(null,events_to_ignore,cljs.core.first.call(null,event));
});})(number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__37713,map__37713__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,filtered_traces,temp__5718__auto__,map__37708,map__37708__$1,db,vec__37709,_,new_traces))
,new_matches);
var subscription_info = day8.re_frame_10x.metamorphic.subscription_info.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092)], null),cljs.core.PersistentArrayMap.EMPTY),filtered_traces,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415)], null)));
var sub_state = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981)], null),day8.re_frame_10x.metamorphic.initial_sub_state);
var subscription_match_state = day8.re_frame_10x.metamorphic.subscription_match_state.call(null,sub_state,all_traces,new_matches__$1);
var subscription_matches = cljs.core.rest.call(null,subscription_match_state);
var new_sub_state = cljs.core.last.call(null,subscription_match_state);
var timing = cljs.core.mapv.call(null,((function (number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__37713,map__37713__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,filtered_traces,temp__5718__auto__,map__37708,map__37708__$1,db,vec__37709,_,new_traces){
return (function (match){
var epoch_traces = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,day8.re_frame_10x.utils.utils.id_between_xf.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,match)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,match)))),all_traces);
var start_of_epoch = cljs.core.nth.call(null,epoch_traces,(0));
var event_handler_trace = cljs.core.first.call(null,cljs.core.filter.call(null,day8.re_frame_10x.metamorphic.event_handler_QMARK_,epoch_traces));
var dofx_trace = cljs.core.first.call(null,cljs.core.filter.call(null,day8.re_frame_10x.metamorphic.event_dofx_QMARK_,epoch_traces));
var event_trace = cljs.core.first.call(null,cljs.core.filter.call(null,day8.re_frame_10x.metamorphic.event_run_QMARK_,epoch_traces));
var finish_run = (function (){var or__4047__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,day8.re_frame_10x.metamorphic.finish_run_QMARK_,epoch_traces));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return day8.re_frame_10x.utils.utils.last_in_vec.call(null,epoch_traces);
}
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897),day8.re_frame_10x.metamorphic.elapsed_time.call(null,start_of_epoch,finish_run),new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(event_trace),new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(event_handler_trace),new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(dofx_trace)], null);
});})(number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__37713,map__37713__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,filtered_traces,temp__5718__auto__,map__37708,map__37708__$1,db,vec__37709,_,new_traces))
,new_matches__$1);
var new_matches__$2 = cljs.core.map.call(null,((function (number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__37713,map__37713__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,filtered_traces,temp__5718__auto__,map__37708,map__37708__$1,db,vec__37709,_,new_traces){
return (function (match,sub_match,t){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"match-info","match-info",666319879),match,new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981),sub_match,new cljs.core.Keyword(null,"timing","timing",-1849225195),t], null);
});})(number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__37713,map__37713__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,filtered_traces,temp__5718__auto__,map__37708,map__37708__$1,db,vec__37709,_,new_traces))
,new_matches__$1,subscription_matches,timing);
var quiescent_QMARK_ = (function (){var or__4047__auto__ = cljs.core.seq.call(null,new_matches__$2);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.filter.call(null,day8.re_frame_10x.metamorphic.quiescent_QMARK_,filtered_traces);
}
})();
var all_matches = cljs.core.reduce.call(null,cljs.core.conj,previous_matches,new_matches__$2);
var retained_matches = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take_last.call(null,number_of_epochs_to_retain,all_matches));
var first_id_to_retain = day8.re_frame_10x.events.first_match_id.call(null,cljs.core.first.call(null,retained_matches));
var retained_traces = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.drop_while.call(null,((function (number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__37713,map__37713__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,new_matches__$2,quiescent_QMARK_,all_matches,retained_matches,first_id_to_retain,filtered_traces,temp__5718__auto__,map__37708,map__37708__$1,db,vec__37709,_,new_traces){
return (function (p1__37705_SHARP_){
return (new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__37705_SHARP_) < first_id_to_retain);
});})(number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__37713,map__37713__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,new_matches__$2,quiescent_QMARK_,all_matches,retained_matches,first_id_to_retain,filtered_traces,temp__5718__auto__,map__37708,map__37708__$1,db,vec__37709,_,new_traces))
),cljs.core.remove.call(null,((function (number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__37713,map__37713__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,new_matches__$2,quiescent_QMARK_,all_matches,retained_matches,first_id_to_retain,filtered_traces,temp__5718__auto__,map__37708,map__37708__$1,db,vec__37709,_,new_traces){
return (function (trace){
var or__4047__auto__ = (cljs.core.truth_(drop_reagent)?day8.re_frame_10x.metamorphic.low_level_reagent_trace_QMARK_.call(null,trace):null);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.truth_(drop_re_frame)){
return day8.re_frame_10x.metamorphic.low_level_re_frame_trace_QMARK_.call(null,trace);
} else {
return null;
}
}
});})(number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__37713,map__37713__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,new_matches__$2,quiescent_QMARK_,all_matches,retained_matches,first_id_to_retain,filtered_traces,temp__5718__auto__,map__37708,map__37708__$1,db,vec__37709,_,new_traces))
)),all_traces);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641)], null),retained_traces),new cljs.core.Keyword(null,"epochs","epochs",1796936425),((function (number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__37713,map__37713__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,new_matches__$2,quiescent_QMARK_,all_matches,retained_matches,first_id_to_retain,retained_traces,filtered_traces,temp__5718__auto__,map__37708,map__37708__$1,db,vec__37709,_,new_traces){
return (function (epochs){
var current_index = new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
return cljs.core.assoc.call(null,epochs,new cljs.core.Keyword(null,"matches","matches",635497998),retained_matches,new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,day8.re_frame_10x.events.first_match_id,cljs.core.identity)),retained_matches),new cljs.core.Keyword(null,"match-ids","match-ids",752973161),cljs.core.mapv.call(null,day8.re_frame_10x.events.first_match_id,retained_matches),new cljs.core.Keyword(null,"parse-state","parse-state",-1931312535),parse_state__$2,new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981),new_sub_state,new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092),subscription_info,new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568),((cljs.core.seq.call(null,new_matches__$2))?null:current_id),new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376),((cljs.core.seq.call(null,new_matches__$2))?null:current_index));
});})(number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__37713,map__37713__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,new_matches__$2,quiescent_QMARK_,all_matches,retained_matches,first_id_to_retain,retained_traces,filtered_traces,temp__5718__auto__,map__37708,map__37708__$1,db,vec__37709,_,new_traces))
),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(cljs.core.truth_(quiescent_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","quiescent","epochs/quiescent",1889183263)], null):null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("epochs","previous-epoch","epochs/previous-epoch",480286026),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null))], null),(function (p__37715,_){
var map__37716 = p__37715;
var map__37716__$1 = (((((!((map__37716 == null))))?(((((map__37716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37716):map__37716);
var db = cljs.core.get.call(null,map__37716__$1,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5722__auto__ = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(db);
if((temp__5722__auto__ == null)){
var new_id = cljs.core.nth.call(null,new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db),(cljs.core.count.call(null,new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db)) - (2)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568),new_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),new_id], null)], null);
} else {
var current_id = temp__5722__auto__;
var match_ids = new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db);
var match_array_index = day8.re_frame_10x.utils.utils.find_index_in_vec.call(null,((function (match_ids,current_id,temp__5722__auto__,map__37716,map__37716__$1,db){
return (function (x){
return cljs.core._EQ_.call(null,current_id,x);
});})(match_ids,current_id,temp__5722__auto__,map__37716,map__37716__$1,db))
,match_ids);
var new_id = cljs.core.nth.call(null,match_ids,(match_array_index - (1)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568),new_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),new_id], null)], null);
}
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("epochs","next-epoch","epochs/next-epoch",-1703589978),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null))], null),(function (p__37718,_){
var map__37719 = p__37718;
var map__37719__$1 = (((((!((map__37719 == null))))?(((((map__37719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37719):map__37719);
var db = cljs.core.get.call(null,map__37719__$1,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5722__auto__ = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(db);
if((temp__5722__auto__ == null)){
var new_id = day8.re_frame_10x.utils.utils.last_in_vec.call(null,new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568),new_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),new_id], null)], null);
} else {
var current_id = temp__5722__auto__;
var match_ids = new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db);
var match_array_index = day8.re_frame_10x.utils.utils.find_index_in_vec.call(null,((function (match_ids,current_id,temp__5722__auto__,map__37719,map__37719__$1,db){
return (function (x){
return cljs.core._EQ_.call(null,current_id,x);
});})(match_ids,current_id,temp__5722__auto__,map__37719,map__37719__$1,db))
,match_ids);
var new_id = cljs.core.nth.call(null,match_ids,(match_array_index + (1)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568),new_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),new_id], null)], null);
}
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("epochs","most-recent-epoch","epochs/most-recent-epoch",1551402402),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null))], null),(function (p__37721,_){
var map__37722 = p__37721;
var map__37722__$1 = (((((!((map__37722 == null))))?(((((map__37722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37722):map__37722);
var db = cljs.core.get.call(null,map__37722__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376),null,new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568),null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),day8.re_frame_10x.utils.utils.last_in_vec.call(null,new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db))], null)], null);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("epochs","replay","epochs/replay",315529905),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null))], null),(function (epochs,_){
var current_epoch_id = (function (){var or__4047__auto__ = cljs.core.get.call(null,epochs,new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return day8.re_frame_10x.utils.utils.last_in_vec.call(null,cljs.core.get.call(null,epochs,new cljs.core.Keyword(null,"match-ids","match-ids",752973161)));
}
})();
var event_trace = day8.re_frame_10x.metamorphic.matched_event.call(null,cljs.core.get_in.call(null,epochs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562),current_epoch_id,new cljs.core.Keyword(null,"match-info","match-info",666319879)], null)));
var app_db_before = day8.re_frame_10x.metamorphic.app_db_before.call(null,event_trace);
var event = cljs.core.get_in.call(null,event_trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
cljs.core.reset_BANG_.call(null,re_frame.db.app_db,app_db_before);

return cljs.core.assoc.call(null,epochs,new cljs.core.Keyword(null,"replay","replay",-681122389),event);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("epochs","quiescent","epochs/quiescent",1889183263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null))], null),(function (db,_){
var temp__5722__auto__ = new cljs.core.Keyword(null,"replay","replay",-681122389).cljs$core$IFn$_invoke$arity$1(db);
if((temp__5722__auto__ == null)){
return db;
} else {
var event_to_replay = temp__5722__auto__;
re_frame.core.dispatch.call(null,event_to_replay);

return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"replay","replay",-681122389));
}
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("epochs","reset","epochs/reset",1592438868),(function (db){
re_frame.trace.reset_tracing_BANG_.call(null);

return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"traces","traces",-1301138004));
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160)], null))], null),(function (_,p__37724){
var vec__37725 = p__37724;
var ___$1 = cljs.core.nth.call(null,vec__37725,(0),null);
var ignore_QMARK_ = cljs.core.nth.call(null,vec__37725,(1),null);
return ignore_QMARK_;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("subs","open-pod?","subs/open-pod?",-57249156),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null))], null),(function (expansions,p__37728){
var vec__37729 = p__37728;
var _ = cljs.core.nth.call(null,vec__37729,(0),null);
var id = cljs.core.nth.call(null,vec__37729,(1),null);
var open_QMARK_ = cljs.core.nth.call(null,vec__37729,(2),null);
return cljs.core.assoc_in.call(null,expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("subs","set-diff-visibility","subs/set-diff-visibility",305207138),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null))], null),(function (expansions,p__37732){
var vec__37733 = p__37732;
var _ = cljs.core.nth.call(null,vec__37733,(0),null);
var id = cljs.core.nth.call(null,vec__37733,(1),null);
var diff_QMARK_ = cljs.core.nth.call(null,vec__37733,(2),null);
var open_QMARK_ = (cljs.core.truth_(diff_QMARK_)?true:cljs.core.get_in.call(null,expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null)));
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"diff?","diff?",117225601)], null),diff_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("subs","set-pinned","subs/set-pinned",980934095),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"pinned","pinned",-1216085339)], null))], null),(function (pinned,p__37736){
var vec__37737 = p__37736;
var _ = cljs.core.nth.call(null,vec__37737,(0),null);
var id = cljs.core.nth.call(null,vec__37737,(1),null);
var pinned_QMARK_ = cljs.core.nth.call(null,vec__37737,(2),null);
return cljs.core.assoc_in.call(null,pinned,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null),pinned_QMARK_);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("subs","set-filter","subs/set-filter",-2133913941),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"filter-str","filter-str",1974484789)], null))], null),(function (_,p__37740){
var vec__37741 = p__37740;
var ___$1 = cljs.core.nth.call(null,vec__37741,(0),null);
var filter_value = cljs.core.nth.call(null,vec__37741,(1),null);
return filter_value;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("code","set-code-visibility","code/set-code-visibility",-1072995010),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"code-open?","code-open?",1228336744)], null))], null),(function (code_open_QMARK_,p__37744){
var vec__37745 = p__37744;
var _ = cljs.core.nth.call(null,vec__37745,(0),null);
var open_QMARK__path = cljs.core.nth.call(null,vec__37745,(1),null);
var open_QMARK_ = cljs.core.nth.call(null,vec__37745,(2),null);
return cljs.core.assoc_in.call(null,code_open_QMARK_,open_QMARK__path,open_QMARK_);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("code","hover-form","code/hover-form",1557522458),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753)], null))], null),(function (form,p__37748){
var vec__37749 = p__37748;
var _ = cljs.core.nth.call(null,vec__37749,(0),null);
var new_form = cljs.core.nth.call(null,vec__37749,(1),null);
return new_form;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("code","exit-hover-form","code/exit-hover-form",-202062797),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753)], null))], null),(function (form,p__37752){
var vec__37753 = p__37752;
var _ = cljs.core.nth.call(null,vec__37753,(0),null);
var new_form = cljs.core.nth.call(null,vec__37753,(1),null);
if(cljs.core._EQ_.call(null,form,new_form)){
return null;
} else {
return new_form;
}
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("code","set-show-all-code?","code/set-show-all-code?",1632099789),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286)], null))], null),(function (_show_all_code_QMARK_,p__37756){
var vec__37757 = p__37756;
var _ = cljs.core.nth.call(null,vec__37757,(0),null);
var new_show_all_code_QMARK_ = cljs.core.nth.call(null,vec__37757,(1),null);
return new_show_all_code_QMARK_;
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040)], null))], null),(function (current_state,p__37760){
var vec__37761 = p__37760;
var _ = cljs.core.nth.call(null,vec__37761,(0),null);
var new_state = cljs.core.nth.call(null,vec__37761,(1),null);
if(((cljs.core._EQ_.call(null,current_state,new cljs.core.Keyword(null,"running","running",1554969103))) && (cljs.core._EQ_.call(null,new_state,new cljs.core.Keyword(null,"start","start",-355208981))))){
return new cljs.core.Keyword(null,"re-running","re-running",-97387070);
} else {
if(cljs.core._EQ_.call(null,new_state,new cljs.core.Keyword(null,"start","start",-355208981))){
return new cljs.core.Keyword(null,"running","running",1554969103);
} else {
return new cljs.core.Keyword(null,"end","end",-268185958);
}
}
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("component","set-direction","component/set-direction",2005265603),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782)], null))], null),(function (component,p__37764){
var vec__37765 = p__37764;
var _ = cljs.core.nth.call(null,vec__37765,(0),null);
var new_direction = cljs.core.nth.call(null,vec__37765,(1),null);
return cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"direction","direction",-633359395),new_direction);
}));
mranderson048.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("errors","dismiss-popup-failed","errors/dismiss-popup-failed",-286737091),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v6.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null))], null),(function (errors,_){
return cljs.core.dissoc.call(null,errors,new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682));
}));

//# sourceMappingURL=events.js.map?rel=1575052463106
