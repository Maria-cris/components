"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Heading = _interopRequireDefault(require("../../atoms/Heading"));
var _Extensions = _interopRequireDefault(require("../../molecules/Extensions/Extensions"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Button = _interopRequireDefault(require("../../atoms/Button"));
var _textHelper = require("../../helpers/textHelper");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var defaultValues = {
  imgUrl: "",
  title: "",
  variant: "dark",
  links: {}
};
var variants = {
  light: "text-neutral-100",
  dark: "text-neutral-900"
};
var LeaderBoard = function LeaderBoard(_ref) {
  var _ref$imgUrl = _ref.imgUrl,
    imgUrl = _ref$imgUrl === void 0 ? defaultValues.imgUrl : _ref$imgUrl,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? defaultValues.title : _ref$title,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? defaultValues.variant : _ref$variant,
    _ref$links = _ref.links,
    links = _ref$links === void 0 ? defaultValues.links : _ref$links,
    button = _ref.button;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _classnames.default)("w-full md:h-52 h-64 text-sm md:text-base relative overflow-hidden", _defineProperty({}, variants[variant], true)),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      src: imgUrl,
      className: "w-full h-full object-cover object-center"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "absolute top-0 left-0 p-10 md:px-20 md:py-12 w-full h-full flex flex-col ",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "pb-4",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Heading.default, {
          title: (0, _textHelper.getTextCount)(title, 61),
          type: "h-4",
          font: "principal"
        })
      }), button ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
          className: "flex flex-col space-y-4 font-principal",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            children: [" ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_Extensions.default, _objectSpread({}, links === null || links === void 0 ? void 0 : links[0]))]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, _objectSpread({}, button))
          })]
        })
      }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex md:flex-row md:space-x-4 flex-col max-[775px]:space-y-4",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
          className: "flex flex-col space-y-4 font-principal",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Extensions.default, _objectSpread({}, links === null || links === void 0 ? void 0 : links[0])), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Extensions.default, _objectSpread({}, links === null || links === void 0 ? void 0 : links[1]))]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
          className: "flex flex-col space-y-4 font-principal ",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Extensions.default, _objectSpread({}, links === null || links === void 0 ? void 0 : links[2])), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Extensions.default, _objectSpread({}, links === null || links === void 0 ? void 0 : links[3]))]
        })]
      })]
    })]
  });
};
LeaderBoard.propTypes = {
  variant: _propTypes.default.oneOf(["light", "dark"]),
  imgUrl: _propTypes.default.string,
  title: _propTypes.default.string,
  links: _propTypes.default.array,
  button: _propTypes.default.object
};
var _default = LeaderBoard;
exports.default = _default;