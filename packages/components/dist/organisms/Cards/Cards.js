"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _index = _interopRequireDefault(require("../../atoms/Icon/index.js"));
var _TextLink = _interopRequireDefault(require("../../atoms/TextLink"));
var _Aspect = _interopRequireDefault(require("../../atoms/Aspect"));
var _myrefHelper = require("../../helpers/myrefHelper.js");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var types = {
  horizontal: "w-3/5",
  vertical: "h-full"
};
var display = {
  horizontal: "flex-row",
  vertical: "flex-col"
};
var classesContent = (0, _classnames.default)("flex flex-col", "relative", "justify-between", "p-4");
var classesSubTitle = (0, _classnames.default)("flex", "pb-2", "fot-bold font-principal text-neutral-500", "xl:text-xl lg:text-lg md:text-sm sm:text-xs");
var classesLink = (0, _classnames.default)("flex", "font-bold font-principal", "justify-end items-center", "xl:text-xl lg:text-lg md:text-sm sm:text-xs");
var classesTitle = (0, _classnames.default)("flex", "pb-2", "text-neutral-800 font-bold font-principal", "xl:text-xl lg:text-lg md:text-sm sm:text-xs ");
var classesText = (0, _classnames.default)("pb-2", "text-neutral-500", "font-nunito", "xl:text-xl lg:text-lg md:text-sm sm:text-xs");
var classesCard = (0, _classnames.default)("flex flex-1", "relative", "rounded border border-neutral-300");
var defaultValues = {
  type: "horizontal"
};
var Cards = function Cards(_ref) {
  var _cn6;
  var imageUrl = _ref.imageUrl,
    text = _ref.text,
    subtitle = _ref.subtitle,
    title = _ref.title,
    link = _ref.link,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? defaultValues.type : _ref$type;
  var classText = (0, _classnames.default)(classesText, _defineProperty({}, "hidden", !text));
  var classContent = (0, _classnames.default)(classesContent, _defineProperty({}, [types[type]], type));
  var classSubTitle = (0, _classnames.default)(classesSubTitle, _defineProperty({}, "hidden", !subtitle));
  var classLink = (0, _classnames.default)(classesLink, _defineProperty({}, "hidden", !link));
  var classTitle = (0, _classnames.default)(classesTitle, _defineProperty({}, "hidden", !title));
  var classCard = (0, _classnames.default)(classesCard, (_cn6 = {}, _defineProperty(_cn6, [display === null || display === void 0 ? void 0 : display[type]], type), _defineProperty(_cn6, "hover:shadow-lg cursor-pointer", link === null || link === void 0 ? void 0 : link.route), _cn6));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classCard,
    onClick: function onClick() {
      return (0, _myrefHelper.myhref)(link === null || link === void 0 ? void 0 : link.route);
    },
    children: [type === "horizontal" ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      id: "image",
      className: "w-2/5 h-auto aspect-auto bg-center ",
      style: {
        backgroundImage: "url(".concat(imageUrl, ")"),
        backgroundSize: "cover",
        backgroundPosition: "center"
      }
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Aspect.default, {
      ratio: "4/3",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        id: "image",
        className: "w-full h-full ",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          className: "w-full h-full",
          src: imageUrl,
          style: {
            objectFit: "cover",
            objectPosition: "center"
          }
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: classContent,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          id: "subtitle",
          className: classSubTitle,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: subtitle
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          id: "title",
          className: classTitle,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: title
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          id: "content",
          className: classText,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: text
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: classLink,
        onClick: function onClick() {
          return (0, _myrefHelper.myhref)(link === null || link === void 0 ? void 0 : link.route);
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TextLink.default, {
          text: link === null || link === void 0 ? void 0 : link.label,
          href: link === null || link === void 0 ? void 0 : link.route
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.default, {
          iconName: "arrow_forward_ios"
        })]
      })]
    })]
  });
};
Cards.propTypes = {
  imageUrl: _propTypes.default.string.isRequired,
  title: _propTypes.default.string,
  subtitle: _propTypes.default.string,
  text: _propTypes.default.string,
  link: _propTypes.default.object,
  type: _propTypes.default.string
};
Cards.defaultProps = defaultValues;
var _default = Cards;
exports.default = _default;