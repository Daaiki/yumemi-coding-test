import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://opendata.resas-portal.go.jp/api/v1',
    prepareHeaders: (headers) => {
      if (process.env.NEXT_PUBLIC_RESAS_API_KEY) {
        headers.set('X-API-KEY', process.env.NEXT_PUBLIC_RESAS_API_KEY)
      }
      return headers
    }
  }),
  endpoints: () => ({})
})
