'use client'

import { CheckBox } from '@/components/CheckBox'
import { useGetPrefecturesQuery } from '@/rtk/api'

export default function Home() {
  const { data: prefecturesData, isLoading: isPrefecturesLoading } =
    useGetPrefecturesQuery()

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
            />
          ))}
        </>
      )}
    </>
  )
}
