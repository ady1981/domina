goog.provide('domina.test');
goog.require('cljs.core');
goog.require('domina.xpath');
goog.require('domina.css');
goog.require('domina.events');
goog.require('domina');
goog.require('goog.events');

  window['tryfn'] = function(f) {
    try {
      return f.call();
    } catch (e) {
      if(e == "fail hard") {
          throw e;
      } else {
          return e;
      }
    }
  };;
domina.test.tests = cljs.core.atom.call(null,cljs.core.Vector.fromArray([]));
domina.test.add_test = (function add_test(name,testfn){
return cljs.core.swap_BANG_.call(null,domina.test.tests,cljs.core.conj,cljs.core.Vector.fromArray([name,testfn]));
});
domina.test.run_test = (function run_test(testfn){
return tryfn.call(null,testfn);
});
domina.test.run_named = (function run_named(n){
return cljs.core.map.call(null,(function (p__6582){
var vec__6583__6584 = p__6582;
var name__6585 = cljs.core.nth.call(null,vec__6583__6584,0,null);
var testfn__6586 = cljs.core.nth.call(null,vec__6583__6584,1,null);

return cljs.core.Vector.fromArray([name__6585,domina.test.run_test.call(null,testfn__6586)]);
}),cljs.core.filter.call(null,(function (p__6587){
var vec__6588__6589 = p__6587;
var name__6590 = cljs.core.nth.call(null,vec__6588__6589,0,null);
var ___6591 = cljs.core.nth.call(null,vec__6588__6589,1,null);

return cljs.core._EQ_.call(null,name__6590,n);
}),cljs.core.deref.call(null,domina.test.tests)));
});
domina.test.run_tests = (function run_tests(){
return cljs.core.map.call(null,(function (p__6609){
var vec__6612__6614 = p__6609;
var name__6616 = cljs.core.nth.call(null,vec__6612__6614,0,null);
var testfn__6618 = cljs.core.nth.call(null,vec__6612__6614,1,null);

return cljs.core.Vector.fromArray([name__6616,domina.test.run_test.call(null,testfn__6618)]);
}),cljs.core.deref.call(null,domina.test.tests));
});
/**
* resets the page
*/
domina.test.reset = (function reset(){
return domina.destroy_BANG_.call(null,domina.xpath.xpath.call(null,"//body/*"));
});
/**
* Standard fixture html
*/
domina.test.standard_fixture = (function standard_fixture(){
return domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div class='d1'><p class='p1'>P1</p><p class='p2'>P2</p>\n<p id='id1' class='p3'>P3</p>");
});
domina.test.add_test.call(null,"basic CSS selection",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.nodes.call(null,domina.css.sel.call(null,"p"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",3,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'sel","p"),cljs.core.hash_map("﷐'line",66))),cljs.core.hash_map("﷐'line",66))),cljs.core.hash_map("﷐'line",66))),cljs.core.hash_map("﷐'line",66))))));
}
}));
domina.test.add_test.call(null,"basic CSS selection (single node)",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,domina.single_node.call(null,domina.css.sel.call(null,"p"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not",cljs.core.with_meta(cljs.core.list("﷑'nil?",cljs.core.with_meta(cljs.core.list("﷑'single-node",cljs.core.with_meta(cljs.core.list("﷑'sel","p"),cljs.core.hash_map("﷐'line",71))),cljs.core.hash_map("﷐'line",71))),cljs.core.hash_map("﷐'line",71))),cljs.core.hash_map("﷐'line",71))))));
}
}));
domina.test.add_test.call(null,"CSS selection with class specification",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.css.sel.call(null,".d1"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'sel",".d1"),cljs.core.hash_map("﷐'line",76))),cljs.core.hash_map("﷐'line",76))),cljs.core.hash_map("﷐'line",76))),cljs.core.hash_map("﷐'line",76))))));
}
}));
domina.test.add_test.call(null,"a relative CSS selector",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.nodes.call(null,domina.css.sel.call(null,domina.css.sel.call(null,".d1"),"p"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",3,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'->",cljs.core.with_meta(cljs.core.list("﷑'sel",".d1"),cljs.core.hash_map("﷐'line",81)),cljs.core.with_meta(cljs.core.list("﷑'sel","p"),cljs.core.hash_map("﷐'line",82))),cljs.core.hash_map("﷐'line",81))),cljs.core.hash_map("﷐'line",81))),cljs.core.hash_map("﷐'line",81))),cljs.core.hash_map("﷐'line",81))))));
}
}));
domina.test.add_test.call(null,"extended CSS chaining",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.css.sel.call(null,"body"),"<div><p><span>some text</span></p><p><span>more text</span></p></div>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.css.sel.call(null,domina.css.sel.call(null,domina.css.sel.call(null,domina.css.sel.call(null,"body"),"div"),"p"),"span"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",2,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'->",cljs.core.with_meta(cljs.core.list("﷑'sel","body"),cljs.core.hash_map("﷐'line",88)),cljs.core.with_meta(cljs.core.list("﷑'sel","div"),cljs.core.hash_map("﷐'line",89)),cljs.core.with_meta(cljs.core.list("﷑'sel","p"),cljs.core.hash_map("﷐'line",90)),cljs.core.with_meta(cljs.core.list("﷑'sel","span"),cljs.core.hash_map("﷐'line",91))),cljs.core.hash_map("﷐'line",88))),cljs.core.hash_map("﷐'line",88))),cljs.core.hash_map("﷐'line",88))),cljs.core.hash_map("﷐'line",88))))));
}
}));
domina.test.add_test.call(null,"basic xpath selection",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",3,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",98))),cljs.core.hash_map("﷐'line",98))),cljs.core.hash_map("﷐'line",98))),cljs.core.hash_map("﷐'line",98))))));
}
}));
domina.test.add_test.call(null,"basic xpath selection (single node)",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,domina.single_node.call(null,domina.xpath.xpath.call(null,"//p"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not",cljs.core.with_meta(cljs.core.list("﷑'nil?",cljs.core.with_meta(cljs.core.list("﷑'single-node",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",103))),cljs.core.hash_map("﷐'line",103))),cljs.core.hash_map("﷐'line",103))),cljs.core.hash_map("﷐'line",103))))));
}
}));
domina.test.add_test.call(null,"xpath selection with class specification",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@class='d1']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@class='d1']"),cljs.core.hash_map("﷐'line",108))),cljs.core.hash_map("﷐'line",108))),cljs.core.hash_map("﷐'line",108))),cljs.core.hash_map("﷐'line",108))))));
}
}));
domina.test.add_test.call(null,"a relative xpath expression",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,domina.xpath.xpath.call(null,"//body/div[@class='d1']"),"p"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",3,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'->",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/div[@class='d1']"),cljs.core.hash_map("﷐'line",113)),cljs.core.with_meta(cljs.core.list("﷑'xpath","p"),cljs.core.hash_map("﷐'line",114))),cljs.core.hash_map("﷐'line",113))),cljs.core.hash_map("﷐'line",113))),cljs.core.hash_map("﷐'line",113))),cljs.core.hash_map("﷐'line",113))))));
}
}));
domina.test.add_test.call(null,"extended selection chaining",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div><p><span>some text</span></p><p><span>more text</span></p></div>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,domina.xpath.xpath.call(null,domina.xpath.xpath.call(null,domina.xpath.xpath.call(null,"//body"),"div"),"p"),"span"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",2,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'->",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body"),cljs.core.hash_map("﷐'line",120)),cljs.core.with_meta(cljs.core.list("﷑'xpath","div"),cljs.core.hash_map("﷐'line",121)),cljs.core.with_meta(cljs.core.list("﷑'xpath","p"),cljs.core.hash_map("﷐'line",122)),cljs.core.with_meta(cljs.core.list("﷑'xpath","span"),cljs.core.hash_map("﷐'line",123))),cljs.core.hash_map("﷐'line",120))),cljs.core.hash_map("﷐'line",120))),cljs.core.hash_map("﷐'line",120))),cljs.core.hash_map("﷐'line",120))))));
}
}));
domina.test.add_test.call(null,"advanced xpath",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p[following-sibling::p[@class='p3']]"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",2,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p[following-sibling::p[@class='p3']]"),cljs.core.hash_map("﷐'line",127))),cljs.core.hash_map("﷐'line",127))),cljs.core.hash_map("﷐'line",127))),cljs.core.hash_map("﷐'line",127))))));
}
}));
domina.test.add_test.call(null,"look up node by id",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.by_id.call(null,"id1"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'by-id","id1"),cljs.core.hash_map("﷐'line",132))),cljs.core.hash_map("﷐'line",132))),cljs.core.hash_map("﷐'line",132))),cljs.core.hash_map("﷐'line",132))))));
}
}));
domina.test.add_test.call(null,"look up nodes by class",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.by_class.call(null,"p3"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'by-class","p3"),cljs.core.hash_map("﷐'line",137))),cljs.core.hash_map("﷐'line",137))),cljs.core.hash_map("﷐'line",137))),cljs.core.hash_map("﷐'line",137))))));
}
}));
domina.test.add_test.call(null,"child selection",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.children.call(null,domina.xpath.xpath.call(null,"//div[@class='d1']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",3,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'children",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@class='d1']"),cljs.core.hash_map("﷐'line",142))),cljs.core.hash_map("﷐'line",142))),cljs.core.hash_map("﷐'line",142))),cljs.core.hash_map("﷐'line",142))))));
}
}));
domina.test.add_test.call(null,"clone a single node",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.clone.call(null,domina.single_node.call(null,domina.xpath.xpath.call(null,"//p")))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'clone",cljs.core.with_meta(cljs.core.list("﷑'single-node",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",147))),cljs.core.hash_map("﷐'line",147))),cljs.core.hash_map("﷐'line",147))),cljs.core.hash_map("﷐'line",147))),cljs.core.hash_map("﷐'line",147))))));
}
}));
domina.test.add_test.call(null,"clone multiple nodes",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.clone.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p")))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",3,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'clone",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",152))),cljs.core.hash_map("﷐'line",152))),cljs.core.hash_map("﷐'line",152))),cljs.core.hash_map("﷐'line",152))),cljs.core.hash_map("﷐'line",152))))));
}
}));
domina.test.add_test.call(null,"append a single child to a single parent",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<p class='appended1'>test</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//body/p[@class='appended1']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/p[@class='appended1']"),cljs.core.hash_map("﷐'line",158))),cljs.core.hash_map("﷐'line",158))),cljs.core.hash_map("﷐'line",158))),cljs.core.hash_map("﷐'line",158))))));
}
}));
domina.test.add_test.call(null,"append multiple children to a single parent",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<p class='appended2'>test2-1</p><p class='appended2'>test2-2</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//body/p[@class='appended2']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",2,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/p[@class='appended2']"),cljs.core.hash_map("﷐'line",164))),cljs.core.hash_map("﷐'line",164))),cljs.core.hash_map("﷐'line",164))),cljs.core.hash_map("﷐'line",164))))));
}
}));
domina.test.add_test.call(null,"append a single child to multiple parents",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body/div/p"),"<span>!!</span>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div/p/span"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",3,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div/p/span"),cljs.core.hash_map("﷐'line",171))),cljs.core.hash_map("﷐'line",171))),cljs.core.hash_map("﷐'line",171))),cljs.core.hash_map("﷐'line",171))))));
}
}));
domina.test.add_test.call(null,"append multiple children to multiple parents",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body/div/p"),"some <span class='foo'>more</span> text");
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div/p/span[@class='foo']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",3,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div/p/span[@class='foo']"),cljs.core.hash_map("﷐'line",178))),cljs.core.hash_map("﷐'line",178))),cljs.core.hash_map("﷐'line",178))),cljs.core.hash_map("﷐'line",178))))));
}
}));
domina.test.add_test.call(null,"prepend a single child to a single parent",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div>2</div><div>3</div>");
domina.prepend_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div>1</div>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"1",domina.text.call(null,domina.xpath.xpath.call(null,"//body/div[1]")))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","1",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/div[1]"),cljs.core.hash_map("﷐'line",184))),cljs.core.hash_map("﷐'line",184))),cljs.core.hash_map("﷐'line",184))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"2",domina.text.call(null,domina.xpath.xpath.call(null,"//body/div[2]")))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","2",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/div[2]"),cljs.core.hash_map("﷐'line",185))),cljs.core.hash_map("﷐'line",185))),cljs.core.hash_map("﷐'line",185))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"3",domina.text.call(null,domina.xpath.xpath.call(null,"//body/div[3]")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","3",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/div[3]"),cljs.core.hash_map("﷐'line",186))),cljs.core.hash_map("﷐'line",186))),cljs.core.hash_map("﷐'line",186))))));
}
}));
domina.test.add_test.call(null,"prepend a single child to multiple parents",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div><p>2</p></div><div><p>2</p></div>");
domina.prepend_BANG_.call(null,domina.xpath.xpath.call(null,"//body/div"),"<p>1</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//body/div/p[text()='2']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",2,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/div/p[text()='2']"),cljs.core.hash_map("﷐'line",192))),cljs.core.hash_map("﷐'line",192))),cljs.core.hash_map("﷐'line",192))),cljs.core.hash_map("﷐'line",192))))));
}
}));
domina.test.add_test.call(null,"Insert a single child to a single parent",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div class='testInserts'></div>");
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//div[@class='testInserts']"),"<p class='i1'></p>");
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//div[@class='testInserts']"),"<p class='i3'></p>");
domina.insert_BANG_.call(null,domina.xpath.xpath.call(null,"//div[@class='testInserts']"),"<p class='i2'></p>",1);
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@class='testInserts']/p"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",3,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@class='testInserts']/p"),cljs.core.hash_map("﷐'line",204))),cljs.core.hash_map("﷐'line",204))),cljs.core.hash_map("﷐'line",204))),cljs.core.hash_map("﷐'line",204))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p[@class='i2']/preceding-sibling::*"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p[@class='i2']/preceding-sibling::*"),cljs.core.hash_map("﷐'line",205))),cljs.core.hash_map("﷐'line",205))),cljs.core.hash_map("﷐'line",205))),cljs.core.hash_map("﷐'line",205))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p[@class='i2']/following-sibling::*"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p[@class='i2']/following-sibling::*"),cljs.core.hash_map("﷐'line",206))),cljs.core.hash_map("﷐'line",206))),cljs.core.hash_map("﷐'line",206))),cljs.core.hash_map("﷐'line",206))))));
}
}));
domina.test.add_test.call(null,"Insert a single child to multiple parents",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div class='testInserts' id='testInsert1'></div>");
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div class='testInserts' id='testInsert2'></div>");
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//div[@class='testInserts']"),"<p class='i1'></p>");
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//div[@class='testInserts']"),"<p class='i3'></p>");
domina.insert_BANG_.call(null,domina.xpath.xpath.call(null,"//div[@class='testInserts']"),"<p class='i2'></p>",1);
var G__6754__6755 = cljs.core.seq.call(null,cljs.core.Vector.fromArray([domina.xpath.xpath.call(null,"//div[@id='testInsert1']"),domina.xpath.xpath.call(null,"//div[@id='testInsert2']")]));

if(cljs.core.truth_(G__6754__6755))
{var children__6756 = cljs.core.first.call(null,G__6754__6755);
var G__6754__6757 = G__6754__6755;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,children__6756,"p"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",3,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","﷑'children","p"),cljs.core.hash_map("﷐'line",222))),cljs.core.hash_map("﷐'line",222))),cljs.core.hash_map("﷐'line",222))),cljs.core.hash_map("﷐'line",222))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,children__6756,"p[@class='i2']/preceding-sibling::*"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","﷑'children","p[@class='i2']/preceding-sibling::*"),cljs.core.hash_map("﷐'line",223))),cljs.core.hash_map("﷐'line",223))),cljs.core.hash_map("﷐'line",223))),cljs.core.hash_map("﷐'line",223))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,children__6756,"p[@class='i2']/following-sibling::*"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","﷑'children","p[@class='i2']/following-sibling::*"),cljs.core.hash_map("﷐'line",225))),cljs.core.hash_map("﷐'line",225))),cljs.core.hash_map("﷐'line",225))),cljs.core.hash_map("﷐'line",225))))));
}
var temp__3698__auto____6758 = cljs.core.next.call(null,G__6754__6757);

