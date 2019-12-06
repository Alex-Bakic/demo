// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__60484){
var map__60485 = p__60484;
var map__60485__$1 = (((((!((map__60485 == null))))?(((((map__60485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60485):map__60485);
var m = map__60485__$1;
var n = cljs.core.get.call(null,map__60485__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__60485__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__60487_60509 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__60488_60510 = null;
var count__60489_60511 = (0);
var i__60490_60512 = (0);
while(true){
if((i__60490_60512 < count__60489_60511)){
var f_60513 = cljs.core._nth.call(null,chunk__60488_60510,i__60490_60512);
cljs.core.println.call(null,"  ",f_60513);


var G__60514 = seq__60487_60509;
var G__60515 = chunk__60488_60510;
var G__60516 = count__60489_60511;
var G__60517 = (i__60490_60512 + (1));
seq__60487_60509 = G__60514;
chunk__60488_60510 = G__60515;
count__60489_60511 = G__60516;
i__60490_60512 = G__60517;
continue;
} else {
var temp__5720__auto___60518 = cljs.core.seq.call(null,seq__60487_60509);
if(temp__5720__auto___60518){
var seq__60487_60519__$1 = temp__5720__auto___60518;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60487_60519__$1)){
var c__4461__auto___60520 = cljs.core.chunk_first.call(null,seq__60487_60519__$1);
var G__60521 = cljs.core.chunk_rest.call(null,seq__60487_60519__$1);
var G__60522 = c__4461__auto___60520;
var G__60523 = cljs.core.count.call(null,c__4461__auto___60520);
var G__60524 = (0);
seq__60487_60509 = G__60521;
chunk__60488_60510 = G__60522;
count__60489_60511 = G__60523;
i__60490_60512 = G__60524;
continue;
} else {
var f_60525 = cljs.core.first.call(null,seq__60487_60519__$1);
cljs.core.println.call(null,"  ",f_60525);


var G__60526 = cljs.core.next.call(null,seq__60487_60519__$1);
var G__60527 = null;
var G__60528 = (0);
var G__60529 = (0);
seq__60487_60509 = G__60526;
chunk__60488_60510 = G__60527;
count__60489_60511 = G__60528;
i__60490_60512 = G__60529;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_60530 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_60530);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_60530)))?cljs.core.second.call(null,arglists_60530):arglists_60530));
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
var seq__60491_60531 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__60492_60532 = null;
var count__60493_60533 = (0);
var i__60494_60534 = (0);
while(true){
if((i__60494_60534 < count__60493_60533)){
var vec__60495_60535 = cljs.core._nth.call(null,chunk__60492_60532,i__60494_60534);
var name_60536 = cljs.core.nth.call(null,vec__60495_60535,(0),null);
var map__60498_60537 = cljs.core.nth.call(null,vec__60495_60535,(1),null);
var map__60498_60538__$1 = (((((!((map__60498_60537 == null))))?(((((map__60498_60537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60498_60537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60498_60537):map__60498_60537);
var doc_60539 = cljs.core.get.call(null,map__60498_60538__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_60540 = cljs.core.get.call(null,map__60498_60538__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_60536);

cljs.core.println.call(null," ",arglists_60540);

if(cljs.core.truth_(doc_60539)){
cljs.core.println.call(null," ",doc_60539);
} else {
}


var G__60541 = seq__60491_60531;
var G__60542 = chunk__60492_60532;
var G__60543 = count__60493_60533;
var G__60544 = (i__60494_60534 + (1));
seq__60491_60531 = G__60541;
chunk__60492_60532 = G__60542;
count__60493_60533 = G__60543;
i__60494_60534 = G__60544;
continue;
} else {
var temp__5720__auto___60545 = cljs.core.seq.call(null,seq__60491_60531);
if(temp__5720__auto___60545){
var seq__60491_60546__$1 = temp__5720__auto___60545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60491_60546__$1)){
var c__4461__auto___60547 = cljs.core.chunk_first.call(null,seq__60491_60546__$1);
var G__60548 = cljs.core.chunk_rest.call(null,seq__60491_60546__$1);
var G__60549 = c__4461__auto___60547;
var G__60550 = cljs.core.count.call(null,c__4461__auto___60547);
var G__60551 = (0);
seq__60491_60531 = G__60548;
chunk__60492_60532 = G__60549;
count__60493_60533 = G__60550;
i__60494_60534 = G__60551;
continue;
} else {
var vec__60500_60552 = cljs.core.first.call(null,seq__60491_60546__$1);
var name_60553 = cljs.core.nth.call(null,vec__60500_60552,(0),null);
var map__60503_60554 = cljs.core.nth.call(null,vec__60500_60552,(1),null);
var map__60503_60555__$1 = (((((!((map__60503_60554 == null))))?(((((map__60503_60554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60503_60554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60503_60554):map__60503_60554);
var doc_60556 = cljs.core.get.call(null,map__60503_60555__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_60557 = cljs.core.get.call(null,map__60503_60555__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_60553);

cljs.core.println.call(null," ",arglists_60557);

if(cljs.core.truth_(doc_60556)){
cljs.core.println.call(null," ",doc_60556);
} else {
}


var G__60558 = cljs.core.next.call(null,seq__60491_60546__$1);
var G__60559 = null;
var G__60560 = (0);
var G__60561 = (0);
seq__60491_60531 = G__60558;
chunk__60492_60532 = G__60559;
count__60493_60533 = G__60560;
i__60494_60534 = G__60561;
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

var seq__60505 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__60506 = null;
var count__60507 = (0);
var i__60508 = (0);
while(true){
if((i__60508 < count__60507)){
var role = cljs.core._nth.call(null,chunk__60506,i__60508);
var temp__5720__auto___60562__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___60562__$1)){
var spec_60563 = temp__5720__auto___60562__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_60563));
} else {
}


var G__60564 = seq__60505;
var G__60565 = chunk__60506;
var G__60566 = count__60507;
var G__60567 = (i__60508 + (1));
seq__60505 = G__60564;
chunk__60506 = G__60565;
count__60507 = G__60566;
i__60508 = G__60567;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__60505);
if(temp__5720__auto____$1){
var seq__60505__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60505__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__60505__$1);
var G__60568 = cljs.core.chunk_rest.call(null,seq__60505__$1);
var G__60569 = c__4461__auto__;
var G__60570 = cljs.core.count.call(null,c__4461__auto__);
var G__60571 = (0);
seq__60505 = G__60568;
chunk__60506 = G__60569;
count__60507 = G__60570;
i__60508 = G__60571;
continue;
} else {
var role = cljs.core.first.call(null,seq__60505__$1);
var temp__5720__auto___60572__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___60572__$2)){
var spec_60573 = temp__5720__auto___60572__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_60573));
} else {
}


var G__60574 = cljs.core.next.call(null,seq__60505__$1);
var G__60575 = null;
var G__60576 = (0);
var G__60577 = (0);
seq__60505 = G__60574;
chunk__60506 = G__60575;
count__60507 = G__60576;
i__60508 = G__60577;
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

//# sourceMappingURL=repl.js.map?rel=1575465442907
