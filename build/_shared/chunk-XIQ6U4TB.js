import{c as O,e as K,i as a,j as f,k as c,m as d,p as h}from"/myst-test/build/_shared/chunk-RMYRWJKG.js";var re=O((Et,ne)=>{a();f();c();h();d();ne.exports={trueFunc:function(){return!0},falseFunc:function(){return!1}}});var D=O(b=>{"use strict";a();f();c();h();d();Object.defineProperty(b,"__esModule",{value:!0});function Le(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="-"||e==="_"}b.isIdentStart=Le;function We(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="-"||e==="_"}b.isIdent=We;function Ge(e){return e>="a"&&e<="f"||e>="A"&&e<="F"||e>="0"&&e<="9"}b.isHex=Ge;function Je(e){for(var t=e.length,r="",i=0;i<t;){var n=e.charAt(i);if(b.identSpecialChars[n])r+="\\"+n;else if(n==="_"||n==="-"||n>="A"&&n<="Z"||n>="a"&&n<="z"||i!==0&&n>="0"&&n<="9")r+=n;else{var o=n.charCodeAt(0);if((o&63488)===55296){var s=e.charCodeAt(i++);if((o&64512)!==55296||(s&64512)!==56320)throw Error("UCS-2(decode): illegal sequence");o=((o&1023)<<10)+(s&1023)+65536}r+="\\"+o.toString(16)+" "}i++}return r}b.escapeIdentifier=Je;function Ke(e){for(var t=e.length,r="",i=0,n;i<t;){var o=e.charAt(i);o==='"'?o='\\"':o==="\\"?o="\\\\":(n=b.strReplacementsRev[o])!==void 0&&(o=n),r+=o,i++}return'"'+r+'"'}b.escapeStr=Ke;b.identSpecialChars={"!":!0,'"':!0,"#":!0,$:!0,"%":!0,"&":!0,"'":!0,"(":!0,")":!0,"*":!0,"+":!0,",":!0,".":!0,"/":!0,";":!0,"<":!0,"=":!0,">":!0,"?":!0,"@":!0,"[":!0,"\\":!0,"]":!0,"^":!0,"`":!0,"{":!0,"|":!0,"}":!0,"~":!0};b.strReplacementsRev={"\n":"\\n","\r":"\\r","	":"\\t","\f":"\\f","\v":"\\v"};b.singleQuoteEscapeChars={n:`
`,r:"\r",t:"	",f:"\f","\\":"\\","'":"'"};b.doubleQuotesEscapeChars={n:`
`,r:"\r",t:"	",f:"\f","\\":"\\",'"':'"'}});var ae=O(Z=>{"use strict";a();f();c();h();d();Object.defineProperty(Z,"__esModule",{value:!0});var C=D();function Xe(e,t,r,i,n,o){var s=e.length,u="";function g(l,p){var w="";for(t++,u=e.charAt(t);t<s;){if(u===l)return t++,w;if(u==="\\"){t++,u=e.charAt(t);var y=void 0;if(u===l)w+=l;else if((y=p[u])!==void 0)w+=y;else if(C.isHex(u)){var I=u;for(t++,u=e.charAt(t);C.isHex(u);)I+=u,t++,u=e.charAt(t);u===" "&&(t++,u=e.charAt(t)),w+=String.fromCharCode(parseInt(I,16));continue}else w+=u}else w+=u;t++,u=e.charAt(t)}return w}function v(){var l="";for(u=e.charAt(t);t<s;){if(C.isIdent(u))l+=u;else if(u==="\\"){if(t++,t>=s)throw Error("Expected symbol but end of file reached.");if(u=e.charAt(t),C.identSpecialChars[u])l+=u;else if(C.isHex(u)){var p=u;for(t++,u=e.charAt(t);C.isHex(u);)p+=u,t++,u=e.charAt(t);u===" "&&(t++,u=e.charAt(t)),l+=String.fromCharCode(parseInt(p,16));continue}else l+=u}else return l;t++,u=e.charAt(t)}return l}function m(){u=e.charAt(t);for(var l=!1;u===" "||u==="	"||u===`
`||u==="\r"||u==="\f";)l=!0,t++,u=e.charAt(t);return l}function P(){var l=G();if(t<s)throw Error('Rule expected but "'+e.charAt(t)+'" found.');return l}function G(){var l=J();if(!l)return null;var p=l;for(u=e.charAt(t);u===",";){if(t++,m(),p.type!=="selectors"&&(p={type:"selectors",selectors:[l]}),l=J(),!l)throw Error('Rule expected after ",".');p.selectors.push(l)}return p}function J(){m();var l={type:"ruleSet"},p=$();if(!p)return null;for(var w=l;p&&(p.type="rule",w.rule=p,w=p,m(),u=e.charAt(t),!(t>=s||u===","||u===")"));)if(n[u]){var y=u;if(t++,m(),p=$(),!p)throw Error('Rule expected after "'+y+'".');p.nestingOperator=y}else p=$(),p&&(p.nestingOperator=null);return l}function $(){for(var l=null;t<s;)if(u=e.charAt(t),u==="*")t++,(l=l||{}).tagName="*";else if(C.isIdentStart(u)||u==="\\")(l=l||{}).tagName=v();else if(u===".")t++,l=l||{},(l.classNames=l.classNames||[]).push(v());else if(u==="#")t++,(l=l||{}).id=v();else if(u==="["){t++,m();var p={name:v()};if(m(),u==="]")t++;else{var w="";if(i[u]&&(w=u,t++,u=e.charAt(t)),t>=s)throw Error('Expected "=" but end of file reached.');if(u!=="=")throw Error('Expected "=" but "'+u+'" found.');p.operator=w+"=",t++,m();var y="";if(p.valueType="string",u==='"')y=g('"',C.doubleQuotesEscapeChars);else if(u==="'")y=g("'",C.singleQuoteEscapeChars);else if(o&&u==="$")t++,y=v(),p.valueType="substitute";else{for(;t<s&&u!=="]";)y+=u,t++,u=e.charAt(t);y=y.trim()}if(m(),t>=s)throw Error('Expected "]" but end of file reached.');if(u!=="]")throw Error('Expected "]" but "'+u+'" found.');t++,p.value=y}l=l||{},(l.attrs=l.attrs||[]).push(p)}else if(u===":"){t++;var I=v(),k={name:I};if(u==="("){t++;var A="";if(m(),r[I]==="selector")k.valueType="selector",A=G();else{if(k.valueType=r[I]||"string",u==='"')A=g('"',C.doubleQuotesEscapeChars);else if(u==="'")A=g("'",C.singleQuoteEscapeChars);else if(o&&u==="$")t++,A=v(),k.valueType="substitute";else{for(;t<s&&u!==")";)A+=u,t++,u=e.charAt(t);A=A.trim()}m()}if(t>=s)throw Error('Expected ")" but end of file reached.');if(u!==")")throw Error('Expected ")" but "'+u+'" found.');t++,k.value=A}l=l||{},(l.pseudos=l.pseudos||[]).push(k)}else break;return l}return P()}Z.parseCssSelector=Xe});var fe=O(L=>{"use strict";a();f();c();h();d();Object.defineProperty(L,"__esModule",{value:!0});var x=D();function Q(e){var t="";switch(e.type){case"ruleSet":for(var r=e.rule,i=[];r;)r.nestingOperator&&i.push(r.nestingOperator),i.push(Q(r)),r=r.rule;t=i.join(" ");break;case"selectors":t=e.selectors.map(Q).join(", ");break;case"rule":e.tagName&&(e.tagName==="*"?t="*":t=x.escapeIdentifier(e.tagName)),e.id&&(t+="#"+x.escapeIdentifier(e.id)),e.classNames&&(t+=e.classNames.map(function(n){return"."+x.escapeIdentifier(n)}).join("")),e.attrs&&(t+=e.attrs.map(function(n){return"operator"in n?n.valueType==="substitute"?"["+x.escapeIdentifier(n.name)+n.operator+"$"+n.value+"]":"["+x.escapeIdentifier(n.name)+n.operator+x.escapeStr(n.value)+"]":"["+x.escapeIdentifier(n.name)+"]"}).join("")),e.pseudos&&(t+=e.pseudos.map(function(n){return n.valueType?n.valueType==="selector"?":"+x.escapeIdentifier(n.name)+"("+Q(n.value)+")":n.valueType==="substitute"?":"+x.escapeIdentifier(n.name)+"($"+n.value+")":n.valueType==="numeric"?":"+x.escapeIdentifier(n.name)+"("+n.value+")":":"+x.escapeIdentifier(n.name)+"("+x.escapeIdentifier(n.value)+")":":"+x.escapeIdentifier(n.name)}).join(""));break;default:throw Error('Unknown entity type: "'+e.type+'".')}return t}L.renderEntity=Q});var ce=O(W=>{"use strict";a();f();c();h();d();Object.defineProperty(W,"__esModule",{value:!0});var Ye=ae(),Ve=fe(),qe=function(){function e(){this.pseudos={},this.attrEqualityMods={},this.ruleNestingOperators={},this.substitutesEnabled=!1}return e.prototype.registerSelectorPseudos=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var o=n[i];this.pseudos[o]="selector"}return this},e.prototype.unregisterSelectorPseudos=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var o=n[i];delete this.pseudos[o]}return this},e.prototype.registerNumericPseudos=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var o=n[i];this.pseudos[o]="numeric"}return this},e.prototype.unregisterNumericPseudos=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var o=n[i];delete this.pseudos[o]}return this},e.prototype.registerNestingOperators=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var o=n[i];this.ruleNestingOperators[o]=!0}return this},e.prototype.unregisterNestingOperators=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var o=n[i];delete this.ruleNestingOperators[o]}return this},e.prototype.registerAttrEqualityMods=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var o=n[i];this.attrEqualityMods[o]=!0}return this},e.prototype.unregisterAttrEqualityMods=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var o=n[i];delete this.attrEqualityMods[o]}return this},e.prototype.enableSubstitutes=function(){return this.substitutesEnabled=!0,this},e.prototype.disableSubstitutes=function(){return this.substitutesEnabled=!1,this},e.prototype.parse=function(t){return Ye.parseCssSelector(t,0,this.pseudos,this.attrEqualityMods,this.ruleNestingOperators,this.substitutesEnabled)},e.prototype.render=function(t){return Ve.renderEntity(t).trim()},e}();W.CssSelectorParser=qe});a();f();c();h();d();a();f();c();h();d();a();f();c();h();d();a();f();c();h();d();a();f();c();h();d();var X={}.hasOwnProperty;function F(e,t){let r=t||{};function i(n,...o){let s=i.invalid,u=i.handlers;if(n&&X.call(n,e)){let g=String(n[e]);s=X.call(u,g)?u[g]:i.unknown}if(s)return s.call(this,n,...o)}return i.handlers=r.handlers||{},i.invalid=r.invalid,i.unknown=r.unknown,i}var ge=F("operator",{unknown:xe,invalid:V,handlers:{"=":ve,"^=":we,"$=":ye,"*=":be,"~=":me}});function Y(e,t){let r=-1;for(;++r<e.attrs.length;)if(!ge(e.attrs[r],t))return!1;return!0}function V(e,t){return t[e.name]!==null&&t[e.name]!==void 0}function ve(e,t){return V(e,t)&&String(t[e.name])===e.value}function me(e,t){let r=t[e.name];return r==null?!1:Array.isArray(r)&&r.includes(e.value)?!0:String(r)===e.value}function we(e,t){let r=t[e.name];return Boolean(e.value&&typeof r=="string"&&r.slice(0,e.value.length)===e.value)}function ye(e,t){let r=t[e.name];return Boolean(e.value&&typeof r=="string"&&r.slice(-e.value.length)===e.value)}function be(e,t){let r=t[e.name];return Boolean(e.value&&typeof r=="string"&&r.includes(e.value))}function xe(e){throw new Error("Unknown operator `"+e.operator+"`")}a();f();c();h();d();function q(e,t){return e.tagName==="*"||e.tagName===t.type}a();f();c();h();d();a();f();c();h();d();a();f();c();h();d();var Ce=new Set([9,10,12,13,32]),ee="0".charCodeAt(0),Se="9".charCodeAt(0);function te(e){if(e=e.trim().toLowerCase(),e==="even")return[2,0];if(e==="odd")return[2,1];let t=0,r=0,i=o(),n=s();if(t<e.length&&e.charAt(t)==="n"&&(t++,r=i*(n??1),u(),t<e.length?(i=o(),u(),n=s()):i=n=0),n===null||t<e.length)throw new Error(`n-th rule couldn't be parsed ('${e}')`);return[r,i*n];function o(){return e.charAt(t)==="-"?(t++,-1):(e.charAt(t)==="+"&&t++,1)}function s(){let g=t,v=0;for(;t<e.length&&e.charCodeAt(t)>=ee&&e.charCodeAt(t)<=Se;)v=v*10+(e.charCodeAt(t)-ee),t++;return t===g?null:v}function u(){for(;t<e.length&&Ce.has(e.charCodeAt(t));)t++}}a();f();c();h();d();var U=K(re(),1);function ie(e){let t=e[0],r=e[1]-1;if(r<0&&t<=0)return U.default.falseFunc;if(t===-1)return o=>o<=r;if(t===0)return o=>o===r;if(t===1)return r<0?U.default.trueFunc:o=>o>=r;let i=Math.abs(t),n=(r%i+i)%i;return t>1?o=>o>=r&&o%i===n:o=>o<=r&&o%i===n}function M(e){return ie(te(e))}a();f();c();h();d();function E(e){return Array.isArray(e.children)}var Ae=M.default||M,Ee=F("name",{unknown:He,invalid:ze,handlers:{any:z,blank:ue,empty:ue,"first-child":Ie,"first-of-type":Ne,has:ke,"last-child":Oe,"last-of-type":Te,matches:z,not:Pe,"nth-child":Fe,"nth-last-child":Me,"nth-of-type":Re,"nth-last-of-type":je,"only-child":Qe,"only-of-type":_e,root:$e,scope:Ue}});H.needsIndex=["any","first-child","first-of-type","last-child","last-of-type","matches","not","nth-child","nth-last-child","nth-of-type","nth-last-of-type","only-child","only-of-type"];function H(e,t,r,i,n){let o=e.pseudos,s=-1;for(;++s<o.length;)if(!Ee(o[s],t,r,i,n))return!1;return!0}function ue(e,t){return E(t)?t.children.length===0:!("value"in t)}function Ie(e,t,r,i,n){return S(n,e),n.nodeIndex===0}function Ne(e,t,r,i,n){return S(n,e),n.typeIndex===0}function ke(e,t,r,i,n){let o={type:"root",children:E(t)?t.children:[]},s={...n,found:!1,shallow:!1,one:!0,scopeNodes:[t],results:[],rootQuery:T(e.value)};return N(s,o),s.results.length>0}function Oe(e,t,r,i,n){return S(n,e),typeof n.nodeCount=="number"&&n.nodeIndex===n.nodeCount-1}function Te(e,t,r,i,n){return S(n,e),typeof n.typeCount=="number"&&n.typeIndex===n.typeCount-1}function z(e,t,r,i,n){let o={...n,found:!1,shallow:!1,one:!0,scopeNodes:[t],results:[],rootQuery:T(e.value)};return N(o,t),o.results[0]===t}function Pe(e,t,r,i,n){return!z(e,t,r,i,n)}function Fe(e,t,r,i,n){let o=j(e);return S(n,e),typeof n.nodeIndex=="number"&&o(n.nodeIndex)}function Me(e,t,r,i,n){let o=j(e);return S(n,e),typeof n.nodeCount=="number"&&typeof n.nodeIndex=="number"&&o(n.nodeCount-n.nodeIndex-1)}function je(e,t,r,i,n){let o=j(e);return S(n,e),typeof n.typeIndex=="number"&&typeof n.typeCount=="number"&&o(n.typeCount-1-n.typeIndex)}function Re(e,t,r,i,n){let o=j(e);return S(n,e),typeof n.typeIndex=="number"&&o(n.typeIndex)}function Qe(e,t,r,i,n){return S(n,e),n.nodeCount===1}function _e(e,t,r,i,n){return S(n,e),n.typeCount===1}function $e(e,t,r,i){return t&&!i}function Ue(e,t,r,i,n){return t&&n.scopeNodes.includes(t)}function ze(){throw new Error("Invalid pseudo-selector")}function He(e){throw e.name?new Error("Unknown pseudo-selector `"+e.name+"`"):new Error("Unexpected pseudo-element or empty pseudo-class")}function S(e,t){if(e.shallow)throw new Error("Cannot use `:"+t.name+"` without parent")}function j(e){let t=e._cachedFn;return t||(t=Ae(e.value),e._cachedFn=t),t}function oe(e,t,r,i,n){if(e.id)throw new Error("Invalid selector: id");if(e.classNames)throw new Error("Invalid selector: class");return Boolean(t&&(!e.tagName||q(e,t))&&(!e.attrs||Y(e,t))&&(!e.pseudos||H(e,t,r,i,n)))}var Be=[];function T(e){return e===null?{type:"selectors",selectors:[]}:e.type==="ruleSet"?{type:"selectors",selectors:[e]}:e}function N(e,t){t&&se(e,[],t,void 0,void 0)}function se(e,t,r,i,n){let o={directChild:void 0,descendant:void 0,adjacentSibling:void 0,generalSibling:void 0};return o=Ze(e,R(t,e.rootQuery.selectors),r,i,n),E(r)&&!e.shallow&&!(e.one&&e.found)&&De(e,o,r),o}function De(e,t,r){let i=R(t.descendant,t.directChild),n,o=-1,s={count:0,types:new Map},u={count:0,types:new Map};for(;++o<r.children.length;)le(s,r.children[o]);for(o=-1;++o<r.children.length;){let v=r.children[o].type.toUpperCase();e.nodeIndex=u.count,e.typeIndex=u.types.get(v)||0,e.nodeCount=s.count,e.typeCount=s.types.get(v);let m=R(i,n),P=se(e,m,r.children[o],o,r);if(n=R(P.generalSibling,P.adjacentSibling),e.one&&e.found)break;le(u,r.children[o])}}function Ze(e,t,r,i,n){let o={directChild:void 0,descendant:void 0,adjacentSibling:void 0,generalSibling:void 0},s=-1;for(;++s<t.length;){let u=t[s];if(e.one&&e.found)break;if(e.shallow&&u.rule.rule)throw new Error("Expected selector without nesting");if(oe(u.rule,r,i,n,e)){let g=u.rule.rule;if(g){let v={type:"ruleSet",rule:g},m=g.nestingOperator==="+"?"adjacentSibling":g.nestingOperator==="~"?"generalSibling":g.nestingOperator===">"?"directChild":"descendant";B(o,m,v)}else e.found=!0,e.results.includes(r)||e.results.push(r)}u.rule.nestingOperator===null?B(o,"descendant",u):u.rule.nestingOperator==="~"&&B(o,"generalSibling",u)}return o}function R(e,t){return e&&t&&e.length>0&&t.length>0?[...e,...t]:e&&e.length>0?e:t&&t.length>0?t:Be}function B(e,t,r){let i=e[t];i?i.push(r):e[t]=[r]}function le(e,t){let r=t.type.toUpperCase(),i=(e.types.get(r)||0)+1;e.count++,e.types.set(r,i)}a();f();c();h();d();var de=K(ce(),1),_=new de.CssSelectorParser;_.registerAttrEqualityMods("~","^","$","*");_.registerSelectorPseudos("any","matches","not","has");_.registerNestingOperators(">","+","~");function he(e){if(typeof e!="string")throw new TypeError("Expected `string` as selector, not `"+e+"`");return _.parse(e)}function ur(e,t){let r=pe(e,t);return r.one=!0,N(r,t||void 0),r.results[0]||null}function or(e,t){let r=pe(e,t);return N(r,t||void 0),r.results}function pe(e,t){return{rootQuery:T(he(e)),results:[],scopeNodes:t?E(t)&&(t.type==="RootNode"||t.type==="root")?t.children:[t]:[],one:!1,shallow:!1,found:!1,typeIndex:void 0,nodeIndex:void 0,typeCount:void 0,nodeCount:void 0}}export{F as a,ur as b,or as c};
