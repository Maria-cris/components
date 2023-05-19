"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Icon = _interopRequireDefault(require("../../atoms/Icon"));
var _classnames = _interopRequireDefault(require("classnames"));
var _myrefHelper = require("../../helpers/myrefHelper");
var _textHelper = require("../../helpers/textHelper");
var _Aspect = _interopRequireDefault(require("../../atoms/Aspect/Aspect"));
var _Heading = _interopRequireDefault(require("../../atoms/Heading/Heading"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var colors = {
  color1: "border-outstanding-100 shadow-outstanding-100",
  color2: "border-outstanding-200 shadow-outstanding-200",
  color3: "border-outstanding-300 shadow-outstanding-300",
  color4: "border-outstanding-400 shadow-outstanding-400",
  color5: "border-neutral-500 shadow-neutral-500",
  color6: "border-neutral-800 shadow-neutral-800",
  color7: "border-neutral-900 shadow-neutral-900"
};
var colorsImg = {
  color1: "bg-outstanding-100 ",
  color2: "bg-outstanding-200 ",
  color3: "bg-outstanding-300 ",
  color4: "bg-outstanding-400 ",
  color5: "bg-neutral-500 ",
  color6: "bg-neutral-800 ",
  color7: "bg-neutral-900 "
};
var defaultValues = {
  color: "color1",
  onClick: function onClick() {}
};
var PromoLink = function PromoLink(_ref) {
  var text = _ref.text,
    link = _ref.link,
    variant = _ref.variant,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    color = _ref.color,
    onClick = _ref.onClick,
    imgUrl = _ref.imgUrl;
  var handleOnClick = function handleOnClick(e) {
    if (!link) {
      e.stopPropagation();
    } else if (link) {
      (0, _myrefHelper.myhref)(link);
    } else {
      link === null || link === void 0 ? void 0 : link.onClick();
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "flex flex-1",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      id: "promo-link-shadow",
      className: (0, _classnames.default)("hidden", "h-full w-full rounded border p-4  shadow-lb bg-neutral-100 cursor-pointer", className, [colors[color]]),
      onClick: handleOnClick,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "font-principal font-bold",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          href: link,
          children: (0, _textHelper.getTextCount)(text, 52)
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: " w-full font-principal flex font-bold relative justify-end ",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          href: link,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
            iconName: "arrow_forward"
          })
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames.default)("h-fit w-full rounded mix-blend-multiply bg-blend-multiply flex  ", [colorsImg[color]]),
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Aspect.default, {
        ratio: "1/1",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: imgUrl,
          className: "w-full h-full object-cover object-center mix-blend-multiply bg-blend-multiply "
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "w-full h-full absolute top-0 left-0 p-4 flex flex-col justify-between text-neutral-100 cursor-pointer group",
          onClick: handleOnClick,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "flex font-principal font-bold",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Heading.default, {
              title: (0, _textHelper.getTextCount)(text, 52),
              type: "h-5"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: " w-full font-principal flex font-bold  justify-end ",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              href: link,
              className: "group-hover:animate-ping",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
                iconName: "arrow_forward"
              })
            })
          })]
        })]
      })
    })]
  });
};
PromoLink.propTypes = {
  text: _propTypes.default.string,
  link: _propTypes.default.string,
  color: _propTypes.default.oneOf(["color1", "color2", "color3", "color4", "color5", "color6", "color7"]),
  className: _propTypes.default.string,
  onClick: _propTypes.default.func
};
PromoLink.defaultProps = defaultValues;
var _default = PromoLink;
exports.default = _default;