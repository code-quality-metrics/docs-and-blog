(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),o=(n(0),n(186)),c={id:"intro",title:"Introduction",sidebar_label:"Introduction"},i={id:"aws/intro",title:"Introduction",description:"> Virtualization: decouple workloads from the underline hardware. VMs mimic a hardware environment and will need a full OS. Containerization provides an extra layer of virtualization on top of the os.",source:"@site/docs/aws/intro.md",permalink:"/docs-and-blog/docs/aws/intro",sidebar_label:"Introduction",sidebar:"someSidebar",previous:{title:"MFA",permalink:"/docs-and-blog/docs/node/cryptography/mfa"},next:{title:"Building and publishing images",permalink:"/docs-and-blog/docs/aws/examples/example1"}},l=[{value:"Docker",id:"docker",children:[]},{value:"AWS tools",id:"aws-tools",children:[{value:"ECR",id:"ecr",children:[]},{value:"AWS Elastic beanstack",id:"aws-elastic-beanstack",children:[]},{value:"C9",id:"c9",children:[]}]}],s={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Virtualization: decouple workloads from the underline hardware. VMs mimic a hardware environment and will need a full OS. Containerization provides an extra layer of virtualization on top of the os.")),Object(o.b)("p",null,"Containers are more focused."),Object(o.b)("p",null,"Terms:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Container: overall package and environment. It has dependencies and env variables."),Object(o.b)("li",{parentName:"ul"},"Image: the config needed for launching a container."),Object(o.b)("li",{parentName:"ul"},"Registry: repository of images. (docker hub, ECR Elastic Container Registry)")),Object(o.b)("h2",{id:"docker"},"Docker"),Object(o.b)("p",null,"Docker components"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Docker client: CLI for interacting with docker"),Object(o.b)("li",{parentName:"ul"},"Docker ddaemon: manages docker images (performs commands from the cli and provides access to hardware)"),Object(o.b)("li",{parentName:"ul"},"Image registry: same as before"),Object(o.b)("li",{parentName:"ul"},"Docker image are ",Object(o.b)("em",{parentName:"li"},"read only")," artifacts.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"docker file -> docker image (pulled from docker registry) -> docker container (run on docker host)")),Object(o.b)("p",null,"keywords for docker files"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"FROM")," - set base image"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"LABEL")," - set metadata"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"RUN")," - execute commands in a terminal"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"COPY")," - from machine into the image"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"WORKDIR")," - set working directory"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"EXPOSE")," - expose ports"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"ENTRYPOINT")," - what to run when starting the container"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CMD")," - execute at runtime")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/builder/"}),"https://docs.docker.com/engine/reference/builder/")),Object(o.b)("p",null,"cli"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"docker run hello-world # pulls and runs hello world image \n# (-p ports)\ndocker build # builds an image\ndocker images # show created images in the host\ndocker container ls # show containers in the host\ndocker inspect # allows to see the layers of an image\ndocker exev # execute something inside the container\ndocker exec -t id bash # creates a bash in the container\ndocker ps # lists containers\ndocker logs id # show logs\ndocker stop id # stop a container\ndocker rm id # remove container\n")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/commandline/docker/"}),"https://docs.docker.com/engine/reference/commandline/docker/")),Object(o.b)("p",null,"Docker uses a union file system and copy-on-write strategy. The original image is not changed. Each container gets a writable top layer version of the image."),Object(o.b)("p",null,"Persistence in docker should go to volumes."),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/get-started/overview/"}),"https://docs.docker.com/get-started/overview/")),Object(o.b)("h2",{id:"aws-tools"},"AWS tools"),Object(o.b)("h3",{id:"ecr"},"ECR"),Object(o.b)("p",null,"Best option ",Object(o.b)("em",{parentName:"p"},"in AWS")," for image registry. Private docker repos (using IAM) accessed by docker cli."),Object(o.b)("h3",{id:"aws-elastic-beanstack"},"AWS Elastic beanstack"),Object(o.b)("p",null,"autoscaling, app managing, only pay for the underlying resources. It uses ECS under the hood."),Object(o.b)("h3",{id:"c9"},"C9"),Object(o.b)("p",null,"Bought by AWS, IDE integrated in the AWS console."),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/builder/#entrypoint"}),"https://docs.docker.com/engine/reference/builder/#entrypoint"),"\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/builder/#cmd"}),"https://docs.docker.com/engine/reference/builder/#cmd"),"\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/builder"}),"https://docs.docker.com/engine/reference/builder")))}b.isMDXComponent=!0},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},d=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(n),u=r,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return n?a.a.createElement(m,i({ref:t},s,{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);