if(cljs.core.truth_(temp__3698__auto____6758))
{var G__6754__6759 = temp__3698__auto____6758;

{
var G__6766 = cljs.core.first.call(null,G__6754__6759);
var G__6767 = G__6754__6759;
children__6756 = G__6766;
G__6754__6757 = G__6767;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
}));
domina.test.add_test.call(null,"destroy a single node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<p class='appended1'>app1</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//body/p[@class='appended1']"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/p[@class='appended1']"),cljs.core.hash_map("﷐'line",231))),cljs.core.hash_map("﷐'line",231))),cljs.core.hash_map("﷐'line",231))),cljs.core.hash_map("﷐'line",231))))));
}
domina.destroy_BANG_.call(null,domina.xpath.xpath.call(null,"//body/p[@class='appended1']"));
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//body/p[@class='appended1']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",0,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/p[@class='appended1']"),cljs.core.hash_map("﷐'line",233))),cljs.core.hash_map("﷐'line",233))),cljs.core.hash_map("﷐'line",233))),cljs.core.hash_map("﷐'line",233))))));
}
}));
domina.test.add_test.call(null,"destroy multiple nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<p class='appended2'>app1</p><p class='appended2'>app2</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//body/p[@class='appended2']"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",2,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/p[@class='appended2']"),cljs.core.hash_map("﷐'line",239))),cljs.core.hash_map("﷐'line",239))),cljs.core.hash_map("﷐'line",239))),cljs.core.hash_map("﷐'line",239))))));
}
domina.destroy_BANG_.call(null,domina.xpath.xpath.call(null,"//body/p[@class='appended2']"));
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//body/p[@class='appended2']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",0,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/p[@class='appended2']"),cljs.core.hash_map("﷐'line",241))),cljs.core.hash_map("﷐'line",241))),cljs.core.hash_map("﷐'line",241))),cljs.core.hash_map("﷐'line",241))))));
}
}));
domina.test.add_test.call(null,"detach and reattach a single node",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
var n__6777 = domina.detach_BANG_.call(null,domina.xpath.xpath.call(null,"//p[@class='p3']"));

if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p[@class='p3']"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",0,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p[@class='p3']"),cljs.core.hash_map("﷐'line",247))),cljs.core.hash_map("﷐'line",247))),cljs.core.hash_map("﷐'line",247))),cljs.core.hash_map("﷐'line",247))))));
}
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//div[@class='d1']"),n__6777);
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p[@class='p3']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p[@class='p3']"),cljs.core.hash_map("﷐'line",249))),cljs.core.hash_map("﷐'line",249))),cljs.core.hash_map("﷐'line",249))),cljs.core.hash_map("﷐'line",249))))));
}
}));
domina.test.add_test.call(null,"detach and reattach multiple nodes",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
var n__6817 = domina.detach_BANG_.call(null,domina.xpath.xpath.call(null,"//div[@class='d1']/p"));

if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@class='d1']/p"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",0,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@class='d1']/p"),cljs.core.hash_map("﷐'line",255))),cljs.core.hash_map("﷐'line",255))),cljs.core.hash_map("﷐'line",255))),cljs.core.hash_map("﷐'line",255))))));
}
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//div[@class='d1']"),n__6817);
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@class='d1']/p"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",3,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@class='d1']/p"),cljs.core.hash_map("﷐'line",257))),cljs.core.hash_map("﷐'line",257))),cljs.core.hash_map("﷐'line",257))),cljs.core.hash_map("﷐'line",257))))));
}
}));
domina.test.add_test.call(null,"clear a node's contents",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
domina.destroy_children_BANG_.call(null,domina.xpath.xpath.call(null,"//div[@class='d1']"));
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@class='d1']"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@class='d1']"),cljs.core.hash_map("﷐'line",263))),cljs.core.hash_map("﷐'line",263))),cljs.core.hash_map("﷐'line",263))),cljs.core.hash_map("﷐'line",263))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@class='d1']/*"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",0,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@class='d1']/*"),cljs.core.hash_map("﷐'line",264))),cljs.core.hash_map("﷐'line",264))),cljs.core.hash_map("﷐'line",264))),cljs.core.hash_map("﷐'line",264))))));
}
}));
domina.test.add_test.call(null,"insert-before! with a single reference and single new node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='ref'>Some content</div>");
domina.insert_before_BANG_.call(null,domina.nodes.call(null,domina.by_id.call(null,"ref")),"<p>before</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@id='ref']/preceding-sibling::*[text()='before']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@id='ref']/preceding-sibling::*[text()='before']"),cljs.core.hash_map("﷐'line",270))),cljs.core.hash_map("﷐'line",270))),cljs.core.hash_map("﷐'line",270))),cljs.core.hash_map("﷐'line",270))))));
}
}));
domina.test.add_test.call(null,"insert-before! with a single reference and multiple new nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='ref'>Some content</div>");
domina.insert_before_BANG_.call(null,domina.nodes.call(null,domina.by_id.call(null,"ref")),"<p>before1</p><p>before2</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@id='ref']/preceding-sibling::*[text()='before2' and position()=1]"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@id='ref']/preceding-sibling::*[text()='before2' and position()=1]"),cljs.core.hash_map("﷐'line",276))),cljs.core.hash_map("﷐'line",276))),cljs.core.hash_map("﷐'line",276))),cljs.core.hash_map("﷐'line",276))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@id='ref']/preceding-sibling::*[text()='before1' and position()=2]"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@id='ref']/preceding-sibling::*[text()='before1' and position()=2]"),cljs.core.hash_map("﷐'line",277))),cljs.core.hash_map("﷐'line",277))),cljs.core.hash_map("﷐'line",277))),cljs.core.hash_map("﷐'line",277))))));
}
}));
domina.test.add_test.call(null,"insert-before! with multiple reference nodes and a single new node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div class='ref' id='ref1'>content1</div>");
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div class='ref' id='ref2'>content2</div>");
domina.insert_before_BANG_.call(null,domina.nodes.call(null,domina.by_class.call(null,"ref")),"<p>before</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",2,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",284))),cljs.core.hash_map("﷐'line",284))),cljs.core.hash_map("﷐'line",284))),cljs.core.hash_map("﷐'line",284))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@id='ref1']/preceding-sibling::p"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@id='ref1']/preceding-sibling::p"),cljs.core.hash_map("﷐'line",285))),cljs.core.hash_map("﷐'line",285))),cljs.core.hash_map("﷐'line",285))),cljs.core.hash_map("﷐'line",285))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@id='ref2']/preceding-sibling::p"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",2,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@id='ref2']/preceding-sibling::p"),cljs.core.hash_map("﷐'line",286))),cljs.core.hash_map("﷐'line",286))),cljs.core.hash_map("﷐'line",286))),cljs.core.hash_map("﷐'line",286))))));
}
}));
domina.test.add_test.call(null,"insert-after! with a single reference and single new node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='ref'>Some content</div>");
domina.insert_after_BANG_.call(null,domina.nodes.call(null,domina.by_id.call(null,"ref")),"<p>after</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@id='ref']/following-sibling::*[text()='after']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@id='ref']/following-sibling::*[text()='after']"),cljs.core.hash_map("﷐'line",292))),cljs.core.hash_map("﷐'line",292))),cljs.core.hash_map("﷐'line",292))),cljs.core.hash_map("﷐'line",292))))));
}
}));
domina.test.add_test.call(null,"insert-after! with a single reference and multiple new nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='ref'>Some content</div>");
domina.insert_after_BANG_.call(null,domina.nodes.call(null,domina.by_id.call(null,"ref")),"<p>after1</p><p>after2</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@id='ref']/following-sibling::*[text()='after1' and position()=1]"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@id='ref']/following-sibling::*[text()='after1' and position()=1]"),cljs.core.hash_map("﷐'line",298))),cljs.core.hash_map("﷐'line",298))),cljs.core.hash_map("﷐'line",298))),cljs.core.hash_map("﷐'line",298))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@id='ref']/following-sibling::*[text()='after2' and position()=2]"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@id='ref']/following-sibling::*[text()='after2' and position()=2]"),cljs.core.hash_map("﷐'line",299))),cljs.core.hash_map("﷐'line",299))),cljs.core.hash_map("﷐'line",299))),cljs.core.hash_map("﷐'line",299))))));
}
}));
domina.test.add_test.call(null,"insert-after! with multiple reference nodes and a single new node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div class='ref' id='ref1'>content1</div>");
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div class='ref' id='ref2'>content2</div>");
domina.insert_after_BANG_.call(null,domina.nodes.call(null,domina.by_class.call(null,"ref")),"<p>after</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",2,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",306))),cljs.core.hash_map("﷐'line",306))),cljs.core.hash_map("﷐'line",306))),cljs.core.hash_map("﷐'line",306))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@id='ref1']/following-sibling::p"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",2,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@id='ref1']/following-sibling::p"),cljs.core.hash_map("﷐'line",307))),cljs.core.hash_map("﷐'line",307))),cljs.core.hash_map("﷐'line",307))),cljs.core.hash_map("﷐'line",307))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@id='ref2']/following-sibling::p"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@id='ref2']/following-sibling::p"),cljs.core.hash_map("﷐'line",308))),cljs.core.hash_map("﷐'line",308))),cljs.core.hash_map("﷐'line",308))),cljs.core.hash_map("﷐'line",308))))));
}
}));
domina.test.add_test.call(null,"swap-content! with a single reference node and a single new node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div><p id='before'>TYPO</p></div>");
domina.swap_content_BANG_.call(null,domina.xpath.xpath.call(null,"//p[@id='before']"),"<p id='after'>fixed</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p[@id='before']"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",0,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p[@id='before']"),cljs.core.hash_map("﷐'line",314))),cljs.core.hash_map("﷐'line",314))),cljs.core.hash_map("﷐'line",314))),cljs.core.hash_map("﷐'line",314))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p[@id='after']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p[@id='after']"),cljs.core.hash_map("﷐'line",315))),cljs.core.hash_map("﷐'line",315))),cljs.core.hash_map("﷐'line",315))),cljs.core.hash_map("﷐'line",315))))));
}
}));
domina.test.add_test.call(null,"swap-content! with a single reference node and multiple new nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div><p id='before'>TYPO</p></div>");
domina.swap_content_BANG_.call(null,domina.xpath.xpath.call(null,"//p[@id='before']"),"<p class='after'>fixed1</p><p class='after'>fixed2</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p[@id='before']"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",0,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p[@id='before']"),cljs.core.hash_map("﷐'line",321))),cljs.core.hash_map("﷐'line",321))),cljs.core.hash_map("﷐'line",321))),cljs.core.hash_map("﷐'line",321))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p[@class='after']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",2,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p[@class='after']"),cljs.core.hash_map("﷐'line",322))),cljs.core.hash_map("﷐'line",322))),cljs.core.hash_map("﷐'line",322))),cljs.core.hash_map("﷐'line",322))))));
}
}));
domina.test.add_test.call(null,"swap-content! with multiple reference nodes and multiple new nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div><p class='before'>TYPO-1</p></div>");
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div><p class='before'>TYPO-2</p></div>");
domina.swap_content_BANG_.call(null,domina.xpath.xpath.call(null,"//p[@class='before']"),"<p class='after'>fixed1</p><p class='after'>fixed2</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p[@class='before']"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",0,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p[@class='before']"),cljs.core.hash_map("﷐'line",329))),cljs.core.hash_map("﷐'line",329))),cljs.core.hash_map("﷐'line",329))),cljs.core.hash_map("﷐'line",329))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p[@class='after']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",4,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p[@class='after']"),cljs.core.hash_map("﷐'line",330))),cljs.core.hash_map("﷐'line",330))),cljs.core.hash_map("﷐'line",330))),cljs.core.hash_map("﷐'line",330))))));
}
}));
domina.test.add_test.call(null,"can retrieve a css property value",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div style=\"background-color: maroon;\">Test</div>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"maroon",domina.style.call(null,domina.xpath.xpath.call(null,"//div"),"background-color"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","maroon",cljs.core.with_meta(cljs.core.list("﷑'style",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",337)),"background-color"),cljs.core.hash_map("﷐'line",337))),cljs.core.hash_map("﷐'line",337))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"maroon",domina.style.call(null,domina.xpath.xpath.call(null,"//div"),"﷐'background-color"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","maroon",cljs.core.with_meta(cljs.core.list("﷑'style",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",338)),"﷐'background-color"),cljs.core.hash_map("﷐'line",338))),cljs.core.hash_map("﷐'line",338))))));
}
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,domina.style.call(null,domina.xpath.xpath.call(null,"//div"),"﷐'no-such-style"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'nil?",cljs.core.with_meta(cljs.core.list("﷑'style",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",339)),"﷐'no-such-style"),cljs.core.hash_map("﷐'line",339))),cljs.core.hash_map("﷐'line",339))))));
}
}));
domina.test.add_test.call(null,"can retrieve an HTML attribute value",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div height=\"42\">Content!</div>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"42",domina.attr.call(null,domina.xpath.xpath.call(null,"//div"),"height"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","42",cljs.core.with_meta(cljs.core.list("﷑'attr",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",344)),"height"),cljs.core.hash_map("﷐'line",344))),cljs.core.hash_map("﷐'line",344))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"42",domina.attr.call(null,domina.xpath.xpath.call(null,"//div"),"﷐'height"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","42",cljs.core.with_meta(cljs.core.list("﷑'attr",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",345)),"﷐'height"),cljs.core.hash_map("﷐'line",345))),cljs.core.hash_map("﷐'line",345))))));
}
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,domina.attr.call(null,domina.xpath.xpath.call(null,"//div"),"﷐'no-such-attr:c"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'nil?",cljs.core.with_meta(cljs.core.list("﷑'attr",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",346)),"﷐'no-such-attr:c"),cljs.core.hash_map("﷐'line",346))),cljs.core.hash_map("﷐'line",346))))));
}
}));
domina.test.add_test.call(null,"can set a css property on a single node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div>1</div><div>2</div>");
domina.set_style_BANG_.call(null,domina.xpath.xpath.call(null,"//div[1]"),"background-color","red");
domina.set_style_BANG_.call(null,domina.xpath.xpath.call(null,"//div[2]"),"﷐'background-color","green");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"red",domina.style.call(null,domina.xpath.xpath.call(null,"//div[1]"),"background-color"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","red",cljs.core.with_meta(cljs.core.list("﷑'style",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[1]"),cljs.core.hash_map("﷐'line",353)),"background-color"),cljs.core.hash_map("﷐'line",353))),cljs.core.hash_map("﷐'line",353))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"green",domina.style.call(null,domina.xpath.xpath.call(null,"//div[2]"),"background-color"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","green",cljs.core.with_meta(cljs.core.list("﷑'style",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[2]"),cljs.core.hash_map("﷐'line",354)),"background-color"),cljs.core.hash_map("﷐'line",354))),cljs.core.hash_map("﷐'line",354))))));
}
}));
domina.test.add_test.call(null,"can set a css property on multiple nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div>1</div><div>2</div>");
domina.set_style_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),"color","red");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"red",domina.style.call(null,domina.xpath.xpath.call(null,"//div[1]"),"color"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","red",cljs.core.with_meta(cljs.core.list("﷑'style",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[1]"),cljs.core.hash_map("﷐'line",360)),"color"),cljs.core.hash_map("﷐'line",360))),cljs.core.hash_map("﷐'line",360))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"red",domina.style.call(null,domina.xpath.xpath.call(null,"//div[2]"),"color"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","red",cljs.core.with_meta(cljs.core.list("﷑'style",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[2]"),cljs.core.hash_map("﷐'line",361)),"color"),cljs.core.hash_map("﷐'line",361))),cljs.core.hash_map("﷐'line",361))))));
}
}));
domina.test.add_test.call(null,"can set a html attribute on a single node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div>1</div><div>2</div>");
domina.set_attr_BANG_.call(null,domina.xpath.xpath.call(null,"//div[1]"),"width",42);
domina.set_attr_BANG_.call(null,domina.xpath.xpath.call(null,"//div[2]"),"﷐'width",42);
if(cljs.core.truth_(cljs.core._EQ_.call(null,"42",domina.attr.call(null,domina.xpath.xpath.call(null,"//div[1]"),"width"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","42",cljs.core.with_meta(cljs.core.list("﷑'attr",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[1]"),cljs.core.hash_map("﷐'line",368)),"width"),cljs.core.hash_map("﷐'line",368))),cljs.core.hash_map("﷐'line",368))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"42",domina.attr.call(null,domina.xpath.xpath.call(null,"//div[2]"),"width"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","42",cljs.core.with_meta(cljs.core.list("﷑'attr",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[2]"),cljs.core.hash_map("﷐'line",369)),"width"),cljs.core.hash_map("﷐'line",369))),cljs.core.hash_map("﷐'line",369))))));
}
}));
domina.test.add_test.call(null,"can get multiple CSS styles from a single node.",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div>1</div>");
domina.set_style_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),"color","red");
domina.set_style_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),"background-color","black");
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'color","﷐'background-color"],{"﷐'color":"red","﷐'background-color":"black"}),domina.styles.call(null,domina.xpath.xpath.call(null,"//div")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",cljs.core.hash_map("﷐'color","red","﷐'background-color","black"),cljs.core.with_meta(cljs.core.list("﷑'styles",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",377))),cljs.core.hash_map("﷐'line",377))),cljs.core.hash_map("﷐'line",376))))));
}
}));
domina.test.add_test.call(null,"can get multiple HTML attributes from a single node.",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div>1</div>");
domina.set_attr_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),"width",42);
domina.set_attr_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),"height",24);
var attributes__6965 = domina.attrs.call(null,domina.xpath.xpath.call(null,"//div"));

if(cljs.core.truth_(cljs.core._EQ_.call(null,"42","﷐'width".call(null,attributes__6965))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","42",cljs.core.with_meta(cljs.core.list("﷐'width","﷑'attributes"),cljs.core.hash_map("﷐'line",385))),cljs.core.hash_map("﷐'line",385))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"24","﷐'height".call(null,attributes__6965))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","24",cljs.core.with_meta(cljs.core.list("﷐'height","﷑'attributes"),cljs.core.hash_map("﷐'line",386))),cljs.core.hash_map("﷐'line",386))))));
}
}));
domina.test.add_test.call(null,"can set multiple CSS styles on a single node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div>1</div>");
domina.set_styles_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),cljs.core.ObjMap.fromObject(["﷐'color","﷐'background-color"],{"﷐'color":"red","﷐'background-color":"black"}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"black",domina.style.call(null,domina.xpath.xpath.call(null,"//div"),"background-color"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","black",cljs.core.with_meta(cljs.core.list("﷑'style",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",393)),"background-color"),cljs.core.hash_map("﷐'line",393))),cljs.core.hash_map("﷐'line",393))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"red",domina.style.call(null,domina.xpath.xpath.call(null,"//div"),"color"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","red",cljs.core.with_meta(cljs.core.list("﷑'style",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",394)),"color"),cljs.core.hash_map("﷐'line",394))),cljs.core.hash_map("﷐'line",394))))));
}
}));
domina.test.add_test.call(null,"can set multiple CSS styles on multiple nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div>1</div><div>2</div>");
domina.set_styles_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),cljs.core.ObjMap.fromObject(["﷐'color","﷐'background-color"],{"﷐'color":"red","﷐'background-color":"black"}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"black",domina.style.call(null,domina.xpath.xpath.call(null,"//div[1]"),"background-color"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","black",cljs.core.with_meta(cljs.core.list("﷑'style",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[1]"),cljs.core.hash_map("﷐'line",401)),"background-color"),cljs.core.hash_map("﷐'line",401))),cljs.core.hash_map("﷐'line",401))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"red",domina.style.call(null,domina.xpath.xpath.call(null,"//div[1]"),"color"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","red",cljs.core.with_meta(cljs.core.list("﷑'style",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[1]"),cljs.core.hash_map("﷐'line",402)),"color"),cljs.core.hash_map("﷐'line",402))),cljs.core.hash_map("﷐'line",402))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"black",domina.style.call(null,domina.xpath.xpath.call(null,"//div[2]"),"background-color"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","black",cljs.core.with_meta(cljs.core.list("﷑'style",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[2]"),cljs.core.hash_map("﷐'line",403)),"background-color"),cljs.core.hash_map("﷐'line",403))),cljs.core.hash_map("﷐'line",403))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"red",domina.style.call(null,domina.xpath.xpath.call(null,"//div[2]"),"color"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","red",cljs.core.with_meta(cljs.core.list("﷑'style",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[2]"),cljs.core.hash_map("﷐'line",404)),"color"),cljs.core.hash_map("﷐'line",404))),cljs.core.hash_map("﷐'line",404))))));
}
}));
domina.test.add_test.call(null,"can set multiple HTML attributes on a single node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div>1</div>");
domina.set_attrs_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),cljs.core.ObjMap.fromObject(["﷐'width","﷐'height"],{"﷐'width":42,"﷐'height":24}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"42",domina.attr.call(null,domina.xpath.xpath.call(null,"//div"),"width"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","42",cljs.core.with_meta(cljs.core.list("﷑'attr",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",411)),"width"),cljs.core.hash_map("﷐'line",411))),cljs.core.hash_map("﷐'line",411))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"24",domina.attr.call(null,domina.xpath.xpath.call(null,"//div"),"height"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","24",cljs.core.with_meta(cljs.core.list("﷑'attr",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",412)),"height"),cljs.core.hash_map("﷐'line",412))),cljs.core.hash_map("﷐'line",412))))));
}
}));
domina.test.add_test.call(null,"can set multiple CSS styles on multiple nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div>1</div><div>2</div>");
domina.set_attrs_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),cljs.core.ObjMap.fromObject(["﷐'width","﷐'height"],{"﷐'width":42,"﷐'height":24}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"42",domina.attr.call(null,domina.xpath.xpath.call(null,"//div[1]"),"width"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","42",cljs.core.with_meta(cljs.core.list("﷑'attr",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[1]"),cljs.core.hash_map("﷐'line",419)),"width"),cljs.core.hash_map("﷐'line",419))),cljs.core.hash_map("﷐'line",419))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"24",domina.attr.call(null,domina.xpath.xpath.call(null,"//div[1]"),"height"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","24",cljs.core.with_meta(cljs.core.list("﷑'attr",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[1]"),cljs.core.hash_map("﷐'line",420)),"height"),cljs.core.hash_map("﷐'line",420))),cljs.core.hash_map("﷐'line",420))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"42",domina.attr.call(null,domina.xpath.xpath.call(null,"//div[2]"),"width"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","42",cljs.core.with_meta(cljs.core.list("﷑'attr",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[2]"),cljs.core.hash_map("﷐'line",421)),"width"),cljs.core.hash_map("﷐'line",421))),cljs.core.hash_map("﷐'line",421))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"24",domina.attr.call(null,domina.xpath.xpath.call(null,"//div[2]"),"height"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","24",cljs.core.with_meta(cljs.core.list("﷑'attr",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[2]"),cljs.core.hash_map("﷐'line",422)),"height"),cljs.core.hash_map("﷐'line",422))),cljs.core.hash_map("﷐'line",422))))));
}
}));
domina.test.add_test.call(null,"test the has-class? function",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div class='class1'>1</div>");
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div class='class2'>2</div>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div[1]"),"class1"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",true,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[1]"),cljs.core.hash_map("﷐'line",428)),"class1"),cljs.core.hash_map("﷐'line",428))),cljs.core.hash_map("﷐'line",428))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div[2]"),"class2"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",true,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[2]"),cljs.core.hash_map("﷐'line",429)),"class2"),cljs.core.hash_map("﷐'line",429))),cljs.core.hash_map("﷐'line",429))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,false,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div[1]"),"class2"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",false,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[1]"),cljs.core.hash_map("﷐'line",430)),"class2"),cljs.core.hash_map("﷐'line",430))),cljs.core.hash_map("﷐'line",430))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,false,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div[2]"),"class1"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",false,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[2]"),cljs.core.hash_map("﷐'line",431)),"class1"),cljs.core.hash_map("﷐'line",431))),cljs.core.hash_map("﷐'line",431))))));
}
}));
domina.test.add_test.call(null,"can add a CSS class to a single node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div>1</div>");
domina.add_class_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),"class1");
domina.add_class_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),"class2");
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div"),"class1"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",true,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",438)),"class1"),cljs.core.hash_map("﷐'line",438))),cljs.core.hash_map("﷐'line",438))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div"),"class2"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",true,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",439)),"class2"),cljs.core.hash_map("﷐'line",439))),cljs.core.hash_map("﷐'line",439))))));
}
}));
domina.test.add_test.call(null,"can add a CSS class to multiple nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div>1</div><div>2</div>");
domina.add_class_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),"class1");
domina.add_class_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),"class2");
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div[1]"),"class1"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",true,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[1]"),cljs.core.hash_map("﷐'line",446)),"class1"),cljs.core.hash_map("﷐'line",446))),cljs.core.hash_map("﷐'line",446))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div[2]"),"class1"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",true,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[2]"),cljs.core.hash_map("﷐'line",447)),"class1"),cljs.core.hash_map("﷐'line",447))),cljs.core.hash_map("﷐'line",447))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div[1]"),"class2"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",true,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[1]"),cljs.core.hash_map("﷐'line",448)),"class2"),cljs.core.hash_map("﷐'line",448))),cljs.core.hash_map("﷐'line",448))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div[2]"),"class2"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",true,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[2]"),cljs.core.hash_map("﷐'line",449)),"class2"),cljs.core.hash_map("﷐'line",449))),cljs.core.hash_map("﷐'line",449))))));
}
}));
domina.test.add_test.call(null,"can remove a CSS class from a single node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div class='class1 class2'>1</div>");
domina.remove_class_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),"class1");
if(cljs.core.truth_(cljs.core._EQ_.call(null,false,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div"),"class1"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",false,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",455)),"class1"),cljs.core.hash_map("﷐'line",455))),cljs.core.hash_map("﷐'line",455))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div"),"class2"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",true,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",456)),"class2"),cljs.core.hash_map("﷐'line",456))),cljs.core.hash_map("﷐'line",456))))));
}
}));
domina.test.add_test.call(null,"can remove a CSS class from a multiple nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div class='class1 class2'>1</div><div class='class1 class2'>2</div>");
domina.remove_class_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),"class1");
if(cljs.core.truth_(cljs.core._EQ_.call(null,false,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div[1]"),"class1"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",false,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[1]"),cljs.core.hash_map("﷐'line",462)),"class1"),cljs.core.hash_map("﷐'line",462))),cljs.core.hash_map("﷐'line",462))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div[1]"),"class2"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",true,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[1]"),cljs.core.hash_map("﷐'line",463)),"class2"),cljs.core.hash_map("﷐'line",463))),cljs.core.hash_map("﷐'line",463))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,false,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div[2]"),"class1"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",false,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[2]"),cljs.core.hash_map("﷐'line",464)),"class1"),cljs.core.hash_map("﷐'line",464))),cljs.core.hash_map("﷐'line",464))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div[2]"),"class2"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",true,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[2]"),cljs.core.hash_map("﷐'line",465)),"class2"),cljs.core.hash_map("﷐'line",465))),cljs.core.hash_map("﷐'line",465))))));
}
}));
domina.test.add_test.call(null,"can get a list of all css classes for a node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div class='class1 class2 class3'>1</div>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray(["class1","class2","class3"]),domina.classes.call(null,domina.xpath.xpath.call(null,"//div")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",(new cljs.core.Vector(null, ["class1","class2","class3"])),cljs.core.with_meta(cljs.core.list("﷑'classes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",470))),cljs.core.hash_map("﷐'line",470))),cljs.core.hash_map("﷐'line",470))))));
}
}));
domina.test.add_test.call(null,"can retrieve the text value of a node with normalization.",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<p>\n\n   Some text.  \n  </p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Some text.",domina.text.call(null,domina.xpath.xpath.call(null,"//p")))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Some text.",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",475))),cljs.core.hash_map("﷐'line",475))),cljs.core.hash_map("﷐'line",475))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Some text.",domina.text.call(null,domina.xpath.xpath.call(null,"//p"),true))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Some text.",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",476)),true),cljs.core.hash_map("﷐'line",476))),cljs.core.hash_map("﷐'line",476))))));
}
}));
domina.test.add_test.call(null,"can set text on a single node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<p></p>");
domina.set_text_BANG_.call(null,domina.xpath.xpath.call(null,"//p"),"Hello world!");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Hello world!",domina.text.call(null,domina.xpath.xpath.call(null,"//p")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Hello world!",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",489))),cljs.core.hash_map("﷐'line",489))),cljs.core.hash_map("﷐'line",489))))));
}
}));
domina.test.add_test.call(null,"can set text on a multiple nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<p></p><p></p>");
domina.set_text_BANG_.call(null,domina.xpath.xpath.call(null,"//p"),"Hello world!");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Hello world!",domina.text.call(null,domina.xpath.xpath.call(null,"//p[1]")))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Hello world!",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p[1]"),cljs.core.hash_map("﷐'line",495))),cljs.core.hash_map("﷐'line",495))),cljs.core.hash_map("﷐'line",495))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Hello world!",domina.text.call(null,domina.xpath.xpath.call(null,"//p[2]")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Hello world!",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p[2]"),cljs.core.hash_map("﷐'line",496))),cljs.core.hash_map("﷐'line",496))),cljs.core.hash_map("﷐'line",496))))));
}
}));
domina.test.add_test.call(null,"can get a form field value",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<form><input type='text' name='test' value='Test Value'></input></form>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Test Value",domina.value.call(null,domina.xpath.xpath.call(null,"//input")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Test Value",cljs.core.with_meta(cljs.core.list("﷑'value",cljs.core.with_meta(cljs.core.list("﷑'xpath","//input"),cljs.core.hash_map("﷐'line",501))),cljs.core.hash_map("﷐'line",501))),cljs.core.hash_map("﷐'line",501))))));
}
}));
domina.test.add_test.call(null,"can set a form field value",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<form><input type='text' name='test'></input></form>");
domina.set_value_BANG_.call(null,domina.xpath.xpath.call(null,"//input"),"Test Value");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Test Value",domina.value.call(null,domina.xpath.xpath.call(null,"//input")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Test Value",cljs.core.with_meta(cljs.core.list("﷑'value",cljs.core.with_meta(cljs.core.list("﷑'xpath","//input"),cljs.core.hash_map("﷐'line",507))),cljs.core.hash_map("﷐'line",507))),cljs.core.hash_map("﷐'line",507))))));
}
}));
domina.test.add_test.call(null,"can set multiple form field values",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<form><input type='text' name='test'></input><input type='text' name='test'></input></form>");
domina.set_value_BANG_.call(null,domina.xpath.xpath.call(null,"//input"),"Test Value");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Test Value",domina.value.call(null,domina.xpath.xpath.call(null,"//input[1]")))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Test Value",cljs.core.with_meta(cljs.core.list("﷑'value",cljs.core.with_meta(cljs.core.list("﷑'xpath","//input[1]"),cljs.core.hash_map("﷐'line",513))),cljs.core.hash_map("﷐'line",513))),cljs.core.hash_map("﷐'line",513))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Test Value",domina.value.call(null,domina.xpath.xpath.call(null,"//input[2]")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Test Value",cljs.core.with_meta(cljs.core.list("﷑'value",cljs.core.with_meta(cljs.core.list("﷑'xpath","//input[2]"),cljs.core.hash_map("﷐'line",514))),cljs.core.hash_map("﷐'line",514))),cljs.core.hash_map("﷐'line",514))))));
}
}));
domina.test.add_test.call(null,"can get a node's innerHTML",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div><p class='foobar'>some text</p></div>");
if(cljs.core.truth_((function (){var or__3548__auto____7023 = cljs.core._EQ_.call(null,"<p class=\"foobar\">some text</p>",domina.html.call(null,domina.xpath.xpath.call(null,"//div")));

if(cljs.core.truth_(or__3548__auto____7023))
{return or__3548__auto____7023;
} else
{return cljs.core._EQ_.call(null,"<P class=foobar>some text</P>",domina.html.call(null,domina.xpath.xpath.call(null,"//div")));
}
})()))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'or",cljs.core.with_meta(cljs.core.list("﷑'=","<p class=\"foobar\">some text</p>",cljs.core.with_meta(cljs.core.list("﷑'html",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",520))),cljs.core.hash_map("﷐'line",520))),cljs.core.hash_map("﷐'line",520)),cljs.core.with_meta(cljs.core.list("﷑'=","<P class=foobar>some text</P>",cljs.core.with_meta(cljs.core.list("﷑'html",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",521))),cljs.core.hash_map("﷐'line",521))),cljs.core.hash_map("﷐'line",521))),cljs.core.hash_map("﷐'line",520))))));
}
}));
domina.test.add_test.call(null,"can set a node's innerHTML",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div></div>");
domina.set_html_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),"<p class='foobar'>some text</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//body/div/p[@class='foobar']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/div/p[@class='foobar']"),cljs.core.hash_map("﷐'line",527))),cljs.core.hash_map("﷐'line",527))),cljs.core.hash_map("﷐'line",527))),cljs.core.hash_map("﷐'line",527))))));
}
}));
domina.test.add_test.call(null,"can set multiple nodes' innerHTML",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div></div><div></div>");
domina.set_html_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),"<p class='foobar'>some text</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//body/div/p[@class='foobar']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",2,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/div/p[@class='foobar']"),cljs.core.hash_map("﷐'line",533))),cljs.core.hash_map("﷐'line",533))),cljs.core.hash_map("﷐'line",533))),cljs.core.hash_map("﷐'line",533))))));
}
}));
domina.test.add_test.call(null,"can set a table's innerHTML",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<table></table>");
domina.set_html_BANG_.call(null,domina.xpath.xpath.call(null,"//table"),"<tr class='foobar'><th>some</th><td>text</td></tr>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//body/table/tr[@class='foobar']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/table/tr[@class='foobar']"),cljs.core.hash_map("﷐'line",539))),cljs.core.hash_map("﷐'line",539))),cljs.core.hash_map("﷐'line",539))),cljs.core.hash_map("﷐'line",539))))));
}
}));
domina.test.add_test.call(null,"can set multiple tables' innerHTML",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<table></table><table></table>");
domina.set_html_BANG_.call(null,domina.xpath.xpath.call(null,"//table"),"<tr class='foobar'><th>some</th><td>text</td></tr>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//body/table/tr[@class='foobar']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",2,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/table/tr[@class='foobar']"),cljs.core.hash_map("﷐'line",545))),cljs.core.hash_map("﷐'line",545))),cljs.core.hash_map("﷐'line",545))),cljs.core.hash_map("﷐'line",545))))));
}
}));
domina.test.add_test.call(null,"can get nodes from strings containing cell-level table fragments",(function (){
domina.test.reset.call(null);
var n__7050 = domina.nodes.call(null,"<td>Cell</td><th>Header</th>");

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,n__7050),2)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",cljs.core.with_meta(cljs.core.list("﷑'count","﷑'n"),cljs.core.hash_map("﷐'line",550)),2),cljs.core.hash_map("﷐'line",550))))));
}
var G__7051__7052 = cljs.core.seq.call(null,n__7050);

if(cljs.core.truth_(G__7051__7052))
{var h__7053 = cljs.core.first.call(null,G__7051__7052);
var G__7051__7054 = G__7051__7052;

while(true){
domina.log_debug.call(null,domina.single_node.call(null,h__7053).tagName);
if(cljs.core.truth_((function (){var or__3548__auto____7055 = cljs.core.re_find.call(null,/TableCell/,cljs.core.pr_str.call(null,h__7053));

if(cljs.core.truth_(or__3548__auto____7055))
{return or__3548__auto____7055;
} else
{return cljs.core.re_find.call(null,/TableDataCell/,cljs.core.pr_str.call(null,h__7053));
}
})()))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'or",cljs.core.with_meta(cljs.core.list("﷑'re-find",/TableCell/,cljs.core.with_meta(cljs.core.list("﷑'pr-str","﷑'h"),cljs.core.hash_map("﷐'line",553))),cljs.core.hash_map("﷐'line",553)),cljs.core.with_meta(cljs.core.list("﷑'re-find",/TableDataCell/,cljs.core.with_meta(cljs.core.list("﷑'pr-str","﷑'h"),cljs.core.hash_map("﷐'line",554))),cljs.core.hash_map("﷐'line",554))),cljs.core.hash_map("﷐'line",553))))));
}
var temp__3698__auto____7056 = cljs.core.next.call(null,G__7051__7054);

if(cljs.core.truth_(temp__3698__auto____7056))
{var G__7051__7057 = temp__3698__auto____7056;

{
var G__7083 = cljs.core.first.call(null,G__7051__7057);
var G__7084 = G__7051__7057;
h__7053 = G__7083;
G__7051__7054 = G__7084;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
}));
domina.test.add_test.call(null,"can get nodes from strings containing row-level table fragments",(function (){
domina.test.reset.call(null);
var n__7088 = domina.nodes.call(null,"<tr><td>Cell</td><th>Header</th></tr><tr><td>Another</td><th>Row</th></tr>");

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,n__7088),2)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",cljs.core.with_meta(cljs.core.list("﷑'count","﷑'n"),cljs.core.hash_map("﷐'line",559)),2),cljs.core.hash_map("﷐'line",559))))));
}
var G__7089__7090 = cljs.core.seq.call(null,n__7088);

if(cljs.core.truth_(G__7089__7090))
{var h__7091 = cljs.core.first.call(null,G__7089__7090);
var G__7089__7092 = G__7089__7090;

while(true){
domina.log_debug.call(null,domina.single_node.call(null,h__7091).tagName);
if(cljs.core.truth_(cljs.core.re_find.call(null,/TableRow/,cljs.core.pr_str.call(null,h__7091))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'re-find",/TableRow/,cljs.core.with_meta(cljs.core.list("﷑'pr-str","﷑'h"),cljs.core.hash_map("﷐'line",562))),cljs.core.hash_map("﷐'line",562))))));
}
var temp__3698__auto____7093 = cljs.core.next.call(null,G__7089__7092);

if(cljs.core.truth_(temp__3698__auto____7093))
{var G__7089__7094 = temp__3698__auto____7093;

{
var G__7110 = cljs.core.first.call(null,G__7089__7094);
var G__7111 = G__7089__7094;
h__7091 = G__7110;
G__7089__7092 = G__7111;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
}));
domina.test.add_test.call(null,"can get nodes from strings containing section-level table fragments",(function (){
domina.test.reset.call(null);
var n__7112 = domina.nodes.call(null,"<thead><tr><td>Cell</td><th>Header</th></tr></thead><tbody><tr><td>Another</td><th>Row</th></tr></tbody>");

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,n__7112),2)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",cljs.core.with_meta(cljs.core.list("﷑'count","﷑'n"),cljs.core.hash_map("﷐'line",567)),2),cljs.core.hash_map("﷐'line",567))))));
}
var G__7115__7116 = cljs.core.seq.call(null,n__7112);

if(cljs.core.truth_(G__7115__7116))
{var h__7117 = cljs.core.first.call(null,G__7115__7116);
var G__7115__7118 = G__7115__7116;

while(true){
domina.log_debug.call(null,domina.single_node.call(null,h__7117).tagName);
if(cljs.core.truth_(cljs.core.re_find.call(null,/TableSection/,cljs.core.pr_str.call(null,h__7117))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'re-find",/TableSection/,cljs.core.with_meta(cljs.core.list("﷑'pr-str","﷑'h"),cljs.core.hash_map("﷐'line",570))),cljs.core.hash_map("﷐'line",570))))));
}
var temp__3698__auto____7119 = cljs.core.next.call(null,G__7115__7118);

if(cljs.core.truth_(temp__3698__auto____7119))
{var G__7115__7121 = temp__3698__auto____7119;

{
var G__7122 = cljs.core.first.call(null,G__7115__7121);
var G__7123 = G__7115__7121;
h__7117 = G__7122;
G__7115__7118 = G__7123;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
}));
domina.test.add_test.call(null,"can trigger a handler on a :mouseover event",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='ref'>Some content</div>");
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"ref"),"﷐'mouseover",(function (){
return domina.append_BANG_.call(null,domina.by_id.call(null,"ref"),"<p>Hello world!</p>");
}));
var target__7148 = domina.by_id.call(null,"ref");

domina.events.fire_listeners_BANG_.call(null,target__7148,"﷐'mouseover",false,cljs.core.ObjMap.fromObject(["﷐'type","﷐'target"],{"﷐'type":"﷐'mouseover","﷐'target":target__7148}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Hello world!",domina.text.call(null,domina.xpath.xpath.call(null,"//p")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Hello world!",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",578))),cljs.core.hash_map("﷐'line",578))),cljs.core.hash_map("﷐'line",578))))));
}
}));
domina.test.add_test.call(null,"can trigger a handler on a :mouseout event",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='ref'>Some content</div>");
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"ref"),"﷐'mouseout",(function (){
return domina.append_BANG_.call(null,domina.by_id.call(null,"ref"),"<p>Hello world!</p>");
}));
var target__7151 = domina.by_id.call(null,"ref");

domina.events.fire_listeners_BANG_.call(null,target__7151,"﷐'mouseout",false,cljs.core.ObjMap.fromObject(["﷐'type","﷐'target"],{"﷐'type":"﷐'mouseout","﷐'target":target__7151}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Hello world!",domina.text.call(null,domina.xpath.xpath.call(null,"//p")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Hello world!",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",586))),cljs.core.hash_map("﷐'line",586))),cljs.core.hash_map("﷐'line",586))))));
}
}));
domina.test.add_test.call(null,"can trigger a handler on a :click event",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='ref'>Some content</div>");
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"ref"),"﷐'click",(function (){
return domina.append_BANG_.call(null,domina.by_id.call(null,"ref"),"<p>Hello world!</p>");
}));
var target__7161 = domina.by_id.call(null,"ref");

domina.events.fire_listeners_BANG_.call(null,target__7161,"﷐'click",false,cljs.core.ObjMap.fromObject(["﷐'type","﷐'target"],{"﷐'type":"﷐'click","﷐'target":target__7161}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Hello world!",domina.text.call(null,domina.xpath.xpath.call(null,"//p")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Hello world!",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",594))),cljs.core.hash_map("﷐'line",594))),cljs.core.hash_map("﷐'line",594))))));
}
}));
domina.test.add_test.call(null,"can trigger a handler on a :mouseenter event",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='parent'><div id='ref'></div></div>");
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"ref"),"﷐'mouseenter",(function (){
return domina.append_BANG_.call(null,domina.by_id.call(null,"ref"),"<p>Hello world!</p>");
}));
var rtarget__7164 = domina.by_id.call(null,"parent");
var target__7165 = domina.by_id.call(null,"ref");

domina.events.fire_listeners_BANG_.call(null,target__7165,"﷐'mouseenter",false,cljs.core.ObjMap.fromObject(["﷐'type","﷐'related-target","﷐'target"],{"﷐'type":"﷐'mouseenter","﷐'related-target":rtarget__7164,"﷐'target":target__7165}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Hello world!",domina.text.call(null,domina.xpath.xpath.call(null,"//p")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Hello world!",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",604))),cljs.core.hash_map("﷐'line",604))),cljs.core.hash_map("﷐'line",604))))));
}
}));
domina.test.add_test.call(null,"can trigger a handler on a :mouseleave event",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='parent'><div id='ref'></div></div>");
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"ref"),"﷐'mouseleave",(function (){
return domina.append_BANG_.call(null,domina.by_id.call(null,"ref"),"<p>Hello world!</p>");
}));
var rtarget__7167 = domina.by_id.call(null,"parent");
var target__7168 = domina.by_id.call(null,"ref");

domina.events.fire_listeners_BANG_.call(null,target__7168,"﷐'mouseleave",false,cljs.core.ObjMap.fromObject(["﷐'type","﷐'related-target","﷐'target"],{"﷐'type":"﷐'mouseleave","﷐'related-target":rtarget__7167,"﷐'target":target__7168}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Hello world!",domina.text.call(null,domina.xpath.xpath.call(null,"//p")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Hello world!",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",614))),cljs.core.hash_map("﷐'line",614))),cljs.core.hash_map("﷐'line",614))))));
}
}));
domina.test.add_test.call(null,"can remove-listeners on a :click event",(function (){
var handler__7180 = (function (){
return domina.append_BANG_.call(null,domina.by_id.call(null,"ref"),"<p>Hello world!</p>");
});

domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='ref'>Some content</div>");
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"ref"),"﷐'click",handler__7180);
domina.events.remove_listeners_BANG_.call(null,domina.by_id.call(null,"ref"),"﷐'click");
var target__7181 = domina.by_id.call(null,"ref");

domina.events.fire_listeners_BANG_.call(null,target__7181,"﷐'click",false,cljs.core.ObjMap.fromObject(["﷐'type","﷐'target"],{"﷐'type":"﷐'click","﷐'target":target__7181}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Some content",domina.text.call(null,domina.xpath.xpath.call(null,"//div")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Some content",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",624))),cljs.core.hash_map("﷐'line",624))),cljs.core.hash_map("﷐'line",624))))));
}
}));
domina.test.add_test.call(null,"can remove-listeners on a :mouseenter event",(function (){
var handler__7206 = (function (){
return domina.append_BANG_.call(null,domina.by_id.call(null,"ref"),"<p>Hello world!</p>");
});

domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='parent'><div id='ref'>Some content</div></div>");
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"ref"),"﷐'mouseenter",handler__7206);
domina.events.remove_listeners_BANG_.call(null,domina.by_id.call(null,"ref"),"﷐'mouseenter");
var rtarget__7207 = domina.by_id.call(null,"parent");
var target__7208 = domina.by_id.call(null,"ref");

domina.events.fire_listeners_BANG_.call(null,target__7208,"﷐'mouseenter",false,cljs.core.ObjMap.fromObject(["﷐'type","﷐'related-target","﷐'target"],{"﷐'type":"﷐'mouseenter","﷐'related-target":rtarget__7207,"﷐'target":target__7208}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Some content",domina.text.call(null,domina.xpath.xpath.call(null,"//div")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Some content",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",635))),cljs.core.hash_map("﷐'line",635))),cljs.core.hash_map("﷐'line",635))))));
}
}));
domina.test.add_test.call(null,"can unlisten! on a :click event",(function (){
var handler__7211 = (function (){
return domina.append_BANG_.call(null,domina.by_id.call(null,"ref"),"<p>Hello world!</p>");
});

domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='ref'>Some content</div>");
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"ref"),"﷐'click",handler__7211);
domina.events.unlisten_BANG_.call(null,domina.by_id.call(null,"ref"),"﷐'click",handler__7211);
var target__7214 = domina.by_id.call(null,"ref");

domina.events.fire_listeners_BANG_.call(null,target__7214,"﷐'click",false,cljs.core.ObjMap.fromObject(["﷐'type","﷐'target"],{"﷐'type":"﷐'click","﷐'target":target__7214}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Some content",domina.text.call(null,domina.xpath.xpath.call(null,"//div")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Some content",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",645))),cljs.core.hash_map("﷐'line",645))),cljs.core.hash_map("﷐'line",645))))));
}
}));
domina.test.add_test.call(null,"can unlisten! on a :mouseenter event",(function (){
var handler__7215 = (function (){
return domina.append_BANG_.call(null,domina.by_id.call(null,"ref"),"<p>Hello world!</p>");
});

domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='parent'><div id='ref'>Some content</div></div>");
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"ref"),"﷐'mouseenter",handler__7215);
domina.events.unlisten_BANG_.call(null,domina.by_id.call(null,"ref"),"﷐'mouseenter",handler__7215);
var rtarget__7229 = domina.by_id.call(null,"parent");
var target__7230 = domina.by_id.call(null,"ref");

domina.events.fire_listeners_BANG_.call(null,target__7230,"﷐'mouseenter",false,cljs.core.ObjMap.fromObject(["﷐'type","﷐'related-target","﷐'target"],{"﷐'type":"﷐'mouseenter","﷐'related-target":rtarget__7229,"﷐'target":target__7230}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Some content",domina.text.call(null,domina.xpath.xpath.call(null,"//div")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Some content",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",656))),cljs.core.hash_map("﷐'line",656))),cljs.core.hash_map("﷐'line",656))))));
}
}));
domina.test.add_test.call(null,"can append to a document fragment",(function (){
domina.test.reset.call(null);
var frag__7252 = document.createDocumentFragment();

domina.append_BANG_.call(null,frag__7252,"<div>testing</div>");
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),frag__7252);
if(cljs.core.truth_(cljs.core._EQ_.call(null,"testing",domina.text.call(null,domina.xpath.xpath.call(null,"//div")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","testing",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",664))),cljs.core.hash_map("﷐'line",664))),cljs.core.hash_map("﷐'line",664))))));
}
}));
domina.test.add_test.call(null,"doesn't clone unless necessary",(function (){
domina.test.reset.call(null);
var child__7253 = domina.single_node.call(null,"<div>hello</div>");

domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),child__7253);
if(cljs.core.truth_(cljs.core._EQ_.call(null,child__7253,domina.single_node.call(null,domina.xpath.xpath.call(null,"//body/div")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","﷑'child",cljs.core.with_meta(cljs.core.list("﷑'single-node",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/div"),cljs.core.hash_map("﷐'line",671))),cljs.core.hash_map("﷐'line",671))),cljs.core.hash_map("﷐'line",671))))));
}
}));
domina.test.report = (function report(test_results){
domina.test.reset.call(null);
var G__7255__7256 = cljs.core.seq.call(null,test_results);

if(cljs.core.truth_(G__7255__7256))
{var G__7258__7286 = cljs.core.first.call(null,G__7255__7256);
var vec__7285__7287 = G__7258__7286;
var name__7288 = cljs.core.nth.call(null,vec__7285__7287,0,null);
var result__7289 = cljs.core.nth.call(null,vec__7285__7287,1,null);
var G__7255__7290 = G__7255__7256;

var G__7258__7291 = G__7258__7286;
var G__7255__7292 = G__7255__7290;

while(true){
var vec__7293__7294 = G__7258__7291;
var name__7295 = cljs.core.nth.call(null,vec__7293__7294,0,null);
var result__7296 = cljs.core.nth.call(null,vec__7293__7294,1,null);
var G__7255__7297 = G__7255__7292;

var result_div__7298 = domina.single_node.call(null,"<div class='test-result'></div>");

domina.set_text_BANG_.call(null,result_div__7298,name__7295);
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,result__7296,null))))
{domina.add_class_BANG_.call(null,result_div__7298,"failed");
domina.append_BANG_.call(null,result_div__7298,cljs.core.str.call(null,"<div class='message'>",result__7296,"</div>"));
} else
{domina.add_class_BANG_.call(null,result_div__7298,"passed");
}
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),result_div__7298);
var temp__3698__auto____7299 = cljs.core.next.call(null,G__7255__7297);

if(cljs.core.truth_(temp__3698__auto____7299))
{var G__7255__7300 = temp__3698__auto____7299;

{
var G__7302 = cljs.core.first.call(null,G__7255__7300);
var G__7303 = G__7255__7300;
G__7258__7291 = G__7302;
G__7255__7292 = G__7303;
continue;
}
} else
{}
break;
}
} else
{}
domina.prepend_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='test-summary'>ran <span id='total-tests'></span> tests with <span id='total-failures'></span> failures");
domina.set_text_BANG_.call(null,domina.by_id.call(null,"total-tests"),cljs.core.count.call(null,test_results));
var failure_count__7301 = cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.second,test_results)));

domina.set_text_BANG_.call(null,domina.by_id.call(null,"total-failures"),failure_count__7301);
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,failure_count__7301)))
{return domina.add_class_BANG_.call(null,domina.by_id.call(null,"test-summary"),"passed");
} else
{return domina.add_class_BANG_.call(null,domina.by_id.call(null,"test-summary"),"failed");
}
});
domina.test.test_results = cljs.core.doall.call(null,domina.test.run_tests.call(null));
domina.test.report.call(null,domina.test.test_results);
