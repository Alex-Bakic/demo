// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36503){
var map__36504 = p__36503;
var map__36504__$1 = (((((!((map__36504 == null))))?(((((map__36504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36504):map__36504);
var m = map__36504__$1;
var n = cljs.core.get.call(null,map__36504__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36504__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36506_36528 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36507_36529 = null;
var count__36508_36530 = (0);
var i__36509_36531 = (0);
while(true){
if((i__36509_36531 < count__36508_36530)){
var f_36532 = cljs.core._nth.call(null,chunk__36507_36529,i__36509_36531);
cljs.core.println.call(null,"  ",f_36532);


var G__36533 = seq__36506_36528;
var G__36534 = chunk__36507_36529;
var G__36535 = count__36508_36530;
var G__36536 = (i__36509_36531 + (1));
seq__36506_36528 = G__36533;
chunk__36507_36529 = G__36534;
count__36508_36530 = G__36535;
i__36509_36531 = G__36536;
continue;
} else {
var temp__5720__auto___36537 = cljs.core.seq.call(null,seq__36506_36528);
if(temp__5720__auto___36537){
var seq__36506_36538__$1 = temp__5720__auto___36537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36506_36538__$1)){
var c__4461__auto___36539 = cljs.core.chunk_first.call(null,seq__36506_36538__$1);
var G__36540 = cljs.core.chunk_rest.call(null,seq__36506_36538__$1);
var G__36541 = c__4461__auto___36539;
var G__36542 = cljs.core.count.call(null,c__4461__auto___36539);
var G__36543 = (0);
seq__36506_36528 = G__36540;
chunk__36507_36529 = G__36541;
count__36508_36530 = G__36542;
i__36509_36531 = G__36543;
continue;
} else {
var f_36544 = cljs.core.first.call(null,seq__36506_36538__$1);
cljs.core.println.call(null,"  ",f_36544);


var G__36545 = cljs.core.next.call(null,seq__36506_36538__$1);
var G__36546 = null;
var G__36547 = (0);
var G__36548 = (0);
seq__36506_36528 = G__36545;
chunk__36507_36529 = G__36546;
count__36508_36530 = G__36547;
i__36509_36531 = G__36548;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36549 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36549);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36549)))?cljs.core.second.call(null,arglists_36549):arglists_36549));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36510_36550 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36511_36551 = null;
var count__36512_36552 = (0);
var i__36513_36553 = (0);
while(true){
if((i__36513_36553 < count__36512_36552)){
var vec__36514_36554 = cljs.core._nth.call(null,chunk__36511_36551,i__36513_36553);
var name_36555 = cljs.core.nth.call(null,vec__36514_36554,(0),null);
var map__36517_36556 = cljs.core.nth.call(null,vec__36514_36554,(1),null);
var map__36517_36557__$1 = (((((!((map__36517_36556 == null))))?(((((map__36517_36556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36517_36556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36517_36556):map__36517_36556);
var doc_36558 = cljs.core.get.call(null,map__36517_36557__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36559 = cljs.core.get.call(null,map__36517_36557__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36555);

cljs.core.println.call(null," ",arglists_36559);

if(cljs.core.truth_(doc_36558)){
cljs.core.println.call(null," ",doc_36558);
} else {
}


var G__36560 = seq__36510_36550;
var G__36561 = chunk__36511_36551;
var G__36562 = count__36512_36552;
var G__36563 = (i__36513_36553 + (1));
seq__36510_36550 = G__36560;
chunk__36511_36551 = G__36561;
count__36512_36552 = G__36562;
i__36513_36553 = G__36563;
continue;
} else {
var temp__5720__auto___36564 = cljs.core.seq.call(null,seq__36510_36550);
if(temp__5720__auto___36564){
var seq__36510_36565__$1 = temp__5720__auto___36564;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36510_36565__$1)){
var c__4461__auto___36566 = cljs.core.chunk_first.call(null,seq__36510_36565__$1);
var G__36567 = cljs.core.chunk_rest.call(null,seq__36510_36565__$1);
var G__36568 = c__4461__auto___36566;
var G__36569 = cljs.core.count.call(null,c__4461__auto___36566);
var G__36570 = (0);
seq__36510_36550 = G__36567;
chunk__36511_36551 = G__36568;
count__36512_36552 = G__36569;
i__36513_36553 = G__36570;
continue;
} else {
var vec__36519_36571 = cljs.core.first.call(null,seq__36510_36565__$1);
var name_36572 = cljs.core.nth.call(null,vec__36519_36571,(0),null);
var map__36522_36573 = cljs.core.nth.call(null,vec__36519_36571,(1),null);
var map__36522_36574__$1 = (((((!((map__36522_36573 == null))))?(((((map__36522_36573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36522_36573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36522_36573):map__36522_36573);
var doc_36575 = cljs.core.get.call(null,map__36522_36574__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36576 = cljs.core.get.call(null,map__36522_36574__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36572);

cljs.core.println.call(null," ",arglists_36576);

if(cljs.core.truth_(doc_36575)){
cljs.core.println.call(null," ",doc_36575);
} else {
}


var G__36577 = cljs.core.next.call(null,seq__36510_36565__$1);
var G__36578 = null;
var G__36579 = (0);
var G__36580 = (0);
seq__36510_36550 = G__36577;
chunk__36511_36551 = G__36578;
count__36512_36552 = G__36579;
i__36513_36553 = G__36580;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__36524 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36525 = null;
var count__36526 = (0);
var i__36527 = (0);
while(true){
if((i__36527 < count__36526)){
var role = cljs.core._nth.call(null,chunk__36525,i__36527);
var temp__5720__auto___36581__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___36581__$1)){
var spec_36582 = temp__5720__auto___36581__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36582));
} else {
}


var G__36583 = seq__36524;
var G__36584 = chunk__36525;
var G__36585 = count__36526;
var G__36586 = (i__36527 + (1));
seq__36524 = G__36583;
chunk__36525 = G__36584;
count__36526 = G__36585;
i__36527 = G__36586;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__36524);
if(temp__5720__auto____$1){
var seq__36524__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36524__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__36524__$1);
var G__36587 = cljs.core.chunk_rest.call(null,seq__36524__$1);
var G__36588 = c__4461__auto__;
var G__36589 = cljs.core.count.call(null,c__4461__auto__);
var G__36590 = (0);
seq__36524 = G__36587;
chunk__36525 = G__36588;
count__36526 = G__36589;
i__36527 = G__36590;
continue;
} else {
var role = cljs.core.first.call(null,seq__36524__$1);
var temp__5720__auto___36591__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___36591__$2)){
var spec_36592 = temp__5720__auto___36591__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36592));
} else {
}


var G__36593 = cljs.core.next.call(null,seq__36524__$1);
var G__36594 = null;
var G__36595 = (0);
var G__36596 = (0);
seq__36524 = G__36593;
chunk__36525 = G__36594;
count__36526 = G__36595;
i__36527 = G__36596;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1575052115073
