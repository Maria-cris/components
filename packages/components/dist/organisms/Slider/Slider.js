"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Aspect = _interopRequireDefault(require("../../atoms/Aspect/Aspect"));
var _react = require("react");
var _classnames = _interopRequireDefault(require("classnames"));
var _SliderContent = _interopRequireDefault(require("../../molecules/SliderContent/SliderContent"));
var _react2 = require("keen-slider/react");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    currentSlide = _useState2[0],
    setCurrentSlide = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loaded = _useState4[0],
    setLoaded = _useState4[1];
  var stylesBaseControls = "material-icons select-none absolute top-[35%] p-1 rounded-lg text-[12px] w-p:hidden";
  var _useKeenSlider = (0, _react2.useKeenSlider)({
      loop: true,
      breakpoints: {
        "(min-width: 320px)": {
          slides: {
            perView: 1
          }
        },
        "(min-width: 600px)": {
          slides: {
            perView: 1
          }
        },
        "(min-width: 1024px)": {
          slides: {
            perView: 1
          }
        }
      },
      initial: 0,
      slideChanged: function slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created: function created() {
        setLoaded(true);
      }
    }),
    _useKeenSlider2 = _slicedToArray(_useKeenSlider, 2),
    sliderRef = _useKeenSlider2[0],
    instanceRef = _useKeenSlider2[1];
  var activeBulletSlide = function activeBulletSlide(position) {
    var _instanceRef$current;
    (_instanceRef$current = instanceRef.current) === null || _instanceRef$current === void 0 ? void 0 : _instanceRef$current.moveToIdx(position);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("section", {
    className: "flex flex-col relative w-full my-6",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("section", {
      className: "",
      children: [" ", /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        ref: sliderRef,
        className: "keen-slider",
        children: [slides.map(function (slide, i) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "keen-slider__slide",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Aspect.default, {
                ratio: "2/1",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                  style: sliderImageStyles === null || sliderImageStyles === void 0 ? void 0 : sliderImageStyles[slide === null || slide === void 0 ? void 0 : slide.overlay],
                  className: "w-full h-full object-cover object-center",
                  src: slide === null || slide === void 0 ? void 0 : slide.url,
                  alt: "slider-img"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "absolute w-full h-full top-0 left-0 ",
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
            })
          }, "card-item-".concat(i));
        }), " "]
      })]
    }), loaded && instanceRef.current && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames.default)("z-20 left-8 w-p:invisible w-t:invisible cursor-pointer w-14 h-14 rounded-lg bg-neutral-200 opacity-50 flex items-center justify-center ", stylesBaseControls),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "material-icons",
          onClick: function onClick(e) {
            var _instanceRef$current2;
            (_instanceRef$current2 = instanceRef.current) === null || _instanceRef$current2 === void 0 ? void 0 : _instanceRef$current2.prev();
          },
          children: "arrow_back_ios"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames.default)("z-20 right-8 w-p:invisible w-t:invisible cursor-pointer  w-14 h-14 rounded-lg bg-neutral-200 opacity-50 flex items-center justify-center", stylesBaseControls),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "material-icons",
          onClick: function onClick(e) {
            var _instanceRef$current3;
            return (_instanceRef$current3 = instanceRef.current) === null || _instanceRef$current3 === void 0 ? void 0 : _instanceRef$current3.next();
          },
          children: "arrow_forward_ios"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames.default)("w-full flex justify-center gap-2 mt-6 dots absolute bottom-1 pb-10"),
        children: slides.map(function (_, i) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            onClick: function onClick() {
              return activeBulletSlide(i);
            },
            className: (0, _classnames.default)("h-4 bg-[#686868] rounded-full cursor-pointer", {
              "w-4": i !== currentSlide,
              "w-8": i === currentSlide
            })
          }, "bullet-item-".concat(i));
        })
      })]
    })]
  });
};
var _default = Slider;
exports.default = _default;