// Compiled by ClojureScript 0.0-2280
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.Uri');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.structs');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('goog.net.XhrManager');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
ajax.core.AjaxImpl = (function (){var obj5202 = {};return obj5202;
})();
ajax.core._js_ajax_request = (function _js_ajax_request(this$,uri,method,body,headers,handler,opts){if((function (){var and__3532__auto__ = this$;if(and__3532__auto__)
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7;
} else
{return and__3532__auto__;
}
})())
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else
{var x__4171__auto__ = (((this$ == null))?null:this$);return (function (){var or__3544__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (ajax.core._js_ajax_request["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol("AjaxImpl.-js-ajax-request",this$);
}
}
})().call(null,this$,uri,method,body,headers,handler,opts);
}
});
ajax.core.AjaxRequest = (function (){var obj5204 = {};return obj5204;
})();
ajax.core._abort = (function _abort(this$,error_code){if((function (){var and__3532__auto__ = this$;if(and__3532__auto__)
{return this$.ajax$core$AjaxRequest$_abort$arity$2;
} else
{return and__3532__auto__;
}
})())
{return this$.ajax$core$AjaxRequest$_abort$arity$2(this$,error_code);
} else
{var x__4171__auto__ = (((this$ == null))?null:this$);return (function (){var or__3544__auto__ = (ajax.core._abort[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (ajax.core._abort["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol("AjaxRequest.-abort",this$);
}
}
})().call(null,this$,error_code);
}
});
(ajax.core.AjaxImpl["null"] = true);
(ajax.core._js_ajax_request["null"] = (function (this$,uri,method,body,headers,handler,p__5205){var map__5206 = p__5205;var map__5206__$1 = ((cljs.core.seq_QMARK_(map__5206))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5206):map__5206);var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5206__$1,cljs.core.constant$keyword$15);var G__5207 = (new goog.net.XhrIo());goog.events.listen(G__5207,goog.net.EventType.COMPLETE,handler);
G__5207.setTimeoutInterval((function (){var or__3544__auto__ = timeout;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return (0);
}
})());
G__5207.send(uri,method,body,headers);
return G__5207;
}));
goog.net.XhrIo.prototype.ajax$core$AjaxRequest$ = true;
goog.net.XhrIo.prototype.ajax$core$AjaxRequest$_abort$arity$2 = (function (this$,error_code){var this$__$1 = this;return this$__$1.abort(error_code);
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__5208){var map__5209 = p__5208;var map__5209__$1 = ((cljs.core.seq_QMARK_(map__5209))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5209):map__5209);var max_retries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5209__$1,cljs.core.constant$keyword$16);var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5209__$1,cljs.core.constant$keyword$17);var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5209__$1,cljs.core.constant$keyword$15);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5209__$1,cljs.core.constant$keyword$18);var this$__$1 = this;return this$__$1.send(id,uri,method,body,headers,priority,handler,max_retries);
});
ajax.core.abort = (function abort(this$){return ajax.core._abort(this$,goog.net.ErrorCode.ABORT);
});
ajax.core.success_QMARK_ = (function success_QMARK_(status){return cljs.core.some(cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.read_edn = (function read_edn(xhrio){return cljs.reader.read_string(xhrio.getResponseText());
});
ajax.core.edn_response_format = (function edn_response_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$19,ajax.core.read_edn,cljs.core.constant$keyword$20,"EDN"], null);
});
ajax.core.edn_request_format = (function edn_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$21,cljs.core.pr_str,cljs.core.constant$keyword$22,"application/edn"], null);
});
ajax.core.params_to_str = (function params_to_str(params){if(cljs.core.truth_(params))
{return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js(params)))).toString();
} else
{return null;
}
});
ajax.core.read_text = (function read_text(xhrio){return xhrio.getResponseText();
});
ajax.core.url_request_format = (function url_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$21,ajax.core.params_to_str,cljs.core.constant$keyword$22,"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function raw_response_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$19,ajax.core.read_text,cljs.core.constant$keyword$20,"raw text"], null);
});
ajax.core.write_json = (function write_json(data){return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js(data));
});
ajax.core.json_request_format = (function json_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$21,ajax.core.write_json,cljs.core.constant$keyword$22,"application/json"], null);
});
/**
* Returns a JSON response format.  Options include
* :keywords? Returns the keys as keywords
* :prefix A prefix that needs to be stripped off.  This is to
* combat JSON hijacking.  If you're using JSON with GET request,
* you should use this.
* http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
* http://haacked.com/archive/2009/06/24/json-hijacking.aspx
*/
ajax.core.json_response_format = (function json_response_format(p__5210){var map__5212 = p__5210;var map__5212__$1 = ((cljs.core.seq_QMARK_(map__5212))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5212):map__5212);var keywords_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5212__$1,cljs.core.constant$keyword$23);var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5212__$1,cljs.core.constant$keyword$24);return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$19,((function (map__5212,map__5212__$1,keywords_QMARK_,prefix){
return (function read_json(xhrio){var json = xhrio.getResponseJson(prefix);return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$10,keywords_QMARK_], 0));
});})(map__5212,map__5212__$1,keywords_QMARK_,prefix))
,cljs.core.constant$keyword$20,("JSON"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(prefix)?(" prefix '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+"'"):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(keywords_QMARK_)?" keywordize":null)))], null);
});
ajax.core.get_default_format = (function get_default_format(xhrio){var ct = (function (){var or__3544__auto__ = xhrio.getResponseHeader("Content-Type");if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return "";
}
})();var detect = ((function (ct){
return (function detect(s){return (ct.indexOf(s) >= (0));
});})(ct))
;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(((detect("application/json"))?ajax.core.json_response_format(cljs.core.PersistentArrayMap.EMPTY):((detect("application/edn"))?ajax.core.edn_response_format():((detect("text/plain"))?ajax.core.raw_response_format():((detect("text/html"))?ajax.core.raw_response_format():((cljs.core.constant$keyword$6)?ajax.core.edn_response_format():null))))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$20], null),((function (ct){
return (function (p1__5213_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5213_SHARP_)+" (default)");
});})(ct))
);
});
ajax.core.use_content_type = (function use_content_type(format){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(format,cljs.core.constant$keyword$21);
});
ajax.core.get_format = (function get_format(format){if(cljs.core.map_QMARK_(format))
{return format;
} else
{if(cljs.core.ifn_QMARK_(format))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ajax.core.url_request_format(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$19,format,cljs.core.constant$keyword$20,"custom"], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw (new Error(("unrecognized format: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(format))));
} else
{return null;
}
}
}
});
ajax.core.exception_response = (function exception_response(e,status,p__5214,xhrio){var map__5216 = p__5214;var map__5216__$1 = ((cljs.core.seq_QMARK_(map__5216))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5216):map__5216);var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5216__$1,cljs.core.constant$keyword$20);var response = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,status,cljs.core.constant$keyword$26,null], null);var status_text = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)+"  Format should have been "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(description));var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.constant$keyword$27,status_text,cljs.core.array_seq([cljs.core.constant$keyword$28,true,cljs.core.constant$keyword$29,xhrio.getResponseText()], 0));if(cljs.core.truth_(ajax.core.success_QMARK_(status)))
{return parse_error;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.constant$keyword$27,xhrio.getStatusText(),cljs.core.array_seq([cljs.core.constant$keyword$30,parse_error], 0));
}
});
ajax.core.interpret_response = (function interpret_response(format,response,get_default_format){try{var xhrio = response.target;var status = xhrio.getStatus();if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),status))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhrio.getLastErrorCode(),goog.net.ErrorCode.ABORT))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,(-1),cljs.core.constant$keyword$27,"Request aborted by client.",cljs.core.constant$keyword$31,true], null)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,(-1),cljs.core.constant$keyword$27,"Request timed out.",cljs.core.constant$keyword$32,true], null)], null);
}
} else
{var format__$1 = (cljs.core.truth_(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(format))?format:(get_default_format.cljs$core$IFn$_invoke$arity$1 ? get_default_format.cljs$core$IFn$_invoke$arity$1(xhrio) : get_default_format.call(null,xhrio)));var parse = cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(format__$1);try{var response__$1 = (parse.cljs$core$IFn$_invoke$arity$1 ? parse.cljs$core$IFn$_invoke$arity$1(xhrio) : parse.call(null,xhrio));if(cljs.core.truth_(ajax.core.success_QMARK_(status)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response__$1], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,status,cljs.core.constant$keyword$27,xhrio.getStatusText(),cljs.core.constant$keyword$26,response__$1], null)], null);
}
}catch (e5220){if((e5220 instanceof Object))
{var e = e5220;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response(e,status,format__$1,xhrio)], null);
} else
{if(cljs.core.constant$keyword$6)
{throw e5220;
} else
{return null;
}
}
}}
}catch (e5219){if((e5219 instanceof Object))
{var e = e5219;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,(0),cljs.core.constant$keyword$27,e.message,cljs.core.constant$keyword$26,null], null)], null);
} else
{if(cljs.core.constant$keyword$6)
{throw e5219;
} else
{return null;
}
}
}});
ajax.core.no_format = (function no_format(xhrio){throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function uri_with_params(uri,params){if(cljs.core.truth_(params))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.core.params_to_str(params)));
} else
{return uri;
}
});
ajax.core.process_inputs = (function process_inputs(uri,method,p__5221,p__5222){var map__5226 = p__5221;var map__5226__$1 = ((cljs.core.seq_QMARK_(map__5226))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5226):map__5226);var format = map__5226__$1;var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5226__$1,cljs.core.constant$keyword$22);var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5226__$1,cljs.core.constant$keyword$21);var map__5227 = p__5222;var map__5227__$1 = ((cljs.core.seq_QMARK_(map__5227))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5227):map__5227);var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5227__$1,cljs.core.constant$keyword$33);var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5227__$1,cljs.core.constant$keyword$34);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET"))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params(uri,params),null,headers], null);
} else
{var map__5228 = format;var map__5228__$1 = ((cljs.core.seq_QMARK_(map__5228))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5228):map__5228);var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5228__$1,cljs.core.constant$keyword$22);var write__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5228__$1,cljs.core.constant$keyword$21);var body = (write__$1.cljs$core$IFn$_invoke$arity$1 ? write__$1.cljs$core$IFn$_invoke$arity$1(params) : write__$1.call(null,params));var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",content_type__$1], null):null);var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__3544__auto__ = headers;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),content_type__$2], 0));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$1], null);
}
});
ajax.core.normalize_method = (function normalize_method(method){if((method instanceof cljs.core.Keyword))
{return clojure.string.upper_case(cljs.core.name(method));
} else
{return method;
}
});
ajax.core.base_handler = (function base_handler(format,p__5229){var map__5231 = p__5229;var map__5231__$1 = ((cljs.core.seq_QMARK_(map__5231))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5231):map__5231);var get_default_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5231__$1,cljs.core.constant$keyword$35);var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5231__$1,cljs.core.constant$keyword$36);if(cljs.core.truth_(handler))
{return ((function (map__5231,map__5231__$1,get_default_format,handler){
return (function (xhrio){return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(ajax.core.interpret_response(format,xhrio,(function (){var or__3544__auto__ = get_default_format;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return ajax.core.no_format;
}
})())) : handler.call(null,ajax.core.interpret_response(format,xhrio,(function (){var or__3544__auto__ = get_default_format;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return ajax.core.no_format;
}
})())));
});
;})(map__5231,map__5231__$1,get_default_format,handler))
} else
{throw (new Error("No ajax handler provided."));
}
});
/**
* @param {...*} var_args
*/
ajax.core.ajax_request = (function() {
var ajax_request = null;
var ajax_request__1 = (function (p__5232){var map__5235 = p__5232;var map__5235__$1 = ((cljs.core.seq_QMARK_(map__5235))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5235):map__5235);var opts = map__5235__$1;var manager = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5235__$1,cljs.core.constant$keyword$37);var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5235__$1,cljs.core.constant$keyword$38);var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5235__$1,cljs.core.constant$keyword$39);var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5235__$1,cljs.core.constant$keyword$40);var format__$1 = ajax.core.get_format(format);var method__$1 = ajax.core.normalize_method(method);var vec__5236 = ajax.core.process_inputs(uri,method__$1,format__$1,opts);var uri__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5236,(0),null);var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5236,(1),null);var headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5236,(2),null);var handler = ajax.core.base_handler(format__$1,opts);return ajax.core._js_ajax_request(manager,uri__$1,method__$1,body,cljs.core.clj__GT_js(headers),handler,opts);
});
var ajax_request__3 = (function() { 
var G__5237__delegate = function (uri,method,args){var f = cljs.core.first(args);var opts = (((f instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args):f);return ajax_request.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$40,uri,cljs.core.array_seq([cljs.core.constant$keyword$39,method], 0)));
};
var G__5237 = function (uri,method,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5237__delegate.call(this,uri,method,args);};
G__5237.cljs$lang$maxFixedArity = 2;
G__5237.cljs$lang$applyTo = (function (arglist__5238){
var uri = cljs.core.first(arglist__5238);
arglist__5238 = cljs.core.next(arglist__5238);
var method = cljs.core.first(arglist__5238);
var args = cljs.core.rest(arglist__5238);
return G__5237__delegate(uri,method,args);
});
G__5237.cljs$core$IFn$_invoke$arity$variadic = G__5237__delegate;
return G__5237;
})()
;
ajax_request = function(uri,method,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return ajax_request__1.call(this,uri);
default:
return ajax_request__3.cljs$core$IFn$_invoke$arity$variadic(uri,method, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax_request.cljs$lang$maxFixedArity = 2;
ajax_request.cljs$lang$applyTo = ajax_request__3.cljs$lang$applyTo;
ajax_request.cljs$core$IFn$_invoke$arity$1 = ajax_request__1;
ajax_request.cljs$core$IFn$_invoke$arity$variadic = ajax_request__3.cljs$core$IFn$_invoke$arity$variadic;
return ajax_request;
})()
;
ajax.core.json_format = (function json_format(format_params){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ajax.core.json_request_format(),ajax.core.json_response_format(format_params)], 0));
});
ajax.core.edn_format = (function edn_format(){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ajax.core.edn_request_format(),ajax.core.edn_response_format()], 0));
});
ajax.core.raw_format = (function raw_format(){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ajax.core.url_request_format(),ajax.core.raw_response_format()], 0));
});
ajax.core.keyword_request_format = (function keyword_request_format(format,format_params){var G__5240 = (((format instanceof cljs.core.Keyword))?format.fqn:null);switch (G__5240) {
case "url":
return ajax.core.url_request_format();

break;
case "raw":
return ajax.core.url_request_format();

break;
case "edn":
return ajax.core.edn_request_format();

break;
case "json":
return ajax.core.json_request_format();

break;
default:
throw (new Error(("unrecognized request format: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(format))));

}
});
ajax.core.keyword_response_format = (function keyword_response_format(format,format_params){if(cljs.core.map_QMARK_(format))
{return format;
} else
{if(cljs.core.ifn_QMARK_(format))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$19,format,cljs.core.constant$keyword$20,"custom"], null);
} else
{if(cljs.core.constant$keyword$6)
{var G__5243 = (((format instanceof cljs.core.Keyword))?format.fqn:null);switch (G__5243) {
case "raw":
return ajax.core.raw_response_format();

break;
case "edn":
return ajax.core.edn_response_format();

break;
case "json":
return ajax.core.json_response_format(format_params);

break;
default:
return null;

}
} else
{return null;
}
}
}
});
ajax.core.transform_handler = (function transform_handler(p__5245){var map__5250 = p__5245;var map__5250__$1 = ((cljs.core.seq_QMARK_(map__5250))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5250):map__5250);var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5250__$1,cljs.core.constant$keyword$41);var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5250__$1,cljs.core.constant$keyword$42);var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5250__$1,cljs.core.constant$keyword$36);return ((function (map__5250,map__5250__$1,finally$,error_handler,handler){
return (function easy_handler(p__5251){var vec__5253 = p__5251;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5253,(0),null);var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5253,(1),null);var temp__4124__auto___5254 = (cljs.core.truth_(ok)?handler:error_handler);if(cljs.core.truth_(temp__4124__auto___5254))
{var h_5255 = temp__4124__auto___5254;(h_5255.cljs$core$IFn$_invoke$arity$1 ? h_5255.cljs$core$IFn$_invoke$arity$1(result) : h_5255.call(null,result));
} else
{}
if(cljs.core.fn_QMARK_(finally$))
{return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else
{return null;
}
});
;})(map__5250,map__5250__$1,finally$,error_handler,handler))
});
ajax.core.transform_format = (function transform_format(p__5256){var map__5258 = p__5256;var map__5258__$1 = ((cljs.core.seq_QMARK_(map__5258))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5258):map__5258);var opts = map__5258__$1;var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5258__$1,cljs.core.constant$keyword$43);var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5258__$1,cljs.core.constant$keyword$38);var rf = ajax.core.keyword_response_format(response_format,opts);if((format == null))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ajax.core.edn_request_format(),rf], 0));
} else
{if((format instanceof cljs.core.Keyword))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ajax.core.keyword_request_format(format,opts),rf], 0));
} else
{if(cljs.core.constant$keyword$6)
{return format;
} else
{return null;
}
}
}
});
ajax.core.transform_opts = (function transform_opts(opts){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$36,ajax.core.transform_handler(opts),cljs.core.array_seq([cljs.core.constant$keyword$38,ajax.core.transform_format(opts),cljs.core.constant$keyword$35,ajax.core.get_default_format], 0));
});
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.GET = (function() { 
var GET__delegate = function (uri,p__5259){var vec__5261 = p__5259;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5261,(0),null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"GET",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var GET = function (uri,var_args){
var p__5259 = null;if (arguments.length > 1) {
  p__5259 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,uri,p__5259);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__5262){
var uri = cljs.core.first(arglist__5262);
var p__5259 = cljs.core.rest(arglist__5262);
return GET__delegate(uri,p__5259);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.HEAD = (function() { 
var HEAD__delegate = function (uri,p__5263){var vec__5265 = p__5263;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5265,(0),null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"HEAD",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var HEAD = function (uri,var_args){
var p__5263 = null;if (arguments.length > 1) {
  p__5263 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return HEAD__delegate.call(this,uri,p__5263);};
HEAD.cljs$lang$maxFixedArity = 1;
HEAD.cljs$lang$applyTo = (function (arglist__5266){
var uri = cljs.core.first(arglist__5266);
var p__5263 = cljs.core.rest(arglist__5266);
return HEAD__delegate(uri,p__5263);
});
HEAD.cljs$core$IFn$_invoke$arity$variadic = HEAD__delegate;
return HEAD;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.POST = (function() { 
var POST__delegate = function (uri,p__5267){var vec__5269 = p__5267;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5269,(0),null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"POST",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var POST = function (uri,var_args){
var p__5267 = null;if (arguments.length > 1) {
  p__5267 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return POST__delegate.call(this,uri,p__5267);};
POST.cljs$lang$maxFixedArity = 1;
POST.cljs$lang$applyTo = (function (arglist__5270){
var uri = cljs.core.first(arglist__5270);
var p__5267 = cljs.core.rest(arglist__5270);
return POST__delegate(uri,p__5267);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.PUT = (function() { 
var PUT__delegate = function (uri,p__5271){var vec__5273 = p__5271;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5273,(0),null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"PUT",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var PUT = function (uri,var_args){
var p__5271 = null;if (arguments.length > 1) {
  p__5271 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return PUT__delegate.call(this,uri,p__5271);};
PUT.cljs$lang$maxFixedArity = 1;
PUT.cljs$lang$applyTo = (function (arglist__5274){
var uri = cljs.core.first(arglist__5274);
var p__5271 = cljs.core.rest(arglist__5274);
return PUT__delegate(uri,p__5271);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.DELETE = (function() { 
var DELETE__delegate = function (uri,p__5275){var vec__5277 = p__5275;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5277,(0),null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"DELETE",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var DELETE = function (uri,var_args){
var p__5275 = null;if (arguments.length > 1) {
  p__5275 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return DELETE__delegate.call(this,uri,p__5275);};
DELETE.cljs$lang$maxFixedArity = 1;
DELETE.cljs$lang$applyTo = (function (arglist__5278){
var uri = cljs.core.first(arglist__5278);
var p__5275 = cljs.core.rest(arglist__5278);
return DELETE__delegate(uri,p__5275);
});
DELETE.cljs$core$IFn$_invoke$arity$variadic = DELETE__delegate;
return DELETE;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.OPTIONS = (function() { 
var OPTIONS__delegate = function (uri,p__5279){var vec__5281 = p__5279;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5281,(0),null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"OPTIONS",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var OPTIONS = function (uri,var_args){
var p__5279 = null;if (arguments.length > 1) {
  p__5279 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return OPTIONS__delegate.call(this,uri,p__5279);};
OPTIONS.cljs$lang$maxFixedArity = 1;
OPTIONS.cljs$lang$applyTo = (function (arglist__5282){
var uri = cljs.core.first(arglist__5282);
var p__5279 = cljs.core.rest(arglist__5282);
return OPTIONS__delegate(uri,p__5279);
});
OPTIONS.cljs$core$IFn$_invoke$arity$variadic = OPTIONS__delegate;
return OPTIONS;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.TRACE = (function() { 
var TRACE__delegate = function (uri,p__5283){var vec__5285 = p__5283;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5285,(0),null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"TRACE",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var TRACE = function (uri,var_args){
var p__5283 = null;if (arguments.length > 1) {
  p__5283 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return TRACE__delegate.call(this,uri,p__5283);};
TRACE.cljs$lang$maxFixedArity = 1;
TRACE.cljs$lang$applyTo = (function (arglist__5286){
var uri = cljs.core.first(arglist__5286);
var p__5283 = cljs.core.rest(arglist__5286);
return TRACE__delegate(uri,p__5283);
});
TRACE.cljs$core$IFn$_invoke$arity$variadic = TRACE__delegate;
return TRACE;
})()
;
