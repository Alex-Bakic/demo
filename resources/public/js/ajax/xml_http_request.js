// Compiled by ClojureScript 1.10.439 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.call(null,(function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__62128,handler){
var map__62129 = p__62128;
var map__62129__$1 = (((((!((map__62129 == null))))?(((((map__62129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62129):map__62129);
var uri = cljs.core.get.call(null,map__62129__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__62129__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__62129__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__62129__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__62129__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__62129__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__62129__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__62129,map__62129__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__62127_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__62127_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__62129,map__62129__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5720__auto___62141 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5720__auto___62141)){
var response_type_62142 = temp__5720__auto___62141;
this$__$1.responseType = cljs.core.name.call(null,response_type_62142);
} else {
}

var seq__62131_62143 = cljs.core.seq.call(null,headers);
var chunk__62132_62144 = null;
var count__62133_62145 = (0);
var i__62134_62146 = (0);
while(true){
if((i__62134_62146 < count__62133_62145)){
var vec__62135_62147 = cljs.core._nth.call(null,chunk__62132_62144,i__62134_62146);
var k_62148 = cljs.core.nth.call(null,vec__62135_62147,(0),null);
var v_62149 = cljs.core.nth.call(null,vec__62135_62147,(1),null);
this$__$1.setRequestHeader(k_62148,v_62149);


var G__62150 = seq__62131_62143;
var G__62151 = chunk__62132_62144;
var G__62152 = count__62133_62145;
var G__62153 = (i__62134_62146 + (1));
seq__62131_62143 = G__62150;
chunk__62132_62144 = G__62151;
count__62133_62145 = G__62152;
i__62134_62146 = G__62153;
continue;
} else {
var temp__5720__auto___62154 = cljs.core.seq.call(null,seq__62131_62143);
if(temp__5720__auto___62154){
var seq__62131_62155__$1 = temp__5720__auto___62154;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62131_62155__$1)){
var c__4461__auto___62156 = cljs.core.chunk_first.call(null,seq__62131_62155__$1);
var G__62157 = cljs.core.chunk_rest.call(null,seq__62131_62155__$1);
var G__62158 = c__4461__auto___62156;
var G__62159 = cljs.core.count.call(null,c__4461__auto___62156);
var G__62160 = (0);
seq__62131_62143 = G__62157;
chunk__62132_62144 = G__62158;
count__62133_62145 = G__62159;
i__62134_62146 = G__62160;
continue;
} else {
var vec__62138_62161 = cljs.core.first.call(null,seq__62131_62155__$1);
var k_62162 = cljs.core.nth.call(null,vec__62138_62161,(0),null);
var v_62163 = cljs.core.nth.call(null,vec__62138_62161,(1),null);
this$__$1.setRequestHeader(k_62162,v_62163);


var G__62164 = cljs.core.next.call(null,seq__62131_62155__$1);
var G__62165 = null;
var G__62166 = (0);
var G__62167 = (0);
seq__62131_62143 = G__62164;
chunk__62132_62144 = G__62165;
count__62133_62145 = G__62166;
i__62134_62146 = G__62167;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4047__auto__ = body;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1575467342845
