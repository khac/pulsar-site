"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[79546],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),l=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(u.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=r,y=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return t?a.createElement(y,o(o({ref:n},c),{},{components:t})):a.createElement(y,o({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},14103:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(58168),r=(t(96540),t(15680));const i={id:"functions-runtime-kubernetes",title:"Configure Kubernetes runtime",sidebar_label:"Configure Kubernetes runtime"},o=void 0,s={unversionedId:"functions-runtime-kubernetes",id:"version-2.11.x/functions-runtime-kubernetes",title:"Configure Kubernetes runtime",description:"The Kubernetes runtime works when a function worker generates and applies Kubernetes manifests. The manifests generated by a function worker include:",source:"@site/versioned_docs/version-2.11.x/functions-runtime-kubernetes.md",sourceDirName:".",slug:"/functions-runtime-kubernetes",permalink:"/docs/2.11.x/functions-runtime-kubernetes",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/functions-runtime-kubernetes.md",tags:[],version:"2.11.x",frontMatter:{id:"functions-runtime-kubernetes",title:"Configure Kubernetes runtime",sidebar_label:"Configure Kubernetes runtime"},sidebar:"docsSidebar",previous:{title:"Configure process runtime",permalink:"/docs/2.11.x/functions-runtime-process"},next:{title:"Customize Java runtime options",permalink:"/docs/2.11.x/functions-runtime-java-options"}},u={},l=[{value:"Configure basic settings",id:"configure-basic-settings",level:3},{value:"Integrate Kubernetes secrets",id:"integrate-kubernetes-secrets",level:3},{value:"Enable token authentication",id:"enable-token-authentication",level:3},{value:"Customize Kubernetes runtime",id:"customize-kubernetes-runtime",level:3},{value:"How to define Pulsar resource names when running Pulsar in Kubernetes",id:"how-to-define-pulsar-resource-names-when-running-pulsar-in-kubernetes",level:3}],c={toc:l},p="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The Kubernetes runtime works when a function worker generates and applies Kubernetes manifests. The manifests generated by a function worker include:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"a ",(0,r.yg)("inlineCode",{parentName:"li"},"StatefulSet"),"\nBy default, the ",(0,r.yg)("inlineCode",{parentName:"li"},"StatefulSet")," manifest has a single pod with a number of replicas. The number is determined by the ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.11.x/functions-deploy-cluster-parallelism"},"parallelism")," of the function. The pod downloads the function payload (via the function worker REST API) on pod boot. The pod's container image is configurable if the function runtime is configured."),(0,r.yg)("li",{parentName:"ul"},"a ",(0,r.yg)("inlineCode",{parentName:"li"},"Service")," (used to communicate with the pod)"),(0,r.yg)("li",{parentName:"ul"},"a ",(0,r.yg)("inlineCode",{parentName:"li"},"Secret")," for authenticating credentials (when applicable).\nThe Kubernetes runtime supports secrets. You can create a Kubernetes secret and expose it as an environment variable in the pod.")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"For the rules of translating Pulsar object names into Kubernetes resource labels, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.11.x/admin-api-overview#how-to-define-pulsar-resource-names-when-running-pulsar-in-kubernetes"},"instructions"),".")),(0,r.yg)("h3",{id:"configure-basic-settings"},"Configure basic settings"),(0,r.yg)("p",null,"To quickly configure a Kubernetes runtime, you can use the default settings of ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-functions/runtime/src/main/java/org/apache/pulsar/functions/runtime/kubernetes/KubernetesRuntimeFactoryConfig.java"},(0,r.yg)("inlineCode",{parentName:"a"},"KubernetesRuntimeFactoryConfig"))," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/functions_worker.yml")," file."),(0,r.yg)("p",null,"If you have [set up a Pulsar cluster on Kubernetes using ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.11.x/helm-install"},"Helm chart"),", which means function workers have also been set up on Kubernetes, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"serviceAccount")," associated with the pod where the function worker is running. Otherwise, you can configure function workers to communicate with a Kubernetes cluster by setting ",(0,r.yg)("inlineCode",{parentName:"p"},"functionRuntimeFactoryConfigs")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"k8Uri"),"."),(0,r.yg)("h3",{id:"integrate-kubernetes-secrets"},"Integrate Kubernetes secrets"),(0,r.yg)("p",null,"A ",(0,r.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"Secret")," in Kubernetes is an object that holds some confidential data such as a password, a token, or a key. When you create a secret in the Kubernetes namespace where your functions are deployed, functions can safely reference and distribute it. To enable this feature, set ",(0,r.yg)("inlineCode",{parentName:"p"},"secretsProviderConfiguratorClassName")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.pulsar.functions.secretsproviderconfigurator.KubernetesSecretsProviderConfigurator")," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/functions-worker.yml")," file."),(0,r.yg)("p",null,"For example, you ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.11.x/functions-deploy"},"deploy a function")," to the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-func")," Kubernetes namespace, and you have a secret named ",(0,r.yg)("inlineCode",{parentName:"p"},"database-creds")," with a field name ",(0,r.yg)("inlineCode",{parentName:"p"},"password"),", which you want to mount in the pod as an environment variable named ",(0,r.yg)("inlineCode",{parentName:"p"},"DATABASE_PASSWORD"),". The following configurations enable functions to reference the secret and mount the value as an environment variable in the pod."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'tenant: "mytenant"\nnamespace: "mynamespace"\nname: "myfunction"\ninputs: [ "persistent://mytenant/mynamespace/myfuncinput" ]\nclassName: "com.company.pulsar.myfunction"\n\nsecrets:\n  # the secret will be mounted from the `password` field in the `database-creds` secret as an env var called `DATABASE_PASSWORD`\n  DATABASE_PASSWORD:\n    path: "database-creds"\n    key: "password"\n')),(0,r.yg)("h3",{id:"enable-token-authentication"},"Enable token authentication"),(0,r.yg)("p",null,"When you use token authentication, TLS encryption, or custom authentications to secure the communication with your Pulsar cluster, Pulsar passes your certificate authority (CA) to the client, so the client can authenticate the cluster with your signed certificate."),(0,r.yg)("p",null,"To enable the authentication for your Pulsar cluster, you need to specify a mechanism for the pod running your function to authenticate the broker, by implementing the ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.pulsar.functions.auth.KubernetesFunctionAuthProvider")," interface."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"For token authentication, Pulsar includes an implementation of the above interface to distribute the CA. The function worker captures the token that deploys (or updates) the function, saves it as a secret, and mounts it into the pod."),(0,r.yg)("p",{parentName:"li"},"The configuration in the ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/function-worker.yml")," file is as follows. ",(0,r.yg)("inlineCode",{parentName:"p"},"functionAuthProviderClassName")," is used to specify the path to this implementation."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"functionAuthProviderClassName: org.apache.pulsar.functions.auth.KubernetesSecretsTokenAuthProvider\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"For TLS or custom authentication, you can either implement the ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.pulsar.functions.auth.KubernetesFunctionAuthProvider")," interface or use an alternative mechanism."))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"If the token you use to deploy the function has an expiration date, you may need to deploy the function again after it expires.")),(0,r.yg)("h3",{id:"customize-kubernetes-runtime"},"Customize Kubernetes runtime"),(0,r.yg)("p",null,"Customizing Kubernetes runtime allows you to customize Kubernetes resources created by the runtime, including how to generate manifests, how to pass authenticated data to pods, and how to integrate secrets."),(0,r.yg)("p",null,"To customize Kubernetes runtime, you can set ",(0,r.yg)("inlineCode",{parentName:"p"},"runtimeCustomizerClassName")," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/functions-worker.yml")," file and use the fully qualified class name."),(0,r.yg)("p",null,"The function API provides a flag named ",(0,r.yg)("inlineCode",{parentName:"p"},"customRuntimeOptions"),", which is passed to the ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.pulsar.functions.runtime.kubernetes.KubernetesManifestCustomizer")," interface. To initialize ",(0,r.yg)("inlineCode",{parentName:"p"},"KubernetesManifestCustomizer"),", you can set ",(0,r.yg)("inlineCode",{parentName:"p"},"runtimeCustomizerConfig")," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/functions-worker.yml")," file."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"runtimeCustomizerConfig")," is the same across all functions. If you provide both ",(0,r.yg)("inlineCode",{parentName:"p"},"runtimeCustomizerConfig")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"customRuntimeOptions"),", you need to decide how to manage these two configurations in your implementation of the ",(0,r.yg)("inlineCode",{parentName:"p"},"KubernetesManifestCustomizer")," interface.")),(0,r.yg)("p",null,"Pulsar includes a built-in implementation initialized with ",(0,r.yg)("inlineCode",{parentName:"p"},"runtimeCustomizerConfig"),". It enables you to pass a JSON document as ",(0,r.yg)("inlineCode",{parentName:"p"},"customRuntimeOptions")," with certain properties to augment. To use this built-in implementation, set ",(0,r.yg)("inlineCode",{parentName:"p"},"runtimeCustomizerClassName")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.pulsar.functions.runtime.kubernetes.BasicKubernetesManifestCustomizer"),"."),(0,r.yg)("p",null,"If both ",(0,r.yg)("inlineCode",{parentName:"p"},"runtimeCustomizerConfig")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"customRuntimeOptions")," are provided and have conflicts, ",(0,r.yg)("inlineCode",{parentName:"p"},"BasicKubernetesManifestCustomizer")," uses ",(0,r.yg)("inlineCode",{parentName:"p"},"customRuntimeOptions")," to override ",(0,r.yg)("inlineCode",{parentName:"p"},"runtimeCustomizerConfig"),"."),(0,r.yg)("p",null,"Below is an example of configuring ",(0,r.yg)("inlineCode",{parentName:"p"},"customRuntimeOptions"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "jobName": "jobname", // the k8s pod name to run this function instance\n  "jobNamespace": "namespace", // the k8s namespace to run this function in\n  "extractLabels": {           // extra labels to attach to the statefulSet, service, and pods\n    "extraLabel": "value"\n  },\n  "extraAnnotations": {        // extra annotations to attach to the statefulSet, service, and pods\n    "extraAnnotation": "value"\n  },\n  "nodeSelectorLabels": {      // node selector labels to add on to the pod spec\n    "customLabel": "value"\n  },\n  "tolerations": [             // tolerations to add to the pod spec\n    {\n      "key": "custom-key",\n      "value": "value",\n      "effect": "NoSchedule"\n    }\n  ],\n  "resourceRequirements": {  // values for cpu and memory should be defined as described here: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container\n    "requests": {\n      "cpu": 1,\n      "memory": "4G"\n    },\n    "limits": {\n      "cpu": 2,\n      "memory": "8G"\n    }\n  }\n}\n')),(0,r.yg)("h3",{id:"how-to-define-pulsar-resource-names-when-running-pulsar-in-kubernetes"},"How to define Pulsar resource names when running Pulsar in Kubernetes"),(0,r.yg)("p",null,"If you run Pulsar Functions or connectors on Kubernetes, you need to follow the Kubernetes naming convention to define the names of your Pulsar resources, whichever admin interface you use."),(0,r.yg)("p",null,"Kubernetes requires a name that can be used as a DNS subdomain name as defined in ",(0,r.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names"},"RFC 1123"),". Pulsar supports more legal characters than the Kubernetes naming convention. If you create a Pulsar resource name with special characters that are not supported by Kubernetes (for example, including colons in a Pulsar namespace name), Kubernetes runtime translates the Pulsar object names into Kubernetes resource labels which are in RFC 1123-compliant forms. Consequently, you can run functions or connectors using Kubernetes runtime. The rules for translating Pulsar object names into Kubernetes resource labels are as below:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Truncate to 63 characters")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Replace the following characters with dashes (-):"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Non-alphanumeric characters")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Underscores (_)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Dots (.)")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Replace beginning and ending non-alphanumeric characters with 0"))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"If you get an error in translating Pulsar object names into Kubernetes resource labels (for example, you may have a naming collision if your Pulsar object name is too long) or want to customize the translating rules, see ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.11.x/functions-runtime-kubernetes#customize-kubernetes-runtime"},"customize Kubernetes runtime"),"."),(0,r.yg)("li",{parentName:"ul"},"For how to configure Kubernetes runtime, see ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.11.x/functions-runtime-kubernetes"},"instructions"),"."))))}m.isMDXComponent=!0}}]);