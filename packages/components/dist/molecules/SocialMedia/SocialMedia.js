"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _myrefHelper = require("../../helpers/myrefHelper");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _SVGIcons = _interopRequireDefault(require("../../assets/SVGIcons"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import instagram from "../../assets/instagram.svg";
// import facebook from "../../assets/facebook.svg";
// import twitter from "../../assets/twitter.svg";
// import tiktok from "../../assets/tiktok.svg";

var defaultValues = {
  className: "",
  svgClass: ""
};

// const logos = {
//   ["instagram"]: instagram,
//   ["facebook"]: facebook,
//   ["twitter"]: twitter,
//   ["tiktok"]: tiktok,
// };

var smClass = (0, _classnames.default)("cursor-pointer ");
var SocialMedia = function SocialMedia(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? defaultValues.className : _ref$className,
    socialMedia = _ref.socialMedia,
    svgClass = _ref.svgClass;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _classnames.default)(className, "flex px-10 py-10 w-full justify-center space-x-2 "),
    children: socialMedia === null || socialMedia === void 0 ? void 0 : socialMedia.map(function (sm, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames.default)(smClass),
        id: sm === null || sm === void 0 ? void 0 : sm.alt,
        onClick: function onClick() {
          (0, _myrefHelper.myhref)(sm === null || sm === void 0 ? void 0 : sm.link);
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SVGIcons.default, {
          name: sm === null || sm === void 0 ? void 0 : sm.socialName,
          className: svgClass
        })
      }, index);
    })
  });
};
SocialMedia.propTypes = {
  className: _propTypes.default.string,
  svgClass: _propTypes.default.string
};
SocialMedia.defaultProps = defaultValues;
var _default = SocialMedia;
exports.default = _default;