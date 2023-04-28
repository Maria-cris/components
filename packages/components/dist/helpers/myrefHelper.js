"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.myhref = void 0;
var myhref = function myhref(web) {
  if (web === "") return;
  window.location.href = web;
};
exports.myhref = myhref;