import{b as D,c as F}from"/myst-test/build/_shared/chunk-XIQ6U4TB.js";import{b as I,i as R}from"/myst-test/build/_shared/chunk-GTUSQ763.js";import{i as h,j as p,k as g,m as w,p as b}from"/myst-test/build/_shared/chunk-RMYRWJKG.js";h();p();g();b();w();h();p();g();b();w();h();p();g();b();w();function O(r){return r===1?"p{\\dimexpr \\linewidth-2\\tabcolsep}":`p{\\dimexpr ${r.toFixed(3)}\\linewidth-2\\tabcolsep}`}function N(r){var e,i,n;let t=[],l=0;for(let d=0;d<r.children.length;d+=1){let x=r.children[d].children.reduce((m,L)=>{var E,C;let ne=new Array((E=L.colspan)!==null&&E!==void 0?E:1).fill(L.width?L.width/((C=L.colspan)!==null&&C!==void 0?C:1):null);return[...m,...ne]},[]),$=x.filter(m=>m>0).length;if((d===0||$>=l)&&(l=$,t=x,l===x.length))break}let o;if(l===t.length)o=t;else{let v=886-t.reduce((m,L)=>L==null?m:m+L,0),x=t.length-l,$=Math.floor(v/x);o=t.map(m=>m==null||m===0?$:m)}let u=o.reduce((d,v)=>d+v,0),a=o.map(d=>d/u),c=a.map(d=>O(d)).join(""),s=o.length>0?o.length:(n=(i=(e=r?.children[0])===null||e===void 0?void 0:e.children)===null||i===void 0?void 0:i.length)!==null&&n!==void 0?n:0;return{widths:a,columnSpec:c,numColumns:s}}function _(r,e,i,n,t,l){var o;let u=1,a=(o=e.colspan)!==null&&o!==void 0?o:1;if(a>1){let c=0;for(let s=0;s<a;s+=1)c+=t[n+s];r.write(`\\multicolumn{${a}}{${O(c)}}{`),u=a}return e.children.length===1&&e.children[0].type==="paragraph"?r.renderChildren(e.children[0],!0):r.renderChildren(e,!0),a>1&&r.write("}"),i<l-1&&r.write(" & "),u}function j(r,e){e.usePackages("booktabs");let{widths:i,columnSpec:n,numColumns:t}=N(r);if(!t)throw new Error("invalid table format, no columns");e.data.isInTable=!0,e.ensureNewLine();let l=0;if(e.data.longFigure){e.ensureNewLine(),e.write("\\hline"),e.ensureNewLine();let o=!1;r.children.forEach(({children:u})=>{var a,c;if(!o){if(!((a=u[0])===null||a===void 0)&&a.header){l+=1;let s=0;u.forEach((d,v)=>{s+=_(e,d,v,s,i,u.length)}),e.write(" \\\\"),e.ensureNewLine()}!((c=u[0])===null||c===void 0)&&c.header||(o=!0)}}),l>0&&(e.ensureNewLine(),e.write("\\hline"),e.ensureNewLine(),e.write("\\endfirsthead"),e.ensureNewLine(),e.write("\\hline"),e.ensureNewLine(),e.write(`\\multicolumn{${t}}{c}{\\tablename\\ \\thetable\\ -- \\textit{Continued from previous page}}\\\\`),e.ensureNewLine(),r.children.forEach(({children:u},a)=>{if(a>=l)return;let c=0;u.forEach((s,d)=>{c+=_(e,s,d,c,i,u.length)}),e.write(" \\\\"),e.ensureNewLine()}),e.ensureNewLine(),e.write("\\hline"),e.ensureNewLine(),e.write("\\endhead"),e.ensureNewLine())}else e.write(`\\begin{tabular}{${n}}`),e.ensureNewLine(),e.write("\\toprule"),e.ensureNewLine();r.children.forEach(({children:o},u)=>{var a;if(u<l)return;let c=0;o.forEach((s,d)=>{c+=_(e,s,d,c,i,o.length)}),e.write(" \\\\"),e.ensureNewLine(),!((a=o[0])===null||a===void 0)&&a.header&&(e.write("\\hline"),e.ensureNewLine())}),e.data.longFigure?e.write("\\hline"):(e.write("\\bottomrule"),e.ensureNewLine(),e.write("\\end{tabular}")),e.closeBlock(r),e.data.isInTable=!1}var f;(function(r){r.fig="fig",r.eq="eq",r.code="code",r.table="table"})(f||(f={}));function ie(r){switch(r.type){case"iframe":case"image":return f.fig;case"table":return f.table;case"code":return f.code;case"math":return f.eq;default:return null}}function y(r){var e;let i=ie(r);return(e=r.children)===null||e===void 0||e.forEach(n=>{i||(i=y(n))}),i}function le(r){switch(y(r)){case f.fig:return r.fullpage?"figure*":"figure";case f.table:return r.fullpage?"table*":"table";case f.code:return"code";case f.eq:return"figure";default:return"figure"}}function te(r){switch(y(r)){case f.fig:case f.table:return"!htbp";case f.code:return"H";case f.eq:default:return}}var q=(r,e)=>{var i;if(e.data.isInTable){e.renderChildren(r);return}let n=D("table",r),t=!!n,l;n&&r.multipage&&(l=N(n));let o,u;r.landscape&&(e.usePackages("pdflscape"),o="\\begin{landscape}",u="\\end{landscape}");let{enumerated:a,label:c,identifier:s,multipage:d}=r,v=(i=c??s)!==null&&i!==void 0?i:void 0,x=t&&d?"longtable":le(r);x==="longtable"&&e.usePackages("longtable");let $=t&&l?l.columnSpec:void 0,m=t?void 0:te(r);o&&e.write(o);let L=$?`{${$}}`:"",E=m?`[${m}]`:"";e.write(`\\begin{${x}}${L}${E}
`),(!d||!t)&&e.write("\\centering"),e.ensureNewLine(),e.data.longFigure=d,e.data.nextCaptionNumbered=a??!!v,e.data.nextCaptionId=v,e.renderChildren(r),e.trimEnd(),e.data.longFigure=void 0,e.write(`
\\end{${x}}`),u&&e.write(u),e.closeBlock(r)},M=(r,e)=>{if(e.data.isInTable&&r.type!==f.table)return null;e.ensureNewLine(!0);let{nextCaptionNumbered:i,nextCaptionId:n}=e.data,t=i===!1?"caption*":"caption",l=i&&n?`\\label{${n}}`:"";e.renderInlineEnvironment(r,t,{after:l})};h();p();g();b();w();h();p();g();b();w();function z(r,e=" "){return r.replace(/\u00A0/g,e).replace(/[\u200B-\u200D\uFEFF]/g,"")}var U="\u{1F4A5}\u{1F3AF}BACKSLASHSPACE\u{1F3AF}\u{1F4A5}",G="\u{1F4A5}\u{1F3AF}BACKSLASH\u{1F3AF}\u{1F4A5}",X="\u{1F4A5}\u{1F3AF}TILDE\u{1F3AF}\u{1F4A5}",P={"&":"\\&","%":"\\%",$:"\\$","#":"\\#",_:"\\_","{":"\\{","}":"\\}","^":"\\^"},ue={...P,"\u2019":"'","\u2018":"`","\u201D":"''","\u201C":"``","\xBB":">>","\xAB":"<<","\u2026":"\\dots","\u2013":"--","\u2014":"---","\xA9":"\\textcopyright ","\xAE":"\\textregistered ","\u2122":"\\texttrademark ","<":"\\textless ",">":"\\textgreater ","\xA0":"~","\u202F":"~","\u2009":"\\,"},Z={"\u2194":"\\leftrightarrow","\u21D4":"\\Leftrightarrow","\u2192":"\\rightarrow","\u21D2":"\\Rightarrow","\u2190":"\\leftarrow","\u21D0":"\\Leftarrow"},J={"\u2212":"-","-":"-","\uFE63":"-","\uFF0D":"-","\uFF0B":"+"},K={...ue,...Z,...J},T={...Z,...J,"\xBD":"\\frac{1}{2}","\u2153":"\\frac{1}{3}","\u2154":"\\frac{2}{3}","\xBC":"\\frac{1}{4}","\u2155":"\\frac{1}{5}","\u2156":"\\frac{2}{5}","\u2157":"\\frac{3}{5}","\u2158":"\\frac{4}{5}","\u2159":"\\frac{1}{6}","\u215A":"\\frac{5}{6}","\u2150":"\\frac{1}{7}","\u215B":"\\frac{1}{8}","\u215C":"\\frac{3}{8}","\u215D":"\\frac{5}{8}","\u215E":"\\frac{7}{8}","\u2151":"\\frac{1}{9}","\u2152":"\\frac{1}{10}","\xB1":"\\pm","\xD7":"\\times",\u0391:"A",\u03B1:"\\alpha",\u0392:"B",\u03B2:"\\beta",\u00DF:"\\beta",\u0393:"\\Gamma",\u03B3:"\\gamma",\u0394:"\\Delta","\u2206":"\\Delta",\u03B4:"\\delta",\u0395:"E",\u03B5:"\\epsilon",\u0396:"Z",\u03B6:"\\zeta",\u0397:"H",\u03B7:"\\eta",\u0398:"\\Theta",\u03B8:"\\theta",\u03D1:"\\vartheta",\u0399:"I",\u03B9:"\\iota",\u039A:"K",\u03BA:"\\kappa",\u039B:"\\Lambda",\u03BB:"\\lambda",\u039C:"M",\u03BC:"\\mu",\u039D:"N",\u03BD:"\\nu",\u039E:"\\Xi",\u03BE:"\\xi",\u039F:"O",\u03BF:"o",\u03A0:"\\Pi",\u03C0:"\\pi",\u03A1:"P",\u03C1:"\\rho",\u03A3:"\\Sigma",\u03C3:"\\sigma",\u03A4:"T",\u03C4:"\\tau",\u03A5:"\\Upsilon",\u03C5:"\\upsilon",\u03A6:"\\Phi",\u03D5:"\\phi",\u03C6:"\\varphi",\u03A7:"X",\u03C7:"\\chi",\u03A8:"\\Psi",\u03C8:"\\psi",\u03A9:"\\Omega",\u03C9:"\\omega","\u2202":"\\partial","\u221E":"\\infty","\u2248":"\\approx","\u2260":"\\neq","\u2022":"\\cdot"};function H(r){return Array.from(r??"").map(n=>P[n]?{kind:"text",text:P[n]}:{kind:"text",text:n}).reduce((n,t)=>{let l=n.slice(-1)[0];return l?.kind===t.kind?l.text+=t.text:n.push(t),n},[]).reduce((n,t)=>n+t.text,"")}function Q(r){let e=(r??"").replace(/\\ /g,U).replace(/\\/g,G).replace(/~/g,X),t=Array.from(e).map(l=>K[l]?{kind:"text",text:K[l]}:T[l]?{kind:"math",text:T[l]}:{kind:"text",text:l}).reduce((l,o)=>{let u=l.slice(-1)[0];return u?.kind===o.kind?u.text+=o.text:l.push(o),l},[]).reduce((l,o)=>o.kind==="math"?`${l}$${o.text}$`:l+o.text,"").replace(new RegExp(U,"g"),"{\\textbackslash}~").replace(new RegExp(G,"g"),"{\\textbackslash}").replace(new RegExp(X,"g"),"{\\textasciitilde}");return z(t,"~")}function V(r){let i=Array.from(r??"").reduce((n,t)=>{if(T[t]){let l=n.slice(-1)===" "?"":" ";return`${n}${l}${T[t]}`}return n+t},"").trim();return z(i)}function k(r){if(typeof r=="number"&&Number.isNaN(r))return k(.7);if(typeof r=="string")return r.endsWith("%")?k(Number(r.replace("%",""))):r.endsWith("px")?k(Number(r.replace("px",""))/800):(console.log(`Unknown width ${r} in getLatexImageWidth`),k(.7));let e=r??.7;return e<1&&(e*=100),`${e/100}\\linewidth`}function B(r){var e;let i=(e=r?.split(" ").map(n=>n.trim().toLowerCase()).filter(n=>!!n))!==null&&e!==void 0?e:[];return Array.from(new Set(i))}h();p();g();b();w();function Y(r,e){e.options.math&&Object.entries(e.options.math).forEach(([i,n])=>{r.includes(i)&&(e.data.mathPlugins[i]=n)})}function S(r,e=r.data.mathPlugins){if(!r.options.math)return e;let i=Object.entries(e),n={};Object.entries(r.options.math).forEach(([l,o])=>{e[l]||i.forEach(([,u])=>{u.includes(l)&&(n[l]=o)})});let t={...n,...e};return Object.keys(n).length===0?t:S(r,t)}var ae=(r,e)=>{let{label:i,enumerated:n}=r;e.usePackages("amsmath"),Y(r.value,e),e.data.isInTable?(e.write("\\(\\displaystyle "),e.write(r.value),e.write(" \\)")):(e.write(`\\begin{equation${n===!1?"*":""}}
`),i&&e.write(`\\label{${i}}`),e.ensureNewLine(),e.write(r.value),e.ensureNewLine(!0),e.write(`\\end{equation${n===!1?"*":""}}`)),e.data.isInTable||e.closeBlock(r)},de=(r,e)=>{e.usePackages("amsmath"),Y(r.value,e),e.write("$"),e.text(r.value,!0),e.write("$")},ce={math:ae,inlineMath:de},ee=ce;var re={text(r,e){e.text(r.value)},paragraph(r,e){e.renderChildren(r)},heading(r,e){let{depth:i,label:n,enumerated:t}=r;if(e.data.nextHeadingIsFrameTitle)e.write("\\frametitle{"),e.data.nextHeadingIsFrameTitle=!1;else{let l=t!==!1||e.options.beamer?"":"*";i===1&&e.write(`\\section${l}{`),i===2&&e.write(`\\subsection${l}{`),i===3&&e.write(`\\subsubsection${l}{`),i===4&&e.write(`\\paragraph${l}{`),i===5&&e.write(`\\subparagraph${l}{`),i===6&&e.write(`\\subparagraph${l}{`)}e.renderChildren(r,!0),e.write("}"),t!==!1&&n&&e.write(`\\label{${n}}`),e.closeBlock(r)},block(r,e){var i,n,t;if(e.options.beamer){if(!((i=r.data)===null||i===void 0)&&i.outline){e.data.nextHeadingIsFrameTitle=!1,e.renderChildren(r,!1);return}((t=(n=r.children)===null||n===void 0?void 0:n[0])===null||t===void 0?void 0:t.type)==="heading"&&(e.data.nextHeadingIsFrameTitle=!0),e.write(`

\\begin{frame}
`),e.renderChildren(r,!1),e.write(`\\end{frame}

`);return}e.renderChildren(r,!1)},blockquote(r,e){e.renderEnvironment(r,"quote")},definitionList(r,e){e.write(`\\begin{description}
`),e.renderChildren(r,!0),e.ensureNewLine(),e.write("\\end{description}"),e.closeBlock(r)},definitionTerm(r,e){e.ensureNewLine(),e.write("\\item["),e.renderChildren(r,!0),e.write("] ")},definitionDescription(r,e){e.renderChildren(r,!0)},code(r,e){let i=`\\begin{verbatim}
`,n=`
\\end{verbatim}`;B(r.class).includes("listings")&&r.lang!==void 0?(e.usePackages("listings"),i=`\\begin{lstlisting}[language=${r.lang}]
`,n=`
\\end{lstlisting}`):B(r.class).includes("minted")&&r.lang!==void 0&&(e.usePackages("minted"),i=`\\begin{minted}{${r.lang}}
`,n=`
\\end{minted}`),e.write(i),e.text(r.value,!0),e.write(n),e.closeBlock(r)},list(r,e){e.data.isInTable?r.children.forEach((i,n)=>{e.write(r.ordered?`${n}.~~`:"\\textbullet~~"),e.renderChildren(i,!0),e.write("\\newline"),e.ensureNewLine()}):e.renderEnvironment(r,r.ordered?"enumerate":"itemize",{parameters:r.ordered&&r.start!==1?"resume":void 0})},listItem(r,e){e.write("\\item "),e.renderChildren(r,!0),e.write(`
`)},thematicBreak(r,e){e.write(`
\\bigskip
\\centerline{\\rule{13cm}{0.4pt}}
\\bigskip`),e.closeBlock(r)},...ee,mystRole(r,e){e.renderChildren(r,!0)},mystDirective(r,e){e.renderChildren(r,!1)},comment(r,e){var i,n;e.ensureNewLine(),e.write(`% ${(n=(i=r.value)===null||i===void 0?void 0:i.split(`
`).join(`
% `))!==null&&n!==void 0?n:""}`),e.closeBlock(r)},strong(r,e){e.renderInlineEnvironment(r,"textbf")},emphasis(r,e){e.renderInlineEnvironment(r,"textit")},underline(r,e){e.renderInlineEnvironment(r,"uline")},inlineCode(r,e){e.write("\\texttt{"),e.text(r.value,!1),e.write("}")},subscript(r,e){e.renderInlineEnvironment(r,"textsubscript")},superscript(r,e){e.renderInlineEnvironment(r,"textsuperscript")},delete(r,e){e.usePackages("ulem"),e.renderInlineEnvironment(r,"sout")},break(r,e){e.write("\\newline"),e.ensureNewLine()},abbreviation(r,e){e.renderChildren(r,!0)},link(r,e){var i;e.usePackages("url","hyperref");let n=r.url;if(((i=r.children[0])===null||i===void 0?void 0:i.value)===n){e.write("\\url{"),e.write(H(n)),e.write("}");return}e.write("\\href{"),e.write(H(n)),e.write("}{"),e.renderChildren(r,!0),e.write("}")},admonition(r,e){e.usePackages("framed"),e.renderEnvironment(r,"framed")},admonitionTitle(r,e){e.renderInlineEnvironment(r,"textbf"),e.write(`\\\\
`)},table:j,image(r,e){e.usePackages("graphicx");let{width:i,url:n,align:t}=r,l=n,o=k(i);e.write(`\\includegraphics[width=${o}]{${l}}`),e.closeBlock(r)},container:q,caption:M,captionNumber:()=>{},crossReference(r,e){var i,n;let t=!((i=r.template)===null||i===void 0)&&i.includes("%s")?r.template:void 0,l=((n=t??R(r))===null||n===void 0?void 0:n.replace(/\s/g,"~"))||"%s",o=r.label;e.write(l.replace(/%s/g,`\\ref{${o}}`))},citeGroup(r,e){if(e.options.citestyle==="numerical-only")e.write("\\cite{");else if(e.options.bibliography==="biblatex"){let i=r.kind==="narrative"?"textcite":"parencite";e.write(`\\${i}{`)}else{let i=r.kind==="narrative"?"t":"p";e.write(`\\cite${i}{`)}e.renderChildren(r,!0,", "),e.write("}")},cite(r,e,i){e.options.bibliography||e.usePackages("natbib"),i.type==="citeGroup"?e.write(r.label):e.options.bibliography==="biblatex"?e.write(`\\textcite{${r.label}}`):e.write(`\\cite{${r.label}}`)},embed(r,e){e.renderChildren(r,!0)},include(r,e){e.renderChildren(r,!0)},footnoteReference(r,e){if(!r.identifier)return;let i=e.footnotes[r.identifier];if(!i){I(e.file,`Unknown footnote identifier "${r.identifier}"`,{node:r,source:"myst-to-tex"});return}e.write("\\footnote{"),e.renderChildren(i,!0),e.trimEnd(),e.write("}")},si(r,e){var i,n,t,l;e.usePackages("siunitx"),r.number==null?e.write(`\\unit{${(n=(i=r.units)===null||i===void 0?void 0:i.map(o=>`\\${o}`).join(""))!==null&&n!==void 0?n:""}}`):e.write(`\\qty{${r.number}}{${(l=(t=r.units)===null||t===void 0?void 0:t.map(o=>`\\${o}`).join(""))!==null&&l!==void 0?l:""}}`)}},W=class{constructor(e,i,n){var t,l;e.result="",this.file=e,this.options=n??{},this.data={mathPlugins:{},imports:new Set},this.handlers=(t=n?.handlers)!==null&&t!==void 0?t:re,this.references=(l=n?.references)!==null&&l!==void 0?l:{},this.footnotes=Object.fromEntries(F("footnoteDefinition",i).map(o=>{let u=o;return[u.identifier,u]})),this.renderChildren(i)}get out(){return this.file.result}usePackages(...e){e.forEach(i=>{this.data.imports.add(i)})}write(e){this.file.result+=e}text(e,i=!1){let n=i?V(e):Q(e);this.write(n)}trimEnd(){this.file.result=this.out.trimEnd()}ensureNewLine(e=!1){e&&this.trimEnd(),!this.out.endsWith(`
`)&&this.write(`
`)}renderChildren(e,i=!1,n=""){var t,l,o;let u=(l=(t=e.children)===null||t===void 0?void 0:t.length)!==null&&l!==void 0?l:0;(o=e.children)===null||o===void 0||o.forEach((a,c)=>{let s=this.handlers[a.type];s?s(a,this,e):I(this.file,`Unhandled LaTeX conversion for node of "${a.type}"`,{node:a,source:"myst-to-tex"}),n&&c+1<u&&this.write(n)}),i||this.closeBlock(e)}renderEnvironment(e,i,n){let t=n?.parameters?`[${n.parameters}]`:"",l=n?.arguments?`{${n.arguments.join("}{")}}`:"";this.file.result+=`\\begin{${i}}${t}${l}
`,this.renderChildren(e,!0),this.ensureNewLine(!0),this.file.result+=`\\end{${i}}`,this.closeBlock(e)}renderInlineEnvironment(e,i,n){this.file.result+=`\\${i}{`,this.renderChildren(e,!0),this.trimEnd(),this.file.result+="}",n?.after&&(this.ensureNewLine(!0),this.write(n.after))}closeBlock(e){this.ensureNewLine(!0),this.file.result+=`
`}},se=function(r){return this.Compiler=(e,i)=>{let n=new W(i,e,r??{handlers:re}),t=i.result.trim(),l={imports:[...n.data.imports],commands:S(n),value:t};return i.result=l,i},e=>e},Qe=se;export{Qe as default};
