"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Heading = _interopRequireDefault(require("../../atoms/Heading/Heading"));
var _polygon = _interopRequireDefault(require("../../assets/polygon.svg"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Icon = _interopRequireDefault(require("../../atoms/Icon/Icon"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var defaultValues = {
  active: false,
  className: ""
};
var Tab = function Tab(_ref) {
  var _cn;
  var label = _ref.label,
    active = _ref.active,
    className = _ref.className,
    iconName = _ref.iconName;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _classnames.default)(className, "flex flex-col space-x-0"),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames.default)("flex relative  justify-center p-4 items-center ", (_cn = {}, _defineProperty(_cn, "bg-neutral-900 text-neutral-100 drop-shadow-md border-b-2 border-b-neutral-900", active), _defineProperty(_cn, "bg-neutral-100 border-b-2 border border-neutral-300  border-b-primary-500", !active), _cn)),
      children: iconName ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        className: (0, _classnames.default)(" flex text-sm font-semibold leading-[125%] ", _defineProperty({}, "space-x-2", label)),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
          iconName: iconName
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Heading.default, {
          title: label,
          type: "h-6",
          variant: "light",
          font: "secondary",
          className: "text-sm font-semibold leading-[125%]"
        })]
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Heading.default, {
        title: label,
        type: "h-6",
        variant: "light",
        font: "secondary",
        className: "text-sm font-semibold leading-[125%]"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames.default)("flex justify-center", _defineProperty({}, "hidden", !active)),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        className: "h-2 ",
        src: _polygon.default,
        alt: "polygon"
      })
    })]
  });
};
Tab.propTypes = {
  label: _propTypes.default.string,
  className: _propTypes.default.string,
  iconName: _propTypes.default.string,
  active: _propTypes.default.bool
};
Tab.defaultProps = defaultValues;
var _default = Tab;
exports.default = _default;