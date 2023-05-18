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
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var defaultValues = {
  contentVariant: "dark",
  size: "lg",
  position: "left-top",
  className: ""
};
var BannerContent = function BannerContent(_ref) {
  var _cn;
  var title = _ref.title,
    text = _ref.text,
    btn = _ref.btn,
    _ref$contentVariant = _ref.contentVariant,
    contentVariant = _ref$contentVariant === void 0 ? defaultValues.contentVariant : _ref$contentVariant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? defaultValues.size : _ref$size,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? defaultValues.position : _ref$position,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? defaultValues.className : _ref$className;
  var textColor = (0, _classnames.default)("pb-4 font-secondary", (_cn = {}, _defineProperty(_cn, "text-neutral-100", contentVariant === "light"), _defineProperty(_cn, "text-neutral-800", !contentVariant || contentVariant === "dark"), _cn));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      id: "banner-content",
      className: (0, _classesHelper.getPositionContainerText)(position),
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: {
          maxWidth: size === "lg" ? "600px" : size === "md" ? "450px" : "410px"
        },
        children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: textColor,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Heading.default, {
            title: (0, _textHelper.getTextCount)(title, 53),
            type: "h-3",
            font: "secondary"
          })
        }) : "", text ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: textColor,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: (0, _textHelper.getTextCount)(text, 132)
          })
        }) : "", btn ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _classesHelper.getClassBannerPositionButton)(position),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
            id: btn === null || btn === void 0 ? void 0 : btn.id,
            label: btn === null || btn === void 0 ? void 0 : btn.label,
            iconName: btn === null || btn === void 0 ? void 0 : btn.iconName,
            variant: contentVariant === "light" ? "outlined-negative" : "primary",
            size: size === "lg" ? "md" : size === "md" ? "sm" : "xsm"
          })
        }) : ""]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      id: "banner-content-mobile",
      className: "w-full h-full flex flex-col md:hidden ",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "py-4 text-neutral-800",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Heading.default, {
          title: title,
          type: "h-3",
          font: "secondary"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pb-4 text-neutral-800 font-secondary",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: text
        })
      }), btn ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pb-4 font-secondary",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
          id: btn === null || btn === void 0 ? void 0 : btn.id,
          label: btn === null || btn === void 0 ? void 0 : btn.label,
          variant: "primary",
          size: "xsm",
          iconName: btn === null || btn === void 0 ? void 0 : btn.iconName,
          className: "min-w-full flex justify-center",
          onClick: btn === null || btn === void 0 ? void 0 : btn.onClick
        })
      }) : ""]
    })]
  });
};
BannerContent.propTypes = {
  title: _propTypes.default.string,
  text: _propTypes.default.string,
  btn: _propTypes.default.object,
  contentVariant: _propTypes.default.oneOf(["light", "dark"]),
  size: _propTypes.default.oneOf(["lg", "md", "sm"]),
  position: _propTypes.default.oneOf(["left-top", "left-middle", "left-bottom", "center-top", "center-middle", "center-bottom", "right-top", "right-middle", "right-bottom"]),
  className: _propTypes.default.string
};
BannerContent.defaultProps = defaultValues;
var _default = BannerContent;
exports.default = _default;