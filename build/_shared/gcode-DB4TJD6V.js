import{c as o,i as E,j as a,k as O,m as N,p as i}from"/myst-test/build/_shared/chunk-RMYRWJKG.js";var l=o((M,t)=>{E();a();O();i();N();function T(e){let _="[A-Z_][A-Z0-9_.]*",s="%",c={$pattern:_,keyword:"IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT EQ LT GT NE GE LE OR XOR"},C={className:"meta",begin:"([O])([0-9]+)"},n=e.inherit(e.C_NUMBER_MODE,{begin:"([-+]?((\\.\\d+)|(\\d+)(\\.\\d*)?))|"+e.C_NUMBER_RE}),D=[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.COMMENT(/\(/,/\)/),n,e.inherit(e.APOS_STRING_MODE,{illegal:null}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),{className:"name",begin:"([G])([0-9]+\\.?[0-9]?)"},{className:"name",begin:"([M])([0-9]+\\.?[0-9]?)"},{className:"attr",begin:"(VC|VS|#)",end:"(\\d+)"},{className:"attr",begin:"(VZOFX|VZOFY|VZOFZ)"},{className:"built_in",begin:"(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\[)",contains:[n],end:"\\]"},{className:"symbol",variants:[{begin:"N",end:"\\d+",illegal:"\\W"}]}];return{name:"G-code (ISO 6983)",aliases:["nc"],case_insensitive:!0,keywords:c,contains:[{className:"meta",begin:s},C].concat(D)}}t.exports=T});export default l();
