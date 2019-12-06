// Compiled by ClojureScript 1.10.439 {}
goog.provide('demo.algolia.http');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('ajax.json');
goog.require('demo.algolia.db');
goog.require('demo.events');
goog.require('re_frame.core');
demo.algolia.http.handler = (function demo$algolia$http$handler(response){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("demo.events","load-jobs","demo.events/load-jobs",-1924839986),new cljs.core.Keyword(null,"hits","hits",-2120002930).cljs$core$IFn$_invoke$arity$1(response)], null));
});
demo.algolia.http.make_request_BANG_ = (function demo$algolia$http$make_request_BANG_(query){
return ajax.core.POST.call(null,demo.algolia.db.url,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"headers","headers",-835030129),demo.algolia.db.credentials,new cljs.core.Keyword(null,"handler","handler",-195596612),demo.algolia.http.handler,new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),["query=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('')], null))),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.json.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});

//# sourceMappingURL=http.js.map?rel=1575504744288
