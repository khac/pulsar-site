"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[51646],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,d=p["".concat(i,".").concat(g)]||p[g]||m[g]||o;return n?a.createElement(d,s(s({ref:t},c),{},{components:n})):a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(96540),r=n(20053);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,s),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(58168),r=n(96540),o=n(20053),s=n(23104),l=n(56347),i=n(57485),u=n(31682),c=n(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=d({queryString:n,groupId:a}),[p,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=i??p;return g({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),y(e)}),[u,y,o]),tabValues:o}}var f=n(92303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.a_)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),i(a))},g=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:g,onClick:m},s,{className:(0,o.A)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=y(e);return r.createElement("div",{className:(0,o.A)("tabs-container",h.tabList)},r.createElement(b,(0,a.A)({},e,t)),r.createElement(v,(0,a.A)({},e,t)))}function w(e){const t=(0,f.A)();return r.createElement(N,(0,a.A)({key:String(t)},e))}},17738:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(58168),r=(n(96540),n(15680)),o=n(11470),s=n(19365);const l={id:"io-overview",title:"Pulsar connector overview",sidebar_label:"Overview"},i=void 0,u={unversionedId:"io-overview",id:"version-2.11.x/io-overview",title:"Pulsar connector overview",description:"Messaging systems are most powerful when you can easily use them with external systems like databases and other messaging systems.",source:"@site/versioned_docs/version-2.11.x/io-overview.md",sourceDirName:".",slug:"/io-overview",permalink:"/docs/2.11.x/io-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/io-overview.md",tags:[],version:"2.11.x",frontMatter:{id:"io-overview",title:"Pulsar connector overview",sidebar_label:"Overview"},sidebar:"docsSidebar",previous:{title:"Window Functions: Context",permalink:"/docs/2.11.x/window-functions-context"},next:{title:"Get started",permalink:"/docs/2.11.x/io-quickstart"}},c={},p=[{value:"Concept",id:"concept",level:2},{value:"Source",id:"source",level:3},{value:"Sink",id:"sink",level:3},{value:"Processing guarantee",id:"processing-guarantee",level:2},{value:"Set",id:"set",level:3},{value:"Update",id:"update",level:3},{value:"Work with connector",id:"work-with-connector",level:2}],m={toc:p},g="wrapper";function d(e){let{components:t,...l}=e;return(0,r.yg)(g,(0,a.A)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Messaging systems are most powerful when you can easily use them with external systems like databases and other messaging systems."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Pulsar IO connectors")," enable you to easily create, deploy, and manage connectors that interact with external systems, such as ",(0,r.yg)("a",{parentName:"p",href:"https://cassandra.apache.org"},"Apache Cassandra"),", ",(0,r.yg)("a",{parentName:"p",href:"https://www.aerospike.com"},"Aerospike"),", and many others."),(0,r.yg)("h2",{id:"concept"},"Concept"),(0,r.yg)("p",null,"Pulsar IO connectors come in two types: ",(0,r.yg)("strong",{parentName:"p"},"source")," and ",(0,r.yg)("strong",{parentName:"p"},"sink"),"."),(0,r.yg)("p",null,"This diagram illustrates the relationship between source, Pulsar, and sink:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Pulsar IO diagram",src:n(88999).A,title:"Pulsar IO connectors (sources and sinks)",width:"1758",height:"352"})),(0,r.yg)("h3",{id:"source"},"Source"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Sources ",(0,r.yg)("strong",{parentName:"p"},"feed data from external systems into Pulsar"),".")),(0,r.yg)("p",null,"Common sources include other messaging systems and firehose-style data pipeline APIs."),(0,r.yg)("p",null,"For the complete list of Pulsar built-in source connectors, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-connectors#source-connector"},"source connector"),"."),(0,r.yg)("h3",{id:"sink"},"Sink"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Sinks ",(0,r.yg)("strong",{parentName:"p"},"feed data from Pulsar into external systems"),".")),(0,r.yg)("p",null,"Common sinks include other messaging systems and SQL and NoSQL databases."),(0,r.yg)("p",null,"For the complete list of Pulsar built-in sink connectors, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-connectors#sink-connector"},"sink connector"),"."),(0,r.yg)("h2",{id:"processing-guarantee"},"Processing guarantee"),(0,r.yg)("p",null,"Processing guarantees are used to handle errors when writing messages to Pulsar topics."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Pulsar connectors and Functions use the ",(0,r.yg)("strong",{parentName:"p"},"same")," processing guarantees as below.")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Delivery semantic"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"at-most-once")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Each message sent to a connector is to be ",(0,r.yg)("strong",{parentName:"td"},"processed once")," or ",(0,r.yg)("strong",{parentName:"td"},"not to be processed"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"at-least-once")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Each message sent to a connector is to be ",(0,r.yg)("strong",{parentName:"td"},"processed once")," or ",(0,r.yg)("strong",{parentName:"td"},"more than once"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"effectively-once")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Each message sent to a connector has ",(0,r.yg)("strong",{parentName:"td"},"one output associated")," with it.")))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Processing guarantees for connectors not just rely on Pulsar guarantee but also ",(0,r.yg)("strong",{parentName:"p"},"relate to external systems"),", that is, ",(0,r.yg)("strong",{parentName:"p"},"the implementation of source and sink"),".")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Source: Pulsar ensures that writing messages to Pulsar topics respects the processing guarantees. It is within Pulsar's control.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Sink: the processing guarantees rely on the sink implementation. If the sink implementation does not handle retries in an idempotent way, the sink does not respect the processing guarantees."))),(0,r.yg)("h3",{id:"set"},"Set"),(0,r.yg)("p",null,"When creating a connector, you can set the processing guarantee with the following semantics:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"ATLEAST_ONCE")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"ATMOST_ONCE")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"EFFECTIVELY_ONCE"))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"If ",(0,r.yg)("inlineCode",{parentName:"p"},"--processing-guarantees")," is not specified when creating a connector, the default semantic is ",(0,r.yg)("inlineCode",{parentName:"p"},"ATLEAST_ONCE"),".")),(0,r.yg)("p",null,"Take ",(0,r.yg)("strong",{parentName:"p"},"Admin CLI")," as an example. For more information about ",(0,r.yg)("strong",{parentName:"p"},"REST API")," or ",(0,r.yg)("strong",{parentName:"p"},"JAVA Admin API"),", see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-use#create"},"here"),"."),(0,r.yg)(o.A,{groupId:"io-choice",defaultValue:"Source",values:[{label:"Source",value:"Source"},{label:"Sink",value:"Sink"}],mdxType:"Tabs"},(0,r.yg)(s.A,{value:"Source",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin sources create \\\n    --processing-guarantees ATMOST_ONCE \\\n    # Other source configs\n")),(0,r.yg)("p",null,"For more information about the options of ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin sources create"),", see ",(0,r.yg)("a",{parentName:"p",href:"reference-connector-admin.md"},"here"),".")),(0,r.yg)(s.A,{value:"Sink",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin sinks create \\\n    --processing-guarantees EFFECTIVELY_ONCE \\\n    # Other sink configs\n")),(0,r.yg)("p",null,"For more information about the options of ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin sinks create"),", see ",(0,r.yg)("a",{parentName:"p",href:"reference-connector-admin.md"},"here"),"."))),(0,r.yg)("h3",{id:"update"},"Update"),(0,r.yg)("p",null,"After creating a connector, you can update the processing guarantee with the following semantics:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"ATLEAST_ONCE")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"ATMOST_ONCE")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"EFFECTIVELY_ONCE"))),(0,r.yg)("p",null,"Take ",(0,r.yg)("strong",{parentName:"p"},"Admin CLI")," as an example. For more information about ",(0,r.yg)("strong",{parentName:"p"},"REST API")," or ",(0,r.yg)("strong",{parentName:"p"},"JAVA Admin API"),", see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-use#create"},"here"),"."),(0,r.yg)(o.A,{groupId:"io-choice",defaultValue:"Source",values:[{label:"Source",value:"Source"},{label:"Sink",value:"Sink"}],mdxType:"Tabs"},(0,r.yg)(s.A,{value:"Source",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin sources update \\\n    --processing-guarantees EFFECTIVELY_ONCE \\\n    # Other source configs\n")),(0,r.yg)("p",null,"For more information about the options of ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin sources update"),", see ",(0,r.yg)("a",{parentName:"p",href:"reference-connector-admin.md"},"here"),".")),(0,r.yg)(s.A,{value:"Sink",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin sinks update \\\n    --processing-guarantees ATMOST_ONCE \\\n    # Other sink configs\n")),(0,r.yg)("p",null,"For more information about the options of ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin sinks update"),", see ",(0,r.yg)("a",{parentName:"p",href:"reference-connector-admin.md"},"here"),"."))),(0,r.yg)("h2",{id:"work-with-connector"},"Work with connector"),(0,r.yg)("p",null,"You can manage Pulsar connectors (for example, create, update, start, stop, restart, reload, delete and perform other operations on connectors) via the ",(0,r.yg)("inlineCode",{parentName:"p"},"Connector Admin CLI")," with sources and sinks subcommands. For the latest and complete information, see ",(0,r.yg)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/"},"Pulsar admin docs"),"."),(0,r.yg)("p",null,"Connectors (sources and sinks) and Functions are components of instances, and they all run on Functions workers. When managing a source, sink or function via the ",(0,r.yg)("inlineCode",{parentName:"p"},"Connector Admin CLI")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"Functions Admin CLI"),", an instance is started on a worker. For more information, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.11.x/functions-worker"},"Functions worker"),"."))}d.isMDXComponent=!0},88999:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/pulsar-io-8e834df5eaed9d5b0a7e0ffa162e850a.png"}}]);