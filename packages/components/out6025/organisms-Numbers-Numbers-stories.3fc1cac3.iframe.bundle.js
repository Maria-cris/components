"use strict";(self.webpackChunk_lottus_ed_components=self.webpackChunk_lottus_ed_components||[]).push([[482],{"./src/organisms/Numbers/Numbers.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NumbersExample:function(){return NumbersExample},Standard:function(){return Standard},__namedExportsOrder:function(){return __namedExportsOrder}});var C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Numbers_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/organisms/Numbers/Numbers.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Numbers",component:_Numbers_js__WEBPACK_IMPORTED_MODULE_0__.Z,tags:["autodocs"],args:{number:12e3,title:"Numbers",iconName:"people",description:"Numbers component",variant:""},argTypes:{variant:{options:["","stroke","shadow"],control:{type:"radio"}},theme:{options:["light","dark"],control:{type:"radio"}},color:{options:["neutral-100","neutral-200","neutral-300","neutral-400","neutral-500","neutral-600","neutral-700","neutral-800","neutral-900","primary-100","primary-200","primary-300","primary-400","primary-500","primary-600","primary-700","primary-800","primary-900"],control:{type:"select"}}}};var Standard=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Numbers_js__WEBPACK_IMPORTED_MODULE_0__.Z,(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},args))}.bind({}),NumbersExample=function example(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex space-x-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Numbers_js__WEBPACK_IMPORTED_MODULE_0__.Z,(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},args)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Numbers_js__WEBPACK_IMPORTED_MODULE_0__.Z,(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},args)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Numbers_js__WEBPACK_IMPORTED_MODULE_0__.Z,(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},args)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Numbers_js__WEBPACK_IMPORTED_MODULE_0__.Z,(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},args))]})}.bind({}),__namedExportsOrder=["Standard","NumbersExample"]},"./src/atoms/Heading/Heading.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),fonts={principal:classnames__WEBPACK_IMPORTED_MODULE_0___default()("font-principal"),secondary:classnames__WEBPACK_IMPORTED_MODULE_0___default()("font-secondary")},types={"h-1":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-4xl md:text-6xl lg:text-7xl font-extrabold"),"h-2":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-2xl md:text-4xl lg:text-6xl font-extrabold"),"h-3":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-2xl lg:text-5xl md:text-3xl md:font-extrabold font-bold"),"h-4":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-xxl md:text-3xl font-bold"),"h-5":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-base lg:text-xl font-bold"),"h-6":classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-base lg:text-lg font-semibold")},variants={primary:classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-neutral-500"),negative:classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-neutral-100")},defaultValues={type:"h-1",variant:"normal",font:"principal",className:""},Heading=function Heading(_ref){var _cn,title=_ref.title,_ref$type=_ref.type,type=void 0===_ref$type?defaultValues.type:_ref$type,_ref$variant=_ref.variant,variant=void 0===_ref$variant?defaultValues.variant:_ref$variant,_ref$font=_ref.font,font=void 0===_ref$font?defaultValues.font:_ref$font,_ref$className=_ref.className,className=void 0===_ref$className?defaultValues.className:_ref$className,headingClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,(_cn={},(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_cn,[null==fonts?void 0:fonts[font]],font),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_cn,[null==types?void 0:types[type]],type),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_cn,[null==variants?void 0:variants[variant]],variant),_cn));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:headingClasses,children:title})};Heading.defaultProps=defaultValues,Heading.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{type:{defaultValue:{value:'"h-1"',computed:!1},description:"",type:{name:"enum",value:[{value:'"h-1"',computed:!1},{value:'"h-2"',computed:!1},{value:'"h-3"',computed:!1},{value:'"h-4"',computed:!1},{value:'"h-5"',computed:!1},{value:'"h-6"',computed:!1}]},required:!1},variant:{defaultValue:{value:'"normal"',computed:!1},description:"",type:{name:"enum",value:[{value:'"normal"',computed:!1},{value:'"primary"',computed:!1},{value:'"negative"',computed:!1}]},required:!1},font:{defaultValue:{value:'"principal"',computed:!1},description:"",type:{name:"enum",value:[{value:'"principal"',computed:!1},{value:'"secondary"',computed:!1}]},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1}}},__webpack_exports__.Z=Heading},"./src/atoms/Icon/Icon.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),defaultValues={className:"",type:"solid"},Icon=function Icon(_ref){var _cn,iconName=_ref.iconName,_ref$className=_ref.className,className=void 0===_ref$className?defaultValues.className:_ref$className,_ref$type=_ref.type,type=void 0===_ref$type?defaultValues.type:_ref$type;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("select-none leading-0",className,(_cn={},(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_cn,"material-icons-outlined","outlined"===type),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_cn,"font-icons","solid"===type),_cn)),children:iconName})};Icon.defaultProps=defaultValues,Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},type:{defaultValue:{value:'"solid"',computed:!1},description:"",type:{name:"enum",value:[{value:'"solid"',computed:!1},{value:'"outlined"',computed:!1}]},required:!1},iconName:{description:"",type:{name:"string"},required:!1}}},__webpack_exports__.Z=Icon},"./src/organisms/Numbers/Numbers.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/atoms/Icon/Icon.js"),_atoms_Heading_Heading__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/atoms/Heading/Heading.js"),classnames__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),react_countup__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/react-countup/build/index.js"),react_visibility_sensor__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/react-visibility-sensor/dist/visibility-sensor.js"),react_visibility_sensor__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_5__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),defaultValues={className:"",theme:"dark",number:0},variants={shadow:"border rounded-lg shadow-lb p-4",stroke:"border rounded-lg p-4"},themes={dark:"text-neutral-800",light:"text-neutral-100"},colors={"neutral-100":"border-neutral-100 shadow-neutral-100","neutral-200":"border-neutral-200 shadow-neutral-200","neutral-300":"border-neutral-300 shadow-neutral-300","neutral-400":"border-neutral-400 shadow-neutral-400","neutral-500":"border-neutral-500 shadow-neutral-500","neutral-600":"border-neutral-600 shadow-neutral-600","neutral-700":"border-neutral-700 shadow-neutral-700","neutral-800":"border-neutral-800 shadow-neutral-800","neutral-900":"border-neutral-900 shadow-neutral-900","primary-100":"border-primary-100 shadow-primary-100","primary-200":"border-primary-200 shadow-primary-200","primary-300":"border-primary-300 shadow-primary-300","primary-400":"border-primary-400 shadow-primary-400","primary-500":"border-primary-500 shadow-primary-500","primary-600":"border-primary-600 shadow-primary-600","primary-700":"border-primary-700 shadow-primary-700","primary-800":"border-primary-800 shadow-primary-800","primary-900":"border-primary-900 shadow-primary-900"},Numbers=function Numbers(_ref){var _cn,_ref$number=_ref.number,number=void 0===_ref$number?defaultValues.number:_ref$number,title=_ref.title,iconName=_ref.iconName,description=_ref.description,variant=_ref.variant,color=_ref.color,_ref$className=_ref.className,className=void 0===_ref$className?defaultValues.className:_ref$className,_ref$theme=_ref.theme,theme=void 0===_ref$theme?defaultValues.theme:_ref$theme,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),_useState2=(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__.Z)(_useState,2),finishedCount=_useState2[0],setFinishedCount=_useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{id:"Numbers-Container",className:classnames__WEBPACK_IMPORTED_MODULE_3___default()(className,"flex flex-col bg-transparent ",(_cn={},(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__.Z)(_cn,null==variants?void 0:variants[variant],variant),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__.Z)(_cn,null==themes?void 0:themes[theme],theme),(0,C_Users_Maria_Sanchez_Documents_library_lottus23_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__.Z)(_cn,null==colors?void 0:colors[color],color),_cn)),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{id:"Number-Icon",className:"flex align-center items-center space-x-1 pb-2",children:[iconName?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"text-2xl lg:text-5xl md:text-3xl",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__.Z,{iconName:iconName,type:"outlined"})}):"",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_countup__WEBPACK_IMPORTED_MODULE_4__.ZP,{separator:",",start:0,end:number,onEnd:function onEnd(){return setFinishedCount(!0)},children:function children(_ref2){var countUpRef=_ref2.countUpRef,start=_ref2.start;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_5___default(),{onChange:function onChange(isVisible){isVisible&&!finishedCount&&start()},delayedCall:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"font-secondary text-2xl lg:text-5xl md:text-3xl font-bold leading-[125%] ",ref:countUpRef})})}})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{id:"Numbers-title",className:"pb-2",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_atoms_Heading_Heading__WEBPACK_IMPORTED_MODULE_2__.Z,{title:title,type:"h-6",font:"secondary"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{id:"Numbers-description",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"text-sm font-secondary",children:description})})]})};Numbers.defaultProps=defaultValues,Numbers.__docgenInfo={description:"",methods:[],displayName:"Numbers",props:{number:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},theme:{defaultValue:{value:'"dark"',computed:!1},description:"",type:{name:"enum",value:[{value:'"light"',computed:!1},{value:'"dark"',computed:!1}]},required:!1},iconName:{description:"",type:{name:"string"},required:!1},description:{description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1},variant:{description:"",type:{name:"enum",value:[{value:'"shadow"',computed:!1},{value:'"stroke"',computed:!1},{value:'""',computed:!1}]},required:!1},color:{description:"",type:{name:"enum",value:[{value:'"neutral-100"',computed:!1},{value:'"neutral-200"',computed:!1},{value:'"neutral-300"',computed:!1},{value:'"neutral-400"',computed:!1},{value:'"neutral-500"',computed:!1},{value:'"neutral-600"',computed:!1},{value:'"neutral-700"',computed:!1},{value:'"neutral-800"',computed:!1},{value:'"neutral-900"',computed:!1},{value:'"primary-100"',computed:!1},{value:'"primary-200"',computed:!1},{value:'"primary-300"',computed:!1},{value:'"primary-400"',computed:!1},{value:'"primary-500"',computed:!1},{value:'"primary-600"',computed:!1},{value:'"primary-700"',computed:!1},{value:'"primary-800"',computed:!1},{value:'"primary-900"',computed:!1}]},required:!1}}},__webpack_exports__.Z=Numbers}}]);