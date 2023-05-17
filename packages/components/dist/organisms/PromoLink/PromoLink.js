"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Icon = _interopRequireDefault(require("../../atoms/Icon"));
var _classnames = _interopRequireDefault(require("classnames"));
var _myrefHelper = require("../../helpers/myrefHelper");
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
var defaultValues = {
  color: "color1"
};
var PromoLink = function PromoLink(_ref) {
  var text = _ref.text,
    link = _ref.link,
    variant = _ref.variant,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    color = _ref.color;
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
    id: "promo-link-shadow",
    className: (0, _classnames.default)("h-full w-full rounded border px-2 py-2 shadow-lb bg-neutral-100 cursor-pointer", className, [colors[color]]),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "font-principal font-bold",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        href: link,
        children: text
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: " w-full font-principal flex font-bold relative justify-end ",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        href: link,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
          iconName: "arrow_forward"
        })
      })
    })]
  });
};
PromoLink.propTypes = {
  text: _propTypes.default.string,
  link: _propTypes.default.string,
  color: _propTypes.default.oneOf(["color1", "color2", "color3", "color4", "color5", "color6", "color7"]),
  className: _propTypes.default.string
};
PromoLink.defaultProps = defaultValues;
var _default = PromoLink;
exports.default = _default;