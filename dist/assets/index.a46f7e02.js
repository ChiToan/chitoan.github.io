import{p as t,a as e,w as n,b as i,o as a,c as s,F as o,r as l,d as r,e as u,f as c,T as d,g as m,v as h,t as p,h as g,l as f,i as v,j as b,k as q,m as T,n as k,q as w,s as y,u as x,x as C,y as $,z as I,A as E,B as j,C as M,D as A,E as L,G as V,H as _,I as P,J as W,K as B,L as D,M as N,N as R}from"./vendor.3b7651bc.js";t("data-v-ffdff048"),e();var X={name:"Background",data:()=>({triangles:[],intervalId:void 0}),computed:{quantity(){return this.$store.state.number},interval(){return this.$store.state.interval},moving(){return this.$store.state.moving},shuffle(){return this.$store.state.shuffle}},created(){this.setTriangles(this.quantity)},unmounted(){clearInterval(this.intervalId)},mounted(){this.moving&&setTimeout((()=>{this.updateMovement()}),1),n((()=>{this.setTriangles(this.quantity),this.shuffle&&setTimeout((()=>{this.shuffleTriangles()}),1)})),i((()=>this.moving),((t,e)=>{t!=e&&this.updateMovement()}))},methods:{setTriangles(t){const e=t-this.triangles.length;if(t<=0)this.triangles=[];else if(e>0)for(let i=0;i<e;i++){let t=z(10,70),e=z(0,t),i={width:0,height:0,border:"0 solid transparent",position:"fixed",zIndex:-100,borderRightColor:(n=.4,"hsla("+360*Math.random()+", 100%, 75%, "+n+")"),borderTopWidth:t-e+"vmin",borderBottomWidth:e+"vmin",borderRightWidth:t+"vmin",bottom:z(0,100)+"vh",right:z(0,100)+"vw",transform:"rotate("+z(0,360)+"deg)",transition:""};this.triangles.push(i),this.moving&&this.updateMovement()}else if(e<0)for(let i=0;i<Math.abs(e);i++)this.triangles.pop();var n},moveTriangles(t){if(t)this.triangles.forEach((t=>{t.transition="transform "+this.interval+"s",t.transform="translate3d("+z(0,100)+"vw,"+z(0,100)+"vh,0) rotate("+z(-180,180)+"deg)"}));else{let t=document.getElementById("background");this.triangles.forEach(((e,n)=>{e.transition="",t&&(e.transform=getComputedStyle(t.children[n]).transform)}))}},updateMovement(){this.moveTriangles(this.moving),this.intervalId=clearInterval(this.intervalId),this.moving&&(this.intervalId=setInterval((()=>this.moveTriangles(this.moving)),1e3*this.interval))},shuffleTriangles(){this.triangles.forEach((t=>{t.bottom=z(0,100)+"vh",t.right=z(0,100)+"vw",t.transform="rotate("+z(0,360)+"deg)"})),this.$store.state.shuffle=!1}}};function z(t,e){return Math.floor(Math.random()*(e-t))+t}const S={id:"background"};X.render=function(t,e,n,i,r,u){return a(),s("div",S,[(a(!0),s(o,null,l(r.triangles,((t,e)=>(a(),s("div",{key:e,style:t},null,4)))),128))])};var F={name:"Background Settings",data:()=>({opened:!1}),computed:{noTriangles(){return this.$store.state.number<=0}},methods:{removeTriangle(){this.$store.state.number>0&&this.$store.state.number--},removeAllTriangles(){this.$store.state.number=0},toggleMoving(){this.$store.state.moving=!this.$store.state.moving}}};const G={class:"card"},H={class:"triangle-player-header"},J={class:"chip"},K={class:"chip-head"},O=u("div",{class:"chip-content"},"Triangles",-1),Q={class:"triangle-player"};F.render=function(t,e,n,i,l,g){const f=r("font-awesome-icon");return a(),s(o,null,[u(d,{name:"settings"},{default:c((()=>[m(u("div",G,[u("div",H,[u("div",J,[u("div",K,p(this.$store.state.number),1),O]),u("button",{onClick:e[1]||(e[1]=t=>l.opened=!1),class:"icon-btn btn-small"},[u(f,{icon:["fas","times"]})])]),u("div",Q,[u("button",{onClick:e[2]||(e[2]=(...t)=>g.removeAllTriangles&&g.removeAllTriangles(...t)),class:"icon-btn btn-small",disabled:g.noTriangles},[u(f,{icon:["fas","trash"]})],8,["disabled"]),u("button",{onClick:e[3]||(e[3]=(...t)=>g.removeTriangle&&g.removeTriangle(...t)),class:"icon-btn",disabled:g.noTriangles},[u(f,{icon:["fas","minus"]})],8,["disabled"]),this.$store.state.moving?(a(),s("button",{key:0,onClick:e[4]||(e[4]=t=>this.$store.state.moving=!1),class:"icon-btn btn-big"},[u(f,{icon:["fas","pause"]})])):(a(),s("button",{key:1,onClick:e[5]||(e[5]=t=>this.$store.state.moving=!0),class:"icon-btn btn-big"},[u(f,{icon:["fas","play"]})])),u("button",{onClick:e[6]||(e[6]=t=>this.$store.state.number++),class:"icon-btn"},[u(f,{icon:["fas","plus"]})]),u("button",{onClick:e[7]||(e[7]=t=>this.$store.state.shuffle=!0),class:"icon-btn btn-small",disabled:g.noTriangles},[u(f,{icon:["fas","sync"]})],8,["disabled"])])],512),[[h,l.opened]])])),_:1}),u(d,{name:"settings"},{default:c((()=>[m(u("div",null,[u("button",{onClick:e[8]||(e[8]=t=>l.opened=!0),class:"icon-btn"},[u(f,{icon:["fas","cog"]})])],512),[[h,!l.opened]])])),_:1})],64)};const U={},Y={class:"navbar-items"},Z={href:"#welcome"},tt=g(" Welcome"),et={href:"#about"},nt=g(" About"),it={href:"#projects"},at=g(" Projects"),st={href:"#contact"},ot=g(" Contact");U.render=function(t,e){const n=r("font-awesome-icon");return a(),s("nav",Y,[u("a",Z,[u(n,{icon:["fas","home"]}),tt]),u("a",et,[u(n,{icon:["fas","user"]}),nt]),u("a",it,[u(n,{icon:["fas","list"]}),at]),u("a",st,[u(n,{icon:["fas","address-card"]}),ot])])};const lt={},rt=u("br",null,null,-1),ut=g("About me"),ct=u("img",{src:"/assets/profile.14690f75.jpg",alt:"Profile Toan",class:"profile-img"},null,-1),dt=u("p",null,"My name is Toan",-1),mt=u("p",null," Occaecat id occaecat cillum voluptate tempor consequat tempor reprehenderit qui do sunt Lorem consectetur cillum. Veniam sint cupidatat sunt in cillum quis veniam proident elit excepteur aute non commodo excepteur. Non nisi in aute aute veniam consectetur sit minim. ",-1);lt.render=function(t,e){const n=r("font-awesome-icon");return a(),s(o,null,[u("h2",null,[u(n,{icon:["fas","user"]}),rt,ut]),ct,dt,mt],64)};const ht={},pt=u("br",null,null,-1),gt=g(" Projects I've worked on "),ft=u("ul",{class:"projects-list"},[u("li",null,[u("h3",null,"Résume"),u("div",{class:"project-content"},[u("a",{href:"https://resume.win.tue.nl/",target:"_blank"},[u("img",{src:"/assets/resume.b5a4fe20.png",alt:"19XCV.nl"})]),u("p",null," Veniam irure id sit qui fugiat deserunt sint cillum velit non. Nisi ipsum dolor dolor ut nostrud ullamco consequat eu voluptate esse. Ex qui do sit fugiat est proident consequat elit commodo id veniam fugiat. Voluptate non et mollit non qui proident ad ut nostrud. Ea dolore ut do do aute deserunt nisi adipisicing sit Lorem proident est occaecat occaecat. Aliquip sunt quis adipisicing labore qui adipisicing eu sint dolor. ")])]),u("li",null,[u("h3",null,"V.V. Tamar"),u("div",{class:"project-content"},[u("a",{href:"https://vvtamar.nl/",target:"_blank"},[u("img",{src:"/assets/vvtamar.615f7056.png",alt:"vvtamar.nl"})]),u("p",null," Deserunt adipisicing duis consectetur veniam duis nostrud do Lorem incididunt dolor labore et. Amet ipsum do mollit sit officia cupidatat. Non sunt velit ullamco ut irure cupidatat ea. Magna velit est est excepteur dolore nulla do ad veniam. In pariatur anim excepteur anim veniam irure ullamco. Enim aliquip cupidatat minim laboris nostrud commodo pariatur elit eu incididunt enim nostrud do dolor. Aliqua amet aliqua do reprehenderit nulla sunt duis reprehenderit. ")])]),u("li",null,[u("h3",null,"Phylophile"),u("div",{class:"project-content"},[u("a",{href:"https://chitoan.github.io/PhyloD3/",target:"_blank"},[u("img",{src:"/assets/phylophile.3304a3d8.png",alt:"chitoan.github.io/PhyloD3/"})]),u("p",null," Qui eu anim occaecat eiusmod qui et incididunt nisi consequat. Do ad aliquip non ullamco esse mollit exercitation laborum ea laborum in aliquip ea non. Reprehenderit qui occaecat non duis nulla et ipsum nulla cillum magna qui sint enim. Anim voluptate cillum incididunt ea incididunt enim in sint occaecat proident id do sit. Nulla fugiat tempor proident cupidatat excepteur aliqua ipsum sit magna voluptate. Ut nulla eiusmod dolore cillum eu sit Lorem. ")])]),u("li",null,[u("h3",null,"19.XCV"),u("div",{class:"project-content"},[u("a",{href:"https://19xcv.nl/",target:"_blank"},[u("img",{src:"/assets/19xcv.b47448c1.png",alt:"19XCV.nl"})]),u("p",null," Eiusmod deserunt velit nulla dolor cillum. Ea esse magna dolore do tempor ex est. Ea eu eiusmod nostrud culpa ea consequat veniam. Laborum in commodo adipisicing commodo quis fugiat laborum commodo. Est tempor ad in est ipsum. ")])])],-1);ht.render=function(t,e){const n=r("font-awesome-icon");return a(),s(o,null,[u("h2",null,[u(n,{icon:["fas","list"]}),pt,gt]),ft],64)};const vt={},bt=u("br",null,null,-1),qt=g(" Contact"),Tt={class:"contact-info"},kt={href:"tel:0612463062"},wt={href:"https://wa.me/31612463062"},yt=u("br",null,null,-1),xt=g(" +31612463062 "),Ct={href:"mailto:chi.toan.luu@gmail.com"},$t=u("br",null,null,-1),It=g(" chi.toan.luu@gmail.com "),Et={href:"https://github.com/ChiToan"},jt=u("br",null,null,-1),Mt=g("ChiToan "),At={href:"https://www.linkedin.com/in/toan-luu"},Lt=u("br",null,null,-1),Vt=g("Chi-Toan Luu ");vt.render=function(t,e){const n=r("font-awesome-icon");return a(),s(o,null,[u("h2",null,[u(n,{icon:["fas","address-card"]}),bt,qt]),u("ul",Tt,[u("li",null,[u("a",kt,[u(n,{icon:["fas","phone"]})]),u("a",wt,[u(n,{icon:["fab","whatsapp"]})]),yt,xt]),u("li",null,[u("a",Ct,[u(n,{icon:["fas","envelope"]})]),$t,It]),u("li",null,[u("a",Et,[u(n,{icon:["fab","github"]})]),jt,Mt]),u("li",null,[u("a",At,[u(n,{icon:["fab","linkedin"],style:{padding:"0 1.5px"}})]),Lt,Vt])])],64)};t("data-v-3784d22c");const _t={class:"container"},Pt={class:"card navbar"},Wt={class:"settings"},Bt={class:"content"},Dt={id:"welcome",class:"card section"},Nt=u("br",null,null,-1),Rt=g("Welcome"),Xt=u("p",null,"This is my page WIP",-1),zt=u("p",null," Et ipsum amet irure fugiat ex ex cillum. Reprehenderit fugiat consequat ex magna nostrud occaecat ad sit reprehenderit esse cupidatat sit. Labore non nulla aute sunt. Laborum laboris est pariatur quis dolore cupidatat. Consequat quis ipsum qui do laborum excepteur. Est deserunt cillum aliqua incididunt ullamco exercitation dolor pariatur in ut duis. ",-1),St={id:"about",class:"card section"},Ft={id:"projects",class:"card section"},Gt={id:"contact",class:"card section"};e();const Ht={expose:[],setup:t=>(t,e)=>{const n=r("font-awesome-icon");return a(),s(o,null,[u(X),u("div",_t,[u("div",Pt,[u(U)]),u("div",Wt,[u(F)]),u("div",Bt,[u("section",Dt,[u("h2",null,[u(n,{icon:["fas","home"]}),Nt,Rt]),Xt,zt]),u("section",St,[u(lt)]),u("section",Ft,[u(ht)]),u("section",Gt,[u(vt)])])])],64)},__scopeId:"data-v-3784d22c"};f.add(v,b,q,T,k,w,y,x,C,$,I,E,j,M,A,L,V,_,P,W,B);const Jt=D({state:()=>({number:5,interval:15,moving:!0,shuffle:!1})}),Kt=N(Ht);Kt.use(Jt),Kt.component("font-awesome-icon",R),Kt.mount("#app");
