(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),i=(n(0),n(192)),l={id:"example1",title:"Building and publishing images",sidebar_label:"Building and publishing images"},o={id:"aws/examples/example1",title:"Building and publishing images",description:"## Running containers",source:"@site/docs/aws/examples/example1.md",permalink:"/docs-and-blog/docs/aws/examples/example1",sidebar_label:"Building and publishing images",sidebar:"someSidebar",previous:{title:"EKS",permalink:"/docs-and-blog/docs/aws/eks"},next:{title:"Multi container with shared data",permalink:"/docs-and-blog/docs/aws/examples/example2"}},c=[{value:"Running containers",id:"running-containers",children:[]},{value:"Pushing to ECR",id:"pushing-to-ecr",children:[]},{value:"Publish with Elastic Beanstalk",id:"publish-with-elastic-beanstalk",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"running-containers"},"Running containers"),Object(i.b)("p",null,"Dockerfile:"),Object(i.b)("p",null,"Create a docker file and a file to copy boo.txt"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-Dockerfile"}),"FROM alpine\nCOPY boo.txt /boo_inside_my_container.txt\n")),Object(i.b)("p",null,"Build an image from alpine distro\n",Object(i.b)("inlineCode",{parentName:"p"},"docker build --tag scare_me .")),Object(i.b)("p",null,"See the image. Here we'll also see an alpine image that is the read-only layer pulled on the docker file (FROM alpine)\n",Object(i.b)("inlineCode",{parentName:"p"},"docker images")),Object(i.b)("p",null,"Run and open a terminal in the container. From the terminal we can cat the txt file copied.\n",Object(i.b)("inlineCode",{parentName:"p"},"docker run -ti scare_me bin/sh")),Object(i.b)("hr",null),Object(i.b)("p",null,"From a Dockerfile of a flask application"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-Dockerfile"}),'FROM python:3.6\nCOPY . /appdir\nWORKDIR /appdir\nRUN pip install Flask==1.0.2\nEXPOSE 5000\nCMD ["python", "app.py"]\n')),Object(i.b)("p",null,"build\n",Object(i.b)("inlineCode",{parentName:"p"},"docker build --tag flask-tutorial .")),Object(i.b)("p",null,"run\n",Object(i.b)("inlineCode",{parentName:"p"},"docker run -d --name flask-tutorial -p 5000:5000 flask-tutorial")),Object(i.b)("h2",{id:"pushing-to-ecr"},"Pushing to ECR"),Object(i.b)("p",null,"login docker to ECR from the cli. Create repo in ECR\n",Object(i.b)("inlineCode",{parentName:"p"},"aws ecr create-repository --repository-name flask-tutorial")),Object(i.b)("p",null,"re tag the image with the repository uri\n",Object(i.b)("inlineCode",{parentName:"p"},"docker tag flask-tutorial:latest 009520672266.dkr.ecr.us-west-2.amazonaws.com/flask-tutorial:latest")),Object(i.b)("p",null,"Push to ECR\n",Object(i.b)("inlineCode",{parentName:"p"},"docker push 009520672266.dkr.ecr.us-west-2.amazonaws.com/flask-tutorial:latest")),Object(i.b)("p",null,"Check\n",Object(i.b)("inlineCode",{parentName:"p"},"aws ecr list-images --repository-name flask-tutorial")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html"}),"https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html")),Object(i.b)("h2",{id:"publish-with-elastic-beanstalk"},"Publish with Elastic Beanstalk"),Object(i.b)("p",null,"zip the app and push it to a new Application in EB with Docker as the platform."),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_docker.html"}),"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_docker.html")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html"}),"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html")))}p.isMDXComponent=!0},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(m,o({ref:t},s,{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);