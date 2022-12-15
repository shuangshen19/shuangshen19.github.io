"use strict";(self.webpackChunkcs_639_website=self.webpackChunkcs_639_website||[]).push([[641],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(a),g=n,u=p["".concat(l,".").concat(g)]||p[g]||m[g]||i;return a?r.createElement(u,s(s({ref:t},d),{},{components:a})):r.createElement(u,s({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},7509:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=a(7462),n=(a(7294),a(3905)),i=a(4996);const s={sidebar_position:4},o="Evaluation",l={unversionedId:"evaluation",id:"evaluation",title:"Evaluation",description:"Our goal is to achieve the result presented in Kindling the Darkness: A Practical Low-light Image Enhancer[5] from Zhang et al. For example, given the input(left image), the paper's model could generate the corresponding result shown as the right image.",source:"@site/docs/4-evaluation.md",sourceDirName:".",slug:"/evaluation",permalink:"/CS639-Website/docs/evaluation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/4-evaluation.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Method",permalink:"/CS639-Website/docs/Method"},next:{title:"Conclusion & Future Work",permalink:"/CS639-Website/docs/conclusion"}},c={},d=[{value:"Objective Evaluations",id:"objective-evaluations",level:2},{value:"Quantitative Results",id:"quantitative-results",level:3},{value:"Subjective Evaluations",id:"subjective-evaluations",level:2},{value:"Result of Different Ratio",id:"result-of-different-ratio",level:3},{value:"Artifacts",id:"artifacts",level:3},{value:"Same Model with Our Photos",id:"same-model-with-our-photos",level:3}],p={toc:d};function m(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"evaluation"},"Evaluation"),(0,n.kt)("p",null,"Our goal is to achieve the result presented in ",(0,n.kt)("em",{parentName:"p"},"Kindling the Darkness: A Practical Low-light Image Enhancer"),"[5]"," from Zhang et al. For example, given the input(left image), the paper's model could generate the corresponding result shown as the right image."),(0,n.kt)("img",{src:(0,i.Z)("img/kinD_paper_result.png")}),(0,n.kt)("p",null,"We evaluated the results by objective and subjective methods. For the objective evaluations, we computed PSNR and SSIM. They are commonly used metrics for image quality. PSNR is the ",(0,n.kt)("em",{parentName:"p"},"peak-signal-to-noise ratio"),". Higher PSNR indicates that result images are closer to the ground truths. SSIM is ",(0,n.kt)("em",{parentName:"p"},"structural similarity index")," measure, which shows the similarity between structures of two images. Higher SSIM is better. Although these two objective metrics are popular, they can\u2019t reflect the visual perception of humans. Therefore, we also compared input images, ground truths, and output images by simply using our eyes. By placing those images side-by-side, we can tell whether there are any artifacts, like color inconsistency or over-enhancement on output images. We also added extra functionality for adjusting ratio for illumination and evaluation performance using PSNR and SSIM."),(0,n.kt)("h2",{id:"objective-evaluations"},"Objective Evaluations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"PSNR"),": Peak signal to noise ratio is an engineering expression term for the ratio between the maximum possible value (power) of a signal and the power of corrupting/distorting noise that affects the fidelity of its representation. Because many signals have a very wide ",(0,n.kt)("strong",{parentName:"li"},"dynamic range"),", PSNR is usually expressed as a logarithmic quantity using the decibel scale."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SSIM"),": structural similarity index is a perceptual metric that quantifies image quality degradation caused by processing such as data compression or by losses in data transmission.")),(0,n.kt)("h3",{id:"quantitative-results"},"Quantitative Results"),(0,n.kt)("p",null,"We used PSNR and SSIM with high light image as target."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:"center"},"PSNR"),(0,n.kt)("th",{parentName:"tr",align:"center"},"SSIM"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"without enhancement"),(0,n.kt)("td",{parentName:"tr",align:"center"},"7.77"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.1952")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"with enhancement"),(0,n.kt)("td",{parentName:"tr",align:"center"},"18.5"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.8016")))),(0,n.kt)("h2",{id:"subjective-evaluations"},"Subjective Evaluations"),(0,n.kt)("p",null,"The evaluation showed that a higher ratio might get better results and with enhancement implementation, we could get higher PSNR and SSIM which represented better performance."),(0,n.kt)("h3",{id:"result-of-different-ratio"},"Result of Different Ratio"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Input"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Ratio = 2"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Ratio = 3"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Ratio = 4"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Ratio = 5"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(4318).Z,width:"600",height:"400"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(6766).Z,width:"600",height:"400"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(487).Z,width:"600",height:"400"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(5256).Z,width:"600",height:"400"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(2694).Z,width:"600",height:"400"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(6119).Z,width:"600",height:"400"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(4398).Z,width:"600",height:"400"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(5315).Z,width:"600",height:"400"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(6785).Z,width:"600",height:"400"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(2050).Z,width:"600",height:"400"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(2925).Z,width:"600",height:"400"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(0).Z,width:"600",height:"400"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(8767).Z,width:"600",height:"400"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(6957).Z,width:"600",height:"400"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(1493).Z,width:"600",height:"400"}))))),(0,n.kt)("h3",{id:"artifacts"},"Artifacts"),(0,n.kt)("p",null,"Evaluation results contained artifacts that showed slightly different colors and halos."),(0,n.kt)("img",{style:{float:"left",width:"50%"},src:a(2003).Z}),(0,n.kt)("img",{style:{float:"right",width:"50%"},src:a(123).Z}),"\xa0",(0,n.kt)("h3",{id:"same-model-with-our-photos"},"Same Model with Our Photos"),(0,n.kt)("p",null,"Camera model: Image captured by Iphone X\nRatio: 5.0"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Decompostion Result"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Illumination Result"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Restoration Result"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(5551).Z,width:"4032",height:"3024"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(927).Z,width:"4032",height:"3024"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(1976).Z,width:"4032",height:"3024"}))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Input"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Output"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(5552).Z,width:"4032",height:"3024"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:a(9690).Z,width:"4032",height:"3024"}))))))}m.isMDXComponent=!0},123:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/final_3_ratio5.0-7dadbb88bc07977eab5a324a69d1eba7.jpg"},2003:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/input_3_ratio2.0-babc9e8e091344edb62ec71b6264e6bb.jpg"},927:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/adjustment_0_ratio5.0-ab620c083b79f37f990a3b0b0fab82bc.jpg"},5552:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/decomp_i_0_ratio5.0-1b6ccc9ef3e48a48d60d8134d70cd756.jpg"},5551:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/decomp_r_0_ratio5.0-44efcefd8843dae903681c5020d2da2c.jpg"},9690:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/final_0_ratio5.0-a9dcbb02a5feb92389ae3f88a80c52ec.jpg"},0:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/final_14_ratio2.0-547613112ad1841bab9a8b5a6ea613a4.jpg"},8767:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/final_14_ratio3.0-1f9d781956f60612beecec7d3fc55ccf.jpg"},6957:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/final_14_ratio4.0-a1d102110b56e16e5ccecf331b296077.jpg"},1493:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/final_14_ratio5.0-46f0c69b24a8b99ec210fd3195b911fb.jpg"},6766:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/final_2_ratio2.0-85596ab00a6fa8e99dea3eae61b8cf0c.jpg"},487:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/final_2_ratio3.0-f38a4decd64562170bfb73eaa3ff861d.jpg"},5256:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/final_2_ratio4.0-df6173f7b1024e248209bc07f5669830.jpg"},2694:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/final_2_ratio5.0-c7fad806f2298e81dc3d796892c96cd2.jpg"},4398:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/final_8_ratio2.0-6f6394b7a7414269f941ed9e0ccd40a9.jpg"},5315:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/final_8_ratio3.0-1817216ed5976ab76ac9120e75dc632b.jpg"},6785:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/final_8_ratio4.0-9e294787d026dfeb72d662a79d02f841.jpg"},2050:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/final_8_ratio5.0-d92265a74718a59349c92e42672621d9.jpg"},2925:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/input_14_ratio2.0-fd9d901bc8e5f0a84bb7427bb8854828.jpg"},4318:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/input_2_ratio2.0-052e5c8eff36d510005ecce38fa97e4c.jpg"},6119:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/input_8_ratio2.0-9ae75e2dee0fdfc2553d09beb6f022eb.jpg"},1976:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/restoration_0_ratio5.0-1fd3f21cf27426644634e8623b689816.jpg"}}]);