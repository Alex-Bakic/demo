// Compiled by ClojureScript 1.10.439 {}
goog.provide('demo.components.jobs.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('demo.subs');
goog.require('demo.components.jobs.subs');
goog.require('demo.components.jobs.card');
demo.components.jobs.views.jobsboard = (function demo$components$jobs$views$jobsboard(){
var jobs = demo.subs._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("demo.components.jobs.subs","jobs","demo.components.jobs.subs/jobs",620601618)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero","div.hero",116748844),(cljs.core.truth_(jobs)?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero-body","div.hero-body",1231318527)], null),(function (){var iter__4434__auto__ = ((function (jobs){
return (function demo$components$jobs$views$jobsboard_$_iter__34117(s__34118){
return (new cljs.core.LazySeq(null,((function (jobs){
return (function (){
var s__34118__$1 = s__34118;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34118__$1);
if(temp__5720__auto__){
var s__34118__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34118__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__34118__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__34120 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__34119 = (0);
while(true){
if((i__34119 < size__4433__auto__)){
var job_block = cljs.core._nth.call(null,c__4432__auto__,i__34119);
cljs.core.chunk_append.call(null,b__34120,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns","div.columns",-437221213)], null),cljs.core.mapv.call(null,((function (i__34119,job_block,c__4432__auto__,size__4433__auto__,b__34120,s__34118__$2,temp__5720__auto__,jobs){
return (function (job){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-4","div.column.is-4",-186249880),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.jobs.card.job_card,job], null)], null);
});})(i__34119,job_block,c__4432__auto__,size__4433__auto__,b__34120,s__34118__$2,temp__5720__auto__,jobs))
,job_block)));

var G__34121 = (i__34119 + (1));
i__34119 = G__34121;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34120),demo$components$jobs$views$jobsboard_$_iter__34117.call(null,cljs.core.chunk_rest.call(null,s__34118__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34120),null);
}
} else {
var job_block = cljs.core.first.call(null,s__34118__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns","div.columns",-437221213)], null),cljs.core.mapv.call(null,((function (job_block,s__34118__$2,temp__5720__auto__,jobs){
return (function (job){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-4","div.column.is-4",-186249880),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.jobs.card.job_card,job], null)], null);
});})(job_block,s__34118__$2,temp__5720__auto__,jobs))
,job_block)),demo$components$jobs$views$jobsboard_$_iter__34117.call(null,cljs.core.rest.call(null,s__34118__$2)));
}
} else {
return null;
}
break;
}
});})(jobs))
,null,null));
});})(jobs))
;
return iter__4434__auto__.call(null,cljs.core.partition_all.call(null,(3),jobs));
})()):null)], null);
});

//# sourceMappingURL=views.js.map?rel=1575829142248
