!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o=e();for(var n in o)("object"==typeof exports?exports:t)[n]=o[n]}}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}({0:function(t,e,o){t.exports=o(43)},1:function(t,e){"use strict";t.exports={funcOrValue:function(t,e){if("function"==typeof t){var o=t.call(e);return o&&void 0!==o.$$value?o.$$value:o}return t},execFuncs:function(t,e,o){"function"==typeof t?t.apply(e,o):Array.prototype.isPrototypeOf(t)&&t.forEach(function(t){t&&t.apply(e)})},blend:["source-over","source-in","source-out","source-atop","destination-over","destination-in","destination-out","destination-atop","lighter","copy","xor","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],pointInRect:function(t,e,o,n,r,a){return!(o>t||t>n||r>e||e>a)},firstValuable:function(t,e){return void 0===t?e:t}}},43:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var r=o(1),a=n(r),i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJkSURBVHjaxJeJbusgEEW94S1L//83X18M2MSuLd2pbqc4wZGqRLrKBsyZhQHny7Jk73xVL8xpVhWrcmiB5lX+6GJ5YgQ2owbAm8oIwH1VgKZUmGcRqKGGPgtEQQAzGR8hQ59fAmhJHSAagigJ4E7GPWRXOYC6owAd1JM6wDQPADyMWUqZRMqmAojHp1Vn6EQQEgUNMJLnUjMyJsM49wygBkAPw9dVFwXRkncCIIW3GRgoTQUZn6HxCMAFEFd8TwEQ78X4rHbILoAUmeT+RFG4UhQ6MiIAE4W/UsYFjuVjAIa2nIY4q1R0GFtQWG3E84lqw2GO2QOoCKBVu0BAPgDSU0eUDjjQenNkV/AW/pWChhpMTelo1a64AOKM30vk18GzTHXCNtI/Knz3DFBgsUqBGIjTInXRY1yA9xkVoqW5tVq3pDR9A0hfF5BSARmVnh7RMDCaIdcNgbPBkgzn1Bu+SfIEFSpSBmkxyrMicb0fAEuCZrWnN89veA/4XcakrPcjBWzkTuLjlbfTQPOlBhz+HwkqqPXmPQDdrQItxE1moGof1S74j/8txk8EHhTQrAE8qlwfqS5yukm1x/rAJ9Jiaa6nyATqD78aUVBhFo8b1V4DdTXdCW+IxA1zB4JhiOhZMEWO1HqnvdoHZ4FAMIhV9REF8FiUm0jsYPEJx/Fm/N8OhH90HI9YRHesWbXXZwAShU8qThe7H8YAuJmw5yOd989uRINKRTJAhoF8jbqrHKfeCYdIISZfSq26bk/K+yO3YvfKrVgiwQBHnwt8ynPB25+M8hceTt/ybPhnryJ78+tLgAEAuCFyiQgQB30AAAAASUVORK5CYII=",l=new Image;l.src=i;var s=void 0,c=function(t){var e=new s.class.sprite(t);e.content={img:function(){return t.content.img}};var o=document.createElement("canvas");o.width=t.style.tw,o.height=t.style.th;var n=document.createElement("canvas");n.width=t.style.tw,n.height=t.style.th;var r=o.getContext("2d"),i=n.getContext("2d");"string"==typeof t.content.img&&(t.content.img=Easycanvas.imgLoader(t.content.img));var c={ticks:0,progress:0,callback:!1,particleData:[]},u={drip:function(o){o.fillStyle="rgba(0, 0, 0, 0.1)",o.fillRect(0,0,t.style.tw,t.style.th),o.globalCompositeOperation="source-over",o.globalAlpha=1,o.drawImage(l,(t.style.tw>>1)-(t.style.tw>>1)*c.progress*2,(t.style.th>>1)-(t.style.th>>1)*c.progress*2,t.style.tw*c.progress*2,t.style.th*c.progress*2),o.globalCompositeOperation="source-out",o.globalAlpha=Math.max(1-c.progress,0),o.drawImage(a.default.funcOrValue(t.content.img,e),0,0,t.style.tw,t.style.th)},flow:function(o){if(!c.particleData.length)for(var r=0;t.style.tw/100>r;r++)c.particleData.push({x:-100+100*r+40*Math.random()-20,y:200*-Math.random()-300,extra:20*Math.random()});i.fillStyle="rgba(0, 0, 0, 0.01)",i.fillRect(0,0,t.style.tw,t.style.th),c.particleData.forEach(function(e){i.drawImage(l,e.x,e.y,300,300),e.y+=1/c.ticks*t.style.th+e.extra}),o.globalCompositeOperation="source-over",o.clearRect(0,0,t.style.tw,t.style.th),o.drawImage(n,0,0),o.globalCompositeOperation="source-out",o.drawImage(a.default.funcOrValue(t.content.img,e),0,0,t.style.tw,t.style.th)}};return e.fade=function(t){var n=t.type,a=t.ticks;return c.ticks=a||60,e.content={img:function(){return o}},e.on("beforeTick",function t(){return u[n||"drip"](r),c.progress>1?(e.off("beforeTick",t),delete e.content.img,o=null,r=null,void(c.callback&&c.callback(e))):void(c.progress+=1/(a||100))}),{then:function(t){c.callback=t}}},e};window&&window.Easycanvas&&(s=window.Easycanvas,s.class.fade=c),t.exports=function(t){s=t,t.class.fade=c}}})});