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
main.core.requests_state = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
main.core.pubnub_state = reagent.core.atom.call(null,null);
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
main.core.pubnub_receive_request = (function pubnub_receive_request(message){return cljs.core.println.call(null,"receiving request =>",message);
});
main.core.pubnub_receive_message = (function pubnub_receive_message(message){return cljs.core.println.call(null,"receiving message =>",message);
});
main.core.home_view_empty = (function home_view_empty(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.starter-template","div.starter-template",-1078949663),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"The world is full of magical things"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"patiently waiting for our wits to grow sharper -- Yeats"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"... waiting for our Hero to arrive"], null)], null);
});
main.core.offer_assistance = (function offer_assistance(request){var name = Hero.Name;var phone = Hero.Phone;var image = Hero.Image;var recipient = cljs.core.get.call(null,request,"user-id");cljs.core.println.call(null,"sending message to ",recipient);
return main.core.pubnub_send_request.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"recipient","recipient",1650072234),recipient,new cljs.core.Keyword(null,"image","image",-58725096),image,new cljs.core.Keyword(null,"phone","phone",-763596057),phone,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"user-id","user-id",-206822291),main.core.user_id], null));
});
main.core.home_view_waiting = (function home_view_waiting(requests){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.starter-template","div.starter-template",-1078949663),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Someone approaches in need of help."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"50px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return main.core.offer_assistance.call(null,cljs.core.take.call(null,(1),requests));
})], null),"Offer Assistance"], null)], null)], null);
});
main.core.home_view_request_content = (function home_view_request_content(request){var request_type = cljs.core.get.call(null,request,"request-type");if(cljs.core._EQ_.call(null,request_type,"new-report"))
{return "A Salesforce subscriber needs help creating a new report.";
} else
{if(cljs.core._EQ_.call(null,request_type,"new-dashboard"))
{return "A Salesforce subscriber needs help creating a new dashboard.";
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return "Not Yet Implemented";
} else
{return null;
}
}
}
});
main.core.home_view_request = (function home_view_request(request){cljs.core.println.call(null,request);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero-request","div.hero-request",891235228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bs-callout bs-callout-info"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),main.core.home_view_request_content.call(null,request)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary",new cljs.core.Keyword(null,"value","value",305978217),"Provide Help"], null)], null)], null);
});
main.core.home_view_requests = (function home_view_requests(requests){cljs.core.println.call(null,"rendering home-view-requests",requests);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4269__auto__ = (function iter__5924(s__5925){return (new cljs.core.LazySeq(null,(function (){var s__5925__$1 = s__5925;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5925__$1);if(temp__4126__auto__)
{var s__5925__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5925__$2))
{var c__4267__auto__ = cljs.core.chunk_first.call(null,s__5925__$2);var size__4268__auto__ = cljs.core.count.call(null,c__4267__auto__);var b__5927 = cljs.core.chunk_buffer.call(null,size__4268__auto__);if((function (){var i__5926 = (0);while(true){
if((i__5926 < size__4268__auto__))
{var request = cljs.core._nth.call(null,c__4267__auto__,i__5926);cljs.core.chunk_append.call(null,b__5927,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_view_request,request], null));
{
var G__5928 = (i__5926 + (1));
i__5926 = G__5928;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5927),iter__5924.call(null,cljs.core.chunk_rest.call(null,s__5925__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5927),null);
}
} else
{var request = cljs.core.first.call(null,s__5925__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_view_request,request], null),iter__5924.call(null,cljs.core.rest.call(null,s__5925__$2)));
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
main.core.home_view = (function home_view(requests){if(cljs.core.empty_QMARK_.call(null,requests))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_view_empty], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_view_waiting,requests], null);
}
});
main.core.app_view = (function app_view(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero-app","div.hero-app",2049636097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home_view,cljs.core.deref.call(null,main.core.requests_state)], null)], null);
});
main.core.update_requests = (function update_requests(){cljs.core.println.call(null,"updating requests");
return ajax.core.GET.call(null,"/api/requests/open",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (val){return cljs.core.reset_BANG_.call(null,main.core.requests_state,val);
})], null));
});
main.core.update_requests_forever = (function update_requests_forever(){main.core.update_requests.call(null);
return setTimeout((function (){return update_requests_forever.call(null);
}),(5000));
});
main.core.app_boot = (function app_boot(){cljs.core.println.call(null,"initializing pubnub");
cljs.core.reset_BANG_.call(null,main.core.pubnub_state,PUBNUB.init(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"publish_key","publish_key",1745690843),cljs.core.get_in.call(null,main.core.keys_state,"pubnub-publish-key"),new cljs.core.Keyword(null,"subscribe_key","subscribe_key",338349985),cljs.core.get_in.call(null,main.core.keys_state,"pubnub-subscribe-key"),new cljs.core.Keyword(null,"ssl","ssl",-1781962783),true], null))));
cljs.core.println.call(null,"subscribing to requests channel");
cljs.core.deref.call(null,main.core.pubnub_state).subscribe(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"channel","channel",734187692),"requests",new cljs.core.Keyword(null,"connect","connect",1232828233),(function (){return cljs.core.println.call(null,"Connected to requests channel via TLS");
}),new cljs.core.Keyword(null,"message","message",-406056002),(function (m){return main.core.pubnub_receive_request.call(null,m);
})], null)));
cljs.core.println.call(null,"subscribing to private channel");
cljs.core.deref.call(null,main.core.pubnub_state).subscribe(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"channel","channel",734187692),main.core.user_id,new cljs.core.Keyword(null,"connect","connect",1232828233),(function (){return cljs.core.println.call(null,"Connected to private channel,",main.core.user_id,", via TLS");
}),new cljs.core.Keyword(null,"message","message",-406056002),(function (m){return main.core.pubnub_receive_message.call(null,m);
})], null)));
return main.core.update_requests_forever.call(null);
});
main.core.app_view_with_callback = cljs.core.with_meta.call(null,main.core.app_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){return main.core.app_boot.call(null);
})], null));
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.app_view_with_callback], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map