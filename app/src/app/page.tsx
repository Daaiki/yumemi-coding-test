'use client'

import { CheckBoxList } from '@/components/CheckBoxes'
import { Container } from '@/components/Containers'
import { LineGraph } from '@/components/Charts'
import { useCheckPrefs } from '@/hooks/useCheckPrefs'
import { useGetPopulationsQuery, useGetPrefecturesQuery } from '@/rtk/api'
import { Header } from '@/components/Headers'
import { LoadingPage } from '@/components/Loadings'

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
        <LoadingPage />
      ) : (
        <div>
          <Header />
          <Container>
            <CheckBoxList data={prefecturesData} onChange={checkPrefsHandler} />
            <LineGraph
              prefecturesData={prefecturesData}
              populationsData={populationsData}
            />
          </Container>
        </div>
      )}
    </>
  )
}
