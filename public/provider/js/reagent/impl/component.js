// Compiled by ClojureScript 0.0-2280
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.debug');
goog.require('reagent.ratom');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.util');
goog.require('reagent.impl.util');
reagent.impl.component.cljs_state = "cljsState";
reagent.impl.component.cljs_render = "cljsRender";
reagent.impl.component.state_atom = (function state_atom(this$){var sa = (this$[reagent.impl.component.cljs_state]);if(!((sa == null)))
{return sa;
} else
{return (this$[reagent.impl.component.cljs_state] = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
reagent.impl.component.state = (function state(this$){return cljs.core.deref(reagent.impl.component.state_atom(this$));
});
reagent.impl.component.replace_state = (function replace_state(this$,new_state){return cljs.core.reset_BANG_(reagent.impl.component.state_atom(this$),new_state);
});
reagent.impl.component.set_state = (function set_state(this$,new_state){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.impl.component.state_atom(this$),cljs.core.merge,new_state);
});
reagent.impl.component.do_render = (function do_render(C){var _STAR_current_component_STAR_5456 = reagent.impl.component._STAR_current_component_STAR_;try{reagent.impl.component._STAR_current_component_STAR_ = C;
var f = (C[reagent.impl.component.cljs_render]);var _ = ((reagent.impl.util.clj_ifn_QMARK_(f))?null:(function(){throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("util","clj-ifn?","util/clj-ifn?",259370460,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0))))))})());var p = reagent.impl.util.js_props(C);var res = ((((C["componentFunction"]) == null))?(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(C) : f.call(null,C)):(function (){var argv = (p[reagent.impl.util.cljs_argv]);var n = cljs.core.count(argv);var G__5457 = n;switch (G__5457) {
case (1):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (2):
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1))) : f.call(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1))));

break;
case (3):
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2))) : f.call(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2))));

break;
case (4):
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3))) : f.call(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3))));

break;
case (5):
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(4))) : f.call(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(4))));

break;
default:
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(argv,(1)));

}
})());if(cljs.core.vector_QMARK_(res))
{return C.asComponent(res,(p[reagent.impl.util.cljs_level]));
} else
{if(cljs.core.ifn_QMARK_(res))
{(C[reagent.impl.component.cljs_render] = res);
return do_render(C);
} else
{return res;
}
}
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_5456;
}});
reagent.impl.component.custom_wrapper = (function custom_wrapper(key,f){var G__5460 = (((key instanceof cljs.core.Keyword))?key.fqn:null);switch (G__5460) {
case "componentWillUnmount":
return ((function (G__5460){
return (function (){var C = this;reagent.impl.batching.dispose(C);
if((f == null))
{return null;
} else
{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(C) : f.call(null,C));
}
});
;})(G__5460))

break;
case "componentDidUpdate":
return ((function (G__5460){
return (function (oldprops){var C = this;var old_argv = (oldprops[reagent.impl.util.cljs_argv]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(C,old_argv) : f.call(null,C,old_argv));
});
;})(G__5460))

break;
case "componentWillUpdate":
return ((function (G__5460){
return (function (nextprops){var C = this;var next_argv = (nextprops[reagent.impl.util.cljs_argv]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(C,next_argv) : f.call(null,C,next_argv));
});
;})(G__5460))

break;
case "shouldComponentUpdate":
return ((function (G__5460){
return (function (nextprops,nextstate){var C = this;var inprops = reagent.impl.util.js_props(C);var old_argv = (inprops[reagent.impl.util.cljs_argv]);var new_argv = (nextprops[reagent.impl.util.cljs_argv]);if((f == null))
{return cljs.core.not(reagent.impl.util.equal_args(old_argv,new_argv));
} else
{return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(C,old_argv,new_argv) : f.call(null,C,old_argv,new_argv));
}
});
;})(G__5460))

break;
case "componentWillReceiveProps":
return ((function (G__5460){
return (function (props){var C = this;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(C,(props[reagent.impl.util.cljs_argv])) : f.call(null,C,(props[reagent.impl.util.cljs_argv])));
});
;})(G__5460))

break;
case "getInitialState":
return ((function (G__5460){
return (function (){var C = this;return reagent.impl.component.set_state(C,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(C) : f.call(null,C)));
});
;})(G__5460))

