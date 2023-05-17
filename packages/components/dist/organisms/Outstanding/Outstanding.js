"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Aspect = _interopRequireDefault(require("../../atoms/Aspect/Aspect"));
var _Heading = _interopRequireDefault(require("../../atoms/Heading/Heading"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _position, _paddings, _paddingContent;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var position = (_position = {}, _defineProperty(_position, "right", "flex-col-reverse md:flex-row-reverse md:pt-6  pt-4"), _defineProperty(_position, "left", "flex-col-reverse md:flex-row md:pt-6  pt-4"), _position);
var paddings = (_paddings = {}, _defineProperty(_paddings, "right", "md:pl-8 md:pr-0 px-0"), _defineProperty(_paddings, "left", "md:pr-8 md:pl-0 px-0"), _paddings);
var paddingContent = (_paddingContent = {}, _defineProperty(_paddingContent, "right", "md:pr-8 md:pl-0 px-4 "), _defineProperty(_paddingContent, "left", "md:pl-8 md:pr-0 px-4 "), _paddingContent);
var defaultValues = {
  imgPosition: "right",
  backgroundColor: "color1"
};
var colors = {
  color1: "bg-outstanding-100",
  color2: "bg-outstanding-200",
  color3: "bg-outstanding-300",
  color4: "bg-outstanding-400",
  color5: "bg-neutral-500",
  color6: "bg-neutral-800",
  color7: "bg-neutral-900"
};
var Outstanding = function Outstanding(_ref) {
  var _cn;
  var imageUrl = _ref.imageUrl,
    title = _ref.title,
    paragraph = _ref.paragraph,
    _ref$imgPosition = _ref.imgPosition,
    imgPosition = _ref$imgPosition === void 0 ? defaultValues.imgPosition : _ref$imgPosition,
    _ref$backgroundColor = _ref.backgroundColor,
    backgroundColor = _ref$backgroundColor === void 0 ? defaultValues.backgroundColor : _ref$backgroundColor;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _classnames.default)("flex  md:px-6", (_cn = {}, _defineProperty(_cn, position[imgPosition], true), _defineProperty(_cn, colors[backgroundColor], true), _cn)),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "md:w-1/2 w-full self-end",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Aspect.default, {
        ratio: "2/1",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: imageUrl,
          className: (0, _classnames.default)("w-full h-full object-cover object-center", _defineProperty({}, paddings[imgPosition], true))
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _classnames.default)("flex flex-col text-neutral-100 md:w-1/2 w-full", _defineProperty({}, paddingContent[imgPosition], true)),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Heading.default, {
        title: title,
        type: "h-5",
        font: "secondary",
        className: "pb-4"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "text-neutral-100 font-secondary align-center md:pb-6 pb-4 md:text-base text-sm",
        children: paragraph
      })]
    })]
  });
};
Outstanding.propTypes = {
  imageUrl: _propTypes.default.string,
  title: _propTypes.default.string,
  paragraph: _propTypes.default.string,
  imgPosition: _propTypes.default.oneOf(["right", "left"]),
  backgroundColor: _propTypes.default.oneOf(["color1", "color2", "color3", "color4", "color5", "color6", "color7"])
};
Outstanding.defaultProps = defaultValues;
var _default = Outstanding;
exports.default = _default;