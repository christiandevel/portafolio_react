(this.webpackJsonpportafolio=this.webpackJsonpportafolio||[]).push([[0],{101:function(e,i,t){},382:function(e,i,t){},383:function(e,i,t){},384:function(e,i,t){},385:function(e,i,t){},386:function(e,i,t){},390:function(e,i,t){},391:function(e,i,t){},392:function(e,i,t){},393:function(e,i,t){"use strict";t.r(i);var n=t(4),a=t.n(n),s=t(45),o=t.n(s),c=t(28),r=t(46),l=t(87),d=t(61),A=t(0),V=a.a.createContext(),b=function(e){var i=e.children,t=Object(n.useState)(r),a=Object(c.a)(t,2),s=a[0],o=a[1],b=Object(n.useState)("en-US"),p=Object(c.a)(b,2),m=p[0],j=p[1];return Object(A.jsx)(V.Provider,{value:{establecerLenjuage:function(e){if("es-MX"===e)o(l),j("es-MX");else o(r),j("en-US")}},children:Object(A.jsx)(d.a,{locale:m,messages:s,children:i})})},p=(t(101),t(36)),m=function(){return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)("div",{className:"header-logo",children:Object(A.jsx)(p.Link,{to:"home",smooth:!0,duration:3e3,spy:!0,children:"Christian"},"christian")})})},j=t(68),u=[{nombre:"Home",int:"menu.home",default:"Home",id:1,to:"home"},{nombre:"About",int:"menu.about",default:"About",id:2,to:"about"},{nombre:"Service",int:"menu.services",default:"Services",id:3,to:"services"},{nombre:"Portafolio",int:"menu.portafolio",default:"Portafolio",id:4,to:"portafolio"},{nombre:"Notes",int:"menu.notes",default:"Notes",id:5,to:"blog"},{nombre:"Network",int:"menu.network",default:"Network",id:6,to:"network"}],f=function(e){return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)("nav",{children:Object(A.jsx)("ul",{className:"header-menu_links",children:u.map((function(i){return Object(A.jsx)(p.Link,{activeClass:"activeLink",to:i.to,smooth:!0,duration:3e3,spy:!0,onSetActive:e.event,children:Object(A.jsx)(j.a,{id:i.int,defaultMessage:i.default})},i.id)}))})})})},g=function(e){var i=Object(n.useContext)(V);return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{className:"header-lenguajes",children:[Object(A.jsx)("button",{onClick:function(){return i.establecerLenjuage("es-MX")},children:Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJwSURBVFiFxZfNS1RRGIef99wZJUYlKMxINzWO2hAuKvvCCEJtIfQP1H8QhEIboUVUFAQj1J9Q+xZtSjd9QF+2SGNqZrSyUkspKPGSzXjv26IZscma23Bn7m9373k5z3PO4j3nCB6Toq0eOCZotyL7gK3ApvzwF0XmBH0CPHAI3Y6TXPIyr5QqSBKPWqwMAieAeo++i8ANCyfRytTrsgQ+0LzBJjIEnAFqPYKLswxciWBfamHmu2eBSaLNDtZNYE+Z4OKMu5jjO3n1rqRAmlinIiNAo0/wQj4p0ttB6sVfBfIrfwQ0+wwvZM7FHFy7E6sCk0RrHawxYFeF4IWMO4S64iSzAKbw18E6WwU4QKfBGSp8CECG2HYXSQHhKggA5BSJdZCaNgAOZrCKcICwwR0EEE0eqVtI2KPi6kaplTqpkQYJSwRRy1ekiqM5tTWri/pDl9SSr40DkR7RzNF+kFu+wryn34D0BgQHtMfgX7crg2/2GqApMAHRJoP/Lfd/ssWUrqlo1ADzAQrMByugMm+AZ4EJiDtmQEcCE0BGQ+ScuwsJ+3FArfieAKSJXVPklK/A0rnaTvq0ARAYBnJVhGcVGYb8hSRG5g1wuVp0QS92kJpeFQBwCF0AJqrAf75CeHWx611KHwItFYLPuphDay+lv7XiVqZmgH5BK9GcPjpYfcVvgz/OgnbSE8Bu/G1Q4w6h/XFeJosH1j2M2sjMRrAPA+f59bwqN8uKnItgH4iTfL9eQcnH6STRHSuEBgQ9CTR4BH8T9LoiiXbSb/9VWFKgkCTxOoPTJ2g30AVsAzbnhz8Ds8BTRe5nqbnTyYTtZd6fOerV3CyJCgoAAAAASUVORK5CYII=",alt:"cambiar idioma espa\xf1ol"})}),Object(A.jsx)("button",{onClick:function(){return i.establecerLenjuage("en-US")},children:Object(A.jsx)("img",{src:"data:image/png;base64,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",alt:"change languaje english"})})]})})},O=function(){return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("button",{children:[Object(A.jsx)("span",{}),Object(A.jsx)("span",{}),Object(A.jsx)("span",{})]})})},x=function(){var e=Object(n.useState)(""),i=Object(c.a)(e,2),t=i[0],a=i[1],s=Object(n.useState)(""),o=Object(c.a)(s,2),r=o[0],l=o[1];return Object(A.jsxs)("header",{className:"header",children:[Object(A.jsx)(m,{}),Object(A.jsxs)("div",{className:"header-menu ".concat(t),children:[Object(A.jsx)(f,{event:function(){a(""),l("")}}),Object(A.jsx)(g,{})]}),Object(A.jsx)("div",{className:"header-button ".concat(r),onClick:function(){""===t?(a("show"),l("close")):(a(""),l(""))},children:Object(A.jsx)(O,{})})]})},h=(t(69),t(88)),v=t.n(h),w=function(){var e=Object(n.useRef)(null);return Object(n.useEffect)((function(){var i=new v.a(e.current,{strings:["Frontend developer","Mobile developer","Web developer"],startDelay:300,typeSpeed:100,backDelay:300,backSpeed:100,loop:!0});return function(){i.destroy()}}),[]),Object(A.jsx)("div",{children:Object(A.jsxs)("span",{className:"main-contenedor-firs",children:[Object(A.jsx)(j.a,{id:"main-profession"}),Object(A.jsx)("span",{className:"main-contenedor-typed",ref:e})," "]})})},k=t(89),B=t.n(k),D=function(){return Object(A.jsx)(B.a,{id:"tsparticles",width:"100%",canvasClassName:"tsparticles",init:function(e){},loaded:function(e){},options:{fullScreen:!1,background:{color:{value:"#000"}},interactivity:{events:{onClick:{enable:!1},onHover:{enable:!1},resize:!1}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:1,straight:!1,bounce:!1},number:{density:{enable:!1,value_area:800},value:10},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0}})},H=function(){return Object(A.jsx)("section",{className:"home",children:Object(A.jsxs)("div",{className:"main",id:"main",children:[Object(A.jsx)(D,{}),Object(A.jsxs)("div",{className:"main-contenedor",children:[Object(A.jsx)("p",{className:"main-contenedor-title",children:Object(A.jsx)(j.a,{id:"main-greting"})}),Object(A.jsx)(w,{}),Object(A.jsxs)("p",{className:"main-contenedor-text",children:[" ",Object(A.jsx)(j.a,{id:"main-description"})]}),Object(A.jsx)(p.Link,{className:"main-contenedor-button",to:"about",smooth:!0,duration:3e3,spy:!0,children:Object(A.jsx)(j.a,{id:"main-button"})})]})]})})},y=t.p+"static/media/HV_ChristianAndres_Desarrollador.b5d92843.pdf",N=(t(382),t.p+"static/media/perfil.8405c967.png"),C=function(){return Object(A.jsx)("div",{className:"about-img",children:Object(A.jsx)("img",{src:N,alt:"Christian Moreno profile"})})},I=function(){return Object(A.jsxs)("div",{children:[Object(A.jsxs)("p",{className:"about-info_name",children:[Object(A.jsx)(j.a,{id:"about-name",defaultMessage:"about-name"}),Object(A.jsx)("span",{children:"Christian"})]}),Object(A.jsx)("p",{className:"about-info_resume",children:Object(A.jsx)(j.a,{id:"about-country",defaultMessage:"about-country"})}),Object(A.jsx)("p",{className:"about-info_description",children:Object(A.jsx)(j.a,{id:"about-experince",defaultMessage:"about-experince"})}),Object(A.jsx)("p",{className:"about-info_contact",children:Object(A.jsx)(j.a,{id:"about-invited",defaultMessage:"about-invited"})})]})},P=(t(383),function(e){return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)("a",{className:"button-link",download:e.dowloand,href:e.href,onClick:e.evento,target:e.target,children:Object(A.jsx)(j.a,{id:e.text,defaultMessage:e.default})})})}),S=function(){return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("section",{className:"about",children:[Object(A.jsx)(C,{}),Object(A.jsxs)("div",{className:"about-info",children:[Object(A.jsx)(I,{}),Object(A.jsx)(P,{text:"about-download",default:"Download CV",href:y,download:y,target:"_blank"})]})]})})},z=(t(384),t(385),function(e){return Object(A.jsx)("div",{className:"title",children:Object(A.jsxs)("p",{children:[Object(A.jsx)(j.a,{id:e.tipoTitle||"ss",defaultMessage:e.tipoTitle}),Object(A.jsx)("span",{children:Object(A.jsx)(j.a,{id:e.title||"sdasd",defaultMessage:e.title})})]})})}),L=[{id:1,name:"skills-name-1",src:t.p+"static/media/Service-Develoment.15296879.svg",alt:"Desarrollo Fronend",description:"skills-description-1"},{id:2,name:"skills-name-2",src:t.p+"static/media/Service-Mobile.6c08988b.svg",alt:"Desarrollo Mobile",description:"skills-description-2"},{id:3,name:"skills-name-3",src:t.p+"static/media/Service-Responsive.90ee2e30.svg",alt:"Desarrollo Responsive",description:"skills-description-3"},{id:4,name:"skills-name-4",src:t.p+"static/media/Service-Seo.e4b509c7.svg",alt:"Seo",description:"skills-description-4"},{id:5,name:"skills-name-5",src:t.p+"static/media/Service-Web.b356f129.svg",alt:"Desarrollo web",description:"skills-description-5"},{id:6,name:"skills-name-6",src:t.p+"static/media/Service-WebComponents.ca70c6b1.svg",alt:"Web components",description:"skills-description-6"}],Q=function(){return Object(A.jsx)("div",{className:"services-grid",children:L.map((function(e,i){return Object(A.jsxs)("div",{className:"services-grid_box",children:[Object(A.jsx)("div",{className:"services-grid_box--img",children:Object(A.jsx)("img",{src:e.src,alt:e.alt})}),Object(A.jsx)("div",{className:"services-grid_box--title",children:Object(A.jsx)(j.a,{id:e.name,defaultMessage:e.name})}),Object(A.jsx)("div",{className:"services-grid_box--description",children:Object(A.jsx)(j.a,{id:e.description,defaultMessage:e.description})})]},i)}))})},F=function(){return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("section",{className:"services",children:[Object(A.jsx)(z,{title:"skills-title",tipoTitle:"global.title.plural"}),Object(A.jsx)(Q,{})]})})},M=[{id:0,filter:"portafolio-all-filter"},{id:1,filter:"portafolio-practice-filter",src:t.p+"static/media/boostrap.0fd3b395.png",link:"link de imagen",code:"codigo del proyecto"},{id:2,filter:"portafolio-practice-filter",src:t.p+"static/media/google.ce7be6fd.png",link:"link de imagen",code:"codigo del proyecto"},{id:3,filter:"portafolio-practice-filter",src:"data:image/png;base64,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",link:"link de imagen",code:"codigo del proyecto"},{id:4,filter:"portafolio-practice-filter",src:t.p+"static/media/Materialize.d9e98e7b.png",link:"link de imagen",code:"codigo del proyecto"},{id:5,filter:"portafolio-practice-filter",src:t.p+"static/media/PlatziGame.65975346.png",link:"link de imagen",code:"codigo del proyecto"},{id:6,filter:"portafolio-practice-filter",src:t.p+"static/media/Rick-And-Morty.6aa8b753.png",link:"link de imagen",code:"codigo del proyecto"},{id:7,filter:"portafolio-web-filter",src:t.p+"static/media/gopass.54dc37a8.png",link:"link de imagen",code:"codigo del proyecto"},{id:8,filter:"portafolio-web-filter",src:t.p+"static/media/Landign-gopass.824a5fae.png",link:"link de imagen",code:"codigo del proyecto"},{id:9,filter:"portafolio-web-filter",src:t.p+"static/media/landign-promo-gopass.13a4cc5b.png",link:"link de imagen",code:"codigo del proyecto"},{id:10,filter:"portafolio-web-filter",src:t.p+"static/media/segurosnovus.41173d8f.png",link:"link de imagen",code:"codigo del proyecto"}],R=(t(386),t(30)),K=t(31),W=t(27),T=[{id:1,icon:"html5",prefix:"fab",name:"html"},{id:2,icon:"css3-alt",prefix:"fab",name:"css"},{id:3,icon:"js",prefix:"fab",name:"js"},{id:4,icon:"chrome",prefix:"fab",name:"seo"}],E=[{id:1,icon:"react",prefix:"fab",name:"react"},{id:2,icon:"vuejs",prefix:"fab",name:"vue"},{id:3,icon:"angular",prefix:"fab",name:"angular"},{id:4,icon:"sass",prefix:"fab",name:"sass"},{id:5,icon:"bootstrap",prefix:"fab",name:"bootstrap"},{id:4,icon:"npm",prefix:"fab",name:"npm"}],q=[{id:1,icon:"php",prefix:"fab",name:"php"},{id:2,icon:"node",prefix:"fab",name:"node"},{id:3,icon:"android",prefix:"fab",name:"android"},{id:4,icon:"git",prefix:"fab",name:"git"}];K.b.add(W.d);var G=function(){return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{className:"iconos",children:[Object(A.jsx)("div",{className:"iconos-caja",children:T.map((function(e,i){return Object(A.jsxs)("div",{className:"iconos-caja_content",children:[Object(A.jsx)(R.a,{icon:["".concat(e.prefix),"".concat(e.icon)],size:"3x",className:"icon"}),Object(A.jsx)("span",{children:e.name})]},i)}))}),Object(A.jsx)("div",{className:"iconos-caja",children:E.map((function(e,i){return Object(A.jsxs)("div",{className:"iconos-caja_content",children:[Object(A.jsx)(R.a,{icon:["".concat(e.prefix),"".concat(e.icon)],size:"3x",className:"icon"}),Object(A.jsx)("span",{children:e.name})]},i)}))}),Object(A.jsx)("div",{className:"iconos-caja",children:q.map((function(e,i){return Object(A.jsxs)("div",{className:"iconos-caja_content",children:[Object(A.jsx)(R.a,{icon:["".concat(e.prefix),"".concat(e.icon)],size:"3x",className:"icon"}),Object(A.jsx)("span",{children:e.name})]},i)}))})]})})},Y=function(){var e=Object(n.useState)(M),i=Object(c.a)(e,2),t=i[0],a=i[1];return Object(A.jsxs)("section",{className:"portafolio",children:[Object(A.jsx)(z,{title:"portafolio-title",tipoTitle:"global.title.singular"}),Object(A.jsx)("div",{className:"portafolio-filters",children:function(e){var i=new Set;return M.reduce((function(e,t){return i.has(t.filter)||(i.add(t.filter,t),e.push(t)),e}),[])}().map((function(e,i){return Object(A.jsx)(P,{text:e.filter,evento:function(){return function(e){var i=M.filter((function(i){return i.filter===e}));a(i)}(e.filter)}},i)}))}),Object(A.jsx)("div",{className:"portafolio-images",children:t.map((function(e,i){return Object(A.jsx)("div",{className:"portafolio-images_caja",children:Object(A.jsx)("img",{src:e.src,alt:"proyecto"})},i)}))}),Object(A.jsx)(G,{})]})},Z=(t(390),[{id:1,title:"webpack",alt:"webpack",data:"9/24/2021",area:"blog-category-develoment",img:t.p+"static/media/webpack.a9257a81.png",description:"Webpack is a static module package for modern JS applications: It builds a dependency graph that maps each module to one or more modules as appropriate.",url:"https://chipped-canary-1a5.notion.site/Webpack-e79874a6974d44ddafeda64217610fb0"},{id:2,title:"typescript",alt:"typescript",data:"10/24/2021",area:"blog-category-develoment",img:t.p+"static/media/typescript.11f5f23e.jpeg",description:"Webpack is a static module package for modern JS applications: It builds a dependency graph that maps each module to one or more modules as appropriate.",url:"https://chipped-canary-1a5.notion.site/Typescript-c71a26bf9ae94705be011d47aa571466"},{id:3,title:"Linkedin",alt:"Linkedin",data:"10/24/2021",area:"blog-category-develoment",img:t.p+"static/media/linkedin.a9550a6e.jpg",description:"Webpack is a static module package for modern JS applications: It builds a dependency graph that maps each module to one or more modules as appropriate.",url:"https://chipped-canary-1a5.notion.site/Curso-de-Optimizaci-n-del-Perfil-de-LinkedIn-6024fbcb2611414aba5a9b1b33f54cd5"}]),X=t(23),J=function(){return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)("div",{className:"notes",children:Z.map((function(e,i){return Object(A.jsxs)("div",{className:"card",children:[Object(A.jsx)("div",{className:"card-header",children:Object(A.jsx)("img",{src:e.img,alt:"Notes sobre ".concat(e.alt),className:"card__image"})}),Object(A.jsxs)("div",{className:"card_body",children:[Object(A.jsxs)("span",{className:"card_body-title",children:[" ",e.title," "]}),Object(A.jsxs)("div",{className:"card_body-info",children:[Object(A.jsx)("span",{children:Object(A.jsx)(X.a,{value:e.data,month:"long",day:"numeric"})}),Object(A.jsx)("span",{children:"|"}),Object(A.jsx)("span",{children:Object(A.jsx)(j.a,{id:e.area,defaultMessage:e.area})})]}),Object(A.jsx)("div",{className:"card_body-descripcion",children:Object(A.jsx)("span",{children:e.description})})]}),Object(A.jsx)("div",{className:"card_footer",children:Object(A.jsx)(P,{text:"blog-read",href:e.url,target:"_black"})})]},i)}))})})},U=function(){return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("section",{className:"blog",children:[Object(A.jsx)(z,{title:"blog-title",tipoTitle:"global.title.plural"}),Object(A.jsx)(J,{})]})})},_=t(37),$=[{id:1,icon:_.b,link:"link",name:"email"},{id:2,icon:_.c,link:"link",name:"phone"},{id:3,icon:_.a,link:"link",name:"CV"},{id:4,icon:W.c,link:"link",name:"twitter"},{id:5,icon:W.a,link:"link",name:"github"},{id:1,icon:W.b,link:"link",name:"notion"}],ee=function(){return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)("div",{className:"footer-icons",children:$.map((function(e){return Object(A.jsxs)("div",{className:"footer-icons_box",children:[Object(A.jsx)("a",{className:"footer-icons_box-icon",children:Object(A.jsx)(R.a,{icon:e.icon,size:"2x"})}),Object(A.jsx)("span",{className:"footer-icons_box-title",children:e.name})]})}))})})},ie=function(){return Object(A.jsx)("div",{className:"grettings",children:Object(A.jsx)("p",{children:"Echo con \u2665 por \xa9ChiristianMoreno"})})},te=(t(391),function(){return Object(A.jsxs)("footer",{className:"network",children:[Object(A.jsx)(z,{title:"media"}),Object(A.jsx)(ee,{}),Object(A.jsx)(ie,{})]})}),ne=function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(x,{}),Object(A.jsx)(H,{}),Object(A.jsx)(S,{}),Object(A.jsx)(F,{}),Object(A.jsx)(Y,{}),Object(A.jsx)(U,{}),Object(A.jsx)(te,{})]})},ae=(t(392),document.getElementById("root"));o.a.render(Object(A.jsx)(b,{children:Object(A.jsx)(ne,{})}),ae)},46:function(e){e.exports=JSON.parse('{"global.title.singular":"my","global.title.plural":"my","menu.home":"Home","menu.about":"About","menu.services":"Services","menu.portafolio":"Portafolio","menu.notes":"Notes","menu.network":"Social Networks","main-greting":"Hi there","main-profession":"I Am ","main-description":"I have more than two years of experience working with different programming languages, focused on frontend development, with knowledge in backend and mobile development. I am passionate about technology and never stop learning. Let me show you my trajectory.","main-button":"see more","about-name":"Hi, my name is ","about-country":" I\'m a Colombian web and mobile developer, with more than two year of experience.","about-experince":"I have worked with different companies in the development of their websites, corporate platforms and mobile applications, with participation in the design process and user experience, mainly focused on front-end development for digital products, I am passionate about technology, challenges and never stop appearing.","about-invited":"If you have a job offer, a project proposal or just want to say hello, please contact me.","about-download":"Download CV","skills-title":"services","skills-name-1":"developer","skills-description-1":"Developer with experience in backend, specialized in frontend and with knowledge in different programming languages.","skills-name-2":"mobile development","skills-description-2":"Knowledge in mobile development, in different native lenjuages and frameworks.","skills-name-3":"Responsive Design","skills-description-3":"Implementation of banners with Responsive design for different devices.","skills-name-4":"SEO","skills-description-4":"Knowledge and implementation of SEO, metadata and performance monitoring of your site in browsers.","skills-name-5":"web development","skills-description-5":"Publication of several websites for different companies, landings and customer relationship management (CRM).","skills-name-6":"web components","skills-description-6":"Implementation of web components, knowledge in different frameworks and libraries.","portafolio-title":"portfolio","portafolio-all-filter":"All","portafolio-web-filter":"Web","portafolio-mobile-filter":"Mobile","portafolio-practice-filter":"Practice","blog-title":"notes","blog-read":"Read more","blog-category-develoment":"develoment"}')},69:function(e,i,t){},87:function(e){e.exports=JSON.parse('{"global.title.singular":"mi","global.title.plural":"mis","menu.home":"Inicio","menu.about":"Acerca de Mi","menu.services":"Servicios","menu.portafolio":"Portafolio","menu.notes":"Notas","menu.network":"Redes Sociales","main-greting":"Hola a todos","main-profession":"Soy ","main-description":"Cuento con mas de dos a\xf1o de experencia trabajando con diferentes lenjuages de progragramacion, enfocado al desarrollo frontend, con conocimento en backend y desarrollo movil. Un apasionado por la tecnologia y a nunca para de aprender. Dejame mostrate mi trayectoria","main-button":"ver mas","about-name":"Hola, mi nombre es ","about-country":" Soy un desarrollador web y m\xf3vil colombiano, con m\xe1s de dos a\xf1os de experiencia.","about-experince":"He trabajado con diferentes empresas en el desarrollo de sus sitios web, plataformas corporativas y aplicaciones m\xf3viles, con  participaci\xf3n en el proceso de dise\xf1o  y la experiencia del usuario, principalmente enfocado en el desarrollo front-end para productos digitales, me apasiona la tecnolog\xeda, los retos y nunca parar de aparecer.","about-invited":"Si tienes una oferta de trabajo, una propuesta de proyecto o simplemente quieres saludarme, ponte en contacto conmigo.","about-download":"Descargar CV","skills-title":"servicios","skills-name-1":"Desarrollador","skills-description-1":"Desarrollador con experiencia en backend, especializado en frontend y con conocimientos en diferentes lenguajes de programaci\xf3n.","skills-name-2":"desarrollo m\xf3vil","skills-description-2":"Conocimientos en desarrollo m\xf3vil, en diferentes lenguajes y frameworks nativos.","skills-name-3":"dise\xf1o responsivo","skills-description-3":"Implementaci\xf3n de banners con  dise\xf1o responsivo para diferentes dispositivos.","skills-name-4":"seo","skills-description-4":"Conocimiento y aplicaci\xf3n de SEO, metadatos y seguimiento del rendimiento de su sitio en los navegadores.","skills-name-5":"desarrollo web","skills-description-5":"Publicaci\xf3n de varias p\xe1ginas web para diferentes empresas, landings y gesti\xf3n de relaci\xf3nes con los clientes (CRM).","skills-name-6":"componentes web","skills-description-6":"Implementaci\xf3n de componentes web, conocimiento en diferentes frameworks y librer\xedas.","portafolio-title":"portafolio","portafolio-all-filter":"Todos","portafolio-web-filter":"Web","portafolio-mobile-filter":"Mobile","portafolio-practice-filter":"Practica","blog-title":"notas","blog-read":"Leer mas","blog-category-develoment":"desarrollo"}')}},[[393,1,2]]]);
//# sourceMappingURL=main.1fe75fed.chunk.js.map