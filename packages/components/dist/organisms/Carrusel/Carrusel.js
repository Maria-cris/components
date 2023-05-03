"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _react2 = require("swiper/react");
var _swiper = require("swiper");
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Import Swiper React components

var Carrusel = function Carrusel() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react2.Swiper, {
      loop: true,
      navigation: true,
      pagination: {
        clickable: true,
        horizontalClass: "ccIndicators",
        bulletClass: "ccBullets",
        bulletActiveClass: "ccBulletsActive"
      },
      slidesPerView: "1",
      className: "slides",
      modules: [_swiper.Navigation, _swiper.Pagination],
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
        children: "Slide 1"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
        children: "Slide 2"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
        children: "Slide 3"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
        children: "Slide 4"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
        children: "Slide 5"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
        children: "Slide 6"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
        children: "Slide 7"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
        children: "Slide 8"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
        children: "Slide 9"
      })]
    })
  });
};
var _default = Carrusel;
exports.default = _default;