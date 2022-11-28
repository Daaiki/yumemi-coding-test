import { PopulationType, PrefsType } from '@/rtk/api'

export const formatPopulationsData = (
  prefData: PrefsType,
  populationData: PopulationType[]
) => {
  const series = populationData.map((population) => {
    const type = 'line'
    const pref = prefData.result.find(
      (item) => item.prefCode === population.prefCode
    )
    const name = pref ? pref.prefName : ''
    const totalPopulation = population.result.data.find(
      (data) => data.label === '総人口'
    )
    const data = totalPopulation
      ? totalPopulation.data.map((item) => item.value)
      : []

    return {
      type,
      name,
      data
    }
  })

  const formatedPopulationsData =
    series.length !== 0
      ? series
      : [{ type: 'line', name: '都道府県名', data: [] }]

  return { formatedPopulationsData }
}
