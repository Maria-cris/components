"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTextCount = void 0;
var getTextCount = function getTextCount(text, max) {
  var result = "";
  if (text != undefined) {
    var words = text.split(" ");
    var count = 0;
    for (var i = 0; i < words.length; i++) {
      count += words[i].length + 1;
      if (count < max) {
        result += words[i] + " ";
      } else {
        result += " ...";
        break;
      }
    }
    return result;
  }
};
exports.getTextCount = getTextCount;