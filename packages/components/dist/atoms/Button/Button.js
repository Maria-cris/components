"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var styles = {
  background: "#fff",
  border: "0.2rem solid #0099ff",
  color: "#0099ff",
  letterSpacing: "0.1em",
  fontWeight: "bold",
  padding: "1em",
  textTransform: "uppercase"
};
var Button = function Button(_ref) {
  var disabled = _ref.disabled,
    label = _ref.label,
    onClick = _ref.onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    disabled: disabled ? "true" : "",
    onClick: onClick,
    style: styles,
    children: label
  });
};
Button.propTypes = {
  disabled: _propTypes.default.bool,
  label: _propTypes.default.string,
  onClick: _propTypes.default.func
};
Button.defaultProps = {
  disabled: false
};
var _default = Button;
exports.default = _default;