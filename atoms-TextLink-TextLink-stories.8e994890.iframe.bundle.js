/*! For license information please see atoms-TextLink-TextLink-stories.8e994890.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_lottus_ed_components=self.webpackChunk_lottus_ed_components||[]).push([[79],{"../../node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}})},"../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}})},"../../node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/atoms/TextLink/TextLink.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Standard:function(){return Standard},__namedExportsOrder:function(){return __namedExportsOrder}});var C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_TextLink__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/atoms/TextLink/TextLink.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"TextLink",component:_TextLink__WEBPACK_IMPORTED_MODULE_0__.Z,tags:["autodocs"],args:{text:"Text Link",href:"https://cat-bounce.com/",target:"_self",iconName:"home",className:"",onClick:function onClick(){console.log("function")},disabled:!1,items:!1,active:!1,iconPosition:"left"},argTypes:{iconPosition:{options:["left","right"],controls:{type:"radio"}}}};var Standard=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_TextLink__WEBPACK_IMPORTED_MODULE_0__.Z,(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},args))}.bind({}),__namedExportsOrder=["Standard"]},"./src/atoms/Icon/Icon.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),defaultValues={className:"",type:"solid"},Icon=function Icon(_ref){var _cn,iconName=_ref.iconName,_ref$className=_ref.className,className=void 0===_ref$className?defaultValues.className:_ref$className,_ref$type=_ref.type,type=void 0===_ref$type?defaultValues.type:_ref$type;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("select-none leading-0",className,(_cn={},(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_cn,"material-icons-outlined","outlined"===type),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_cn,"font-icons","solid"===type),_cn)),children:iconName})};Icon.defaultProps=defaultValues,Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},type:{defaultValue:{value:'"solid"',computed:!1},description:"",type:{name:"enum",value:[{value:'"solid"',computed:!1},{value:'"outlined"',computed:!1}]},required:!1},iconName:{description:"",type:{name:"string"},required:!1}}},__webpack_exports__.Z=Icon},"./src/atoms/TextLink/TextLink.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/atoms/Icon/Icon.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),defaultValues={target:"_self",className:"",onClick:function onClick(){},disabled:!1,active:!1,items:!1,iconPosition:"right"},iconPositions={right:"flex",left:"flex flex-row-reverse"},TextLink=function TextLink(_ref){var _cn,_cn3,text=_ref.text,href=_ref.href,_ref$className=_ref.className,className=void 0===_ref$className?defaultValues.className:_ref$className,iconName=_ref.iconName,_ref$target=_ref.target,target=void 0===_ref$target?defaultValues.target:_ref$target,_ref$onClick=_ref.onClick,onClick=void 0===_ref$onClick?defaultValues.onClick:_ref$onClick,_ref$disabled=_ref.disabled,disabled=void 0===_ref$disabled?defaultValues.disabled:_ref$disabled,_ref$active=_ref.active,active=void 0===_ref$active?defaultValues.active:_ref$active,_ref$items=_ref.items,items=void 0===_ref$items?defaultValues.items:_ref$items,_ref$iconPosition=_ref.iconPosition,iconPosition=void 0===_ref$iconPosition?defaultValues.iconPosition:_ref$iconPosition,_useState=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("expand_more"),_useState2=(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_useState,2),icon=_useState2[0],setIcon=_useState2[1];return items?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"items-center whitespace-nowrap flex group ",onMouseEnter:function onMouseEnter(_){return setIcon("expand_less")},onMouseLeave:function onMouseLeave(_){return setIcon("expand_more")},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("p-1  cursor-pointer ",className,(_cn={},(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_cn,"hover:underline",!disabled),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_cn,"underline",active),_cn)),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a",{className:"font-principal group-hover:underline ",href:href,target:target,children:text})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"flex align-middle text-2xl",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__.Z,{iconName:icon})})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"items-center whitespace-nowrap flex ",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()((0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},iconPositions[iconPosition],!0)),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("p-1  cursor-pointer  ",className,(_cn3={},(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_cn3,"hover:underline",!disabled),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_cn3,"underline",active),_cn3)),onClick:onClick,children:href&&!disabled?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a",{className:"font-principal",href:href,target:target,children:text}):disabled?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"font-principal",children:text}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"font-principal",onClick:onClick,children:text})}),iconName?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"flex items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__.Z,{iconName:iconName})," "]}):""]})})};TextLink.defaultProps=defaultValues,TextLink.__docgenInfo={description:"",methods:[],displayName:"TextLink",props:{className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},target:{defaultValue:{value:'"_self"',computed:!1},description:"",type:{name:"enum",value:[{value:'"_self"',computed:!1},{value:'"_blank"',computed:!1}]},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},active:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},items:{defaultValue:{value:"false",computed:!1},required:!1},iconPosition:{defaultValue:{value:'"right"',computed:!1},description:"",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]},required:!1},text:{description:"",type:{name:"string"},required:!1},href:{description:"",type:{name:"string"},required:!1},iconName:{description:"",type:{name:"string"},required:!1}}},__webpack_exports__.Z=TextLink},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);