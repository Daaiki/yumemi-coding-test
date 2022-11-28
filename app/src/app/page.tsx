'use client'

import { CheckBox } from '@/components/CheckBox'
import { LineGraph } from '@/components/LineGraph'
import { useCheckPrefs } from '@/hooks/useCheckPrefs'
import { useGetPopulationsQuery, useGetPrefecturesQuery } from '@/rtk/api'

export default function Home() {
  const { data: prefecturesData, isLoading: isPrefecturesLoading } =
    useGetPrefecturesQuery()
  const { prefs, checkPrefsHandler } = useCheckPrefs()
  const { data: populationsData, isLoading: isPopulationsLoading } =
    useGetPopulationsQuery(prefs)

  const isLoading = isPrefecturesLoading || isPopulationsLoading
  return (
    <>
      {isLoading || !prefecturesData || !populationsData ? (
        <>{'loading'}</>
      ) : (
        <>
          {prefecturesData.result.map((data) => (
            <CheckBox
              key={data.prefCode}
              name={data.prefName}
              value={data.prefCode}
              onChange={checkPrefsHandler}
            />
          ))}
          <LineGraph
            prefecturesData={prefecturesData}
            populationsData={populationsData}
          />
        </>
      )}
    </>
  )
}
