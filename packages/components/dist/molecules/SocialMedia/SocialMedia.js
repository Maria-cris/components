"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _instagram = _interopRequireDefault(require("../../assets/instagram.svg"));
var _facebook = _interopRequireDefault(require("../../assets/facebook.svg"));
var _twitter = _interopRequireDefault(require("../../assets/twitter.svg"));
var _tiktok = _interopRequireDefault(require("../../assets/tiktok.svg"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var SocialMedia = function SocialMedia() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "flex px-10 py-10 w-full justify-center gap-2 ",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      className: "h-10",
      src: _instagram.default,
      alt: "insta"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      className: "h-10",
      src: _facebook.default,
      alt: "face"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      className: "h-10",
      src: _twitter.default,
      alt: "twit"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      className: "h-10",
      src: _tiktok.default,
      alt: "tiktok"
    })]
  });
};
var _default = SocialMedia;
exports.default = _default;