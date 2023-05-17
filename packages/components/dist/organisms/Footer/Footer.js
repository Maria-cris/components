"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Button = _interopRequireDefault(require("../../atoms/Button/Button"));
var _TextLink = _interopRequireDefault(require("../../atoms/TextLink/TextLink"));
var _classnames = _interopRequireDefault(require("classnames"));
var _SocialMedia = _interopRequireDefault(require("../../molecules/SocialMedia/SocialMedia"));
var _Icon = _interopRequireDefault(require("../../atoms/Icon/Icon"));
var _Accordion = _interopRequireDefault(require("../../molecules/Accordion/Accordion"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _myrefHelper = require("../../helpers/myrefHelper");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var linksTitleSection = (0, _classnames.default)("font-principal font-bold lg:text-lg text-neutral-800 pb-6");
var textLinksClasses = (0, _classnames.default)("font-principal text-neutral-600 px-0 pb-4");
var Footer = function Footer(_ref) {
  var _newsletter$btn, _newsletter$btn2;
  var logoUrl = _ref.logoUrl,
    newsletter = _ref.newsletter,
    textLinks = _ref.textLinks,
    links = _ref.links,
    contact = _ref.contact,
    certificates = _ref.certificates,
    legal = _ref.legal;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    id: "Footer-container",
    className: "lg:px-20 md:px-10 px-6",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      id: "footer-desk-tab",
      className: "md:flex hidden flex-col",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        id: "footer-main",
        className: "flex justify-between items-center py-10",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          id: "Logo",
          className: "flex ",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: logoUrl,
            alt: "logo-img",
            className: "w-36 h-10"
          })
        }), newsletter ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          id: "mail-input",
          className: "flex flex-1 content-stretch font-principal",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            id: "subscribe-text",
            className: "flex w-full items-center justify-end  pr-6 font-bold md:text-sm lg:text-base",
            children: newsletter.text
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            type: "text",
            placeholder: newsletter === null || newsletter === void 0 ? void 0 : newsletter.inputTxt,
            id: "input-mail",
            name: newsletter === null || newsletter === void 0 ? void 0 : newsletter.inputName,
            className: "flex bg-neutral-200  w-1/2 rounded-l-lg py-4 px-3 font-principal text-neutral-800"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
            id: "btn-mail-subscribe",
            label: newsletter.btn.label,
            variant: "primary",
            size: "md",
            iconName: (_newsletter$btn = newsletter.btn) === null || _newsletter$btn === void 0 ? void 0 : _newsletter$btn.iconName,
            className: "rounded-l-none hidden lg:flex",
            onClick: newsletter.onClick
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
            id: "btn-mail-subscribe",
            label: newsletter.btn.label,
            variant: "primary",
            size: "xsm",
            iconName: (_newsletter$btn2 = newsletter.btn) === null || _newsletter$btn2 === void 0 ? void 0 : _newsletter$btn2.iconName,
            className: "rounded-l-none  lg:hidden",
            onClick: newsletter.onClick
          })]
        }) : ""]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        id: "footer-main-textlinks",
        className: "flex flex-row-reverse pb-6 space-x-2 space-x-reverse ",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextLink.default, _objectSpread(_objectSpread({}, textLinks), {}, {
          className: "font-bold font-principal text-base "
        }))
      }), links ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        id: "links",
        className: "border-t border-b border-neutral-400 flex justify-between py-10",
        children: links === null || links === void 0 ? void 0 : links.deskLinks.map(function (l, indx) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "flex flex-col",
            children: l.map(function (link, index) {
              var _link$linktext;
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                id: "col1",
                className: "flex flex-col pb-10",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  id: "title-section1",
                  className: linksTitleSection,
                  children: link === null || link === void 0 ? void 0 : link.titleSection
                }), link === null || link === void 0 ? void 0 : (_link$linktext = link.linktext) === null || _link$linktext === void 0 ? void 0 : _link$linktext.map(function (lt, indxLt) {
                  return /*#__PURE__*/(0, _react.createElement)(_TextLink.default, _objectSpread(_objectSpread({}, lt), {}, {
                    key: indxLt,
                    className: textLinksClasses
                  }));
                })]
              }, index);
            })
          }, indx);
        })
      }) : "", /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        id: "contact",
        className: "flex lg:justify-between py-10 lg:items-center md:flex-col lg:flex-row",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex lg:items-center md:flex-col lg:flex-row",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "font-principal font-bold lg:text-lg",
            children: contact === null || contact === void 0 ? void 0 : contact.text
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            id: "socialmedia",
            className: "flex",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SocialMedia.default, {
              className: " flex py-0 md:py-4 lg:items-center md:px-0 lg:px-6 space-x-8  md:justify-start lg:justify-center ",
              imgClassName: "h-5",
              socialMedia: contact === null || contact === void 0 ? void 0 : contact.socialMedia
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex flex-col",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "flex lg:justify-end font-principal font-bold",
            children: contact === null || contact === void 0 ? void 0 : contact.phoneText
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex items-start space-x-2 ",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, _objectSpread({}, contact === null || contact === void 0 ? void 0 : contact.icon))
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "font-primary text-neutral-600",
              children: contact === null || contact === void 0 ? void 0 : contact.phoneNumber
            })]
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        id: "certificates",
        className: "flex flex-col py-10 border-t border-b border-neutral-400",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "w-full flex justify-start pb-4 font-principal lg:text-lg font-bold",
          children: certificates === null || certificates === void 0 ? void 0 : certificates.title
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "flex space-x-10",
          children: certificates === null || certificates === void 0 ? void 0 : certificates.logos.map(function (logo, index) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              src: logo === null || logo === void 0 ? void 0 : logo.url,
              alt: logo === null || logo === void 0 ? void 0 : logo.alt,
              className: (0, _classnames.default)("h-16", _defineProperty({}, "cursor-pointer", logo === null || logo === void 0 ? void 0 : logo.link)),
              onClick: function onClick(e) {
                logo.link ? (0, _myrefHelper.myhref)(logo === null || logo === void 0 ? void 0 : logo.link) : e.stopPropagation();
              }
            }, index);
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        id: "legal",
        className: "flex justify-between py-6 items-center",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "font-principal flex space-x-1",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "text-neutral-700",
            children: legal === null || legal === void 0 ? void 0 : legal.title
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "font-bold text-neutral-800",
            children: legal === null || legal === void 0 ? void 0 : legal.text
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "text-neutral-700 font-principal",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextLink.default, _objectSpread({}, legal === null || legal === void 0 ? void 0 : legal.linkText))
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      id: "footer-mobile",
      className: "md:hidden flex flex-col",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        id: "Logo",
        className: "flex justify-between items-end pb-6",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: logoUrl,
          alt: "logo-img",
          className: "w-36 h-10"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          id: "footer-main-textlinks",
          className: "flex space-x-2 justify-end items-end ",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextLink.default, _objectSpread(_objectSpread({}, textLinks), {}, {
            className: "font-bold font-principal text-base"
          }))
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Accordion.default, {
          itemsData: links.mobileLinks
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        id: "contact",
        className: "flex  py-10 flex-col ",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex flex-col ",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "font-principal font-bold ",
            children: contact === null || contact === void 0 ? void 0 : contact.text
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            id: "socialmedia",
            className: "flex justify-start",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SocialMedia.default, {
              className: "  flex  py-4  min-[300px]:px-0 space-x-8 min-[300px]:justify-start  ",
              svgClass: "h-5",
              socialMedia: contact === null || contact === void 0 ? void 0 : contact.socialMedia
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex flex-col",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "flex font-principal font-bold",
            children: contact === null || contact === void 0 ? void 0 : contact.phoneText
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex items-start space-x-2 ",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, _objectSpread({}, contact === null || contact === void 0 ? void 0 : contact.icon))
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "font-primary text-neutral-600",
              children: contact === null || contact === void 0 ? void 0 : contact.phoneNumber
            })]
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        id: "certificates",
        className: "flex flex-col py-5 border-t border-b border-neutral-400",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "w-full flex justify-start pb-4 font-principal text-lg font-bold",
          children: certificates === null || certificates === void 0 ? void 0 : certificates.title
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "flex space-x-10 flex-wrap",
          children: certificates === null || certificates === void 0 ? void 0 : certificates.logos.map(function (logo, index) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              src: logo === null || logo === void 0 ? void 0 : logo.url,
              alt: logo === null || logo === void 0 ? void 0 : logo.alt,
              className: (0, _classnames.default)("h-16", _defineProperty({}, "cursor-pointer", logo === null || logo === void 0 ? void 0 : logo.link)),
              onClick: function onClick(e) {
                logo.link ? (0, _myrefHelper.myhref)(logo === null || logo === void 0 ? void 0 : logo.link) : e.stopPropagation();
              }
            }, index);
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        id: "legal",
        className: "flex flex-col space-y-4 py-6",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "font-principal flex space-x-1",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "text-neutral-700",
            children: legal === null || legal === void 0 ? void 0 : legal.title
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "font-bold text-neutral-800",
            children: legal === null || legal === void 0 ? void 0 : legal.text
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "text-neutral-700 font-principal",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextLink.default, _objectSpread({}, legal === null || legal === void 0 ? void 0 : legal.linkText))
        })]
      })]
    })]
  });
};
Footer.propTypes = {
  logoUrl: _propTypes.default.string,
  newsletter: _propTypes.default.object,
  textLinks: _propTypes.default.object,
  links: _propTypes.default.object,
  contact: _propTypes.default.object,
  certificates: _propTypes.default.object,
  legal: _propTypes.default.object
};
var _default = Footer;
exports.default = _default;