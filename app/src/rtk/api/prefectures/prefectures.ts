import { baseApi } from '@/rtk/api/baseApi'

export type PrefecturesType = {
  message: null
  result: {
    prefCode: number
    prefName: string
  }[]
}

const prefecturesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPrefectures: builder.query<PrefecturesType, void>({
      query: () => ({
        url: `/api/v1/prefectures`
      })
    })
  }),
  overrideExisting: false
})

export const { useGetPrefecturesQuery } = prefecturesApi
