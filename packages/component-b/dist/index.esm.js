import ComponentA from 'component-a';
import { jsx } from 'react/jsx-runtime';

var ComponentB = function ComponentB() {
  return /*#__PURE__*/jsx("div", {
    children: /*#__PURE__*/jsx(ComponentA, {})
  });
};

export { ComponentB as default };
