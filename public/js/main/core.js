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
main.core.task_types = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Create a New Report","Find a Screencast","Need a Question Answered"], null));
main.core.seconds_elapsed = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
main.core.current_request_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, ["user-id",main.core.user_id,"status",null,"task-type",null], null));
main.core.requests_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
main.core.pubnub_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
main.core.current_request_provider = (function current_request_provider(){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(main.core.current_request_state),"provider");
});
main.core.page_state_class = (function page_state_class(page_id){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,cljs.core.deref(main.core.page_id_state)))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$44,"hero-active"], null);
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
main.core.pubnub_send_request = (function pubnub_send_request(message){return cljs.core.deref(main.core.pubnub_state).publish(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$60,"requests",cljs.core.constant$keyword$61,new cljs.core.PersistentArrayMap(null, 1, ["text",message], null)], null)));
});
main.core.pubnub_send_message = (function pubnub_send_message(recipient,message){return cljs.core.deref(main.core.pubnub_state).publish(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$60,recipient,cljs.core.constant$keyword$61,new cljs.core.PersistentArrayMap(null, 1, ["text",message], null)], null)));
});
main.core.pubnub_receive_request = (function pubnub_receive_request(message){var image = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(message,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text","image"], null));var user_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(message,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text","user-id"], null));var name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(message,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text","name"], null));var phone = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(message,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text","phone"], null));var provider = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$62,name,cljs.core.constant$keyword$63,user_id,cljs.core.constant$keyword$64,image,cljs.core.constant$keyword$65,phone], null);cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["received provider",provider], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.core.current_request_state,cljs.core.assoc,"status","offered");
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.core.current_request_state,cljs.core.assoc,"provider",provider);
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
cljs.core.reset_BANG_(main.core.seconds_elapsed,(0));
var element = document.getElementById(id);cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["activating page",id], 0));
setTimeout(((function (element){
return (function (){return cljs.core.reset_BANG_(main.core.page_id_state,id);
});})(element))
,(500));
element.className = "hero-page hero-active";
return Velocity(element,"transition.slideRightBigIn",(400));
});
main.core.cancel_to_home = (function cancel_to_home(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$66,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$67,(function (){return main.core.activate_page("hero-home");
})], null),"Cancel"], null);
});
main.core.back_to_home = (function back_to_home(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$66,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$67,(function (){return main.core.activate_page("hero-home");
})], null),"Back"], null);
});
main.core.home_header_view = (function home_header_view(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$68,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$44,"more"], null),""], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$44,"clearfix"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71,"Salesforce Hero"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$72,"Get Things Done"], null)], null)], null);
});
main.core.hero_header_view = (function hero_header_view(title,left_component,right_component){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$73,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [left_component], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$75,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [right_component], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$77,title], null)], null)], null);
});
main.core.task_item = (function task_item(task_type){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$80,task_type], null)], null);
});
main.core.partner_item = (function partner_item(partner_item__$1){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$81,"I will be the partner"], null);
});
main.core.noop = (function noop(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$82,"no-op"], null);
});
main.core.blank = (function blank(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$82,""], null);
});
main.core.task_feedback_view = (function task_feedback_view(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$83,main.core.page_state_class("hero-task-feedback"),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.hero_header_view,"Request Item",main.core.cancel_to_home,main.core.blank], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,"I hold feedback"], null)], null);
});
main.core.task_detail_view = (function task_detail_view(){return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$85,main.core.page_state_class("hero-task-detail"),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.hero_header_view,"Details",main.core.cancel_to_home,main.core.blank], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_item,"new-report"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.partner_item], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,"and more goodness"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$86,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$67,(function (){return main.core.activate_page("hero-task-feedback");
})], null),"lastly, give feedback"], null)], null);
});
main.core.task_match_view = (function task_match_view(){return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$87,main.core.page_state_class("hero-task-match"),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.hero_header_view,"Request Item",main.core.cancel_to_home,main.core.blank], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_item,"new-report"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.partner_item], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$86,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$67,(function (){return main.core.activate_page("hero-task-detail");
})], null),"accept the match"], null)], null);
});
main.core.clear_current_request_BANG_ = (function clear_current_request_BANG_(){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.core.current_request_state,cljs.core.assoc,"provider",null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.core.current_request_state,cljs.core.assoc,"task-type",null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.core.current_request_state,cljs.core.assoc,"status",null);
});
main.core.task_search_find_provider_action = (function task_search_find_provider_action(){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.core.current_request_state,cljs.core.assoc,"status","submitted");
cljs.core.reset_BANG_(main.core.seconds_elapsed,(0));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["finding a provider",cljs.core.deref(main.core.current_request_state)], 0));
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("/api/requests",cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$34,cljs.core.deref(main.core.current_request_state),cljs.core.constant$keyword$38,cljs.core.constant$keyword$88,cljs.core.constant$keyword$36,(function (result){cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["received",result], 0));
cljs.core.reset_BANG_(main.core.current_request_state,result);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("/api/requests",cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$36,(function (entries){return cljs.core.reset_BANG_(main.core.requests_state,entries);
})], null)], 0));
})], null)], 0));
});
main.core.task_search_find_provider = (function task_search_find_provider(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$89,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$90,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$91,"button",cljs.core.constant$keyword$67,(function (){return main.core.task_search_find_provider_action();
})], null),"Find Provider"], null)], null);
});
main.core.task_search_show_provider = (function task_search_show_provider(provider){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$92,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$90,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$91,"button"], null),"Find Provider"], null)], null);
});
main.core.task_search_contents = (function task_search_contents(){var provider = main.core.current_request_provider();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$93,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_search_find_provider], null)], null);
});
main.core.task_search_view_find = (function task_search_view_find(){return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$94,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(main.core.current_request_state),"request-type")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$95,"Find a member in the Salesforce Community who can help right now."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$96], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_search_contents], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$96], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$96], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$95,"Finding a provider is simple and easy."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$95,"Talk with them about your project to make sure they're right for you."], null)], null);
});
main.core.no_provider_view = (function no_provider_view(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$94,"Sorry, looks like there weren't any providers available at this time."], null)], null);
});
main.core.not_looking_good = (function not_looking_good(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$97,"Hmmm."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$97,"Not looking good ..."], null)], null);
});
main.core.keep_your_fingers_crossed = (function keep_your_fingers_crossed(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$97,"Fingers crossed."], null)], null);
});
main.core.countdown = (function countdown(){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(main.core.seconds_elapsed,cljs.core.inc);
return setTimeout((function (){return countdown();
}),(1000));
});
main.core.task_searching_for_provider = (function task_searching_for_provider(){main.core.countdown();
return (function (){var time_remaining = ((60) - cljs.core.deref(main.core.seconds_elapsed));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$94,"Searching for a provider ..."], null),(((time_remaining <= (0)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.no_provider_view], null):((((time_remaining < (58))) && ((time_remaining > (55))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.keep_your_fingers_crossed], null):((((time_remaining < (12))) && ((time_remaining > (5))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.not_looking_good], null):((cljs.core.constant$keyword$6)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$98,time_remaining], null):null))))], null);
});
});
main.core.task_search_provider_offered = (function task_search_provider_offered(){var provider = main.core.current_request_provider();var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(provider,cljs.core.constant$keyword$62);cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([provider], 0));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$94,"Found a Community Member"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$95,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"is standing by, ready to help.  Give me a call and let him know what you'd like.")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$99,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$44,"clearfix"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$101,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$102,cljs.core.get.cljs$core$IFn$_invoke$arity$2(provider,cljs.core.constant$keyword$64)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$103,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$104,cljs.core.get.cljs$core$IFn$_invoke$arity$2(provider,cljs.core.constant$keyword$62)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$105,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$106,("tel:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(provider,cljs.core.constant$keyword$65)))], null),"Call"], null)], null)], null)], null);
});
main.core.task_search_view = (function task_search_view(){return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$107,main.core.page_state_class("hero-task-search"),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["provider is",main.core.current_request_provider()], 0)),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["empty? provider is",cljs.core.empty_QMARK_(main.core.current_request_provider())], 0)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.hero_header_view,"Request",main.core.back_to_home,main.core.blank], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(main.core.current_request_state),"status"),"submitted"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_searching_for_provider], null)], null):((cljs.core.empty_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(main.core.current_request_state),"provider")))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_search_view_find], null):((cljs.core.constant$keyword$6)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_search_provider_offered], null):null)))], null);
});
main.core.select_task_type = (function select_task_type(request_type){cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["selected task type, ",request_type], 0));
setTimeout((function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.core.current_request_state,cljs.core.assoc,"request-type",request_type);
}));
return main.core.activate_page("hero-task-search");
});
main.core.task_select_item = (function task_select_item(task_type){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$108,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$67,(function (){return main.core.select_task_type(task_type);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_item,task_type], null)], null);
});
main.core.chat_input = (function chat_input(){var val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");return ((function (val){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$109,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$91,"text",cljs.core.constant$keyword$110,((function (val){
return (function (p1__5230_SHARP_){return cljs.core.reset_BANG_(val,p1__5230_SHARP_.target.value);
});})(val))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$109,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$91,"button",cljs.core.constant$keyword$111,"Send",cljs.core.constant$keyword$67,((function (val){
return (function (){return main.core.pubnub_send_request(cljs.core.deref(val));
});})(val))
], null)], null)], null);
});
;})(val))
});
main.core.task_select_view = (function task_select_view(){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$112,main.core.page_state_class("hero-task-select"),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.hero_header_view,"Select",main.core.cancel_to_home,main.core.blank], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$94,"I Want To ..."], null),(function (){var iter__4269__auto__ = (function iter__5235(s__5236){return (new cljs.core.LazySeq(null,(function (){var s__5236__$1 = s__5236;while(true){
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
main.core.request_button_view = (function request_button_view(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$90,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$67,(function (){return main.core.activate_page("hero-task-select");
})], null),"Get Started"], null);
});
main.core.home_feed_first_time = (function home_feed_first_time(){return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$113,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$114,"Work Smarter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$115,"Get Things Done."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$116,"Find the help you need when you need it.  Right from your fingertips."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$96], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$115,"Safe and Secure"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$116,"Salesforce Hero keeps your data safe.  Providers only have access to the meta data, never the data itself."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$96], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$115,"Democratizes Salesforce"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$116,"Putting valuable features of Salesforce in the reach of everyone regardless of training."], null)], null);
});
main.core.home_feed_default_item = (function home_feed_default_item(request){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,"something or another",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(request))], null);
});
main.core.home_feed_default = (function home_feed_default(requests){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,(function (){var iter__4269__auto__ = (function iter__5244(s__5245){return (new cljs.core.LazySeq(null,(function (){var s__5245__$1 = s__5245;while(true){
var temp__4126__auto__ = cljs.core.seq(s__5245__$1);if(temp__4126__auto__)
{var s__5245__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__5245__$2))
{var c__4267__auto__ = cljs.core.chunk_first(s__5245__$2);var size__4268__auto__ = cljs.core.count(c__4267__auto__);var b__5247 = cljs.core.chunk_buffer(size__4268__auto__);if((function (){var i__5246 = (0);while(true){
if((i__5246 < size__4268__auto__))
{var request = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4267__auto__,i__5246);cljs.core.chunk_append(b__5247,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_feed_default_item,request], null));
{
var G__5248 = (i__5246 + (1));
i__5246 = G__5248;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__5247),iter__5244(cljs.core.chunk_rest(s__5245__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__5247),null);
}
} else
{var request = cljs.core.first(s__5245__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_feed_default_item,request], null),iter__5244(cljs.core.rest(s__5245__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4269__auto__(requests);
})()], null);
});
main.core.home_feed_view = (function home_feed_view(requests){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_feed_first_time], null);
});
main.core.home_view = (function home_view(requests){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$117,main.core.page_state_class("hero-home"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_header_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.request_button_view], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_feed_view,requests], null)], null);
});
main.core.app_view = (function app_view(){return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$118,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_view,cljs.core.deref(main.core.requests_state)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_select_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_search_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_match_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_detail_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_feedback_view], null)], null);
});
main.core.app_boot = (function app_boot(){cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["initializing pubnub"], 0));
cljs.core.reset_BANG_(main.core.pubnub_state,PUBNUB.init(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$119,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(main.core.keys_state,"pubnub-publish-key"),cljs.core.constant$keyword$120,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(main.core.keys_state,"pubnub-subscribe-key"),cljs.core.constant$keyword$121,true], null))));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["subscribing to requests channel"], 0));
cljs.core.deref(main.core.pubnub_state).subscribe(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$60,"requests",cljs.core.constant$keyword$122,(function (){return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Connected to requests channel via TLS"], 0));
}),cljs.core.constant$keyword$61,(function (m){return main.core.pubnub_receive_request(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(m));
})], null)));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["subscribing to private channel"], 0));
cljs.core.deref(main.core.pubnub_state).subscribe(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$60,main.core.user_id,cljs.core.constant$keyword$122,(function (){return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Connected to private channel,",main.core.user_id,", via TLS"], 0));
}),cljs.core.constant$keyword$61,(function (m){return main.core.pubnub_receive_message(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(m));
})], null)));
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("/api/requests",cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$36,(function (entries){return cljs.core.reset_BANG_(main.core.requests_state,entries);
})], null)], 0));
});
main.core.app_view_with_callback = cljs.core.with_meta(main.core.app_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$123,(function (){return main.core.app_boot();
})], null));
reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.app_view_with_callback], null),document.getElementById("app"));
