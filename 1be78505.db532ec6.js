(window.webpackJsonp=window.webpackJsonp||[]).push([[7,30],{166:function(e,t,a){"use strict";a.r(t);a(30),a(20),a(21),a(55),a(208);var n=a(0),r=a.n(n),l=a(170),i=a(169),o=a(67),c=a(173),s=a(1),u=a(9),m=a(172),d=a.n(m),f=a(191),b=a(192),p=a(171),v=a(175),h=a(140),k=a.n(h);function g(e){var t=e.item,a=e.onItemClick,l=e.collapsible,i=Object(u.a)(e,["item","onItemClick","collapsible"]),o=t.items,c=t.href,m=t.label,f=t.type,b=Object(n.useState)(t.collapsed),h=b[0],k=b[1],E=Object(n.useState)(null),_=E[0],w=E[1];t.collapsed!==_&&(w(t.collapsed),k(t.collapsed));var C=Object(n.useCallback)((function(e){e.preventDefault(),e.target.blur(),k((function(e){return!e}))}));switch(f){case"category":return o.length>0&&r.a.createElement("li",{className:d()("menu__list-item",{"menu__list-item--collapsed":h}),key:m},r.a.createElement("a",Object(s.a)({className:d()("menu__link",{"menu__link--sublist":l,"menu__link--active":l&&!t.collapsed}),href:"#!",onClick:l?C:void 0},i),m),r.a.createElement("ul",{className:"menu__list"},o.map((function(e){return r.a.createElement(g,{tabIndex:h?"-1":"0",key:e.label,item:e,onItemClick:a,collapsible:l})}))));case"link":default:return r.a.createElement("li",{className:"menu__list-item",key:m},r.a.createElement(p.a,Object(s.a)({className:"menu__link",to:c},Object(v.a)(c)?{isNavLink:!0,activeClassName:"menu__link--active",exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"},i),m))}}var E=function(e){var t=Object(n.useState)(!1),a=t[0],l=t[1],o=Object(i.a)(),c=o.siteConfig,u=(c=void 0===c?{}:c).themeConfig.navbar,m=(u=void 0===u?{}:u).title,v=u.hideOnScroll,h=void 0!==v&&v,E=o.isClient,_=Object(b.a)(),w=_.logoLink,C=_.logoLinkProps,N=_.logoImageUrl,y=_.logoAlt,O=e.docsSidebars,j=e.path,M=e.sidebar,I=e.sidebarCollapsible;if(Object(f.a)(a),!M)return null;var x=O[M];if(!x)throw new Error('Cannot find the sidebar "'+M+'" in the sidebar config!');return I&&x.forEach((function(e){return function e(t,a){var n=t.items,r=t.href;switch(t.type){case"category":var l=n.map((function(t){return e(t,a)})).filter((function(e){return e})).length>0;return t.collapsed=!l,l;case"link":default:return r===a}}(e,j)})),r.a.createElement("div",{className:k.a.sidebar},h&&r.a.createElement(p.a,Object(s.a)({tabIndex:"-1",className:k.a.sidebarLogo,to:w},C),null!=N&&r.a.createElement("img",{key:E,src:N,alt:y}),null!=m&&r.a.createElement("strong",null,m)),r.a.createElement("div",{className:d()("menu","menu--responsive",k.a.menu,{"menu--show":a})},r.a.createElement("button",{"aria-label":a?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){l(!a)}},a?r.a.createElement("span",{className:d()(k.a.sidebarMenuIcon,k.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:k.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},x.map((function(e){return r.a.createElement(g,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),l(!1)},collapsible:I})})))))},_=a(178),w=a(182),C=a(190),N=a(145),y=a.n(N);t.default=function(e){var t=e.route,a=e.docsMetadata,n=e.location,s=t.routes.find((function(e){return Object(C.a)(n.pathname,e)}))||{},u=a.permalinkToSidebar,m=a.docsSidebars,d=a.version,f=u[s.path],b=Object(i.a)(),p=b.siteConfig,v=(p=void 0===p?{}:p).themeConfig,h=void 0===v?{}:v,k=b.isClient,g=h.sidebarCollapsible,N=void 0===g||g;return 0===Object.keys(s).length?r.a.createElement(w.default,e):r.a.createElement(c.a,{version:d,key:k},r.a.createElement("div",{className:y.a.docPage},f&&r.a.createElement("div",{className:y.a.docSidebarContainer},r.a.createElement(E,{docsSidebars:m,path:s.path,sidebar:f,sidebarCollapsible:N})),r.a.createElement("main",{className:y.a.docMainContainer},r.a.createElement(l.a,{components:_.a},Object(o.a)(t.routes)))))}},182:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(173);t.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},208:function(e,t,a){"use strict";var n=a(12),r=a(209)(5),l=!0;"find"in[]&&Array(1).find((function(){l=!1})),n(n.P+n.F*l,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a(81)("find")},209:function(e,t,a){var n=a(29),r=a(58),l=a(28),i=a(27),o=a(210);e.exports=function(e,t){var a=1==e,c=2==e,s=3==e,u=4==e,m=6==e,d=5==e||m,f=t||o;return function(t,o,b){for(var p,v,h=l(t),k=r(h),g=n(o,b,3),E=i(k.length),_=0,w=a?f(t,E):c?f(t,0):void 0;E>_;_++)if((d||_ in k)&&(v=g(p=k[_],_,h),e))if(a)w[_]=v;else if(v)switch(e){case 3:return!0;case 5:return p;case 6:return _;case 2:w.push(p)}else if(u)return!1;return m?-1:s||u?u:w}}},210:function(e,t,a){var n=a(211);e.exports=function(e,t){return new(n(e))(t)}},211:function(e,t,a){var n=a(13),r=a(188),l=a(2)("species");e.exports=function(e){var t;return r(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!r(t.prototype)||(t=void 0),n(t)&&null===(t=t[l])&&(t=void 0)),void 0===t?Array:t}}}]);