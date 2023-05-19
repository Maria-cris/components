"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateAspectRatioPercentage = void 0;
var calculateAspectRatioPercentage = function calculateAspectRatioPercentage(ratio, fractionRegex, defaultRatioPercentage) {
  var containsValidFraction = fractionRegex.test(ratio);
  if (containsValidFraction) {
    var fraction = ratio.match(fractionRegex) ? ratio.match(fractionRegex)[0] : false;
    var numerator = Number(fraction ? fraction.split("/")[0] : 1);
    var denominator = Number(fraction ? fraction.split("/")[1] : 0);
    var roundedNumerator = Math.floor(numerator);
    var roundedDenominator = Math.floor(denominator);
    return "".concat(roundedDenominator / roundedNumerator * 100, "%");
  } else {
    return defaultRatioPercentage;
  }
};
exports.calculateAspectRatioPercentage = calculateAspectRatioPercentage;