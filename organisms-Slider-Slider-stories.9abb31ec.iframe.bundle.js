"use strict";(self.webpackChunk_lottus_ed_components=self.webpackChunk_lottus_ed_components||[]).push([[896],{"./src/organisms/Slider/Slider.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Standard:function(){return Standard},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Slider_stories}});var objectSpread2=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),Aspect=__webpack_require__("./src/atoms/Aspect/Aspect.js"),react=__webpack_require__("../../node_modules/react/index.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),SliderContent=__webpack_require__("./src/molecules/SliderContent/SliderContent.js"),keen_slider_react=__webpack_require__("../../node_modules/keen-slider/react.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),sliderImageStyles={dark:{filter:"brightness(0.5)"},light:{opacity:"0.5"}},Slider=function Slider(_ref){var slides=_ref.slides,_useState=(0,react.useState)(0),_useState2=(0,slicedToArray.Z)(_useState,2),currentSlide=_useState2[0],setCurrentSlide=_useState2[1],_useState3=(0,react.useState)(!1),_useState4=(0,slicedToArray.Z)(_useState3,2),loaded=_useState4[0],setLoaded=_useState4[1],stylesBaseControls="material-icons select-none absolute top-[35%] p-1 rounded-lg text-[12px] w-p:hidden",_useKeenSlider=(0,keen_slider_react.E)({loop:!0,breakpoints:{"(min-width: 320px)":{slides:{perView:1}},"(min-width: 600px)":{slides:{perView:1}},"(min-width: 1024px)":{slides:{perView:1}}},initial:0,slideChanged:function slideChanged(slider){setCurrentSlide(slider.track.details.rel)},created:function created(){setLoaded(!0)}}),_useKeenSlider2=(0,slicedToArray.Z)(_useKeenSlider,2),sliderRef=_useKeenSlider2[0],instanceRef=_useKeenSlider2[1];return(0,jsx_runtime.jsxs)("section",{className:"flex flex-col relative w-full my-6",children:[(0,jsx_runtime.jsxs)("section",{className:"",children:[" ",(0,jsx_runtime.jsxs)("div",{ref:sliderRef,className:"keen-slider",children:[slides.map((function(slide,i){return(0,jsx_runtime.jsx)("section",{children:(0,jsx_runtime.jsx)("div",{className:"keen-slider__slide",children:(0,jsx_runtime.jsxs)(Aspect.Z,{ratio:"2/1",children:[(0,jsx_runtime.jsx)("img",{style:null==sliderImageStyles?void 0:sliderImageStyles[null==slide?void 0:slide.overlay],className:"w-full h-full object-cover object-center",src:null==slide?void 0:slide.url,alt:"slider-img"}),(0,jsx_runtime.jsx)("div",{className:"absolute w-full h-full top-0 left-0 ",children:(0,jsx_runtime.jsx)(SliderContent.Z,{title:null==slide?void 0:slide.title,text:null==slide?void 0:slide.text,btn:null==slide?void 0:slide.btn,contentVariant:null==slide?void 0:slide.contentVariant,position:null==slide?void 0:slide.position,className:null==slide?void 0:slide.className})})]})})},"card-item-".concat(i))}))," "]})]}),loaded&&instanceRef.current&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:classnames_default()("z-20 left-8 w-p:invisible w-t:invisible cursor-pointer w-14 h-14 rounded-lg bg-neutral-200 opacity-50 flex items-center justify-center ",stylesBaseControls),children:(0,jsx_runtime.jsx)("span",{className:"material-icons",onClick:function onClick(e){var _instanceRef$current2;null===(_instanceRef$current2=instanceRef.current)||void 0===_instanceRef$current2||_instanceRef$current2.prev()},children:"arrow_back_ios"})}),(0,jsx_runtime.jsx)("div",{className:classnames_default()("z-20 right-8 w-p:invisible w-t:invisible cursor-pointer  w-14 h-14 rounded-lg bg-neutral-200 opacity-50 flex items-center justify-center",stylesBaseControls),children:(0,jsx_runtime.jsx)("span",{className:"material-icons",onClick:function onClick(e){var _instanceRef$current3;return null===(_instanceRef$current3=instanceRef.current)||void 0===_instanceRef$current3?void 0:_instanceRef$current3.next()},children:"arrow_forward_ios"})}),(0,jsx_runtime.jsx)("div",{className:classnames_default()("w-full flex justify-center gap-2 mt-6 dots absolute bottom-1 pb-10"),children:slides.map((function(_,i){return(0,jsx_runtime.jsx)("div",{onClick:function onClick(){return function activeBulletSlide(position){var _instanceRef$current;null===(_instanceRef$current=instanceRef.current)||void 0===_instanceRef$current||_instanceRef$current.moveToIdx(position)}(i)},className:classnames_default()("h-4 bg-[#686868] rounded-full cursor-pointer",{"w-4":i!==currentSlide,"w-8":i===currentSlide})},"bullet-item-".concat(i))}))})]})]})};Slider.__docgenInfo={description:"",methods:[],displayName:"Slider"};var Slider_Slider=Slider,Slider_stories={title:"Slider",component:Slider_Slider,tags:["autodocs"],args:{slides:[{url:"https://st3.depositphotos.com/1010305/16498/i/950/depositphotos_164980550-stock-photo-tiger-in-forest-tiger-in.jpg",title:"Conviértete en profesional a tu ritmo",text:"Aprovecha la flexibilidad de estudiar una carrera profesional a tu propio ritmo y horario. Crea tu futuro con el control en tus manos.",btn:{id:"button",type:"primary",label:"Conoce más",size:"xsm",icon:"",disabled:!1,isExpand:!1},position:"left-middle",overlay:"dark",contentVariant:"light"},{url:"https://st3.depositphotos.com/1010305/16498/i/950/depositphotos_164980550-stock-photo-tiger-in-forest-tiger-in.jpg",title:"Conviértete en profesional a tu ritmo",text:"Aprovecha la flexibilidad de estudiar una carrera profesional a tu propio ritmo y horario. Crea tu futuro con el control en tus manos.",btn:{id:"button",type:"primary",label:"Conoce más",size:"xsm",icon:"people",disabled:!1,isExpand:!1},position:"left-middle"}]}},Standard=function Template(args){return(0,jsx_runtime.jsx)(Slider_Slider,(0,objectSpread2.Z)({},args))}.bind({}),__namedExportsOrder=["Standard"]},"./src/atoms/Aspect/Aspect.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Aspect_Aspect}});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),fractionRegex=/([1-9][0-9]*(.[0-9]*)?)\/[1-9][0-9]*(.[0-9]*)?/g,defaultValues={ratio:"1/2"},Aspect=function Aspect(_ref){var _ref$ratio=_ref.ratio,ratio=void 0===_ref$ratio?defaultValues.ratio:_ref$ratio,children=_ref.children,aspectRatioPercentage=function calculateAspectRatioPercentage(ratio,fractionRegex,defaultRatioPercentage){if(fractionRegex.test(ratio)){var fraction=!!ratio.match(fractionRegex)&&ratio.match(fractionRegex)[0],numerator=Number(fraction?fraction.split("/")[0]:1),denominator=Number(fraction?fraction.split("/")[1]:0),roundedNumerator=Math.floor(numerator),roundedDenominator=Math.floor(denominator);return"".concat(roundedDenominator/roundedNumerator*100,"%")}return defaultRatioPercentage}(ratio,fractionRegex,"50%"),paddingStyles={paddingTop:aspectRatioPercentage};return(0,jsx_runtime.jsx)("div",{style:paddingStyles,className:"relative w-full h-0",children:(0,jsx_runtime.jsx)("div",{className:"w-full h-full absolute top-0 left-0 overflow-hidden",children:children})})};Aspect.defaultProps=defaultValues,Aspect.__docgenInfo={description:"",methods:[],displayName:"Aspect",props:{ratio:{defaultValue:{value:'"1/2"',computed:!1},description:"",type:{name:"string"},required:!1}}};var Aspect_Aspect=Aspect},"./src/atoms/Button/Button.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/atoms/Icon/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),defaultValues={id:"btn",size:"sm",disabled:!1,variant:"primary",iconName:"",className:""},sizes={xsm:classnames__WEBPACK_IMPORTED_MODULE_0___default()("px-4 py-3 text-sm rounded"),sm:classnames__WEBPACK_IMPORTED_MODULE_0___default()("py-4 px-8 text-base rounded-lg"),md:classnames__WEBPACK_IMPORTED_MODULE_0___default()("py-5 px-9 text-xl rounded-lg"),lg:classnames__WEBPACK_IMPORTED_MODULE_0___default()("py-6 px-12 text-xl rounded-lg")},variants={primary:classnames__WEBPACK_IMPORTED_MODULE_0___default()("bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-600 active:bg-neutral-600","text-neutral-100","border border-neutral-900 active:border-0 active:ring-0 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none"),outlined:classnames__WEBPACK_IMPORTED_MODULE_0___default()("bg-transparent hover:bg-neutral-200 active:bg-neutral-400 focus:bg-neutral-100","text-neutral-900"," border border-transparent focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none"),text:classnames__WEBPACK_IMPORTED_MODULE_0___default()("bg-transparent hover:bg-neutral-200 active:bg-neutral-400 ","text-neutral-900 hover:text-neutral-900","active:ring-0 active:border-0 focus:border focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 "),"outlined-negative":classnames__WEBPACK_IMPORTED_MODULE_0___default()("bg-transparent text-neutral-100 border border-neutral-100  ","hover:bg-neutral-100 hover:border-neutral-900 hover:text-neutral-900","active:ring-0 active:border-0 active:bg-neutral-400 active:text-neutral-100 ","focus:border focus:border-neutral-100 focus:ring-1 focus:ring-neutral-100 ")},commonClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()("flex","relative","min-w-40 max-w-full","font-bold font-principal","items-center justify-center"),isDisabled={primary:classnames__WEBPACK_IMPORTED_MODULE_0___default()("cursor-not-allowed","bg-neutral-400","text-neutral-100"),text:classnames__WEBPACK_IMPORTED_MODULE_0___default()("cursor-not-allowed text-neutral-400"),outlined:classnames__WEBPACK_IMPORTED_MODULE_0___default()("cursor-not-allowed","bg-transparent","text-neutral-400","border border-neutral-400"),"outlined-negative":classnames__WEBPACK_IMPORTED_MODULE_0___default()("cursor-not-allowed","bg-transparent","text-neutral-200","border border-neutral-200")},Button=function Button(_ref){var _cn,_ref$id=_ref.id,id=void 0===_ref$id?defaultValues.id:_ref$id,label=_ref.label,_ref$variant=_ref.variant,variant=void 0===_ref$variant?defaultValues.variant:_ref$variant,_ref$size=_ref.size,size=void 0===_ref$size?defaultValues.size:_ref$size,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$iconName=_ref.iconName,iconName=void 0===_ref$iconName?defaultValues.iconName:_ref$iconName,onClick=_ref.onClick,_ref$className=_ref.className,className=void 0===_ref$className?defaultValues.className:_ref$className,buttonClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()(commonClasses,className,(_cn={},(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_cn,[sizes[size]],!0),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_cn,[variants[variant]],!disabled),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_cn,[isDisabled[variant]],disabled),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_cn,"cursor-pointer",!disabled),_cn));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{id:id,className:buttonClasses,variant:"button",onClick:onClick,children:iconName?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(" flex items-center",(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},"space-x-2",label)),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.Z,{iconName:iconName})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:label})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:label})})};Button.defaultProps=defaultValues,Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{id:{defaultValue:{value:'"btn"',computed:!1},description:"",type:{name:"string"},required:!1},variant:{defaultValue:{value:'"primary"',computed:!1},description:"",type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"outlined"',computed:!1},{value:'"text"',computed:!1},{value:'"outlined-negative"',computed:!1}]},required:!1},size:{defaultValue:{value:'"sm"',computed:!1},description:"",type:{name:"enum",value:[{value:'"xsm"',computed:!1},{value:'"sm"',computed:!1},{value:'"md"',computed:!1},{value:'"lg"',computed:!1}]},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},iconName:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},label:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1}}},__webpack_exports__.Z=Button},"./src/atoms/Heading/Heading.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),fonts={principal:classnames__WEBPACK_IMPORTED_MODULE_0___default()("font-principal"),secondary:classnames__WEBPACK_IMPORTED_MODULE_0___default()("font-secondary")},types={"h-1":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-4xl md:text-6xl lg:text-7xl font-extrabold"),"h-2":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-2xl md:text-4xl lg:text-6xl font-extrabold"),"h-3":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-2xl lg:text-5xl md:text-3xl md:font-extrabold font-bold"),"h-4":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-2xl md:text-3xl font-bold"),"h-5":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-base lg:text-xl font-bold"),"h-6":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-base lg:text-lg font-semibold")},variants={primary:classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-neutral-500"),negative:classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-neutral-100")},defaultValues={type:"h-1",variant:"normal",font:"principal",className:""},Heading=function Heading(_ref){var _cn,title=_ref.title,_ref$type=_ref.type,type=void 0===_ref$type?defaultValues.type:_ref$type,_ref$variant=_ref.variant,variant=void 0===_ref$variant?defaultValues.variant:_ref$variant,_ref$font=_ref.font,font=void 0===_ref$font?defaultValues.font:_ref$font,_ref$className=_ref.className,className=void 0===_ref$className?defaultValues.className:_ref$className,headingClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,(_cn={},(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_cn,[null==fonts?void 0:fonts[font]],font),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_cn,[null==types?void 0:types[type]],type),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_cn,[null==variants?void 0:variants[variant]],variant),_cn));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:headingClasses,children:title})};Heading.defaultProps=defaultValues,Heading.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{type:{defaultValue:{value:'"h-1"',computed:!1},description:"",type:{name:"enum",value:[{value:'"h-1"',computed:!1},{value:'"h-2"',computed:!1},{value:'"h-3"',computed:!1},{value:'"h-4"',computed:!1},{value:'"h-5"',computed:!1},{value:'"h-6"',computed:!1}]},required:!1},variant:{defaultValue:{value:'"normal"',computed:!1},description:"",type:{name:"enum",value:[{value:'"normal"',computed:!1},{value:'"primary"',computed:!1},{value:'"negative"',computed:!1}]},required:!1},font:{defaultValue:{value:'"principal"',computed:!1},description:"",type:{name:"enum",value:[{value:'"principal"',computed:!1},{value:'"secondary"',computed:!1}]},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1}}},__webpack_exports__.Z=Heading},"./src/atoms/Icon/Icon.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),defaultValues={className:"",type:"solid"},Icon=function Icon(_ref){var _cn,iconName=_ref.iconName,_ref$className=_ref.className,className=void 0===_ref$className?defaultValues.className:_ref$className,_ref$type=_ref.type,type=void 0===_ref$type?defaultValues.type:_ref$type;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("select-none leading-0",className,(_cn={},(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_cn,"material-icons-outlined","outlined"===type),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_cn,"font-icons","solid"===type),_cn)),children:iconName})};Icon.defaultProps=defaultValues,Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},type:{defaultValue:{value:'"solid"',computed:!1},description:"",type:{name:"enum",value:[{value:'"solid"',computed:!1},{value:'"outlined"',computed:!1}]},required:!1},iconName:{description:"",type:{name:"string"},required:!1}}},__webpack_exports__.Z=Icon},"./src/atoms/Icon/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _Icon__WEBPACK_IMPORTED_MODULE_0__.Z}});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/atoms/Icon/Icon.js")},"./src/helpers/classesHelper.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{QX:function(){return getClassItemMobContainer},Wh:function(){return getPositionContainerText},XB:function(){return getPositionSliderContainerText},ZN:function(){return getclassSubMenu},nJ:function(){return getClassBannerPositionButton},vJ:function(){return getClassItem},yI:function(){return getClassIconMobContainer}});var C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),getPositionContainerText=function getPositionContainerText(potition){var commonClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()("absolute p-10","top-0  left-0","w-full h-full","hidden md:flex ");return classnames__WEBPACK_IMPORTED_MODULE_0___default()(commonClasses,(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},[{"center-top":"justify-center items-start text-center","center-middle":"justify-center items-center text-center","center-bottom":"justify-center items-end text-center","left-top":"justify-start items-start text-left","left-middle":"justify-start items-center text-left","left-bottom":"justify-start items-end text-left","right-top":"justify-end items-start text-right","right-middle":"justify-end items-center text-right","right-bottom":"justify-end items-end text-right"}[potition]],!0))},getClassBannerPositionButton=function getClassBannerPositionButton(potition){var _cn2;return classnames__WEBPACK_IMPORTED_MODULE_0___default()("flex",(_cn2={},(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_cn2,"justify-center items-start text-center","center-top"===potition),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_cn2,"justify-center items-center text-center","center-middle"===potition),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_cn2,"justify-center items-end text-center","center-bottom"===potition),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_cn2,"justify-start items-start text-left","left-top"===potition),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_cn2,"justify-start items-center text-left","left-middle"===potition),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_cn2,"justify-start items-end text-left","left-bottom"===potition),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_cn2,"justify-end items-start text-right","right-top"===potition),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_cn2,"justify-end items-center text-right","right-middle"===potition),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_cn2,"justify-end items-end text-right","right-bottom"===potition),_cn2))},getClassItem=function getClassItem(principal,active){var _cn3;return classnames__WEBPACK_IMPORTED_MODULE_0___default()("flex flex-1 flex-nowrap align-middle  ",(_cn3={},(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_cn3,"font-bold",principal),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_cn3,"pl-2  py-4",!principal),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_cn3,"bg-neutral-900 text-neutral-100",active&&!principal),_cn3))},classesSubMenu=classnames__WEBPACK_IMPORTED_MODULE_0___default()("flex absolute flex-row flex-1","shadow shadow-lg","font-normal","bg-neutral-100","w-full h-14 lg:h-auto xl:h-auto 2xl:h-auto","invisible lg:visible","pl-2","border-t border-neutral-300"),getclassSubMenu=function getclassSubMenu(submenu){return classnames__WEBPACK_IMPORTED_MODULE_0___default()(classesSubMenu,(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},"hidden",submenu))},getClassItemMobContainer=function getClassItemMobContainer(active,principal){var _cn5;return classnames__WEBPACK_IMPORTED_MODULE_0___default()("flex",(_cn5={},(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_cn5,"bg-neutral-900 text-neutral-100",active),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_cn5,"flex-1",principal),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_cn5,"justify-between items-center p-1 border-b border-neutral-300 cursor-pointer",!principal),_cn5))},commonClassesItems=classnames__WEBPACK_IMPORTED_MODULE_0___default()("px-3 py-1 cursor-pointer  border-l  border-neutral-300 hover:bg-neutral-300 hover:text-neutral-900 "),getClassIconMobContainer=function getClassIconMobContainer(active){return classnames__WEBPACK_IMPORTED_MODULE_0___default()(commonClassesItems,(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},"bg-neutral-900 text-neutral-100",active))},getPositionSliderContainerText=function getPositionSliderContainerText(potition){var commonClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()("absolute py-12 px-32","top-0  left-0","w-full h-full","hidden md:flex ");return classnames__WEBPACK_IMPORTED_MODULE_0___default()(commonClasses,(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},[{"center-top":"justify-center items-start text-center","center-middle":"justify-center items-center text-center","center-bottom":"justify-center items-end text-center","left-top":"justify-start items-start text-left","left-middle":"justify-start items-center text-left","left-bottom":"justify-start items-end text-left","right-top":"justify-end items-start text-right","right-middle":"justify-end items-center text-right","right-bottom":"justify-end items-end text-right"}[potition]],!0))}},"./src/helpers/textHelper.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{m:function(){return getTextCount}});var getTextCount=function getTextCount(text,max){var result="";if(null!=text){for(var words=text.split(" "),count=0,i=0;i<words.length;i++){if(!((count+=words[i].length+1)<max)){result+=" ...";break}result+=words[i]+" "}return result}}},"./src/molecules/SliderContent/SliderContent.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_atoms_Heading_Heading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/atoms/Heading/Heading.js"),_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/atoms/Button/Button.js"),_helpers_classesHelper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/helpers/classesHelper.js"),_helpers_textHelper__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/helpers/textHelper.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),defaultValues={contentVariant:"dark",position:"left-top",className:""},SliderContent=function SliderContent(_ref){var _cn,title=_ref.title,text=_ref.text,btn=_ref.btn,_ref$contentVariant=_ref.contentVariant,contentVariant=void 0===_ref$contentVariant?defaultValues.contentVariant:_ref$contentVariant,_ref$position=_ref.position,position=void 0===_ref$position?defaultValues.position:_ref$position,_ref$className=_ref.className,className=void 0===_ref$className?defaultValues.className:_ref$className,textColor=classnames__WEBPACK_IMPORTED_MODULE_0___default()("pb-4 font-secondary",(_cn={},(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_cn,"text-neutral-100","light"===contentVariant),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_cn,"text-neutral-800","dark"===contentVariant),_cn));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:className,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{id:"slider-content",className:(0,_helpers_classesHelper__WEBPACK_IMPORTED_MODULE_3__.XB)(position),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"w-3/5",children:[title?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:textColor,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_atoms_Heading_Heading__WEBPACK_IMPORTED_MODULE_1__.Z,{title:(0,_helpers_textHelper__WEBPACK_IMPORTED_MODULE_6__.m)(title,53),type:"h-3",font:"secondary",className:"font-semibold"})}):"",text?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:textColor,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_atoms_Heading_Heading__WEBPACK_IMPORTED_MODULE_1__.Z,{title:(0,_helpers_textHelper__WEBPACK_IMPORTED_MODULE_6__.m)(text,132),type:"h-6",font:"secondary"})}):"",btn?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:(0,_helpers_classesHelper__WEBPACK_IMPORTED_MODULE_3__.nJ)(position),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Z,(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({variant:"light"===contentVariant?"outlined-negative":"primary",size:"sm"},btn))}):""]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{id:"slider-content-mobile",className:"w-full h-full flex flex-col md:hidden ",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"py-4 text-neutral-800",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_atoms_Heading_Heading__WEBPACK_IMPORTED_MODULE_1__.Z,{title:title,type:"h-3",font:"secondary"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"pb-4 text-neutral-800 font-secondary",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_atoms_Heading_Heading__WEBPACK_IMPORTED_MODULE_1__.Z,{title:text,type:"h-6",font:"secondary"})}),btn?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"pb-4 font-secondary",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Z,(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({label:null==btn?void 0:btn.label,variant:"primary",size:"sm",className:"min-w-full flex justify-center"},btn))}):""]})]})};SliderContent.defaultProps=defaultValues,SliderContent.__docgenInfo={description:"",methods:[],displayName:"SliderContent",props:{contentVariant:{defaultValue:{value:'"dark"',computed:!1},description:"",type:{name:"enum",value:[{value:'"light"',computed:!1},{value:'"dark"',computed:!1}]},required:!1},position:{defaultValue:{value:'"left-top"',computed:!1},description:"",type:{name:"enum",value:[{value:'"left-top"',computed:!1},{value:'"left-middle"',computed:!1},{value:'"left-bottom"',computed:!1},{value:'"center-top"',computed:!1},{value:'"center-middle"',computed:!1},{value:'"center-bottom"',computed:!1},{value:'"right-top"',computed:!1},{value:'"right-middle"',computed:!1},{value:'"right-bottom"',computed:!1}]},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1},text:{description:"",type:{name:"string"},required:!1},btn:{description:"",type:{name:"object"},required:!1}}},__webpack_exports__.Z=SliderContent}}]);