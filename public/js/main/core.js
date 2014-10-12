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
main.core.user_id = Hero.Id;
main.core.keys_state = (function (){var publish_key = Hero.PubNubPublishKey;var subscribe_key = Hero.PubNubPublishKey;cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["publish-key is",publish_key], 0));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["subscribe-key is",subscribe_key], 0));
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["pubnub-publish-key",publish_key,"pubnub-subscribe-key",subscribe_key], null));
})();
main.core.status_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
main.core.page_id_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("hero-home");
main.core.page_ids = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hero-task-feedback","hero-task-detail","hero-task-match","hero-task-detail","hero-task-search","hero-task-select","hero-home"], null));
main.core.task_types = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["new-report","new-dashboard","custom-report","show-me-how","talk-to-expert"], null));
main.core.current_request_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$60,main.core.user_id,cljs.core.constant$keyword$61,cljs.core.PersistentVector.EMPTY], null));
main.core.requests_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
main.core.pubnub_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
main.core.current_request_provider = (function current_request_provider(){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(main.core.current_request_state),cljs.core.constant$keyword$62);
});
main.core.page_state_class = (function page_state_class(page_id){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,cljs.core.deref(main.core.page_id_state)))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$44,"hero-active"], null);
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
main.core.pubnub_send_request = (function pubnub_send_request(message){return cljs.core.deref(main.core.pubnub_state).publish(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$63,"requests",cljs.core.constant$keyword$64,new cljs.core.PersistentArrayMap(null, 1, ["text",message], null)], null)));
});
main.core.pubnub_send_message = (function pubnub_send_message(recipient,message){return cljs.core.deref(main.core.pubnub_state).publish(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$63,recipient,cljs.core.constant$keyword$64,new cljs.core.PersistentArrayMap(null, 1, ["text",message], null)], null)));
});
main.core.pubnub_receive_request = (function pubnub_receive_request(message){return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["receiving request =>",message], 0));
});
main.core.pubnub_receive_message = (function pubnub_receive_message(message){return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["receiving message =>",message], 0));
});
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
setTimeout(((function (element){
return (function (){return cljs.core.reset_BANG_(main.core.page_id_state,id);
});})(element))
,(500));
element.className = "hero-page hero-active";
return Velocity(element,"transition.slideRightBigIn",(400));
});
main.core.cancel_to_home = (function cancel_to_home(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$65,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,(function (){return main.core.activate_page("hero-home");
})], null),"Cancel"], null);
});
main.core.home_header_view = (function home_header_view(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$67,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$68,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$44,"more"], null),"pic here"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$44,"clearfix"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70,"Salesforce Hero"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71,"Get Things Done"], null)], null)], null);
});
main.core.hero_header_view = (function hero_header_view(title,left_component,right_component){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$72,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$73,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [left_component], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [right_component], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$75,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,title], null)], null)], null);
});
main.core.task_item = (function task_item(task_type){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$77,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,task_type], null)], null);
});
main.core.partner_item = (function partner_item(partner_item__$1){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$80,"I will be the partner"], null);
});
main.core.noop = (function noop(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$81,"no-op"], null);
});
main.core.blank = (function blank(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$81,""], null);
});
main.core.task_feedback_view = (function task_feedback_view(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$82,main.core.page_state_class("hero-task-feedback"),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.hero_header_view,"Request Item",main.core.cancel_to_home,main.core.blank], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$83,"I hold feedback"], null)], null);
});
main.core.task_detail_view = (function task_detail_view(){return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,main.core.page_state_class("hero-task-detail"),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.hero_header_view,"Request Item",main.core.cancel_to_home,main.core.blank], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_item,"new-report"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.partner_item], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$83,"and more goodness"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$85,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,(function (){return main.core.activate_page("hero-task-feedback");
})], null),"lastly, give feedback"], null)], null);
});
main.core.task_match_view = (function task_match_view(){return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$86,main.core.page_state_class("hero-task-match"),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.hero_header_view,"Request Item",main.core.cancel_to_home,main.core.blank], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_item,"new-report"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.partner_item], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$85,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,(function (){return main.core.activate_page("hero-task-detail");
})], null),"accept the match"], null)], null);
});
main.core.task_search_find_provider = (function task_search_find_provider(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$87,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$88,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$89,"button",cljs.core.constant$keyword$66,(function (){return main.core.pubnub_send_request(cljs.core.deref(main.core.current_request_state));
})], null),"Request Hero"], null)], null);
});
main.core.task_search_show_provider = (function task_search_show_provider(provider){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$90,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$88,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$89,"button"], null),"Request Hero"], null)], null);
});
main.core.task_search_contents = (function task_search_contents(){var provider = main.core.current_request_provider();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$91,((cljs.core.empty_QMARK_(provider))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_search_find_provider], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_search_show_provider,provider], null))], null);
});
main.core.task_search_view = (function task_search_view(){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$92,main.core.page_state_class("hero-task-search"),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.hero_header_view,"Request Item",main.core.cancel_to_home,main.core.blank], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_item,"new-report"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_search_contents], null)], null);
});
main.core.select_task_type = (function select_task_type(task_type){cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["selected task type, ",task_type], 0));
setTimeout((function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.core.current_request_state,cljs.core.assoc,cljs.core.constant$keyword$93,task_type);
}));
return main.core.activate_page("hero-task-search");
});
main.core.task_select_item = (function task_select_item(task_type){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$94,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,(function (){return main.core.select_task_type(task_type);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_item,task_type], null)], null);
});
main.core.chat_input = (function chat_input(){var val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");return ((function (val){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$83,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$95,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$89,"text",cljs.core.constant$keyword$96,((function (val){
return (function (p1__5230_SHARP_){return cljs.core.reset_BANG_(val,p1__5230_SHARP_.target.value);
});})(val))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$95,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$89,"button",cljs.core.constant$keyword$97,"Send",cljs.core.constant$keyword$66,((function (val){
return (function (){return main.core.pubnub_send_request(cljs.core.deref(val));
});})(val))
], null)], null)], null);
});
;})(val))
});
main.core.task_select_view = (function task_select_view(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$98,main.core.page_state_class("hero-task-select"),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.hero_header_view,"Request Item",main.core.cancel_to_home,main.core.blank], null),(function (){var iter__4269__auto__ = (function iter__5235(s__5236){return (new cljs.core.LazySeq(null,(function (){var s__5236__$1 = s__5236;while(true){
var temp__4126__auto__ = cljs.core.seq(s__5236__$1);if(temp__4126__auto__)
{var s__5236__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__5236__$2))
{var c__4267__auto__ = cljs.core.chunk_first(s__5236__$2);var size__4268__auto__ = cljs.core.count(c__4267__auto__);var b__5238 = cljs.core.chunk_buffer(size__4268__auto__);if((function (){var i__5237 = (0);while(true){
if((i__5237 < size__4268__auto__))
{var task_type = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4267__auto__,i__5237);cljs.core.chunk_append(b__5238,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_select_item,task_type], null));
{
var G__5239 = (i__5237 + (1));
i__5237 = G__5239;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__5238),iter__5235(cljs.core.chunk_rest(s__5236__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__5238),null);
}
} else
{var task_type = cljs.core.first(s__5236__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_select_item,task_type], null),iter__5235(cljs.core.rest(s__5236__$2)));
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
main.core.request_button_view = (function request_button_view(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$88,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,(function (){return main.core.activate_page("hero-task-select");
})], null),"Get Started"], null);
});
main.core.home_feed_first_time = (function home_feed_first_time(){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$99,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"Worker Smarter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$101,"Get Things Done."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$101,"Securely, Reliably, and Quickly."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$102,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis."], null)], null);
});
main.core.home_feed_default = (function home_feed_default(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$83,"you've been here before"], null);
});
main.core.home_feed_view = (function home_feed_view(requests){if(cljs.core.empty_QMARK_(requests))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_feed_first_time], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_feed_default], null);
}
});
main.core.home_view = (function home_view(requests){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$103,main.core.page_state_class("hero-home"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_header_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.request_button_view], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_feed_view,requests], null)], null);
});
main.core.app_view = (function app_view(){return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$104,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_view,cljs.core.deref(main.core.requests_state)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_select_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_search_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_match_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_detail_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_feedback_view], null)], null);
});
main.core.app_boot = (function app_boot(){cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["initializing pubnub"], 0));
cljs.core.reset_BANG_(main.core.pubnub_state,PUBNUB.init(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$105,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(main.core.keys_state,"pubnub-publish-key"),cljs.core.constant$keyword$106,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(main.core.keys_state,"pubnub-subscribe-key"),cljs.core.constant$keyword$107,true], null))));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["subscribing to requests channel"], 0));
cljs.core.deref(main.core.pubnub_state).subscribe(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$63,"requests",cljs.core.constant$keyword$108,(function (){return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Connected to requests channel via TLS"], 0));
}),cljs.core.constant$keyword$64,(function (m){return main.core.pubnub_receive_request(m);
})], null)));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["subscribing to private channel"], 0));
cljs.core.deref(main.core.pubnub_state).subscribe(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$63,main.core.user_id,cljs.core.constant$keyword$108,(function (){return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Connected to private channel,",main.core.user_id,", via TLS"], 0));
}),cljs.core.constant$keyword$64,(function (m){return main.core.pubnub_receive_message(m);
})], null)));
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("https://hero-master-herokuapp-com.global.ssl.fastly.net/check/cors",cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$36,(function (status){return cljs.core.reset_BANG_(main.core.status_state,status);
})], null)], 0));
});
main.core.app_view_with_callback = cljs.core.with_meta(main.core.app_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$109,(function (){return main.core.app_boot();
})], null));
reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.app_view_with_callback], null),document.getElementById("app"));
