"use strict";(self.webpackChunk_lottus_ed_components=self.webpackChunk_lottus_ed_components||[]).push([[751],{"../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}})},"./src/organisms/Carrusel/Carrusel.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},carrusel:function(){return carrusel},default:function(){return Carrusel_stories}});var objectSpread2=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("../../node_modules/react/index.js"),Controls=__webpack_require__("./src/atoms/Controls/Controls.js"),swiper_react=__webpack_require__("../../node_modules/swiper/react/swiper-react.js"),swiper_esm=__webpack_require__("../../node_modules/swiper/swiper.esm.js"),Card=__webpack_require__("./src/organisms/Card/Card.js"),Aspect=__webpack_require__("./src/atoms/Aspect/Aspect.js"),jsx_runtime=(__webpack_require__("../../node_modules/swiper/swiper-bundle.min.css"),__webpack_require__("../../node_modules/react/jsx-runtime.js")),defaultValues={variant:"img"},Carrusel=function Carrusel(_ref){var data=_ref.data,_ref$variant=_ref.variant,variant=void 0===_ref$variant?defaultValues.variant:_ref$variant,naviPrevRef=(0,react.useRef)(null),navNextRef=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("div",{className:"w-full h-full  absolute hidden lg:flex px-28 ",children:[(0,jsx_runtime.jsx)("div",{ref:naviPrevRef,className:" absolute bottom-1/2 left-16 hidden lg:flex bg-neutral-100 hover:shadow-lg hover:shadow-neutral-500 rounded-lg",children:(0,jsx_runtime.jsx)(Controls.Z,{iconName:"arrow_back_ios"})}),(0,jsx_runtime.jsx)("div",{ref:navNextRef,className:"absolute bottom-1/2 right-16 hidden lg:flex bg-neutral-100 hover:shadow-lg hover:shadow-neutral-500 rounded-lg",children:(0,jsx_runtime.jsx)(Controls.Z,{iconName:"arrow_forward_ios"})}),(0,jsx_runtime.jsx)(swiper_react.tq,{navigation:{nextEl:navNextRef.current,prevEl:naviPrevRef.current},loop:!0,onSwiper:function onSwiper(swiper){setTimeout((function(){swiper.params.navigation.prevEl=naviPrevRef.current,swiper.params.navigation.nextEl=navNextRef.current,swiper.navigation.destroy(),swiper.navigation.init(),swiper.navigation.update()}))},pagination:{clickable:!0,horizontalClass:"ccIndicators",bulletClass:"ccBullets",bulletActiveClass:"ccBulletsActive"},slidesPerView:3,spaceBetween:24,slidesPerGroupSkip:3,modules:[swiper_esm.W_,swiper_esm.tl],className:"slides",children:(0,jsx_runtime.jsx)("div",{className:" flex flex-row",children:null==data?void 0:data.map((function(card,indexCard){return"img"===variant?(0,jsx_runtime.jsx)(swiper_react.o5,{children:(0,jsx_runtime.jsx)("div",{className:"w-full h-fit align-top items-top justify-center pb-6",children:(0,jsx_runtime.jsx)("div",{className:"w-full h-fit relative flex pb-6",children:(0,jsx_runtime.jsx)(Aspect.Z,{ratio:"1/1",children:(0,jsx_runtime.jsx)("img",{className:"w-full h-full object-cover object-center",src:null==card?void 0:card.imageUrl,alt:"card-img"})})})})},indexCard):(0,jsx_runtime.jsx)(swiper_react.o5,{children:(0,jsx_runtime.jsx)("div",{className:"w-full h-full align-top items-top justify-center pb-6 flex ",children:(0,jsx_runtime.jsx)("div",{className:"w-full h-full relative flex pb-6 ",children:(0,jsx_runtime.jsx)(Card.Z,{imageUrl:null==card?void 0:card.imageUrl,title:null==card?void 0:card.title,text:null==card?void 0:card.text,subtitle:null==card?void 0:card.subtitle,type:"vertical",aspectRatio:"2/1",link:null==card?void 0:card.link})})})},indexCard)}))})})]}),(0,jsx_runtime.jsx)("div",{className:"w-full h-fit absolute hidden lg:hidden md:flex ",children:(0,jsx_runtime.jsx)(swiper_react.tq,{loop:!0,pagination:{clickable:!0,horizontalClass:"ccIndicators",bulletClass:"ccBullets",bulletActiveClass:"ccBulletsActive"},slidesPerView:2,spaceBetween:24,centeredSlides:!0,modules:[swiper_esm.tl],className:"slides",watchSlidesProgress:!0,children:null==data?void 0:data.map((function(card,indexCard){return"img"===variant?(0,jsx_runtime.jsx)(swiper_react.o5,{children:(0,jsx_runtime.jsx)("div",{className:"w-full h-fit align-top items-top justify-center pb-6",children:(0,jsx_runtime.jsx)("div",{className:"w-full h-fit relative flex pb-6",children:(0,jsx_runtime.jsx)(Aspect.Z,{ratio:"1/1",children:(0,jsx_runtime.jsx)("img",{className:"w-full h-full object-cover object-center",src:null==card?void 0:card.imageUrl,alt:"card-img"})})})})},indexCard):(0,jsx_runtime.jsx)(swiper_react.o5,{children:(0,jsx_runtime.jsx)("div",{className:"w-full h-fit align-top items-top justify-center pb-6 ",children:(0,jsx_runtime.jsx)("div",{className:"w-full h-fit relative flex pb-6",children:(0,jsx_runtime.jsx)(Card.Z,{imageUrl:null==card?void 0:card.imageUrl,title:null==card?void 0:card.title,text:null==card?void 0:card.text,subtitle:null==card?void 0:card.subtitle,type:"vertical",aspectRatio:"2/1",link:null==card?void 0:card.link})})})},indexCard)}))})}),(0,jsx_runtime.jsx)("div",{className:"w-full h-fit absolute  md:hidden sm:flex px-10",children:(0,jsx_runtime.jsx)(swiper_react.tq,{loop:!0,pagination:{clickable:!0,horizontalClass:"ccIndicators",bulletClass:"ccBullets",bulletActiveClass:"ccBulletsActive"},slidesPerView:1,spaceBetween:32,modules:[swiper_esm.tl],className:"slides",watchSlidesProgress:!0,children:null==data?void 0:data.map((function(card,indexCard){return"img"===variant?(0,jsx_runtime.jsx)(swiper_react.o5,{children:(0,jsx_runtime.jsx)("div",{className:"w-full h-fit align-top items-top justify-center pb-6 ",children:(0,jsx_runtime.jsx)("div",{className:"w-full h-fit relative flex pb-6",children:(0,jsx_runtime.jsx)(Aspect.Z,{ratio:"1/1",children:(0,jsx_runtime.jsx)("img",{className:"w-full h-full object-cover object-center",src:null==card?void 0:card.imageUrl,alt:"card-img"})})})})},indexCard):(0,jsx_runtime.jsx)(swiper_react.o5,{children:(0,jsx_runtime.jsx)("div",{className:"w-full h-fit align-top items-top justify-center pb-6 ",children:(0,jsx_runtime.jsx)("div",{className:"w-full h-fit relative flex pb-6",children:(0,jsx_runtime.jsx)(Card.Z,{imageUrl:null==card?void 0:card.imageUrl,title:null==card?void 0:card.title,text:null==card?void 0:card.text,subtitle:null==card?void 0:card.subtitle,type:"vertical",aspectRatio:"2/1",link:null==card?void 0:card.link})})})},indexCard)}))})})]})};Carrusel.defaultProps=defaultValues,Carrusel.__docgenInfo={description:"",methods:[],displayName:"Carrusel",props:{variant:{defaultValue:{value:'"img"',computed:!1},description:"",type:{name:"enum",computed:!0,value:'"img"'},required:!1},data:{description:"",type:{name:"array"},required:!1}}};var Carrusel_Carrusel=Carrusel,Carrusel_stories={title:"Carrusel",component:Carrusel_Carrusel,tags:["autodocs"],args:{data:[{imageUrl:"https://wallpapercave.com/wp/wp2599594.jpg",title:"Demo Card 1",text:"Lorem ipsum dolor sit amet consectetur. Urna curabitur sit faucibus vitae. Elit dignissim tempus pharetra risus porta in phasellus magnis pellentesque.",subtitle:"Subtitle 1",link:{label:"Ver más",route:"https://jonsuh.com/hamburgers/"}},{imageUrl:"https://wallpapercave.com/wp/wp2599594.jpg",title:"Demo Card 2",text:"Demo Card content 2",subtitle:"Subtitle 2",link:{label:"Ver más",route:"https://jonsuh.com/hamburgers/"}},{imageUrl:"https://wallpapercave.com/wp/wp2599594.jpg",title:"Demo Card 3",text:"Demo Card 3",subtitle:"Subtitle 3",link:{label:"Ver más",route:"https://jonsuh.com/hamburgers/"}},{imageUrl:"https://wallpapercave.com/wp/wp2599594.jpg",title:"Demo Card 4",text:"Demo Card 4",subtitle:"Subtitle 4",link:{label:"Ver más",route:"https://jonsuh.com/hamburgers/"}},{imageUrl:"https://wallpapercave.com/wp/wp2599594.jpg",title:"Demo Card 5",text:"Demo Card 5",subtitle:"Subtitle 5",link:{label:"Ver más",route:"https://jonsuh.com/hamburgers/"}},{imageUrl:"https://wallpapercave.com/wp/wp2599594.jpg",title:"Demo Card 6",text:"Demo Card 6",subtitle:"Subtitle 6",link:{label:"Ver más",route:"https://jonsuh.com/hamburgers/"}},{imageUrl:"https://wallpapercave.com/wp/wp2599594.jpg",title:"Demo Card 7",text:"Demo Card 7",subtitle:"Subtitle 7",link:{label:"Ver más",route:"https://jonsuh.com/hamburgers/"}}],variant:"card"},argTypes:{variant:{options:["img","card"],control:{type:"radio"}}}},carrusel=function Template(args){return(0,jsx_runtime.jsx)(Carrusel_Carrusel,(0,objectSpread2.Z)({},args))}.bind({}),__namedExportsOrder=["carrusel"]},"./src/atoms/Aspect/Aspect.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Aspect_Aspect}});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),fractionRegex=/([1-9][0-9]*(.[0-9]*)?)\/[1-9][0-9]*(.[0-9]*)?/g,defaultValues={ratio:"1/2"},Aspect=function Aspect(_ref){var _ref$ratio=_ref.ratio,ratio=void 0===_ref$ratio?defaultValues.ratio:_ref$ratio,children=_ref.children,aspectRatioPercentage=function calculateAspectRatioPercentage(ratio,fractionRegex,defaultRatioPercentage){if(fractionRegex.test(ratio)){var fraction=!!ratio.match(fractionRegex)&&ratio.match(fractionRegex)[0],numerator=Number(fraction?fraction.split("/")[0]:1),denominator=Number(fraction?fraction.split("/")[1]:0),roundedNumerator=Math.floor(numerator),roundedDenominator=Math.floor(denominator);return"".concat(roundedDenominator/roundedNumerator*100,"%")}return defaultRatioPercentage}(ratio,fractionRegex,"50%"),paddingStyles={paddingTop:aspectRatioPercentage};return(0,jsx_runtime.jsx)("div",{style:paddingStyles,className:"relative w-full h-0",children:(0,jsx_runtime.jsx)("div",{className:"w-full h-full absolute top-0 left-0 overflow-hidden",children:children})})};Aspect.defaultProps=defaultValues,Aspect.__docgenInfo={description:"",methods:[],displayName:"Aspect",props:{ratio:{defaultValue:{value:'"1/2"',computed:!1},description:"",type:{name:"string"},required:!1}}};var Aspect_Aspect=Aspect},"./src/atoms/Controls/Controls.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/atoms/Icon/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),commonClasses=classnames__WEBPACK_IMPORTED_MODULE_1___default()(" cursor-pointer flex justify-center text-center items-center rounded-2 "),Controls=function Controls(_ref){var iconName=_ref.iconName;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:commonClasses,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"font-icons text-neutral-900 inset-y-2/4 z-10 select-none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_0__.Z,{iconName:iconName})})})};Controls.__docgenInfo={description:"",methods:[],displayName:"Controls"},__webpack_exports__.Z=Controls},"./src/atoms/Heading/Heading.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),fonts={principal:classnames__WEBPACK_IMPORTED_MODULE_0___default()("font-principal"),secondary:classnames__WEBPACK_IMPORTED_MODULE_0___default()("font-secondary")},types={"h-1":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-4xl md:text-6xl lg:text-7xl font-extrabold"),"h-2":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-2xl md:text-4xl lg:text-6xl font-extrabold"),"h-3":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-2xl lg:text-5xl md:text-3xl md:font-extrabold font-bold"),"h-4":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-xxl md:text-3xl font-bold"),"h-5":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-base lg:text-xl font-bold"),"h-6":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-base lg:text-lg font-semibold")},variants={primary:classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-neutral-500"),negative:classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-neutral-100")},defaultValues={type:"h-1",variant:"normal",font:"principal",className:""},Heading=function Heading(_ref){var _cn,title=_ref.title,_ref$type=_ref.type,type=void 0===_ref$type?defaultValues.type:_ref$type,_ref$variant=_ref.variant,variant=void 0===_ref$variant?defaultValues.variant:_ref$variant,_ref$font=_ref.font,font=void 0===_ref$font?defaultValues.font:_ref$font,_ref$className=_ref.className,className=void 0===_ref$className?defaultValues.className:_ref$className,headingClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,(_cn={},(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_cn,[null==fonts?void 0:fonts[font]],font),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_cn,[null==types?void 0:types[type]],type),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_cn,[null==variants?void 0:variants[variant]],variant),_cn));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:headingClasses,children:title})};Heading.defaultProps=defaultValues,Heading.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{type:{defaultValue:{value:'"h-1"',computed:!1},description:"",type:{name:"enum",value:[{value:'"h-1"',computed:!1},{value:'"h-2"',computed:!1},{value:'"h-3"',computed:!1},{value:'"h-4"',computed:!1},{value:'"h-5"',computed:!1},{value:'"h-6"',computed:!1}]},required:!1},variant:{defaultValue:{value:'"normal"',computed:!1},description:"",type:{name:"enum",value:[{value:'"normal"',computed:!1},{value:'"primary"',computed:!1},{value:'"negative"',computed:!1}]},required:!1},font:{defaultValue:{value:'"principal"',computed:!1},description:"",type:{name:"enum",value:[{value:'"principal"',computed:!1},{value:'"secondary"',computed:!1}]},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1}}},__webpack_exports__.Z=Heading},"./src/atoms/Icon/Icon.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),defaultValues={className:"",type:"solid"},Icon=function Icon(_ref){var _cn,iconName=_ref.iconName,_ref$className=_ref.className,className=void 0===_ref$className?defaultValues.className:_ref$className,_ref$type=_ref.type,type=void 0===_ref$type?defaultValues.type:_ref$type;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("select-none leading-0",className,(_cn={},(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_cn,"material-icons-outlined","outlined"===type),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_cn,"font-icons","solid"===type),_cn)),children:iconName})};Icon.defaultProps=defaultValues,Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},type:{defaultValue:{value:'"solid"',computed:!1},description:"",type:{name:"enum",value:[{value:'"solid"',computed:!1},{value:'"outlined"',computed:!1}]},required:!1},iconName:{description:"",type:{name:"string"},required:!1}}},__webpack_exports__.Z=Icon},"./src/atoms/Icon/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _Icon__WEBPACK_IMPORTED_MODULE_0__.Z}});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/atoms/Icon/Icon.js")},"./src/atoms/TextLink/TextLink.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/atoms/Icon/Icon.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),defaultValues={target:"_self",className:"",onClick:function onClick(){},disabled:!1,active:!1,items:!1,iconPosition:"right"},iconPositions={right:"flex",left:"flex flex-row-reverse"},TextLink=function TextLink(_ref){var _cn,_cn3,text=_ref.text,href=_ref.href,_ref$className=_ref.className,className=void 0===_ref$className?defaultValues.className:_ref$className,iconName=_ref.iconName,_ref$target=_ref.target,target=void 0===_ref$target?defaultValues.target:_ref$target,_ref$onClick=_ref.onClick,onClick=void 0===_ref$onClick?defaultValues.onClick:_ref$onClick,_ref$disabled=_ref.disabled,disabled=void 0===_ref$disabled?defaultValues.disabled:_ref$disabled,_ref$active=_ref.active,active=void 0===_ref$active?defaultValues.active:_ref$active,_ref$items=_ref.items,items=void 0===_ref$items?defaultValues.items:_ref$items,_ref$iconPosition=_ref.iconPosition,iconPosition=void 0===_ref$iconPosition?defaultValues.iconPosition:_ref$iconPosition,_useState=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("expand_more"),_useState2=(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_useState,2),icon=_useState2[0],setIcon=_useState2[1];return items?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"items-center whitespace-nowrap flex group ",onMouseEnter:function onMouseEnter(_){return setIcon("expand_less")},onMouseLeave:function onMouseLeave(_){return setIcon("expand_more")},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("p-1  cursor-pointer ",className,(_cn={},(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_cn,"hover:underline",!disabled),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_cn,"underline",active),_cn)),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a",{className:"font-principal group-hover:underline ",href:href,target:target,children:text})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"flex align-middle text-2xl",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__.Z,{iconName:icon})})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"items-center whitespace-nowrap flex ",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()((0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},iconPositions[iconPosition],!0)),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("p-1  cursor-pointer  ",className,(_cn3={},(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_cn3,"hover:underline",!disabled),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_cn3,"underline",active),_cn3)),onClick:onClick,children:href&&!disabled?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a",{className:"font-principal",href:href,target:target,children:text}):disabled?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"font-principal",children:text}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"font-principal",onClick:onClick,children:text})}),iconName?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"flex items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__.Z,{iconName:iconName})," "]}):""]})})};TextLink.defaultProps=defaultValues,TextLink.__docgenInfo={description:"",methods:[],displayName:"TextLink",props:{className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},target:{defaultValue:{value:'"_self"',computed:!1},description:"",type:{name:"enum",value:[{value:'"_self"',computed:!1},{value:'"_blank"',computed:!1}]},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},active:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},items:{defaultValue:{value:"false",computed:!1},required:!1},iconPosition:{defaultValue:{value:'"right"',computed:!1},description:"",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]},required:!1},text:{description:"",type:{name:"string"},required:!1},href:{description:"",type:{name:"string"},required:!1},iconName:{description:"",type:{name:"string"},required:!1}}},__webpack_exports__.Z=TextLink},"./src/atoms/TextLink/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _TextLink__WEBPACK_IMPORTED_MODULE_0__.Z}});var _TextLink__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/atoms/TextLink/TextLink.js")},"./src/helpers/myrefHelper.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{l:function(){return myhref}});var myhref=function myhref(web){""!==web&&(window.location.href=web)}},"./src/organisms/Card/Card.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Card_Card}});var defineProperty=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),TextLink=__webpack_require__("./src/atoms/TextLink/index.js"),Aspect=__webpack_require__("./src/atoms/Aspect/Aspect.js"),myrefHelper=__webpack_require__("./src/helpers/myrefHelper.js"),Heading=__webpack_require__("./src/atoms/Heading/Heading.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),types={horizontal:"w-3/5",vertical:"h-full"},display={horizontal:"flex-row",vertical:"flex-col"},classesContent=classnames_default()("flex flex-col","relative","justify-between","p-4"),classesSubTitle=classnames_default()("flex","pb-2","font-bold font-principal text-neutral-500"," md:text-sm sm:text-xs"),classesLink=classnames_default()("flex","font-bold font-principal","justify-end items-center","lg:text-base md:text-sm sm:text-xs"),classesText=classnames_default()("pb-2","text-neutral-500","font-nunito"," md:text-sm sm:text-xs"),classesCard=classnames_default()("flex flex-1","relative","rounded border border-neutral-300","overflow-hidden"),defaultValues={type:"horizontal",aspectRatio:"2/1",className:""},Card=function Card(_ref){var _cn6,imageUrl=_ref.imageUrl,text=_ref.text,subtitle=_ref.subtitle,title=_ref.title,link=_ref.link,_ref$type=_ref.type,type=void 0===_ref$type?defaultValues.type:_ref$type,_ref$aspectRatio=_ref.aspectRatio,aspectRatio=void 0===_ref$aspectRatio?defaultValues.aspectRatio:_ref$aspectRatio,_ref$className=_ref.className,className=void 0===_ref$className?defaultValues.className:_ref$className,classText=classnames_default()(classesText,(0,defineProperty.Z)({},"hidden",!text)),classContent=classnames_default()(classesContent,(0,defineProperty.Z)({},[types[type]],type)),classSubTitle=classnames_default()(classesSubTitle,(0,defineProperty.Z)({},"hidden",!subtitle)),classLink=classnames_default()(classesLink,(0,defineProperty.Z)({},"hidden",!link)),classTitle=classnames_default()("text-neutral-800 pb-2",(0,defineProperty.Z)({},"hidden",!title)),classCard=classnames_default()(classesCard,className,(_cn6={},(0,defineProperty.Z)(_cn6,[null==display?void 0:display[type]],type),(0,defineProperty.Z)(_cn6,"group hover:shadow-lg  cursor-pointer",null==link?void 0:link.route),_cn6));return(0,jsx_runtime.jsxs)("div",{className:classCard,onClick:function onClick(e){!function handleOnClick(e){null!=link&&link.disabled?e.stopPropagation():null!=link&&link.route?(0,myrefHelper.l)(null==link?void 0:link.route):null==link||link.onClick()}(e)},children:["horizontal"===type?(0,jsx_runtime.jsx)("div",{id:"image",className:"w-2/5 h-auto ",children:(0,jsx_runtime.jsx)("img",{className:"w-full h-full",src:imageUrl,style:{objectFit:"cover",objectPosition:"center"}})}):(0,jsx_runtime.jsx)(Aspect.Z,{ratio:aspectRatio,children:(0,jsx_runtime.jsx)("div",{id:"image",className:"w-full h-full ",children:(0,jsx_runtime.jsx)("img",{className:"w-full h-full object-cover object-center",src:imageUrl})})}),(0,jsx_runtime.jsxs)("div",{className:classContent,children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{id:"subtitle",className:classSubTitle,children:(0,jsx_runtime.jsx)("span",{children:subtitle})}),(0,jsx_runtime.jsx)("div",{id:"title",className:classTitle,children:(0,jsx_runtime.jsx)(Heading.Z,{title:title,type:"h-6",font:"secondary"})}),(0,jsx_runtime.jsx)("div",{id:"content",className:classText,children:(0,jsx_runtime.jsx)("span",{children:text})})]}),(0,jsx_runtime.jsx)("div",{className:classLink,children:(0,jsx_runtime.jsx)(TextLink.Z,{text:null==link?void 0:link.label,href:null==link?void 0:link.route,className:"group-hover:underline text-sm",disabled:null==link?void 0:link.disabled,onClick:null==link?void 0:link.onClick,iconName:"arrow_forward_ios"})})]})]})};Card.defaultProps=defaultValues,Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{type:{defaultValue:{value:'"horizontal"',computed:!1},description:"",type:{name:"enum",value:[{value:'"vertical"',computed:!1},{value:'"horizontal"',computed:!1}]},required:!1},aspectRatio:{defaultValue:{value:'"2/1"',computed:!1},description:"",type:{name:"enum",value:[{value:'"2/1"',computed:!1},{value:'"4/3"',computed:!1}]},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},imageUrl:{description:"",type:{name:"string"},required:!0},title:{description:"",type:{name:"string"},required:!1},subtitle:{description:"",type:{name:"string"},required:!1},text:{description:"",type:{name:"string"},required:!1},link:{description:"",type:{name:"object"},required:!1}}};var Card_Card=Card}}]);