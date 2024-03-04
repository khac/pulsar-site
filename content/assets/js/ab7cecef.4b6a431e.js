"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4921],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(96540);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(t),m=s,y=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return t?r.createElement(y,l(l({ref:n},u),{},{components:t})):r.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,l=new Array(i);l[0]=m;var a={};for(var o in n)hasOwnProperty.call(n,o)&&(a[o]=n[o]);a.originalType=e,a[c]="string"==typeof e?e:s,l[1]=a;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},97616:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=t(58168),s=(t(96540),t(15680));const i={id:"sql-rest-api",title:"Pulsar SQL REST APIs",sidebar_label:"REST APIs"},l=void 0,a={unversionedId:"sql-rest-api",id:"version-2.11.x/sql-rest-api",title:"Pulsar SQL REST APIs",description:"This section lists resources that make up the Trino REST API v1.",source:"@site/versioned_docs/version-2.11.x/sql-rest-api.md",sourceDirName:".",slug:"/sql-rest-api",permalink:"/docs/2.11.x/sql-rest-api",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/sql-rest-api.md",tags:[],version:"2.11.x",frontMatter:{id:"sql-rest-api",title:"Pulsar SQL REST APIs",sidebar_label:"REST APIs"},sidebar:"docsSidebar",previous:{title:"Configuration and deployment",permalink:"/docs/2.11.x/sql-deployment-configurations"},next:{title:"Overview",permalink:"/docs/2.11.x/tiered-storage-overview"}},o={},p=[{value:"Request for Trino services",id:"request-for-trino-services",level:2},{value:"Schema",id:"schema",level:2}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,s.yg)(c,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"This section lists resources that make up the Trino REST API v1."),(0,s.yg)("h2",{id:"request-for-trino-services"},"Request for Trino services"),(0,s.yg)("p",null,"All requests for Trino services should use Trino REST API v1 version."),(0,s.yg)("p",null,"To request services, use the explicit URL ",(0,s.yg)("inlineCode",{parentName:"p"},"http://trino.service:8081/v1``. You need to update "),"trino.service:8081` with your real Trino address before sending requests."),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"POST")," requests require the ",(0,s.yg)("inlineCode",{parentName:"p"},"X-Trino-User")," header. If you use authentication, you must use the same ",(0,s.yg)("inlineCode",{parentName:"p"},"username")," that is specified in the authentication configuration. If you do not use authentication, you can specify anything for ",(0,s.yg)("inlineCode",{parentName:"p"},"username"),"."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-http"},"X-Trino-User: username\n")),(0,s.yg)("p",null,"For more information about headers, refer to ",(0,s.yg)("a",{parentName:"p",href:"https://trino.io/docs/363/develop/client-protocol.html#client-request-headers"},"client request headers"),"."),(0,s.yg)("h2",{id:"schema"},"Schema"),(0,s.yg)("p",null,"You can use statement in the HTTP body. All data is received as JSON document that might contain a ",(0,s.yg)("inlineCode",{parentName:"p"},"nextUri")," link. If the received JSON document contains a ",(0,s.yg)("inlineCode",{parentName:"p"},"nextUri")," link, the request continues with the ",(0,s.yg)("inlineCode",{parentName:"p"},"nextUri")," link until the received data does not contain a ",(0,s.yg)("inlineCode",{parentName:"p"},"nextUri")," link. If no error is returned, the query completes successfully. If an ",(0,s.yg)("inlineCode",{parentName:"p"},"error")," field is displayed in ",(0,s.yg)("inlineCode",{parentName:"p"},"stats"),", it means the query fails."),(0,s.yg)("p",null,"The following is an example of ",(0,s.yg)("inlineCode",{parentName:"p"},"show catalogs"),". The query continues until the received JSON document does not contain a ",(0,s.yg)("inlineCode",{parentName:"p"},"nextUri")," link. Since no ",(0,s.yg)("inlineCode",{parentName:"p"},"error")," is displayed in ",(0,s.yg)("inlineCode",{parentName:"p"},"stats"),", it means that the query completes successfully."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"curl --header \"X-Trino-User: test-user\" --request POST --data 'show catalogs' http://localhost:8081/v1/statement\n")),(0,s.yg)("p",null,"Output:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "infoUri" : "http://localhost:8081/ui/query.html?20191113_033653_00006_dg6hb",\n   "stats" : {\n      "queued" : true,\n      "nodes" : 0,\n      "userTimeMillis" : 0,\n      "cpuTimeMillis" : 0,\n      "wallTimeMillis" : 0,\n      "processedBytes" : 0,\n      "processedRows" : 0,\n      "runningSplits" : 0,\n      "queuedTimeMillis" : 0,\n      "queuedSplits" : 0,\n      "completedSplits" : 0,\n      "totalSplits" : 0,\n      "scheduled" : false,\n      "peakMemoryBytes" : 0,\n      "state" : "QUEUED",\n      "elapsedTimeMillis" : 0\n   },\n   "id" : "20191113_033653_00006_dg6hb",\n   "nextUri" : "http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/1"\n}\n')),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/1\n")),(0,s.yg)("p",null,"Output:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "infoUri" : "http://localhost:8081/ui/query.html?20191113_033653_00006_dg6hb",\n   "nextUri" : "http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/2",\n   "id" : "20191113_033653_00006_dg6hb",\n   "stats" : {\n      "state" : "PLANNING",\n      "totalSplits" : 0,\n      "queued" : false,\n      "userTimeMillis" : 0,\n      "completedSplits" : 0,\n      "scheduled" : false,\n      "wallTimeMillis" : 0,\n      "runningSplits" : 0,\n      "queuedSplits" : 0,\n      "cpuTimeMillis" : 0,\n      "processedRows" : 0,\n      "processedBytes" : 0,\n      "nodes" : 0,\n      "queuedTimeMillis" : 1,\n      "elapsedTimeMillis" : 2,\n      "peakMemoryBytes" : 0\n   }\n}\n')),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/2\n")),(0,s.yg)("p",null,"Output:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "id" : "20191113_033653_00006_dg6hb",\n   "data" : [\n      [\n         "pulsar"\n      ],\n      [\n         "system"\n      ]\n   ],\n   "infoUri" : "http://localhost:8081/ui/query.html?20191113_033653_00006_dg6hb",\n   "columns" : [\n      {\n         "typeSignature" : {\n            "rawType" : "varchar",\n            "arguments" : [\n               {\n                  "kind" : "LONG_LITERAL",\n                  "value" : 6\n               }\n            ],\n            "literalArguments" : [],\n            "typeArguments" : []\n         },\n         "name" : "Catalog",\n         "type" : "varchar(6)"\n      }\n   ],\n   "stats" : {\n      "wallTimeMillis" : 104,\n      "scheduled" : true,\n      "userTimeMillis" : 14,\n      "progressPercentage" : 100,\n      "totalSplits" : 19,\n      "nodes" : 1,\n      "cpuTimeMillis" : 16,\n      "queued" : false,\n      "queuedTimeMillis" : 1,\n      "state" : "FINISHED",\n      "peakMemoryBytes" : 0,\n      "elapsedTimeMillis" : 111,\n      "processedBytes" : 0,\n      "processedRows" : 0,\n      "queuedSplits" : 0,\n      "rootStage" : {\n         "cpuTimeMillis" : 1,\n         "runningSplits" : 0,\n         "state" : "FINISHED",\n         "completedSplits" : 1,\n         "subStages" : [\n            {\n               "cpuTimeMillis" : 14,\n               "runningSplits" : 0,\n               "state" : "FINISHED",\n               "completedSplits" : 17,\n               "subStages" : [\n                  {\n                     "wallTimeMillis" : 7,\n                     "subStages" : [],\n                     "stageId" : "2",\n                     "done" : true,\n                     "nodes" : 1,\n                     "totalSplits" : 1,\n                     "processedBytes" : 22,\n                     "processedRows" : 2,\n                     "queuedSplits" : 0,\n                     "userTimeMillis" : 1,\n                     "cpuTimeMillis" : 1,\n                     "runningSplits" : 0,\n                     "state" : "FINISHED",\n                     "completedSplits" : 1\n                  }\n               ],\n               "wallTimeMillis" : 92,\n               "nodes" : 1,\n               "done" : true,\n               "stageId" : "1",\n               "userTimeMillis" : 12,\n               "processedRows" : 2,\n               "processedBytes" : 51,\n               "queuedSplits" : 0,\n               "totalSplits" : 17\n            }\n         ],\n         "wallTimeMillis" : 5,\n         "done" : true,\n         "nodes" : 1,\n         "stageId" : "0",\n         "userTimeMillis" : 1,\n         "processedRows" : 2,\n         "processedBytes" : 22,\n         "totalSplits" : 1,\n         "queuedSplits" : 0\n      },\n      "runningSplits" : 0,\n      "completedSplits" : 19\n   }\n}\n')),(0,s.yg)("admonition",{type:"note"},(0,s.yg)("p",{parentName:"admonition"},"Since the response data is not in sync with the query state from the perspective of clients, you cannot rely on the response data to determine whether the query completes.")),(0,s.yg)("p",null,"For more information about Trino REST API, refer to ",(0,s.yg)("a",{parentName:"p",href:"https://trino.io/docs/363/develop/client-protocol.html"},"Trino client REST API"),"."))}d.isMDXComponent=!0}}]);