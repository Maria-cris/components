"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _Controls = _interopRequireDefault(require("../../atoms/Controls/Controls"));
var _react2 = require("swiper/react");
var _swiper = require("swiper");
var _Card = _interopRequireDefault(require("../Card"));
var _Aspect = _interopRequireDefault(require("../../atoms/Aspect/Aspect"));
require("swiper/css/bundle");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Import Swiper React components

var defaultValues = {
  variant: "img"
};
var Carrusel = function Carrusel(_ref) {
  var data = _ref.data,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? defaultValues.variant : _ref$variant;
  var naviPrevRef = (0, _react.useRef)(null);
  var navNextRef = (0, _react.useRef)(null);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "w-full h-full  absolute hidden lg:flex px-28 ",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        ref: naviPrevRef,
        className: " absolute bottom-1/2 left-16 hidden lg:flex bg-neutral-100 hover:shadow-lg hover:shadow-neutral-500 rounded-lg",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Controls.default, {
          iconName: "arrow_back_ios"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        ref: navNextRef,
        className: "absolute bottom-1/2 right-16 hidden lg:flex bg-neutral-100 hover:shadow-lg hover:shadow-neutral-500 rounded-lg",
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
        slidesPerView: 3,
        spaceBetween: 24,
        slidesPerGroupSkip: 3,
        modules: [_swiper.Navigation, _swiper.Pagination],
        className: "slides",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: " flex flex-row",
          children: data === null || data === void 0 ? void 0 : data.map(function (card, indexCard) {
            return variant === "img" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "w-full h-fit align-top items-top justify-center pb-6",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "w-full h-fit relative flex pb-6",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Aspect.default, {
                    ratio: "1/1",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                      className: "w-full h-full object-cover object-center",
                      src: card === null || card === void 0 ? void 0 : card.imageUrl,
                      alt: "card-img"
                    })
                  })
                })
              })
            }, indexCard) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "w-full h-full align-top items-top justify-center pb-6 flex ",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "w-full h-full relative flex pb-6 ",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card.default, {
                    imageUrl: card === null || card === void 0 ? void 0 : card.imageUrl,
                    title: card === null || card === void 0 ? void 0 : card.title,
                    text: card === null || card === void 0 ? void 0 : card.text,
                    subtitle: card === null || card === void 0 ? void 0 : card.subtitle,
                    type: "vertical",
                    aspectRatio: "2/1",
                    link: card === null || card === void 0 ? void 0 : card.link
                  })
                })
              })
            }, indexCard);
          })
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "w-full h-fit absolute hidden lg:hidden md:flex ",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.Swiper, {
        loop: true,
        pagination: {
          clickable: true,
          horizontalClass: "ccIndicators",
          bulletClass: "ccBullets",
          bulletActiveClass: "ccBulletsActive"
        },
        slidesPerView: 2,
        spaceBetween: 24,
        centeredSlides: true,
        modules: [_swiper.Pagination],
        className: "slides",
        watchSlidesProgress: true,
        children: data === null || data === void 0 ? void 0 : data.map(function (card, indexCard) {
          return variant === "img" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "w-full h-fit align-top items-top justify-center pb-6",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "w-full h-fit relative flex pb-6",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Aspect.default, {
                  ratio: "1/1",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                    className: "w-full h-full object-cover object-center",
                    src: card === null || card === void 0 ? void 0 : card.imageUrl,
                    alt: "card-img"
                  })
                })
              })
            })
          }, indexCard) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "w-full h-fit align-top items-top justify-center pb-6 ",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "w-full h-fit relative flex pb-6",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card.default, {
                  imageUrl: card === null || card === void 0 ? void 0 : card.imageUrl,
                  title: card === null || card === void 0 ? void 0 : card.title,
                  text: card === null || card === void 0 ? void 0 : card.text,
                  subtitle: card === null || card === void 0 ? void 0 : card.subtitle,
                  type: "vertical",
                  aspectRatio: "2/1",
                  link: card === null || card === void 0 ? void 0 : card.link
                })
              })
            })
          }, indexCard);
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "w-full h-fit absolute  md:hidden sm:flex px-10",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.Swiper, {
        loop: true,
        pagination: {
          clickable: true,
          horizontalClass: "ccIndicators",
          bulletClass: "ccBullets",
          bulletActiveClass: "ccBulletsActive"
        },
        slidesPerView: 1,
        spaceBetween: 32,
        modules: [_swiper.Pagination],
        className: "slides",
        watchSlidesProgress: true,
        children: data === null || data === void 0 ? void 0 : data.map(function (card, indexCard) {
          return variant === "img" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "w-full h-fit align-top items-top justify-center pb-6 ",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "w-full h-fit relative flex pb-6",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Aspect.default, {
                  ratio: "1/1",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                    className: "w-full h-full object-cover object-center",
                    src: card === null || card === void 0 ? void 0 : card.imageUrl,
                    alt: "card-img"
                  })
                })
              })
            })
          }, indexCard) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "w-full h-fit align-top items-top justify-center pb-6 ",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "w-full h-fit relative flex pb-6",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card.default, {
                  imageUrl: card === null || card === void 0 ? void 0 : card.imageUrl,
                  title: card === null || card === void 0 ? void 0 : card.title,
                  text: card === null || card === void 0 ? void 0 : card.text,
                  subtitle: card === null || card === void 0 ? void 0 : card.subtitle,
                  type: "vertical",
                  aspectRatio: "2/1",
                  link: card === null || card === void 0 ? void 0 : card.link
                })
              })
            })
          }, indexCard);
        })
      })
    })]
  });
};
Carrusel.propTypes = {
  variant: _propTypes.default.oneOf("img", "card"),
  data: _propTypes.default.array
};
Carrusel.defaultProps = defaultValues;
var _default = Carrusel;
exports.default = _default;