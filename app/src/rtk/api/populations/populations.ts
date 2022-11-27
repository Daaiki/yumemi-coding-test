import { baseApi } from '@/rtk/api/baseApi'

export type PopulationType = {
  message: null
  result: {
    boundaryYear: number
    data: {
      label: string
      data: {
        year: number
        value: number
        rate?: number
      }[]
    }[]
  }[]
}

type PopulationParamsType = {
  prefCode: number
  cityCode?: number
}

const populationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPopulation: builder.query<PopulationType, PopulationParamsType>({
      query: ({ prefCode, cityCode = '-' }) => ({
        url: `/api/v1/population/composition/perYear?cityCode=${cityCode}&prefCode=${prefCode}`
      })
    })
  }),
  overrideExisting: false
})

export const { useGetPopulationQuery } = populationsApi
