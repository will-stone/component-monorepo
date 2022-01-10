import type { ComponentMeta, ComponentStory } from '@storybook/react'

import ComponentB from './src/index'

export default {
  component: ComponentB,
} as ComponentMeta<typeof ComponentB>

const Template: ComponentStory<typeof ComponentB> = () => <ComponentB />

export const Default = Template.bind({})
Default.args = {}
