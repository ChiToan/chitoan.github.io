import{w as t,a as e,o as s,c as n,F as i,r as a,b as o,d as l,T as r,e as u,t as c,f as d,l as m,g as h,h as g,i as p,j as v,k as f,m as b,n as T,p as k,q,s as y,u as $,v as C,x as w,y as x,z as I,A as j,B as E,C as A,D as M,E as _,G as L,H as B,I as P,J as V,K as W,L as D}from"./vendor.30620967.js";var N={name:"Background",data:()=>({triangles:[],intervalId:void 0}),computed:{quantity(){return this.$store.state.number},interval(){return this.$store.state.interval},moving(){return this.$store.state.moving},shuffle(){return this.$store.state.shuffle}},created(){this.setTriangles(this.quantity)},unmounted(){clearInterval(this.intervalId)},mounted(){this.moving&&setTimeout((()=>{this.updateMovement()}),1),t((()=>{this.setTriangles(this.quantity),this.shuffle&&setTimeout((()=>{this.shuffleTriangles()}),1)})),e((()=>this.moving),((t,e)=>{t!=e&&this.updateMovement()}))},methods:{setTriangles(t){const e=t-this.triangles.length;if(t<=0)this.triangles=[];else if(e>0)for(let n=0;n<e;n++){let t=R(10,70),e=R(0,t),n={width:0,height:0,border:"0 solid transparent",position:"fixed",zIndex:0,borderRightColor:(s=.4,"hsla("+360*Math.random()+", 100%, 75%, "+s+")"),borderTopWidth:t-e+"vmin",borderBottomWidth:e+"vmin",borderRightWidth:t+"vmin",bottom:R(0,100)+"vh",right:R(0,100)+"vw",transform:"rotate("+R(0,360)+"deg)",transition:""};this.triangles.push(n),this.moving&&this.updateMovement()}else if(e<0)for(let n=0;n<Math.abs(e);n++)this.triangles.pop();var s},moveTriangles(t){if(t)this.triangles.forEach((t=>{t.transition="transform "+this.interval+"s",t.transform="translate3d("+R(0,100)+"vw,"+R(0,100)+"vh,0) rotate("+R(-180,180)+"deg)"}));else{let t=document.getElementById("background");this.triangles.forEach(((e,s)=>{e.transition="",t&&(e.transform=getComputedStyle(t.children[s]).transform)}))}},updateMovement(){this.moveTriangles(this.moving),this.intervalId=clearInterval(this.intervalId),this.moving&&(this.intervalId=setInterval((()=>this.moveTriangles(this.moving)),1e3*this.interval))},shuffleTriangles(){this.triangles.forEach((t=>{t.bottom=R(0,100)+"vh",t.right=R(0,100)+"vw",t.transform="rotate("+R(0,360)+"deg)"})),this.$store.state.shuffle=!1}}};function R(t,e){return Math.floor(Math.random()*(e-t))+t}const S={id:"background"};N.render=function(t,e,o,l,r,u){return s(),n("div",S,[(s(!0),n(i,null,a(r.triangles,((t,e)=>(s(),n("div",{key:e,style:t},null,4)))),128))])};var X={name:"Background Settings",data:()=>({opened:!1}),computed:{noTriangles(){return this.$store.state.number<=0}},methods:{removeTriangle(){this.$store.state.number>0&&this.$store.state.number--},removeAllTriangles(){this.$store.state.number=0},toggleMoving(){this.$store.state.moving=!this.$store.state.moving},toggleTheme(){this.$store.state.systemTheme=!this.$store.state.systemTheme}}};const z={key:0,class:"card"},F={class:"settings-header"},G=u("h3",null,"Settings",-1),H={class:"settings-list"},J={class:"setting"},K=d(" Wallpaper "),O={class:"chip"},Q={class:"chip-head"},U=u("div",{class:"chip-content"},[u("div",{class:"triangle-up"})],-1),Y={class:"triangle-player"},Z={class:"setting"},tt=d(" Invert Theme "),et={key:1,class:"settings-icon"};X.render=function(t,e,i,a,d,m){const h=o("font-awesome-icon");return s(),n(r,{name:"settings",mode:"out-in"},{default:l((()=>[d.opened?(s(),n("div",z,[u("div",F,[G,u("button",{onClick:e[1]||(e[1]=t=>d.opened=!1),class:"icon-btn btn-small"},[u(h,{icon:["fas","compress-alt"]})])]),u("ul",H,[u("li",null,[u("div",J,[K,u("div",O,[u("div",Q,c(this.$store.state.number),1),U])]),u("div",Y,[u("button",{onClick:e[2]||(e[2]=(...t)=>m.removeAllTriangles&&m.removeAllTriangles(...t)),class:"icon-btn btn-small",disabled:m.noTriangles},[u(h,{icon:["fas","trash"]})],8,["disabled"]),u("button",{onClick:e[3]||(e[3]=(...t)=>m.removeTriangle&&m.removeTriangle(...t)),class:"icon-btn",disabled:m.noTriangles},[u(h,{icon:["fas","minus"]})],8,["disabled"]),this.$store.state.moving?(s(),n("button",{key:0,onClick:e[4]||(e[4]=t=>this.$store.state.moving=!1),class:"icon-btn btn-big"},[u(h,{icon:["fas","pause"]})])):(s(),n("button",{key:1,onClick:e[5]||(e[5]=t=>this.$store.state.moving=!0),class:"icon-btn btn-big"},[u(h,{icon:["fas","play"]})])),u("button",{onClick:e[6]||(e[6]=t=>this.$store.state.number++),class:"icon-btn"},[u(h,{icon:["fas","plus"]})]),u("button",{onClick:e[7]||(e[7]=t=>this.$store.state.shuffle=!0),class:"icon-btn btn-small",disabled:m.noTriangles},[u(h,{icon:["fas","sync"]})],8,["disabled"])])]),u("li",Z,[tt,u("button",{onClick:e[8]||(e[8]=(...t)=>m.toggleTheme&&m.toggleTheme(...t)),class:["icon-btn btn-small",{toggled:this.$store.state.systemTheme}]},[u(h,{icon:["fas","adjust"]})],2)])])])):(s(),n("div",et,[u("button",{onClick:e[9]||(e[9]=t=>d.opened=!0),class:"icon-btn btn-small"},[u(h,{icon:["fas","cog"]})])]))])),_:1})};const st={},nt={class:"navbar-items card"},it={href:"#"},at=d(" Welcome"),ot={href:"#about"},lt=d(" About"),rt={href:"#projects"},ut=d(" Projects"),ct={href:"#contact"},dt=d(" Contact");st.render=function(t,e){const i=o("font-awesome-icon");return s(),n("nav",nt,[u("a",it,[u(i,{icon:["fas","home"]}),at]),u("a",ot,[u(i,{icon:["fas","user"]}),lt]),u("a",rt,[u(i,{icon:["fas","list"]}),ut]),u("a",ct,[u(i,{icon:["fas","address-card"]}),dt])])};const mt={},ht=u("br",null,null,-1),gt=d("About me"),pt=u("img",{src:"/assets/profile.14690f75.jpg",alt:"Profile Toan",class:"profile-img"},null,-1),vt=u("p",null,"My name is Toan",-1),ft=u("p",null," Occaecat id occaecat cillum voluptate tempor consequat tempor reprehenderit qui do sunt Lorem consectetur cillum. Veniam sint cupidatat sunt in cillum quis veniam proident elit excepteur aute non commodo excepteur. Non nisi in aute aute veniam consectetur sit minim. ",-1);mt.render=function(t,e){const a=o("font-awesome-icon");return s(),n(i,null,[u("h2",null,[u(a,{icon:["fas","user"]}),ht,gt]),pt,vt,ft],64)};const bt={},Tt=u("br",null,null,-1),kt=d(" Projects I've worked on "),qt=u("ul",{class:"projects-list"},[u("li",null,[u("h3",null,"Résume"),u("div",{class:"project-content"},[u("a",{href:"https://resume.win.tue.nl/",target:"_blank"},[u("img",{src:"/assets/resume.b5a4fe20.png",alt:"19XCV.nl"})]),u("p",null," Veniam irure id sit qui fugiat deserunt sint cillum velit non. Nisi ipsum dolor dolor ut nostrud ullamco consequat eu voluptate esse. Ex qui do sit fugiat est proident consequat elit commodo id veniam fugiat. Voluptate non et mollit non qui proident ad ut nostrud. Ea dolore ut do do aute deserunt nisi adipisicing sit Lorem proident est occaecat occaecat. Aliquip sunt quis adipisicing labore qui adipisicing eu sint dolor. ")])]),u("li",null,[u("h3",null,"V.V. Tamar"),u("div",{class:"project-content"},[u("a",{href:"https://vvtamar.nl/",target:"_blank"},[u("img",{src:"/assets/vvtamar.615f7056.png",alt:"vvtamar.nl"})]),u("p",null," Deserunt adipisicing duis consectetur veniam duis nostrud do Lorem incididunt dolor labore et. Amet ipsum do mollit sit officia cupidatat. Non sunt velit ullamco ut irure cupidatat ea. Magna velit est est excepteur dolore nulla do ad veniam. In pariatur anim excepteur anim veniam irure ullamco. Enim aliquip cupidatat minim laboris nostrud commodo pariatur elit eu incididunt enim nostrud do dolor. Aliqua amet aliqua do reprehenderit nulla sunt duis reprehenderit. ")])]),u("li",null,[u("h3",null,"Phylophile"),u("div",{class:"project-content"},[u("a",{href:"https://chitoan.github.io/PhyloD3/",target:"_blank"},[u("img",{src:"/assets/phylophile.3304a3d8.png",alt:"chitoan.github.io/PhyloD3/"})]),u("p",null," Qui eu anim occaecat eiusmod qui et incididunt nisi consequat. Do ad aliquip non ullamco esse mollit exercitation laborum ea laborum in aliquip ea non. Reprehenderit qui occaecat non duis nulla et ipsum nulla cillum magna qui sint enim. Anim voluptate cillum incididunt ea incididunt enim in sint occaecat proident id do sit. Nulla fugiat tempor proident cupidatat excepteur aliqua ipsum sit magna voluptate. Ut nulla eiusmod dolore cillum eu sit Lorem. ")])]),u("li",null,[u("h3",null,"19.XCV"),u("div",{class:"project-content"},[u("a",{href:"https://19xcv.nl/",target:"_blank"},[u("img",{src:"/assets/19xcv.b47448c1.png",alt:"19XCV.nl"})]),u("p",null," Eiusmod deserunt velit nulla dolor cillum. Ea esse magna dolore do tempor ex est. Ea eu eiusmod nostrud culpa ea consequat veniam. Laborum in commodo adipisicing commodo quis fugiat laborum commodo. Est tempor ad in est ipsum. ")])])],-1);bt.render=function(t,e){const a=o("font-awesome-icon");return s(),n(i,null,[u("h2",null,[u(a,{icon:["fas","list"]}),Tt,kt]),qt],64)};const yt={},$t=u("br",null,null,-1),Ct=d(" Contact "),wt={class:"contact-info"},xt={href:"tel:+31612463062",target:"_blank"},It={href:"https://wa.me/31612463062",target:"_blank"},jt=u("br",null,null,-1),Et=d(" +31612463062 "),At={href:"mailto:chi.toan.luu@gmail.com",target:"_blank"},Mt=u("br",null,null,-1),_t=d(" chi.toan.luu@gmail.com "),Lt={href:"https://github.com/ChiToan",target:"_blank"},Bt=u("br",null,null,-1),Pt=d("ChiToan "),Vt={href:"https://www.linkedin.com/in/toan-luu",target:"_blank"},Wt=u("br",null,null,-1),Dt=d("Chi-Toan Luu ");yt.render=function(t,e){const a=o("font-awesome-icon");return s(),n(i,null,[u("h2",null,[u(a,{icon:["fas","address-card"]}),$t,Ct]),u("ul",wt,[u("li",null,[u("a",xt,[u(a,{icon:["fas","phone"]})]),u("a",It,[u(a,{icon:["fab","whatsapp"]})]),jt,Et]),u("li",null,[u("a",At,[u(a,{icon:["fas","envelope"]})]),Mt,_t]),u("li",null,[u("a",Lt,[u(a,{icon:["fab","github"]})]),Bt,Pt]),u("li",null,[u("a",Vt,[u(a,{icon:["fab","linkedin"],style:{padding:"0 1.5px"}})]),Wt,Dt])])],64)};const Nt={name:"Main",components:{Background:N,BackgroundSettings:X,Navigation:st,About:mt,Projects:bt,Contact:yt},computed:{isDark(){return this.$store.state.systemTheme&&this.$store.state.dark},isLight(){return this.$store.state.systemTheme&&!this.$store.state.dark},isInverted(){return!this.$store.state.systemTheme}}},Rt={class:"container"},St={class:"navbar"},Xt={class:"content"},zt={id:"welcome",class:"card section"},Ft=u("br",null,null,-1),Gt=d("Welcome"),Ht=u("p",null,"This is my page (WIP!)",-1),Jt=u("p",null," Et ipsum amet irure fugiat ex ex cillum. Reprehenderit fugiat consequat ex magna nostrud occaecat ad sit reprehenderit esse cupidatat sit. Labore non nulla aute sunt. Laborum laboris est pariatur quis dolore cupidatat. Consequat quis ipsum qui do laborum excepteur. Est deserunt cillum aliqua incididunt ullamco exercitation dolor pariatur in ut duis. ",-1),Kt={id:"about",class:"card section"},Ot={id:"projects",class:"card section"},Qt={id:"contact",class:"card section"};Nt.render=function(t,e,i,a,l,r){const c=o("Background"),d=o("Navigation"),m=o("BackgroundSettings"),h=o("font-awesome-icon"),g=o("About"),p=o("Projects"),v=o("Contact");return s(),n("div",{id:"main",class:{"invert-theme":r.isInverted}},[u(c),u("div",Rt,[u("div",St,[u(d),u(m)]),u("div",Xt,[u("section",zt,[u("h2",null,[u(h,{icon:["fas","home"]}),Ft,Gt]),Ht,Jt]),u("section",Kt,[u(g)]),u("section",Ot,[u(p)]),u("section",Qt,[u(v)])])])],2)};const Ut={expose:[],setup:t=>(t,e)=>(s(),n(Nt)),__scopeId:"data-v-b37422d0"};m.add(h,g,p,v,f,b,T,k,q,y,$,C,w,x,I,j,E,A,M,_,L,B,P);const Yt=V({state:()=>({number:4,interval:20,moving:!1,shuffle:!1,systemTheme:!0})}),Zt=W(Ut);Zt.use(Yt),Zt.component("font-awesome-icon",D),Zt.mount("#app");
