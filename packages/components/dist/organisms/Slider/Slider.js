"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _textHelper = require("../../helpers/textHelper");
var _classnames = _interopRequireDefault(require("classnames"));
var _react2 = require("swiper/react");
var _swiper = require("swiper");
var _SliderContent = _interopRequireDefault(require("../../molecules/SliderContent"));
var _Controls = _interopRequireDefault(require("../../atoms/Controls"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var commonClassesSliderContainer = (0, _classnames.default)("box-border relative overflow-hidden w-full h-full");
var ccIndicators = (0, _classnames.default)("absolute bottom-0 z-1 flex w-full justify-center pb-12");
var ccBullets = (0, _classnames.default)("cursor-pointer block mr-2 w-4 h-4 rounded-[50%] bg-neutral-600");
var ccBulletsActive = (0, _classnames.default)("rounded-[60px] w-8");
var ccSlide = (0, _classnames.default)("relative flex w-full h-full");
var controlLeft = (0, _classnames.default)("translate-x-0 -translate-y-1/2");
var controlRight = (0, _classnames.default)("translate-x-0 -translate-y-1/2");
var Slider = function Slider(_ref) {
  var slides = _ref.slides;
  var navigationPrevRef = (0, _react.useRef)(null);
  var navigationNextRef = (0, _react.useRef)(null);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    className: commonClassesSliderContainer,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react2.Swiper, {
      navigation: {
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current
      },
      loop: true,
      onSwiper: function onSwiper(swiper) {
        // Delay execution for the refs to be defined
        setTimeout(function () {
          // Override prevEl & nextEl now that refs are defined
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
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
        bulletActiveClass: ccBulletsActive
      },
      slidesPerView: "1",
      modules: [_swiper.Navigation, _swiper.Pagination],
      className: ccSlide,
      effect: "coverflow",
      children: [slides.map(function (slide, slideIndex) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              className: "w-full h-full flex",
              src: slide.url ? slide.url : "",
              alt: "bg-image",
              style: (slide === null || slide === void 0 ? void 0 : slide.overlay) === "dark" ? {
                filter: "brightness(50%)"
              } : (slide === null || slide === void 0 ? void 0 : slide.overlay) === "light" ? {
                opacity: "0.5"
              } : {}
            }), slide.button ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_SliderContent.default, {
              title: (0, _textHelper.getTextCount)(slide.title ? slide.title : "", 58),
              text: (0, _textHelper.getTextCount)(slide.text ? slide.text : "", 200),
              align: "".concat(slide.textAlign ? slide.textAlign : ""),
              button: slide.button
            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_SliderContent.default, {
              title: "".concat(slide.title ? slide.title : ""),
              text: "".concat(slide.text ? slide.text : "")
            })]
          })
        }, slideIndex);
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        ref: navigationPrevRef,
        className: controlLeft,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Controls.default, {
          iconName: "arrow_forward_ios"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        ref: navigationNextRef,
        className: controlRight,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Controls.default, {
          iconName: "arrow_back_ios"
        })
      })]
    })
  });
};
var _default = Slider;
exports.default = _default;