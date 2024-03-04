"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[97885],{15680:(e,n,o)=>{o.d(n,{xA:()=>p,yg:()=>f});var t=o(96540);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function l(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?l(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)o=l[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)o=l[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var g=t.createContext({}),s=function(e){var n=t.useContext(g),o=n;return e&&(o="function"==typeof e?e(n):r(r({},n),e)),o},p=function(e){var n=s(e.components);return t.createElement(g.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,l=e.originalType,g=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(o),d=a,f=c["".concat(g,".").concat(d)]||c[d]||u[d]||l;return o?t.createElement(f,r(r({ref:n},p),{},{components:o})):t.createElement(f,r({ref:n},p))}));function f(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=o.length,r=new Array(l);r[0]=d;var i={};for(var g in n)hasOwnProperty.call(n,g)&&(i[g]=n[g]);i.originalType=e,i[c]="string"==typeof e?e:a,r[1]=i;for(var s=2;s<l;s++)r[s]=o[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},50628:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>g,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var t=o(58168),a=(o(96540),o(15680));const l={id:"functions-develop-log",title:"Produce function logs",sidebar_label:"Produce function logs"},r=void 0,i={unversionedId:"functions-develop-log",id:"version-2.11.x/functions-develop-log",title:"Produce function logs",description:"Produce logs for Java functions",source:"@site/versioned_docs/version-2.11.x/functions-develop-log.md",sourceDirName:".",slug:"/functions-develop-log",permalink:"/docs/2.11.x/functions-develop-log",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/functions-develop-log.md",tags:[],version:"2.11.x",frontMatter:{id:"functions-develop-log",title:"Produce function logs",sidebar_label:"Produce function logs"},sidebar:"docsSidebar",previous:{title:"Pass user-defined configurations",permalink:"/docs/2.11.x/functions-develop-user-defined-configs"},next:{title:"Use metrics to monitor functions",permalink:"/docs/2.11.x/functions-develop-metrics"}},g={},s=[{value:"Produce logs for Java functions",id:"produce-logs-for-java-functions",level:2},{value:"Customize log levels for Java functions",id:"customize-log-levels-for-java-functions",level:3},{value:"Produce logs for Python functions",id:"produce-logs-for-python-functions",level:2},{value:"Produce logs for Go functions",id:"produce-logs-for-go-functions",level:2}],p={toc:s},c="wrapper";function u(e){let{components:n,...o}=e;return(0,a.yg)(c,(0,t.A)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"produce-logs-for-java-functions"},"Produce logs for Java functions"),(0,a.yg)("p",null,"Pulsar Functions that use the Java SDK have access to an ",(0,a.yg)("a",{parentName:"p",href:"https://www.slf4j.org/api/org/apache/log4j/Logger.html"},"SLF4j ",(0,a.yg)("inlineCode",{parentName:"a"},"Logger"))," object. The logger object can be used to produce logs at a specified log level."),(0,a.yg)("p",null,"For example, the following function logs either a ",(0,a.yg)("inlineCode",{parentName:"p"},"WARNING"),"- or ",(0,a.yg)("inlineCode",{parentName:"p"},"INFO"),"-level log based on whether the incoming string contains the word ",(0,a.yg)("inlineCode",{parentName:"p"},"danger"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\nimport org.slf4j.Logger;\n\npublic class LoggingFunction implements Function<String, Void> {\n    @Override\n    public void apply(String input, Context context) {\n        Logger LOG = context.getLogger();\n        String messageId = new String(context.getMessageId());\n\n        if (input.contains("danger")) {\n            LOG.warn("A warning was received in message {}", messageId);\n        } else {\n            LOG.info("Message {} received\\nContent: {}", messageId, input);\n        }\n\n        return null;\n    }\n}\n')),(0,a.yg)("p",null,"To enable your function to produce logs, you need to specify a log topic when creating or running the function. The following is an example."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions create \\\n  --jar my-functions.jar \\\n  --classname my.package.LoggingFunction \\\n  --log-topic persistent://public/default/logging-function-logs \\\n  # Other function configs\n")),(0,a.yg)("p",null,"You can access all the logs produced by ",(0,a.yg)("inlineCode",{parentName:"p"},"LoggingFunction")," via the ",(0,a.yg)("inlineCode",{parentName:"p"},"persistent://public/default/logging-function-logs")," topic."),(0,a.yg)("h3",{id:"customize-log-levels-for-java-functions"},"Customize log levels for Java functions"),(0,a.yg)("p",null,"By default, the log level for Java functions is ",(0,a.yg)("inlineCode",{parentName:"p"},"info"),". If you want to customize the log level of your Java functions, for example, change it to ",(0,a.yg)("inlineCode",{parentName:"p"},"debug"),", you can update the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/conf/functions_log4j2.xml"},(0,a.yg)("inlineCode",{parentName:"a"},"functions_log4j2.xml"))," file."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"The ",(0,a.yg)("inlineCode",{parentName:"p"},"functions_log4j2.xml")," file is under your Pulsar configuration directory, for example, ",(0,a.yg)("inlineCode",{parentName:"p"},"/etc/pulsar/")," on bare-metal, or ",(0,a.yg)("inlineCode",{parentName:"p"},"/pulsar/conf")," on Kubernetes.")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Set the value of ",(0,a.yg)("inlineCode",{parentName:"p"},"property"),"."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"     <Property>\n         <name>pulsar.log.level</name>\n         <value>debug</value>\n     </Property>\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Apply the log level to places where they are referenced. In the following example, ",(0,a.yg)("inlineCode",{parentName:"p"},"debug")," applies to all function logs."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"     <Root>\n         <level>${sys:pulsar.log.level}</level>\n         <AppenderRef>\n             <ref>${sys:pulsar.log.appender}</ref>\n             <level>${sys:pulsar.log.level}</level>\n         </AppenderRef>\n     </Root>\n")),(0,a.yg)("p",{parentName:"li"},"To be more selective, you can apply different log levels to different classes or modules. For example:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"     <Logger>\n         <name>com.example.module</name>\n         <level>info</level>\n         <additivity>false</additivity>\n         <AppenderRef>\n             <ref>${sys:pulsar.log.appender}</ref>\n         </AppenderRef>\n     </Logger>\n")),(0,a.yg)("p",{parentName:"li"},"To apply a more verbose log level to a class in the module, you can reference the following example:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"     <Logger>\n         <name>com.example.module.className</name>\n         <level>debug</level>\n         <additivity>false</additivity>\n         <AppenderRef>\n             <ref>Console</ref>\n         </AppenderRef>\n     </Logger>\n")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"additivity")," indicates whether log messages will be duplicated if multiple ",(0,a.yg)("inlineCode",{parentName:"li"},"<Logger>")," entries overlap. Disabling additivity (",(0,a.yg)("inlineCode",{parentName:"li"},"false"),") prevents duplication of log messages when one or more ",(0,a.yg)("inlineCode",{parentName:"li"},"<Logger>")," entries contain classes or modules that overlap."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"AppenderRef")," allows you to output the log to a target specified in the definition of the ",(0,a.yg)("inlineCode",{parentName:"li"},"Appender")," section. For example:")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"   <Console>\n     <name>Console</name>\n     <target>SYSTEM_OUT</target>\n     <PatternLayout>\n       <Pattern>%d{ISO8601_OFFSET_DATE_TIME_HHMM} [%t] %-5level %logger{36} - %msg%n</Pattern>\n     </PatternLayout>\n   </Console>\n")))),(0,a.yg)("h2",{id:"produce-logs-for-python-functions"},"Produce logs for Python functions"),(0,a.yg)("p",null,"Pulsar Functions that use the Python SDK have access to a logger object. The logger object can be used to produce logs at a specified log level."),(0,a.yg)("p",null,"For example, the following function logs either a ",(0,a.yg)("inlineCode",{parentName:"p"},"WARNING"),"- or ",(0,a.yg)("inlineCode",{parentName:"p"},"INFO"),"-level log based on whether the incoming string contains the word ",(0,a.yg)("inlineCode",{parentName:"p"},"danger"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'from pulsar import Function\n\nclass LoggingFunction(Function):\n    def process(self, input, context):\n        logger = context.get_logger()\n        msg_id = context.get_message_id()\n        if \'danger\' in input:\n            logger.warn("A warning was received in message {0}".format(context.get_message_id()))\n        else:\n            logger.info("Message {0} received\\nContent: {1}".format(msg_id, input))\n')),(0,a.yg)("p",null,"To enable your function to produce logs, you need to specify a log topic when creating or running the function. The following is an example."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions create \\\n  --py logging_function.py \\\n  --classname logging_function.LoggingFunction \\\n  --log-topic logging-function-logs \\\n  # Other function configs\n")),(0,a.yg)("p",null,"All logs produced by ",(0,a.yg)("inlineCode",{parentName:"p"},"LoggingFunction")," can be accessed via the ",(0,a.yg)("inlineCode",{parentName:"p"},"logging-function-logs")," topic. Additionally, you can specify the function log levels through ",(0,a.yg)("inlineCode",{parentName:"p"},"context.get_logger().setLevel(level)"),". For more information, refer to ",(0,a.yg)("a",{parentName:"p",href:"https://docs.python.org/3/library/logging.html#logging.Logger.setLevel"},"Log facility for Python")," ."),(0,a.yg)("h2",{id:"produce-logs-for-go-functions"},"Produce logs for Go functions"),(0,a.yg)("p",null,"When you use ",(0,a.yg)("inlineCode",{parentName:"p"},"logTopic")," related functionalities in Go functions, you can import ",(0,a.yg)("inlineCode",{parentName:"p"},"github.com/apache/pulsar/pulsar-function-go/logutil")," rather than using the ",(0,a.yg)("inlineCode",{parentName:"p"},"getLogger()")," context object."),(0,a.yg)("p",null,"The following function shows different log levels based on the function input."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n\n    "github.com/apache/pulsar/pulsar-function-go/pf"\n\n    log "github.com/apache/pulsar/pulsar-function-go/logutil"\n)\n\nfunc loggerFunc(ctx context.Context, input []byte) {\n    if len(input) <= 100 {\n        log.Infof("This input has a length of: %d", len(input))\n    } else {\n        log.Warnf("This input is getting too long! It has {%d} characters", len(input))\n    }\n}\n\nfunc main() {\n    pf.Start(loggerFunc)\n}\n')))}u.isMDXComponent=!0}}]);