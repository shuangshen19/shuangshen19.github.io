"use strict";(self.webpackChunkcs_639_website=self.webpackChunkcs_639_website||[]).push([[719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(n),m=i,u=h["".concat(s,".").concat(m)]||h[m]||p[m]||r;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:3},o="Method",l={unversionedId:"Method",id:"Method",title:"Method",description:"In this project, we adopt KinD algorithm proposed by Zhang et al. [5] to build a low-light image emhancer. It is a CNN-based approach and the original implementation is on TensorFlow. We re-implement the algorithm by using Pytorch and do the experiment on LOLdataset [6]. In this section, we will introduce the network, training scheme, and inference procedure.",source:"@site/docs/3-Method.md",sourceDirName:".",slug:"/Method",permalink:"/CS639-Website/docs/Method",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3-Method.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Related Work",permalink:"/CS639-Website/docs/related-work"},next:{title:"Evaluation",permalink:"/CS639-Website/docs/evaluation"}},s={},c=[{value:"Background: Retinex Theory",id:"background-retinex-theory",level:2},{value:"KinD Network Architecture",id:"kind-network-architecture",level:2},{value:"Layer Decomposition Net",id:"layer-decomposition-net",level:2},{value:"Reflectance Restoration Net",id:"reflectance-restoration-net",level:2},{value:"Illumination Adjustment Net",id:"illumination-adjustment-net",level:2},{value:"Training",id:"training",level:2},{value:"Inference",id:"inference",level:2}],d={toc:c};function h(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"method"},"Method"),(0,i.kt)("p",null,"In this project, we adopt KinD algorithm proposed by Zhang et al. ","[5]"," to build a low-light image emhancer. It is a CNN-based approach and the original implementation is on TensorFlow. We re-implement the algorithm by using Pytorch and do the experiment on LOLdataset ","[6]",". In this section, we will introduce the network, training scheme, and inference procedure."),(0,i.kt)("h2",{id:"background-retinex-theory"},"Background: Retinex Theory"),(0,i.kt)("p",null,"Since the method is based on retinex theory, which was proposed by Edwin H. Land in 1963 and has been applied to many image enhancement applications, we briefly introduce retinex theory here. Retinex theory indicates that an image is a composition of two components, illumination map and reflectance map. The illumination map models the strength of incident light while the reflectance map represents that reflection property of object surface. Figure 3.1 is an example of decomposing an image into illumination map and reflectance map. Since illumination map is the strength of incident light, it looks piece-wise smooth. As for reflectance map, it shows the detail and the texture of objects. Also, noise is on the reflectance map."),(0,i.kt)("p",null,"The intuition of using retinex theory on low-light image enhancement is that if getting illumination map and reflectance map with high quality, it would be easy to raise the brightness of image without amplifying noise. Besides, noise is extracted on reflectance map, so noise reduction is also easier."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:n(382).Z,width:"458",height:"914"})))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Figure 3.1. Example of illumination map and reflectance map ","[5]")))),(0,i.kt)("h2",{id:"kind-network-architecture"},"KinD Network Architecture"),(0,i.kt)("p",null,"KinD is a CNN-based method which first decomposes input image into illumination map and reflectance map by a layer decomposition net. Then, for two maps, it further use two separate networks to complete different tasks. For reflectance map, it uses reflectance restoration net to reduce the degradation. For illumination map, it uses illumination adjustment net to modify the brightness level of illumination net. After two maps are processed, enhanced output can be simply generated by doing element-wise prodcut between reflectance map and illumination map. Figure 3.2 shows the overall architecture."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:n(4577).Z,width:"1924",height:"870"})))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Figure 3.2. Architecture of KinD algorithm ","[5]")))),(0,i.kt)("p",null,"Since there is no ground truth reflectance and illumination, the network is trained by paired high-light and low-light images. Specifically, it use high-light image to guide low-light image."),(0,i.kt)("h2",{id:"layer-decomposition-net"},"Layer Decomposition Net"),(0,i.kt)("p",null,"Layer decomposition net is the first phase of the algorithm. Its task is to learn the decomposition of retinex theory. Its inputs are a high-light image and a low-light image and its outputs are reflectance map and illumination map of high-light image and those of low-light image."),(0,i.kt)("p",null,"There are two branches in this network. One branch is for generating reflectance map and the other is for generating illumination map. The architecture of reflectance branch is U-Net and that of illumination branch is simply 3 convolutional layers. Also, last layer of reflectance branch is passed to illumination branch for excluding texture on illumination map."),(0,i.kt)("p",null,"Figure 3.3 shows loss functions used in layer decomposition net. The first one wants reflectance map of high light and that of low light to be close since the scene is the same. The second one makes illumination becomes piece-wise smooth. The third one wants to preserve strong edges in both illumination maps while depress weak edges. The last one wants the reconstruction to be close to input."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:n(6964).Z,width:"4409",height:"1562"})))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Figure 3.3. Loss functions of layer decomposition net ","[5]")))),(0,i.kt)("p",null,"In our implement, the weight for these loss functions are 0.009, 0.005, 0.2, and 1."),(0,i.kt)("h2",{id:"reflectance-restoration-net"},"Reflectance Restoration Net"),(0,i.kt)("p",null,"Reflectance Restoration net uses high-light reflectance map as target since it has less noise and defect. It tries to align low-light reflectance map to high-light reflectance map to remove noise and degradation. The loss functions for this goal are square l2-norm between reflectance maps of high-light and output, SSIM between reflectance maps of high-light and output, and square l2-norm between gradient of reflectance maps of high-light and output, like figure 3.4 shows."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:n(8423).Z,width:"856",height:"82"})))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Figure 3.4. Loss functions of reflectance restoration net ","[5]")))),(0,i.kt)("p",null,"The input of reflectance restoration net also contains illumination map because strength of degradation depends on illumination. Thus, it is helpful to include illumination map in input."),(0,i.kt)("h2",{id:"illumination-adjustment-net"},"Illumination Adjustment Net"),(0,i.kt)("p",null,"Illumination adjustment net's input is a\nillumination map concatenated with a ratio map. Its goal is to adjust the illumination map by that ratio. During training, it randomly choose high-light or low-light illumination as input and the other as target. Then, the ratio will be average brightness of input illumination over that of target illumination. It further use squre l2-norm between target and output to constraint the training, which is shown in figure 3.5."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:n(8429).Z,width:"612",height:"68"})))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Figure 3.5. Loss functions of illumination adjustment net ","[5]")))),(0,i.kt)("p",null,"During inference, user can set ratio to arbitrary value to indicate the amount of adjustment. We also show effects of different ratios in the evaluation section."),(0,i.kt)("h2",{id:"training"},"Training"),(0,i.kt)("p",null,"As for training, layer decomposition net is trained first. With the trained layer decomposition net, reflectance restoration net and illumination adjustment net can be trainined paralleled."),(0,i.kt)("p",null,"For layer decomposition net, we train it with randomly cropped 48x48 patch and use 400 epoches. For reflectance restoration net, randomly cropped patch is 128x128 and epoches is 1000. Finally, for illumination adjustment net, patch is 48x48 and epoches is 2000. All of them also include data augmentation like random flip and rotation and are trained with Adam optimizer."),(0,i.kt)("h2",{id:"inference"},"Inference"),(0,i.kt)("p",null,"Figure 3.6 show the inference with real data. The ratio in this example is set to 5."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:n(9723).Z,width:"4404",height:"1549"})))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Figure 3.6. Inference flow with real data")))))}h.isMDXComponent=!0},8429:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kind_adjustment_loss-fe2c033d8b536e9d877ac051506548ce.png"},4577:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kind_architecture-24e5f5bf3aa43a0687f5395bd65ca5ff.png"},6964:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kind_decomposition_loss-62d161e7c206788f6473b9e51c488c4b.png"},9723:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kind_inference-754eba28737c789b12b08dd109fa5034.png"},8423:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kind_restoration_loss-9a4bf8feaec52079d2423e847f43c145.png"},382:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kind_retinex_example-ac9b26d03a03efbd4ed2335ee2e831fb.png"}}]);