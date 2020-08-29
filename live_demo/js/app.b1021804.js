(function(e){function t(t){for(var n,a,i=t[0],l=t[1],u=t[2],c=0,f=[];c<i.length;c++)a=i[c],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],n=!0,i=1;i<o.length;i++){var l=o[i];0!==r[l]&&(n=!1)}n&&(s.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={app:0},s=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-monty_hall/live_demo/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=l;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"0779":function(e,t,o){"use strict";var n=o("7c52"),r=o.n(n);r.a},1411:function(e,t,o){},"4cd3":function(e,t,o){},5087:function(e,t,o){"use strict";var n=o("e2d3"),r=o.n(n);r.a},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("MontyHall")],1)},s=[],a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"montyHall"},[o("div",{staticClass:"game"},[o("h1",{staticClass:"title"},[e._v("Monty Hall Game")]),o("div",{staticClass:"menu"},[o("MenuNewGame",{attrs:{minDoors:e.minDoors,maxDoors:e.maxDoors},on:{"new-game":function(t){return e.newGame(t)}}}),o("PanelStatus",{attrs:{rounds:e.rounds,wins:e.wins,losses:e.losses}})],1),o("Message",{staticClass:"message",attrs:{text:e.message}}),o("DoorGrid",{staticClass:"doorGrid",attrs:{doors:e.doors,transitionTime:e.transitionTime},on:{"door-click":function(t){return e.doorClick(t)}}})],1)])},i=[],l=(o("c975"),o("fb6a"),o("a434"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"door-grid"},e._l(e.doors,(function(t,n){return o("Door",{key:t.number,attrs:{door:t,transitionTime:e.transitionTime},on:{"door-click":function(t){return e.$emit("door-click",n)}}})})),1)}),u=[],d=(o("a9e3"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"door-percentage",style:{visibility:e.door.chance>0?"visible":"hidden"}},[e._v(" "+e._s(e.door.chance)+"% ")]),o("div",{staticClass:"door-frame",class:e.doorFrameToggleClass},[o("div",{staticClass:"reward-container"},[e.door.haveCar?o("img",{staticClass:"reward",attrs:{src:"img/car.png"}}):o("img",{staticClass:"reward",attrs:{src:"img/goat.png"}})]),o("div",{staticClass:"door",class:e.doorToggleClass,style:{transition:"all "+e.transitionTime/1e3+"s ease-in-out"},on:{click:function(t){return e.$emit("door-click",e.door)}}},[o("span",{staticClass:"door-number"},[e._v(e._s(e.door.number))])])])])}),c=[],f={name:"Door",props:{door:{type:Object,required:!0},transitionTime:{type:Number,required:!1,default:.5}},computed:{doorFrameToggleClass:function(){return{"door-frame-selected":this.door.selected}},doorToggleClass:function(){return{"door-open":this.door.openned,"door-selected":this.door.selected,"door-selectable":this.door.selectable&&!this.door.selected}}}},p=f,m=(o("f440"),o("2877")),h=Object(m["a"])(p,d,c,!1,null,"4011f297",null),v=h.exports,b={name:"DoorGrid",components:{Door:v},props:{doors:{type:Array,required:!0},transitionTime:{type:Number,required:!1,default:.5}}},C=b,y=(o("5fdf"),Object(m["a"])(C,l,u,!1,null,"fb6ae900",null)),g=y.exports,_=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"panelStatus"},[o("div",{staticClass:"panelStatus-item"},[e._v(" Rounds: "),o("span",[e._v(e._s(e.rounds))])]),o("div",{staticClass:"panelStatus-item"},[e._v(" Wins: "),o("span",[e._v(e._s(e.wins))])]),o("div",{staticClass:"panelStatus-item"},[e._v(" Losses: "),o("span",[e._v(e._s(e.losses))])])])},w=[],D={name:"PanelStatus",props:{rounds:{type:Number,required:!0,default:0},wins:{type:Number,required:!0,default:0},losses:{type:Number,required:!0,default:0}}},x=D,T=(o("6c10"),Object(m["a"])(x,_,w,!1,null,"512e7d3f",null)),O=T.exports,j=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"menu-newGame"},[o("div",[e._v(" Doors: "),o("span",{attrs:{id:"doorsCount"}},[e._v(e._s(e.doorsQuantity))])]),o("Slider",{attrs:{min:e.minDoors,max:e.maxDoors},on:{slide:function(t){e.doorsQuantity=t}}}),o("Button",{attrs:{label:"New Game"},nativeOn:{click:function(t){return t.stopPropagation(),e.$emit("new-game",e.doorsQuantity)}}})],1)},M=[],S=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("button",{staticClass:"button"},[e._v(" "+e._s(e.label)+" ")])},k=[],$={name:"Button",props:{label:{type:String,required:!0,default:"Button Label"}}},N=$,q=(o("abe1"),Object(m["a"])(N,S,k,!1,null,"f10fd164",null)),G=q.exports,P=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.value,expression:"value",modifiers:{number:!0}}],staticClass:"slider",attrs:{type:"range",min:e.min,max:e.max},domProps:{value:e.value},on:{input:function(t){return e.$emit("slide",e.value)},__r:function(t){e.value=e._n(t.target.value)},blur:function(t){return e.$forceUpdate()}}})},E=[],K={name:"Slider",props:{min:{type:Number,required:!0,default:0},max:{type:Number,required:!0,default:100}},data:function(){return{value:0}},created:function(){this.value=this.min}},Q=K,W=(o("fb71"),Object(m["a"])(Q,P,E,!1,null,"00bc8349",null)),H=W.exports,I={name:"MenuNewGame",components:{Button:G,Slider:H},props:{minDoors:{type:Number,required:!0,default:0},maxDoors:{type:Number,required:!0,default:99}},data:function(){return{doorsQuantity:3}}},B=I,A=(o("0779"),Object(m["a"])(B,j,M,!1,null,"53e67d7d",null)),F=A.exports,J=function(){var e=this,t=e.$createElement,o=e._self._c||t;return""!==e.text?o("div",{staticClass:"message"},[e._v(" "+e._s(e.text)+" ")]):e._e()},L=[],Y={name:"Message",props:{text:{type:String,required:!1,default:""}}},R=Y,U=(o("77b5"),Object(m["a"])(R,J,L,!1,null,"c0a64c92",null)),z=U.exports,V={name:"MontyHall",components:{DoorGrid:g,PanelStatus:O,MenuNewGame:F,Message:z},data:function(){return{doors:[],doorsQuantity:0,minDoors:3,maxDoors:99,rounds:0,wins:0,losses:0,playerChosenDoor:null,doorKeepedClosed:null,doorWithCar:null,state:"notStarted",message:"",transitionTime:500,timeout:null}},methods:{newGame:function(e){var t=this;clearTimeout(this.timeout);for(var o=0;o<this.doors.length;o++)this.doors[o].openned=!1;this.state="waitingTimeout",this.timeout=setTimeout((function(){t.doors=[],t.doorsQuantity=e,t.playerChosenDoor=null,t.doorKeepedClosed=null,t.doorWithCar=null;for(var o=t.roundToTwoDecimals(100/e),n=0;n<e;n++)t.doors.push({number:n+1,haveCar:!1,openned:!1,selected:!1,selectable:!0,chance:o});t.hideCar(),t.message="Chose a door",t.state="choseDoor"}),this.transitionTime)},hideCar:function(){var e=this.randomIntInclusive(0,this.doors.length-1);this.doors[e].haveCar=!0,this.doorWithCar=this.doors[e]},giveHint:function(){var e=this.doors.slice(0,this.doors.length);if(this.playerChosenDoor===this.doorWithCar){e.splice(e.indexOf(this.playerChosenDoor),1);var t=this.randomIntInclusive(0,e.length-1);this.doorKeepedClosed=e[t],e.splice(t,1)}else this.doorKeepedClosed=e[e.indexOf(this.doorWithCar)],e.splice(e.indexOf(this.playerChosenDoor),1),e.splice(e.indexOf(this.doorWithCar),1);for(var o=0;o<e.length;o++)e[o].openned=!0,e[o].selectable=!1,e[o].chance=0;this.doorKeepedClosed.chance=this.roundToTwoDecimals(100/this.doorsQuantity*(this.doorsQuantity-1)),this.state="decideChange",this.message="Do you want to keep or change the door?"},doorClick:function(e){var t=this;if(this.doors[e].selectable)switch(this.state){case"choseDoor":this.playerChosenDoor=this.doors[e],this.playerChosenDoor.selected=!0,this.giveHint();break;case"decideChange":this.playerChosenDoor!==this.doors[e]&&(this.playerChosenDoor.selected=!1,this.doorKeepedClosed=this.playerChosenDoor,this.doorKeepedClosed.selectable=!1,this.playerChosenDoor=this.doors[e],this.playerChosenDoor.selected=!0),this.state="waitingTimeout",this.timeout=setTimeout((function(){t.doorWithCar.openned=!0,t.playerChosenDoor.openned=!0,t.doorKeepedClosed.openned=!0,t.playerChosenDoor.haveCar?(t.message="You win!",t.wins++):(t.message="You lose!",t.losses++),t.state="gameEnd",t.rounds++}),2*this.transitionTime);break}},randomIntInclusive:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},roundToTwoDecimals:function(e){return Math.round(100*e)/100}}},X=V,Z=(o("5087"),Object(m["a"])(X,a,i,!1,null,"f597bf40",null)),ee=Z.exports,te={name:"App",components:{MontyHall:ee}},oe=te,ne=(o("034f"),Object(m["a"])(oe,r,s,!1,null,null,null)),re=ne.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(re)}}).$mount("#app")},"5a5e":function(e,t,o){},"5fdf":function(e,t,o){"use strict";var n=o("4cd3"),r=o.n(n);r.a},"6c10":function(e,t,o){"use strict";var n=o("d68e"),r=o.n(n);r.a},"77b5":function(e,t,o){"use strict";var n=o("c91a"),r=o.n(n);r.a},"7c52":function(e,t,o){},"85ec":function(e,t,o){},"9b05":function(e,t,o){},abe1:function(e,t,o){"use strict";var n=o("1411"),r=o.n(n);r.a},c91a:function(e,t,o){},d68e:function(e,t,o){},e2d3:function(e,t,o){},f440:function(e,t,o){"use strict";var n=o("5a5e"),r=o.n(n);r.a},fb71:function(e,t,o){"use strict";var n=o("9b05"),r=o.n(n);r.a}});
//# sourceMappingURL=app.b1021804.js.map