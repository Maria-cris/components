/*! For license information please see organisms-LeaderBoard-LeaderBoard-stories.be7856d2.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_lottus_ed_components=self.webpackChunk_lottus_ed_components||[]).push([[784],{"../../node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}})},"../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"../../node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/organisms/LeaderBoard/LeaderBoard.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Standard:function(){return Standard},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return LeaderBoard_stories},noButton:function(){return noButton}});var objectSpread2=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),defineProperty=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),Heading=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/atoms/Heading/Heading.js")),Icon=__webpack_require__("./src/atoms/Icon/index.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),defaultValues={type:"",value:"",text:"",className:"",target:"_self"},Extensions=function Extensions(_ref){var _ref$type=_ref.type,type=void 0===_ref$type?defaultValues.type:_ref$type,_ref$value=_ref.value,value=void 0===_ref$value?defaultValues.value:_ref$value,_ref$text=_ref.text,text=void 0===_ref$text?defaultValues.text:_ref$text,icon=_ref.icon,_ref$target=_ref.target,target=void 0===_ref$target?defaultValues.target:_ref$target,_ref$className=_ref.className,className=void 0===_ref$className?defaultValues.className:_ref$className;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(className,"flex space-x-2 items-start group"),children:[(0,jsx_runtime.jsx)(Icon.Z,(0,objectSpread2.Z)((0,objectSpread2.Z)({},icon),{},{className:"group-hover:animate-bounce"})),"phone"===type?(0,jsx_runtime.jsxs)("span",{children:[(0,jsx_runtime.jsx)("span",{className:"md:hidden  cursor-pointer ",children:(0,jsx_runtime.jsx)("a",{href:"tel:"+value,target:target,children:text})}),(0,jsx_runtime.jsx)("span",{className:"hidden md:flex  ",children:text})]}):"mail"===type?(0,jsx_runtime.jsx)("span",{className:"hover:underline cursor-pointer ",children:(0,jsx_runtime.jsx)("a",{href:"mailto:"+value,target:target,children:text})}):"link"===type?(0,jsx_runtime.jsx)("span",{className:" hover:underline cursor-pointer ",children:(0,jsx_runtime.jsx)("a",{href:value,target:target,children:text})}):(0,jsx_runtime.jsx)("span",{children:text})]})};Extensions.defaultProps=defaultValues,Extensions.__docgenInfo={description:"",methods:[],displayName:"Extensions",props:{type:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"enum",value:[{value:'"phone"',computed:!1},{value:'"mail"',computed:!1},{value:'"link"',computed:!1},{value:'""',computed:!1}]},required:!1},value:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},text:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},target:{defaultValue:{value:'"_self"',computed:!1},description:"",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},icon:{description:"",type:{name:"object"},required:!1}}};var Extensions_Extensions=Extensions,Button=__webpack_require__("./src/atoms/Button/index.js"),textHelper=__webpack_require__("./src/helpers/textHelper.js"),LeaderBoard_defaultValues={imgUrl:"",title:"",variant:"dark",links:{}},variants={light:"text-neutral-100",dark:"text-neutral-900"},LeaderBoard=function LeaderBoard(_ref){var _ref$imgUrl=_ref.imgUrl,imgUrl=void 0===_ref$imgUrl?LeaderBoard_defaultValues.imgUrl:_ref$imgUrl,_ref$title=_ref.title,title=void 0===_ref$title?LeaderBoard_defaultValues.title:_ref$title,_ref$variant=_ref.variant,variant=void 0===_ref$variant?LeaderBoard_defaultValues.variant:_ref$variant,_ref$links=_ref.links,links=void 0===_ref$links?LeaderBoard_defaultValues.links:_ref$links,button=_ref.button;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()("w-full md:h-52 h-64 text-sm md:text-base relative overflow-hidden",(0,defineProperty.Z)({},variants[variant],!0)),children:[(0,jsx_runtime.jsx)("img",{src:imgUrl,className:"w-full h-full object-cover object-center"}),(0,jsx_runtime.jsxs)("div",{className:"absolute top-0 left-0 p-10 md:px-20 md:py-12 w-full h-full flex flex-col ",children:[(0,jsx_runtime.jsx)("span",{className:"pb-4",children:(0,jsx_runtime.jsx)(Heading.Z,{title:(0,textHelper.m)(title,61),type:"h-4",font:"principal"})}),button?(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("span",{className:"flex flex-col space-y-4 font-principal",children:[(0,jsx_runtime.jsxs)("span",{children:[" ",(0,jsx_runtime.jsx)(Extensions_Extensions,(0,objectSpread2.Z)({},null==links?void 0:links[0]))]}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsx)(Button.Z,(0,objectSpread2.Z)({},button))})]})}):(0,jsx_runtime.jsxs)("div",{className:"flex md:flex-row md:space-x-4 flex-col max-[775px]:space-y-4",children:[(0,jsx_runtime.jsxs)("span",{className:"flex flex-col space-y-4 font-principal",children:[(0,jsx_runtime.jsx)(Extensions_Extensions,(0,objectSpread2.Z)({},null==links?void 0:links[0])),(0,jsx_runtime.jsx)(Extensions_Extensions,(0,objectSpread2.Z)({},null==links?void 0:links[1]))]}),(0,jsx_runtime.jsxs)("span",{className:"flex flex-col space-y-4 font-principal ",children:[(0,jsx_runtime.jsx)(Extensions_Extensions,(0,objectSpread2.Z)({},null==links?void 0:links[2])),(0,jsx_runtime.jsx)(Extensions_Extensions,(0,objectSpread2.Z)({},null==links?void 0:links[3]))]})]})]})]})};LeaderBoard.__docgenInfo={description:"",methods:[],displayName:"LeaderBoard",props:{imgUrl:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},title:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},variant:{defaultValue:{value:'"dark"',computed:!1},description:"",type:{name:"enum",value:[{value:'"light"',computed:!1},{value:'"dark"',computed:!1}]},required:!1},links:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"array"},required:!1},button:{description:"",type:{name:"object"},required:!1}}};var LeaderBoard_LeaderBoard=LeaderBoard,LeaderBoard_stories={title:"LeaderBoard",component:LeaderBoard_LeaderBoard,tags:["autodocs"],args:{imgUrl:"https://wallpapercave.com/wp/wp2951423.png",title:"Contacta con el área de Titulación",variant:"light",links:[{type:"phone",value:"xxxxxxx",text:"8xx-xxx-xx",icon:{iconName:"phone",type:"solid"},target:"_blank"},{type:"mail",value:"lottusExample@mail.com",text:"lottusExample@mail.com",icon:{iconName:"mail",type:"solid"},target:"_blank"},{type:"phone",value:"xx-xx-xx-xx",text:"xxx-xxx-xx-xx",icon:{iconName:"phone",type:"solid"},target:"_blank"},{type:"phone",value:"8441121234",text:"xxx-xxx-xxx-xx",icon:{iconName:"phone",type:"solid"},target:"_blank"},{type:"phone",value:"8441121234",text:"xxx-xxx-xxx-xx",icon:{iconName:"phone",type:"solid"},target:"_blank"}],button:{label:"Consultar",variant:"outlined-negative",size:"xsm"}}},Standard=function Template(args){return(0,jsx_runtime.jsx)(LeaderBoard_LeaderBoard,(0,objectSpread2.Z)({},args))}.bind({}),noButton=function Example(_){return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(LeaderBoard_LeaderBoard,{imgUrl:"https://wallpapercave.com/wp/wp2951423.png",title:"Contacta con el área de Titulación",variant:"light",links:[{type:"phone",value:"xxxxxx",text:"xxx-cc-xx-xx",icon:{iconName:"phone",type:"solid"},target:"_blank"},{type:"mail",value:"lottusExample@mail.com",text:"lottusExample@mail.com",icon:{iconName:"mail",type:"solid"},target:"_blank"},{type:"phone",value:"xxxxxxx",text:"xxx-cc-xx-xx",icon:{iconName:"phone",type:"solid"},target:"_blank"},{type:"phone",value:"xxxxxxx",text:"xxx-cc-xx-xx",icon:{iconName:"phone",type:"solid"},target:"_blank"},{type:"phone",value:"xxxxxxx",text:"xxx-cc-xx-xx",icon:{iconName:"phone",type:"solid"},target:"_blank"}]})})}.bind({}),__namedExportsOrder=["Standard","noButton"]},"./src/atoms/Button/Button.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/atoms/Icon/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),defaultValues={id:"btn",size:"sm",disabled:!1,variant:"primary",iconName:"",className:""},sizes={xsm:classnames__WEBPACK_IMPORTED_MODULE_0___default()("px-4 py-3 text-sm rounded"),sm:classnames__WEBPACK_IMPORTED_MODULE_0___default()("py-4 px-8 text-base rounded-lg"),md:classnames__WEBPACK_IMPORTED_MODULE_0___default()("py-5 px-9 text-xl rounded-lg"),lg:classnames__WEBPACK_IMPORTED_MODULE_0___default()("py-6 px-12 text-xl rounded-lg")},variants={primary:classnames__WEBPACK_IMPORTED_MODULE_0___default()("bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-600 active:bg-neutral-600","text-neutral-100","border border-neutral-900 active:border-0 active:ring-0 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none"),outlined:classnames__WEBPACK_IMPORTED_MODULE_0___default()("bg-transparent hover:bg-neutral-200 active:bg-neutral-400 focus:bg-neutral-100","text-neutral-900"," border border-transparent focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none"),text:classnames__WEBPACK_IMPORTED_MODULE_0___default()("bg-transparent hover:bg-neutral-200 active:bg-neutral-400 ","text-neutral-900 hover:text-neutral-900","active:ring-0 active:border-0 focus:border focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 "),"outlined-negative":classnames__WEBPACK_IMPORTED_MODULE_0___default()("bg-transparent text-neutral-100 border border-neutral-100  ","hover:bg-neutral-100 hover:border-neutral-900 hover:text-neutral-900","active:ring-0 active:border-0 active:bg-neutral-400 active:text-neutral-100 ","focus:border focus:border-neutral-100 focus:ring-1 focus:ring-neutral-100 ")},commonClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()("flex","relative","min-w-40 max-w-full","font-bold font-principal","items-center justify-center"),isDisabled={primary:classnames__WEBPACK_IMPORTED_MODULE_0___default()("cursor-not-allowed","bg-neutral-400","text-neutral-100"),text:classnames__WEBPACK_IMPORTED_MODULE_0___default()("cursor-not-allowed text-neutral-400"),outlined:classnames__WEBPACK_IMPORTED_MODULE_0___default()("cursor-not-allowed","bg-transparent","text-neutral-400","border border-neutral-400"),"outlined-negative":classnames__WEBPACK_IMPORTED_MODULE_0___default()("cursor-not-allowed","bg-transparent","text-neutral-200","border border-neutral-200")},Button=function Button(_ref){var _cn,_ref$id=_ref.id,id=void 0===_ref$id?defaultValues.id:_ref$id,label=_ref.label,_ref$variant=_ref.variant,variant=void 0===_ref$variant?defaultValues.variant:_ref$variant,_ref$size=_ref.size,size=void 0===_ref$size?defaultValues.size:_ref$size,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$iconName=_ref.iconName,iconName=void 0===_ref$iconName?defaultValues.iconName:_ref$iconName,onClick=_ref.onClick,_ref$className=_ref.className,className=void 0===_ref$className?defaultValues.className:_ref$className,buttonClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()(commonClasses,className,(_cn={},(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_cn,[sizes[size]],!0),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_cn,[variants[variant]],!disabled),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_cn,[isDisabled[variant]],disabled),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_cn,"cursor-pointer",!disabled),_cn));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{id:id,className:buttonClasses,variant:"button",onClick:onClick,children:iconName?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(" flex items-center",(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},"space-x-2",label)),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.Z,{iconName:iconName})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:label})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:label})})};Button.defaultProps=defaultValues,Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{id:{defaultValue:{value:'"btn"',computed:!1},description:"",type:{name:"string"},required:!1},variant:{defaultValue:{value:'"primary"',computed:!1},description:"",type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"outlined"',computed:!1},{value:'"text"',computed:!1},{value:'"outlined-negative"',computed:!1}]},required:!1},size:{defaultValue:{value:'"sm"',computed:!1},description:"",type:{name:"enum",value:[{value:'"xsm"',computed:!1},{value:'"sm"',computed:!1},{value:'"md"',computed:!1},{value:'"lg"',computed:!1}]},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},iconName:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},label:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1}}},__webpack_exports__.Z=Button},"./src/atoms/Button/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return _Button__WEBPACK_IMPORTED_MODULE_0__.Z}});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/atoms/Button/Button.js")},"./src/atoms/Heading/Heading.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),fonts={principal:classnames__WEBPACK_IMPORTED_MODULE_0___default()("font-principal"),secondary:classnames__WEBPACK_IMPORTED_MODULE_0___default()("font-secondary")},types={"h-1":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-4xl md:text-6xl lg:text-7xl font-extrabold"),"h-2":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-2xl md:text-4xl lg:text-6xl font-extrabold"),"h-3":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-2xl lg:text-5xl md:text-3xl md:font-extrabold font-bold"),"h-4":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-2xl md:text-3xl font-bold"),"h-5":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-base lg:text-xl font-bold"),"h-6":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-base lg:text-lg font-semibold")},variants={primary:classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-neutral-500"),negative:classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-neutral-100")},defaultValues={type:"h-1",variant:"normal",font:"principal",className:""},Heading=function Heading(_ref){var _cn,title=_ref.title,_ref$type=_ref.type,type=void 0===_ref$type?defaultValues.type:_ref$type,_ref$variant=_ref.variant,variant=void 0===_ref$variant?defaultValues.variant:_ref$variant,_ref$font=_ref.font,font=void 0===_ref$font?defaultValues.font:_ref$font,_ref$className=_ref.className,className=void 0===_ref$className?defaultValues.className:_ref$className,headingClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,(_cn={},(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_cn,[null==fonts?void 0:fonts[font]],font),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_cn,[null==types?void 0:types[type]],type),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_cn,[null==variants?void 0:variants[variant]],variant),_cn));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:headingClasses,children:title})};Heading.defaultProps=defaultValues,Heading.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{type:{defaultValue:{value:'"h-1"',computed:!1},description:"",type:{name:"enum",value:[{value:'"h-1"',computed:!1},{value:'"h-2"',computed:!1},{value:'"h-3"',computed:!1},{value:'"h-4"',computed:!1},{value:'"h-5"',computed:!1},{value:'"h-6"',computed:!1}]},required:!1},variant:{defaultValue:{value:'"normal"',computed:!1},description:"",type:{name:"enum",value:[{value:'"normal"',computed:!1},{value:'"primary"',computed:!1},{value:'"negative"',computed:!1}]},required:!1},font:{defaultValue:{value:'"principal"',computed:!1},description:"",type:{name:"enum",value:[{value:'"principal"',computed:!1},{value:'"secondary"',computed:!1}]},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1}}},__webpack_exports__.Z=Heading},"./src/atoms/Icon/Icon.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),defaultValues={className:"",type:"solid"},Icon=function Icon(_ref){var _cn,iconName=_ref.iconName,_ref$className=_ref.className,className=void 0===_ref$className?defaultValues.className:_ref$className,_ref$type=_ref.type,type=void 0===_ref$type?defaultValues.type:_ref$type;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("select-none leading-0",className,(_cn={},(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_cn,"material-icons-outlined","outlined"===type),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_cn,"font-icons","solid"===type),_cn)),children:iconName})};Icon.defaultProps=defaultValues,Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},type:{defaultValue:{value:'"solid"',computed:!1},description:"",type:{name:"enum",value:[{value:'"solid"',computed:!1},{value:'"outlined"',computed:!1}]},required:!1},iconName:{description:"",type:{name:"string"},required:!1}}},__webpack_exports__.Z=Icon},"./src/atoms/Icon/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return _Icon__WEBPACK_IMPORTED_MODULE_0__.Z}});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/atoms/Icon/Icon.js")},"./src/helpers/textHelper.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{m:function(){return getTextCount}});var getTextCount=function getTextCount(text,max){var result="";if(null!=text){for(var words=text.split(" "),count=0,i=0;i<words.length;i++){if(!((count+=words[i].length+1)<max)){result+=" ...";break}result+=words[i]+" "}return result}}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);