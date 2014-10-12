// Compiled by ClojureScript 0.0-2280
goog.provide('main.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
main.core.user_id = Hero.Id;
main.core.keys_state = (function (){var publish_key = Hero.PubNubPublishKey;var subscribe_key = Hero.PubNubPublishKey;cljs.core.println.call(null,"publish-key is",publish_key);
cljs.core.println.call(null,"subscribe-key is",subscribe_key);
return reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, ["pubnub-publish-key",publish_key,"pubnub-subscribe-key",subscribe_key], null));
})();
main.core.status_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
main.core.page_id_state = reagent.core.atom.call(null,"hero-home");
main.core.page_ids = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hero-task-feedback","hero-task-detail","hero-task-match","hero-task-detail","hero-task-search","hero-task-select","hero-home"], null));
main.core.task_types = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Create a New Report","Find a Screencast","Need a Question Answered"], null));
main.core.seconds_elapsed = reagent.core.atom.call(null,(0));
main.core.current_request_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, ["user-id",main.core.user_id,"status",null,"task-type",null], null));
main.core.requests_state = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
main.core.pubnub_state = reagent.core.atom.call(null,null);
main.core.current_request_provider = (function current_request_provider(){return cljs.core.get.call(null,cljs.core.deref.call(null,main.core.current_request_state),"provider");
});
main.core.page_state_class = (function page_state_class(page_id){if(cljs.core._EQ_.call(null,page_id,cljs.core.deref.call(null,main.core.page_id_state)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hero-active"], null);
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
main.core.pubnub_send_request = (function pubnub_send_request(message){return cljs.core.deref.call(null,main.core.pubnub_state).publish(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"channel","channel",734187692),"requests",new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 1, ["text",message], null)], null)));
});
main.core.pubnub_send_message = (function pubnub_send_message(recipient,message){return cljs.core.deref.call(null,main.core.pubnub_state).publish(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"channel","channel",734187692),recipient,new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 1, ["text",message], null)], null)));
});
main.core.pubnub_receive_request = (function pubnub_receive_request(message){var image = cljs.core.get_in.call(null,message,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text","image"], null));var user_id = cljs.core.get_in.call(null,message,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text","user-id"], null));var name = cljs.core.get_in.call(null,message,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text","name"], null));var phone = cljs.core.get_in.call(null,message,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text","phone"], null));var provider = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"image","image",-58725096),image,new cljs.core.Keyword(null,"phone","phone",-763596057),phone], null);cljs.core.println.call(null,"received provider",provider);
cljs.core.swap_BANG_.call(null,main.core.current_request_state,cljs.core.assoc,"status","offered");
return cljs.core.swap_BANG_.call(null,main.core.current_request_state,cljs.core.assoc,"provider",provider);
});
main.core.pubnub_receive_message = (function pubnub_receive_message(message){return cljs.core.println.call(null,"receiving message =>",message);
});
main.core.deactivate_page = (function deactivate_page(id){cljs.core.println.call(null,"deactivating page",id);
var element = document.getElementById(id);return element.className = "hero-page";
});
main.core.activate_page = (function activate_page(id){var seq__13916_13920 = cljs.core.seq.call(null,cljs.core.deref.call(null,main.core.page_ids));var chunk__13917_13921 = null;var count__13918_13922 = (0);var i__13919_13923 = (0);while(true){
if((i__13919_13923 < count__13918_13922))
{var page_id_13924 = cljs.core._nth.call(null,chunk__13917_13921,i__13919_13923);main.core.deactivate_page.call(null,page_id_13924);
{
var G__13925 = seq__13916_13920;
var G__13926 = chunk__13917_13921;
var G__13927 = count__13918_13922;
var G__13928 = (i__13919_13923 + (1));
seq__13916_13920 = G__13925;
chunk__13917_13921 = G__13926;
count__13918_13922 = G__13927;
i__13919_13923 = G__13928;
continue;
}
} else
{var temp__4126__auto___13929 = cljs.core.seq.call(null,seq__13916_13920);if(temp__4126__auto___13929)
{var seq__13916_13930__$1 = temp__4126__auto___13929;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13916_13930__$1))
{var c__4300__auto___13931 = cljs.core.chunk_first.call(null,seq__13916_13930__$1);{
var G__13932 = cljs.core.chunk_rest.call(null,seq__13916_13930__$1);
var G__13933 = c__4300__auto___13931;
var G__13934 = cljs.core.count.call(null,c__4300__auto___13931);
var G__13935 = (0);
seq__13916_13920 = G__13932;
chunk__13917_13921 = G__13933;
count__13918_13922 = G__13934;
i__13919_13923 = G__13935;
continue;
}
} else
{var page_id_13936 = cljs.core.first.call(null,seq__13916_13930__$1);main.core.deactivate_page.call(null,page_id_13936);
{
var G__13937 = cljs.core.next.call(null,seq__13916_13930__$1);
var G__13938 = null;
var G__13939 = (0);
var G__13940 = (0);
seq__13916_13920 = G__13937;
chunk__13917_13921 = G__13938;
count__13918_13922 = G__13939;
i__13919_13923 = G__13940;
continue;
}
}
} else
{}
}
break;
}
cljs.core.reset_BANG_.call(null,main.core.seconds_elapsed,(0));
var element = document.getElementById(id);cljs.core.println.call(null,"activating page",id);
setTimeout(((function (element){
return (function (){return cljs.core.reset_BANG_.call(null,main.core.page_id_state,id);
});})(element))
,(500));
element.className = "hero-page hero-active";
return Velocity(element,"transition.slideRightBigIn",(400));
});
main.core.cancel_to_home = (function cancel_to_home(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero-cancel","div.hero-cancel",-1874407278),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return main.core.activate_page.call(null,"hero-home");
})], null),"Cancel"], null);
});
main.core.back_to_home = (function back_to_home(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero-cancel","div.hero-cancel",-1874407278),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return main.core.activate_page.call(null,"hero-home");
})], null),"Back"], null);
});
main.core.home_header_view = (function home_header_view(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero-header-home","div.hero-header-home",-460659515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero-avatar","div.hero-avatar",-743932623),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"more"], null),""], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero-title","div.hero-title",336932954),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"clearfix"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero-app-name","div.hero-app-name",-35145919),"Salesforce Hero"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero-tagline","div.hero-tagline",-1038007820),"Get Things Done"], null)], null)], null);
});
main.core.hero_header_view = (function hero_header_view(title,left_component,right_component){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero-header","div.hero-header",591374159),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header-header-left","div.header-header-left",487599836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [left_component], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header-header-right","div.header-header-right",-1289771311),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [right_component], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header-header-title","div.header-header-title",-513784970),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),title], null)], null)], null);
});
main.core.task_item = (function task_item(task_type){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-item","div.task-item",-1998171877),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-image","div.task-image",2141319977)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-name","div.task-name",-2069589809),task_type], null)], null);
});
main.core.partner_item = (function partner_item(partner_item__$1){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.partner-item","div.partner-item",940614597),"I will be the partner"], null);
});
main.core.noop = (function noop(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"no-op"], null);
});
main.core.blank = (function blank(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),""], null);
});
main.core.task_feedback_view = (function task_feedback_view(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#hero-task-feedback.hero-page","div#hero-task-feedback.hero-page",1556326057),main.core.page_state_class.call(null,"hero-task-feedback"),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.hero_header_view,"Request Item",main.core.cancel_to_home,main.core.blank], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"I hold feedback"], null)], null);
});
main.core.task_detail_view = (function task_detail_view(){return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#hero-task-detail.hero-page","div#hero-task-detail.hero-page",-706877729),main.core.page_state_class.call(null,"hero-task-detail"),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.hero_header_view,"Details",main.core.cancel_to_home,main.core.blank], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_item,"new-report"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.partner_item], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"and more goodness"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return main.core.activate_page.call(null,"hero-task-feedback");
})], null),"lastly, give feedback"], null)], null);
});
main.core.task_match_view = (function task_match_view(){return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#hero-task-match.hero-page","div#hero-task-match.hero-page",72829599),main.core.page_state_class.call(null,"hero-task-match"),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.hero_header_view,"Request Item",main.core.cancel_to_home,main.core.blank], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_item,"new-report"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.partner_item], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return main.core.activate_page.call(null,"hero-task-detail");
})], null),"accept the match"], null)], null);
});
main.core.clear_current_request_BANG_ = (function clear_current_request_BANG_(){cljs.core.swap_BANG_.call(null,main.core.current_request_state,cljs.core.assoc,"provider",null);
cljs.core.swap_BANG_.call(null,main.core.current_request_state,cljs.core.assoc,"task-type",null);
return cljs.core.swap_BANG_.call(null,main.core.current_request_state,cljs.core.assoc,"status",null);
});
main.core.task_search_find_provider_action = (function task_search_find_provider_action(){cljs.core.swap_BANG_.call(null,main.core.current_request_state,cljs.core.assoc,"status","submitted");
cljs.core.reset_BANG_.call(null,main.core.seconds_elapsed,(0));
cljs.core.println.call(null,"finding a provider",cljs.core.deref.call(null,main.core.current_request_state));
return ajax.core.POST.call(null,"/api/requests",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.deref.call(null,main.core.current_request_state),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (result){cljs.core.println.call(null,"received",result);
cljs.core.reset_BANG_.call(null,main.core.current_request_state,result);
return ajax.core.GET.call(null,"/api/requests",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (entries){return cljs.core.reset_BANG_.call(null,main.core.requests_state,entries);
})], null));
})], null));
});
main.core.task_search_find_provider = (function task_search_find_provider(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero-find-provider","div.hero-find-provider",318714651),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero-button","div.hero-button",-2055243848),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return main.core.task_search_find_provider_action.call(null);
})], null),"Find Provider"], null)], null);
});
main.core.task_search_show_provider = (function task_search_show_provider(provider){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero-show-provider","div.hero-show-provider",-1934120746),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero-button","div.hero-button",-2055243848),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),"Find Provider"], null)], null);
});
main.core.task_search_contents = (function task_search_contents(){var provider = main.core.current_request_provider.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-search-contents","div.task-search-contents",1937280266),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_search_find_provider], null)], null);
});
main.core.task_search_view_find = (function task_search_view_find(){return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.select-task","h2.select-task",2064389946),cljs.core.get.call(null,cljs.core.deref.call(null,main.core.current_request_state),"request-type")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.select-task","p.select-task",761691953),"Find a member in the Salesforce Community who can help right now."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_search_contents], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.select-task","p.select-task",761691953),"Finding a provider is simple and easy."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.select-task","p.select-task",761691953),"Talk with them about your project to make sure they're right for you."], null)], null);
});
main.core.no_provider_view = (function no_provider_view(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.select-task","h2.select-task",2064389946),"Sorry, looks like there weren't any providers available at this time."], null)], null);
});
main.core.not_looking_good = (function not_looking_good(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.time-remaining-update","h2.time-remaining-update",585850333),"Hmmm."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.time-remaining-update","h2.time-remaining-update",585850333),"Not looking good ..."], null)], null);
});
main.core.keep_your_fingers_crossed = (function keep_your_fingers_crossed(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.time-remaining-update","h2.time-remaining-update",585850333),"Fingers crossed."], null)], null);
});
main.core.countdown = (function countdown(){cljs.core.swap_BANG_.call(null,main.core.seconds_elapsed,cljs.core.inc);
return setTimeout((function (){return countdown.call(null);
}),(1000));
});
main.core.task_searching_for_provider = (function task_searching_for_provider(){main.core.countdown.call(null);
return (function (){var time_remaining = ((60) - cljs.core.deref.call(null,main.core.seconds_elapsed));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.select-task","h2.select-task",2064389946),"Searching for a provider ..."], null),(((time_remaining <= (0)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.no_provider_view], null):((((time_remaining < (58))) && ((time_remaining > (55))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.keep_your_fingers_crossed], null):((((time_remaining < (12))) && ((time_remaining > (5))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.not_looking_good], null):((new cljs.core.Keyword(null,"else","else",-1508377146))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.time-remaining","div.time-remaining",1654260941),time_remaining], null):null))))], null);
});
});
main.core.task_search_provider_offered = (function task_search_provider_offered(){var provider = main.core.current_request_provider.call(null);var name = cljs.core.get.call(null,provider,new cljs.core.Keyword(null,"name","name",1843675177));cljs.core.println.call(null,provider);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.select-task","h2.select-task",2064389946),"Found a Community Member"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.select-task","p.select-task",761691953),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"is standing by, ready to help.  Give me a call and let him know what you'd like.")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.provider-container","div.provider-container",772612327),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"clearfix"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.provider-image-container","div.provider-image-container",-1231658774),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.provider-image","img.provider-image",-558433608),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.get.call(null,provider,new cljs.core.Keyword(null,"image","image",-58725096))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.provider-contact-info","div.provider-contact-info",-466967251),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.provider-name","div.provider-name",1148344499),cljs.core.get.call(null,provider,new cljs.core.Keyword(null,"name","name",1843675177))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.provider-phone","a.provider-phone",-1610271328),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("tel:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,provider,new cljs.core.Keyword(null,"phone","phone",-763596057))))], null),"Call"], null)], null)], null)], null);
});
main.core.task_search_view = (function task_search_view(){return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#hero-task-search.hero-page","div#hero-task-search.hero-page",-1769101774),main.core.page_state_class.call(null,"hero-task-search"),cljs.core.println.call(null,"provider is",main.core.current_request_provider.call(null)),cljs.core.println.call(null,"empty? provider is",cljs.core.empty_QMARK_.call(null,main.core.current_request_provider.call(null))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.hero_header_view,"Request",main.core.back_to_home,main.core.blank], null),((cljs.core._EQ_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,main.core.current_request_state),"status"),"submitted"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_searching_for_provider], null)], null):((cljs.core.empty_QMARK_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,main.core.current_request_state),"provider")))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_search_view_find], null):((new cljs.core.Keyword(null,"else","else",-1508377146))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_search_provider_offered], null):null)))], null);
});
main.core.select_task_type = (function select_task_type(request_type){cljs.core.println.call(null,"selected task type, ",request_type);
setTimeout((function (){return cljs.core.swap_BANG_.call(null,main.core.current_request_state,cljs.core.assoc,"request-type",request_type);
}));
return main.core.activate_page.call(null,"hero-task-search");
});
main.core.task_select_item = (function task_select_item(task_type){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.task-select-item","a.task-select-item",524206106),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return main.core.select_task_type.call(null,task_type);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_item,task_type], null)], null);
});
main.core.chat_input = (function chat_input(){var val = reagent.core.atom.call(null,"");return ((function (val){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val){
return (function (p1__13941_SHARP_){return cljs.core.reset_BANG_.call(null,val,p1__13941_SHARP_.target.value);
});})(val))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Send",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (val){
return (function (){return main.core.pubnub_send_request.call(null,cljs.core.deref.call(null,val));
});})(val))
], null)], null)], null);
});
;})(val))
});
main.core.task_select_view = (function task_select_view(){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#hero-task-select.hero-page","div#hero-task-select.hero-page",-1586115481),main.core.page_state_class.call(null,"hero-task-select"),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.hero_header_view,"Select",main.core.cancel_to_home,main.core.blank], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.select-task","h2.select-task",2064389946),"I Want To ..."], null),(function (){var iter__4269__auto__ = (function iter__13946(s__13947){return (new cljs.core.LazySeq(null,(function (){var s__13947__$1 = s__13947;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13947__$1);if(temp__4126__auto__)
{var s__13947__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13947__$2))
{var c__4267__auto__ = cljs.core.chunk_first.call(null,s__13947__$2);var size__4268__auto__ = cljs.core.count.call(null,c__4267__auto__);var b__13949 = cljs.core.chunk_buffer.call(null,size__4268__auto__);if((function (){var i__13948 = (0);while(true){
if((i__13948 < size__4268__auto__))
{var task_type = cljs.core._nth.call(null,c__4267__auto__,i__13948);cljs.core.chunk_append.call(null,b__13949,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_select_item,task_type], null));
{
var G__13950 = (i__13948 + (1));
i__13948 = G__13950;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13949),iter__13946.call(null,cljs.core.chunk_rest.call(null,s__13947__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13949),null);
}
} else
{var task_type = cljs.core.first.call(null,s__13947__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_select_item,task_type], null),iter__13946.call(null,cljs.core.rest.call(null,s__13947__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4269__auto__.call(null,cljs.core.deref.call(null,main.core.task_types));
})()], null);
});
main.core.request_button_view = (function request_button_view(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero-button","div.hero-button",-2055243848),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return main.core.activate_page.call(null,"hero-task-select");
})], null),"Get Started"], null);
});
main.core.home_feed_first_time = (function home_feed_first_time(){return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.newbie","div.newbie",-1121056860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Work Smarter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Get Things Done."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Find the help you need when you need it.  Right from your fingertips."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Safe and Secure"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Salesforce Hero keeps your data safe.  Providers only have access to the meta data, never the data itself."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Democratizes Salesforce"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Putting valuable features of Salesforce in the reach of everyone regardless of training."], null)], null);
});
main.core.home_feed_default_item = (function home_feed_default_item(request){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"something or another",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(request))], null);
});
main.core.home_feed_default = (function home_feed_default(requests){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4269__auto__ = (function iter__13955(s__13956){return (new cljs.core.LazySeq(null,(function (){var s__13956__$1 = s__13956;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13956__$1);if(temp__4126__auto__)
{var s__13956__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13956__$2))
{var c__4267__auto__ = cljs.core.chunk_first.call(null,s__13956__$2);var size__4268__auto__ = cljs.core.count.call(null,c__4267__auto__);var b__13958 = cljs.core.chunk_buffer.call(null,size__4268__auto__);if((function (){var i__13957 = (0);while(true){
if((i__13957 < size__4268__auto__))
{var request = cljs.core._nth.call(null,c__4267__auto__,i__13957);cljs.core.chunk_append.call(null,b__13958,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_feed_default_item,request], null));
{
var G__13959 = (i__13957 + (1));
i__13957 = G__13959;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13958),iter__13955.call(null,cljs.core.chunk_rest.call(null,s__13956__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13958),null);
}
} else
{var request = cljs.core.first.call(null,s__13956__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_feed_default_item,request], null),iter__13955.call(null,cljs.core.rest.call(null,s__13956__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4269__auto__.call(null,requests);
})()], null);
});
main.core.home_feed_view = (function home_feed_view(requests){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_feed_first_time], null);
});
main.core.home_view = (function home_view(requests){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#hero-home.hero-page","div#hero-home.hero-page",-1932169843),main.core.page_state_class.call(null,"hero-home"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_header_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.request_button_view], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_feed_view,requests], null)], null);
});
main.core.app_view = (function app_view(){return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero-app","div.hero-app",2049636097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_view,cljs.core.deref.call(null,main.core.requests_state)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_select_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_search_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_match_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_detail_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_feedback_view], null)], null);
});
main.core.app_boot = (function app_boot(){cljs.core.println.call(null,"initializing pubnub");
cljs.core.reset_BANG_.call(null,main.core.pubnub_state,PUBNUB.init(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"publish_key","publish_key",1745690843),cljs.core.get_in.call(null,main.core.keys_state,"pubnub-publish-key"),new cljs.core.Keyword(null,"subscribe_key","subscribe_key",338349985),cljs.core.get_in.call(null,main.core.keys_state,"pubnub-subscribe-key"),new cljs.core.Keyword(null,"ssl","ssl",-1781962783),true], null))));
cljs.core.println.call(null,"subscribing to requests channel");
cljs.core.deref.call(null,main.core.pubnub_state).subscribe(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"channel","channel",734187692),"requests",new cljs.core.Keyword(null,"connect","connect",1232828233),(function (){return cljs.core.println.call(null,"Connected to requests channel via TLS");
}),new cljs.core.Keyword(null,"message","message",-406056002),(function (m){return main.core.pubnub_receive_request.call(null,cljs.core.js__GT_clj.call(null,m));
})], null)));
cljs.core.println.call(null,"subscribing to private channel");
cljs.core.deref.call(null,main.core.pubnub_state).subscribe(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"channel","channel",734187692),main.core.user_id,new cljs.core.Keyword(null,"connect","connect",1232828233),(function (){return cljs.core.println.call(null,"Connected to private channel,",main.core.user_id,", via TLS");
}),new cljs.core.Keyword(null,"message","message",-406056002),(function (m){return main.core.pubnub_receive_message.call(null,cljs.core.js__GT_clj.call(null,m));
})], null)));
return ajax.core.GET.call(null,"/api/requests",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (entries){return cljs.core.reset_BANG_.call(null,main.core.requests_state,entries);
})], null));
});
main.core.app_view_with_callback = cljs.core.with_meta.call(null,main.core.app_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){return main.core.app_boot.call(null);
})], null));
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.app_view_with_callback], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map