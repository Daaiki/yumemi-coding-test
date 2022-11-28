import { baseApi } from '@/rtk/api/baseApi'

export type PopulationType = {
  message: null
  result: {
    boundaryYear: number
    data: PopulationDataType[]
  }
}

type PopulationDataType = {
  label: '総人口' | '年少人口' | '生産年齢人口' | '老年人口'
  data: {
    year: number
    value: number
    rate?: number
  }[]
}

type PopulationParamsType = {
  prefCode: number
  cityCode?: number | '-'
  addArea?: string
}

const populationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPopulations: builder.query<
      { [key: string]: PopulationType },
      PopulationParamsType[]
    >({
      queryFn: async (arg, _queryApi, _extraOptions, baseQuery) => {
        const results = await Promise.all(
          arg.map(async ({ cityCode = '-', prefCode }) => {
            const { data } = await baseQuery(
              `/population/composition/perYear?cityCode=${cityCode}&prefCode=${prefCode}`
            )
            return { [prefCode]: data }
          })
        )

        // データ整形
        const populations = {}
        results.map((result) => {
          Object.assign(populations, result)
        })

        return { data: populations }
      }
    })
  }),
  overrideExisting: false
})

export const { useGetPopulationsQuery } = populationsApi
