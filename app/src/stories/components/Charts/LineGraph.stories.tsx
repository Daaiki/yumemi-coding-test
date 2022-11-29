import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { StoryObj, ComponentMeta } from '@storybook/react'
import { LineGraph } from '@/components/Charts'
import db from '@/mocks/db.json'

export default {
  component: LineGraph,
  argTypes: {
    prefecturesData: {
      description: '都道府県名と都道府県コードの配列'
    },
    populationsData: {
      description: '都道府県に対応する、年単位の人口推移データ'
    }
  },
  render: (args) => {
    if (process.env.NODE_ENV === 'test') {
      return <HighchartsReact highcharts={Highcharts} />
    }

    return <LineGraph {...args} />
  }
} as ComponentMeta<typeof LineGraph>

export const Default: StoryObj = {
  args: {
    prefecturesData: db.prefectures,
    populationsData: [db.pop_1, db.pop_2, db.pop_3, db.pop_4, db.pop_5]
  }
}