break;
case "getDefaultProps":
if(false)
{return null;
} else
{throw (new Error(("Assert failed: getDefaultProps not supported yet\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0))))));
}

break;
default:
return null;

}
});
reagent.impl.component.default_wrapper = (function default_wrapper(f){if(cljs.core.ifn_QMARK_(f))
{return (function() { 
var G__5462__delegate = function (args){var C = this;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,C,args);
};
var G__5462 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__5462__delegate.call(this,args);};
G__5462.cljs$lang$maxFixedArity = 0;
G__5462.cljs$lang$applyTo = (function (arglist__5463){
var args = cljs.core.seq(arglist__5463);
return G__5462__delegate(args);
});
G__5462.cljs$core$IFn$_invoke$arity$variadic = G__5462__delegate;
return G__5462;
})()
;
} else
{return f;
}
});
reagent.impl.component.dont_wrap = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$50,null,cljs.core.constant$keyword$51,null,cljs.core.constant$keyword$52,null], null), null);
reagent.impl.component.dont_bind = (function dont_bind(f){if(cljs.core.ifn_QMARK_(f))
{var G__5465 = f;(G__5465["__reactDontBind"] = true);
return G__5465;
} else
{return f;
}
});
reagent.impl.component.get_wrapper = (function get_wrapper(key,f,name){if(cljs.core.truth_((reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1(key) : reagent.impl.component.dont_wrap.call(null,key))))
{return reagent.impl.component.dont_bind(f);
} else
{var wrap = reagent.impl.component.custom_wrapper(key,f);if(cljs.core.truth_((function (){var and__3532__auto__ = wrap;if(cljs.core.truth_(and__3532__auto__))
{return f;
} else
{return and__3532__auto__;
}
})()))
{if(cljs.core.ifn_QMARK_(f))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Expected function in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+" but got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0))))));
}
} else
{}
var or__3544__auto__ = wrap;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return reagent.impl.component.default_wrapper(f);
}
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$53,null,cljs.core.constant$keyword$54,null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function camelify_map_keys(fun_map){return cljs.core.reduce_kv((function (m,k,v){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(k) : reagent.impl.component.dash_to_camel.call(null,k))),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function add_obligatory(fun_map){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.impl.component.obligatory,fun_map], 0));
});
reagent.impl.component.add_render = (function add_render(fun_map,render_f){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fun_map,cljs.core.constant$keyword$50,render_f,cljs.core.array_seq([cljs.core.constant$keyword$51,(cljs.core.truth_(reagent.impl.util.is_client)?(function (){var C = this;return reagent.impl.batching.run_reactively(C,((function (C){
return (function (){return reagent.impl.component.do_render(C);
});})(C))
);
}):(function (){var C = this;return reagent.impl.component.do_render(C);
}))], 0));
});
reagent.impl.component.wrap_funs = (function wrap_funs(fun_map){var render_fun = (function (){var or__3544__auto__ = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(fun_map);if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return cljs.core.constant$keyword$51.cljs$core$IFn$_invoke$arity$1(fun_map);
}
})();var _ = ((reagent.impl.util.clj_ifn_QMARK_(render_fun))?null:(function(){throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Render must be a function, not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([render_fun], 0)))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("util","clj-ifn?","util/clj-ifn?",259370460,null),new cljs.core.Symbol(null,"render-fun","render-fun",-1209513086,null))], 0))))))})());var name = (function (){var or__3544__auto__ = cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(fun_map);if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = render_fun.displayName;if(cljs.core.truth_(or__3544__auto____$1))
{return or__3544__auto____$1;
} else
{return render_fun.name;
}
}
})();var name_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(name))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"))):name);var fmap = reagent.impl.component.add_render(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fun_map,cljs.core.constant$keyword$55,name_SINGLEQUOTE_),render_fun);return cljs.core.reduce_kv(((function (render_fun,_,name,name_SINGLEQUOTE_,fmap){
return (function (m,k,v){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,reagent.impl.component.get_wrapper(k,v,name_SINGLEQUOTE_));
});})(render_fun,_,name,name_SINGLEQUOTE_,fmap))
,cljs.core.PersistentArrayMap.EMPTY,fmap);
});
reagent.impl.component.map_to_js = (function map_to_js(m){return cljs.core.reduce_kv((function (o,k,v){var G__5467 = o;(G__5467[cljs.core.name(k)] = v);
return G__5467;
}),{},m);
});
reagent.impl.component.cljsify = (function cljsify(body){return reagent.impl.component.map_to_js(reagent.impl.component.wrap_funs(reagent.impl.component.add_obligatory(reagent.impl.component.camelify_map_keys(body))));
});
reagent.impl.component.create_class = (function create_class(body,as_component){if(cljs.core.map_QMARK_(body))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"body","body",-408674142,null))], 0))))));
}
var spec = reagent.impl.component.cljsify(body);var _ = spec.asComponent = reagent.impl.component.dont_bind(as_component);var res = reagent.impl.util.React.createClass(spec);var f = ((function (spec,_,res){
return (function() { 
var G__5468__delegate = function (args){return (as_component.cljs$core$IFn$_invoke$arity$1 ? as_component.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args)) : as_component.call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args)));
};
var G__5468 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__5468__delegate.call(this,args);};
G__5468.cljs$lang$maxFixedArity = 0;
G__5468.cljs$lang$applyTo = (function (arglist__5469){
var args = cljs.core.seq(arglist__5469);
return G__5468__delegate(args);
});
G__5468.cljs$core$IFn$_invoke$arity$variadic = G__5468__delegate;
return G__5468;
})()
;})(spec,_,res))
;f.cljsReactClass = res;
res.cljsReactClass = res;
return f;
});
