import { baseApi } from '@/rtk/api/baseApi'

export type PopulationType = {
  message: null
  prefCode: number
  result: {
    boundaryYear: number
    data: PopulationDataType[]
  }
}

export type PopulationDataType = {
  label: '総人口' | '年少人口' | '生産年齢人口' | '老年人口'
  data: {
    year: number
    value: number
    rate?: number
  }[]
}

export type PopulationParamsType = {
  prefCode: number
  cityCode?: number | '-'
  addArea?: string
}

const populationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPopulations: builder.query<PopulationType[], PopulationParamsType[]>({
      // TODO: 型どうにかする
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      queryFn: async (arg, _queryApi, _extraOptions, baseQuery) => {
        const results = await Promise.all(
          arg.map(async ({ cityCode = '-', prefCode }) => {
            const { data } = await baseQuery(
              `/population/composition/perYear?cityCode=${cityCode}&prefCode=${prefCode}`
            )
            return {
              prefCode,
              ...(data as PopulationType[])
            }
          })
        )

        return { data: results }
      }
    })
  }),
  overrideExisting: false
})

export const { useGetPopulationsQuery } = populationsApi
