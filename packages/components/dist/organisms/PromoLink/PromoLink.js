"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Icon = _interopRequireDefault(require("../../atoms/Icon"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var PromoLink = function PromoLink(_ref) {
  var text = _ref.text,
    route = _ref.route,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _classnames.default)("h-full w-full rounded border-2 border-neutral-300 px-2 py-2", className),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "font-principal font-bold",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        href: route,
        children: text
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: " w-full font-principal flex font-bold relative justify-end ",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        href: route,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
          iconName: "arrow_forward"
        })
      })
    })]
  });
};
PromoLink.propTypes = {
  text: _propTypes.default.string,
  route: _propTypes.default.string,
  className: _propTypes.default.string
};
var _default = PromoLink;
exports.default = _default;