var e=Object.assign;import{l as t,f as a,a as c,b as o,c as r,d as s,e as n,g as i,h as l,i as d,j as u,k as m,m as p,n as h,F as v,r as b,o as f,p as y,q as k,s as g,t as x,u as C,v as q,w as T,x as S,y as R,z as w,A as _,B as z,C as M,D as I,E as F,T as B,G as O,H as j,I as E,J as L,K as P,L as N,M as G,N as W}from"./vendor.eac1f8d4.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const c=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,r)=>{const s=new URL(e,c);if(self[t].moduleMap[s])return a(self[t].moduleMap[s]);const n=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(n),onerror(){r(new Error(`Failed to import: ${e}`)),o(i)},onload(){a(self[t].moduleMap[s]),o(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/hello-world/assets/");t.add(a,c,o,r,s,n,i,l,d,u,m,p,h);const U={components:{}};U.render=function(e,t,a,c,o,r){const s=b("router-view");return f(),y(s)};const A={props:{index:{type:Number,required:!0},matched:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},icon:{type:String,required:!0},iconSize:{type:String,default:"3x"},backgroundColor:{type:String,default:""},color:{type:String,default:""}},emits:["click-card"],setup:(e,t)=>({flippedStyle:x((()=>e.visible?"flipped":"")),clickCard:()=>{t.emit("click-card",{icon:e.icon,index:e.index})}})},V=T("data-v-e0bd3ea2");k("data-v-e0bd3ea2");const D={key:0,class:"face front"},Y={key:0,class:"absolute bottom-0 left-0"};g();const H=V(((e,t,a,c,o,r)=>{const s=b("Fa");return f(),y("div",{class:["card",c.flippedStyle],onClick:t[1]||(t[1]=(...e)=>c.clickCard&&c.clickCard(...e))},[a.visible?(f(),y("div",{key:1,class:"face back",style:{color:a.color,backgroundColor:a.backgroundColor}},[C(s,{icon:a.icon,size:a.iconSize,flip:"horizontal"},null,8,["icon","size"]),a.matched?(f(),y("div",Y,[C(s,{icon:"check-circle",size:"lg",flip:"horizontal"})])):q("",!0)],4)):(f(),y("div",D))],2)}));A.render=H,A.__scopeId="data-v-e0bd3ea2";const J={components:{Item:A},setup(){const e=S({index:1,icon:"anchor",backgroundColor:"#fecaca",color:"#069bcc",iconSize:"2x",matched:!1,visible:!1});return{item:e,mouseOver:()=>{e.visible=!0},mouseLeave:()=>{e.visible=!1}}},methods:{clickCard(){this.$router.push({name:"card"})}}},K=T("data-v-4c597026")(((e,t,a,c,o,r)=>{const s=b("Item");return f(),y(s,{class:"card-box",index:c.item.index,matched:c.item.matched,visible:c.item.visible,icon:c.item.icon,"icon-size":c.item.iconSize,"background-color":c.item.backgroundColor,color:c.item.color,onMouseover:c.mouseOver,onMouseleave:c.mouseLeave,onClickCard:r.clickCard},null,8,["index","matched","visible","icon","icon-size","background-color","color","onMouseover","onMouseleave","onClickCard"])}));J.render=K,J.__scopeId="data-v-4c597026";const Q={props:{value:{type:Number,required:!0},index:{type:Number,required:!0},size:{type:Number,default:100},icon:{type:[String,Array],default:""},iconSize:{type:String,default:"3x"},iconColor:{type:String,default:"black"}},emits:["click-square"],setup(e,t){const a=R(`square-${e.index}`),c=x((()=>""!==e.icon)),o=S({width:`${e.size}px`,height:`${e.size}px`});return{className:a.value,styleObject:o,hasIcon:c,clickSquare:()=>{t.emit("click-square",{index:e.value})}}}},X=T("data-v-03c85205")(((e,t,a,c,o,r)=>{const s=b("Fa");return f(),y("div",{class:["square",c.className],style:c.styleObject,onClick:t[1]||(t[1]=e=>c.clickSquare())},[c.hasIcon?(f(),y(s,{key:0,icon:a.icon,size:a.iconSize,style:{color:a.iconColor}},null,8,["icon","size","style"])):q("",!0)],6)}));Q.render=X,Q.__scopeId="data-v-03c85205";const Z={components:{Square:Q},setup:()=>({squares:S(["","times","",["far","circle"],"","","","",""]),mouseOver:()=>{},mouseLeave:()=>{}}),methods:{clickSquare(){this.$router.push({name:"tic-tac-toe"})}}},ee=T("data-v-242a041a");k("data-v-242a041a");const te={class:"tic-tac-toe-box"};g();const ae=ee(((e,t,a,c,o,r)=>{const s=b("Square");return f(),y("div",te,[(f(!0),y(w,null,_(c.squares,((e,t)=>(f(),y(s,{key:t,index:t,value:t,icon:e,size:"50","icon-size":"2x","icon-color":"white",onClickSquare:r.clickSquare},null,8,["index","value","icon","onClickSquare"])))),128))])}));Z.render=ae,Z.__scopeId="data-v-242a041a";const ce={components:{Card:J,TicTacToe:Z},mounted(){$("body").attr("class","home-body")}},oe={class:"container"};ce.render=function(e,t,a,c,o,r){const s=b("Card"),n=b("TicTacToe");return f(),y("div",oe,[C(s),C(n)])};const re={props:{title:{type:String,default:""}},watch:{title:{handler(){document.title=this.title},immediate:!0}}},se={class:"relative flex justify-center m-auto my-2 sm:my-4"},ne={class:"text-3xl"},ie={class:"absolute right-0 text-right"},le={href:"https://github.com/lilashih/hello-world",target:"_blank"};function de(){const e=Date.now()+5e3,t=["#bb0000","#ffffff"];!function a(){M({particleCount:2,angle:60,spread:55,origin:{x:0},colors:t}),M({particleCount:2,angle:120,spread:55,origin:{x:1},colors:t}),Date.now()<e&&requestAnimationFrame(a)}()}re.render=function(e,t,a,c,o,r){const s=b("Fa");return f(),y("div",se,[C("div",ne,[z(e.$slots,"default")]),C("div",ie,[C("a",le,[C(s,{icon:["fab","github"],size:"lg"})])])])};const ue={components:{Card:A},setup(){const e=I(),t=x((()=>e.state.card.cards)),a=x((()=>e.state.card.openedCards)),c=x((()=>e.getters["card/matchedCount"]));return F(a,(t=>{if(2===t.length){const a=t[0],c=t[1];a.index===c.index?e.commit("card/updateVisible",{index:a.index,visible:!1}):a.icon===c.icon?(e.commit("card/updateMatched",{index:a.index,matched:!0}),e.commit("card/updateMatched",{index:c.index,matched:!0})):setTimeout((()=>{e.commit("card/updateVisible",{index:a.index,visible:!1}),e.commit("card/updateVisible",{index:c.index,visible:!1})}),1e3),e.commit("card/initOpenedCards")}}),{deep:!0}),F(c,(e=>{e===t.value.length&&de()})),{cards:t,matchedCount:c,clickCard:t=>{e.dispatch("card/clickCard",t)}}}},me=T("data-v-7175bbba");k("data-v-7175bbba");const pe={class:"cards"};g();const he=me(((e,t,a,c,o,r)=>{const s=b("Card");return f(),y("div",pe,[C(B,{name:"shuffle"},{default:me((()=>[(f(!0),y(w,null,_(c.cards,((e,t)=>(f(),y(s,{key:`${e.icon}_${e.v}`,index:t,matched:e.matched,visible:e.visible,icon:e.icon,"background-color":e.backgroundColor,color:e.color,onClickCard:c.clickCard},null,8,["index","matched","visible","icon","background-color","color","onClickCard"])))),128))])),_:1})])}));ue.render=he,ue.__scopeId="data-v-7175bbba";const ve={emits:["restart"]},be=T("data-v-d199c01c")(((e,t,a,c,o,r)=>{const s=b("Fa");return f(),y("div",{class:"restart",onClick:t[1]||(t[1]=t=>e.$emit("restart"))},[C(s,{icon:"sync-alt"})])}));ve.render=be,ve.__scopeId="data-v-d199c01c";const fe={components:{Board:ue,Restart:ve},setup(){const e=I(),t=()=>{e.dispatch("card/restart")};return t(),{restart:t}}};fe.render=function(e,t,a,c,o,r){const s=b("Restart"),n=b("Board");return f(),y(w,null,[C(s,{onRestart:c.restart},null,8,["onRestart"]),C(n)],64)};const ye={components:{Title:re,Game:fe},mounted(){$("body").attr("class","card-body")}},ke={class:"container"},ge=C("div",{class:"font-black"}," Flip Game ",-1);ye.render=function(e,t,a,c,o,r){const s=b("Title"),n=b("Game");return f(),y("div",ke,[C(s,{title:"Flip Game"},{default:O((()=>[ge])),_:1}),C(n)])};const xe={props:{value:{type:String,required:!0},icon:{type:[String,Array],required:!0}}},Ce=T("data-v-5713d814");k("data-v-5713d814");const qe={class:"player"};g();const Te=Ce(((e,t,a,c,o,r)=>{const s=b("Fa");return f(),y("div",qe,[C(s,{icon:a.icon,size:"2x"},null,8,["icon"])])}));xe.render=Te,xe.__scopeId="data-v-5713d814";const Se={components:{Player:xe},setup(){const e=I();return{players:e.state.ticTacToe.players,chooseRole:t=>{e.dispatch("ticTacToe/chooseRole",{index:t})}}}},Re={class:"flex justify-center items-center text-center mt-6"};Se.render=function(e,t,a,c,o,r){const s=b("Player");return f(),y("div",Re,[(f(!0),y(w,null,_(c.players,((e,t)=>(f(),y(s,{key:t,value:e.value,icon:e.icon,onClick:e=>c.chooseRole(t)},null,8,["value","icon","onClick"])))),128))])};const we={components:{Square:Q},setup(){const e=I(),t=x((()=>e.getters["ticTacToe/hasWinner"])),a=x((()=>e.getters["ticTacToe/winner"])),c=x((()=>e.getters["ticTacToe/tie"]));return F(t,(e=>{e&&"me"===a.value.role&&de()})),{squares:e.state.ticTacToe.squares,hasWinner:t,tie:c,clickSquare:a=>{t.value||e.dispatch("ticTacToe/clickSquareByMe",a)}}}},_e=T("data-v-f13e6f7e")(((e,t,a,c,o,r)=>{const s=b("Square");return f(),y("div",{class:["board",c.hasWinner||c.tie?"opacity-20":""]},[(f(!0),y(w,null,_(c.squares,((e,t)=>(f(),y(s,{key:t,index:t,value:t,icon:e,onClickSquare:c.clickSquare},null,8,["index","value","icon","onClickSquare"])))),128))],2)}));we.render=_e,we.__scopeId="data-v-f13e6f7e";const ze={components:{ChoosePlayer:Se,Board:we,Restart:ve},setup(){const e=I(),t=x((()=>e.getters["ticTacToe/me"])),a=x((()=>e.getters["ticTacToe/hasRole"])),c=x((()=>e.getters["ticTacToe/winner"])),o=x((()=>e.getters["ticTacToe/hasWinner"])),r=x((()=>e.getters["ticTacToe/tie"])),s=()=>{e.dispatch("ticTacToe/restart")};return s(),{me:t,hasRole:a,winner:c,hasWinner:o,tie:r,restart:s}}},Me=T("data-v-391c412a");k("data-v-391c412a");const $e={key:0,class:"text-center"},Ie={class:"me"},Fe=j(" You are: "),Be={key:1,class:"over"},Oe={key:0},je={key:1},Ee={key:2};g();const Le=Me(((e,t,a,c,o,r)=>{const s=b("Restart"),n=b("Fa"),i=b("Board"),l=b("ChoosePlayer");return f(),y(w,null,[C(s,{onRestart:c.restart},null,8,["onRestart"]),c.hasRole?(f(),y("div",$e,[C("span",Ie,[Fe,C(n,{icon:c.me.icon},null,8,["icon"])])])):q("",!0),c.hasWinner||c.tie?(f(),y("div",Be,[c.tie?(f(),y("span",Oe,"It is a tie !")):"me"===c.winner.role?(f(),y("span",je,"You win !")):(f(),y("span",Ee,"You lose !"))])):q("",!0),c.hasRole?(f(),y(i,{key:2})):(f(),y(l,{key:3}))],64)}));ze.render=Le,ze.__scopeId="data-v-391c412a";const Pe={components:{Title:re,Game:ze},mounted(){$("body").attr("class","tic-tac-toe-body")}},Ne={class:"container"},Ge=C("div",{class:"font-black"}," Tic Tac Toe ",-1);Pe.render=function(e,t,a,c,o,r){const s=b("Title"),n=b("Game");return f(),y("div",Ne,[C(s,{title:"Tic-Tac-Toe"},{default:O((()=>[Ge])),_:1}),C(n)])};const We=[{path:"/",component:ce,name:"home"},{path:"/card",component:ye,name:"card"},{path:"/tic-tac-toe",component:Pe,name:"tic-tac-toe"}],Ue=E({base:"/hello-world",history:L(),routes:We}),Ae={faces:[{icon:"candy-cane",backgroundColor:"#cadcee",color:"#dc2626"},{icon:"bomb",backgroundColor:"#cccbcd",color:"#000000"},{icon:"cat",backgroundColor:"#ef4444",color:"#f3f4f6"},{icon:"anchor",backgroundColor:"#fecaca",color:"#069bcc"},{icon:"crown",backgroundColor:"#866fa4",color:"#eeff72"},{icon:"grin-tongue-wink",backgroundColor:"#60739d",color:"#ffd700"},{icon:"fish",backgroundColor:"#528cd1",color:"#fbdcbb"},{icon:"guitar",backgroundColor:"#d5e4ce",color:"#9c6721"}],cards:[],openedCards:[]};const Ve={players:[{icon:["far","circle"],class:"text-blue-500",value:"o",role:""},{icon:"times",class:"text-red-400",value:"x",role:""}],rules:[],squares:[]},De={restart({commit:e}){e("initSquare"),e("initPlayerRole")},chooseRole({commit:e},{index:t}){e("updatePlayerRole",{index:t,role:"me"}),e("updatePlayerRole",{index:Math.abs(t-1),role:"computer"})},clickSquareByMe({getters:e,dispatch:t},{index:a}){P.isEmpty(Ve.squares[a])&&(t("clickSquare",{index:a,icon:e.me.icon,replace:e.me.role}),P.isEmpty(e.winner)&&t("clickSquareByComputer"))},clickSquareByComputer({getters:e,dispatch:t}){const a=[];for(let s=0;s<Ve.rules.length;s+=1)if(a[s]=Ve.rules[s].every((e=>P.isString(e)))?-3:0,0===a[s]){for(let t=0;t<Ve.rules[s].length;t+=1)Ve.rules[s][t]===e.me.role&&(a[s]-=1),Ve.rules[s][t]===e.computer.role&&(a[s]+=1);a[s]=-2===a[s]?4:a[s],a[s]=2===a[s]?5:a[s]}const c=Math.max(...a),o=a.map(((e,t)=>e===c?t:void 0)).filter((e=>void 0!==e)),r=[];o.forEach((e=>{const t=Ve.rules[e].find((e=>P.isNumber(e)));r.push(t)}));t("clickSquare",{index:P.shuffle(r)[0],icon:e.computer.icon,replace:e.computer.role})},clickSquare({commit:e},{index:t,icon:a,replace:c}){e("clickSquare",{index:t,icon:a}),e("updateRule",{index:t,replace:c})}};var Ye=N({modules:{card:{namespaced:!0,state:Ae,getters:{matchedCount:e=>e.cards.filter((e=>!0===e.matched)).length},actions:{restart({commit:e}){e("initOpenedCards"),e("initCards")},clickCard({commit:e},t){!1===Ae.cards[t.index].matched&&e("clickCard",t)}},mutations:{clickCard(e,t){e.cards[t.index].visible=!0,e.openedCards.push(t)},initCards(t){t.cards=[],t.faces.forEach((a=>{t.cards.push(e(e({},a),{v:1,visible:!1,matched:!1})),t.cards.push(e(e({},a),{v:2,visible:!1,matched:!1}))})),t.cards=P.shuffle(t.cards)},initOpenedCards(e){e.openedCards.length=0},updateVisible(e,{index:t,visible:a}){e.cards[t].visible=a},updateMatched(e,{index:t,matched:a}){e.cards[t].matched=a}}},ticTacToe:{namespaced:!0,state:Ve,getters:{me:e=>e.players.find((e=>"me"===e.role)),computer:e=>e.players.find((e=>"computer"===e.role)),hasRole:(e,t)=>!P.isEmpty(t.me),winner:(e,t)=>{for(let a=0;a<e.rules.length;a+=1){if(e.rules[a].every((t=>t===e.rules[a][0])))return t[e.rules[a][0]]}return{}},tie:e=>!P.isEmpty(e.squares)&&!e.squares.includes(""),hasWinner:(e,t)=>!P.isEmpty(t.winner)},actions:De,mutations:{updatePlayerRole(e,{index:t,role:a}){e.players[t].role=a},initPlayerRole(e){e.players[0].role="",e.players[1].role=""},initSquare(e){e.squares=["","","","","","","","",""],e.rules=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]},clickSquare(e,{index:t,icon:a}){e.squares[t]=a},updateRule(e,{index:t,replace:a}){for(let c=0;c<e.rules.length;c+=1)for(let o=0;o<e.rules[c].length;o+=1)e.rules[c][o]=e.rules[c][o]===t?a:e.rules[c][o]}}}},plugins:[]});window.$=G,W(U).component("Fa",v).use(Ye).use(Ue).mount("#app");
