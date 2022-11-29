import { StoryObj, ComponentMeta } from '@storybook/react'
import { CheckBox } from '@/components/CheckBoxes'

export default {
  component: CheckBox,
  argTypes: {
    name: {
      description: 'チェックボックスのラベル'
    },
    value: {
      description: 'チェックボックスが保持する値'
    },
    onChange: {
      description: 'チェックボックスのイベントハンドラ'
    }
  }
} as ComponentMeta<typeof CheckBox>

export const Default: StoryObj = {
  args: {
    name: '北海道',
    value: 1,
    onChange: () => 0
  }
}
