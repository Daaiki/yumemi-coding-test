import { baseApi } from '@/rtk/api/baseApi'

export type PrefsType = {
  message: null
  result: PrefType[]
}

export type PrefType = {
  prefCode: number
  prefName: string
}

const prefecturesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPrefectures: builder.query<PrefsType, void>({
      query: () => ({
        url: `/api/v1/prefectures`
      })
    })
  }),
  overrideExisting: false
})

export const { useGetPrefecturesQuery } = prefecturesApi
