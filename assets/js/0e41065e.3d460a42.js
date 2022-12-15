"use strict";(self.webpackChunkcs_639_website=self.webpackChunkcs_639_website||[]).push([[833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,u=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?i.createElement(u,o(o({ref:t},h),{},{components:n})):i.createElement(u,o({ref:t},h))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1},o="Introduction",s={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"In this project, the goal is to explore and research how we could use deep learning to enhance low light images. Low-light image enhancement has wild applications in our daily life and in different scientific research fields such as night surveillance, automated driving, fluorescence microscopy, etc. This technique can improve the usefulness of an image to satisfy human viewing. Also, it can make low-light images applicable for applications in autonomous driving, scientific data capture, and general visual enhancement. For example, self-driving car can see humans in the dark environment to prevent accidents from happening with this technology. Therefore, low-light image enhancement is very significant and is worth studying. With more application applied machine/deep learning methods for improvement, we\u2019d like to research how to use deep learning to enhance low-light images.",source:"@site/docs/1-introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/CS639-Website/docs/introduction",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/1-introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Related Work",permalink:"/CS639-Website/docs/related-work"}},l={},c=[{value:"Dataset",id:"dataset",level:2}],h={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In this project, the goal is to explore and research how we could use deep learning to enhance low light images. Low-light image enhancement has wild applications in our daily life and in different scientific research fields such as night surveillance, automated driving, fluorescence microscopy, etc. This technique can improve the usefulness of an image to satisfy human viewing. Also, it can make low-light images applicable for applications in autonomous driving, scientific data capture, and general visual enhancement. For example, self-driving car can see humans in the dark environment to prevent accidents from happening with this technology. Therefore, low-light image enhancement is very significant and is worth studying. With more application applied machine/deep learning methods for improvement, we\u2019d like to research how to use deep learning to enhance low-light images."),(0,a.kt)("p",null,"Regardless of the technological advancements, there is still a long way to improve this task. Low-light images typically suffer from two problems which are low visibility and high noise. Low visibility shows that the image has small pixel values due to few amount of photon, and high noise would dominate and disrupt the image content, so the overall signal-to-noise ratio is low. We are trying to survey as well as implement methods based on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dawnlh/awesome-low-light-image-enhancement"},"Awesome Low Light Image Enhancement")," GitHub repository which provides a list of resources related to low light image enhancement, including datasets, methods, papers, and metrics to see the performance. Overall, we\u2019d like to re-implement a method and then try to add some modifications upon it to see if we could improve the performance."),(0,a.kt)("h2",{id:"dataset"},"Dataset"),(0,a.kt)("p",null,"Our dataset used a total of 485 low-light and high-light paired training images and 15 testing images originally used for Retinex-Net (LOLDataset","[6]","). Here you can see an example of training paired images, the left one is the low-light image and the right one is the high-light image."),(0,a.kt)("img",{style:{float:"left",width:"50%;"},src:"./img/train_low_40.png"}),(0,a.kt)("img",{style:{float:"right",width:"50%;"},src:"./img/train_high_40.png"}))}d.isMDXComponent=!0}}]);