"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getclassSubMenu = exports.getPositionContainerText = exports.getClassItemMobContainer = exports.getClassItem = exports.getClassIconMobContainer = exports.getClassBannerPositionButton = exports.getClassBannerImage = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* Classes*/

var getClassBannerImage = function getClassBannerImage(overlay) {
  var classesBannerImg = (0, _classnames.default)("w-full h-full", _defineProperty({}, "opacity-50", overlay === "light"));
  return classesBannerImg;
};
exports.getClassBannerImage = getClassBannerImage;
var getPositionContainerText = function getPositionContainerText(potition) {
  var commonClasses = (0, _classnames.default)("absolute p-10", "top-0  left-0", "w-full h-full", "hidden md:flex ");
  var positions = {
    "center-top": "justify-center items-start text-center",
    "center-middle": "justify-center items-center text-center",
    "center-bottom": "justify-center items-end text-center",
    "left-top": "justify-start items-start text-left",
    "left-middle": "justify-start items-center text-left",
    "left-bottom": "justify-start items-end text-left",
    "right-top": "justify-end items-start text-right",
    "right-middle": "justify-end items-center text-right",
    "right-bottom": "justify-end items-end text-right"
  };
  var classesBannerImg = (0, _classnames.default)(commonClasses, _defineProperty({}, [positions[potition]], true));
  return classesBannerImg;
};
exports.getPositionContainerText = getPositionContainerText;
var getClassBannerPositionButton = function getClassBannerPositionButton(potition) {
  var _cn3;
  var classesBannerImg = (0, _classnames.default)("flex", (_cn3 = {}, _defineProperty(_cn3, "justify-center items-start text-center", potition === "center-top"), _defineProperty(_cn3, "justify-center items-center text-center", potition === "center-middle"), _defineProperty(_cn3, "justify-center items-end text-center", potition === "center-bottom"), _defineProperty(_cn3, "justify-start items-start text-left", potition === "left-top"), _defineProperty(_cn3, "justify-start items-center text-left", potition === "left-middle"), _defineProperty(_cn3, "justify-start items-end text-left", potition === "left-bottom"), _defineProperty(_cn3, "justify-end items-start text-right", potition === "right-top"), _defineProperty(_cn3, "justify-end items-center text-right", potition === "right-middle"), _defineProperty(_cn3, "justify-end items-end text-right", potition === "right-bottom"), _cn3));
  return classesBannerImg;
};
exports.getClassBannerPositionButton = getClassBannerPositionButton;
var getClassItem = function getClassItem(principal, active) {
  var _cn4;
  var classItem = (0, _classnames.default)("flex flex-1 flex-nowrap align-middle  ", (_cn4 = {}, _defineProperty(_cn4, "font-bold", principal), _defineProperty(_cn4, "underline", active), _defineProperty(_cn4, "pl-2  py-4", !principal), _defineProperty(_cn4, "bg-neutral-900 text-neutral-100", active && !principal), _cn4));
  return classItem;
};
exports.getClassItem = getClassItem;
var classesSubMenu = (0, _classnames.default)("flex absolute flex-row flex-1", "shadow shadow-lg", "font-normal", "bg-neutral-100", "w-full h-14 lg:h-auto xl:h-auto 2xl:h-auto", "invisible lg:visible", "pl-2", "border-t border-neutral-300");
var getclassSubMenu = function getclassSubMenu(submenu) {
  var classSubMenu = (0, _classnames.default)(classesSubMenu, _defineProperty({}, "hidden", submenu));
  return classSubMenu;
};
exports.getclassSubMenu = getclassSubMenu;
var getClassItemMobContainer = function getClassItemMobContainer(active, principal) {
  var _cn6;
  var classItemMobContainer = (0, _classnames.default)("flex", (_cn6 = {}, _defineProperty(_cn6, "bg-neutral-900 text-neutral-100", active), _defineProperty(_cn6, "flex-1", principal), _defineProperty(_cn6, "justify-between items-center p-1 border-b border-neutral-300 cursor-pointer", !principal), _cn6));
  return classItemMobContainer;
};
exports.getClassItemMobContainer = getClassItemMobContainer;
var commonClassesItems = (0, _classnames.default)("px-3 py-1 cursor-pointer  border-l  border-neutral-300 hover:bg-neutral-300 hover:text-neutral-900 ");
var getClassIconMobContainer = function getClassIconMobContainer(active) {
  var classIconMobContainer = (0, _classnames.default)(commonClassesItems, _defineProperty({}, "bg-neutral-900 text-neutral-100", active));
  return classIconMobContainer;
};
exports.getClassIconMobContainer = getClassIconMobContainer;