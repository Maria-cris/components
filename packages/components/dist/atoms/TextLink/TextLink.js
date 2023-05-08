"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Icon = _interopRequireDefault(require("../Icon/Icon"));
var _react = require("react");
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
  target: "_self",
  className: "",
  onClick: function onClick() {},
  disabled: false,
  active: false,
  items: false
};
var TextLink = function TextLink(_ref) {
  var _cn, _cn2;
  var text = _ref.text,
    href = _ref.href,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? defaultValues.className : _ref$className,
    iconName = _ref.iconName,
    _ref$target = _ref.target,
    target = _ref$target === void 0 ? defaultValues.target : _ref$target,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === void 0 ? defaultValues.onClick : _ref$onClick,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? defaultValues.disabled : _ref$disabled,
    _ref$active = _ref.active,
    active = _ref$active === void 0 ? defaultValues.active : _ref$active,
    _ref$items = _ref.items,
    items = _ref$items === void 0 ? defaultValues.items : _ref$items;
  //expand icon state
  var iconExpandMore = "expand_more";
  var iconExpandLess = "expand_less";
  var _useState = (0, _react.useState)(iconExpandMore),
    _useState2 = _slicedToArray(_useState, 2),
    icon = _useState2[0],
    setIcon = _useState2[1];
  return items ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "items-center whitespace-nowrap flex group",
    onMouseEnter: function onMouseEnter(_) {
      return setIcon(iconExpandLess);
    },
    onMouseLeave: function onMouseLeave(_) {
      return setIcon(iconExpandMore);
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames.default)("p-1  cursor-pointer ", className, (_cn = {}, _defineProperty(_cn, "hover:underline", !disabled), _defineProperty(_cn, "underline", active), _cn)),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        className: "font-principal group-hover:underline ",
        href: href,
        target: target,
        children: text
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "flex align-middle text-2xl",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
        iconName: icon
      })
    })]
  }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "items-center whitespace-nowrap flex",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames.default)("p-1  cursor-pointer ", className, (_cn2 = {}, _defineProperty(_cn2, "hover:underline", !disabled), _defineProperty(_cn2, "underline", active), _cn2)),
      onClick: onClick,
      children: href && !disabled ? /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        className: "font-principal",
        href: href,
        target: target,
        children: text
      }) : disabled ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "font-principal",
        children: text
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "font-principal",
        onClick: onClick,
        children: text
      })
    }), iconName ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
        iconName: iconName
      }), " "]
    }) : ""]
  });
};
TextLink.propTypes = {
  text: _propTypes.default.string,
  href: _propTypes.default.string,
  iconName: _propTypes.default.string,
  className: _propTypes.default.string,
  target: _propTypes.default.oneOf(["_self", "_blank"]),
  onClick: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  active: _propTypes.default.bool
};
TextLink.defaultProps = defaultValues;
var _default = TextLink;
exports.default = _default;