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
main.core.requests_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
main.core.pubnub_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
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
main.core.pubnub_receive_request = (function pubnub_receive_request(message){return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["receiving request =>",message], 0));
});
main.core.pubnub_receive_message = (function pubnub_receive_message(message){return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["receiving message =>",message], 0));
});
main.core.home_view_empty = (function home_view_empty(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63,"The world is full of magical things"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63,"patiently waiting for our wits to grow sharper -- Yeats"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$64,"... waiting for our Hero to arrive"], null)], null);
});
main.core.offer_assistance = (function offer_assistance(request){var name = Hero.Name;var phone = Hero.Phone;var image = Hero.Image;var recipient = cljs.core.get.cljs$core$IFn$_invoke$arity$2(request,"user-id");cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["sending message to ",recipient], 0));
return main.core.pubnub_send_request(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$65,recipient,cljs.core.constant$keyword$66,image,cljs.core.constant$keyword$67,phone,cljs.core.constant$keyword$68,name,cljs.core.constant$keyword$69,main.core.user_id], null));
});
main.core.home_view_waiting = (function home_view_waiting(requests){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63,"Someone approaches in need of help."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$45,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$71,"center",cljs.core.constant$keyword$72,"50px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$44,"btn btn-primary",cljs.core.constant$keyword$73,(function (){return main.core.offer_assistance(cljs.core.take((1),requests));
})], null),"Offer Assistance"], null)], null)], null);
});
main.core.home_view_request_content = (function home_view_request_content(request){var request_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(request,"request-type");if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_type,"new-report"))
{return "A Salesforce subscriber needs help creating a new report.";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_type,"new-dashboard"))
{return "A Salesforce subscriber needs help creating a new dashboard.";
} else
{if(cljs.core.constant$keyword$6)
{return "Not Yet Implemented";
} else
{return null;
}
}
}
});
main.core.home_view_request = (function home_view_request(request){cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([request], 0));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$44,"bs-callout bs-callout-info"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$75,main.core.home_view_request_content(request)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$77,"button",cljs.core.constant$keyword$44,"btn btn-primary",cljs.core.constant$keyword$78,"Provide Help"], null)], null)], null);
});
main.core.home_view_requests = (function home_view_requests(requests){cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["rendering home-view-requests",requests], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70,(function (){var iter__4269__auto__ = (function iter__5205(s__5206){return (new cljs.core.LazySeq(null,(function (){var s__5206__$1 = s__5206;while(true){
var temp__4126__auto__ = cljs.core.seq(s__5206__$1);if(temp__4126__auto__)
{var s__5206__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__5206__$2))
{var c__4267__auto__ = cljs.core.chunk_first(s__5206__$2);var size__4268__auto__ = cljs.core.count(c__4267__auto__);var b__5208 = cljs.core.chunk_buffer(size__4268__auto__);if((function (){var i__5207 = (0);while(true){
if((i__5207 < size__4268__auto__))
{var request = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4267__auto__,i__5207);cljs.core.chunk_append(b__5208,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_view_request,request], null));
{
var G__5209 = (i__5207 + (1));
i__5207 = G__5209;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__5208),iter__5205(cljs.core.chunk_rest(s__5206__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__5208),null);
}
} else
{var request = cljs.core.first(s__5206__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_view_request,request], null),iter__5205(cljs.core.rest(s__5206__$2)));
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
main.core.home_view = (function home_view(requests){if(cljs.core.empty_QMARK_(requests))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_view_empty], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_view_waiting,requests], null);
}
});
main.core.app_view = (function app_view(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_view,cljs.core.deref(main.core.requests_state)], null)], null);
});
main.core.update_requests = (function update_requests(){cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["updating requests"], 0));
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("/api/requests/open",cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$36,(function (val){return cljs.core.reset_BANG_(main.core.requests_state,val);
})], null)], 0));
});
main.core.update_requests_forever = (function update_requests_forever(){main.core.update_requests();
return setTimeout((function (){return update_requests_forever();
}),(5000));
});
main.core.app_boot = (function app_boot(){cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["initializing pubnub"], 0));
cljs.core.reset_BANG_(main.core.pubnub_state,PUBNUB.init(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$80,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(main.core.keys_state,"pubnub-publish-key"),cljs.core.constant$keyword$81,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(main.core.keys_state,"pubnub-subscribe-key"),cljs.core.constant$keyword$82,true], null))));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["subscribing to requests channel"], 0));
cljs.core.deref(main.core.pubnub_state).subscribe(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$60,"requests",cljs.core.constant$keyword$83,(function (){return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Connected to requests channel via TLS"], 0));
}),cljs.core.constant$keyword$61,(function (m){return main.core.pubnub_receive_request(m);
})], null)));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["subscribing to private channel"], 0));
cljs.core.deref(main.core.pubnub_state).subscribe(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$60,main.core.user_id,cljs.core.constant$keyword$83,(function (){return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Connected to private channel,",main.core.user_id,", via TLS"], 0));
}),cljs.core.constant$keyword$61,(function (m){return main.core.pubnub_receive_message(m);
})], null)));
return main.core.update_requests_forever();
});
main.core.app_view_with_callback = cljs.core.with_meta(main.core.app_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$84,(function (){return main.core.app_boot();
})], null));
reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.app_view_with_callback], null),document.getElementById("app"));
