'use client'

import { CheckBox } from '@/components/CheckBox'
import { useCheckPrefs } from '@/hooks/useCheckPrefs'
import { useGetPrefecturesQuery } from '@/rtk/api'

export default function Home() {
  const { data: prefecturesData, isLoading: isPrefecturesLoading } =
    useGetPrefecturesQuery()
  const { prefs, checkPrefsHandler } = useCheckPrefs()

  // Todo: 流し込むときにprefsを使う
  console.log(prefs)

  const isLoading = isPrefecturesLoading
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
