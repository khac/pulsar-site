"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[57034],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),g=n,m=c["".concat(s,".").concat(g)]||c[g]||h[g]||l;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},26505:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(58168),n=(a(96540),a(15680));const l={id:"release-note-guide",title:"Writing release notes"},i=void 0,o={unversionedId:"release-note-guide",id:"release-note-guide",title:"Writing release notes",description:"Pulsar release notes consist of the following parts:",source:"@site/contribute/release-note-guide.md",sourceDirName:".",slug:"/release-note-guide",permalink:"/contribute/release-note-guide",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/release-note-guide.md",tags:[],version:"current",lastUpdatedBy:"Lari Hotari",lastUpdatedAt:1709639230,formattedLastUpdatedAt:"Mar 5, 2024",frontMatter:{id:"release-note-guide",title:"Writing release notes"},sidebar:"sidebarDevelopment",previous:{title:"Creating GPG keys",permalink:"/contribute/create-gpg-keys"},next:{title:"Verifying release candidates",permalink:"/contribute/validate-release-candidate"}},s={},p=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Fetch the release metadata",id:"fetch-the-release-metadata",level:2},{value:"Fetch the release note",id:"fetch-the-release-note",level:2},{value:"Update the release note page",id:"update-the-release-note-page",level:2},{value:"Submit the release note",id:"submit-the-release-note",level:2}],u={toc:p},c="wrapper";function h(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Pulsar release notes consist of the following parts:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"pathname:///release-notes/"},"Core")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"pathname:///release-notes/client-java"},"Java client")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"pathname:///release-notes/client-ws"},"WebSocket client")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"pathname:///release-notes/client-cpp"},"C++ client")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"pathname:///release-notes/client-python"},"Python client")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"pathname:///release-notes/client-go"},"Go client")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"pathname:///release-notes/client-node"},"Node.js client")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"pathname:///release-notes/client-cs"},"C# client"))),(0,n.yg)("h2",{id:"prerequisite"},"Prerequisite"),(0,n.yg)("p",null,"To generate release notes, you are suggested to install the ",(0,n.yg)("a",{parentName:"p",href:"https://cli.github.com/"},"GitHub CLI")," and authenticate first:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"brew install gh\ngh auth login\n")),(0,n.yg)("h2",{id:"fetch-the-release-metadata"},"Fetch the release metadata"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'# Replace v2.10.2 with the target version tag\n# Replace apache/pulsar with the component repo\ngh release view "v2.10.2" -R apache/pulsar --json author,tagName,publishedAt\n')),(0,n.yg)("h2",{id:"fetch-the-release-note"},"Fetch the release note"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'# Replace v2.10.2 with the target version tag\n# Replace apache/pulsar with the component repo\ngh release view "v2.10.2" -R apache/pulsar --json body --jq .body\n')),(0,n.yg)("h2",{id:"update-the-release-note-page"},"Update the release note page"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Copy the related release notes entries and add a ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-site/tree/main/release-notes/versioned"},"versioned release note file"),"."),(0,n.yg)("li",{parentName:"ol"},"Update the ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-site/tree/main/data"},"version metadata files")," (",(0,n.yg)("inlineCode",{parentName:"li"},"release-*.js"),").")),(0,n.yg)("p",null,"To preview the result, follow the instructions for ",(0,n.yg)("a",{parentName:"p",href:"/contribute/document-preview#preview-changes"},"previewing content"),"."),(0,n.yg)("h2",{id:"submit-the-release-note"},"Submit the release note"),(0,n.yg)("p",null,"Submit a PR against ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar-site"},"the site repo")," with the added version release note file and updated version metadata files."),(0,n.yg)("p",null,"Here are some examples:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-site/pull/326"},"Add the release note for C++ client 3.1.0")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-site/pull/343"},"Add the release note for Python client 3.0.0"))),(0,n.yg)("p",null,"Check whether the release information is shown on the ",(0,n.yg)("a",{parentName:"p",href:"pathname:///release-notes/"},"Pulsar Release Note page")," after the website is updated and built successfully."))}h.isMDXComponent=!0}}]);