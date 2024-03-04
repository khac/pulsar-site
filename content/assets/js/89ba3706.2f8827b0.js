"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[97481],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>g});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function u(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),o=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=o(e.components);return r.createElement(i.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=o(t),d=n,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||l;return t?r.createElement(g,s(s({ref:a},p),{},{components:t})):r.createElement(g,s({ref:a},p))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,s=new Array(l);s[0]=d;var u={};for(var i in a)hasOwnProperty.call(a,i)&&(u[i]=a[i]);u.originalType=e,u[c]="string"==typeof e?e:n,s[1]=u;for(var o=2;o<l;o++)s[o]=t[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},19365:(e,a,t)=>{t.d(a,{A:()=>s});var r=t(96540),n=t(20053);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:a,hidden:t,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.A)(l.tabItem,s),hidden:t},a)}},11470:(e,a,t)=>{t.d(a,{A:()=>T});var r=t(58168),n=t(96540),l=t(20053),s=t(23104),u=t(56347),i=t(57485),o=t(31682),p=t(89466);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:n}}=e;return{value:a,label:t,attributes:r,default:n}}))}function m(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??c(t);return function(e){const a=(0,o.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function d(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function g(e){let{queryString:a=!1,groupId:t}=e;const r=(0,u.W6)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,i.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(r.location.search);a.set(l,e),r.replace({...r.location,search:a.toString()})}),[l,r])]}function y(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,l=m(e),[s,u]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:l}))),[i,o]=g({queryString:t,groupId:r}),[c,y]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,l]=(0,p.Dv)(t);return[r,(0,n.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),v=(()=>{const e=i??c;return d({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{v&&u(v)}),[v]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),o(e),y(e)}),[o,y,l]),tabValues:l}}var v=t(92303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:a,block:t,selectedValue:u,selectValue:i,tabValues:o}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),m=e=>{const a=e.currentTarget,t=p.indexOf(a),r=o[t].value;r!==u&&(c(a),i(r))},d=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;a=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;a=p[t]??p[p.length-1];break}}a?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},a)},o.map((e=>{let{value:a,label:t,attributes:s}=e;return n.createElement("li",(0,r.A)({role:"tab",tabIndex:u===a?0:-1,"aria-selected":u===a,key:a,ref:e=>p.push(e),onKeyDown:d,onClick:m},s,{className:(0,l.A)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":u===a})}),t??a)})))}function b(e){let{lazy:a,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r}))))}function N(e){const a=y(e);return n.createElement("div",{className:(0,l.A)("tabs-container",h.tabList)},n.createElement(f,(0,r.A)({},e,a)),n.createElement(b,(0,r.A)({},e,a)))}function T(e){const a=(0,v.A)();return n.createElement(N,(0,r.A)({key:String(a)},e))}},16242:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>u,metadata:()=>o,toc:()=>c});var r=t(58168),n=(t(96540),t(15680)),l=t(11470),s=t(19365);const u={id:"admin-api-clusters",title:"Managing Clusters",sidebar_label:"Clusters"},i=void 0,o={unversionedId:"admin-api-clusters",id:"version-2.11.x/admin-api-clusters",title:"Managing Clusters",description:"This page only shows some frequently used operations.",source:"@site/versioned_docs/version-2.11.x/admin-api-clusters.md",sourceDirName:".",slug:"/admin-api-clusters",permalink:"/docs/2.11.x/admin-api-clusters",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/admin-api-clusters.md",tags:[],version:"2.11.x",frontMatter:{id:"admin-api-clusters",title:"Managing Clusters",sidebar_label:"Clusters"},sidebar:"docsSidebar",previous:{title:"Get started",permalink:"/docs/2.11.x/admin-api-get-started"},next:{title:"Tenants",permalink:"/docs/2.11.x/admin-api-tenants"}},p={},c=[{value:"Clusters resources",id:"clusters-resources",level:2},{value:"Provision",id:"provision",level:3},{value:"Initialize cluster metadata",id:"initialize-cluster-metadata",level:3},{value:"Get configuration",id:"get-configuration",level:3},{value:"Update",id:"update",level:3},{value:"Delete",id:"delete",level:3},{value:"List",id:"list",level:3},{value:"Update peer-cluster data",id:"update-peer-cluster-data",level:3}],m={toc:c},d="wrapper";function g(e){let{components:a,...t}=e;return(0,n.yg)(d,(0,r.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"}," This page only shows ",(0,n.yg)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"For the latest and complete information about ",(0,n.yg)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more, see ",(0,n.yg)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/"},"Pulsar admin doc"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"For the latest and complete information about ",(0,n.yg)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,n.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"For the latest and complete information about ",(0,n.yg)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,n.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/2.11.x/"},"Java admin API doc"),".")))),(0,n.yg)("p",null,"Pulsar clusters consist of one or more Pulsar ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.11.x/reference-terminology#broker"},"brokers"),", one or more ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.11.x/reference-terminology#bookkeeper"},"BookKeeper"),"\nservers (aka ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.11.x/reference-terminology#bookie"},"bookies"),"), and a ",(0,n.yg)("a",{parentName:"p",href:"https://zookeeper.apache.org"},"ZooKeeper")," cluster that provides configuration and coordination management."),(0,n.yg)("p",null,"Clusters can be managed via:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The ",(0,n.yg)("inlineCode",{parentName:"li"},"clusters")," command of the ",(0,n.yg)("a",{parentName:"li",href:"pathname:///reference/#/2.11.x/pulsar-admin/"},(0,n.yg)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool"),(0,n.yg)("li",{parentName:"ul"},"The ",(0,n.yg)("inlineCode",{parentName:"li"},"/admin/v2/clusters")," endpoint of the admin ",(0,n.yg)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API"),(0,n.yg)("li",{parentName:"ul"},"The ",(0,n.yg)("inlineCode",{parentName:"li"},"clusters")," method of the ",(0,n.yg)("inlineCode",{parentName:"li"},"PulsarAdmin")," object in the ",(0,n.yg)("a",{parentName:"li",href:"/docs/2.11.x/client-libraries-java"},"Java API"))),(0,n.yg)("h2",{id:"clusters-resources"},"Clusters resources"),(0,n.yg)("h3",{id:"provision"},"Provision"),(0,n.yg)("p",null,"New clusters can be provisioned using the admin interface."),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"This operation requires superuser privileges.")),(0,n.yg)(l.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.yg)(s.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.yg)("p",null,"You can provision a new cluster using the ",(0,n.yg)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/clusters?id=create"},(0,n.yg)("inlineCode",{parentName:"a"},"create"))," subcommand. Here's an example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin clusters create cluster-1 \\\n    --url http://my-cluster.org.com:8080 \\\n    --broker-url pulsar://my-cluster.org.com:6650\n"))),(0,n.yg)(s.A,{value:"REST API",mdxType:"TabItem"},(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.11.3&apiversion=v2#operation/createCluster"},"PUT /admin/v2/clusters/:cluster/createCluster"))),(0,n.yg)(s.A,{value:"Java",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"ClusterData clusterData = new ClusterData(\n        serviceUrl,\n        serviceUrlTls,\n        brokerServiceUrl,\n        brokerServiceUrlTls\n);\nadmin.clusters().createCluster(clusterName, clusterData);\n")))),(0,n.yg)("h3",{id:"initialize-cluster-metadata"},"Initialize cluster metadata"),(0,n.yg)("p",null,"When provisioning a new cluster, you need to initialize that cluster's ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.11.x/concepts-architecture-overview#metadata-store"},"metadata"),". When initializing cluster metadata, you need to specify all of the following:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The name of the cluster"),(0,n.yg)("li",{parentName:"ul"},"The local metadata store connection string for the cluster"),(0,n.yg)("li",{parentName:"ul"},"The configuration store connection string for the entire instance"),(0,n.yg)("li",{parentName:"ul"},"The web service URL for the cluster"),(0,n.yg)("li",{parentName:"ul"},"A broker service URL enabling interaction with the ",(0,n.yg)("a",{parentName:"li",href:"/docs/2.11.x/reference-terminology#broker"},"brokers")," in the cluster")),(0,n.yg)("p",null,"You must initialize cluster metadata ",(0,n.yg)("em",{parentName:"p"},"before")," starting up any ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.11.x/admin-api-brokers"},"brokers")," that will belong to the cluster."),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"No cluster metadata initialization through the REST API or the Java admin API")),(0,n.yg)("p",{parentName:"blockquote"},"Unlike most other admin functions in Pulsar, cluster metadata initialization cannot be performed via the admin REST API\nor the admin Java client, as metadata initialization involves communicating with ZooKeeper directly.\nInstead, you can use the ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.11.x/reference-cli-tools"},(0,n.yg)("inlineCode",{parentName:"a"},"pulsar"))," CLI tool, in particular\nthe ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.11.x/reference-cli-tools"},(0,n.yg)("inlineCode",{parentName:"a"},"initialize-cluster-metadata"))," command.")),(0,n.yg)("p",null,"Here's an example cluster metadata initialization command:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar initialize-cluster-metadata \\\n  --cluster us-west \\\n  --metadata-store zk:zk1.us-west.example.com:2181,zk2.us-west.example.com:2181/my-chroot-path \\\n  --configuration-metadata-store zk:zk1.us-west.example.com:2181,zk2.us-west.example.com:2181/my-chroot-path \\\n  --web-service-url http://pulsar.us-west.example.com:8080/ \\\n  --web-service-url-tls https://pulsar.us-west.example.com:8443/ \\\n  --broker-service-url pulsar://pulsar.us-west.example.com:6650/ \\\n  --broker-service-url-tls pulsar+ssl://pulsar.us-west.example.com:6651/\n")),(0,n.yg)("p",null,"You'll need to use ",(0,n.yg)("inlineCode",{parentName:"p"},"--*-tls")," flags only if you're using ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.11.x/security-tls-authentication"},"mTLS authentication")," in your instance."),(0,n.yg)("h3",{id:"get-configuration"},"Get configuration"),(0,n.yg)("p",null,"You can fetch the ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.11.x/reference-configuration"},"configuration")," for an existing cluster at any time."),(0,n.yg)(l.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.yg)(s.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.yg)("p",null,"Use the ",(0,n.yg)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/clusters?id=get"},(0,n.yg)("inlineCode",{parentName:"a"},"get"))," subcommand and specify the name of the cluster. Here's an example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin clusters get cluster-1\n")),(0,n.yg)("p",null,"Output:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "serviceUrl": "http://my-cluster.org.com:8080/",\n    "serviceUrlTls": null,\n    "brokerServiceUrl": "pulsar://my-cluster.org.com:6650/",\n    "brokerServiceUrlTls": null\n    "peerClusterNames": null\n}\n'))),(0,n.yg)(s.A,{value:"REST API",mdxType:"TabItem"},(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.11.3&apiversion=v2#operation/getCluster"},"GET /admin/v2/clusters/:cluster/getCluster"))),(0,n.yg)(s.A,{value:"Java",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"admin.clusters().getCluster(clusterName);\n")))),(0,n.yg)("h3",{id:"update"},"Update"),(0,n.yg)("p",null,"You can update the configuration for an existing cluster at any time."),(0,n.yg)(l.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.yg)(s.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.yg)("p",null,"Use the ",(0,n.yg)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/clusters?id=update"},(0,n.yg)("inlineCode",{parentName:"a"},"update"))," subcommand and specify new configuration values using flags."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin clusters update cluster-1 \\\n    --url http://my-cluster.org.com:4081 \\\n    --broker-url pulsar://my-cluster.org.com:3350\n"))),(0,n.yg)(s.A,{value:"REST API",mdxType:"TabItem"},(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.11.3&apiversion=v2#operation/updateCluster"},"POST /admin/v2/clusters/:cluster/updateCluster"))),(0,n.yg)(s.A,{value:"Java",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"ClusterData clusterData = new ClusterData(\n        serviceUrl,\n        serviceUrlTls,\n        brokerServiceUrl,\n        brokerServiceUrlTls\n);\nadmin.clusters().updateCluster(clusterName, clusterData);\n")))),(0,n.yg)("h3",{id:"delete"},"Delete"),(0,n.yg)("p",null,"Clusters can be deleted from a Pulsar ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.11.x/reference-terminology#instance"},"instance"),"."),(0,n.yg)(l.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.yg)(s.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.yg)("p",null,"Use the ",(0,n.yg)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/clusters?id=delete"},(0,n.yg)("inlineCode",{parentName:"a"},"delete"))," subcommand and specify the name of the cluster."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"pulsar-admin clusters delete cluster-1\n"))),(0,n.yg)(s.A,{value:"REST API",mdxType:"TabItem"},(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.11.3&apiversion=v2#operation/deleteCluster"},"DELETE /admin/v2/clusters/:cluster/deleteCluster"))),(0,n.yg)(s.A,{value:"Java",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"admin.clusters().deleteCluster(clusterName);\n")))),(0,n.yg)("h3",{id:"list"},"List"),(0,n.yg)("p",null,"You can fetch a list of all clusters in a Pulsar ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.11.x/reference-terminology#instance"},"instance"),"."),(0,n.yg)(l.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.yg)(s.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.yg)("p",null,"Use the ",(0,n.yg)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/clusters?id=list"},(0,n.yg)("inlineCode",{parentName:"a"},"list"))," subcommand."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin clusters list\n")),(0,n.yg)("p",null,"Output:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"cluster-1\ncluster-2\n"))),(0,n.yg)(s.A,{value:"REST API",mdxType:"TabItem"},(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.11.3&apiversion=v2#operation/getClusters"},"GET /admin/v2/clusters/getClusters"))),(0,n.yg)(s.A,{value:"Java",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"admin.clusters().getClusters();\n")))),(0,n.yg)("h3",{id:"update-peer-cluster-data"},"Update peer-cluster data"),(0,n.yg)("p",null,"Peer clusters can be configured for a given cluster in a Pulsar ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.11.x/reference-terminology#instance"},"instance"),"."),(0,n.yg)(l.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.yg)(s.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.yg)("p",null,"Use the ",(0,n.yg)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/clusters?id=update-peer-clusters"},(0,n.yg)("inlineCode",{parentName:"a"},"update-peer-clusters"))," subcommand and specify the list of peer-cluster names."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin update-peer-clusters cluster-1 --peer-clusters cluster-2\n"))),(0,n.yg)(s.A,{value:"REST API",mdxType:"TabItem"},(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.11.3&apiversion=v2#operation/setPeerClusterNames"},"POST /admin/v2/clusters/:cluster/peers/setPeerClusterNames"))),(0,n.yg)(s.A,{value:"Java",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"admin.clusters().updatePeerClusterNames(clusterName, peerClusterList);\n")))))}g.isMDXComponent=!0}}]);