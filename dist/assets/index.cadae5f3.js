import{w as t,a as e,o as n,c as i,F as a,r as s,b as o,d as l,T as r,e as u,f as c,v as d,t as m,g as h,h as p,i as g,p as v,j as f,l as b,k as q,m as T,n as k,q as C,s as y,u as w,x,y as $,z as I,A as j,B as E,C as A,D as M,E as P,G as B,H as L,I as V,J as _,K as N,L as W,M as D,N as R,O as S,P as X}from"./vendor.e25701ce.js";var z={name:"Background",data:()=>({triangles:[],intervalId:void 0}),computed:{quantity(){return this.$store.state.number},interval(){return this.$store.state.interval},moving(){return this.$store.state.moving},shuffle(){return this.$store.state.shuffle}},created(){this.setTriangles(this.quantity)},unmounted(){clearInterval(this.intervalId)},mounted(){this.moving&&setTimeout((()=>{this.updateMovement()}),1),t((()=>{this.setTriangles(this.quantity),this.shuffle&&setTimeout((()=>{this.shuffleTriangles()}),1)})),e((()=>this.moving),((t,e)=>{t!=e&&this.updateMovement()}))},methods:{setTriangles(t){const e=t-this.triangles.length;if(t<=0)this.triangles=[];else if(e>0)for(let i=0;i<e;i++){let t=O(10,70),e=O(0,t),i={width:0,height:0,border:"0 solid transparent",position:"fixed",zIndex:-100,borderRightColor:(n=.4,"hsla("+360*Math.random()+", 100%, 75%, "+n+")"),borderTopWidth:t-e+"vmin",borderBottomWidth:e+"vmin",borderRightWidth:t+"vmin",bottom:O(0,100)+"vh",right:O(0,100)+"vw",transform:"rotate("+O(0,360)+"deg)",transition:""};this.triangles.push(i),this.moving&&this.updateMovement()}else if(e<0)for(let i=0;i<Math.abs(e);i++)this.triangles.pop();var n},moveTriangles(t){if(t)this.triangles.forEach((t=>{t.transition="transform "+this.interval+"s",t.transform="translate3d("+O(0,100)+"vw,"+O(0,100)+"vh,0) rotate("+O(-180,180)+"deg)"}));else{let t=document.getElementById("background");this.triangles.forEach(((e,n)=>{e.transition="",t&&(e.transform=getComputedStyle(t.children[n]).transform)}))}},updateMovement(){this.moveTriangles(this.moving),this.intervalId=clearInterval(this.intervalId),this.moving&&(this.intervalId=setInterval((()=>this.moveTriangles(this.moving)),1e3*this.interval))},shuffleTriangles(){this.triangles.forEach((t=>{t.bottom=O(0,100)+"vh",t.right=O(0,100)+"vw",t.transform="rotate("+O(0,360)+"deg)"})),this.$store.state.shuffle=!1}}};function O(t,e){return Math.floor(Math.random()*(e-t))+t}const F={id:"background"};z.render=function(t,e,o,l,r,u){return n(),i("div",F,[(n(!0),i(a,null,s(r.triangles,((t,e)=>(n(),i("div",{key:e,style:t},null,4)))),128))])};var G={name:"Background Settings",data:()=>({opened:!1}),computed:{noTriangles(){return this.$store.state.number<=0}},methods:{removeTriangle(){this.$store.state.number>0&&this.$store.state.number--},removeAllTriangles(){this.$store.state.number=0},toggleMoving(){this.$store.state.moving=!this.$store.state.moving}}};const H={class:"card"},J={class:"triangle-player-header"},K={class:"chip"},Q={class:"chip-head"},U=o("div",{class:"chip-content"},"Triangles",-1),Y={class:"triangle-player"};G.render=function(t,e,s,h,p,g){const v=u("font-awesome-icon");return n(),i(a,null,[o(r,{name:"settings"},{default:l((()=>[c(o("div",H,[o("div",J,[o("div",K,[o("div",Q,m(this.$store.state.number),1),U]),o("button",{onClick:e[1]||(e[1]=t=>p.opened=!1),class:"icon-btn btn-small"},[o(v,{icon:["fas","times"]})])]),o("div",Y,[o("button",{onClick:e[2]||(e[2]=(...t)=>g.removeAllTriangles&&g.removeAllTriangles(...t)),class:"icon-btn btn-small",disabled:g.noTriangles},[o(v,{icon:["fas","trash"]})],8,["disabled"]),o("button",{onClick:e[3]||(e[3]=(...t)=>g.removeTriangle&&g.removeTriangle(...t)),class:"icon-btn",disabled:g.noTriangles},[o(v,{icon:["fas","minus"]})],8,["disabled"]),this.$store.state.moving?(n(),i("button",{key:0,onClick:e[4]||(e[4]=t=>this.$store.state.moving=!1),class:"icon-btn btn-big"},[o(v,{icon:["fas","pause"]})])):(n(),i("button",{key:1,onClick:e[5]||(e[5]=t=>this.$store.state.moving=!0),class:"icon-btn btn-big"},[o(v,{icon:["fas","play"]})])),o("button",{onClick:e[6]||(e[6]=t=>this.$store.state.number++),class:"icon-btn"},[o(v,{icon:["fas","plus"]})]),o("button",{onClick:e[7]||(e[7]=t=>this.$store.state.shuffle=!0),class:"icon-btn btn-small",disabled:g.noTriangles},[o(v,{icon:["fas","sync"]})],8,["disabled"])])],512),[[d,p.opened]])])),_:1}),o(r,{name:"settings"},{default:l((()=>[c(o("div",null,[o("button",{onClick:e[8]||(e[8]=t=>p.opened=!0),class:"icon-btn"},[o(v,{icon:["fas","cog"]})])],512),[[d,!p.opened]])])),_:1})],64)};const Z={},tt={class:"navbar-items"},et={href:"#welcome"},nt=h(" Welcome"),it={href:"#about"},at=h(" About"),st={href:"#projects"},ot=h(" Projects"),lt={href:"#contact"},rt=h(" Contact");Z.render=function(t,e){const a=u("font-awesome-icon");return n(),i("nav",tt,[o("a",et,[o(a,{icon:["fas","home"]}),nt]),o("a",it,[o(a,{icon:["fas","user"]}),at]),o("a",st,[o(a,{icon:["fas","list"]}),ot]),o("a",lt,[o(a,{icon:["fas","address-card"]}),rt])])};const ut={},ct=o("br",null,null,-1),dt=h("About me"),mt=o("img",{src:"/assets/profile.14690f75.jpg",alt:"Profile Toan",class:"profile-img"},null,-1),ht=o("p",null,"My name is Toan",-1),pt=o("p",null," Occaecat id occaecat cillum voluptate tempor consequat tempor reprehenderit qui do sunt Lorem consectetur cillum. Veniam sint cupidatat sunt in cillum quis veniam proident elit excepteur aute non commodo excepteur. Non nisi in aute aute veniam consectetur sit minim. ",-1);ut.render=function(t,e){const s=u("font-awesome-icon");return n(),i(a,null,[o("h2",null,[o(s,{icon:["fas","user"]}),ct,dt]),mt,ht,pt],64)};const gt={},vt=o("br",null,null,-1),ft=h(" Projects I participated in development "),bt=o("ul",{class:"projects-list"},[o("li",null,[o("h3",null,"Résume"),o("div",{class:"project-content"},[o("a",{href:"https://resume.win.tue.nl/",target:"_blank"},[o("img",{src:"/assets/resume.b5a4fe20.png",alt:"19XCV.nl"})]),o("p",null," Veniam irure id sit qui fugiat deserunt sint cillum velit non. Nisi ipsum dolor dolor ut nostrud ullamco consequat eu voluptate esse. Ex qui do sit fugiat est proident consequat elit commodo id veniam fugiat. Voluptate non et mollit non qui proident ad ut nostrud. Ea dolore ut do do aute deserunt nisi adipisicing sit Lorem proident est occaecat occaecat. Aliquip sunt quis adipisicing labore qui adipisicing eu sint dolor. ")])]),o("li",null,[o("h3",null,"V.V. Tamar"),o("div",{class:"project-content"},[o("a",{href:"https://vvtamar.nl/",target:"_blank"},[o("img",{src:"/assets/vvtamar.615f7056.png",alt:"vvtamar.nl"})]),o("p",null," Deserunt adipisicing duis consectetur veniam duis nostrud do Lorem incididunt dolor labore et. Amet ipsum do mollit sit officia cupidatat. Non sunt velit ullamco ut irure cupidatat ea. Magna velit est est excepteur dolore nulla do ad veniam. In pariatur anim excepteur anim veniam irure ullamco. Enim aliquip cupidatat minim laboris nostrud commodo pariatur elit eu incididunt enim nostrud do dolor. Aliqua amet aliqua do reprehenderit nulla sunt duis reprehenderit. ")])]),o("li",null,[o("h3",null,"Phylophile"),o("div",{class:"project-content"},[o("a",{href:"https://chitoan.github.io/PhyloD3/",target:"_blank"},[o("img",{src:"/assets/phylophile.3304a3d8.png",alt:"chitoan.github.io/PhyloD3/"})]),o("p",null," Qui eu anim occaecat eiusmod qui et incididunt nisi consequat. Do ad aliquip non ullamco esse mollit exercitation laborum ea laborum in aliquip ea non. Reprehenderit qui occaecat non duis nulla et ipsum nulla cillum magna qui sint enim. Anim voluptate cillum incididunt ea incididunt enim in sint occaecat proident id do sit. Nulla fugiat tempor proident cupidatat excepteur aliqua ipsum sit magna voluptate. Ut nulla eiusmod dolore cillum eu sit Lorem. ")])]),o("li",null,[o("h3",null,"19.XCV"),o("div",{class:"project-content"},[o("a",{href:"https://19xcv.nl/",target:"_blank"},[o("img",{src:"/assets/19xcv.b47448c1.png",alt:"19XCV.nl"})]),o("p",null," Eiusmod deserunt velit nulla dolor cillum. Ea esse magna dolore do tempor ex est. Ea eu eiusmod nostrud culpa ea consequat veniam. Laborum in commodo adipisicing commodo quis fugiat laborum commodo. Est tempor ad in est ipsum. ")])])],-1);gt.render=function(t,e){const s=u("font-awesome-icon");return n(),i(a,null,[o("h2",null,[o(s,{icon:["fas","list"]}),vt,ft]),bt],64)};const qt={},Tt=o("br",null,null,-1),kt=h(" Contact"),Ct={class:"contact-info"},yt={href:"tel:0612463062"},wt={href:"https://wa.me/31612463062"},xt=h(" +31 6 12463062 "),$t={href:"mailto:chi.toan.luu@gmail.com"},It=h(" chi.toan.luu@gmail.com "),jt={href:"https://github.com/ChiToan"},Et=h(" ChiToan "),At={href:"https://www.linkedin.com/in/toan-luu"},Mt=h(" Chi-Toan Luu ");qt.render=function(t,e){const s=u("font-awesome-icon");return n(),i(a,null,[o("h2",null,[o(s,{icon:["fas","address-card"]}),Tt,kt]),o("ul",Ct,[o("li",null,[o("a",yt,[o(s,{icon:["fas","phone"]})]),o("a",wt,[o(s,{icon:["fab","whatsapp"]})]),xt]),o("li",null,[o("a",$t,[o(s,{icon:["fas","envelope"]})]),It]),o("li",null,[o("a",jt,[o(s,{icon:["fab","github"]})]),Et]),o("li",null,[o("a",At,[o(s,{icon:["fab","linkedin"],style:{padding:"0 1.5px"}})]),Mt])])],64)};var Pt=p({name:"App",components:{Background:z,BackgroundSettings:G,Navigation:Z,About:ut,Projects:gt,Contact:qt}});const Bt=g();v("data-v-3affe88e");const Lt={class:"container"},Vt={class:"card navbar"},_t={class:"settings"},Nt={class:"content"},Wt={id:"welcome",class:"card section"},Dt=o("br",null,null,-1),Rt=h("Welcome"),St=o("p",null,"This is my page WIP",-1),Xt=o("p",null," Et ipsum amet irure fugiat ex ex cillum. Reprehenderit fugiat consequat ex magna nostrud occaecat ad sit reprehenderit esse cupidatat sit. Labore non nulla aute sunt. Laborum laboris est pariatur quis dolore cupidatat. Consequat quis ipsum qui do laborum excepteur. Est deserunt cillum aliqua incididunt ullamco exercitation dolor pariatur in ut duis. ",-1),zt={id:"about",class:"card section"},Ot={id:"projects",class:"card section"},Ft={id:"contact",class:"card section"};f();const Gt=Bt(((t,e,s,l,r,c)=>{const d=u("Background"),m=u("Navigation"),h=u("BackgroundSettings"),p=u("font-awesome-icon"),g=u("About"),v=u("Projects"),f=u("Contact");return n(),i(a,null,[o(d),o("div",Lt,[o("div",Vt,[o(m)]),o("div",_t,[o(h)]),o("div",Nt,[o("section",Wt,[o("h2",null,[o(p,{icon:["fas","home"]}),Dt,Rt]),St,Xt]),o("section",zt,[o(g)]),o("section",Ot,[o(v)]),o("section",Ft,[o(f)])])])],64)}));Pt.render=Gt,Pt.__scopeId="data-v-3affe88e",b.add(q,T,k,C,y,w,x,$,I,j,E,A,M,P,B,L,V,_,N,W,D);const Ht=R({state:()=>({number:5,interval:15,moving:!0,shuffle:!1})}),Jt=S(Pt);Jt.use(Ht),Jt.component("font-awesome-icon",X),Jt.mount("#app");
