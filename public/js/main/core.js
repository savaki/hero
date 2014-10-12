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
main.core.keys_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$60,Hero.PubNubPublishKey,cljs.core.constant$keyword$61,Hero.PubNubPublishKey], null));
main.core.status_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
main.core.page_ids = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hero-task-feedback","hero-task-detail","hero-task-match","hero-task-detail","hero-task-search","hero-task-select","hero-home"], null));
main.core.task_types = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["new-report","new-dashboard","custom-report","show-me-how","talk-to-expert"], null));
main.core.requests_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
main.core.pubnub_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
/**
* @param {...*} var_args
*/
main.core.log = (function() { 
var log__delegate = function (more){return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__5201_SHARP_){if((function (){var G__5203 = p1__5201_SHARP_;if(G__5203)
{var bit__4194__auto__ = null;if(cljs.core.truth_((function (){var or__3544__auto__ = bit__4194__auto__;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return G__5203.cljs$core$ISeqable$;
}
})()))
{return true;
} else
{if((!G__5203.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__5203);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__5203);
}
})())
{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__5201_SHARP_], 0));
} else
{return p1__5201_SHARP_;
}
}),more)));
};
var log = function (var_args){
var more = null;if (arguments.length > 0) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,more);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__5204){
var more = cljs.core.seq(arglist__5204);
return log__delegate(more);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
main.core.pubnub_send_request = (function pubnub_send_request(message){return cljs.core.deref(main.core.pubnub_state).publish(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$62,"requests",cljs.core.constant$keyword$63,new cljs.core.PersistentArrayMap(null, 1, ["text",message], null)], null)));
});
main.core.pubnub_send_message = (function pubnub_send_message(recipient,message){return cljs.core.deref(main.core.pubnub_state).publish(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$62,recipient,cljs.core.constant$keyword$63,new cljs.core.PersistentArrayMap(null, 1, ["text",message], null)], null)));
});
main.core.pubnub_receive_request = (function pubnub_receive_request(message){return main.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["receiving request =>",message], 0));
});
main.core.pubnub_receive_message = (function pubnub_receive_message(message){return main.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["receiving message =>",message], 0));
});
main.core.deactivate_page = (function deactivate_page(id){main.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["deactivating page",id], 0));
var element = document.getElementById(id);return element.className = "hero-page";
});
main.core.activate_page = (function activate_page(id){var seq__5209_5213 = cljs.core.seq(cljs.core.deref(main.core.page_ids));var chunk__5210_5214 = null;var count__5211_5215 = (0);var i__5212_5216 = (0);while(true){
if((i__5212_5216 < count__5211_5215))
{var page_id_5217 = chunk__5210_5214.cljs$core$IIndexed$_nth$arity$2(null,i__5212_5216);main.core.deactivate_page(page_id_5217);
{
var G__5218 = seq__5209_5213;
var G__5219 = chunk__5210_5214;
var G__5220 = count__5211_5215;
var G__5221 = (i__5212_5216 + (1));
seq__5209_5213 = G__5218;
chunk__5210_5214 = G__5219;
count__5211_5215 = G__5220;
i__5212_5216 = G__5221;
continue;
}
} else
{var temp__4126__auto___5222 = cljs.core.seq(seq__5209_5213);if(temp__4126__auto___5222)
{var seq__5209_5223__$1 = temp__4126__auto___5222;if(cljs.core.chunked_seq_QMARK_(seq__5209_5223__$1))
{var c__4300__auto___5224 = cljs.core.chunk_first(seq__5209_5223__$1);{
var G__5225 = cljs.core.chunk_rest(seq__5209_5223__$1);
var G__5226 = c__4300__auto___5224;
var G__5227 = cljs.core.count(c__4300__auto___5224);
var G__5228 = (0);
seq__5209_5213 = G__5225;
chunk__5210_5214 = G__5226;
count__5211_5215 = G__5227;
i__5212_5216 = G__5228;
continue;
}
} else
{var page_id_5229 = cljs.core.first(seq__5209_5223__$1);main.core.deactivate_page(page_id_5229);
{
var G__5230 = cljs.core.next(seq__5209_5223__$1);
var G__5231 = null;
var G__5232 = (0);
var G__5233 = (0);
seq__5209_5213 = G__5230;
chunk__5210_5214 = G__5231;
count__5211_5215 = G__5232;
i__5212_5216 = G__5233;
continue;
}
}
} else
{}
}
break;
}
var element = document.getElementById(id);main.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["activating page",id], 0));
element.className = "hero-page hero-active";
return Velocity(element,"transition.slideRightBigIn",(400));
});
main.core.home_header_view = (function home_header_view(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$64,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$65,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$44,"more"], null),"pic here"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$66,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$44,"clearfix"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$67,"Salesforce Hero"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$68,"Get Things Done"], null)], null)], null);
});
main.core.hero_header_view = (function hero_header_view(title,left_component,right_component){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [left_component], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [right_component], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$72,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$73,title], null)], null)], null);
});
main.core.task_item = (function task_item(task_type){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$75], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,task_type], null)], null);
});
main.core.partner_item = (function partner_item(partner_item__$1){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$77,"I will be the partner"], null);
});
main.core.noop = (function noop(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78,"no-op"], null);
});
main.core.blank = (function blank(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78,""], null);
});
main.core.task_feedback_view = (function task_feedback_view(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"I hold feedback"], null);
});
main.core.task_detail_view = (function task_detail_view(){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$80,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_item,"new-report"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.partner_item], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$81,"and more goodness"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$82,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$83,(function (){return main.core.activate_page("hero-task-feedback");
})], null),"lastly, give feedback"], null)], null);
});
main.core.task_match_view = (function task_match_view(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_item,"new-report"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.partner_item], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$82,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$83,(function (){return main.core.activate_page("hero-task-detail");
})], null),"accept the match"], null)], null);
});
main.core.task_search_view = (function task_search_view(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$85,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_item,"new-report"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$82,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$83,(function (){return main.core.activate_page("hero-task-match");
})], null),"assume match"], null)], null);
});
main.core.task_select_item = (function task_select_item(task_type){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$86,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$83,(function (){return main.core.activate_page("hero-task-search");
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_item,task_type], null)], null);
});
main.core.chat_input = (function chat_input(){var val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");return ((function (val){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$81,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$87,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$88,"text",cljs.core.constant$keyword$89,((function (val){
return (function (p1__5234_SHARP_){return cljs.core.reset_BANG_(val,p1__5234_SHARP_.target.value);
});})(val))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$87,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$88,"button",cljs.core.constant$keyword$90,"Send",cljs.core.constant$keyword$83,((function (val){
return (function (){return main.core.pubnub_send_request(cljs.core.deref(val));
});})(val))
], null)], null)], null);
});
;})(val))
});
main.core.task_select_view = (function task_select_view(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$91,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.hero_header_view,"Request Item",main.core.noop,main.core.noop], null),(function (){var iter__4269__auto__ = (function iter__5239(s__5240){return (new cljs.core.LazySeq(null,(function (){var s__5240__$1 = s__5240;while(true){
var temp__4126__auto__ = cljs.core.seq(s__5240__$1);if(temp__4126__auto__)
{var s__5240__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__5240__$2))
{var c__4267__auto__ = cljs.core.chunk_first(s__5240__$2);var size__4268__auto__ = cljs.core.count(c__4267__auto__);var b__5242 = cljs.core.chunk_buffer(size__4268__auto__);if((function (){var i__5241 = (0);while(true){
if((i__5241 < size__4268__auto__))
{var task_type = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4267__auto__,i__5241);cljs.core.chunk_append(b__5242,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_select_item,task_type], null));
{
var G__5243 = (i__5241 + (1));
i__5241 = G__5243;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__5242),iter__5239(cljs.core.chunk_rest(s__5240__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__5242),null);
}
} else
{var task_type = cljs.core.first(s__5240__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_select_item,task_type], null),iter__5239(cljs.core.rest(s__5240__$2)));
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
main.core.request_button_view = (function request_button_view(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$92,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$83,(function (){return main.core.activate_page("hero-task-select");
})], null),"Get Started"], null);
});
main.core.home_feed_first_time = (function home_feed_first_time(){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$93,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$94,"Worker Smarter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$95,"Get Things Done."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$95,"Securely, Reliably, and Quickly."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$96,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis."], null)], null);
});
main.core.home_feed_default = (function home_feed_default(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$81,"you've been here before"], null);
});
main.core.home_feed_view = (function home_feed_view(requests){if(cljs.core.empty_QMARK_(requests))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_feed_first_time], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_feed_default], null);
}
});
main.core.home_view = (function home_view(requests){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$97,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$44,"hero-active"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_header_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.request_button_view], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_feed_view,requests], null)], null);
});
main.core.app_view = (function app_view(){return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$98,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_view,cljs.core.deref(main.core.requests_state)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_select_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_search_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_match_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_detail_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.task_feedback_view], null)], null);
});
main.core.app_boot = (function app_boot(){main.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["booting cljs app"], 0));
cljs.core.reset_BANG_(main.core.pubnub_state,PUBNUB.init(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$99,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(main.core.keys_state,cljs.core.constant$keyword$60),cljs.core.constant$keyword$100,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(main.core.keys_state,cljs.core.constant$keyword$61),cljs.core.constant$keyword$101,true], null))));
cljs.core.deref(main.core.pubnub_state).subscribe(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$62,"requests",cljs.core.constant$keyword$102,(function (){return main.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Connected to requests channel via TLS"], 0));
}),cljs.core.constant$keyword$63,(function (m){return main.core.pubnub_receive_request(m);
})], null)));
cljs.core.deref(main.core.pubnub_state).subscribe(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$62,main.core.user_id,cljs.core.constant$keyword$102,(function (){return main.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Connected to private channel,",main.core.user_id,", via TLS"], 0));
}),cljs.core.constant$keyword$63,(function (m){return main.core.pubnub_receive_message(m);
})], null)));
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("https://hero-master-herokuapp-com.global.ssl.fastly.net/check/cors",cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$36,(function (status){return cljs.core.reset_BANG_(main.core.status_state,status);
})], null)], 0));
});
main.core.app_view_with_callback = cljs.core.with_meta(main.core.app_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$103,(function (){return main.core.app_boot();
})], null));
reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.app_view_with_callback], null),document.getElementById("app"));
