"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultValues = {
  className: ""
};
var Icon = function Icon(_ref) {
  var iconName = _ref.iconName,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? defaultValues.className : _ref$className;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: (0, _classnames.default)("font-icons", className),
    children: iconName
  });
};
Icon.propTypes = {
  iconName: _propTypes.default.string,
  className: _propTypes.default.string
};
Icon.defaultProps = {
  className: ""
};
var _default = Icon;
exports.default = _default;