/*! For license information please see module.js.LICENSE.txt */
define(["d3","react","emotion","@grafana/data","@grafana/ui"],(function(e,t,n,a,r){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=5)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=a},function(e,t){e.exports=r},function(e,t,n){"use strict";n.r(t);var a=n(3);var r=function(){return(r=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function i(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,r,i=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(a=i.next()).done;)o.push(a.value)}catch(e){r={error:e}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return o}function o(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(i(arguments[t]));return e}function l(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var s,c=n(1),u=n.n(c),d=n(2),p=n(4),f=n(0),h=function(e,t,n,a){return e>=30?t.textLabel.__largeBar+" --large":e<30&&n%a==0?t.textLabel.__smallBar+" --small":t.textLabel.__hidden+" --hidden"},b=function(e,t){var n;return function(){for(var a=[],r=0;r<arguments.length;r++)a[r]=arguments[r];return new Promise((function(r){n&&clearTimeout(n),n=setTimeout((function(){return r(e.apply(void 0,o(a)))}),t)}))}},m=function(e){return 0===e.indexOf("rgb")?e:e.toLowerCase().replace(/-(.)/g,(function(e,t){return t.toUpperCase()}))},x=function(e,t){document.addEventListener(e,(function(e){return t(e.detail)}))},g=function(e,t){document.dispatchEvent(new CustomEvent(e,{detail:t}))},v=function(e,t){document.removeEventListener(e,t)};!function(e){e.E_TOOLTIP_CLICK="E_TOOLTIP_CLICK",e.E_TOOLTIP_MOVE="E_TOOLTIP_MOVE"}(s||(s={}));var y,O,j,w,L,T,C,E,k,_,B,P,V,I,N,z,A,M,S,D,F,W,R,H,Y,X=function(e){var t=e.data,n=e.styles,a=e.theme,r=e.padding,i=e.x,o=e.xBand,c=e.y,p=(e.p,e.chartHeight),x=e.chartWidth,v=e.vitalBreakpointVal,j=e.isInclusive,w=e.showVitalFew,L=e.showBarValue,T=e.valToFixed,C=e.chartId,E=e.vitalColor,k=e.vitalLineColor,_=e.trivialColor,B=e.barHoverColor,P=!!t.p.filter((function(e,t){return e<v})).length,V=.9*o.bandwidth(),I=b((function(e){return g(C+"-"+s.E_TOOLTIP_CLICK,e)}),200),N=b((function(e){return g(C+"-"+s.E_TOOLTIP_MOVE,e)}),200),z=function(e){return e?E?m(E):a.palette.brandDanger:_?m(_):a.palette.brandWarning},A=0;return u.a.createElement("g",{clipPath:"url(#"+C+")",className:"bars",transform:"translate("+r+", 0)"},t.y.map((function(e,a){var o,s=i(a)-V/2,b=Math.trunc(x/10/V),g="number"==typeof e&&T>=0?e.toFixed(T>6?2:T):e,C=!L?n.forcedHidden.__barLabel:"";o=!P&&0===a||(t.p[a]<v&&!j||!(!j||!(t.p[a-1]<v||0===a))),A=P||0!==a?t.p[a]<v&&!j||j&&t.p[a-1]<v?a:A:0;var E=h(V,n,a,b);return u.a.createElement(u.a.Fragment,null,u.a.createElement("rect",{className:[n.bar,B?Object(d.css)(y||(y=l(["\n                      &:hover {\n                        fill: "," !important;\n                      }\n                    "],["\n                      &:hover {\n                        fill: "," !important;\n                      }\n                    "])),m(B)):""].join(" "),fill:z(o),"data-label-header":t.x[a],"data-label":t.tooltipLabel[a],"data-label2":t.p[a].toFixed(2)+"%","data-count":e,"data-is-vital":o,"data-fill-color":z(o),onMouseUp:function(e){var t=e.currentTarget;return I({currentTarget:t})},onMouseOver:function(e){var t=e.currentTarget,n=e.type,a=e.pageX,r=e.pageY;return N({currentTarget:t,type:n,pageX:a,pageY:r})},onMouseMove:function(e){var t=e.currentTarget,n=e.type,a=e.pageX,r=e.pageY;return N({currentTarget:t,type:n,pageX:a,pageY:r})},onMouseOut:function(e){var t=e.currentTarget,n=e.type,a=e.pageX,r=e.pageY;return N({currentTarget:t,type:n,pageX:a,pageY:r})},ref:function(t){Object(f.select)(t).attr("x",s).attr("y",c(e)).attr("width",V).attr("height",p-c(e))}}),u.a.createElement((function(t){var a=t.index,i=t.className;return u.a.createElement("text",{"data-index":a,transform:"translate(0, -"+r/2+")",className:[i,n.barValue,C].join(" "),x:s+V/2,y:c(e)},g)}),{index:a,className:["bar-values",E].join(" ")}),u.a.createElement(u.a.Fragment,null,w&&a===t.y.length-1&&u.a.createElement("line",{className:["line--vertical",n.lineCutOff,Object(d.css)(O||(O=l(["\n                      stroke: ",";\n                    "],["\n                      stroke: ",";\n                    "])),k||"rgba(255, 0, 0, 0.75)")].join(" "),transform:"translate(0, 0)",ref:function(e){Object(f.select)(e).attr("x1",i(A)-V/2+V/2).attr("x2",i(A)-V/2+V/2).attr("y1",0).attr("y2",p)}})))})))},K=Object(p.stylesFactory)((function(){var e=Object(p.useTheme)();return{wrapper:Object(d.css)(j||(j=l(["\n      position: relative;\n    "],["\n      position: relative;\n    "]))),svg:Object(d.css)(w||(w=l(["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "],["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "]))),tooltipContainer:Object(d.css)(L||(L=l(["\n      position: fixed;\n      z-index: 100;\n      min-width: 20vw;\n      display: flex;\n      transition: all 0.2s ease;\n\n      &:not(.tooltip--visible) {\n        z-index: -10;\n        opacity: 0;\n      }\n\n      .tooltip--visible {\n        z-index: 1;\n        opacity: 1;\n      }\n    "],["\n      position: fixed;\n      z-index: 100;\n      min-width: 20vw;\n      display: flex;\n      transition: all 0.2s ease;\n\n      &:not(.tooltip--visible) {\n        z-index: -10;\n        opacity: 0;\n      }\n\n      .tooltip--visible {\n        z-index: 1;\n        opacity: 1;\n      }\n    "]))),tooltip:Object(d.css)(T||(T=l(["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      border: 1px solid ",";\n      padding: 4px 10px;\n      max-width: 100%;\n      color: white;\n\n      strong {\n        position: absolute;\n        top: -1px;\n        left: 100%;\n        padding: 4px;\n        bottom: -1px;\n        min-width: 50px;\n        text-align: center;\n        background: inherit;\n        border: 1px solid ",";\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 1.4rem;\n      }\n\n      label {\n        display: block;\n        background: inherit;\n        padding: 0 0 4px 0;\n\n        &.label-header {\n          font-weight: bold;\n          font-size: 1.2rem;\n          max-width: 100%;\n        }\n      }\n\n      .tooltip-copy-label {\n        position: absolute;\n        top: calc(100% + 4px);\n        left: 0;\n        background: ",";\n        color: ",";\n        font-size: 10px;\n        height: 20px;\n        box-sizing: border-box;\n        padding: 2px 4px;\n\n        &.hidden {\n          opacity: 0;\n          z-index: -1;\n        }\n      }\n    "],["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      border: 1px solid ",";\n      padding: 4px 10px;\n      max-width: 100%;\n      color: white;\n\n      strong {\n        position: absolute;\n        top: -1px;\n        left: 100%;\n        padding: 4px;\n        bottom: -1px;\n        min-width: 50px;\n        text-align: center;\n        background: inherit;\n        border: 1px solid ",";\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 1.4rem;\n      }\n\n      label {\n        display: block;\n        background: inherit;\n        padding: 0 0 4px 0;\n\n        &.label-header {\n          font-weight: bold;\n          font-size: 1.2rem;\n          max-width: 100%;\n        }\n      }\n\n      .tooltip-copy-label {\n        position: absolute;\n        top: calc(100% + 4px);\n        left: 0;\n        background: ",";\n        color: ",";\n        font-size: 10px;\n        height: 20px;\n        box-sizing: border-box;\n        padding: 2px 4px;\n\n        &.hidden {\n          opacity: 0;\n          z-index: -1;\n        }\n      }\n    "])),e.colors.border2,e.colors.border2,e.colors.border2,e.colors.text),textBox:Object(d.css)(C||(C=l(["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "],["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "]))),bar:Object(d.css)(E||(E=l(["\n      cursor: pointer;\n\n      &:hover {\n        fill: ",";\n      }\n    "],["\n      cursor: pointer;\n\n      &:hover {\n        fill: ",";\n      }\n    "])),e.colors.text),barValue:Object(d.css)(k||(k=l(["\n      fill: ",";\n      text-anchor: middle;\n      opacity: 1;\n      transition: opacity 0.2s ease-out;\n      user-select: none;\n    "],["\n      fill: ",";\n      text-anchor: middle;\n      opacity: 1;\n      transition: opacity 0.2s ease-out;\n      user-select: none;\n    "])),e.colors.text),line:Object(d.css)(_||(_=l(["\n      fill: none;\n      stroke-width: 2px;\n      shape-rendering: geometricPrecision;\n    "],["\n      fill: none;\n      stroke-width: 2px;\n      shape-rendering: geometricPrecision;\n    "]))),lineCutOff:Object(d.css)(B||(B=l(["\n      fill: none;\n      stroke-width: 2px;\n      stroke-dasharray: 5px;\n    "],["\n      fill: none;\n      stroke-width: 2px;\n      stroke-dasharray: 5px;\n    "]))),lineBottomAxis:Object(d.css)(P||(P=l(["\n      // fill: none;\n      stroke: ",";\n      shape-rendering: crispEdges;\n    "],["\n      // fill: none;\n      stroke: ",";\n      shape-rendering: crispEdges;\n    "])),e.colors.text),paths:Object(d.css)(V||(V=l(["\n      position: relative;\n    "],["\n      position: relative;\n    "]))),brushWrapper:Object(d.css)(I||(I=l(["\n      fill: ",";\n      stroke: ",";\n      stroke-width: 0.75px;\n\n      .selection {\n        fill: "," !important;\n        fill-opacity: 0.75;\n        stroke: none;\n\n        &--invalid {\n          fill: "," !important;\n        }\n      }\n\n      .handle {\n        fill: "," !important;\n        fill-opacity: 0.75;\n      }\n    "],["\n      fill: ",";\n      stroke: ",";\n      stroke-width: 0.75px;\n\n      .selection {\n        fill: "," !important;\n        fill-opacity: 0.75;\n        stroke: none;\n\n        &--invalid {\n          fill: "," !important;\n        }\n      }\n\n      .handle {\n        fill: "," !important;\n        fill-opacity: 0.75;\n      }\n    "])),e.colors.bg3,e.colors.border2,e.colors.bgBlue2,e.palette.brandDanger,e.palette.brandWarning),brushOverlay:Object(d.css)(N||(N=l(["\n      cursor: crosshair;\n    "],["\n      cursor: crosshair;\n    "]))),textLabel:{__largeBar:Object(d.css)(z||(z=l([""],[""]))),__smallBar:Object(d.css)(A||(A=l([""],[""]))),__hidden:Object(d.css)(M||(M=l(["\n        fill: none;\n        opacity: 0;\n      "],["\n        fill: none;\n        opacity: 0;\n      "])))},axis:Object(d.css)(S||(S=l(["\n      text {\n        user-select: none;\n      }\n    "],["\n      text {\n        user-select: none;\n      }\n    "]))),chartMaskId:Object(d.css)(D||(D=l(["\n      fill: none;\n      user-select: none;\n    "],["\n      fill: none;\n      user-select: none;\n    "]))),placeholder:{__noData:Object(d.css)(F||(F=l(["\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-size: 2rem;\n        font-weight: bold;\n        color: ",";\n        height: 100%;\n        user-select: none;\n      "],["\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-size: 2rem;\n        font-weight: bold;\n        color: ",";\n        height: 100%;\n        user-select: none;\n      "])),e.palette.redBase)},forcedHidden:{__barLabel:Object(d.css)(W||(W=l(["\n        opacity: 0 !important;\n        transform: translate(0, -100px);\n      "],["\n        opacity: 0 !important;\n        transform: translate(0, -100px);\n      "])))}}})),U=function(e){var t=K(),n=null,a=null,r=null,o=null,l=function(){o=null};Object(f.scaleBand)().range([0,e.chartWidth-e.padding]).padding(e.barPadding).domain(e.data.xAxisLabels);var s=function(){var t=Object(f.select)(e.svgRef.current),s=(f.event||{}).selection;if(n&&a||(n=e.x.domain(),a=e.xBand.bandwidth()),s){e.x.domain(s.map(e.xLinear.invert,e.xLinear));var c=e.data.xAxisLabels.length,u=i(e.xLinear.domain(),1)[0],h=i(e.x.domain(),2),b=h[0],m=h[1]-b,x=Math.floor(100*m/(c-u));if(x<5)return void t.select(".brush").call(d.move,r);r=s;var g=100/x*(e.chartWidth-e.padding);e.xBand.range([0,g]).padding(e.barPadding).domain(e.data.xAxisLabels),e.xBand.domain(e.data.xAxisLabels)}else{if(!o)return o=setTimeout(l,350),void t.select(".brush").call(d.move,r);var v=[0,e.chartWidth-e.padding];r=null,e.x.domain(n),e.xBand.range(v).padding(e.barPadding).domain(e.data.xAxisLabels)}p()},d=Object(f.brushX)().extent([[0,0],[e.chartWidth-e.padding,10]]).on("brush",(function(){var t=Object(f.select)(e.svgRef.current),n=(f.event||{}).selection;if(n){var a=e.data.xAxisLabels.length,r=Object(f.scaleLinear)().range([0,e.chartWidth]);r.domain(n.map(e.xLinear.invert,e.xLinear));var o=i(e.xLinear.domain(),1)[0],l=i(r.domain(),2),s=l[0],c=l[1]-s,u=Math.floor(100*c/(a-o))>=5;t.select("rect.selection").classed("selection--valid",u).classed("selection--invalid",!u)}})).on("end",s),p=function(){var n,a=Object(f.select)(e.svgRef.current);if(a){var r=null===(n=Object(f.select)(e.svgRef.current))||void 0===n?void 0:n.transition().duration(750);a.select(".axis-left").transition(r).call(Object(f.axisLeft)(e.y)),a.select(".axis-right").transition(r).call(Object(f.axisLeft)(e.p).ticks(4).tickFormat(e.pLabels));var i=0,o=0,l=e.xBand.bandwidth(),s=l/2,c=a.selectAll("rect."+t.bar);if(c.each((function(){if(this.dataset){var t=e.x(i)-s,n=this.dataset.isVital;if(o="true"===n?i:o,Object(f.select)(this).transition(r).attr("x",t).attr("width",l),e.showVitalFew&&i===c.size()-1){var u=e.x(o)-s+s;a.select(".line--vertical").transition(r).attr("x1",u).attr("x2",u).attr("y1",0).attr("y2",e.chartHeight)}}i++})),e.showBarValue){var u=Math.trunc(e.chartWidth/10/l);a.selectAll("text."+t.barValue).each((function(){var n=this.dataset.index,a=e.x(+n)-s,i=h(l,t,+n,u);Object(f.select)(this).transition(r).attr("class",[t.barValue,i].join(" ")).attr("x",a+s)}))}var d=e.p(e.vitalBreakpointVal/100);a.select(".line--horizontal").transition(r).attr("x1",0).attr("x2",e.chartWidth-e.padding).attr("y1",d).attr("y2",d),a.select(".line--curve").datum(e.pathData).transition(r).attr("transform","translate("+e.padding+", 0)").attr("d",e.line)}},b=Object(c.useCallback)((function(){Object(f.select)(e.svgRef.current).select(".brush").call(d.move,null),s()}),[f.select,s]);return Object(c.useLayoutEffect)((function(){b()}),[]),Object(c.useEffect)((function(){b()}),[e.data,b]),u.a.createElement("g",{transform:"translate("+2*e.padding+", "+(e.padding+e.chartHeight+3)+")",className:["brush",t.brushWrapper].join(" "),ref:function(e){Object(f.select)(e).call(d)}})},q={initCopyText:"Click on bar to copy data",copyText:"",dataCopied:"Copied data!"},Q=function(e,t){return'<span class="tooltip-copy-label '+(e.isCopyLabelVisible?"":"hidden")+'">'+t+"</span>"},G=function(e){var t=K(),n=Object(c.useRef)(null),a=Object(c.useRef)(null),r=function(t){Z(n,e,t)},i=function(t){J(n,a,e,t)};return Object(c.useEffect)((function(){return x(e.chartId+"-"+s.E_TOOLTIP_CLICK,r),x(e.chartId+"-"+s.E_TOOLTIP_MOVE,i),function(){v(e.chartId+"-"+s.E_TOOLTIP_CLICK,r),v(e.chartId+"-"+s.E_TOOLTIP_MOVE,i)}}),[]),u.a.createElement("div",{ref:n,className:["tooltip__container",t.tooltipContainer,e.chartId].join(" ")},u.a.createElement("div",{ref:a,className:t.tooltip}))},J=function(e,t,n,a){var r,i=(e||{current:null}).current,o=(t||{current:null}).current,l=(null===(r=a.currentTarget)||void 0===r?void 0:r.dataset)||{},s=l.labelHeader,c=l.label,u=l.label2,d=l.isVital,p=l.count,h=l.fillColor,b=!!["mouseover","mousemove"].includes(a.type);"mouseout"===a.type&&(q.copyText=q.initCopyText),i&&(Object(f.select)(i).classed("tooltip--visible",b),b&&Object(f.select)(i).style("left",a.pageX+"px").style("top",a.pageY-28+"px"),Object(f.select)(o).style("background",h||("true"===d?n.vitalColor?m(n.vitalColor):n.theme.palette.brandDanger:n.trivialColor?m(n.trivialColor):n.theme.palette.brandWarning)).html('<label class="label-header">'+s+"\n      "+(q.copyText?Q(n,q.copyText):Q(n,q.initCopyText))+'</label>\n      <label class="label-value">Bar percentage: '+c+'</label>\n      <label class="label-value">Cumulative percentage: '+u+"</label>\n      <strong>"+p+"</strong>\n    "))},Z=function(e,t,n){var a,r,i,o,l=(null===(a=n.currentTarget)||void 0===a?void 0:a.dataset.labelHeader)+"\n    \r\nBar percentage: "+(null===(r=n.currentTarget)||void 0===r?void 0:r.dataset.label)+"\n    \r\nCumulative percentage: "+(null===(i=n.currentTarget)||void 0===i?void 0:i.dataset.label2)+"\n    \r\nCounts: "+(null===(o=n.currentTarget)||void 0===o?void 0:o.dataset.count)||"No Content",s=document.createElement("textarea");s.innerText=l;var c=e.current?e.current:document.body;c&&c.appendChild(s),s.select(),document.execCommand("copy"),Object(f.select)(c).select(".tooltip-copy-label").text(q.dataCopied),s.remove()},$=function(e){var t=e.theme,n=e.styles,a=e.padding,r=e.chartId,i=e.chartWidth,o=e.vitalBreakpointVal,s=e.vitalLineColor,c=e.curveLineColor,p=e.p,h=e.xBand,b=e.pathData,m=e.line,x=e.showVitalFew;return u.a.createElement("g",{clipPath:"url(#"+r+")",className:n.paths},u.a.createElement("path",{className:["line--curve",n.line,Object(d.css)(R||(R=l(["\n            stroke: ",";\n          "],["\n            stroke: ",";\n          "])),c||t.colors.text)].join(" "),transform:"translate("+a+", 0)",ref:function(e){Object(f.select)(e).datum(b).attr("d",m)}}),x&&u.a.createElement("line",{className:["line--horizontal",n.lineCutOff,Object(d.css)(H||(H=l(["\n              stroke: ",";\n            "],["\n              stroke: ",";\n            "])),s||t.palette.brandDanger)].join(" "),transform:"translate("+(a+h.bandwidth()/2)+", 0)",ref:function(e){Object(f.select)(e).attr("x1",0).attr("x2",i-a).attr("y1",p(o/100)).attr("y2",p(o/100))}}))},ee=function(e){var t=e.data,n=e.styles,a=e.padding,r=e.chartHeight,o=e.chartWidth,l=(e.x,e.xPBand),s=e.y,c=e.p,d=e.pLabels,p=e.vitalBreakpointVal,h=e.isInclusive,b=!!t.p.filter((function(e){return e<p})).length,m=t.p.filter((function(e,n){return t.p[n]<p||!b&&0===n})).sort((function(e,t){return e-t}));return u.a.createElement("g",{className:["axis",n.axis].join(" ")},u.a.createElement("g",{className:"axis-bottom",transform:"translate("+a+", "+(r+15)+")",ref:function(e){var n=i(t.xAxisLabels.filter((function(e,t){return!!m[t]||h&&m[t-1]<p&&!m[t+1]})).reverse(),1)[0],r=Object(f.axisBottom)(l).tickValues([n,"100 %"]);Object(f.select)(e).call(r).selectAll("text").attr("y",a/2).attr("x",0).style("text-anchor","center")}}),u.a.createElement("line",{className:n.lineBottomAxis,transform:"translate("+a+", 1)",ref:function(e){Object(f.select)(e).attr("x1",0).attr("x2",o-a).attr("y1",r).attr("y2",r)}}),u.a.createElement("g",{className:"axis-left",transform:"translate("+a+", 0)",ref:function(e){Object(f.select)(e).call(Object(f.axisLeft)(s).ticks(r/30))}}),u.a.createElement("g",{className:"axis-right",transform:"translate("+(o+a)+", 0)",ref:function(e){Object(f.select)(e).call(Object(f.axisLeft)(c).ticks(4).tickFormat(d))}}))},te=function(){function e(e){var t=i(e.request.targets,1)[0].resultFormat,n=i(e.series,1)[0],a=n.fields,r=n.meta;this.error=null,r&&r.executedQueryString&&"time_series"!==t?(this.dataType="table",this.results=this.setTableData(a)):"time_series"===t?(this.dataType="series",this.results=this.setTimeSeriesData(e.series)):(this.dataType="series",this.results=this.setSeriesData(a))}return e.prototype.getResults=function(){return{results:this.results,error:this.error}},e.prototype.setTableData=function(e){var t=e.find((function(e){return e.type===a.FieldType.string})),n=e.find((function(e){return e.type===a.FieldType.number})),r=t.values.toArray().map((function(e){return""+e})),i=n.values.toArray();return this.setResults(r,i,this.sumYVals(i))},e.prototype.setSeriesData=function(e){var t=i(e,2),n=t[0],a=t[1],r=n.values.toArray().map((function(e){return e})),o=a.values.toArray();return this.setResults(r,o,this.sumYVals(o))},e.prototype.setTimeSeriesData=function(e){var t=this,n=e.map((function(e){var n=e.name;return t.stripName(n)})),a=e.map((function(e){var t=i(e.fields,2);return i(t[1].values.toArray(),1)[0]}));return this.setResults(n,a,this.sumYVals(a))},e.prototype.sumYVals=function(e){return e.reduce((function(e,t){return e+t}),0)},e.prototype.stripName=function(e){var t=e.match(/\{.*:+(.*)\}/);if(!t)return e;var n=i(t,2),a=n[0],r=n[1];return r?r.trim():a?a.trim():e},e.prototype.setResults=function(e,t,n){return t.filter((function(e){return e<0})).length?(this.results=null,this.error={message:'Column "counts" contains negative values'},this.results):(this.results=t.map((function(t,n){return{i:n,x:e[n],y:t}})).sort((function(e,t){return t.y-e.y})).reduce((function(e,a,i){var l,s=100*a.y/n;s=s>100?100:s;var c=((null===(l=e)||void 0===l?void 0:l.p[i-1])?e.p[i-1]:0)+s;c=c>100?100:c;var u=i===t.length-1?Math.trunc(Math.ceil(c))+" %":c.toFixed(2)+" %",d=s.toFixed(2)+" %";return r(r({},e),{x:o(e.x,[a.x]),y:o(e.y,[a.y]),p:o(e.p,[c]),xP:o(e.xP,[s]),xAxisLabels:o(e.xAxisLabels,[u]),tooltipLabel:o(e.tooltipLabel,[d])})}),{x:[],y:[],p:[],xP:[],xAxisLabels:[],tooltipLabel:[]}),this.results)},e}();n.d(t,"plugin",(function(){return ne}));var ne=new a.PanelPlugin((function(e){var t,n=e.options,a=e.data,i=e.width,o=e.height,s=e.id,h=Object(c.useRef)(null),b=Object(p.useTheme)(),m=K();if(!a||!a.series.length)return u.a.createElement("div",{className:["placeholder--no-data",m.placeholder.__noData].join(" ")},"No Data");var x="chartMask_"+s,g=new te(a).getResults(),v=g.results,y=g.error;if(y||!v)return u.a.createElement("div",{className:["placeholder--no-data",m.placeholder.__noData].join(" ")},(null===(t=y)||void 0===t?void 0:t.message)||"Invalid data");var O=function(e,t){var n=t.options,a=t.width,r=t.height,i=n.vitalBreakpointVal,o=Object(f.max)(e.y)||0,l=Object(f.min)(e.y)||0,s=r-60,c=a-40,u=Object(f.scaleBand)().range([0,c-20]).padding(n.barPadding),d=Object(f.scaleBand)().range([0,c-20]).padding(n.barPadding).paddingOuter(.6),p=Object(f.scaleLinear)().range([0,c-20]),h=Object(f.scaleLinear)().range([0,c-20]),b=Object(f.scaleLinear)().range([s,0]),m=Object(f.scaleLinear)().range([s,0]),x=Object(f.line)().curve(f.curveBasis).x((function(e,t){return h(t)||0})).y((function(e){return e?m(e.p/100):e})),g=e.p.map((function(t,n){return{x:e.xAxisLabels[n]||"",p:t||0}}))||null,v=e.p.map((function(t,n){return{x:e.xAxisLabels[n]||"",p:i}}))||null,y=e.p.map((function(e,t){return{x:t,p:0}})),O=e.p[0]/e.p.length,j=l-O>0?l-O:0;return u.domain(e.xAxisLabels),d.domain(e.xAxisLabels),p.domain([-1,e.x.length]),h.domain([-1,e.x.length]),m.domain([0,1]),b.domain([j,o+O]),{padding:20,x:h,xBand:u,xPBand:d,xLinear:p,y:b,p:m,chartHeight:s,chartWidth:c,line:x,pathData:g,cutOffXPathData:v,bottomLineData:y,pLabels:function(e,t){return 0!==t&&e&&e?100*e+" %":""},Component:X}}(v,{options:n,width:i,height:o}),j=r(r(r({data:v,theme:b,styles:m,chartId:x},n),O),{svgRef:h}),w=O.Component;return u.a.createElement("div",{className:Object(d.cx)(m.wrapper,Object(d.css)(Y||(Y=l(["\n          width: ","px;\n          height: ","px;\n        "],["\n          width: ","px;\n          height: ","px;\n        "])),i,o))},u.a.createElement(G,r({},j)),u.a.createElement("svg",{ref:h,className:["svg--pareto-chart",m.svg].join(" "),width:i,height:o,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 "+i+" "+o},u.a.createElement("g",{transform:"translate("+O.padding+", "+O.padding+")",className:"wrapper"},u.a.createElement(w,r({},j)),u.a.createElement($,r({},j)),u.a.createElement(ee,r({},j))),u.a.createElement(U,r({},j)),u.a.createElement("defs",null,u.a.createElement("clipPath",{id:x},u.a.createElement("rect",{transform:"translate(0, -"+j.padding+")",ref:function(e){Object(f.select)(e).attr("width",j.chartWidth-j.padding).attr("height",j.chartHeight+j.padding)}})))))})).setPanelOptions((function(e){return e.addBooleanSwitch({path:"showVitalFew",name:"Show vital few line",description:"Indicates that many defects come from relatively few causes.",defaultValue:!0}).addNumberInput({path:"vitalBreakpointVal",name:"Vital few value (%)",description:"Default is 80 based on the 80/20 rule. But, you are able to customize this.",defaultValue:20}).addBooleanSwitch({path:"isInclusive",name:"Inclusive vital few",description:"Include bar with overlapping breakpoint value",defaultValue:!1}).addBooleanSwitch({path:"showBarValue",name:"Show bar values",description:"Show the bar values on top of the bars?",defaultValue:!1}).addNumberInput({path:"valToFixed",name:"Number of decimals (max. 6)",description:"Set number of decimals in bar values.",settings:{min:0,max:6},defaultValue:2,showIf:function(e){return e.showBarValue}}).addNumberInput({path:"barPadding",name:"Bar padding",description:"Space between bars. Should be a value between 0 and 1.",defaultValue:.2,settings:{min:0,max:1}}).addColorPicker({category:["Colors"],path:"curveLineColor",name:"Percentage line",description:"The curved line visualizing the optimal trade off"}).addColorPicker({category:["Colors"],path:"vitalLineColor",name:"Breakpoint lines",description:"Horizontal and vertical lines indicating the vital few breakpoint",showIf:function(e){return e.showVitalFew}}).addColorPicker({category:["Colors"],path:"vitalColor",name:"Vital few bars",description:"The bars within the determined vital few percentage"}).addColorPicker({category:["Colors"],path:"trivialColor",name:"Trivial many bars",description:"The bars outside the vital few percentage"}).addColorPicker({category:["Colors"],path:"barHoverColor",name:"Bar hover state",description:"Bar fill color on hover"})}))}])}));
//# sourceMappingURL=module.js.map