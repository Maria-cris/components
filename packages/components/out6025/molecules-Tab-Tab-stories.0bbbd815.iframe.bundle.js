/*! For license information please see molecules-Tab-Tab-stories.0bbbd815.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_lottus_ed_components=self.webpackChunk_lottus_ed_components||[]).push([[979],{"../../node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}})},"../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"../../node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/molecules/Tab/Tab.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Standard:function(){return Standard},TabsExample:function(){return TabsExample},__namedExportsOrder:function(){return __namedExportsOrder}});var C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Tab__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/molecules/Tab/Tab.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Tab",component:_Tab__WEBPACK_IMPORTED_MODULE_0__.Z,tags:["autodocs"],args:{label:"Text Link",active:!0,iconName:"home",isFirst:!0}};var Standard=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Tab__WEBPACK_IMPORTED_MODULE_0__.Z,(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},args))}.bind({}),TabsExample=function Tabs(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex flex-row ",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Tab__WEBPACK_IMPORTED_MODULE_0__.Z,{label:"label1",active:!1,isFirst:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Tab__WEBPACK_IMPORTED_MODULE_0__.Z,(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},args)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Tab__WEBPACK_IMPORTED_MODULE_0__.Z,{label:"label2",active:!1}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Tab__WEBPACK_IMPORTED_MODULE_0__.Z,{label:"label3",active:!1})]})}.bind({}),__namedExportsOrder=["Standard","TabsExample"]},"./src/atoms/Heading/Heading.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),fonts={principal:classnames__WEBPACK_IMPORTED_MODULE_0___default()("font-principal"),secondary:classnames__WEBPACK_IMPORTED_MODULE_0___default()("font-secondary")},types={"h-1":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-4xl md:text-6xl lg:text-7xl font-extrabold"),"h-2":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-2xl md:text-4xl lg:text-6xl font-extrabold"),"h-3":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-2xl lg:text-5xl md:text-3xl md:font-extrabold font-bold"),"h-4":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-xxl md:text-3xl font-bold"),"h-5":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-base lg:text-xl font-bold"),"h-6":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-base lg:text-lg font-semibold")},variants={primary:classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-neutral-500"),negative:classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-neutral-100")},defaultValues={type:"h-1",variant:"normal",font:"principal",className:""},Heading=function Heading(_ref){var _cn,title=_ref.title,_ref$type=_ref.type,type=void 0===_ref$type?defaultValues.type:_ref$type,_ref$variant=_ref.variant,variant=void 0===_ref$variant?defaultValues.variant:_ref$variant,_ref$font=_ref.font,font=void 0===_ref$font?defaultValues.font:_ref$font,_ref$className=_ref.className,className=void 0===_ref$className?defaultValues.className:_ref$className,headingClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,(_cn={},(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_cn,[null==fonts?void 0:fonts[font]],font),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_cn,[null==types?void 0:types[type]],type),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_cn,[null==variants?void 0:variants[variant]],variant),_cn));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:headingClasses,children:title})};Heading.defaultProps=defaultValues,Heading.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{type:{defaultValue:{value:'"h-1"',computed:!1},description:"",type:{name:"enum",value:[{value:'"h-1"',computed:!1},{value:'"h-2"',computed:!1},{value:'"h-3"',computed:!1},{value:'"h-4"',computed:!1},{value:'"h-5"',computed:!1},{value:'"h-6"',computed:!1}]},required:!1},variant:{defaultValue:{value:'"normal"',computed:!1},description:"",type:{name:"enum",value:[{value:'"normal"',computed:!1},{value:'"primary"',computed:!1},{value:'"negative"',computed:!1}]},required:!1},font:{defaultValue:{value:'"principal"',computed:!1},description:"",type:{name:"enum",value:[{value:'"principal"',computed:!1},{value:'"secondary"',computed:!1}]},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1}}},__webpack_exports__.Z=Heading},"./src/atoms/Icon/Icon.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),defaultValues={className:"",type:"solid"},Icon=function Icon(_ref){var _cn,iconName=_ref.iconName,_ref$className=_ref.className,className=void 0===_ref$className?defaultValues.className:_ref$className,_ref$type=_ref.type,type=void 0===_ref$type?defaultValues.type:_ref$type;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("select-none leading-0",className,(_cn={},(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_cn,"material-icons-outlined","outlined"===type),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_cn,"font-icons","solid"===type),_cn)),children:iconName})};Icon.defaultProps=defaultValues,Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},type:{defaultValue:{value:'"solid"',computed:!1},description:"",type:{name:"enum",value:[{value:'"solid"',computed:!1},{value:'"outlined"',computed:!1}]},required:!1},iconName:{description:"",type:{name:"string"},required:!1}}},__webpack_exports__.Z=Icon},"./src/molecules/Tab/Tab.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Tab_Tab}});var defineProperty=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),classnames=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/classnames/index.js")),classnames_default=__webpack_require__.n(classnames),Heading=__webpack_require__("./src/atoms/Heading/Heading.js");var polygon=__webpack_require__.p+"static/media/polygon.333a5bd1685f4f75c977d88d036000aa.svg",Icon=__webpack_require__("./src/atoms/Icon/Icon.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),defaultValues={active:!1,className:"",isFirst:!1,onClick:function onClick(){}},Tab=function Tab(_ref){var _cn,label=_ref.label,_ref$active=_ref.active,active=void 0===_ref$active?defaultValues.active:_ref$active,_ref$className=_ref.className,className=void 0===_ref$className?defaultValues.className:_ref$className,iconName=_ref.iconName,isFirst=_ref.isFirst,onClick=_ref.onClick;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(className,"flex flex-col space-x-0 w-fit"),onClick:onClick,children:[(0,jsx_runtime.jsx)("div",{className:classnames_default()("flex relative  justify-center p-4  items-center whitespace-nowrap ",(_cn={},(0,defineProperty.Z)(_cn,"bg-neutral-900 text-neutral-100 drop-shadow-md border-b-2 border border-neutral-900",active),(0,defineProperty.Z)(_cn,"bg-neutral-100 border-b-2 border-t border-r border-neutral-300  border-b-primary-500",!active),(0,defineProperty.Z)(_cn,"border-l border-neutral-300",isFirst),_cn)),children:iconName?(0,jsx_runtime.jsxs)("span",{className:classnames_default()(" flex text-sm font-semibold leading-[125%] whitespace-nowrap",(0,defineProperty.Z)({},"space-x-2",label)),children:[(0,jsx_runtime.jsx)(Icon.Z,{iconName:iconName}),(0,jsx_runtime.jsx)(Heading.Z,{title:label,type:"h-6",variant:"light",font:"secondary",className:"text-sm font-semibold leading-[125%]"})]}):(0,jsx_runtime.jsx)(Heading.Z,{title:label,type:"h-6",variant:"light",font:"secondary",className:"text-sm font-semibold leading-[125%]"})}),(0,jsx_runtime.jsx)("div",{className:classnames_default()("flex justify-center",(0,defineProperty.Z)({},"hidden",!active)),children:(0,jsx_runtime.jsx)("img",{className:"h-2 ",src:polygon,alt:"polygon"})})]})};Tab.defaultProps=defaultValues,Tab.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{active:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},isFirst:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},label:{description:"",type:{name:"string"},required:!1},iconName:{description:"",type:{name:"string"},required:!1}}};var Tab_Tab=Tab},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);