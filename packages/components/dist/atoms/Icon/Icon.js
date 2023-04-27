"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
require("../../index.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Icon = function Icon(_ref) {
  var iconName = _ref.iconName;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: "font-icons",
    children: iconName
  });
};
Icon.propTypes = {
  iconName: _propTypes.default.string
};
Icon.defaultProps = {
  iconName: "home"
};
var _default = Icon;
exports.default = _default;