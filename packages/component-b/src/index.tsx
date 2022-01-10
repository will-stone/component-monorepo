// @ts-expect-error -- component A is JS and doesn't currently have a declaration file
import ComponentA from "component-a";

const ComponentB = () => (
  <div>
    <ComponentA />
  </div>
);

export default ComponentB;
