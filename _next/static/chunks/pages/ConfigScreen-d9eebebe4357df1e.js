(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[743],{3053:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ConfigScreen",function(){return n(1648)}])},1648:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var s=n(5893),l=n(7294),r=n(1290),d=n(3398),i=n.n(d);let c=()=>{let[e,t]=(0,l.useState)(),[n,d]=(0,l.useState)(),[c,h]=(0,l.useState)(),[x,a]=(0,l.useState)(),[j,p]=(0,l.useState)(),u=async()=>{let e=await r.x.config.$get();t(e.playerSpeed),d(e.playersize),h(e.makeEnemyFrequency),a(e.enemySpeed),p(e.playersize),console.log(e.playerSpeed)};return(0,l.useEffect)(()=>{u()},[]),(0,s.jsx)("div",{className:i().container,children:(0,s.jsxs)("div",{className:i().table,children:[(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"項目"}),(0,s.jsx)("th",{children:"現在の設定"}),(0,s.jsx)("th",{children:"入力欄"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"基本playerspeed"}),(0,s.jsxs)("td",{children:[e,"/0.1秒"]}),(0,s.jsx)("td",{children:(0,s.jsx)("input",{type:"text",name:"PlayerSpeed",placeholder:"入力してください"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"基本playerサイズ"}),(0,s.jsxs)("td",{children:["h:",null==n?void 0:n.h," w:",null==n?void 0:n.w]}),(0,s.jsxs)("td",{children:[(0,s.jsx)("input",{type:"text",name:"PlayerSize_h",placeholder:"高さを入力してください"}),(0,s.jsx)("input",{type:"text",name:"PlayerSize_w",placeholder:"幅を入力してください"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"敵の出現頻度"}),(0,s.jsxs)("td",{children:["1/",c,"秒"]}),(0,s.jsx)("td",{children:(0,s.jsx)("input",{type:"text",name:"Enemy",placeholder:"入力してください"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"基本敵speed"}),(0,s.jsxs)("td",{children:[x,"/0.1秒"]}),(0,s.jsx)("td",{children:(0,s.jsx)("input",{type:"text",name:"EnemySpeed",placeholder:"入力してください"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"基本敵サイズ"}),(0,s.jsxs)("td",{children:["h:",null==j?void 0:j.h,",w:",null==j?void 0:j.w]}),(0,s.jsxs)("td",{children:[(0,s.jsx)("input",{type:"text",name:"EnemySize_h",placeholder:"高さを入力してください"}),(0,s.jsx)("input",{type:"text",name:"EnemySize_w",placeholder:"幅を入力してください"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"画面数"}),(0,s.jsx)("td",{children:"15"}),(0,s.jsx)("td",{children:(0,s.jsx)("input",{type:"text",name:"Screen",placeholder:"入力してください"})})]})]}),(0,s.jsx)("tfoot",{})]}),(0,s.jsx)("button",{children:"更新"})]})})},h=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(c,{})});var x=h},3398:function(e){e.exports={container:"Config_container__xYiCa",table:"Config_table__W_LhF"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=3053)}),_N_E=e.O()}]);