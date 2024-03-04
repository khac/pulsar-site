"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[21784],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>d});var t=a(96540);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var p=t.createContext({}),l=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(a),g=s,d=m["".concat(p,".").concat(g)]||m[g]||c[g]||r;return a?t.createElement(d,o(o({ref:n},u),{},{components:a})):t.createElement(d,o({ref:n},u))}));function d(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=g;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[m]="string"==typeof e?e:s,o[1]=i;for(var l=2;l<r;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},58025:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var t=a(58168),s=(a(96540),a(15680));const r={id:"functions-quickstart",title:"Getting started with Pulsar Functions",sidebar_label:"Get started"},o=void 0,i={unversionedId:"functions-quickstart",id:"version-2.11.x/functions-quickstart",title:"Getting started with Pulsar Functions",description:"This hands-on tutorial provides step-by-step instructions and examples on how to create and validate functions in a standalone Pulsar, including stateful functions and window functions.",source:"@site/versioned_docs/version-2.11.x/functions-quickstart.md",sourceDirName:".",slug:"/functions-quickstart",permalink:"/docs/2.11.x/functions-quickstart",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/functions-quickstart.md",tags:[],version:"2.11.x",frontMatter:{id:"functions-quickstart",title:"Getting started with Pulsar Functions",sidebar_label:"Get started"},sidebar:"docsSidebar",previous:{title:"Concepts",permalink:"/docs/2.11.x/functions-concepts"},next:{title:"Set up function workers",permalink:"/docs/2.11.x/functions-worker"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Start standalone Pulsar",id:"start-standalone-pulsar",level:2},{value:"Create a namespace for test",id:"create-a-namespace-for-test",level:2},{value:"Start functions",id:"start-functions",level:2},{value:"Start stateful functions",id:"start-stateful-functions",level:2},{value:"Start window functions",id:"start-window-functions",level:2}],u={toc:l},m="wrapper";function c(e){let{components:n,...a}=e;return(0,s.yg)(m,(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"This hands-on tutorial provides step-by-step instructions and examples on how to create and validate functions in a ",(0,s.yg)("a",{parentName:"p",href:"/docs/2.11.x/getting-started-standalone"},"standalone Pulsar"),", including stateful functions and window functions."),(0,s.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"JDK 8+. For more details, refer to ",(0,s.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar#pulsar-runtime-java-version-recommendation"},"Pulsar runtime Java version recommendation"),"."),(0,s.yg)("li",{parentName:"ul"},"Windows OS is not supported.")),(0,s.yg)("h2",{id:"start-standalone-pulsar"},"Start standalone Pulsar"),(0,s.yg)("ol",null,(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"Enable pulsar function in ",(0,s.yg)("inlineCode",{parentName:"p"},"conf/standalone.conf")," (add this field if not exists):"),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-properties"},"functionsWorkerEnabled=true\n"))),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"Start Pulsar locally."),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar standalone\n")),(0,s.yg)("p",{parentName:"li"},"All the components (including ZooKeeper, BookKeeper, broker, and so on) of a Pulsar service start in order. You can use the ",(0,s.yg)("inlineCode",{parentName:"p"},"bin/pulsar-admin brokers healthcheck")," command to make sure the Pulsar service is up and running.")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"Check the Pulsar binary protocol port."),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"telnet localhost 6650\n"))),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"Check the Pulsar Function cluster."),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions-worker get-cluster\n")),(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Output")),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-json"},'[{"workerId":"c-standalone-fw-localhost-6750","workerHostname":"localhost","port":6750}]\n'))),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"Make sure a public tenant exists."),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin tenants list\n")),(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Output")),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-text"},"public\n"))),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"Make sure a default namespace exists."),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin namespaces list public\n")),(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Output")),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-text"},"public/default\n"))),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"Make sure the table service is enabled successfully."),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"telnet localhost 4181\n")),(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Output")),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-text"},"Trying ::1...\ntelnet: connect to address ::1: Connection refused\nTrying 127.0.0.1...\nConnected to localhost.\nEscape character is '^]'.\n")))),(0,s.yg)("h2",{id:"create-a-namespace-for-test"},"Create a namespace for test"),(0,s.yg)("ol",null,(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"Create a tenant and a namespace."),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin tenants create test\nbin/pulsar-admin namespaces create test/test-namespace\n"))),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"In the same terminal window as step 1, verify the tenant and the namespace."),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin namespaces list test\n")),(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Output")),(0,s.yg)("p",{parentName:"li"},"This output shows that both tenant and namespace are created successfully."),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-text"},'"test/test-namespace"\n')))),(0,s.yg)("h2",{id:"start-functions"},"Start functions"),(0,s.yg)("admonition",{type:"note"},(0,s.yg)("p",{parentName:"admonition"},"Before starting functions, you need to ",(0,s.yg)("a",{parentName:"p",href:"#start-standalone-pulsar"},"start Pulsar")," and ",(0,s.yg)("a",{parentName:"p",href:"#create-a-namespace-for-test"},"create a test namespace"),".")),(0,s.yg)("ol",null,(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"Create a function named ",(0,s.yg)("inlineCode",{parentName:"p"},"examples"),"."),(0,s.yg)("admonition",{parentName:"li",type:"tip"},(0,s.yg)("p",{parentName:"admonition"},"You can see both the ",(0,s.yg)("inlineCode",{parentName:"p"},"example-function-config.yaml")," and ",(0,s.yg)("inlineCode",{parentName:"p"},"api-examples.jar")," files under the ",(0,s.yg)("inlineCode",{parentName:"p"},"examples")," folder of the Pulsar\u2019s directory on your local machine."),(0,s.yg)("p",{parentName:"admonition"},"This example function will add a ",(0,s.yg)("inlineCode",{parentName:"p"},"!")," at the end of every message.")),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions create \\\n   --function-config-file examples/example-function-config.yaml \\\n   --jar examples/api-examples.jar\n")),(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Output")),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-text"},"Created Successfully\n")),(0,s.yg)("p",{parentName:"li"},"You can check the config of this function in ",(0,s.yg)("inlineCode",{parentName:"p"},"examples/example-function-config.yaml"),":"),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},'tenant: "test"\nnamespace: "test-namespace"\nname: "example" # function name\nclassName: "org.apache.pulsar.functions.api.examples.ExclamationFunction"\ninputs: ["test_src"] # this function will read messages from these topics\noutput: "test_result" # the return value of this function will be sent to this topic\nautoAck: true # function will acknowledge input messages if set true\nparallelism: 1\n')),(0,s.yg)("p",{parentName:"li"},"You can see the ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-functions/java-examples/src/main/java/org/apache/pulsar/functions/api/examples/ExclamationFunction.java"},"source code")," of ",(0,s.yg)("inlineCode",{parentName:"p"},"ExclamationFunction"),".\nFor more information about the yaml config, see the ",(0,s.yg)("a",{parentName:"p",href:"/docs/2.11.x/functions-cli#yaml-configurations-for-pulsar-functions"},"reference"),".")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"In the same terminal window as step 1, verify the function's configurations."),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions get \\\n   --tenant test \\\n   --namespace test-namespace \\\n   --name example\n")),(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Output")),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "tenant": "test",\n    "namespace": "test-namespace",\n    "name": "example",\n    "className": "org.apache.pulsar.functions.api.examples.ExclamationFunction",\n    "inputSpecs": {\n        "test_src": {\n        "isRegexPattern": false,\n        "schemaProperties": {},\n        "consumerProperties": {},\n        "poolMessages": false\n        }\n    },\n    "output": "test_result",\n    "producerConfig": {\n        "useThreadLocalProducers": false,\n        "batchBuilder": ""\n    },\n    "processingGuarantees": "ATLEAST_ONCE",\n    "retainOrdering": false,\n    "retainKeyOrdering": false,\n    "forwardSourceMessageProperty": true,\n    "userConfig": {},\n    "runtime": "JAVA",\n    "autoAck": true,\n    "parallelism": 1,\n    "resources": {\n        "cpu": 1.0,\n        "ram": 1073741824,\n        "disk": 10737418240\n    },\n    "cleanupSubscription": true,\n    "subscriptionPosition": "Latest"\n}\n'))),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"In the same terminal window as step 1, verify the function's status."),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions status \\\n   --tenant test \\\n   --namespace test-namespace \\\n   --name example\n")),(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Output")),(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},'"running": true')," shows that the function is running."),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n      "error" : "",\n      "numRestarts" : 0,\n      "numReceived" : 0,\n      "numSuccessfullyProcessed" : 0,\n      "numUserExceptions" : 0,\n      "latestUserExceptions" : [ ],\n      "numSystemExceptions" : 0,\n      "latestSystemExceptions" : [ ],\n      "averageLatency" : 0.0,\n      "lastInvocationTime" : 0,\n      "workerId" : "c-standalone-fw-localhost-8080"\n    }\n  } ]\n}\n'))),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"In the same terminal window as step 1, subscribe to the ",(0,s.yg)("strong",{parentName:"p"},"output topic")," ",(0,s.yg)("inlineCode",{parentName:"p"},"test_result"),"."),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-client consume -s test-sub -n 0 test_result\n"))),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"In a new terminal window, produce messages to the ",(0,s.yg)("strong",{parentName:"p"},"input topic")," ",(0,s.yg)("inlineCode",{parentName:"p"},"test_src"),"."),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-bash"},'bin/pulsar-client produce -m "test-messages-`date`" -n 10 test_src\n'))),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"In the same terminal window as step 1, the messages produced by the ",(0,s.yg)("inlineCode",{parentName:"p"},"example")," function are returned. You can see there is a ",(0,s.yg)("inlineCode",{parentName:"p"},"!")," added at the end of every message."),(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Output")),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-text"},"----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n")))),(0,s.yg)("h2",{id:"start-stateful-functions"},"Start stateful functions"),(0,s.yg)("p",null,"The standalone mode of Pulsar enables BookKeeper table service for stateful functions. For more information, see ",(0,s.yg)("a",{parentName:"p",href:"/docs/2.11.x/functions-develop-state"},"Configure state storage"),"."),(0,s.yg)("p",null,"The following example provides instructions to validate counter functions."),(0,s.yg)("admonition",{type:"note"},(0,s.yg)("p",{parentName:"admonition"},"Before starting stateful functions, you need to ",(0,s.yg)("a",{parentName:"p",href:"#start-standalone-pulsar"},"start Pulsar")," and ",(0,s.yg)("a",{parentName:"p",href:"#create-a-namespace-for-test"},"create a test namespace"),".")),(0,s.yg)("ol",null,(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"Create a function using ",(0,s.yg)("inlineCode",{parentName:"p"},"examples/example-stateful-function-config.yaml"),"."),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions create \\\n   --function-config-file examples/example-stateful-function-config.yaml \\\n   --jar examples/api-examples.jar\n")),(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Output")),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-text"},"Created Successfully\n")),(0,s.yg)("p",{parentName:"li"},"You can check the config of this function in ",(0,s.yg)("inlineCode",{parentName:"p"},"examples/example-stateful-function-config.yaml"),":"),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},'tenant: "test"\nnamespace: "test-namespace"\nname: "word_count"\nclassName: "org.apache.pulsar.functions.api.examples.WordCountFunction"\ninputs: ["test_wordcount_src"] # this function will read messages from these topics\nautoAck: true\nparallelism: 1\n')),(0,s.yg)("p",{parentName:"li"},"You can see the ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-functions/java-examples/src/main/java/org/apache/pulsar/functions/api/examples/WordCountFunction.java"},"source code")," of ",(0,s.yg)("inlineCode",{parentName:"p"},"WordCountFunction"),". This function won't return any value but store the occurrence of words in function context. So you don't need to specify an output topic.\nFor more information about the yaml config, see the ",(0,s.yg)("a",{parentName:"p",href:"/docs/2.11.x/functions-cli#yaml-configurations-for-pulsar-functions"},"reference"),".")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"In the same terminal window as step 1, get the information of the ",(0,s.yg)("inlineCode",{parentName:"p"},"word_count")," function."),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions get \\\n   --tenant test \\\n   --namespace test-namespace \\\n   --name word_count\n")),(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Output")),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "tenant": "test",\n  "namespace": "test-namespace",\n  "name": "word_count",\n  "className": "org.apache.pulsar.functions.api.examples.WordCountFunction",\n  "inputSpecs": {\n    "test_wordcount_src": {\n      "isRegexPattern": false,\n      "schemaProperties": {},\n      "consumerProperties": {},\n      "poolMessages": false\n    }\n  },\n  "producerConfig": {\n    "useThreadLocalProducers": false,\n    "batchBuilder": ""\n  },\n  "processingGuarantees": "ATLEAST_ONCE",\n  "retainOrdering": false,\n  "retainKeyOrdering": false,\n  "forwardSourceMessageProperty": true,\n  "userConfig": {},\n  "runtime": "JAVA",\n  "autoAck": true,\n  "parallelism": 1,\n  "resources": {\n    "cpu": 1.0,\n    "ram": 1073741824,\n    "disk": 10737418240\n  },\n  "cleanupSubscription": true,\n  "subscriptionPosition": "Latest"\n}\n'))),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"In the same terminal window as step 1, get the status of the ",(0,s.yg)("inlineCode",{parentName:"p"},"word_count")," function."),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions status \\\n   --tenant test \\\n   --namespace test-namespace \\\n   --name word_count\n")),(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Output")),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n       "error" : "",\n       "numRestarts" : 0,\n       "numReceived" : 0,\n       "numSuccessfullyProcessed" : 0,\n       "numUserExceptions" : 0,\n       "latestUserExceptions" : [ ],\n       "numSystemExceptions" : 0,\n       "latestSystemExceptions" : [ ],\n       "averageLatency" : 0.0,\n       "lastInvocationTime" : 0,\n       "workerId" : "c-standalone-fw-localhost-8080"\n    }\n  } ]\n}\n'))),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"In the same terminal window as step 1, query the state table for the function with the key ",(0,s.yg)("inlineCode",{parentName:"p"},"hello"),". This operation watches the changes associated with ",(0,s.yg)("inlineCode",{parentName:"p"},"hello"),"."),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions querystate \\\n   --tenant test \\\n   --namespace test-namespace \\\n   --name word_count -k hello -w\n")),(0,s.yg)("admonition",{parentName:"li",type:"tip"},(0,s.yg)("p",{parentName:"admonition"},"For more information about the ",(0,s.yg)("inlineCode",{parentName:"p"},"pulsar-admin functions querystate options")," command, including flags, descriptions, default values, and shorthands, see ",(0,s.yg)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/"},"Pulsar admin docs"),".")),(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Output")),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-text"},"key 'hello' doesn't exist.\nkey 'hello' doesn't exist.\nkey 'hello' doesn't exist.\n...\n"))),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"In a new terminal window, produce 10 messages with ",(0,s.yg)("inlineCode",{parentName:"p"},"hello")," to the ",(0,s.yg)("strong",{parentName:"p"},"input topic")," ",(0,s.yg)("inlineCode",{parentName:"p"},"test_wordcount_src")," using one of the following methods. The value of ",(0,s.yg)("inlineCode",{parentName:"p"},"hello")," is updated to 10."),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-bash"},'bin/pulsar-client produce -m "hello" -n 10 test_wordcount_src\n'))),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"In the same terminal window as step 1, check the result."),(0,s.yg)("p",{parentName:"li"},"The result shows that the ",(0,s.yg)("strong",{parentName:"p"},"output topic")," ",(0,s.yg)("inlineCode",{parentName:"p"},"test_wordcount_dest")," receives the messages."),(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Output")),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "hello",\n  "numberValue": 10,\n  "version": 9\n}\n'))),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"In the terminal window as step 5, produce another 10 messages with ",(0,s.yg)("inlineCode",{parentName:"p"},"hello"),". The value of ",(0,s.yg)("inlineCode",{parentName:"p"},"hello")," is updated to 20."),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-bash"},'bin/pulsar-client produce -m "hello" -n 10 test_wordcount_src\n'))),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"In the same terminal window as step 1, check the result."),(0,s.yg)("p",{parentName:"li"},"The result shows that the ",(0,s.yg)("strong",{parentName:"p"},"output topic")," ",(0,s.yg)("inlineCode",{parentName:"p"},"test_wordcount_dest")," receives the value of 20."),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "key": "hello",\n   "numberValue": 20,\n   "version": 19\n}\n')))),(0,s.yg)("h2",{id:"start-window-functions"},"Start window functions"),(0,s.yg)("p",null,"Window functions are a special form of Pulsar Functions. For more information, see ",(0,s.yg)("a",{parentName:"p",href:"/docs/2.11.x/functions-concepts#window-function"},"concepts"),"."),(0,s.yg)("p",null,"The following example provides instructions to start a window function to calculate the sum in a window."),(0,s.yg)("admonition",{type:"note"},(0,s.yg)("p",{parentName:"admonition"},"Before starting window functions, you need to ",(0,s.yg)("a",{parentName:"p",href:"#start-standalone-pulsar"},"start Pulsar"),"  and ",(0,s.yg)("a",{parentName:"p",href:"#create-a-namespace-for-test"},"create a test namespace"),".")),(0,s.yg)("ol",null,(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"Create a function using ",(0,s.yg)("inlineCode",{parentName:"p"},"example-window-function-config.yaml"),"."),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions create \\\n   --function-config-file examples/example-window-function-config.yaml \\\n   --jar examples/api-examples.jar\n")),(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Output")),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-text"},"Created Successfully\n")),(0,s.yg)("p",{parentName:"li"},"You can check the config of this function in ",(0,s.yg)("inlineCode",{parentName:"p"},"examples/example-window-function-config.yaml"),":"),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},'tenant: "test"\nnamespace: "test-namespace"\nname: "window-example"\nclassName: "org.apache.pulsar.functions.api.examples.AddWindowFunction"\ninputs: ["test_window_src"]\noutput: "test_window_result"\nautoAck: true\nparallelism: 1\n\n# every 5 messages, calculate sum of the latest 10 messages\nwindowConfig:\n  windowLengthCount: 10\n  slidingIntervalCount: 5\n')),(0,s.yg)("p",{parentName:"li"},"You can see the source code of ",(0,s.yg)("inlineCode",{parentName:"p"},"AddWindowFunction")," ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-functions/java-examples/src/main/java/org/apache/pulsar/functions/api/examples/AddWindowFunction.java"},"here"),".\nFor more information about the yaml config, see the ",(0,s.yg)("a",{parentName:"p",href:"/docs/2.11.x/functions-cli#yaml-configurations-for-pulsar-functions"},"reference"),"."))),(0,s.yg)("ol",{start:2},(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"In the same terminal window as step 1, verify the function's configurations."),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions get \\\n   --tenant test \\\n   --namespace test-namespace \\\n   --name window-example\n")),(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Output")),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "tenant": "test",\n  "namespace": "test-namespace",\n  "name": "window-example",\n  "className": "org.apache.pulsar.functions.api.examples.AddWindowFunction",\n  "inputSpecs": {\n    "test_window_src": {\n      "isRegexPattern": false,\n      "schemaProperties": {},\n      "consumerProperties": {},\n      "poolMessages": false\n    }\n  },\n  "output": "test_window_result",\n  "producerConfig": {\n    "useThreadLocalProducers": false,\n    "batchBuilder": ""\n  },\n  "processingGuarantees": "ATLEAST_ONCE",\n  "retainOrdering": false,\n  "retainKeyOrdering": false,\n  "forwardSourceMessageProperty": true,\n  "userConfig": {},\n  "runtime": "JAVA",\n  "autoAck": false,\n  "parallelism": 1,\n  "resources": {\n    "cpu": 1.0,\n    "ram": 1073741824,\n    "disk": 10737418240\n  },\n  "windowConfig": {\n    "windowLengthCount": 10,\n    "slidingIntervalCount": 5,\n    "actualWindowFunctionClassName": "org.apache.pulsar.functions.api.examples.AddWindowFunction",\n    "processingGuarantees": "ATLEAST_ONCE"\n  },\n  "cleanupSubscription": true,\n  "subscriptionPosition": "Latest"\n}\n'))),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"In the same terminal window as step 1, verify the function\u2019s status."),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions status \\\n   --tenant test \\\n   --namespace test-namespace \\\n   --name window-example\n")),(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Output")),(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},'"running": true')," shows that the function is running."),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n      "error" : "",\n      "numRestarts" : 0,\n      "numReceived" : 0,\n      "numSuccessfullyProcessed" : 0,\n      "numUserExceptions" : 0,\n      "latestUserExceptions" : [ ],\n      "numSystemExceptions" : 0,\n      "latestSystemExceptions" : [ ],\n      "averageLatency" : 0.0,\n      "lastInvocationTime" : 0,\n      "workerId" : "c-standalone-fw-localhost-8080"\n    }\n  } ]\n}\n'))),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"In the same terminal window as step 1, subscribe to the ",(0,s.yg)("strong",{parentName:"p"},"output topic")," ",(0,s.yg)("inlineCode",{parentName:"p"},"test_window_result"),"."),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-client consume -s test-sub -n 0 test_window_result\n"))),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"In a new terminal window, produce messages to the ",(0,s.yg)("strong",{parentName:"p"},"input topic")," ",(0,s.yg)("inlineCode",{parentName:"p"},"test_window_src"),"."),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-bash"},'bin/pulsar-client produce -m "3" -n 10 test_window_src\n'))),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"In the same terminal window as step 1, the messages produced by the window function ",(0,s.yg)("inlineCode",{parentName:"p"},"window-example")," are returned."),(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Output")),(0,s.yg)("pre",{parentName:"li"},(0,s.yg)("code",{parentName:"pre",className:"language-text"},"----- got message -----\nkey:[null], properties:[], content:15\n----- got message -----\nkey:[null], properties:[], content:30\n")))))}c.isMDXComponent=!0}}]);