import { rest } from 'msw'
import { mockPopulations } from '@/mocks/api/populations/mockPopulations'
import { mockPrefectures } from '@/mocks/api/prefectures/mockPrefectures'

export const handlers = [
  rest.get(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    mockPrefectures
  ),
  rest.get(
    'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear',
    mockPopulations
  )
]
