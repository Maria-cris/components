"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Icon = _interopRequireDefault(require("../Icon"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var commonClasses = (0, _classnames.default)(" cursor-pointer flex justify-center text-center items-center w-14 h-14 rounded bg-neutral-300 ");
var Controls = function Controls(_ref) {
  var iconName = _ref.iconName;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: commonClasses,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "font-icons text-neutral-900 inset-y-2/4 z-10 ",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
        iconName: iconName
      })
    })
  });
};
var _default = Controls;
exports.default = _default;