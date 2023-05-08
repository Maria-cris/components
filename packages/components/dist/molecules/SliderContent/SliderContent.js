"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Heading = _interopRequireDefault(require("../../atoms/Heading/Heading"));
var _Button = _interopRequireDefault(require("../../atoms/Button/Button"));
var _classesHelper = require("../../helpers/classesHelper");
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
  contentVariant: "dark",
  position: "left-top",
  className: ""
};
var SliderContent = function SliderContent(_ref) {
  var _cn;
  var title = _ref.title,
    text = _ref.text,
    btn = _ref.btn,
    _ref$contentVariant = _ref.contentVariant,
    contentVariant = _ref$contentVariant === void 0 ? defaultValues.contentVariant : _ref$contentVariant,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? defaultValues.position : _ref$position,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? defaultValues.className : _ref$className;
  var textColor = (0, _classnames.default)("pb-4 font-secondary", (_cn = {}, _defineProperty(_cn, "text-neutral-100", contentVariant === "light"), _defineProperty(_cn, "text-neutral-800", contentVariant === "dark"), _cn));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      id: "slider-content",
      className: (0, _classesHelper.getPositionSliderContainerText)(position),
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "w-3/5",
        children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: textColor,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Heading.default, {
            title: (0, _textHelper.getTextCount)(title, 53),
            type: "h-3",
            font: "secondary",
            className: "font-semibold"
          })
        }) : "", text ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: textColor,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Heading.default, {
            title: (0, _textHelper.getTextCount)(text, 132),
            type: "h-6",
            font: "secondary"
          })
        }) : "", btn ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _classesHelper.getClassBannerPositionButton)(position),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, _objectSpread({
            variant: contentVariant === "light" ? "outlined-negative" : "primary",
            size: "sm"
          }, btn))
        }) : ""]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      id: "slider-content-mobile",
      className: "w-full h-full flex flex-col md:hidden ",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pb-4 text-neutral-800",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Heading.default, {
          title: title,
          type: "h-3",
          font: "secondary"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pb-4 text-neutral-800 font-secondary",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Heading.default, {
          title: text,
          type: "h-6",
          font: "secondary"
        })
      }), btn ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pb-4 font-secondary",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, _objectSpread({
          label: btn === null || btn === void 0 ? void 0 : btn.label,
          variant: "primary",
          size: "sm",
          className: "min-w-full flex justify-center"
        }, btn))
      }) : ""]
    })]
  });
};
SliderContent.propTypes = {
  title: _propTypes.default.string,
  text: _propTypes.default.string,
  btn: _propTypes.default.object,
  contentVariant: _propTypes.default.oneOf(["light", "dark"]),
  position: _propTypes.default.oneOf(["left-top", "left-middle", "left-bottom", "center-top", "center-middle", "center-bottom", "right-top", "right-middle", "right-bottom"]),
  className: _propTypes.default.string
};
SliderContent.defaultProps = defaultValues;
var _default = SliderContent;
exports.default = _default;