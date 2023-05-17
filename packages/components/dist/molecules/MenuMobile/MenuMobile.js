"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _classesHelper = require("../../helpers/classesHelper");
var _myrefHelper = require("../../helpers/myrefHelper");
var _TextLink = _interopRequireDefault(require("../../atoms/TextLink"));
var _Button = _interopRequireDefault(require("../../atoms/Button"));
var _Icon = _interopRequireDefault(require("../../atoms/Icon"));
var _PromoLink = _interopRequireDefault(require("../../organisms/PromoLink"));
var _SocialMedia = _interopRequireDefault(require("../SocialMedia"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var MenuMobile = function MenuMobile(_ref) {
  var _stylesSubMenuMob;
  var _ref$submenuM = _ref.submenuM,
    submenuM = _ref$submenuM === void 0 ? false : _ref$submenuM,
    itemsData = _ref.itemsData,
    btn = _ref.btn,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    socialMedia = _ref.socialMedia;
  // expand icon state
  var iconExpandMore = "arrow_forward_ios";
  var active = "principal";
  var inactive = "inactive";
  var iconExpandLess = "arrow_back_ios";
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    index = _useState2[0],
    setIndex = _useState2[1];
  var _useState3 = (0, _react.useState)(active),
    _useState4 = _slicedToArray(_useState3, 2),
    type = _useState4[0],
    setType = _useState4[1];
  var _useState5 = (0, _react.useState)(inactive),
    _useState6 = _slicedToArray(_useState5, 2),
    sub = _useState6[0],
    setSub = _useState6[1];
  var handleArrowMore = function handleArrowMore(index) {
    setType(inactive);
    setSub(active);
    setIndex(index);
  };
  var handleArrowLess = function handleArrowLess() {
    setType(active);
    setSub(inactive);
  };
  var ClassesMenuContainer = (0, _classnames.default)(" w-full bg-neutral-100 container overscroll-contain h-[90%] px-2 overflow-hidden", className);
  var ClassesItemsContainer = (0, _classnames.default)("w-full flex flex-col  py-1 z-20  border-t border-neutral-300");
  var classesItems = (0, _classnames.default)("flex justify-between items-center p-1 h-full border-b border-neutral-300 cursor-pointer");
  var classesSubMenuContainer = (0, _classnames.default)("w-full flex flex-col  py-1 z-20 overscroll-contain h-[90%] ");
  var classesReverse = (0, _classnames.default)("flex justify-end items-center p-1 border-b border-t w-full border-neutral-300 cursor-pointer flex-row-reverse");
  var ClassesMenuMobContainer = (0, _classnames.default)("w-d:hidden w-full ", "bg-neutral-100", "border-t border-neutral-300", "p-2 top-12", "flex absolute flex-col overflow-y-auto overscrol-contain", " transition  ease-in-out delay-150 ", _defineProperty({}, "left-0 ", !submenuM));
  var navClasses = {
    transform: !submenuM ? "translate3d(0, 0, 0)" : "translate3d(-150%, 0, 0)",
    opacity: "1"
  };
  var MenuMobStyles = {
    inactive: {
      transform: "translate3d(0,0,0)",
      msOverflowStyle: "none" /* IE and Edge */
    },

    principal: {
      transform: "translate3d(0, 0, 0)",
      position: "absolute",
      opacity: "1",
      msOverflowStyle: "none" /* IE and Edge */
    }
  };

  var commonClassesMenuMob = (0, _classnames.default)("h-80 w-full", "overflow-y-scroll lg:hidden flex overscroll-contain", "pr-2", "-translate-x-full transition  ease-in-out delay-150");
  var classesSubMenuMob = (0, _classnames.default)("w-full h-full top-2 left-0 absolute bg-neutral-100", "overflow-auto lg:hidden flex overscroll-contain");
  var stylesSubMenuMob = (_stylesSubMenuMob = {
    msOverflowStyle: "none" /* IE and Edge */
  }, _defineProperty(_stylesSubMenuMob, "msOverflowStyle", "none"), _defineProperty(_stylesSubMenuMob, "transform", sub === "principal" ? "translate3d(0, 0, 0)" : "translate3d(200%, 0, 0)"), _defineProperty(_stylesSubMenuMob, "transition", "transform 0.5s, opacity 0.1s"), _stylesSubMenuMob);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: ClassesMenuContainer,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      id: "MenuM",
      className: ClassesMenuMobContainer,
      style: navClasses,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        id: "MenuContainer",
        className: "overscroll-contain h-screen   ",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          id: "MenuOptions",
          className: commonClassesMenuMob,
          style: MenuMobStyles[type],
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            id: "itemsContainer",
            className: ClassesItemsContainer,
            children: itemsData.map(function (item, itemIndex) {
              if (item.children.length) {
                return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: classesItems,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: (0, _classesHelper.getClassItemMobContainer)(item.active, true),
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      onClick: function onClick() {
                        return (0, _myrefHelper.myhref)(item.route);
                      },
                      className: " flex py-1",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextLink.default, {
                        text: item.label,
                        href: item.route
                      })
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    id: "iconGo",
                    className: (0, _classesHelper.getClassIconMobContainer)(item.iconActive),
                    onClick: function onClick(_) {
                      return handleArrowMore(itemIndex);
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
                      iconName: iconExpandMore
                    })
                  })]
                }, itemIndex);
              } else {
                return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: (0, _classesHelper.getClassItemMobContainer)(item.active, false),
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "flex-1",
                    onClick: function onClick() {
                      return (0, _myrefHelper.myhref)(item.route);
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextLink.default, {
                      text: item.label,
                      href: item.route
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    id: "iconGo",
                    className: "p-3 cursor-pointer",
                    onClick: function onClick() {
                      return (0, _myrefHelper.myhref)(item.route);
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
                      iconName: iconExpandMore
                    })
                  })]
                }, itemIndex);
              }
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          id: "subMenu",
          className: classesSubMenuMob,
          style: stylesSubMenuMob,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: classesSubMenuContainer,
            style: _defineProperty({
              msOverflowStyle: "none"
            }, "msOverflowStyle", "none"),
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: classesReverse,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TextLink.default, {
                text: itemsData[index].label,
                href: itemsData[index].route
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                id: "iconGo",
                className: "px-2 py-1 cursor-pointer flex items-center",
                onClick: function onClick() {
                  return handleArrowLess();
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
                  iconName: iconExpandLess
                })
              })]
            }), itemsData[index].children.map(function (item, itemIndex) {
              if (item.principal) {
                return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: (0, _classesHelper.getClassItemMobContainer)(item.active, item.principal),
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "flex-1",
                    onClick: function onClick() {
                      (0, _myrefHelper.myhref)(item.route);
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextLink.default, {
                      text: item.label,
                      href: item.route
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    id: "iconGo",
                    className: "px-3 py-1 cursor-pointer  border-l-2  border-neutral-300",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
                      iconName: iconExpandMore
                    })
                  })]
                }, itemIndex);
              } else {
                return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: (0, _classesHelper.getClassItemMobContainer)(item.active, item.principal),
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "flex-1",
                    onClick: function onClick() {
                      return (0, _myrefHelper.myhref)(item.route);
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextLink.default, {
                      text: item.label,
                      href: item.route,
                      items: false
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    id: "iconGo",
                    className: "px-3 py-1 cursor-pointer",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
                      iconName: iconExpandMore
                    })
                  })]
                }, itemIndex);
              }
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          id: "info",
          className: " absolute bottom-10 lg:hidden bg-neutral-100 flex flex-1 flex-col w-full",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "py-2 px-2",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
              id: btn === null || btn === void 0 ? void 0 : btn.id,
              label: btn === null || btn === void 0 ? void 0 : btn.label,
              variant: btn === null || btn === void 0 ? void 0 : btn.variant,
              size: "sm",
              iconName: btn === null || btn === void 0 ? void 0 : btn.iconName,
              className: "min-w-full flex justify-center",
              onClick: btn === null || btn === void 0 ? void 0 : btn.onclick
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex flex-row w-full rounded py-2 px-2",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_PromoLink.default, {
              text: "link",
              route: "/route"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PromoLink.default, {
              text: "link2",
              route: "/route"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SocialMedia.default, {
              socialMedia: socialMedia,
              svgClass: "text-neutral-600"
            })
          })]
        })]
      })
    })
  });
};
MenuMobile.propTypes = {
  submenuM: _propTypes.default.bool,
  itemsData: _propTypes.default.object,
  btn: _propTypes.default.object,
  className: _propTypes.default.string,
  socialMedia: _propTypes.default.object
};
MenuMobile.defaultProps = {
  className: "",
  submenuM: true
};
var _default = MenuMobile;
exports.default = _default;