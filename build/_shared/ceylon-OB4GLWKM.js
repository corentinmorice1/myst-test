import{c as m,i as t,j as c,k as i,m as l,p as r}from"/myst-test/build/_shared/chunk-RMYRWJKG.js";var b=m((f,o)=>{t();c();i();r();l();function g(e){let a="assembly module package import alias class interface object given value assign void function new of extends satisfies abstracts in out return break continue throw assert dynamic if else switch case for while try catch finally then let this outer super is exists nonempty",d="shared abstract formal default actual variable late native deprecated final sealed annotation suppressWarnings small",u="doc by license see throws tagged",n={className:"subst",excludeBegin:!0,excludeEnd:!0,begin:/``/,end:/``/,keywords:a,relevance:10},s=[{className:"string",begin:'"""',end:'"""',relevance:10},{className:"string",begin:'"',end:'"',contains:[n]},{className:"string",begin:"'",end:"'"},{className:"number",begin:"#[0-9a-fA-F_]+|\\$[01_]+|[0-9_]+(?:\\.[0-9_](?:[eE][+-]?\\d+)?)?[kMGTPmunpf]?",relevance:0}];return n.contains=s,{name:"Ceylon",keywords:{keyword:a+" "+d,meta:u},illegal:"\\$[^01]|#[^0-9a-fA-F]",contains:[e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*","\\*/",{contains:["self"]}),{className:"meta",begin:'@[a-z]\\w*(?::"[^"]*")?'}].concat(s)}}o.exports=g});export default b();
