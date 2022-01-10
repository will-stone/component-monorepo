import React from 'react'

import ComponentA from './src'

export default {
  component: ComponentA,
}

const Template = (arguments_) => <ComponentA {...arguments_} />

export const Default = Template.bind({})
Default.args = {}
