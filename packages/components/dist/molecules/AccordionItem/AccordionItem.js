"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _Icon = _interopRequireDefault(require("../../atoms/Icon/Icon"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _myrefHelper = require("../../helpers/myrefHelper");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var defaultValues = {
  ColorClass: "",
  borderDownOn: false,
  titleClass: "",
  oneItemOpen: false
};
var AccordionItem = function AccordionItem(_ref) {
  var _cn;
  var data = _ref.data,
    _ref$ColorClass = _ref.ColorClass,
    ColorClass = _ref$ColorClass === void 0 ? defaultValues.ColorClass : _ref$ColorClass,
    _ref$borderDownOn = _ref.borderDownOn,
    borderDownOn = _ref$borderDownOn === void 0 ? defaultValues.borderDownOn : _ref$borderDownOn,
    onToggle = _ref.onToggle,
    open = _ref.open,
    _ref$titleClass = _ref.titleClass,
    titleClass = _ref$titleClass === void 0 ? defaultValues.titleClass : _ref$titleClass,
    _ref$oneItemOpen = _ref.oneItemOpen,
    oneItemOpen = _ref$oneItemOpen === void 0 ? defaultValues.oneItemOpen : _ref$oneItemOpen;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setOpen = _useState2[1];
  var handleOnClick = function handleOnClick() {
    if (isOpen) {
      return setOpen(false);
    }
    setOpen(true);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    id: "Accordion-item",
    className: "font-principal",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      id: "accordion-item-title",
      className: (0, _classnames.default)(ColorClass, "border border-neutral-400 flex flex-1 items-start py-6 px-4 cursor-pointer", (_cn = {}, _defineProperty(_cn, "border-b-0", !borderDownOn), _defineProperty(_cn, "bg-neutral-200", open || isOpen), _cn)),
      onClick: oneItemOpen ? onToggle : handleOnClick,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "flex pr-4 text-neutral-600",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, _objectSpread({}, data === null || data === void 0 ? void 0 : data.icon))
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: (0, _classnames.default)(titleClass, "flex w-full pr-4"),
        children: data === null || data === void 0 ? void 0 : data.title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: (0, _classnames.default)("flex pr-4 text-neutral-600 cursor-pointer"),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
          iconName: oneItemOpen && open || isOpen ? "expand_less" : "expand_more"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: data === null || data === void 0 ? void 0 : data.text
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      id: "accordeon-item-content",
      className: (0, _classnames.default)("flex flex-col", _defineProperty({}, "h-0 hidden", !open && !isOpen)),
      children: data === null || data === void 0 ? void 0 : data.content.map(function (item, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: (0, _classnames.default)("flex px-4 border border-t-0 border-neutral-400 py-2 items-center", _defineProperty({}, "cursor-pointer", item === null || item === void 0 ? void 0 : item.link)),
          onClick: item.link ? function () {
            (0, _myrefHelper.myhref)(item.link);
          } : item.onClick ? item.onClick : function () {},
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "w-full",
            children: item === null || item === void 0 ? void 0 : item.text
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: (0, _classnames.default)("text-neutral-700 font-bold text-2xl leading-0 flex items-start cursor-pointer", _defineProperty({}, "invisible", !item.iconHoriz)),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
              iconName: "more_horiz"
            })
          })]
        }, index);
      })
    })]
  });
};
AccordionItem.propTypes = {
  data: _propTypes.default.array,
  ColorClass: _propTypes.default.string,
  borderDownOn: _propTypes.default.bool,
  onToggle: _propTypes.default.func,
  open: _propTypes.default.bool,
  titleClass: _propTypes.default.string,
  oneItemOpen: _propTypes.default.bool
};
AccordionItem.defaultProps = defaultValues;
var _default = AccordionItem;
exports.default = _default;