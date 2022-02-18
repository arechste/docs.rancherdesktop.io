"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[337],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(g,i(i({ref:n},s),{},{components:t})):r.createElement(g,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9391:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return v},default:function(){return w},frontMatter:function(){return k},metadata:function(){return b},toc:function(){return y}});var r=t(7462),a=t(3366),o=t(7294),i=t(3905),l=t(2389),u=t(9443);var c=function(){var e=(0,o.useContext)(u.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(3616),d=t(6010),p="tabItem_vU9c";function m(e){var n,t,a,i=e.lazy,l=e.block,u=e.defaultValue,m=e.values,g=e.groupId,f=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,s.lx)(k,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===u?u:null!=(n=null!=u?u:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=h[0])?void 0:a.props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=c(),T=y.tabGroupChoices,w=y.setTabGroupChoices,N=(0,o.useState)(b),x=N[0],I=N[1],C=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var O=T[g];null!=O&&O!==x&&k.some((function(e){return e.value===O}))&&I(O)}var D=function(e){var n=e.currentTarget,t=C.indexOf(n),r=k[t].value;r!==x&&(E(n),I(r),null!=g&&w(g,r))},A=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.currentTarget)+1;t=C[r]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.currentTarget)-1;t=C[a]||C[C.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":l},f)},k.map((function(e){var n=e.value,t=e.label,a=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return C.push(e)},onKeyDown:A,onFocus:D,onClick:D},a,{className:(0,d.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),i?(0,o.cloneElement)(h.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function g(e){var n=(0,l.Z)();return o.createElement(m,(0,r.Z)({key:String(n)},e))}var f=function(e){var n=e.children,t=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:t,className:r},n)},h=["components"],k={title:"Working with Images"},v=void 0,b={unversionedId:"how-to-guides/working-with-images",id:"how-to-guides/working-with-images",title:"Working with Images",description:"Rancher Desktop provides the ability to build, push, and pull images via the",source:"@site/docs/how-to-guides/working-with-images.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/working-with-images",permalink:"/how-to-guides/working-with-images",editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/how-to-guides/working-with-images.md",tags:[],version:"current",frontMatter:{title:"Working with Images"},sidebar:"tutorialSidebar",previous:{title:"VS Code Remote Containers",permalink:"/tutorials/vs-code-remote-containers"},next:{title:"Architecture",permalink:"/references/architecture"}},y=[{value:"General Usage",id:"general-usage",children:[],level:2},{value:"Listing Images",id:"listing-images",children:[],level:2},{value:"Building Images",id:"building-images",children:[],level:2},{value:"Tagging Images",id:"tagging-images",children:[],level:2},{value:"Removing Images",id:"removing-images",children:[],level:2}],T={toc:y};function w(e){var n=e.components,t=(0,a.Z)(e,h);return(0,i.kt)("wrapper",(0,r.Z)({},T,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rancher Desktop provides the ability to build, push, and pull images via the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/containerd/nerdctl"},"NERDCTL")," project and the Docker CLI."),(0,i.kt)("p",null,"Note, both ",(0,i.kt)("inlineCode",{parentName:"p"},"nerdctl")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," are put into the path automatically. This occurs during the installer on Windows, and upon first run on macOS and Linux."),(0,i.kt)("h2",{id:"general-usage"},"General Usage"),(0,i.kt)("p",null,"Using either tool requires Rancher Desktop to be running with the appropriate container runtime. For ",(0,i.kt)("inlineCode",{parentName:"p"},"nerdctl"),", use the containerd runtime. For ",(0,i.kt)("inlineCode",{parentName:"p"},"docker"),", use the Moby runtime."),(0,i.kt)("p",null,"You can learn about all of the command options and display the help documentation by running:"),(0,i.kt)(g,{groupId:"container-runtime",mdxType:"Tabs"},(0,i.kt)(f,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl -h\n")),(0,i.kt)("p",null,"The initial set of images are stored in the same containerd that Kubernetes uses,\nand are part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.io")," namespace. You can also switch to a namespace called\n",(0,i.kt)("inlineCode",{parentName:"p"},"default")," if you wish to build or pull images into a different namespace. Currently\nthe only way to create other namespaces is to build or pull an image with the\n",(0,i.kt)("inlineCode",{parentName:"p"},"nerdctl")," CLI, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--namespace <NAMESPACE_NAME>")," option.")),(0,i.kt)(f,{value:"docker",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"docker --help\n")))),(0,i.kt)("h2",{id:"listing-images"},"Listing Images"),(0,i.kt)("p",null,"To see the images currently available, run the following command:"),(0,i.kt)(g,{groupId:"container-runtime",mdxType:"Tabs"},(0,i.kt)(f,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl images\n"))),(0,i.kt)(f,{value:"docker",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"docker images\n")))),(0,i.kt)("h2",{id:"building-images"},"Building Images"),(0,i.kt)(g,{groupId:"container-runtime",mdxType:"Tabs"},(0,i.kt)(f,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Building images has a similar feel to existing tools. For example, consider\nrunning ",(0,i.kt)("inlineCode",{parentName:"p"},"nerdctl")," from a directory with a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile")," where the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile")," is\nusing a scratch image."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl build .\n[+] Building 0.1s (4/4) FINISHED\n => [internal] load build definition from Dockerfile\n => => transferring dockerfile: 31B\n => [internal] load .dockerignore\n => => transferring context: 2B\n => [internal] load build context\n => => transferring context: 33B\n => CACHED [1/1] ADD anvil-app /\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"nerdctl")," has options for tagging at the same time as building and other options you've\ncome to expect."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl build -t TAG .\n"))),(0,i.kt)(f,{value:"docker",mdxType:"TabItem"},(0,i.kt)("p",null,"Consider running ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," from a directory with a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile")," where the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile")," is\nusing a scratch image."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"docker build .\nSending build context to Docker daemon  13.93MB\nStep 1/5 : FROM some-repo/some-image\n ---\x3e e57ace221dff\n...\n ---\x3e fd984c4cbf97\nSuccessfully built fd984c4cbf97\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"docker")," has options for tagging at the same time as building and other options you've\ncome to expect."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"docker build -t TAG .\n")))),(0,i.kt)("h2",{id:"tagging-images"},"Tagging Images"),(0,i.kt)("p",null,"If you want to tag an existing image you've built you can use the following\ncommand:"),(0,i.kt)(g,{groupId:"container-runtime",mdxType:"Tabs"},(0,i.kt)(f,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]\n"))),(0,i.kt)(f,{value:"docker",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]\n")))),(0,i.kt)("h2",{id:"removing-images"},"Removing Images"),(0,i.kt)("p",null,"To remove an image, run the following command:"),(0,i.kt)(g,{groupId:"container-runtime",mdxType:"Tabs"},(0,i.kt)(f,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl rmi IMAGE\n"))),(0,i.kt)(f,{value:"docker",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"docker rmi IMAGE\n")))))}w.isMDXComponent=!0}}]);