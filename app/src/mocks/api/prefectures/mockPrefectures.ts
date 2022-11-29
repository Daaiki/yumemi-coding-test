import { ResponseResolver, MockedRequest, restContext } from 'msw'
import { PrefsType } from '@/rtk/api'

export const mockPrefectures: ResponseResolver<
  MockedRequest,
  typeof restContext
> = (_req, res, ctx) => {
  const mockPrefs: PrefsType = {
    message: null,
    result: [
      { prefCode: 1, prefName: '北海道' },
      { prefCode: 2, prefName: '岩手県' },
      { prefCode: 3, prefName: '宮城県' },
      { prefCode: 4, prefName: '秋田県' },
      { prefCode: 5, prefName: '山形県' }
    ]
  }

  return res(ctx.status(200), ctx.json(mockPrefs))
}
