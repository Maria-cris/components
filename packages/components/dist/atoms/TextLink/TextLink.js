"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var TextLink = function TextLink(_ref) {
  var text = _ref.text,
    href = _ref.href;
  //expand icon state

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "p-1  cursor-pointer hover:underline",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      className: "font-principal text-sm",
      href: href,
      children: text
    })
  });
};
TextLink.propTypes = {
  text: _propTypes.default.string,
  href: _propTypes.default.string
};
var _default = TextLink;
exports.default = _default;