"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _index = _interopRequireDefault(require("../../atoms/TextLink/index.js"));
var _index2 = _interopRequireDefault(require("../../atoms/Aspect/index.js"));
var _myrefHelper = require("../../helpers/myrefHelper.js");
var _Heading = _interopRequireDefault(require("../../atoms/Heading/Heading.js"));
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
var classesSubTitle = (0, _classnames.default)("flex", "pb-2", "font-bold font-principal text-neutral-500", " md:text-sm sm:text-xs");
var classesLink = (0, _classnames.default)("flex", "font-bold font-principal", "justify-end items-center", "lg:text-base md:text-sm sm:text-xs");
var classesText = (0, _classnames.default)("pb-2", "text-neutral-500", "font-nunito", " md:text-sm sm:text-xs");
var classesCard = (0, _classnames.default)("flex flex-1", "relative", "rounded border border-neutral-300", "overflow-hidden h-full");
var defaultValues = {
  type: "horizontal",
  aspectRatio: "2/1",
  className: ""
};
var Card = function Card(_ref) {
  var _cn6;
  var imageUrl = _ref.imageUrl,
    text = _ref.text,
    subtitle = _ref.subtitle,
    title = _ref.title,
    link = _ref.link,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? defaultValues.type : _ref$type,
    _ref$aspectRatio = _ref.aspectRatio,
    aspectRatio = _ref$aspectRatio === void 0 ? defaultValues.aspectRatio : _ref$aspectRatio,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? defaultValues.className : _ref$className;
  var classText = (0, _classnames.default)(classesText, _defineProperty({}, "hidden", !text));
  var classContent = (0, _classnames.default)(classesContent, _defineProperty({}, [types[type]], type));
  var classSubTitle = (0, _classnames.default)(classesSubTitle, _defineProperty({}, "hidden", !subtitle));
  var classLink = (0, _classnames.default)(classesLink, _defineProperty({}, "hidden", !link));
  var classTitle = (0, _classnames.default)("text-neutral-800 pb-2", _defineProperty({}, "hidden", !title));
  var classCard = (0, _classnames.default)(classesCard, className, (_cn6 = {}, _defineProperty(_cn6, [display === null || display === void 0 ? void 0 : display[type]], type), _defineProperty(_cn6, "group hover:shadow-lg  cursor-pointer", link === null || link === void 0 ? void 0 : link.route), _cn6));
  var handleOnClick = function handleOnClick(e) {
    if (link !== null && link !== void 0 && link.disabled) {
      e.stopPropagation();
    } else if (link !== null && link !== void 0 && link.route) {
      (0, _myrefHelper.myhref)(link === null || link === void 0 ? void 0 : link.route);
    } else {
      link === null || link === void 0 ? void 0 : link.onClick();
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classCard,
    onClick: function onClick(e) {
      handleOnClick(e);
    },
    children: [type === "horizontal" ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      id: "image",
      className: "w-2/5 h-auto ",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        className: "w-full h-full",
        src: imageUrl,
        style: {
          objectFit: "cover",
          objectPosition: "center"
        }
      })
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_index2.default, {
      ratio: aspectRatio,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        id: "image",
        className: "w-full h-full ",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          className: "w-full h-full object-cover object-center",
          src: imageUrl
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
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Heading.default, {
            title: title,
            type: "h-6",
            font: "secondary"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          id: "content",
          className: classText,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            dangerouslySetInnerHTML: {
              __html: text
            }
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: classLink,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.default, {
          text: link === null || link === void 0 ? void 0 : link.label,
          href: link === null || link === void 0 ? void 0 : link.route,
          className: "group-hover:underline text-sm",
          disabled: link === null || link === void 0 ? void 0 : link.disabled,
          onClick: link === null || link === void 0 ? void 0 : link.onClick,
          iconName: "arrow_forward_ios"
        })
      })]
    })]
  });
};
Card.propTypes = {
  imageUrl: _propTypes.default.string.isRequired,
  title: _propTypes.default.string,
  subtitle: _propTypes.default.string,
  text: _propTypes.default.string,
  link: _propTypes.default.object,
  type: _propTypes.default.oneOf(["vertical", "horizontal"]),
  aspectRatio: _propTypes.default.oneOf(["2/1", "4/3"]),
  className: _propTypes.default.string
};
Card.defaultProps = defaultValues;
var _default = Card;
exports.default = _default;