"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _instagram = _interopRequireDefault(require("../../assets/instagram.svg"));
var _facebook = _interopRequireDefault(require("../../assets/facebook.svg"));
var _twitter = _interopRequireDefault(require("../../assets/twitter.svg"));
var _tiktok = _interopRequireDefault(require("../../assets/tiktok.svg"));
var _myrefHelper = require("../../helpers/myrefHelper");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _logos;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var defaultValues = {
  className: ""
};
var logos = (_logos = {}, _defineProperty(_logos, "instagram", _instagram.default), _defineProperty(_logos, "facebook", _facebook.default), _defineProperty(_logos, "twitter", _twitter.default), _defineProperty(_logos, "tiktok", _tiktok.default), _logos);
var smClass = (0, _classnames.default)("cursor-pointer");
var SocialMedia = function SocialMedia(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? defaultValues.className : _ref$className,
    socialMedia = _ref.socialMedia,
    imgClassName = _ref.imgClassName;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _classnames.default)(className, "flex px-10 py-10 w-full justify-center space-x-2  "),
    children: socialMedia === null || socialMedia === void 0 ? void 0 : socialMedia.map(function (sm, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        className: (0, _classnames.default)(imgClassName, smClass),
        src: logos[sm.socialName],
        alt: sm === null || sm === void 0 ? void 0 : sm.alt,
        onClick: function onClick() {
          (0, _myrefHelper.myhref)(sm === null || sm === void 0 ? void 0 : sm.link);
        }
      }, index);
    })
  });
};
SocialMedia.propTypes = {
  className: _propTypes.default.string
};
SocialMedia.defaultProps = defaultValues;
var _default = SocialMedia;
exports.default = _default;