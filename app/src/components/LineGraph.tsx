import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { PopulationType, PrefsType } from '@/rtk/api'
import { options } from '@/utils/lineGraphOptions'
import { formatPopulationsData } from '@/utils/formatPopulationsData'

type LineGraphProps = {
  populationsData: PopulationType[]
  prefecturesData: PrefsType
}

export const LineGraph = ({
  prefecturesData,
  populationsData
}: LineGraphProps) => {
  const { formatedPopulationsData } = formatPopulationsData(
    prefecturesData,
    populationsData
  )

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={{ ...options, series: formatedPopulationsData }}
      />
    </div>
  )
}
