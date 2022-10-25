"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[37663],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return t?a.createElement(h,l(l({ref:n},u),{},{components:t})):a.createElement(h,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<s;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(67294),r=t(86010);const s="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),r=t(67294),s=t(86010),l=t(72389),o=t(67392),i=t(7094),c=t(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var n;const{lazy:t,block:l,defaultValue:d,values:m,groupId:h,className:g}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??k.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),f=(0,o.l)(b,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)??k[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,i.U)(),[C,w]=(0,r.useState)(y),P=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=h){const e=v[h];null!=e&&e!==C&&b.some((n=>n.value===e))&&w(e)}const T=e=>{const n=e.currentTarget,t=P.indexOf(n),a=b[t].value;a!==C&&(x(n),w(a),null!=h&&N(h,String(a)))},S=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=P.indexOf(e.currentTarget)+1;t=P[n]??P[0];break}case"ArrowLeft":{const n=P.indexOf(e.currentTarget)-1;t=P[n]??P[P.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},g)},b.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:e=>P.push(e),onKeyDown:S,onFocus:T,onClick:T},l,{className:(0,s.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":C===n})}),t??n)}))),t?(0,r.cloneElement)(k.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==C})))))}function m(e){const n=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},58495:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=t(87462),r=(t(67294),t(3905)),s=t(65488),l=t(85162);const o={id:"client-libraries-cpp",title:"Pulsar C++ client",sidebar_label:"C++"},i=void 0,c={unversionedId:"client-libraries-cpp",id:"client-libraries-cpp",title:"Pulsar C++ client",description:"You can use a Pulsar C++ client to create producers, consumers, and readers.",source:"@site/docs/client-libraries-cpp.md",sourceDirName:".",slug:"/client-libraries-cpp",permalink:"/docs/next/client-libraries-cpp",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/client-libraries-cpp.md",tags:[],version:"current",frontMatter:{id:"client-libraries-cpp",title:"Pulsar C++ client",sidebar_label:"C++"},sidebar:"docsSidebar",previous:{title:"Python",permalink:"/docs/next/client-libraries-python"},next:{title:"Node.js",permalink:"/docs/next/client-libraries-node"}},u={},p=[{value:"Installation",id:"installation",level:2},{value:"Brew",id:"brew",level:3},{value:"Deb",id:"deb",level:3},{value:"RPM",id:"rpm",level:3},{value:"Source",id:"source",level:3},{value:"Connection URLs",id:"connection-urls",level:2},{value:"Create a producer",id:"create-a-producer",level:2},{value:"Simple blocking example",id:"simple-blocking-example",level:3},{value:"Non-blocking example",id:"non-blocking-example",level:3},{value:"Partitioned topics and lazy producers",id:"partitioned-topics-and-lazy-producers",level:3},{value:"Enable chunking",id:"enable-chunking",level:3},{value:"Create a consumer",id:"create-a-consumer",level:2},{value:"Blocking example",id:"blocking-example",level:3},{value:"Consumer with a message listener",id:"consumer-with-a-message-listener",level:3},{value:"Configure chunking",id:"configure-chunking",level:3},{value:"Enable authentication in connection URLs",id:"enable-authentication-in-connection-urls",level:2},{value:"Schema",id:"schema",level:2},{value:"Avro schema",id:"avro-schema",level:3},{value:"ProtobufNative schema",id:"protobufnative-schema",level:3}],d={toc:p};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can use a Pulsar C++ client to create producers, consumers, and readers."),(0,r.kt)("p",null,"All the methods in producer, consumer, and reader of a C++ client are thread-safe. You can read the ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/cpp/2.10.0-SNAPSHOT"},"API docs")," for the C++ client."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Use one of the following methods to install a Pulsar C++ client."),(0,r.kt)("h3",{id:"brew"},"Brew"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"http://brew.sh/"},"Homebrew")," to install the latest tagged version with the library and headers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install libpulsar\n")),(0,r.kt)("h3",{id:"deb"},"Deb"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download any one of the Deb packages:")),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"client",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://www.apache.org/dyn/mirrors/mirrors.cgi?action=download&filename=pulsar/pulsar-2.10.2/DEB/apache-pulsar-client.deb\n")),(0,r.kt)("p",null,"This package contains shared libraries ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.so")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsarnossl.so"),".")),(0,r.kt)(l.Z,{value:"client-devel",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://www.apache.org/dyn/mirrors/mirrors.cgi?action=download&filename=pulsar/pulsar-2.10.2/DEB/apache-pulsar-client-dev.deb\n")),(0,r.kt)("p",null,"This package contains static libraries: ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.a"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsarwithdeps.a")," and C/C++ headers."))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install the package using the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install ./apache-pulsar-client*.deb\n")),(0,r.kt)("p",null,"Now, you can see Pulsar C++ client libraries installed under the ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib")," directory."),(0,r.kt)("h3",{id:"rpm"},"RPM"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download any one of the RPM packages:")),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"client",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-2.10.2/RPMS/apache-pulsar-client-2.10.2-1.x86_64.rpm\n")),(0,r.kt)("p",null,"This package contains shared libraries: ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.so")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsarnossl.so"),".")),(0,r.kt)(l.Z,{value:"client-debuginfo",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-2.10.2/RPMS/apache-pulsar-client-debuginfo-2.10.2-1.x86_64.rpm\n")),(0,r.kt)("p",null,"This package contains debug symbols for ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.so"))),(0,r.kt)(l.Z,{value:"client-devel",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-2.10.2/RPMS/apache-pulsar-client-devel-2.10.2-1.x86_64.rpm\n")),(0,r.kt)("p",null,"This package contains static libraries: ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.a"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsarwithdeps.a")," and C/C++ headers."))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install the package using the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rpm -ivh apache-pulsar-client*.rpm\n")),(0,r.kt)("p",null,"Now, you can see Pulsar C++ client libraries installed under the ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib")," directory."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'If you get an error like "libpulsar.so: cannot open shared object file: No such file or directory" when starting a Pulsar client, you need to run ',(0,r.kt)("inlineCode",{parentName:"p"},"ldconfig")," first.")),(0,r.kt)("h3",{id:"source"},"Source"),(0,r.kt)("p",null,"For how to build Pulsar C++ client on different platforms from source code, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-cpp#compilation"},"compliation"),"."),(0,r.kt)("h2",{id:"connection-urls"},"Connection URLs"),(0,r.kt)("p",null,"To connect to Pulsar using client libraries, you need to specify a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/developing-binary-protocol"},"Pulsar protocol")," URL."),(0,r.kt)("p",null,"You can assign Pulsar protocol URLs to specific clusters and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar")," scheme. The following is an example of ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," with the default port ",(0,r.kt)("inlineCode",{parentName:"p"},"6650"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"pulsar://localhost:6650\n")),(0,r.kt)("p",null,"If you have multiple brokers, separate ",(0,r.kt)("inlineCode",{parentName:"p"},"IP:port")," by commas:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"pulsar://localhost:6550,localhost:6651,localhost:6652\n")),(0,r.kt)("p",null,"If you use ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/security-tls-authentication"},"TLS")," authentication, add ",(0,r.kt)("inlineCode",{parentName:"p"},"+ssl")," in the scheme:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"pulsar+ssl://pulsar.us-west.example.com:6651\n")),(0,r.kt)("h2",{id:"create-a-producer"},"Create a producer"),(0,r.kt)("p",null,"To use Pulsar as a producer, you need to create a producer on the C++ client. There are two main ways of using a producer:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#simple-blocking-example"},"Blocking style")," : each call to ",(0,r.kt)("inlineCode",{parentName:"li"},"send")," waits for an ack from the broker."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#non-blocking-example"},"Non-blocking asynchronous style")," : ",(0,r.kt)("inlineCode",{parentName:"li"},"sendAsync")," is called instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"send")," and a callback is supplied for when the ack is received from the broker.")),(0,r.kt)("h3",{id:"simple-blocking-example"},"Simple blocking example"),(0,r.kt)("p",null,"This example sends 100 messages using the blocking style. While simple, it does not produce high throughput as it waits for each ack to come back before sending the next message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <pulsar/Client.h>\n#include <thread>\n\nusing namespace pulsar;\n\nint main() {\n    Client client("pulsar://localhost:6650");\n\n    Producer producer;\n\n    Result result = client.createProducer("persistent://public/default/my-topic", producer);\n    if (result != ResultOk) {\n        std::cout << "Error creating producer: " << result << std::endl;\n        return -1;\n    }\n\n    // Send 100 messages synchronously\n    int ctr = 0;\n    while (ctr < 100) {\n        std::string content = "msg" + std::to_string(ctr);\n        Message msg = MessageBuilder().setContent(content).setProperty("x", "1").build();\n        Result result = producer.send(msg);\n        if (result != ResultOk) {\n            std::cout << "The message " << content << " could not be sent, received code: " << result << std::endl;\n        } else {\n            std::cout << "The message " << content << " sent successfully" << std::endl;\n        }\n\n        std::this_thread::sleep_for(std::chrono::milliseconds(100));\n        ctr++;\n    }\n\n    std::cout << "Finished producing synchronously!" << std::endl;\n\n    client.close();\n    return 0;\n}\n')),(0,r.kt)("h3",{id:"non-blocking-example"},"Non-blocking example"),(0,r.kt)("p",null,"This example sends 100 messages using the non-blocking style calling ",(0,r.kt)("inlineCode",{parentName:"p"},"sendAsync")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"send"),". This allows the producer to have multiple messages in-flight at a time which increases throughput."),(0,r.kt)("p",null,"The producer configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"blockIfQueueFull")," is useful here to avoid ",(0,r.kt)("inlineCode",{parentName:"p"},"ResultProducerQueueIsFull")," errors when the internal queue for outgoing send requests becomes full. Once the internal queue is full, ",(0,r.kt)("inlineCode",{parentName:"p"},"sendAsync")," becomes blocking which can make your code simpler."),(0,r.kt)("p",null,"Without this configuration, the result code ",(0,r.kt)("inlineCode",{parentName:"p"},"ResultProducerQueueIsFull")," is passed to the callback. You must decide how to deal with that (retry, discard etc)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <pulsar/Client.h>\n#include <thread>\n#include <atomic>\n\nusing namespace pulsar;\n\nstd::atomic<uint32_t> acksReceived;\n\nvoid callback(Result code, const MessageId& msgId, std::string msgContent) {\n    // message processing logic here\n    std::cout << "Received ack for msg: " << msgContent << " with code: "\n        << code << " -- MsgID: " << msgId << std::endl;\n    acksReceived++;\n}\n\nint main() {\n    Client client("pulsar://localhost:6650");\n\n    ProducerConfiguration producerConf;\n    producerConf.setBlockIfQueueFull(true);\n    Producer producer;\n    Result result = client.createProducer("persistent://public/default/my-topic",\n                                          producerConf, producer);\n    if (result != ResultOk) {\n        std::cout << "Error creating producer: " << result << std::endl;\n        return -1;\n    }\n\n    // Send 100 messages asynchronously\n    int ctr = 0;\n    while (ctr < 100) {\n        std::string content = "msg" + std::to_string(ctr);\n        Message msg = MessageBuilder().setContent(content).setProperty("x", "1").build();\n        producer.sendAsync(msg, std::bind(callback,\n                                          std::placeholders::_1, std::placeholders::_2, content));\n\n        std::this_thread::sleep_for(std::chrono::milliseconds(100));\n        ctr++;\n    }\n\n    // wait for 100 messages to be acked\n    while (acksReceived < 100) {\n        std::this_thread::sleep_for(std::chrono::milliseconds(100));\n    }\n\n    std::cout << "Finished producing asynchronously!" << std::endl;\n\n    client.close();\n    return 0;\n}\n')),(0,r.kt)("h3",{id:"partitioned-topics-and-lazy-producers"},"Partitioned topics and lazy producers"),(0,r.kt)("p",null,"When scaling out a Pulsar topic, you may configure a topic to have hundreds of partitions. Likewise, you may have also scaled out your producers so there are hundreds or even thousands of producers. This can put some strain on the Pulsar brokers as when you create a producer on a partitioned topic, internally it creates one internal producer per partition which involves communications to the brokers for each one. So for a topic with 1000 partitions and 1000 producers, it ends up creating 1,000,000 internal producers across the producer applications, each of which has to communicate with a broker to find out which broker it should connect to and then perform the connection handshake."),(0,r.kt)("p",null,"You can reduce the load caused by this combination of a large number of partitions and many producers by doing the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"use SinglePartition partition routing mode (this ensures that all messages are only sent to a single, randomly selected partition)"),(0,r.kt)("li",{parentName:"ul"},"use non-keyed messages (when messages are keyed, routing is based on the hash of the key and so messages will end up being sent to multiple partitions)"),(0,r.kt)("li",{parentName:"ul"},"use lazy producers (this ensures that an internal producer is only created on demand when a message needs to be routed to a partition)")),(0,r.kt)("p",null,"With our example above, that reduces the number of internal producers spread out over the 1000 producer apps from 1,000,000 to just 1000."),(0,r.kt)("p",null,"Note that there can be extra latency for the first message sent. If you set a low send timeout, this timeout could be reached if the initial connection handshake is slow to complete."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"ProducerConfiguration producerConf;\nproducerConf.setPartitionsRoutingMode(ProducerConfiguration::UseSinglePartition);\nproducerConf.setLazyStartPartitionedProducers(true);\n")),(0,r.kt)("h3",{id:"enable-chunking"},"Enable chunking"),(0,r.kt)("p",null,"Message ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/concepts-messaging#chunking"},"chunking")," enables Pulsar to process large payload messages by splitting the message into chunks at the producer side and aggregating chunked messages at the consumer side."),(0,r.kt)("p",null,"The message chunking feature is OFF by default. The following is an example about how to enable message chunking when creating a producer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'ProducerConfiguration conf;\nconf.setBatchingEnabled(false);\nconf.setChunkingEnabled(true);\nProducer producer;\nclient.createProducer("my-topic", conf, producer);\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To enable chunking, you need to disable batching (",(0,r.kt)("inlineCode",{parentName:"p"},"setBatchingEnabled"),"=",(0,r.kt)("inlineCode",{parentName:"p"},"false"),") concurrently.")),(0,r.kt)("h2",{id:"create-a-consumer"},"Create a consumer"),(0,r.kt)("p",null,"To use Pulsar as a consumer, you need to create a consumer on the C++ client. There are two main ways of using the consumer:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#blocking-example"},"Blocking style"),": synchronously calling ",(0,r.kt)("inlineCode",{parentName:"li"},"receive(msg)"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#consumer-with-a-message-listener"},"Non-blocking")," (event-based) style: using a message listener.")),(0,r.kt)("h3",{id:"blocking-example"},"Blocking example"),(0,r.kt)("p",null,"The benefit of this approach is that it is the simplest code. Simply keeps calling ",(0,r.kt)("inlineCode",{parentName:"p"},"receive(msg)")," which blocks until a message is received."),(0,r.kt)("p",null,"This example starts a subscription at the earliest offset and consumes 100 messages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <pulsar/Client.h>\n\nusing namespace pulsar;\n\nint main() {\n    Client client("pulsar://localhost:6650");\n\n    Consumer consumer;\n    ConsumerConfiguration config;\n    config.setSubscriptionInitialPosition(InitialPositionEarliest);\n    Result result = client.subscribe("persistent://public/default/my-topic", "consumer-1", config, consumer);\n    if (result != ResultOk) {\n        std::cout << "Failed to subscribe: " << result << std::endl;\n        return -1;\n    }\n\n    Message msg;\n    int ctr = 0;\n    // consume 100 messages\n    while (ctr < 100) {\n        consumer.receive(msg);\n        std::cout << "Received: " << msg\n            << "  with payload \'" << msg.getDataAsString() << "\'" << std::endl;\n\n        consumer.acknowledge(msg);\n        ctr++;\n    }\n\n    std::cout << "Finished consuming synchronously!" << std::endl;\n\n    client.close();\n    return 0;\n}\n')),(0,r.kt)("h3",{id:"consumer-with-a-message-listener"},"Consumer with a message listener"),(0,r.kt)("p",null,"You can avoid running a loop by blocking calls with an event-based style by using a message listener which is invoked for each message that is received."),(0,r.kt)("p",null,"This example starts a subscription at the earliest offset and consumes 100 messages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <pulsar/Client.h>\n#include <atomic>\n#include <thread>\n\nusing namespace pulsar;\n\nstd::atomic<uint32_t> messagesReceived;\n\nvoid handleAckComplete(Result res) {\n    std::cout << "Ack res: " << res << std::endl;\n}\n\nvoid listener(Consumer consumer, const Message& msg) {\n    std::cout << "Got message " << msg << " with content \'" << msg.getDataAsString() << "\'" << std::endl;\n    messagesReceived++;\n    consumer.acknowledgeAsync(msg.getMessageId(), handleAckComplete);\n}\n\nint main() {\n    Client client("pulsar://localhost:6650");\n\n    Consumer consumer;\n    ConsumerConfiguration config;\n    config.setMessageListener(listener);\n    config.setSubscriptionInitialPosition(InitialPositionEarliest);\n    Result result = client.subscribe("persistent://public/default/my-topic", "consumer-1", config, consumer);\n    if (result != ResultOk) {\n        std::cout << "Failed to subscribe: " << result << std::endl;\n        return -1;\n    }\n\n    // wait for 100 messages to be consumed\n    while (messagesReceived < 100) {\n        std::this_thread::sleep_for(std::chrono::milliseconds(100));\n    }\n\n    std::cout << "Finished consuming asynchronously!" << std::endl;\n\n    client.close();\n    return 0;\n}\n')),(0,r.kt)("h3",{id:"configure-chunking"},"Configure chunking"),(0,r.kt)("p",null,"You can limit the maximum number of chunked messages a consumer maintains concurrently by configuring the ",(0,r.kt)("inlineCode",{parentName:"p"},"setMaxPendingChunkedMessage")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"setAutoAckOldestChunkedMessageOnQueueFull")," parameters. When the threshold is reached, the consumer drops pending messages by silently acknowledging them or asking the broker to redeliver them later."),(0,r.kt)("p",null,"The following is an example of how to configure message chunking."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'ConsumerConfiguration conf;\nconf.setAutoAckOldestChunkedMessageOnQueueFull(true);\nconf.setMaxPendingChunkedMessage(100);\nConsumer consumer;\nclient.subscribe("my-topic", "my-sub", conf, consumer);\n')),(0,r.kt)("h2",{id:"enable-authentication-in-connection-urls"},"Enable authentication in connection URLs"),(0,r.kt)("p",null,"If you use TLS authentication when connecting to Pulsar, you need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"ssl")," in the connection URLs, and the default port is ",(0,r.kt)("inlineCode",{parentName:"p"},"6651"),". The following is an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'ClientConfiguration config = ClientConfiguration();\nconfig.setUseTls(true);\nconfig.setTlsTrustCertsFilePath("/path/to/cacert.pem");\nconfig.setTlsAllowInsecureConnection(false);\nconfig.setAuth(pulsar::AuthTls::create(\n            "/path/to/client-cert.pem", "/path/to/client-key.pem"););\n\nClient client("pulsar+ssl://my-broker.com:6651", config);\n')),(0,r.kt)("p",null,"For complete examples, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-cpp/tree/main/examples"},"C++ client examples"),"."),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("p",null,"This section describes some examples about schema. For more information about schema, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/schema-get-started"},"Pulsar schema"),"."),(0,r.kt)("h3",{id:"avro-schema"},"Avro schema"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The following example shows how to create a producer with an Avro schema."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'static const std::string exampleSchema =\n    "{\\"type\\":\\"record\\",\\"name\\":\\"Example\\",\\"namespace\\":\\"test\\","\n    "\\"fields\\":[{\\"name\\":\\"a\\",\\"type\\":\\"int\\"},{\\"name\\":\\"b\\",\\"type\\":\\"int\\"}]}";\nProducer producer;\nProducerConfiguration producerConf;\nproducerConf.setSchema(SchemaInfo(AVRO, "Avro", exampleSchema));\nclient.createProducer("topic-avro", producerConf, producer);\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The following example shows how to create a consumer with an Avro schema."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'static const std::string exampleSchema =\n    "{\\"type\\":\\"record\\",\\"name\\":\\"Example\\",\\"namespace\\":\\"test\\","\n    "\\"fields\\":[{\\"name\\":\\"a\\",\\"type\\":\\"int\\"},{\\"name\\":\\"b\\",\\"type\\":\\"int\\"}]}";\nConsumerConfiguration consumerConf;\nConsumer consumer;\nconsumerConf.setSchema(SchemaInfo(AVRO, "Avro", exampleSchema));\nclient.subscribe("topic-avro", "sub-2", consumerConf, consumer)\n')))),(0,r.kt)("h3",{id:"protobufnative-schema"},"ProtobufNative schema"),(0,r.kt)("p",null,"The following example shows how to create a producer and a consumer with a ProtobufNative schema."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," class using Protobuf3 or later versions."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\nmessage User {\n    string name = 1;\n    int32 age = 2;\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Include the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProtobufNativeSchema.h")," in your source code. Ensure the Protobuf dependency has been added to your project."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <pulsar/ProtobufNativeSchema.h>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a producer to send a ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," instance."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'ProducerConfiguration producerConf;\nproducerConf.setSchema(createProtobufNativeSchema(User::GetDescriptor()));\nProducer producer;\nclient.createProducer("topic-protobuf", producerConf, producer);\nUser user;\nuser.set_name("my-name");\nuser.set_age(10);\nstd::string content;\nuser.SerializeToString(&content);\nproducer.send(MessageBuilder().setContent(content).build());\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a consumer to receive a ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," instance."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'ConsumerConfiguration consumerConf;\nconsumerConf.setSchema(createProtobufNativeSchema(User::GetDescriptor()));\nconsumerConf.setSubscriptionInitialPosition(InitialPositionEarliest);\nConsumer consumer;\nclient.subscribe("topic-protobuf", "my-sub", consumerConf, consumer);\nMessage msg;\nconsumer.receive(msg);\nUser user2;\nuser2.ParseFromArray(msg.getData(), msg.getLength());\n')))))}m.isMDXComponent=!0}}]);