"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Aspect = _interopRequireDefault(require("../../atoms/Aspect/Aspect"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("../../index.css");
var _classesHelper = require("../../helpers/classesHelper");
var _BannerContent = _interopRequireDefault(require("../../molecules/BannerContent/BannerContent"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Banner = function Banner(_ref) {
  var imageUrl = _ref.imageUrl,
    ratio = _ref.ratio,
    overlay = _ref.overlay,
    title = _ref.title,
    text = _ref.text,
    variant = _ref.variant,
    btn = _ref.btn,
    size = _ref.size,
    position = _ref.position;
  var bannerImageStyles = {
    objectFit: "cover",
    filter: "brightness(0.5)"
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "hidden xl:block lg:block md:block  ",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Aspect.default, {
        ratio: ratio,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          className: (0, _classesHelper.getClassBannerImage)(overlay),
          style: overlay === "dark" ? bannerImageStyles : {
            objectFit: "cover"
          },
          src: imageUrl,
          alt: "image Banner"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_BannerContent.default, {
          title: title,
          text: text,
          btn: {
            id: btn.id,
            label: btn.label,
            type: variant ? "outlined" : "primary",
            size: size
          },
          variant: variant,
          size: size,
          position: position,
          mobile: false
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "lg:hidden md:hidden flex flex-col gap-1 ",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "w-full h-full flex relative ",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Aspect.default, {
          ratio: "4/3",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: imageUrl,
            className: "w-full h-full",
            alt: "img-banner-mobile"
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BannerContent.default, {
          title: title,
          text: text,
          variant: "false",
          btn: {
            id: btn === null || btn === void 0 ? void 0 : btn.id,
            label: btn === null || btn === void 0 ? void 0 : btn.label,
            type: "primary"
          }
        })
      })]
    })]
  });
};
Banner.propTypes = {
  imageUrl: _propTypes.default.string,
  ratio: _propTypes.default.string,
  overlay: _propTypes.default.string,
  title: _propTypes.default.string,
  text: _propTypes.default.string,
  variant: _propTypes.default.bool,
  btn: _propTypes.default.object,
  size: _propTypes.default.string,
  position: _propTypes.default.string
};
Banner.defaultProps = {
  variant: "normal",
  overlay: "no"
};
var _default = Banner;
exports.default = _default;