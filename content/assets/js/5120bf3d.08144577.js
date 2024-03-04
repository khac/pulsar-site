"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[13350],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),f=r,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},19365:(e,n,t)=>{t.d(n,{A:()=>i});var a=t(96540),r=t(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:t},n)}},11470:(e,n,t)=>{t.d(n,{A:()=>x});var a=t(58168),r=t(96540),o=t(20053),i=t(23104),s=t(56347),l=t(57485),u=t(31682),c=t(89466);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function y(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=p(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[l,u]=g({queryString:t,groupId:a}),[d,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),m=(()=>{const e=l??d;return f({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{m&&s(m)}),[m]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),y(e)}),[u,y,o]),tabValues:o}}var m=t(92303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),p=e=>{const n=e.currentTarget,t=c.indexOf(n),a=u[t].value;a!==s&&(d(n),l(a))},f=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>c.push(e),onKeyDown:f,onClick:p},i,{className:(0,o.A)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":s===n})}),t??n)})))}function b(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function w(e){const n=y(e);return r.createElement("div",{className:(0,o.A)("tabs-container",h.tabList)},r.createElement(v,(0,a.A)({},e,n)),r.createElement(b,(0,a.A)({},e,n)))}function x(e){const n=(0,m.A)();return r.createElement(w,(0,a.A)({key:String(n)},e))}},9885:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=t(58168),r=(t(96540),t(15680)),o=t(11470),i=t(19365);const s={id:"functions-develop-user-defined-configs",title:"Pass user-defined configurations",sidebar_label:"Pass user-defined configurations"},l=void 0,u={unversionedId:"functions-develop-user-defined-configs",id:"version-2.11.x/functions-develop-user-defined-configs",title:"Pass user-defined configurations",description:"When you run or update functions created via SDK, you can pass arbitrary key/value pairs to them by using CLI with the --user-config flag. Key/value pairs must be specified as JSON.",source:"@site/versioned_docs/version-2.11.x/functions-develop-user-defined-configs.md",sourceDirName:".",slug:"/functions-develop-user-defined-configs",permalink:"/docs/2.11.x/functions-develop-user-defined-configs",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/functions-develop-user-defined-configs.md",tags:[],version:"2.11.x",frontMatter:{id:"functions-develop-user-defined-configs",title:"Pass user-defined configurations",sidebar_label:"Pass user-defined configurations"},sidebar:"docsSidebar",previous:{title:"Use APIs",permalink:"/docs/2.11.x/functions-develop-api"},next:{title:"Produce function logs",permalink:"/docs/2.11.x/functions-develop-log"}},c={},d=[],p={toc:d},f="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(f,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"When you run or update functions created via SDK, you can pass arbitrary key/value pairs to them by using CLI with the ",(0,r.yg)("inlineCode",{parentName:"p"},"--user-config")," flag. Key/value pairs must be specified as JSON."),(0,r.yg)(o.A,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"Go",value:"Go"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Java",mdxType:"TabItem"},(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"For all key/value pairs passed to Java functions, both keys and values are ",(0,r.yg)("inlineCode",{parentName:"p"},"string"),". To set the value to be a different type, you need to deserialize it from the ",(0,r.yg)("inlineCode",{parentName:"p"},"string")," type.")),(0,r.yg)("p",null,"The context object of Java SDK enables you to access key/value pairs provided to Pulsar Functions via CLI (as JSON). The following example passes a key/value pair."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'bin/pulsar-admin functions create \\\n  # Other function configs\n  --user-config \'{"word-of-the-day":"verdure"}\'\n')),(0,r.yg)("p",null,"To access that value in a Java function:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\nimport org.slf4j.Logger;\n\nimport java.util.Optional;\n\npublic class UserConfigFunction implements Function<String, Void> {\n    @Override\n    public void apply(String input, Context context) {\n        Logger LOG = context.getLogger();\n        Optional<String> wotd = context.getUserConfigValue("word-of-the-day");\n        if (wotd.isPresent()) {\n            LOG.info("The word of the day is {}", wotd);\n        } else {\n            LOG.warn("No word of the day provided");\n        }\n        return null;\n    }\n}\n')),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"UserConfigFunction")," function logs the string ",(0,r.yg)("inlineCode",{parentName:"p"},'"The word of the day is verdure"')," every time the function is invoked. The ",(0,r.yg)("inlineCode",{parentName:"p"},"word-of-the-day")," config can be changed only when the function is updated with a new value via the CLI."),(0,r.yg)("p",null,"You can also access the entire user config map or set a default value in case no value is present."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'// Get the whole config map\nMap<String, String> allConfigs = context.getUserConfigMap();\n\n// Get value or resort to default\nString wotd = context.getUserConfigValueOrDefault("word-of-the-day", "perspicacious");\n'))),(0,r.yg)(i.A,{value:"Python",mdxType:"TabItem"},(0,r.yg)("p",null,"In a Python function, you can access the configuration value like this."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'from pulsar import Function\n\nclass WordFilter(Function):\n    def process(self, context, input):\n        forbidden_word = context.user_config()["forbidden-word"]\n\n        # Don\'t publish the message if it contains the user-supplied\n        # forbidden word\n        if forbidden_word in input:\n            pass\n        # Otherwise publish the message\n        else:\n            return input\n')),(0,r.yg)("p",null,"The context object of Python SDK enables you to access key/value pairs provided to functions via the command line (as JSON). The following example passes a key/value pair."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'bin/pulsar-admin functions create \\\n  # Other function configs \\\n  --user-config \'{"word-of-the-day":"verdure"}\'\n')),(0,r.yg)("p",null,"To access that value in a Python function:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"from pulsar import Function\n\nclass UserConfigFunction(Function):\n    def process(self, input, context):\n        logger = context.get_logger()\n        wotd = context.get_user_config_value('word-of-the-day')\n        if wotd is None:\n            logger.warn('No word of the day provided')\n        else:\n            logger.info(\"The word of the day is {0}\".format(wotd))\n"))),(0,r.yg)(i.A,{value:"Go",mdxType:"TabItem"},(0,r.yg)("p",null,"The context object of Go SDK enables you to access key/value pairs provided to functions via the command line (as JSON). The following example passes a key/value pair."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'bin/pulsar-admin functions create \\\n  --go path/to/go/binary\n  --user-config \'{"word-of-the-day":"lackadaisical"}\'\n')),(0,r.yg)("p",null,"To access that value in a Go function:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'func contextFunc(ctx context.Context) {\n  fc, ok := pf.FromContext(ctx)\n  if !ok {\n    logutil.Fatal("Function context is not defined")\n  }\n\n  wotd := fc.GetUserConfValue("word-of-the-day")\n\n  if wotd == nil {\n    logutil.Warn("The word of the day is empty")\n  } else {\n    logutil.Infof("The word of the day is %s", wotd.(string))\n  }\n}\n')))))}g.isMDXComponent=!0}}]);