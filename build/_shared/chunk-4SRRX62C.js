import{c as p,i as s,j as i,k as r,m as l,p as u}from"/myst-test/build/_shared/chunk-RMYRWJKG.js";var c=p((b,o)=>{s();i();r();u();l();o.exports=e;e.displayName="latex";e.aliases=["tex","context"];function e(g){(function(a){var t=/\\(?:[^a-z()[\]]|[a-z*]+)/i,n={"equation-command":{pattern:t,alias:"regex"}};a.languages.latex={comment:/%.*/,cdata:{pattern:/(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,lookbehind:!0},equation:[{pattern:/\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,inside:n,alias:"string"},{pattern:/(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,lookbehind:!0,inside:n,alias:"string"}],keyword:{pattern:/(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,lookbehind:!0},url:{pattern:/(\\url\{)[^}]+(?=\})/,lookbehind:!0},headline:{pattern:/(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,lookbehind:!0,alias:"class-name"},function:{pattern:t,alias:"selector"},punctuation:/[[\]{}&]/},a.languages.tex=a.languages.latex,a.languages.context=a.languages.latex})(g)}});export{c as a};
