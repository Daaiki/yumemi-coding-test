import { StoryObj, ComponentMeta } from '@storybook/react'
import { CheckBoxList } from '@/components/CheckBoxes'
import db from '@/mocks/db.json'

export default {
  component: CheckBoxList,
  argTypes: {
    data: {
      description: '都道府県のリスト'
    },
    onChange: {
      description: 'チェックボックスのイベントハンドラ'
    }
  }
} as ComponentMeta<typeof CheckBoxList>

export const Default: StoryObj = {
  args: {
    data: db.prefectures,
    onChange: () => 0
  }
}
