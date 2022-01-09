import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';
import _regeneratorRuntime from '@babel/runtime/regenerator';
import { useState } from 'react';
import styled from 'styled-components';
import { jsx, jsxs } from 'react/jsx-runtime';

var _templateObject;
var StyledButton = styled.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: blue;\n"])));

var doProm = function doProm() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      return resolve("done");
    }, 1000);
  });
};

var Button = function Button() {
  var _useState = useState('click to run promise'),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var handleClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var result;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setData("waiting");
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

  return /*#__PURE__*/jsx(StyledButton, {
    onClick: handleClick,
    children: data
  });
};

var ComponentA = function ComponentA(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/jsxs("div", {
    children: [/*#__PURE__*/jsx(Button, {}), children]
  });
};

export { ComponentA as default };
