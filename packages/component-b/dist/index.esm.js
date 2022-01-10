import ComponentA from 'component-a';
import { jsx } from 'react/jsx-runtime';

var ComponentB = function ComponentB() {
  return jsx("div", {
    children: jsx(ComponentA, {})
  });
};

export { ComponentB as default };
