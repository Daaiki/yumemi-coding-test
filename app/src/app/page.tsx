'use client'

import { CheckBox } from '@/components/CheckBox'
import { useCheckPrefs } from '@/hooks/useCheckPrefs'
import { useGetPopulationsQuery, useGetPrefecturesQuery } from '@/rtk/api'

export default function Home() {
  const { data: prefecturesData, isLoading: isPrefecturesLoading } =
    useGetPrefecturesQuery()
  const { prefs, checkPrefsHandler } = useCheckPrefs()
  const { isLoading: isPopulationsLoading } =
    useGetPopulationsQuery(prefs)

  const isLoading = isPrefecturesLoading || isPopulationsLoading
  return (
    <>
      {isLoading || !prefecturesData ? (
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
        </>
      )}
    </>
  )
}
