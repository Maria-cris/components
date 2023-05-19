"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _useScrollDirection = require("../../hooks/useScrollDirection");
var _classesHelper = require("../../helpers/classesHelper");
var _reactLottiePlayer = _interopRequireDefault(require("react-lottie-player"));
var _menu = _interopRequireDefault(require("../../assets/lotties/menu.json"));
var _TextLink = _interopRequireDefault(require("../../atoms/TextLink"));
var _MenuMobile = _interopRequireDefault(require("../../molecules/MenuMobile"));
var _Icon = _interopRequireDefault(require("../../atoms/Icon/Icon"));
var _Button = _interopRequireDefault(require("../../atoms/Button"));
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
var classesHeader = (0, _classnames.default)("flex flex-1 hidden lg:flex min-[320px]:hidden", "p-1", "h-14 lg:h-auto", "shadow-lg", "bg-white");
var classesLogo = (0, _classnames.default)("flex relative", "p-4", "items-center justify-items-center", "border-r border-neutral-300");
var classesLanguages = (0, _classnames.default)("flex flex-start flex-grow", "px-6 my-1", "border-b border-neutral-300", "h-6");
var classesOptionsContainer = (0, _classnames.default)("flex", "border-b border-neutral-300", "my-1", "justify-items-end", "h-6");
var classesOptionsTitle = (0, _classnames.default)("flex flex-nowrap relative ", "pr-7", "text-neutral-500 font-principal");
var classesOptions = (0, _classnames.default)("flex flex-1 flex-end flex-nowrap", "pr-6", "cursor-pointer", "justify-center", "text-primary-500 font-principal font-bold");
var classesNavContainer = (0, _classnames.default)("flex flex-grow relative", "px-6", "items-center");
var classesSearch = (0, _classnames.default)("flex", "justify-center", "cursor-pointer", "border-r border-l border-neutral-300", "py-4 my-2 hidden");
var classButton = (0, _classnames.default)("flex", "items-start align-center justify-center text-center", "pr-6", "font-bold text-sm");
var classesHeaderMobile = (0, _classnames.default)("flex absolute lg:hidden z-20", "px-1 py-1", "shadow", "top-0", "w-full");
var classesMenuMobile = (0, _classnames.default)("py-4 px-2", "w-12 h-12", "flex items-center justify-center", "cursor-pointer");
var classesLogoMobile = (0, _classnames.default)("flex relative", "w-full", "items-center justify-items-center justify-center");
var classesSearchContainer = (0, _classnames.default)("flex relative flex-end hidden", "border-l-2  border-neutral-300", "px-2");
var classesSearchMobile = (0, _classnames.default)("py-4 px-2", "w-12 h-12", "flex hidden", "items-center justify-center", "cursor-pointer ");
var defaultValues = {
  languages: false,
  className: ""
};
var Menu = function Menu(_ref) {
  var data = _ref.data,
    _ref$languages = _ref.languages,
    languages = _ref$languages === void 0 ? defaultValues.languages : _ref$languages,
    btn = _ref.btn,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? defaultValues.className : _ref$className;
  //hooks
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    submenu = _useState2[0],
    setmenu = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    submenuIn = _useState4[0],
    setmenuIn = _useState4[1];
  var _useState5 = (0, _react.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    submenuM = _useState6[0],
    setmenuM = _useState6[1];
  var _useState7 = (0, _react.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    index = _useState8[0],
    setitem = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    IconOpen = _useState10[0],
    setIconOpen = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    iconClose = _useState12[0],
    setIconClose = _useState12[1];
  var scrollDirection = (0, _useScrollDirection.useScrollDirection)();

  //function handlers
  var handleOnclickMenu = function handleOnclickMenu() {
    if (IconOpen) {
      setIconOpen(false);
      setIconClose(true);
      setmenuM(true);
    } else {
      setIconClose(false);
      setIconOpen(true);
      setmenuM(false);
      setitem(0);
    }
  };
  //classes
  var classLanguages = (0, _classnames.default)(" flex relative flex-1 flex-start text-primary-500 font-bold font-principal", _defineProperty({}, "invisible", !languages));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "sticky ".concat(scrollDirection === "down" && !IconOpen ? "-top-40" : "top-0", " z-20 bg-white transition duration-100"),
    style: {
      background: "#fff"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("header", {
      id: "NavbarDesk",
      className: classesHeader,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        id: "Logo",
        className: classesLogo,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          className: "w-36 h-10",
          src: data.logotype.src,
          alt: "logo"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex flex-1 flex-col ",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex flex-row flex-1 w-full",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            id: "Languages",
            className: classesLanguages,
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: classLanguages,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "border-r  border-neutral-300 pr-2  ",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                  children: "ES"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "px-2 ",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                  children: "EN"
                })
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            id: "Options",
            className: classesOptionsContainer,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: classesOptionsTitle,
              children: "Accesos para :"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: classesOptions,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                children: "Egresados"
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: classesOptions,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                children: "Estudiantes"
              })
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex flex-1 flex-row w-full",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("nav", {
            id: "Menu",
            className: classesNavContainer,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
              className: "flex space-x-5 whitespace-nowrap border-top border-neutral-300",
              children: data.menus.map(function (element, itemIndex) {
                if (element.items.length) {
                  return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                    className: (0, _classesHelper.getClassItem)(true, element.active),
                    onMouseEnter: function onMouseEnter(_) {
                      setmenu(false);
                      setitem(itemIndex);
                    },
                    onMouseLeave: function onMouseLeave(_) {
                      return submenuIn === false ? setmenu(false) : setmenu(true);
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextLink.default, {
                      text: element.label,
                      href: element.route,
                      items: true,
                      active: element.active ? element.active : false
                    })
                  }, itemIndex);
                } else {
                  return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                    className: (0, _classesHelper.getClassItem)(true, element.active),
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextLink.default, {
                      text: element.label,
                      items: false,
                      href: element.route
                    })
                  }, itemIndex);
                }
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            id: "Search",
            className: classesSearch,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
              iconName: "search"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            id: "btn",
            className: classButton,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
              label: btn === null || btn === void 0 ? void 0 : btn.label,
              size: "xsm",
              variant: "primary",
              iconName: btn === null || btn === void 0 ? void 0 : btn.iconName,
              onClick: btn === null || btn === void 0 ? void 0 : btn.onClick
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      id: "SubMenu",
      className: (0, _classesHelper.getclassSubMenu)(submenu),
      onMouseEnter: function onMouseEnter(_) {
        setmenuIn(true);
      },
      onMouseLeave: function onMouseLeave(_) {
        setmenuIn(false);
        setmenu(true);
      },
      children: data.menus[index].items.map(function (subitem, subitemIndex) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: " border-r border-neutral-300 h-auto flex flex-row flex-grow flex-1 flex-nowrap flex-inline relative ",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: (0, _classesHelper.getClassItem)(false, subitem.active),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextLink.default, {
              text: subitem.label,
              items: false,
              href: subitem.route
            })
          })
        }, subitemIndex);
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("header", {
      id: "NavbarMobile",
      className: classesHeaderMobile,
      style: {
        background: "#fff"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        id: "menu",
        className: "border-r-2 border-neutral-300  px-2",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          id: "icon",
          className: classesMenuMobile,
          onClick: handleOnclickMenu,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactLottiePlayer.default, {
            play: IconOpen || iconClose,
            loop: false,
            direction: iconClose ? -1 : 1,
            speed: 2,
            animationData: _menu.default,
            style: {
              width: 40,
              height: 40
            }
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        id: "Logo",
        className: classesLogoMobile,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: data.logotype.src,
          alt: "logo",
          className: "w-[90px] h-10 "
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        id: "search",
        className: classesSearchContainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: classesSearchMobile,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
            iconName: "search"
          })
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuMobile.default, {
      submenuM: submenuM,
      itemsData: data.menuMobile,
      btn: btn,
      socialMedia: data === null || data === void 0 ? void 0 : data.socialMedia
    })]
  });
};
Menu.propTypes = {
  data: _propTypes.default.array,
  languages: _propTypes.default.bool,
  btn: _propTypes.default.object,
  className: _propTypes.default.string
};
Menu.defaultProps = defaultValues;
var _default = Menu;
exports.default = _default;