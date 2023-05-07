"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("swiper/react");
var _swiper = require("swiper");
var _Card = _interopRequireDefault(require("../Card"));
var _Aspect = _interopRequireDefault(require("../../atoms/Aspect/Aspect"));
require("swiper/css/bundle");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Import Swiper React components

var Carrusel = function Carrusel() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "w-full h-fit",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Swiper, {
      className: "slides",
      navigation: true,
      loop: true,
      pagination: {
        clickable: true,
        horizontalClass: "ccIndicators",
        bulletClass: "ccBullets",
        bulletActiveClass: "ccBulletsActive"
      },
      slidesPerView: "1",
      modules: [_swiper.Navigation, _swiper.Pagination],
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "w-full h-fit ",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_react.SwiperSlide, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "w-full h-fit align-top items-top justify-center pb-6",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex w-full h-fit relative flex-row justify-center gap-6 px-20 pb-6 ",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "w-80 h-80 relative flex",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Aspect.default, {
                  ratio: "1/1",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                    className: "w-full h-full object-cover object-center",
                    src: "https://wallpapercave.com/wp/wp2599594.jpg",
                    alt: "card-img"
                  })
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "w-80 h-80 relative flex",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Aspect.default, {
                  ratio: "1/1",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                    className: "w-full h-full object-cover object-center",
                    src: "https://wallpapercave.com/wp/wp2599594.jpg",
                    alt: "card-img"
                  })
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "w-80 h-80 relative flex",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Aspect.default, {
                  ratio: "1/1",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                    className: "w-full h-full object-cover object-center",
                    src: "https://wallpapercave.com/wp/wp2599594.jpg",
                    alt: "card-img"
                  })
                })
              })]
            })
          })
        }, 1), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.SwiperSlide, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "w-full h-fit align-top items-top justify-center pb-6 ",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex absolute w-full h-fit relative flex-row gap-2  px-20 pb-6",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Card.default, {
                imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
                title: "Demo Card",
                text: "Demo Card",
                subtitle: "subtitle",
                type: "vertical",
                link: {
                  label: "Ver más",
                  route: "https://jonsuh.com/hamburgers/"
                }
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card.default, {
                imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
                title: "Demo Card",
                text: "Demo Card",
                subtitle: "subtitle",
                type: "vertical",
                link: {
                  label: "Ver más",
                  route: "https://jonsuh.com/hamburgers/"
                }
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card.default, {
                imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
                title: "Demo Card",
                text: "Demo Card",
                subtitle: "subtitle",
                type: "vertical",
                link: {
                  label: "Ver más",
                  route: "https://jonsuh.com/hamburgers/"
                }
              })]
            })
          })
        }, 2)]
      })
    })
  });
};
var _default = Carrusel;
exports.default = _default;