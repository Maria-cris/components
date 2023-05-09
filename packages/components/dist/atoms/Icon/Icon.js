"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var defaultValues = {
  className: "",
  type: "solid"
};
var Icon = function Icon(_ref) {
  var _cn;
  var iconName = _ref.iconName,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? defaultValues.className : _ref$className,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? defaultValues.type : _ref$type;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: (0, _classnames.default)("select-none", className, (_cn = {}, _defineProperty(_cn, "material-icons-outlined", type === "outlined"), _defineProperty(_cn, "font-icons", type === "solid"), _cn)),
    children: iconName
  });
};
Icon.propTypes = {
  iconName: _propTypes.default.string,
  className: _propTypes.default.string,
  type: _propTypes.default.oneOf(["solid", "outlined"])
};
Icon.defaultProps = defaultValues;
var _default = Icon;
exports.default = _default;