"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Aspect = _interopRequireDefault(require("../../atoms/Aspect/Aspect"));
var _Numbers = _interopRequireDefault(require("../Numbers"));
var _Heading = _interopRequireDefault(require("../../atoms/Heading/Heading"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var classBannerImage = (0, _classnames.default)("w-full h-full object-cover object-center");
var bannerImageStyles = {
  dark: {
    filter: "brightness(0.5)"
  },
  light: {
    opacity: "0.5"
  }
};
var defaultValues = {
  overlay: "",
  contentVariant: "dark"
};
var BannerNumber = function BannerNumber(_ref) {
  var _cn, _cn2;
  var imageUrl = _ref.imageUrl,
    _ref$overlay = _ref.overlay,
    overlay = _ref$overlay === void 0 ? defaultValues.overlay : _ref$overlay,
    title = _ref.title,
    description = _ref.description,
    numbers = _ref.numbers,
    _ref$contentVariant = _ref.contentVariant,
    contentVariant = _ref$contentVariant === void 0 ? defaultValues.contentVariant : _ref$contentVariant;
  var fontColors = (0, _classnames.default)((_cn = {}, _defineProperty(_cn, "text-neutral-100", contentVariant === "light"), _defineProperty(_cn, "text-neutral-800", contentVariant === "dark"), _cn));
  var ratio = function ratio(numbersCount) {
    var aspect = "";
    if (numbersCount > 2) {
      aspect = "1/2";
    } else aspect = "3/4";
    return aspect;
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "w-full",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "hidden lg:flex",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Aspect.default, {
        ratio: "7/2",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          className: classBannerImage,
          style: bannerImageStyles === null || bannerImageStyles === void 0 ? void 0 : bannerImageStyles[overlay],
          src: imageUrl,
          alt: "image Banner"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "w-full h-full absolute top-0 left-0 flex flex-col p-10 ",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "pb-2 w-1/2",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Heading.default, {
              title: title,
              type: "h-3",
              font: "secondary",
              className: fontColors
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "w-1/2 font-secondary",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: fontColors,
              children: description
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "grid grid-cols-4 gap-6 pt-10",
            children: numbers.map(function (number, numberindex) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Numbers.default, {
                number: number === null || number === void 0 ? void 0 : number.number,
                title: number === null || number === void 0 ? void 0 : number.title,
                iconName: number === null || number === void 0 ? void 0 : number.iconName,
                description: number === null || number === void 0 ? void 0 : number.description,
                variant: number === null || number === void 0 ? void 0 : number.variant,
                color: number === null || number === void 0 ? void 0 : number.color,
                theme: contentVariant,
                className: number === null || number === void 0 ? void 0 : number.className
              }, numberindex);
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "hidden md:flex lg:hidden",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Aspect.default, {
        ratio: "2/1",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          className: classBannerImage,
          style: bannerImageStyles === null || bannerImageStyles === void 0 ? void 0 : bannerImageStyles[overlay],
          src: imageUrl,
          alt: "image Banner"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "w-full h-full absolute top-0 left-0 flex flex-col p-10 ",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "pb-2 w-4/5",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Heading.default, {
              title: title,
              type: "h-3",
              font: "secondary",
              className: fontColors
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "w-4/5 font-secondary  md:text-base",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: fontColors,
              children: description
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "grid grid-cols-4 gap-6 pt-6",
            children: numbers.map(function (number, numberindex) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Numbers.default, {
                number: number === null || number === void 0 ? void 0 : number.number,
                title: number === null || number === void 0 ? void 0 : number.title,
                iconName: number === null || number === void 0 ? void 0 : number.iconName,
                description: number === null || number === void 0 ? void 0 : number.description,
                variant: number === null || number === void 0 ? void 0 : number.variant,
                color: number === null || number === void 0 ? void 0 : number.color,
                theme: contentVariant,
                className: number === null || number === void 0 ? void 0 : number.className
              }, numberindex);
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "flex md:hidden ",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Aspect.default, {
        ratio: ratio(numbers.length),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          className: classBannerImage,
          style: bannerImageStyles === null || bannerImageStyles === void 0 ? void 0 : bannerImageStyles[overlay],
          src: imageUrl,
          alt: "image Banner"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "w-full h-full absolute top-0 left-0 flex flex-col p-6 ",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "pb-2",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Heading.default, {
              title: title,
              type: "h-3",
              font: "secondary",
              className: fontColors
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: (0, _classnames.default)("font-secondary", (_cn2 = {}, _defineProperty(_cn2, "text-xs min-[380px]:text-sm", numbers.length < 4), _defineProperty(_cn2, "text-sm", numbers.length > 2), _cn2)),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: fontColors,
              children: description
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: (0, _classnames.default)("flex flex-col pt-6 space-y-4", _defineProperty({}, " min-[380px]:space-y-6", numbers.length < 3)),
            children: numbers.map(function (number, numberindex) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Numbers.default, {
                number: number === null || number === void 0 ? void 0 : number.number,
                title: number === null || number === void 0 ? void 0 : number.title,
                iconName: number === null || number === void 0 ? void 0 : number.iconName,
                description: number === null || number === void 0 ? void 0 : number.description,
                variant: number === null || number === void 0 ? void 0 : number.variant,
                color: number === null || number === void 0 ? void 0 : number.color,
                theme: contentVariant,
                className: number === null || number === void 0 ? void 0 : number.className
              }, numberindex);
            })
          })]
        })]
      })
    })]
  });
};
BannerNumber.propTypes = {
  imageUrl: _propTypes.default.string.isRequired,
  overlay: _propTypes.default.oneOf(["dark", "light", ""]),
  title: _propTypes.default.string,
  description: _propTypes.default.string,
  contentVariant: _propTypes.default.oneOf(["dark", "light"]),
  numbers: _propTypes.default.array
};
BannerNumber.defaultProps = defaultValues;
var _default = BannerNumber;
exports.default = _default;