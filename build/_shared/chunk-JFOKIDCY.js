import{c as N,i as t,j as r,k as T,m as a,p as n}from"/myst-test/build/_shared/chunk-RMYRWJKG.js";var b=N((o,i)=>{t();r();T();n();a();i.exports=e;e.displayName="aql";e.aliases=[];function e(E){E.languages.aql={comment:/\/\/.*|\/\*[\s\S]*?\*\//,property:{pattern:/([{,]\s*)(?:(?!\d)\w+|(["'´`])(?:(?!\2)[^\\\r\n]|\\.)*\2)(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(["'])(?:(?!\1)[^\\\r\n]|\\.)*\1/,greedy:!0},identifier:{pattern:/([´`])(?:(?!\1)[^\\\r\n]|\\.)*\1/,greedy:!0},variable:/@@?\w+/,keyword:[{pattern:/(\bWITH\s+)COUNT(?=\s+INTO\b)/i,lookbehind:!0},/\b(?:AGGREGATE|ALL|AND|ANY|ASC|COLLECT|DESC|DISTINCT|FILTER|FOR|GRAPH|IN|INBOUND|INSERT|INTO|K_PATHS|K_SHORTEST_PATHS|LET|LIKE|LIMIT|NONE|NOT|NULL|OR|OUTBOUND|REMOVE|REPLACE|RETURN|SHORTEST_PATH|SORT|UPDATE|UPSERT|WINDOW|WITH)\b/i,{pattern:/(^|[^\w.[])(?:KEEP|PRUNE|SEARCH|TO)\b/i,lookbehind:!0},{pattern:/(^|[^\w.[])(?:CURRENT|NEW|OLD)\b/,lookbehind:!0},{pattern:/\bOPTIONS(?=\s*\{)/i}],function:/\b(?!\d)\w+(?=\s*\()/,boolean:/\b(?:false|true)\b/i,range:{pattern:/\.\./,alias:"operator"},number:[/\b0b[01]+/i,/\b0x[0-9a-f]+/i,/(?:\B\.\d+|\b(?:0|[1-9]\d*)(?:\.\d+)?)(?:e[+-]?\d+)?/i],operator:/\*{2,}|[=!]~|[!=<>]=?|&&|\|\||[-+*/%]/,punctuation:/::|[?.:,;()[\]{}]/}}});export{b as a};
