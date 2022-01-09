'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ComponentA = require('component-a');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ComponentA__default = /*#__PURE__*/_interopDefaultLegacy(ComponentA);

var ComponentB = function ComponentB() {
  return /*#__PURE__*/jsxRuntime.jsx("div", {
    children: /*#__PURE__*/jsxRuntime.jsx(ComponentA__default["default"], {})
  });
};

exports["default"] = ComponentB;
