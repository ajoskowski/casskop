/*! For license information please see 6a43430a.3b22d9dc.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{159:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(1),r=a(9),l=(a(0),a(193)),c=a(199),o=a(200),i={id:"0_customizable_install_with_helm",title:"Customizable install with Helm",sidebar_label:"Customizable install with Helm"},b={id:"3_configuration_deployment/0_customizable_install_with_helm",title:"Customizable install with Helm",description:"import Tabs from '@theme/Tabs';",source:"@site/docs/3_configuration_deployment/0_customizable_install_with_helm.md",permalink:"/casskop/docs/3_configuration_deployment/0_customizable_install_with_helm",editUrl:"https://github.com/Orange-OpenSource//casskop/edit/master/website/docs/3_configuration_deployment/0_customizable_install_with_helm.md",sidebar_label:"Customizable install with Helm",sidebar:"docs",previous:{title:"MiniKube",permalink:"/casskop/docs/2_setup/2_platform_setup/2_minikube"},next:{title:"Cassandra Cluster",permalink:"/casskop/docs/3_configuration_deployment/1_cassandra_cluster"}},s=[{value:"Introduction",id:"introduction",children:[{value:"Configuration",id:"configuration",children:[]},{value:"Installing the Chart",id:"installing-the-chart",children:[]},{value:"Listing deployed charts",id:"listing-deployed-charts",children:[]},{value:"Get status for the helm deployment",id:"get-status-for-the-helm-deployment",children:[]}]},{value:"Install another version of the operator",id:"install-another-version-of-the-operator",children:[]},{value:"Uninstaling the Charts",id:"uninstaling-the-charts",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Install of the CRD",id:"install-of-the-crd",children:[]}]}],u={rightToc:s};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This Helm chart installs CassKop to create/configure/manage Cassandra\nclusters in a Kubernetes Namespace.\nIt will use a Custom Ressource Definition(CRD): ",Object(l.b)("inlineCode",{parentName:"p"},"cassandraclusters.db.orange.com"),"\nwhich implements a ",Object(l.b)("inlineCode",{parentName:"p"},"CassandraCluster")," object in Kubernetes."),Object(l.b)("h2",{id:"introduction"},"Introduction"),Object(l.b)("h3",{id:"configuration"},"Configuration"),Object(l.b)("p",null,"The following tables lists the configurable parameters of the Cassandra Operator Helm chart and their default values."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"image.repository")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Image"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"orangeopensource/casskop"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"image.tag")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Image tag"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"0.5.1-master"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"image.pullPolicy")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Image pull policy"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Always"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"image.imagePullSecrets.enabled")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable the use of secret for docker image"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"image.imagePullSecrets.name")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the secret to connect to docker registry"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"rbacEnable")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, create & use RBAC resources"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"resources")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pod resource requests & limits"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"{}"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"metricService")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"deploy service for metrics"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"debug.enabled")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"activate DEBUG log level"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"false"))))),Object(l.b)("p",null,"Specify each parameter using the ",Object(l.b)("inlineCode",{parentName:"p"},"--set key=value[,key=value]")," argument to ",Object(l.b)("inlineCode",{parentName:"p"},"helm install"),"."),Object(l.b)("p",null,"Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart. For example,"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"helm install --name casskop incubator/cassandra-operator -f values.yaml\n")),Object(l.b)("h3",{id:"installing-the-chart"},"Installing the Chart"),Object(l.b)("div",{className:"admonition admonition-important"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Helm 3 users")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"You need to manually install the crds beforehand"),Object(l.b)("pre",{parentName:"div"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"kubectl apply -f https://github.com/Orange-OpenSource/casskop/blob/master/deploy/crds/db.orange.com_cassandraclusters_crd.yaml\n")))),Object(l.b)(c.a,{defaultValue:"dryrun",values:[{label:"dry run",value:"dryrun"},{label:"release name",value:"rn"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"dryrun",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install --dry-run \\\n    --debug.enabled orange-incubator/casskop \\\n    --set debug.enabled=true \\\n    --name casskop\n"))),Object(l.b)(o.a,{value:"rn",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install --name casskop orange-incubator/casskop\n")))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"the ",Object(l.b)("inlineCode",{parentName:"p"},"-replace")," flag allow you to reuse a charts release name")),Object(l.b)("h3",{id:"listing-deployed-charts"},"Listing deployed charts"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm list\n")),Object(l.b)("h3",{id:"get-status-for-the-helm-deployment"},"Get status for the helm deployment"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm status casskop\n")),Object(l.b)("h2",{id:"install-another-version-of-the-operator"},"Install another version of the operator"),Object(l.b)("p",null,"To install another version of the operator use:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install --name=casskop --namespace=cassandra --set operator.image.tag=x.y.z orange-incubator/casskop`\n")),Object(l.b)("p",null,"where x.y.z is the version you want."),Object(l.b)("h2",{id:"uninstaling-the-charts"},"Uninstaling the Charts"),Object(l.b)("p",null,"If you want to delete the operator from your Kubernetes cluster, the operator deployment should be deleted."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm delete casskop\n")),Object(l.b)("p",null,"The command removes all the Kubernetes components associated with the chart and deletes the helm release."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"The CRD created by the chart are not removed by default and should be manually cleaned up (if required)")),Object(l.b)("p",null,"Manually delete the CRD:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl delete crd cassandraclusters.dfy.orange.com\n")),Object(l.b)("div",{className:"admonition admonition-warning"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"If you delete the CRD then :\nIt will delete ",Object(l.b)("strong",{parentName:"p"},"ALL")," Clusters that has been created using this CRD!!!\nPlease never delete a CRD without very very good care"))),Object(l.b)("p",null,"Helm always keeps records of what releases were installed. Need to see the deleted releases? ",Object(l.b)("inlineCode",{parentName:"p"},"helm list --deleted"),"\nshows those, and ",Object(l.b)("inlineCode",{parentName:"p"},"helm list --all")," shows all of the releases (deleted and currently deployed, as well as releases that\nfailed)"),Object(l.b)("p",null,"Because Helm keeps records of deleted releases, a release name cannot be re-used. (If you really need to re-use a\nrelease name, you can use the ",Object(l.b)("inlineCode",{parentName:"p"},"--replace")," flag, but it will simply re-use the existing release and replace its\nresources.)"),Object(l.b)("p",null,"Note that because releases are preserved in this way, you can rollback a deleted resource, and have it re-activate."),Object(l.b)("p",null,"To purge a release"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"helm delete --purge casskop\n")),Object(l.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(l.b)("h3",{id:"install-of-the-crd"},"Install of the CRD"),Object(l.b)("p",null,"By default, the chart will install the Casskop CRD via a helm hook but this installation is global for the whole\ncluster.You may then deploy a chart with an existing CRD already deployed. In that case you can get an error like :"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'$ helm install --name casskop ./helm/cassandra-operator\nError: customresourcedefinitions.apiextensions.k8s.io "cassandraclusters.db.orange.com" already exists\n')),Object(l.b)("p",null,"In this case there si a parameter to say not to use the hook to install the CRD :"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install --name casskop ./helm/cassandra-operator --no-hooks\n")))}d.isMDXComponent=!0},193:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=s(a),p=n,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||l;return a?r.a.createElement(m,o({ref:t},b,{components:a})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<l;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},194:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===l)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},199:function(e,t,a){"use strict";a(23),a(18),a(19);var n=a(0),r=a.n(n),l=a(194),c=a.n(l),o=a(119),i=a.n(o),b=37,s=39;t.a=function(e){var t=e.block,a=e.children,l=e.defaultValue,o=e.values,u=Object(n.useState)(l),d=u[0],p=u[1],m=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":t})},o.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":d===t,className:c()("tab-item",i.a.tabItem,{"tab-item--active":d===t}),key:t,ref:function(e){return m.push(e)},onKeyDown:function(e){return function(e,t,a){switch(a.keyCode){case s:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(m,e.target,e)},onFocus:function(){return p(t)},onClick:function(){return p(t)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===d}))[0]))}},200:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);