"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _textHelper = require("../../helpers/textHelper");
var _classnames = _interopRequireDefault(require("classnames"));
var _react2 = require("swiper/react");
var _swiper = require("swiper");
var _SliderContent = _interopRequireDefault(require("../../molecules/SliderContent"));
var _Controls = _interopRequireDefault(require("../../atoms/Controls"));
var _Aspect = _interopRequireDefault(require("../../atoms/Aspect"));
var _BannerContent = _interopRequireDefault(require("../../molecules/BannerContent/BannerContent"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var commonClassesSliderContainer = (0, _classnames.default)("box-border relative overflow-hidden w-full h-full hidden md:block");
var controlLeft = (0, _classnames.default)("absolute h-full w-full flex items-center justify-end pr-10 ");
var controlRight = (0, _classnames.default)("absolute h-full w-full flex items-center justify-start pl-10 ");
var Slider = function Slider(_ref) {
  var slides = _ref.slides;
  var navigationPrevRef = (0, _react.useRef)(null);
  var navigationNextRef = (0, _react.useRef)(null);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
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
          bulletActiveClass: "ccBulletsActive"
        },
        slidesPerView: "1",
        modules: [_swiper.Navigation, _swiper.Pagination],
        className: "slides",
        effect: "coverflow",
        children: [slides.map(function (slide, slideIndex) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Aspect.default, {
                ratio: "2/1",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                  className: "w-full h-full flex",
                  src: slide.url ? slide.url : "",
                  alt: "bg-image",
                  style: (slide === null || slide === void 0 ? void 0 : slide.overlay) === "dark" ? {
                    filter: "brightness(50%)"
                  } : (slide === null || slide === void 0 ? void 0 : slide.overlay) === "light" ? {
                    opacity: "0.5"
                  } : {}
                })
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
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
      className: "md:hidden flex",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.Swiper, {
        loop: true,
        pagination: {
          clickable: true,
          horizontalClass: "ccIndicators",
          bulletClass: "ccBullets",
          bulletActiveClass: "ccBulletsActive"
        },
        slidesPerView: "1",
        modules: [_swiper.Pagination],
        className: "relative flex px-8 pt-8 pb-16 h-full w-full justify-center",
        children: slides.map(function (slide, slideIndex) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
              className: "relative overflow-hidden flex justify-center items-center w-full ",
              onClick: slide.onclickFunction ? slide.onClickFunction : "",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("article", {
                className: "relative flex w-full justify-center",
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "relative flex px-8 pt-8 pb-16 h-full w-full justify-center",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "w-full h-full",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Aspect.default, {
                      ratio: "1/1",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                        src: slide.url ? slide.url : "",
                        className: "absolute top-0 left-0 w-full h-full",
                        alt: "image-mobile"
                      })
                    }), slide.button ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_BannerContent.default, {
                      title: (0, _textHelper.getTextCount)(slide.title ? slide.title : "", 58),
                      text: (0, _textHelper.getTextCount)(slide.text ? slide.text : "", 200),
                      btn: slide.button
                    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_BannerContent.default, {
                      title: "".concat(slide.title ? slide.title : ""),
                      text: "".concat(slide.text ? slide.text : "")
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {})]
                })
              })
            })
          }, slideIndex);
        })
      })
    })]
  });
};
Slider.propTypes = {
  slides: _propTypes.default.array
};
var _default = Slider;
exports.default = _default;