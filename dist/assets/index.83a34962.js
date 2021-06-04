import{p as t,a as e,w as n,b as i,o as s,c as a,F as o,r as l,d as r,e as u,T as c,f as d,t as m,g as h,l as p,h as g,i as f,j as v,k as b,m as q,n as T,q as k,s as y,u as w,v as x,x as C,y as $,z as I,A as E,B as j,C as M,D as A,E as L,G as V,H as P,I as _,J as B,K as W,L as D}from"./vendor.612bcf14.js";t("data-v-ffdff048"),e();var R={name:"Background",data:()=>({triangles:[],intervalId:void 0}),computed:{quantity(){return this.$store.state.number},interval(){return this.$store.state.interval},moving(){return this.$store.state.moving},shuffle(){return this.$store.state.shuffle}},created(){this.setTriangles(this.quantity)},unmounted(){clearInterval(this.intervalId)},mounted(){this.moving&&setTimeout((()=>{this.updateMovement()}),1),n((()=>{this.setTriangles(this.quantity),this.shuffle&&setTimeout((()=>{this.shuffleTriangles()}),1)})),i((()=>this.moving),((t,e)=>{t!=e&&this.updateMovement()}))},methods:{setTriangles(t){const e=t-this.triangles.length;if(t<=0)this.triangles=[];else if(e>0)for(let i=0;i<e;i++){let t=N(10,70),e=N(0,t),i={width:0,height:0,border:"0 solid transparent",position:"fixed",zIndex:-100,borderRightColor:(n=.4,"hsla("+360*Math.random()+", 100%, 75%, "+n+")"),borderTopWidth:t-e+"vmin",borderBottomWidth:e+"vmin",borderRightWidth:t+"vmin",bottom:N(0,100)+"vh",right:N(0,100)+"vw",transform:"rotate("+N(0,360)+"deg)",transition:""};this.triangles.push(i),this.moving&&this.updateMovement()}else if(e<0)for(let i=0;i<Math.abs(e);i++)this.triangles.pop();var n},moveTriangles(t){if(t)this.triangles.forEach((t=>{t.transition="transform "+this.interval+"s",t.transform="translate3d("+N(0,100)+"vw,"+N(0,100)+"vh,0) rotate("+N(-180,180)+"deg)"}));else{let t=document.getElementById("background");this.triangles.forEach(((e,n)=>{e.transition="",t&&(e.transform=getComputedStyle(t.children[n]).transform)}))}},updateMovement(){this.moveTriangles(this.moving),this.intervalId=clearInterval(this.intervalId),this.moving&&(this.intervalId=setInterval((()=>this.moveTriangles(this.moving)),1e3*this.interval))},shuffleTriangles(){this.triangles.forEach((t=>{t.bottom=N(0,100)+"vh",t.right=N(0,100)+"vw",t.transform="rotate("+N(0,360)+"deg)"})),this.$store.state.shuffle=!1}}};function N(t,e){return Math.floor(Math.random()*(e-t))+t}const X={id:"background"};R.render=function(t,e,n,i,r,u){return s(),a("div",X,[(s(!0),a(o,null,l(r.triangles,((t,e)=>(s(),a("div",{key:e,style:t},null,4)))),128))])};var z={name:"Background Settings",data:()=>({opened:!1}),computed:{noTriangles(){return this.$store.state.number<=0}},methods:{removeTriangle(){this.$store.state.number>0&&this.$store.state.number--},removeAllTriangles(){this.$store.state.number=0},toggleMoving(){this.$store.state.moving=!this.$store.state.moving}}};const S={key:0,class:"card"},F={class:"triangle-player-header"},G={class:"chip"},H={class:"chip-head"},J=d("div",{class:"chip-content"},[d("div",{class:"triangle-up"})],-1),K=d("h5",null," Background settings ",-1),O={class:"triangle-player"},Q={key:1,class:"settings-icon"};z.render=function(t,e,n,i,o,l){const h=r("font-awesome-icon");return s(),a(c,{name:"settings",mode:"out-in"},{default:u((()=>[o.opened?(s(),a("div",S,[d("div",F,[d("div",G,[d("div",H,m(this.$store.state.number),1),J]),K,d("button",{onClick:e[1]||(e[1]=t=>o.opened=!1),class:"icon-btn btn-small"},[d(h,{icon:["fas","compress-alt"]})])]),d("div",O,[d("button",{onClick:e[2]||(e[2]=(...t)=>l.removeAllTriangles&&l.removeAllTriangles(...t)),class:"icon-btn btn-small",disabled:l.noTriangles},[d(h,{icon:["fas","trash"]})],8,["disabled"]),d("button",{onClick:e[3]||(e[3]=(...t)=>l.removeTriangle&&l.removeTriangle(...t)),class:"icon-btn",disabled:l.noTriangles},[d(h,{icon:["fas","minus"]})],8,["disabled"]),this.$store.state.moving?(s(),a("button",{key:0,onClick:e[4]||(e[4]=t=>this.$store.state.moving=!1),class:"icon-btn btn-big"},[d(h,{icon:["fas","pause"]})])):(s(),a("button",{key:1,onClick:e[5]||(e[5]=t=>this.$store.state.moving=!0),class:"icon-btn btn-big"},[d(h,{icon:["fas","play"]})])),d("button",{onClick:e[6]||(e[6]=t=>this.$store.state.number++),class:"icon-btn"},[d(h,{icon:["fas","plus"]})]),d("button",{onClick:e[7]||(e[7]=t=>this.$store.state.shuffle=!0),class:"icon-btn btn-small",disabled:l.noTriangles},[d(h,{icon:["fas","sync"]})],8,["disabled"])])])):(s(),a("div",Q,[d("button",{onClick:e[8]||(e[8]=t=>o.opened=!0),class:"icon-btn btn-small"},[d(h,{icon:["fas","sliders-h"]})])]))])),_:1})};const U={},Y={class:"navbar-items card"},Z={href:"#"},tt=h(" Welcome"),et={href:"#about"},nt=h(" About"),it={href:"#projects"},st=h(" Projects"),at={href:"#contact"},ot=h(" Contact");U.render=function(t,e){const n=r("font-awesome-icon");return s(),a("nav",Y,[d("a",Z,[d(n,{icon:["fas","home"]}),tt]),d("a",et,[d(n,{icon:["fas","user"]}),nt]),d("a",it,[d(n,{icon:["fas","list"]}),st]),d("a",at,[d(n,{icon:["fas","address-card"]}),ot])])};const lt={},rt=d("br",null,null,-1),ut=h("About me"),ct=d("img",{src:"/assets/profile.14690f75.jpg",alt:"Profile Toan",class:"profile-img"},null,-1),dt=d("p",null,"My name is Toan",-1),mt=d("p",null," Occaecat id occaecat cillum voluptate tempor consequat tempor reprehenderit qui do sunt Lorem consectetur cillum. Veniam sint cupidatat sunt in cillum quis veniam proident elit excepteur aute non commodo excepteur. Non nisi in aute aute veniam consectetur sit minim. ",-1);lt.render=function(t,e){const n=r("font-awesome-icon");return s(),a(o,null,[d("h2",null,[d(n,{icon:["fas","user"]}),rt,ut]),ct,dt,mt],64)};const ht={},pt=d("br",null,null,-1),gt=h(" Projects I've worked on "),ft=d("ul",{class:"projects-list"},[d("li",null,[d("h3",null,"Résume"),d("div",{class:"project-content"},[d("a",{href:"https://resume.win.tue.nl/",target:"_blank"},[d("img",{src:"/assets/resume.b5a4fe20.png",alt:"19XCV.nl"})]),d("p",null," Veniam irure id sit qui fugiat deserunt sint cillum velit non. Nisi ipsum dolor dolor ut nostrud ullamco consequat eu voluptate esse. Ex qui do sit fugiat est proident consequat elit commodo id veniam fugiat. Voluptate non et mollit non qui proident ad ut nostrud. Ea dolore ut do do aute deserunt nisi adipisicing sit Lorem proident est occaecat occaecat. Aliquip sunt quis adipisicing labore qui adipisicing eu sint dolor. ")])]),d("li",null,[d("h3",null,"V.V. Tamar"),d("div",{class:"project-content"},[d("a",{href:"https://vvtamar.nl/",target:"_blank"},[d("img",{src:"/assets/vvtamar.615f7056.png",alt:"vvtamar.nl"})]),d("p",null," Deserunt adipisicing duis consectetur veniam duis nostrud do Lorem incididunt dolor labore et. Amet ipsum do mollit sit officia cupidatat. Non sunt velit ullamco ut irure cupidatat ea. Magna velit est est excepteur dolore nulla do ad veniam. In pariatur anim excepteur anim veniam irure ullamco. Enim aliquip cupidatat minim laboris nostrud commodo pariatur elit eu incididunt enim nostrud do dolor. Aliqua amet aliqua do reprehenderit nulla sunt duis reprehenderit. ")])]),d("li",null,[d("h3",null,"Phylophile"),d("div",{class:"project-content"},[d("a",{href:"https://chitoan.github.io/PhyloD3/",target:"_blank"},[d("img",{src:"/assets/phylophile.3304a3d8.png",alt:"chitoan.github.io/PhyloD3/"})]),d("p",null," Qui eu anim occaecat eiusmod qui et incididunt nisi consequat. Do ad aliquip non ullamco esse mollit exercitation laborum ea laborum in aliquip ea non. Reprehenderit qui occaecat non duis nulla et ipsum nulla cillum magna qui sint enim. Anim voluptate cillum incididunt ea incididunt enim in sint occaecat proident id do sit. Nulla fugiat tempor proident cupidatat excepteur aliqua ipsum sit magna voluptate. Ut nulla eiusmod dolore cillum eu sit Lorem. ")])]),d("li",null,[d("h3",null,"19.XCV"),d("div",{class:"project-content"},[d("a",{href:"https://19xcv.nl/",target:"_blank"},[d("img",{src:"/assets/19xcv.b47448c1.png",alt:"19XCV.nl"})]),d("p",null," Eiusmod deserunt velit nulla dolor cillum. Ea esse magna dolore do tempor ex est. Ea eu eiusmod nostrud culpa ea consequat veniam. Laborum in commodo adipisicing commodo quis fugiat laborum commodo. Est tempor ad in est ipsum. ")])])],-1);ht.render=function(t,e){const n=r("font-awesome-icon");return s(),a(o,null,[d("h2",null,[d(n,{icon:["fas","list"]}),pt,gt]),ft],64)};const vt={},bt=d("br",null,null,-1),qt=h(" Contact"),Tt={class:"contact-info"},kt={href:"tel:0612463062"},yt={href:"https://wa.me/31612463062"},wt=d("br",null,null,-1),xt=h(" +31612463062 "),Ct={href:"mailto:chi.toan.luu@gmail.com"},$t=d("br",null,null,-1),It=h(" chi.toan.luu@gmail.com "),Et={href:"https://github.com/ChiToan"},jt=d("br",null,null,-1),Mt=h("ChiToan "),At={href:"https://www.linkedin.com/in/toan-luu"},Lt=d("br",null,null,-1),Vt=h("Chi-Toan Luu ");vt.render=function(t,e){const n=r("font-awesome-icon");return s(),a(o,null,[d("h2",null,[d(n,{icon:["fas","address-card"]}),bt,qt]),d("ul",Tt,[d("li",null,[d("a",kt,[d(n,{icon:["fas","phone"]})]),d("a",yt,[d(n,{icon:["fab","whatsapp"]})]),wt,xt]),d("li",null,[d("a",Ct,[d(n,{icon:["fas","envelope"]})]),$t,It]),d("li",null,[d("a",Et,[d(n,{icon:["fab","github"]})]),jt,Mt]),d("li",null,[d("a",At,[d(n,{icon:["fab","linkedin"],style:{padding:"0 1.5px"}})]),Lt,Vt])])],64)};t("data-v-37d07b45");const Pt={class:"container"},_t={class:"navbar"},Bt={class:"content"},Wt={id:"welcome",class:"card section"},Dt=d("br",null,null,-1),Rt=h("Welcome"),Nt=d("p",null,"This is my page (WIP!)",-1),Xt=d("p",null," Et ipsum amet irure fugiat ex ex cillum. Reprehenderit fugiat consequat ex magna nostrud occaecat ad sit reprehenderit esse cupidatat sit. Labore non nulla aute sunt. Laborum laboris est pariatur quis dolore cupidatat. Consequat quis ipsum qui do laborum excepteur. Est deserunt cillum aliqua incididunt ullamco exercitation dolor pariatur in ut duis. ",-1),zt={id:"about",class:"card section"},St={id:"projects",class:"card section"},Ft={id:"contact",class:"card section"};e();const Gt={expose:[],setup:t=>(t,e)=>{const n=r("font-awesome-icon");return s(),a(o,null,[d(R),d("div",Pt,[d("div",_t,[d(U),d(z)]),d("div",Bt,[d("section",Wt,[d("h2",null,[d(n,{icon:["fas","home"]}),Dt,Rt]),Nt,Xt]),d("section",zt,[d(lt)]),d("section",St,[d(ht)]),d("section",Ft,[d(vt)])])])],64)},__scopeId:"data-v-37d07b45"};p.add(g,f,v,b,q,T,k,y,w,x,C,$,I,E,j,M,A,L,V,P,_);const Ht=B({state:()=>({number:5,interval:15,moving:!0,shuffle:!1})}),Jt=W(Gt);Jt.use(Ht),Jt.component("font-awesome-icon",D),Jt.mount("#app");
