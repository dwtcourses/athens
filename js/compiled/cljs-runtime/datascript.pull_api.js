goog.provide('datascript.pull_api');
goog.require('cljs.core');
goog.require('datascript.db');
goog.require('datascript.pull_parser');
datascript.pull_api.into_BANG_ = (function datascript$pull_api$into_BANG_(transient_coll,items){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,transient_coll,items);
});
datascript.pull_api._PLUS_default_limit_PLUS_ = (1000);
datascript.pull_api.initial_frame = (function datascript$pull_api$initial_frame(pattern,eids,multi_QMARK_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"multi?","multi?",-749311069),new cljs.core.Keyword(null,"eids","eids",1546550700),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"recursion","recursion",-749738765),new cljs.core.Keyword(null,"specs","specs",1426570741),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),new cljs.core.Keyword(null,"kvps","kvps",65308317),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"results","results",-1134170113)],[multi_QMARK_,eids,new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"depth","depth",1768663640),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY], null),cljs.core.seq(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(pattern)),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101).cljs$core$IFn$_invoke$arity$1(pattern),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),pattern,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)]);
});
datascript.pull_api.subpattern_frame = (function datascript$pull_api$subpattern_frame(pattern,eids,multi_QMARK_,attr){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(datascript.pull_api.initial_frame(pattern,eids,multi_QMARK_),new cljs.core.Keyword(null,"attr","attr",-604132353),attr);
});
datascript.pull_api.reset_frame = (function datascript$pull_api$reset_frame(frame,eids,kvps){
var pattern = new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(frame);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(frame,new cljs.core.Keyword(null,"eids","eids",1546550700),eids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.seq(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(pattern)),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101).cljs$core$IFn$_invoke$arity$1(pattern),new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__42410 = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(frame);
if(cljs.core.seq(kvps)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__42410,kvps);
} else {
return G__42410;
}
})()], 0));
});
datascript.pull_api.push_recursion = (function datascript$pull_api$push_recursion(rec,attr,eid){
var map__42411 = rec;
var map__42411__$1 = (((((!((map__42411 == null))))?(((((map__42411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42411):map__42411);
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42411__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42411__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rec,new cljs.core.Keyword(null,"depth","depth",1768663640),cljs.core.update.cljs$core$IFn$_invoke$arity$3(depth,attr,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,eid)], 0));
});
datascript.pull_api.seen_eid_QMARK_ = (function datascript$pull_api$seen_eid_QMARK_(frame,eid){
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recursion","recursion",-749738765),new cljs.core.Keyword(null,"seen","seen",-518999789)], null),cljs.core.PersistentHashSet.EMPTY),eid);
});
datascript.pull_api.pull_seen_eid = (function datascript$pull_api$pull_seen_eid(frame,frames,eid){
if(datascript.pull_api.seen_eid_QMARK_(frame,eid)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,cljs.core.update.cljs$core$IFn$_invoke$arity$4(frame,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.conj_BANG_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid], null)));
} else {
return null;
}
});
datascript.pull_api.single_frame_result = (function datascript$pull_api$single_frame_result(key,frame){
var G__42413 = new cljs.core.Keyword(null,"kvps","kvps",65308317).cljs$core$IFn$_invoke$arity$1(frame);
var G__42413__$1 = (((G__42413 == null))?null:cljs.core.persistent_BANG_(G__42413));
if((G__42413__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__42413__$1,key);
}
});
datascript.pull_api.recursion_result = (function datascript$pull_api$recursion_result(frame){
return datascript.pull_api.single_frame_result(new cljs.core.Keyword("datascript.pull-api","recursion","datascript.pull-api/recursion",-1897884534),frame);
});
datascript.pull_api.recursion_frame = (function datascript$pull_api$recursion_frame(parent,eid){
var attr = new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(parent);
var rec = datascript.pull_api.push_recursion(new cljs.core.Keyword(null,"recursion","recursion",-749738765).cljs$core$IFn$_invoke$arity$1(parent),attr,eid);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(datascript.pull_api.subpattern_frame(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null),false,new cljs.core.Keyword("datascript.pull-api","recursion","datascript.pull-api/recursion",-1897884534)),new cljs.core.Keyword(null,"recursion","recursion",-749738765),rec);
});
datascript.pull_api.pull_recursion_frame = (function datascript$pull_api$pull_recursion_frame(db,p__42414){
var vec__42415 = p__42414;
var seq__42416 = cljs.core.seq(vec__42415);
var first__42417 = cljs.core.first(seq__42416);
var seq__42416__$1 = cljs.core.next(seq__42416);
var frame = first__42417;
var frames = seq__42416__$1;
var temp__5733__auto__ = cljs.core.seq(new cljs.core.Keyword(null,"eids","eids",1546550700).cljs$core$IFn$_invoke$arity$1(frame));
if(temp__5733__auto__){
var eids = temp__5733__auto__;
var frame__$1 = datascript.pull_api.reset_frame(frame,cljs.core.rest(eids),datascript.pull_api.recursion_result(frame));
var eid = cljs.core.first(eids);
var or__4185__auto__ = datascript.pull_api.pull_seen_eid(frame__$1,frames,eid);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,frame__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.pull_api.recursion_frame(frame__$1,eid)], 0));
}
} else {
var kvps = datascript.pull_api.recursion_result(frame);
var results = (function (){var G__42418 = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(frame);
if(cljs.core.seq(kvps)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__42418,kvps);
} else {
return G__42418;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(frame,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),results], 0)));
}
});
datascript.pull_api.recurse_attr = (function datascript$pull_api$recurse_attr(db,attr,multi_QMARK_,eids,eid,parent,frames){
var map__42419 = parent;
var map__42419__$1 = (((((!((map__42419 == null))))?(((((map__42419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42419):map__42419);
var recursion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42419__$1,new cljs.core.Keyword(null,"recursion","recursion",-749738765));
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42419__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(recursion,new cljs.core.Keyword(null,"depth","depth",1768663640)),attr,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"recursion","recursion",-749738765).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(pattern),attr)),depth)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,parent);
} else {
return datascript.pull_api.pull_recursion_frame(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"recursion","recursion",-749738765),new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern,new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"multi?","multi?",-749311069),multi_QMARK_,new cljs.core.Keyword(null,"eids","eids",1546550700),eids,new cljs.core.Keyword(null,"recursion","recursion",-749738765),recursion,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.transient$(cljs.core.PersistentVector.EMPTY)], null)], 0)));
}
});
var pattern_42464 = (new datascript.pull_parser.PullSpec(true,cljs.core.PersistentArrayMap.EMPTY,null,null,null));
datascript.pull_api.expand_frame = (function datascript$pull_api$expand_frame(parent,eid,attr_key,multi_QMARK_,eids){
var rec = datascript.pull_api.push_recursion(new cljs.core.Keyword(null,"recursion","recursion",-749738765).cljs$core$IFn$_invoke$arity$1(parent),attr_key,eid);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(datascript.pull_api.subpattern_frame(pattern_42464,eids,multi_QMARK_,attr_key),new cljs.core.Keyword(null,"recursion","recursion",-749738765),rec);
});
datascript.pull_api.pull_attr_datoms = (function datascript$pull_api$pull_attr_datoms(db,attr_key,attr,eid,forward_QMARK_,datoms,opts,p__42422){
var vec__42423 = p__42422;
var seq__42424 = cljs.core.seq(vec__42423);
var first__42425 = cljs.core.first(seq__42424);
var seq__42424__$1 = cljs.core.next(seq__42424);
var parent = first__42425;
var frames = seq__42424__$1;
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"limit","limit",-1355822363),(1000));
var attr_key__$1 = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return attr_key;
}
})();
var found = cljs.core.not_empty((function (){var G__42426 = datoms;
if(cljs.core.truth_(limit)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1(limit),G__42426);
} else {
return G__42426;
}
})());
if(cljs.core.truth_(found)){
var ref_QMARK_ = datascript.db.ref_QMARK_(db,attr);
var component_QMARK_ = ((ref_QMARK_) && (datascript.db.component_QMARK_(db,attr)));
var multi_QMARK_ = (cljs.core.truth_(forward_QMARK_)?datascript.db.multival_QMARK_(db,attr):(!(component_QMARK_)));
var datom_val = (cljs.core.truth_(forward_QMARK_)?(function (d){
return d.v;
}):(function (d){
return d.e;
}));
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"subpattern","subpattern",45002743))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.pull_api.subpattern_frame(new cljs.core.Keyword(null,"subpattern","subpattern",45002743).cljs$core$IFn$_invoke$arity$1(opts),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(datom_val,found),multi_QMARK_,attr_key__$1)], 0));
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"recursion","recursion",-749738765))){
return datascript.pull_api.recurse_attr(db,attr_key__$1,multi_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(datom_val,found),eid,parent,frames);
} else {
if(cljs.core.truth_(((component_QMARK_)?forward_QMARK_:false))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.pull_api.expand_frame(parent,eid,attr_key__$1,multi_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(datom_val,found))], 0));
} else {
var as_value = (function (){var G__42427 = datom_val;
if(ref_QMARK_){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__42421_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("db","id","db/id",-1388397098)],[p1__42421_SHARP_]);
}),G__42427);
} else {
return G__42427;
}
})();
var single_QMARK_ = (!(multi_QMARK_));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,cljs.core.update.cljs$core$IFn$_invoke$arity$5(parent,new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.assoc_BANG_,attr_key__$1,(function (){var G__42428 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(as_value),found);
if(single_QMARK_){
return cljs.core.first(G__42428);
} else {
return G__42428;
}
})()));

}
}
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,(function (){var G__42429 = parent;
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__42429,new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.assoc_BANG_,attr_key__$1,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts));
} else {
return G__42429;
}
})());
}
});
datascript.pull_api.pull_attr = (function datascript$pull_api$pull_attr(db,spec,eid,frames){
var vec__42430 = spec;
var attr_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42430,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42430,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),attr_key)){
if(cljs.core.truth_(cljs.core.not_empty(datascript.db._datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(frames),cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.first(frames),new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.assoc_BANG_,new cljs.core.Keyword("db","id","db/id",-1388397098),eid));
} else {
return frames;
}
} else {
var attr = new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(opts);
var forward_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr_key,attr);
var results = ((forward_QMARK_)?datascript.db._datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid,attr], null)):datascript.db._datoms(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,eid], null)));
return datascript.pull_api.pull_attr_datoms(db,attr_key,attr,eid,forward_QMARK_,results,opts,frames);
}
});
datascript.pull_api.filter_reverse_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__42433){
var vec__42434 = p__42433;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42434,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42434,(1),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(v));
}));
datascript.pull_api.expand_reverse_subpattern_frame = (function datascript$pull_api$expand_reverse_subpattern_frame(parent,eid,rattrs){
return datascript.pull_api.subpattern_frame(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),rattrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),false], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null),false,new cljs.core.Keyword("datascript.pull-api","expand-rev","datascript.pull-api/expand-rev",2143627459));
});
datascript.pull_api.expand_result = (function datascript$pull_api$expand_result(frames,kvps){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(frames),cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.first(frames),new cljs.core.Keyword(null,"kvps","kvps",65308317),datascript.pull_api.into_BANG_,cljs.core.persistent_BANG_(kvps)));
});
datascript.pull_api.pull_expand_reverse_frame = (function datascript$pull_api$pull_expand_reverse_frame(db,p__42437){
var vec__42438 = p__42437;
var seq__42439 = cljs.core.seq(vec__42438);
var first__42440 = cljs.core.first(seq__42439);
var seq__42439__$1 = cljs.core.next(seq__42439);
var frame = first__42440;
var frames = seq__42439__$1;
return datascript.pull_api.expand_result(frames,datascript.pull_api.into_BANG_(new cljs.core.Keyword(null,"expand-kvps","expand-kvps",44141154).cljs$core$IFn$_invoke$arity$1(frame),(function (){var or__4185__auto__ = datascript.pull_api.single_frame_result(new cljs.core.Keyword("datascript.pull-api","expand-rev","datascript.pull-api/expand-rev",2143627459),frame);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
});
datascript.pull_api.pull_expand_frame = (function datascript$pull_api$pull_expand_frame(db,p__42441){
var vec__42442 = p__42441;
var seq__42443 = cljs.core.seq(vec__42442);
var first__42444 = cljs.core.first(seq__42443);
var seq__42443__$1 = cljs.core.next(seq__42443);
var frame = first__42444;
var frames = seq__42443__$1;
var temp__5733__auto__ = cljs.core.seq(new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(frame));
if(temp__5733__auto__){
var datoms_by_attr = temp__5733__auto__;
var vec__42445 = cljs.core.first(datoms_by_attr);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42445,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42445,(1),null);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attrs","attrs",-2090668713)], null)),attr,cljs.core.PersistentArrayMap.EMPTY);
return datascript.pull_api.pull_attr_datoms(db,attr,attr,new cljs.core.Keyword(null,"eid","eid",559519930).cljs$core$IFn$_invoke$arity$1(frame),true,datoms,opts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,cljs.core.update.cljs$core$IFn$_invoke$arity$3(frame,new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.rest)));
} else {
var temp__5733__auto____$1 = cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,datascript.pull_api.filter_reverse_attrs,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attrs","attrs",-2090668713)], null))));
if(cljs.core.truth_(temp__5733__auto____$1)){
var rattrs = temp__5733__auto____$1;
var frame__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(frame,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"expand-rev","expand-rev",1249112650),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"expand-kvps","expand-kvps",44141154),new cljs.core.Keyword(null,"kvps","kvps",65308317).cljs$core$IFn$_invoke$arity$1(frame),new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)], 0));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,frame__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.pull_api.expand_reverse_subpattern_frame(frame__$1,new cljs.core.Keyword(null,"eid","eid",559519930).cljs$core$IFn$_invoke$arity$1(frame__$1),rattrs)], 0));
} else {
return datascript.pull_api.expand_result(frames,new cljs.core.Keyword(null,"kvps","kvps",65308317).cljs$core$IFn$_invoke$arity$1(frame));
}
}
});
datascript.pull_api.pull_wildcard_expand = (function datascript$pull_api$pull_wildcard_expand(db,frame,frames,eid,pattern){
var datoms = cljs.core.group_by((function (d){
return d.a;
}),datascript.db._datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null)));
var map__42448 = frame;
var map__42448__$1 = (((((!((map__42448 == null))))?(((((map__42448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42448):map__42448);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42448__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var recursion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42448__$1,new cljs.core.Keyword(null,"recursion","recursion",-749738765));
var rec = (function (){var G__42450 = recursion;
if((!((attr == null)))){
return datascript.pull_api.push_recursion(G__42450,attr,eid);
} else {
return G__42450;
}
})();
return datascript.pull_api.pull_expand_frame(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,frame,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"expand","expand",595248157),new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.transient$(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid], null)),new cljs.core.Keyword(null,"eid","eid",559519930),eid,new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern,new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.seq(datoms),new cljs.core.Keyword(null,"recursion","recursion",-749738765),rec], null)], 0)));
});
datascript.pull_api.pull_wildcard = (function datascript$pull_api$pull_wildcard(db,frame,frames){
var map__42451 = frame;
var map__42451__$1 = (((((!((map__42451 == null))))?(((((map__42451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42451):map__42451);
var eid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42451__$1,new cljs.core.Keyword(null,"eid","eid",559519930));
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42451__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var or__4185__auto__ = datascript.pull_api.pull_seen_eid(frame,frames,eid);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return datascript.pull_api.pull_wildcard_expand(db,frame,frames,eid,pattern);
}
});
datascript.pull_api.pull_pattern_frame = (function datascript$pull_api$pull_pattern_frame(db,p__42453){
while(true){
var vec__42454 = p__42453;
var seq__42455 = cljs.core.seq(vec__42454);
var first__42456 = cljs.core.first(seq__42455);
var seq__42455__$1 = cljs.core.next(seq__42455);
var frame = first__42456;
var frames = seq__42455__$1;
var temp__5733__auto__ = cljs.core.seq(new cljs.core.Keyword(null,"eids","eids",1546550700).cljs$core$IFn$_invoke$arity$1(frame));
if(temp__5733__auto__){
var eids = temp__5733__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101).cljs$core$IFn$_invoke$arity$1(frame))){
return datascript.pull_api.pull_wildcard(db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(frame,new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"eid","eid",559519930),cljs.core.first(eids),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),false], 0)),frames);
} else {
var temp__5733__auto____$1 = cljs.core.seq(new cljs.core.Keyword(null,"specs","specs",1426570741).cljs$core$IFn$_invoke$arity$1(frame));
if(temp__5733__auto____$1){
var specs = temp__5733__auto____$1;
var spec = cljs.core.first(specs);
var pattern = new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(frame);
var new_frames = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frame,new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.rest(specs)));
return datascript.pull_api.pull_attr(db,spec,cljs.core.first(eids),new_frames);
} else {
var G__42465 = db;
var G__42466 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,datascript.pull_api.reset_frame(frame,cljs.core.rest(eids),cljs.core.not_empty(cljs.core.persistent_BANG_(new cljs.core.Keyword(null,"kvps","kvps",65308317).cljs$core$IFn$_invoke$arity$1(frame)))));
db = G__42465;
p__42453 = G__42466;
continue;
}
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frame,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188)));
}
break;
}
});
datascript.pull_api.pull_pattern = (function datascript$pull_api$pull_pattern(db,frames){
while(true){
var G__42457 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.first(frames));
var G__42457__$1 = (((G__42457 instanceof cljs.core.Keyword))?G__42457.fqn:null);
switch (G__42457__$1) {
case "expand":
var G__42468 = db;
var G__42469 = datascript.pull_api.pull_expand_frame(db,frames);
db = G__42468;
frames = G__42469;
continue;

break;
case "expand-rev":
var G__42470 = db;
var G__42471 = datascript.pull_api.pull_expand_reverse_frame(db,frames);
db = G__42470;
frames = G__42471;
continue;

break;
case "pattern":
var G__42472 = db;
var G__42473 = datascript.pull_api.pull_pattern_frame(db,frames);
db = G__42472;
frames = G__42473;
continue;

break;
case "recursion":
var G__42474 = db;
var G__42475 = datascript.pull_api.pull_recursion_frame(db,frames);
db = G__42474;
frames = G__42475;
continue;

break;
case "done":
var vec__42458 = frames;
var seq__42459 = cljs.core.seq(vec__42458);
var first__42460 = cljs.core.first(seq__42459);
var seq__42459__$1 = cljs.core.next(seq__42459);
var f = first__42460;
var remaining = seq__42459__$1;
var result = (function (){var G__42461 = cljs.core.persistent_BANG_(new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(f));
if(cljs.core.not(new cljs.core.Keyword(null,"multi?","multi?",-749311069).cljs$core$IFn$_invoke$arity$1(f))){
return cljs.core.first(G__42461);
} else {
return G__42461;
}
})();
if(cljs.core.seq(remaining)){
var G__42477 = db;
var G__42478 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(remaining),(function (){var G__42462 = cljs.core.first(remaining);
if(cljs.core.truth_(result)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__42462,new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.assoc_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(f),result);
} else {
return G__42462;
}
})());
db = G__42477;
frames = G__42478;
continue;
} else {
return result;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42457__$1)].join('')));

}
break;
}
});
datascript.pull_api.pull_spec = (function datascript$pull_api$pull_spec(db,pattern,eids,multi_QMARK_){
var eids__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__42463_SHARP_){
return datascript.db.entid_strict(db,p1__42463_SHARP_);
})),eids);
return datascript.pull_api.pull_pattern(db,(new cljs.core.List(null,datascript.pull_api.initial_frame(pattern,eids__$1,multi_QMARK_),null,(1),null)));
});
datascript.pull_api.pull = (function datascript$pull_api$pull(db,selector,eid){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.pull_api.pull_spec(db,datascript.pull_parser.parse_pull(selector),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null),false);
});
datascript.pull_api.pull_many = (function datascript$pull_api$pull_many(db,selector,eids){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.pull_api.pull_spec(db,datascript.pull_parser.parse_pull(selector),eids,true);
});

//# sourceMappingURL=datascript.pull_api.js.map
