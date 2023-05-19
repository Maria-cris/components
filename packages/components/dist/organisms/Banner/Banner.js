"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Aspect = _interopRequireDefault(require("../../atoms/Aspect/Aspect"));
var _BannerContent = _interopRequireDefault(require("../../molecules/BannerContent/BannerContent"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var bannerImageStyles = {
  dark: {
    filter: "brightness(0.5)"
  },
  light: {
    opacity: "0.5"
  }
};
var defaultValues = {
  ratio: "2/1",
  overlay: "normal",
  contentVariant: "dark",
  size: "md",
  position: "left-top",
  className: ""
};
var classBannerImage = (0, _classnames.default)("w-full h-full object-cover object-center");
var Banner = function Banner(_ref) {
  var imageUrl = _ref.imageUrl,
    _ref$ratio = _ref.ratio,
    ratio = _ref$ratio === void 0 ? defaultValues.ratio : _ref$ratio,
    _ref$overlay = _ref.overlay,
    overlay = _ref$overlay === void 0 ? defaultValues.overlay : _ref$overlay,
    title = _ref.title,
    text = _ref.text,
    _ref$contentVariant = _ref.contentVariant,
    contentVariant = _ref$contentVariant === void 0 ? defaultValues.contentVariant : _ref$contentVariant,
    btn = _ref.btn,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? defaultValues.size : _ref$size,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? defaultValues.position : _ref$position,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? defaultValues.className : _ref$className;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "hidden xl:block lg:block md:block  ",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Aspect.default, {
        ratio: ratio,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          className: classBannerImage,
          style: bannerImageStyles === null || bannerImageStyles === void 0 ? void 0 : bannerImageStyles[overlay],
          src: imageUrl,
          alt: "image Banner"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_BannerContent.default, {
          title: title,
          text: text,
          btn: {
            id: btn.id,
            label: btn.label,
            variant: contentVariant ? "outlined" : "primary",
            iconName: btn === null || btn === void 0 ? void 0 : btn.iconName
          },
          contentVariant: contentVariant,
          size: size,
          position: position,
          mobile: false
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "lg:hidden md:hidden flex flex-col space-x-1 ",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "w-full h-full flex relative ",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Aspect.default, {
          ratio: "4/3",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: imageUrl,
            className: "w-full h-full object-cover object-center",
            alt: "img-banner-mobile"
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BannerContent.default, {
          title: title,
          text: text,
          contentVariant: "dark",
          btn: {
            id: btn === null || btn === void 0 ? void 0 : btn.id,
            label: btn === null || btn === void 0 ? void 0 : btn.label,
            variant: "primary",
            iconName: btn === null || btn === void 0 ? void 0 : btn.iconName
          }
        })
      })]
    })]
  });
};
Banner.propTypes = {
  imageUrl: _propTypes.default.string.isRequired,
  ratio: _propTypes.default.string,
  overlay: _propTypes.default.oneOf(["dark", "light", "no-overlay"]),
  title: _propTypes.default.string,
  text: _propTypes.default.string,
  contentVariant: _propTypes.default.oneOf(["dark", "light"]),
  btn: _propTypes.default.object,
  size: _propTypes.default.oneOf(["lg", "md", "sm"]),
  position: _propTypes.default.oneOf(["left-top", "left-middle", "left-bottom", "center-top", "center-middle", "center-bottom", "right-top", "right-middle", "right-bottom"]),
  className: _propTypes.default.string
};
Banner.defaultProps = defaultValues;
var _default = Banner;
exports.default = _default;