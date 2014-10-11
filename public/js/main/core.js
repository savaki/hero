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
main.core.activate_page = (function activate_page(id){var element = document.getElementById(id);cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["activating page,",id], 0));
element.className = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(element.className)+" hero-active");
return Velocity(element,"transition.slideRightBigIn",(250));
});
main.core.app_view = (function app_view(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$60,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$61,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62,"Hello World"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63,"this is a page"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$64,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$65,"button",cljs.core.constant$keyword$66,(function (){return main.core.activate_page("sample");
}),cljs.core.constant$keyword$67,"click me"], null)], null)], null);
});
reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.app_view], null),document.getElementById("app"));
