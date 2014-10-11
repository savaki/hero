// Compiled by ClojureScript 0.0-2280
goog.provide('main.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_();
main.core.status_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
main.core.page_ids = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hero-task-feedback","hero-task-detail","hero-task-match","hero-task-detail","hero-task-search","hero-task-select","hero-home"], null));
main.core.task_types = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["new-report","new-dashboard","custom-report","show-me-how","talk-to-expert"], null));
main.core.requests_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
main.core.deactivate_page = (function deactivate_page(id){cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["deactivating page",id], 0));
var element = document.getElementById(id);return element.className = "hero-page";
});
main.core.activate_page = (function activate_page(id){var seq__5205_5209 = cljs.core.seq(cljs.core.deref(main.core.page_ids));var chunk__5206_5210 = null;var count__5207_5211 = (0);var i__5208_5212 = (0);while(true){
if((i__5208_5212 < count__5207_5211))
{var page_id_5213 = chunk__5206_5210.cljs$core$IIndexed$_nth$arity$2(null,i__5208_5212);main.core.deactivate_page(page_id_5213);
{
var G__5214 = seq__5205_5209;
var G__5215 = chunk__5206_5210;
var G__5216 = count__5207_5211;
var G__5217 = (i__5208_5212 + (1));
seq__5205_5209 = G__5214;
chunk__5206_5210 = G__5215;
count__5207_5211 = G__5216;
i__5208_5212 = G__5217;
continue;
}
} else
{var temp__4126__auto___5218 = cljs.core.seq(seq__5205_5209);if(temp__4126__auto___5218)
{var seq__5205_5219__$1 = temp__4126__auto___5218;if(cljs.core.chunked_seq_QMARK_(seq__5205_5219__$1))
{var c__4300__auto___5220 = cljs.core.chunk_first(seq__5205_5219__$1);{
var G__5221 = cljs.core.chunk_rest(seq__5205_5219__$1);
var G__5222 = c__4300__auto___5220;
var G__5223 = cljs.core.count(c__4300__auto___5220);
var G__5224 = (0);
seq__5205_5209 = G__5221;
chunk__5206_5210 = G__5222;
count__5207_5211 = G__5223;
i__5208_5212 = G__5224;
continue;
}
} else
{var page_id_5225 = cljs.core.first(seq__5205_5219__$1);main.core.deactivate_page(page_id_5225);
{
var G__5226 = cljs.core.next(seq__5205_5219__$1);
var G__5227 = null;
var G__5228 = (0);
var G__5229 = (0);
seq__5205_5209 = G__5226;
chunk__5206_5210 = G__5227;
count__5207_5211 = G__5228;
i__5208_5212 = G__5229;
continue;
}
}
} else
{}
}
break;
}
var element = document.getElementById(id);cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["activating page",id], 0));
element.className = "hero-page hero-active";
return Velocity(element,"transition.slideRightBigIn",(400));
});
main.core.task_item = (function task_item(task_type){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$60,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$61], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62,task_type], null)], null);
});
main.core.partner_item = (function partner_item(partner_item__$1){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63,"I will be the partner"], null);
});
main.core.task_feedback_view = (function task_feedback_view(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$64,"I hold feedback"], null);
});
main.core.task_detail_view = (function task_detail_view(){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$65,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_item,"new-report"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.partner_item], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$66,"and more goodness"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$67,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$68,(function (){return main.core.activate_page("hero-task-feedback");
})], null),"lastly, give feedback"], null)], null);
});
main.core.task_match_view = (function task_match_view(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_item,"new-report"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.partner_item], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$67,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$68,(function (){return main.core.activate_page("hero-task-detail");
})], null),"accept the match"], null)], null);
});
main.core.task_search_view = (function task_search_view(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_item,"new-report"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$67,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$68,(function (){return main.core.activate_page("hero-task-match");
})], null),"assume match"], null)], null);
});
main.core.task_select_item = (function task_select_item(task_type){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$68,(function (){return main.core.activate_page("hero-task-search");
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_item,task_type], null)], null);
});
main.core.task_select_view = (function task_select_view(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$72,(function (){var iter__4269__auto__ = (function iter__5234(s__5235){return (new cljs.core.LazySeq(null,(function (){var s__5235__$1 = s__5235;while(true){
var temp__4126__auto__ = cljs.core.seq(s__5235__$1);if(temp__4126__auto__)
{var s__5235__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__5235__$2))
{var c__4267__auto__ = cljs.core.chunk_first(s__5235__$2);var size__4268__auto__ = cljs.core.count(c__4267__auto__);var b__5237 = cljs.core.chunk_buffer(size__4268__auto__);if((function (){var i__5236 = (0);while(true){
if((i__5236 < size__4268__auto__))
{var task_type = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4267__auto__,i__5236);cljs.core.chunk_append(b__5237,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_select_item,task_type], null));
{
var G__5238 = (i__5236 + (1));
i__5236 = G__5238;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__5237),iter__5234(cljs.core.chunk_rest(s__5235__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__5237),null);
}
} else
{var task_type = cljs.core.first(s__5235__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_select_item,task_type], null),iter__5234(cljs.core.rest(s__5235__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4269__auto__(cljs.core.deref(main.core.task_types));
})()], null);
});
main.core.request_button_view = (function request_button_view(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$73,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$68,(function (){return main.core.activate_page("hero-task-select");
})], null),"Get Started"], null);
});
main.core.home_feed_first_time = (function home_feed_first_time(){return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$75,"Worker Smarter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"Get Things Done."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"Securely, Reliably, and Quickly."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$77,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$77,"do this"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"and this"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"and you're done"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$80,"We Do"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$81,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$82,"Make Reports"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$82,"Make Dashboards"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$82,"Teach You How"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$80,"So That You Can"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$81,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$82,"Be The Hero"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$82,"Accomplish Amazing Things"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$82,"Get The Most From Salesforce"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$83,"Why Salesforce Hero"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$44,"clearfix"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$80,"Validation #1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$80,"Validation #2"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$80,"Validation #3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$80,"Validation #4"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$66,"Meet Matt"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"Ready to Start"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.request_button_view], null)], null);
});
main.core.home_feed_default = (function home_feed_default(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$66,"you've been here before"], null);
});
main.core.home_feed_view = (function home_feed_view(requests){if(cljs.core.empty_QMARK_(requests))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_feed_first_time], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_feed_default], null);
}
});
main.core.home_header_view = (function home_header_view(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$85,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$86,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$44,"more"], null),"pic here"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$87,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$44,"clearfix"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$88,"Salesforce Hero"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$89,"Get Things Done"], null)], null)], null)], null);
});
main.core.home_view = (function home_view(requests){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$90,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$44,"hero-active"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_header_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.request_button_view], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_feed_view,requests], null)], null);
});
main.core.app_view = (function app_view(){return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$91,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_view,cljs.core.deref(main.core.requests_state)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_select_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_search_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_match_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_detail_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_feedback_view], null)], null);
});
main.core.app_view_with_callback = cljs.core.with_meta(main.core.app_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$92,(function (){return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("https://hero-master-herokuapp-com.global.ssl.fastly.net/check/cors",cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$36,(function (status){return cljs.core.reset_BANG_(main.core.status_state,status);
})], null)], 0));
})], null));
reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.app_view_with_callback], null),document.getElementById("app"));
main.core.app_view = (function app_view(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$66,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$93,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$75,"Hello World"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$94,"this is a page"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$95,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$96,"button",cljs.core.constant$keyword$68,(function (){return main.core.activate_page("sample");
}),cljs.core.constant$keyword$97,"click me"], null)], null)], null);
});
