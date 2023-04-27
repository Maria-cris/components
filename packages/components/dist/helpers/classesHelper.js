"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClassBannerPositionButton = exports.getClassBannerImage = exports.getClassBannerContainer = void 0;
var _classnames4 = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* Classes*/

var getClassBannerImage = function getClassBannerImage(overlay) {
  var _classnames;
  var classesBannerImg = (0, _classnames4.default)("w-full h-full", (_classnames = {}, _defineProperty(_classnames, "opacity-50", overlay === "light"), _defineProperty(_classnames, "brightness-50", overlay === "dark"), _classnames));
  return classesBannerImg;
};
exports.getClassBannerImage = getClassBannerImage;
var getClassBannerContainer = function getClassBannerContainer(potition) {
  var _classnames2;
  var classesBannerImg = (0, _classnames4.default)("absolute top-0 p-10 left-0 w-full h-full hidden md:flex ", (_classnames2 = {}, _defineProperty(_classnames2, "justify-center items-start text-center", potition === "center-top"), _defineProperty(_classnames2, "justify-center items-center text-center", potition === "center-middle"), _defineProperty(_classnames2, "justify-center items-end text-center", potition === "center-bottom"), _defineProperty(_classnames2, "justify-start items-start text-left", potition === "left-top"), _defineProperty(_classnames2, "justify-start items-center text-left", potition === "left-middle"), _defineProperty(_classnames2, "justify-start items-end text-left", potition === "left-bottom"), _defineProperty(_classnames2, "justify-end items-start text-right", potition === "right-top"), _defineProperty(_classnames2, "justify-end items-center text-right", potition === "right-middle"), _defineProperty(_classnames2, "justify-end items-end text-right", potition === "right-bottom"), _classnames2));
  return classesBannerImg;
};
exports.getClassBannerContainer = getClassBannerContainer;
var getClassBannerPositionButton = function getClassBannerPositionButton(potition) {
  var _classnames3;
  var classesBannerImg = (0, _classnames4.default)("flex", (_classnames3 = {}, _defineProperty(_classnames3, "justify-center items-start text-center", potition === "center-top"), _defineProperty(_classnames3, "justify-center items-center text-center", potition === "center-middle"), _defineProperty(_classnames3, "justify-center items-end text-center", potition === "center-bottom"), _defineProperty(_classnames3, "justify-start items-start text-left", potition === "left-top"), _defineProperty(_classnames3, "justify-start items-center text-left", potition === "left-middle"), _defineProperty(_classnames3, "justify-start items-end text-left", potition === "left-bottom"), _defineProperty(_classnames3, "justify-end items-start text-right", potition === "right-top"), _defineProperty(_classnames3, "justify-end items-center text-right", potition === "right-middle"), _defineProperty(_classnames3, "justify-end items-end text-right", potition === "right-bottom"), _classnames3));
  return classesBannerImg;
};
exports.getClassBannerPositionButton = getClassBannerPositionButton;