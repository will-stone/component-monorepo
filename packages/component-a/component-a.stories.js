import React from "react";

import ComponentA from "./src";

export default {
  component: ComponentA,
};

const Template = (args) => <ComponentA {...args} />;

export const Default = Template.bind({});
Default.args = {};
