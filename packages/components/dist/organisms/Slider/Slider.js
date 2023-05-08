"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _Controls = _interopRequireDefault(require("../../atoms/Controls/Controls"));
var _react2 = require("swiper/react");
var _swiper = require("swiper");
var _Aspect = _interopRequireDefault(require("../../atoms/Aspect/Aspect"));
var _SliderContent = _interopRequireDefault(require("../../molecules/SliderContent/SliderContent"));
require("swiper/css/bundle");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Import Swiper React components

var sliderImageStyles = {
  dark: {
    filter: "brightness(0.5)"
  },
  light: {
    opacity: "0.5"
  }
};
var Slider = function Slider(_ref) {
  var slides = _ref.slides;
  var naviPrevRef = (0, _react.useRef)(null);
  var navNextRef = (0, _react.useRef)(null);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "hidden md:flex relative h-fit",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        ref: naviPrevRef,
        className: " absolute  cursor-pointer z-10 bottom-2/4 left-8 bg-neutral-100 opacity-50 hover:shadow-lg flex  rounded-lg w-14 h-14 items-center justify-center align-center",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Controls.default, {
          iconName: "arrow_back_ios"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        ref: navNextRef,
        className: "absolute cursor-pointer z-10 bottom-2/4 right-8  bg-neutral-100 opacity-50 hover:shadow-lg flex  rounded-lg w-14 h-14 items-center justify-center",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Controls.default, {
          iconName: "arrow_forward_ios"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.Swiper, {
        navigation: {
          nextEl: navNextRef.current,
          prevEl: naviPrevRef.current
        },
        loop: true,
        onSwiper: function onSwiper(swiper) {
          // Delay execution for the refs to be defined
          setTimeout(function () {
            // Override prevEl & nextEl now that refs are defined
            swiper.params.navigation.prevEl = naviPrevRef.current;
            swiper.params.navigation.nextEl = navNextRef.current;
            // Re-init navigation
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        },
        pagination: {
          clickable: true,
          horizontalClass: "ccIndicators",
          bulletClass: "ccBullets",
          bulletActiveClass: "ccBulletsActive"
        },
        slidesPerView: 1,
        modules: [_swiper.Navigation, _swiper.Pagination],
        className: "slides",
        children: slides === null || slides === void 0 ? void 0 : slides.map(function (slide, indexSlide) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Aspect.default, {
              ratio: "2/1",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                style: sliderImageStyles === null || sliderImageStyles === void 0 ? void 0 : sliderImageStyles[slide === null || slide === void 0 ? void 0 : slide.overlay],
                className: "w-full h-full object-cover object-center",
                src: slide === null || slide === void 0 ? void 0 : slide.url,
                alt: "slider-img"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "absolute w-full h-full top-0 left-0 p-",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SliderContent.default, {
                  title: slide === null || slide === void 0 ? void 0 : slide.title,
                  text: slide === null || slide === void 0 ? void 0 : slide.text,
                  btn: slide === null || slide === void 0 ? void 0 : slide.btn,
                  contentVariant: slide === null || slide === void 0 ? void 0 : slide.contentVariant,
                  position: slide === null || slide === void 0 ? void 0 : slide.position,
                  className: slide === null || slide === void 0 ? void 0 : slide.className
                })
              })]
            })
          }, indexSlide);
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: " flex md:hidden",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.Swiper, {
        loop: true,
        pagination: {
          clickable: true,
          horizontalClass: "ccIndicators",
          bulletClass: "ccBullets",
          bulletActiveClass: "ccBulletsActive"
        },
        slidesPerView: 1,
        modules: [_swiper.Pagination],
        className: "slides",
        children: slides === null || slides === void 0 ? void 0 : slides.map(function (slide, indexSlide) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex flex-col pb-6",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Aspect.default, {
                ratio: "1/1",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                  className: "w-full h-full object-cover object-center",
                  src: slide === null || slide === void 0 ? void 0 : slide.url,
                  alt: "slider-img"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SliderContent.default, {
                  title: slide === null || slide === void 0 ? void 0 : slide.title,
                  text: slide === null || slide === void 0 ? void 0 : slide.text,
                  btn: slide === null || slide === void 0 ? void 0 : slide.btn,
                  contentVariant: slide === null || slide === void 0 ? void 0 : slide.contentVariant,
                  position: slide === null || slide === void 0 ? void 0 : slide.position,
                  className: slide === null || slide === void 0 ? void 0 : slide.className
                })
              })]
            })
          }, indexSlide);
        })
      })
    })]
  });
};
Slider.propTypes = {
  slides: _propTypes.default.array
};
Slider.defaultProps = {
  slides: [{}]
};
var _default = Slider;
exports.default = _default;