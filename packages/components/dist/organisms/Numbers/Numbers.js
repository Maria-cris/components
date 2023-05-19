"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _Icon = _interopRequireDefault(require("../../atoms/Icon/Icon"));
var _Heading = _interopRequireDefault(require("../../atoms/Heading/Heading"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactCountup = _interopRequireDefault(require("react-countup"));
var _reactVisibilitySensor = _interopRequireDefault(require("react-visibility-sensor"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var defaultValues = {
  className: "",
  theme: "dark",
  number: 0
};
var variants = {
  shadow: "border rounded-lg shadow-lb p-4",
  stroke: "border rounded-lg p-4"
};
var themes = {
  dark: "text-neutral-800",
  light: "text-neutral-100"
};
var colors = {
  "neutral-100": "border-neutral-100 shadow-neutral-100",
  "neutral-200": "border-neutral-200 shadow-neutral-200",
  "neutral-300": "border-neutral-300 shadow-neutral-300",
  "neutral-400": "border-neutral-400 shadow-neutral-400",
  "neutral-500": "border-neutral-500 shadow-neutral-500",
  "neutral-600": "border-neutral-600 shadow-neutral-600",
  "neutral-700": "border-neutral-700 shadow-neutral-700",
  "neutral-800": "border-neutral-800 shadow-neutral-800",
  "neutral-900": "border-neutral-900 shadow-neutral-900",
  "primary-100": "border-primary-100 shadow-primary-100",
  "primary-200": "border-primary-200 shadow-primary-200",
  "primary-300": "border-primary-300 shadow-primary-300",
  "primary-400": "border-primary-400 shadow-primary-400",
  "primary-500": "border-primary-500 shadow-primary-500",
  "primary-600": "border-primary-600 shadow-primary-600",
  "primary-700": "border-primary-700 shadow-primary-700",
  "primary-800": "border-primary-800 shadow-primary-800",
  "primary-900": "border-primary-900 shadow-primary-900"
};
var Numbers = function Numbers(_ref) {
  var _cn;
  var _ref$number = _ref.number,
    number = _ref$number === void 0 ? defaultValues.number : _ref$number,
    title = _ref.title,
    iconName = _ref.iconName,
    description = _ref.description,
    variant = _ref.variant,
    color = _ref.color,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? defaultValues.className : _ref$className,
    _ref$theme = _ref.theme,
    theme = _ref$theme === void 0 ? defaultValues.theme : _ref$theme;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    finishedCount = _useState2[0],
    setFinishedCount = _useState2[1];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    id: "Numbers-Container",
    className: (0, _classnames.default)(className, "flex flex-col bg-transparent ", (_cn = {}, _defineProperty(_cn, variants === null || variants === void 0 ? void 0 : variants[variant], variant), _defineProperty(_cn, themes === null || themes === void 0 ? void 0 : themes[theme], theme), _defineProperty(_cn, colors === null || colors === void 0 ? void 0 : colors[color], color), _cn)),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      id: "Number-Icon",
      className: "flex align-center items-center space-x-1 pb-2",
      children: [iconName ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "text-2xl lg:text-5xl md:text-3xl",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
          iconName: iconName,
          type: "outlined"
        })
      }) : "", /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactCountup.default, {
        separator: ",",
        start: 0,
        end: number,
        onEnd: function onEnd() {
          return setFinishedCount(true);
        },
        children: function children(_ref2) {
          var countUpRef = _ref2.countUpRef,
            start = _ref2.start;
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactVisibilitySensor.default, {
            onChange: function onChange(isVisible) {
              if (!isVisible || finishedCount) return;
              start();
            },
            delayedCall: true,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "font-secondary text-2xl lg:text-5xl md:text-3xl font-bold leading-[125%] ",
              ref: countUpRef
            })
          });
        }
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      id: "Numbers-title",
      className: "pb-2",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Heading.default, {
        title: title,
        type: "h-6",
        font: "secondary"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      id: "Numbers-description",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "text-sm font-secondary",
        children: description
      })
    })]
  });
};
Numbers.propTypes = {
  number: _propTypes.default.number,
  iconName: _propTypes.default.string,
  description: _propTypes.default.string,
  title: _propTypes.default.string,
  variant: _propTypes.default.oneOf(["shadow", "stroke", ""]),
  theme: _propTypes.default.oneOf(["light", "dark"]),
  color: _propTypes.default.oneOf(["neutral-100", "neutral-200", "neutral-300", "neutral-400", "neutral-500", "neutral-600", "neutral-700", "neutral-800", "neutral-900", "primary-100", "primary-200", "primary-300", "primary-400", "primary-500", "primary-600", "primary-700", "primary-800", "primary-900"]),
  className: _propTypes.default.string
};
Numbers.defaultProps = defaultValues;
var _default = Numbers;
exports.default = _default;