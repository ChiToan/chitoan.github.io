import{w as t,a as e,o as s,c as n,F as i,r as a,b as o,d as l,T as r,e as u,f as c,t as d,l as m,g as h,h as g,i as p,j as v,k as f,m as b,n as k,p as T,q,s as y,u as $,v as I,x as w,y as C,z as x,A as M,B as j,C as E,D as A,E as _,G as L,H as P,I as B,J as D,K as N,L as V,M as R,N as W}from"./vendor.696fe57e.js";var S={name:"Background",data:()=>({triangles:[],intervalId:void 0}),computed:{quantity(){return this.$store.state.number},interval(){return this.$store.state.interval},moving(){return this.$store.state.moving},shuffle(){return this.$store.state.shuffle}},created(){this.setTriangles(this.quantity)},unmounted(){clearInterval(this.intervalId)},mounted(){this.moving&&setTimeout((()=>{this.updateMovement()}),1),t((()=>{this.setTriangles(this.quantity),this.shuffle&&setTimeout((()=>{this.shuffleTriangles()}),1)})),e((()=>this.moving),((t,e)=>{t!=e&&this.updateMovement()})),e((()=>this.interval),((t,e)=>{t!=e&&this.updateMovement()}))},methods:{setTriangles(t){const e=t-this.triangles.length;if(t<=0)this.triangles=[];else if(e>0)for(let n=0;n<e;n++){let t=X(10,70),e=X(0,t),n={width:0,height:0,border:"0 solid transparent",position:"fixed",zIndex:0,borderRightColor:(s=.4,"hsla("+360*Math.random()+", 100%, 75%, "+s+")"),borderTopWidth:t-e+"vmin",borderBottomWidth:e+"vmin",borderRightWidth:t+"vmin",bottom:X(20,80)+"vh",right:X(20,80)+"vw",transform:"rotate("+X(-180,180)+"deg)",transition:""};this.triangles.push(n),this.moving&&this.updateMovement()}else if(e<0)for(let n=0;n<Math.abs(e);n++)this.triangles.pop();var s},moveTriangles(t){if(t)this.triangles.forEach((t=>{t.transition="transform "+this.interval+"s",t.transform="translate3d("+X(20,80)+"vw,"+X(20,80)+"vh,0) rotate("+X(-180,180)+"deg)"}));else{let t=document.getElementById("background");this.triangles.forEach(((e,s)=>{e.transition="",t&&(e.transform=getComputedStyle(t.children[s]).transform)}))}},updateMovement(){this.moveTriangles(this.moving),this.intervalId=clearInterval(this.intervalId),this.moving&&(this.intervalId=setInterval((()=>this.moveTriangles(this.moving)),1e3*this.interval))},shuffleTriangles(){this.triangles.forEach((t=>{t.bottom=X(0,100)+"vh",t.right=X(0,100)+"vw",t.transform="rotate("+X(0,360)+"deg)"})),this.$store.state.shuffle=!1}}};function X(t,e){return Math.floor(Math.random()*(e-t))+t}const z={id:"background"};S.render=function(t,e,o,l,r,u){return s(),n("div",z,[(s(!0),n(i,null,a(r.triangles,((t,e)=>(s(),n("div",{key:e,style:t},null,4)))),128))])};var F={name:"Background Settings",data:()=>({opened:!1}),computed:{noTriangles(){return this.$store.state.number<=0}},methods:{removeTriangle(){this.$store.state.number>0&&this.$store.state.number--},removeAllTriangles(){this.$store.state.number=0},toggleMoving(){this.$store.state.moving=!this.$store.state.moving},toggleTheme(){this.$store.state.systemTheme=!this.$store.state.systemTheme},increaseInterval(){this.$store.state.interval++},decreaseInterval(){this.$store.state.interval>1&&this.$store.state.interval--}}};const G={key:0,class:"card"},H={class:"settings-header"},J=u("h3",null,"Settings",-1),K={class:"settings-list"},O=u("div",{class:"setting"},[u("h4",null,"Wallpaper")],-1),Q={class:"triangle-player"},U={class:"triangle-value",title:"Number of triangles"},Y=u("div",{class:"triangle-up"},null,-1),Z={class:"triangle-player"},tt={class:"triangle-value",title:"Duration of movement (higher is slower)"},et={class:"setting"},st=u("h4",null,"Invert Theme",-1),nt={key:1,class:"settings-icon"};F.render=function(t,e,i,a,m,h){const g=o("font-awesome-icon");return s(),n(r,{name:"settings",mode:"out-in"},{default:l((()=>[m.opened?(s(),n("div",G,[u("div",H,[J,u("button",{onClick:e[1]||(e[1]=t=>m.opened=!1),class:"icon-btn btn-small"},[u(g,{icon:["fas","compress-alt"]})])]),u("ul",K,[u("li",null,[O,u("div",Q,[u("div",U,[c(d(this.$store.state.number)+" ",1),Y]),u("button",{onClick:e[2]||(e[2]=(...t)=>h.removeTriangle&&h.removeTriangle(...t)),class:"icon-btn",disabled:h.noTriangles,title:"Remove triangle"},[u(g,{icon:["fas","minus"]})],8,["disabled"]),u("button",{onClick:e[3]||(e[3]=t=>this.$store.state.number++),class:"icon-btn",title:"Add triangle"},[u(g,{icon:["fas","plus"]})]),u("button",{onClick:e[4]||(e[4]=t=>this.$store.state.shuffle=!0),class:"icon-btn btn-small",disabled:h.noTriangles,title:"Shuffle triangles"},[u(g,{icon:["fas","random"]})],8,["disabled"]),u("button",{onClick:e[5]||(e[5]=(...t)=>h.removeAllTriangles&&h.removeAllTriangles(...t)),class:"icon-btn btn-small",disabled:h.noTriangles,title:"Remove all triangles"},[u(g,{icon:["fas","trash"]})],8,["disabled"])]),u("div",Z,[u("div",tt,d(this.$store.state.interval)+"s ",1),u("button",{onClick:e[6]||(e[6]=(...t)=>h.decreaseInterval&&h.decreaseInterval(...t)),class:"icon-btn",disabled:this.$store.state.interval<=1,title:"Decrease movement speed"},[u(g,{icon:["fas","fast-backward"]})],8,["disabled"]),this.$store.state.moving?(s(),n("button",{key:0,onClick:e[7]||(e[7]=t=>this.$store.state.moving=!1),class:"icon-btn btn-big",title:"Pause triangle movement"},[u(g,{icon:["fas","pause"]})])):(s(),n("button",{key:1,onClick:e[8]||(e[8]=t=>this.$store.state.moving=!0),class:"icon-btn btn-big"},[u(g,{icon:["fas","play"]})])),u("button",{onMousedown:e[9]||(e[9]=(...t)=>h.increaseInterval&&h.increaseInterval(...t)),class:"icon-btn",title:"Increase movement speed"},[u(g,{icon:["fas","fast-forward"]})],32)])]),u("li",et,[st,u("button",{onClick:e[10]||(e[10]=(...t)=>h.toggleTheme&&h.toggleTheme(...t)),class:"icon-btn"},[this.$store.state.systemTheme?(s(),n(g,{key:0,icon:["fas","toggle-off"]})):(s(),n(g,{key:1,icon:["fas","toggle-on"]}))])])])])):(s(),n("div",nt,[u("button",{onClick:e[11]||(e[11]=t=>m.opened=!0),class:"icon-btn btn-small"},[u(g,{icon:["fas","cog"]})])]))])),_:1})};const it={},at={class:"navbar-items card"},ot={href:"#"},lt=c(" Welcome"),rt={href:"#about"},ut=c(" About"),ct={href:"#projects"},dt=c(" Projects"),mt={href:"#contact"},ht=c(" Contact");it.render=function(t,e){const i=o("font-awesome-icon");return s(),n("nav",at,[u("a",ot,[u(i,{icon:["fas","home"]}),lt]),u("a",rt,[u(i,{icon:["fas","user"]}),ut]),u("a",ct,[u(i,{icon:["fas","list"]}),dt]),u("a",mt,[u(i,{icon:["fas","address-card"]}),ht])])};const gt={},pt=u("br",null,null,-1),vt=c("About me"),ft=u("img",{src:"/assets/profile.14690f75.jpg",alt:"Profile Toan",class:"profile-img"},null,-1),bt=u("p",null,"My name is Toan",-1),kt=u("p",null," Occaecat id occaecat cillum voluptate tempor consequat tempor reprehenderit qui do sunt Lorem consectetur cillum. Veniam sint cupidatat sunt in cillum quis veniam proident elit excepteur aute non commodo excepteur. Non nisi in aute aute veniam consectetur sit minim. ",-1);gt.render=function(t,e){const a=o("font-awesome-icon");return s(),n(i,null,[u("h2",null,[u(a,{icon:["fas","user"]}),pt,vt]),ft,bt,kt],64)};const Tt={},qt=u("br",null,null,-1),yt=c(" Projects I've worked on "),$t=u("ul",{class:"projects-list"},[u("li",null,[u("h3",null,"Résume"),u("div",{class:"project-content"},[u("a",{href:"https://resume.win.tue.nl/",target:"_blank"},[u("img",{src:"/assets/resume.b5a4fe20.png",alt:"19XCV.nl"})]),u("p",null," Veniam irure id sit qui fugiat deserunt sint cillum velit non. Nisi ipsum dolor dolor ut nostrud ullamco consequat eu voluptate esse. Ex qui do sit fugiat est proident consequat elit commodo id veniam fugiat. Voluptate non et mollit non qui proident ad ut nostrud. Ea dolore ut do do aute deserunt nisi adipisicing sit Lorem proident est occaecat occaecat. Aliquip sunt quis adipisicing labore qui adipisicing eu sint dolor. ")])]),u("li",null,[u("h3",null,"V.V. Tamar"),u("div",{class:"project-content"},[u("a",{href:"https://vvtamar.nl/",target:"_blank"},[u("img",{src:"/assets/vvtamar.615f7056.png",alt:"vvtamar.nl"})]),u("p",null," Deserunt adipisicing duis consectetur veniam duis nostrud do Lorem incididunt dolor labore et. Amet ipsum do mollit sit officia cupidatat. Non sunt velit ullamco ut irure cupidatat ea. Magna velit est est excepteur dolore nulla do ad veniam. In pariatur anim excepteur anim veniam irure ullamco. Enim aliquip cupidatat minim laboris nostrud commodo pariatur elit eu incididunt enim nostrud do dolor. Aliqua amet aliqua do reprehenderit nulla sunt duis reprehenderit. ")])]),u("li",null,[u("h3",null,"Phylophile"),u("div",{class:"project-content"},[u("a",{href:"https://chitoan.github.io/PhyloD3/",target:"_blank"},[u("img",{src:"/assets/phylophile.3304a3d8.png",alt:"chitoan.github.io/PhyloD3/"})]),u("p",null," Qui eu anim occaecat eiusmod qui et incididunt nisi consequat. Do ad aliquip non ullamco esse mollit exercitation laborum ea laborum in aliquip ea non. Reprehenderit qui occaecat non duis nulla et ipsum nulla cillum magna qui sint enim. Anim voluptate cillum incididunt ea incididunt enim in sint occaecat proident id do sit. Nulla fugiat tempor proident cupidatat excepteur aliqua ipsum sit magna voluptate. Ut nulla eiusmod dolore cillum eu sit Lorem. ")])]),u("li",null,[u("h3",null,"19.XCV"),u("div",{class:"project-content"},[u("a",{href:"https://19xcv.nl/",target:"_blank"},[u("img",{src:"/assets/19xcv.b47448c1.png",alt:"19XCV.nl"})]),u("p",null," Eiusmod deserunt velit nulla dolor cillum. Ea esse magna dolore do tempor ex est. Ea eu eiusmod nostrud culpa ea consequat veniam. Laborum in commodo adipisicing commodo quis fugiat laborum commodo. Est tempor ad in est ipsum. ")])])],-1);Tt.render=function(t,e){const a=o("font-awesome-icon");return s(),n(i,null,[u("h2",null,[u(a,{icon:["fas","list"]}),qt,yt]),$t],64)};const It={},wt=u("br",null,null,-1),Ct=c(" Contact "),xt={class:"contact-info"},Mt={href:"tel:+31612463062",target:"_blank"},jt={href:"https://wa.me/31612463062",target:"_blank"},Et=u("br",null,null,-1),At=c(" +31612463062 "),_t={href:"mailto:chi.toan.luu@gmail.com",target:"_blank"},Lt=u("br",null,null,-1),Pt=c(" chi.toan.luu@gmail.com "),Bt={href:"https://github.com/ChiToan",target:"_blank"},Dt=u("br",null,null,-1),Nt=c("ChiToan "),Vt={href:"https://www.linkedin.com/in/toan-luu",target:"_blank"},Rt=u("br",null,null,-1),Wt=c("Chi-Toan Luu ");It.render=function(t,e){const a=o("font-awesome-icon");return s(),n(i,null,[u("h2",null,[u(a,{icon:["fas","address-card"]}),wt,Ct]),u("ul",xt,[u("li",null,[u("a",Mt,[u(a,{icon:["fas","phone"]})]),u("a",jt,[u(a,{icon:["fab","whatsapp"]})]),Et,At]),u("li",null,[u("a",_t,[u(a,{icon:["fas","envelope"]})]),Lt,Pt]),u("li",null,[u("a",Bt,[u(a,{icon:["fab","github"]})]),Dt,Nt]),u("li",null,[u("a",Vt,[u(a,{icon:["fab","linkedin"],style:{padding:"0 1.5px"}})]),Rt,Wt])])],64)};const St={name:"Main",components:{Background:S,BackgroundSettings:F,Navigation:it,About:gt,Projects:Tt,Contact:It},computed:{isDark(){return this.$store.state.systemTheme&&this.$store.state.dark},isLight(){return this.$store.state.systemTheme&&!this.$store.state.dark},isInverted(){return!this.$store.state.systemTheme}}},Xt={class:"container"},zt={class:"navbar"},Ft={class:"content"},Gt={id:"welcome",class:"card section"},Ht=u("br",null,null,-1),Jt=c("Welcome"),Kt=u("p",null,"This is my page (WIP!)",-1),Ot=u("p",null," Et ipsum amet irure fugiat ex ex cillum. Reprehenderit fugiat consequat ex magna nostrud occaecat ad sit reprehenderit esse cupidatat sit. Labore non nulla aute sunt. Laborum laboris est pariatur quis dolore cupidatat. Consequat quis ipsum qui do laborum excepteur. Est deserunt cillum aliqua incididunt ullamco exercitation dolor pariatur in ut duis. ",-1),Qt={id:"about",class:"card section"},Ut={id:"projects",class:"card section"},Yt={id:"contact",class:"card section"};St.render=function(t,e,i,a,l,r){const c=o("Background"),d=o("Navigation"),m=o("BackgroundSettings"),h=o("font-awesome-icon"),g=o("About"),p=o("Projects"),v=o("Contact");return s(),n("div",{id:"main",class:{"invert-theme":r.isInverted}},[u(c),u("div",Xt,[u("div",zt,[u(d),u(m)]),u("div",Ft,[u("section",Gt,[u("h2",null,[u(h,{icon:["fas","home"]}),Ht,Jt]),Kt,Ot]),u("section",Qt,[u(g)]),u("section",Ut,[u(p)]),u("section",Yt,[u(v)])])])],2)};const Zt={expose:[],setup:t=>(t,e)=>(s(),n(St)),__scopeId:"data-v-b37422d0"};m.add(h,g,p,v,f,b,k,T,q,y,$,I,w,C,x,M,j,E,A,_,L,P,B,D,N);const te=V({state:()=>({number:4,interval:20,moving:!1,shuffle:!1,systemTheme:!0})}),ee=R(Zt);ee.use(te),ee.component("font-awesome-icon",W),ee.mount("#app");
