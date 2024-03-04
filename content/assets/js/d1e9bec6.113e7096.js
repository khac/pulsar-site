"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[29416],{15680:(a,e,r)=>{r.d(e,{xA:()=>u,yg:()=>y});var i=r(96540);function l(a,e,r){return e in a?Object.defineProperty(a,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[e]=r,a}function n(a,e){var r=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.push.apply(r,i)}return r}function t(a){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){l(a,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(r,e))}))}return a}function o(a,e){if(null==a)return{};var r,i,l=function(a,e){if(null==a)return{};var r,i,l={},n=Object.keys(a);for(i=0;i<n.length;i++)r=n[i],e.indexOf(r)>=0||(l[r]=a[r]);return l}(a,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);for(i=0;i<n.length;i++)r=n[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(a,r)&&(l[r]=a[r])}return l}var p=i.createContext({}),s=function(a){var e=i.useContext(p),r=e;return a&&(r="function"==typeof a?a(e):t(t({},e),a)),r},u=function(a){var e=s(a.components);return i.createElement(p.Provider,{value:e},a.children)},c="mdxType",m={inlineCode:"code",wrapper:function(a){var e=a.children;return i.createElement(i.Fragment,{},e)}},g=i.forwardRef((function(a,e){var r=a.components,l=a.mdxType,n=a.originalType,p=a.parentName,u=o(a,["components","mdxType","originalType","parentName"]),c=s(r),g=l,y=c["".concat(p,".").concat(g)]||c[g]||m[g]||n;return r?i.createElement(y,t(t({ref:e},u),{},{components:r})):i.createElement(y,t({ref:e},u))}));function y(a,e){var r=arguments,l=e&&e.mdxType;if("string"==typeof a||l){var n=r.length,t=new Array(n);t[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=a,o[c]="string"==typeof a?a:l,t[1]=o;for(var s=2;s<n;s++)t[s]=r[s];return i.createElement.apply(null,t)}return i.createElement.apply(null,r)}g.displayName="MDXCreateElement"},99201:(a,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>t,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var i=r(58168),l=(r(96540),r(15680));const n={id:"io-connectors",title:"Built-in connector",sidebar_label:"Built-in connector"},t=void 0,o={unversionedId:"io-connectors",id:"version-2.11.x/io-connectors",title:"Built-in connector",description:"Pulsar distribution includes a set of common connectors that have been packaged and tested with the rest of Apache Pulsar. These connectors import and export data from some of the most commonly used data systems.",source:"@site/versioned_docs/version-2.11.x/io-connectors.md",sourceDirName:".",slug:"/io-connectors",permalink:"/docs/2.11.x/io-connectors",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/io-connectors.md",tags:[],version:"2.11.x",frontMatter:{id:"io-connectors",title:"Built-in connector",sidebar_label:"Built-in connector"},sidebar:"docsSidebar",previous:{title:"Debug",permalink:"/docs/2.11.x/io-debug"},next:{title:"CDC connector",permalink:"/docs/2.11.x/io-cdc"}},p={},s=[{value:"Source connector",id:"source-connector",level:2},{value:"Canal",id:"canal",level:3},{value:"Debezium MySQL",id:"debezium-mysql",level:3},{value:"Debezium PostgreSQL",id:"debezium-postgresql",level:3},{value:"Debezium MongoDB",id:"debezium-mongodb",level:3},{value:"Debezium Oracle",id:"debezium-oracle",level:3},{value:"Debezium Microsoft SQL Server",id:"debezium-microsoft-sql-server",level:3},{value:"DynamoDB",id:"dynamodb",level:3},{value:"File",id:"file",level:3},{value:"Flume",id:"flume",level:3},{value:"Twitter firehose",id:"twitter-firehose",level:3},{value:"Kafka",id:"kafka",level:3},{value:"Kinesis",id:"kinesis",level:3},{value:"MongoDB",id:"mongodb",level:3},{value:"Netty",id:"netty",level:3},{value:"NSQ",id:"nsq",level:3},{value:"RabbitMQ",id:"rabbitmq",level:3},{value:"Sink connector",id:"sink-connector",level:2},{value:"Aerospike",id:"aerospike",level:3},{value:"Alluxio",id:"alluxio",level:3},{value:"Cassandra",id:"cassandra",level:3},{value:"ElasticSearch",id:"elasticsearch",level:3},{value:"Flume",id:"flume-1",level:3},{value:"HBase",id:"hbase",level:3},{value:"HDFS2",id:"hdfs2",level:3},{value:"HDFS3",id:"hdfs3",level:3},{value:"HTTP",id:"http",level:3},{value:"InfluxDB",id:"influxdb",level:3},{value:"JDBC ClickHouse",id:"jdbc-clickhouse",level:3},{value:"JDBC MariaDB",id:"jdbc-mariadb",level:3},{value:"JDBC OpenMLDB",id:"jdbc-openmldb",level:3},{value:"JDBC PostgreSQL",id:"jdbc-postgresql",level:3},{value:"JDBC SQLite",id:"jdbc-sqlite",level:3},{value:"Kafka",id:"kafka-1",level:3},{value:"Kinesis",id:"kinesis-1",level:3},{value:"MongoDB",id:"mongodb-1",level:3},{value:"RabbitMQ",id:"rabbitmq-1",level:3},{value:"Redis",id:"redis",level:3},{value:"Solr",id:"solr",level:3}],u={toc:s},c="wrapper";function m(a){let{components:e,...r}=a;return(0,l.yg)(c,(0,i.A)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Pulsar distribution includes a set of common connectors that have been packaged and tested with the rest of Apache Pulsar. These connectors import and export data from some of the most commonly used data systems."),(0,l.yg)("p",null,"Using any of these connectors is as easy as writing a simple connector and running the connector locally or submitting the connector to a Pulsar Functions cluster."),(0,l.yg)("h2",{id:"source-connector"},"Source connector"),(0,l.yg)("p",null,"Pulsar has various source connectors, which are sorted alphabetically as below."),(0,l.yg)("h3",{id:"canal"},"Canal"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-canal-source#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-canal-source#usage"},"Example"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/canal/src/main/java/org/apache/pulsar/io/canal/CanalStringSource.java"},"Java class")))),(0,l.yg)("h3",{id:"debezium-mysql"},"Debezium MySQL"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-debezium-source#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-debezium-source#example-of-mysql"},"Example"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/debezium/mysql/src/main/java/org/apache/pulsar/io/debezium/mysql/DebeziumMysqlSource.java"},"Java class")))),(0,l.yg)("h3",{id:"debezium-postgresql"},"Debezium PostgreSQL"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-debezium-source#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-debezium-source#example-of-postgresql"},"Example"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/debezium/postgres/src/main/java/org/apache/pulsar/io/debezium/postgres/DebeziumPostgresSource.java"},"Java class")))),(0,l.yg)("h3",{id:"debezium-mongodb"},"Debezium MongoDB"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-debezium-source#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-debezium-source#example-of-mongodb"},"Example"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/debezium/mongodb/src/main/java/org/apache/pulsar/io/debezium/mongodb/DebeziumMongoDbSource.java"},"Java class")))),(0,l.yg)("h3",{id:"debezium-oracle"},"Debezium Oracle"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-debezium-source#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-debezium-source#example-of-oracle"},"Example"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/debezium/oracle/src/main/java/org/apache/pulsar/io/debezium/oracle/DebeziumOracleSource.java"},"Java class")))),(0,l.yg)("h3",{id:"debezium-microsoft-sql-server"},"Debezium Microsoft SQL Server"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-debezium-source#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-debezium-source#example-of-microsoft-sql"},"Example"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/debezium/mssql/src/main/java/org/apache/pulsar/io/debezium/mssql/DebeziumMsSqlSource.java"},"Java class")))),(0,l.yg)("h3",{id:"dynamodb"},"DynamoDB"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-dynamodb-source#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/dynamodb/src/main/java/org/apache/pulsar/io/dynamodb/DynamoDBSource.java"},"Java class")))),(0,l.yg)("h3",{id:"file"},"File"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-file-source#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-file-source#usage"},"Example"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/file/src/main/java/org/apache/pulsar/io/file/FileSource.java"},"Java class")))),(0,l.yg)("h3",{id:"flume"},"Flume"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-flume-source#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/flume/src/main/java/org/apache/pulsar/io/flume/FlumeConnector.java"},"Java class")))),(0,l.yg)("h3",{id:"twitter-firehose"},"Twitter firehose"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-twitter-source#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/twitter/src/main/java/org/apache/pulsar/io/twitter/TwitterFireHose.java"},"Java class")))),(0,l.yg)("h3",{id:"kafka"},"Kafka"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-kafka-source#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-kafka-source#usage"},"Example"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/kafka/src/main/java/org/apache/pulsar/io/kafka/KafkaAbstractSource.java"},"Java class")))),(0,l.yg)("h3",{id:"kinesis"},"Kinesis"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-kinesis-source#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/kinesis/src/main/java/org/apache/pulsar/io/kinesis/KinesisSource.java"},"Java class")))),(0,l.yg)("h3",{id:"mongodb"},"MongoDB"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-mongo-source#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/mongo/src/main/java/org/apache/pulsar/io/mongodb/MongoSource.java"},"Java class")))),(0,l.yg)("h3",{id:"netty"},"Netty"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-netty-source#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-netty-source#tcp"},"Example of TCP"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-netty-source#http"},"Example of HTTP"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/netty/src/main/java/org/apache/pulsar/io/netty/NettySource.java"},"Java class")))),(0,l.yg)("h3",{id:"nsq"},"NSQ"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-nsq-source#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/nsq/src/main/java/org/apache/pulsar/io/nsq/NSQSource.java"},"Java class")))),(0,l.yg)("h3",{id:"rabbitmq"},"RabbitMQ"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-rabbitmq-source#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/rabbitmq/src/main/java/org/apache/pulsar/io/rabbitmq/RabbitMQSource.java"},"Java class")))),(0,l.yg)("h2",{id:"sink-connector"},"Sink connector"),(0,l.yg)("p",null,"Pulsar has various sink connectors, which are sorted alphabetically as below."),(0,l.yg)("h3",{id:"aerospike"},"Aerospike"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-aerospike-sink#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/aerospike/src/main/java/org/apache/pulsar/io/aerospike/AerospikeStringSink.java"},"Java class")))),(0,l.yg)("h3",{id:"alluxio"},"Alluxio"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-alluxio#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/alluxio/src/main/java/org/apache/pulsar/io/alluxio/sink/AlluxioSink.java"},"Java class")))),(0,l.yg)("h3",{id:"cassandra"},"Cassandra"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-cassandra-sink#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-cassandra-sink#usage"},"Example"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/cassandra/src/main/java/org/apache/pulsar/io/cassandra/CassandraStringSink.java"},"Java class")))),(0,l.yg)("h3",{id:"elasticsearch"},"ElasticSearch"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-elasticsearch-sink#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/elastic-search/src/main/java/org/apache/pulsar/io/elasticsearch/ElasticSearchSink.java"},"Java class")))),(0,l.yg)("h3",{id:"flume-1"},"Flume"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-flume-sink#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/flume/src/main/java/org/apache/pulsar/io/flume/sink/StringSink.java"},"Java class")))),(0,l.yg)("h3",{id:"hbase"},"HBase"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-hbase-sink#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/hbase/src/main/java/org/apache/pulsar/io/hbase/HbaseAbstractConfig.java"},"Java class")))),(0,l.yg)("h3",{id:"hdfs2"},"HDFS2"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-hdfs2-sink#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/hdfs2/src/main/java/org/apache/pulsar/io/hdfs2/AbstractHdfsConnector.java"},"Java class")))),(0,l.yg)("h3",{id:"hdfs3"},"HDFS3"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-hdfs3-sink#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/hdfs3/src/main/java/org/apache/pulsar/io/hdfs3/AbstractHdfsConnector.java"},"Java class")))),(0,l.yg)("h3",{id:"http"},"HTTP"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-http-sink#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/http/src/main/java/org/apache/pulsar/io/http/HttpSink.java"},"Java class")))),(0,l.yg)("h3",{id:"influxdb"},"InfluxDB"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-influxdb-sink#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/influxdb/src/main/java/org/apache/pulsar/io/influxdb/InfluxDBGenericRecordSink.java"},"Java class")))),(0,l.yg)("h3",{id:"jdbc-clickhouse"},"JDBC ClickHouse"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-jdbc-sink#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-jdbc-sink#example-of-clickhouse"},"Example"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/jdbc/clickhouse/src/main/java/org/apache/pulsar/io/jdbc/ClickHouseJdbcAutoSchemaSink.java"},"Java class")))),(0,l.yg)("h3",{id:"jdbc-mariadb"},"JDBC MariaDB"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-jdbc-sink#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-jdbc-sink#example-of-mariadb"},"Example"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/jdbc/mariadb/src/main/java/org/apache/pulsar/io/jdbc/MariadbJdbcAutoSchemaSink.java"},"Java class")))),(0,l.yg)("h3",{id:"jdbc-openmldb"},"JDBC OpenMLDB"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-jdbc-sink#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-jdbc-sink#example-of-openmldb"},"Example"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/jdbc/openmldb/src/main/java/org/apache/pulsar/io/jdbc/OpenMLDBJdbcAutoSchemaSink.java"},"Java class")))),(0,l.yg)("h3",{id:"jdbc-postgresql"},"JDBC PostgreSQL"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-jdbc-sink#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-jdbc-sink#example-of-postgresql"},"Example"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/jdbc/postgres/src/main/java/org/apache/pulsar/io/jdbc/PostgresJdbcAutoSchemaSink.java"},"Java class")))),(0,l.yg)("h3",{id:"jdbc-sqlite"},"JDBC SQLite"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-jdbc-sink#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-jdbc-sink#example-of-sqlite"},"Example"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/jdbc/sqlite/src/main/java/org/apache/pulsar/io/jdbc/SqliteJdbcAutoSchemaSink.java"},"Java class")))),(0,l.yg)("h3",{id:"kafka-1"},"Kafka"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-kafka-sink#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/kafka/src/main/java/org/apache/pulsar/io/kafka/KafkaAbstractSink.java"},"Java class")))),(0,l.yg)("h3",{id:"kinesis-1"},"Kinesis"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-kinesis-sink#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/kinesis/src/main/java/org/apache/pulsar/io/kinesis/KinesisSink.java"},"Java class")))),(0,l.yg)("h3",{id:"mongodb-1"},"MongoDB"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-mongo-sink#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/mongo/src/main/java/org/apache/pulsar/io/mongodb/MongoSink.java"},"Java class")))),(0,l.yg)("h3",{id:"rabbitmq-1"},"RabbitMQ"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-rabbitmq-sink#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/rabbitmq/src/main/java/org/apache/pulsar/io/rabbitmq/RabbitMQSink.java"},"Java class")))),(0,l.yg)("h3",{id:"redis"},"Redis"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-redis-sink#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/redis/src/main/java/org/apache/pulsar/io/redis/RedisAbstractConfig.java"},"Java class")))),(0,l.yg)("h3",{id:"solr"},"Solr"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/2.11.x/io-solr-sink#configuration"},"Configuration"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/solr/src/main/java/org/apache/pulsar/io/solr/SolrSinkConfig.java"},"Java class")))))}m.isMDXComponent=!0}}]);