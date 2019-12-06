// Compiled by ClojureScript 1.10.439 {}
goog.provide('demo.components.jobs.card');
goog.require('cljs.core');
/**
 * only does the basic salaries , gbp , usd
 */
demo.components.jobs.card.display_salary_offering = (function demo$components$jobs$card$display_salary_offering(p__35101){
var map__35102 = p__35101;
var map__35102__$1 = (((((!((map__35102 == null))))?(((((map__35102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35102):map__35102);
var min = cljs.core.get.call(null,map__35102__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__35102__$1,new cljs.core.Keyword(null,"max","max",61366548));
var currency = cljs.core.get.call(null,map__35102__$1,new cljs.core.Keyword(null,"currency","currency",-898327568));
var competitive = cljs.core.get.call(null,map__35102__$1,new cljs.core.Keyword(null,"competitive","competitive",2077888403));
var symbols = new cljs.core.PersistentArrayMap(null, 3, ["EUR","\u20AC","GBP ","\u00A3","USD","$"], null);
if(cljs.core.truth_(competitive)){
return "competitive";
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbols.call(null,currency)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(min),"K - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max),"K"].join('');
}
});
demo.components.jobs.card.company_logo = (function demo$components$jobs$card$company_logo(logo){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.company-logo","div.company-logo",1488576546),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),logo,new cljs.core.Keyword(null,"width","width",-384071477),(48),new cljs.core.Keyword(null,"height","height",1025178622),(48)], null)], null)], null);
});
demo.components.jobs.card.company_perks = (function demo$components$jobs$card$company_perks(p__35104){
var map__35105 = p__35104;
var map__35105__$1 = (((((!((map__35105 == null))))?(((((map__35105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35105):map__35105);
var remote = cljs.core.get.call(null,map__35105__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
var role_type = cljs.core.get.call(null,map__35105__$1,new cljs.core.Keyword(null,"role-type","role-type",-741816481));
var sponsorship_offered = cljs.core.get.call(null,map__35105__$1,new cljs.core.Keyword(null,"sponsorship-offered","sponsorship-offered",-2132936845));
var G__35107 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.basic-info--perks","div.basic-info--perks",-1782585150)], null);
var G__35107__$1 = (cljs.core.truth_(remote)?cljs.core.conj.call(null,G__35107,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Remote"], null)):G__35107);
var G__35107__$2 = ((cljs.core.not_EQ_.call(null,role_type,"Full time"))?cljs.core.conj.call(null,G__35107__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),role_type], null)):G__35107__$1);
if(cljs.core.truth_(sponsorship_offered)){
return cljs.core.conj.call(null,G__35107__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Sponsorship"], null));
} else {
return G__35107__$2;
}
});
demo.components.jobs.card.basic_info = (function demo$components$jobs$card$basic_info(p__35108){
var map__35109 = p__35108;
var map__35109__$1 = (((((!((map__35109 == null))))?(((((map__35109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35109):map__35109);
var job = map__35109__$1;
var title = cljs.core.get.call(null,map__35109__$1,new cljs.core.Keyword(null,"title","title",636505583));
var location = cljs.core.get.call(null,map__35109__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var company = cljs.core.get.call(null,map__35109__$1,new cljs.core.Keyword(null,"company","company",-340475075));
var remuneration = cljs.core.get.call(null,map__35109__$1,new cljs.core.Keyword(null,"remuneration","remuneration",-1475539285));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.basic-info","div.basic-info",609318059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.basic-info--title","div.basic-info--title",119723725),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.basic-info--company-name","div.basic-info--company-name",1066311429),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(company)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.basic-info--location","div.basic-info--location",1746043206),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"city","city",-393302614).cljs$core$IFn$_invoke$arity$1(location))," , ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"country","country",312965309).cljs$core$IFn$_invoke$arity$1(location))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.jobs.card.company_perks,job], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.basic-info--salary","div.basic-info--salary",-454608861),demo.components.jobs.card.display_salary_offering.call(null,remuneration)], null)], null);
});
demo.components.jobs.card.job_card__header = (function demo$components$jobs$card$job_card__header(p__35111){
var map__35112 = p__35111;
var map__35112__$1 = (((((!((map__35112 == null))))?(((((map__35112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35112):map__35112);
var job = map__35112__$1;
var title = cljs.core.get.call(null,map__35112__$1,new cljs.core.Keyword(null,"title","title",636505583));
var location = cljs.core.get.call(null,map__35112__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var company = cljs.core.get.call(null,map__35112__$1,new cljs.core.Keyword(null,"company","company",-340475075));
var remuneration = cljs.core.get.call(null,map__35112__$1,new cljs.core.Keyword(null,"remuneration","remuneration",-1475539285));
var role_type = cljs.core.get.call(null,map__35112__$1,new cljs.core.Keyword(null,"role-type","role-type",-741816481));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.info","div.info",-1023482078),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.jobs.card.company_logo,new cljs.core.Keyword(null,"logo","logo",1237980263).cljs$core$IFn$_invoke$arity$1(company)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.jobs.card.basic_info,job], null)], null);
});
demo.components.jobs.card.job_card__tags = (function demo$components$jobs$card$job_card__tags(tags){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.tags","ul.tags",845253255)], null),cljs.core.map.call(null,(function (tag){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),tag], null)], null);
}),tags));
});
demo.components.jobs.card.job_card__tagline = (function demo$components$jobs$card$job_card__tagline(tagline){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tagline","div.tagline",2006590068),tagline], null);
});
demo.components.jobs.card.job_card__buttons = (function demo$components$jobs$card$job_card__buttons(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.buttons","div.buttons",-536342249),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button.button--inverted","div.button.button--inverted",-762335060),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"More Info"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),"1-Click Apply"], null)], null);
});
demo.components.jobs.card.job_card = (function demo$components$jobs$card$job_card(p__35114){
var map__35115 = p__35114;
var map__35115__$1 = (((((!((map__35115 == null))))?(((((map__35115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35115):map__35115);
var job = map__35115__$1;
var company = cljs.core.get.call(null,map__35115__$1,new cljs.core.Keyword(null,"company","company",-340475075));
var published = cljs.core.get.call(null,map__35115__$1,new cljs.core.Keyword(null,"published","published",-514587618),true);
var tags = cljs.core.get.call(null,map__35115__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var tagline = cljs.core.get.call(null,map__35115__$1,new cljs.core.Keyword(null,"tagline","tagline",281987682));
var applied = cljs.core.get.call(null,map__35115__$1,new cljs.core.Keyword(null,"applied","applied",-1208896155));
var remuneration = cljs.core.get.call(null,map__35115__$1,new cljs.core.Keyword(null,"remuneration","remuneration",-1475539285));
var user_score = cljs.core.get.call(null,map__35115__$1,new cljs.core.Keyword(null,"user-score","user-score",-661573490));
var display_salary = cljs.core.get.call(null,map__35115__$1,new cljs.core.Keyword(null,"display-salary","display-salary",-1416742221));
var score = cljs.core.get.call(null,map__35115__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var liked = cljs.core.get.call(null,map__35115__$1,new cljs.core.Keyword(null,"liked","liked",-317446025));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["card card--job ","card-border-color-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(5)))," i-cur-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(5)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.jobs.card.job_card__header,job], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.jobs.card.job_card__tags,tags], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.jobs.card.job_card__tagline,tagline], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.jobs.card.job_card__buttons], null)], null);
});

//# sourceMappingURL=card.js.map?rel=1575652719138
