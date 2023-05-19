"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Icon = _interopRequireDefault(require("../../atoms/Icon"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var defaultValues = {
  type: "",
  value: "",
  text: "",
  className: "",
  target: "_self"
};
var Extensions = function Extensions(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? defaultValues.type : _ref$type,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? defaultValues.value : _ref$value,
    _ref$text = _ref.text,
    text = _ref$text === void 0 ? defaultValues.text : _ref$text,
    icon = _ref.icon,
    _ref$target = _ref.target,
    target = _ref$target === void 0 ? defaultValues.target : _ref$target,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? defaultValues.className : _ref$className;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _classnames.default)(className, "flex space-x-2 items-start group"),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, _objectSpread(_objectSpread({}, icon), {}, {
      className: "group-hover:animate-bounce"
    })), type === "phone" ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "md:hidden  cursor-pointer ",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          href: "tel:" + value,
          target: target,
          children: text
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "hidden md:flex  ",
        children: text
      })]
    }) : type === "mail" ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "hover:underline cursor-pointer ",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        href: "mailto:" + value,
        target: target,
        children: text
      })
    }) : type === "link" ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: " hover:underline cursor-pointer ",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        href: value,
        target: target,
        children: text
      })
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: text
    })]
  });
};
Extensions.propTypes = {
  type: _propTypes.default.oneOf(["phone", "mail", "link", ""]),
  value: _propTypes.default.string,
  text: _propTypes.default.string,
  icon: _propTypes.default.object,
  target: _propTypes.default.string,
  className: _propTypes.default.string
};
Extensions.defaultProps = defaultValues;
var _default = Extensions;
exports.default = _default;