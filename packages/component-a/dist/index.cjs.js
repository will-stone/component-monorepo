'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _taggedTemplateLiteral = require('@babel/runtime/helpers/taggedTemplateLiteral');
var _regeneratorRuntime = require('@babel/runtime/regenerator');
var react = require('react');
var styled = require('styled-components');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _taggedTemplateLiteral__default = /*#__PURE__*/_interopDefaultLegacy(_taggedTemplateLiteral);
var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var _templateObject;
var StyledButton = styled__default["default"].button(_templateObject || (_templateObject = _taggedTemplateLiteral__default["default"](["\n  color: blue;\n"])));

var doProm = function doProm() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      return resolve('done');
    }, 1000);
  });
};

var Button = function Button() {
  var _useState = react.useState('click to run promise'),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var handleClick = function () {
    var _ref = _asyncToGenerator__default["default"](_regeneratorRuntime__default["default"].mark(function _callee() {
      var result;
      return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setData('waiting');
              _context.next = 3;
              return doProm();

            case 3:
              result = _context.sent;
              setData(result);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleClick() {
      return _ref.apply(this, arguments);
    };
  }();

  return jsxRuntime.jsx(StyledButton, {
    onClick: handleClick,
    children: data
  });
};

var Nested = function Nested() {
  return jsxRuntime.jsx("div", {
    children: "I am nested"
  });
};

var Nested$1 = Nested;

var ComponentA = function ComponentA(_ref) {
  var children = _ref.children;
  return jsxRuntime.jsxs("div", {
    children: [jsxRuntime.jsx(Button, {}), children, jsxRuntime.jsx(Nested$1, {})]
  });
};

exports["default"] = ComponentA;
