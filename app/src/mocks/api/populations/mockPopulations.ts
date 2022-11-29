import { ResponseResolver, MockedRequest, restContext } from 'msw'
import { PopulationType } from '@/rtk/api'
import { json1, json2, json3, json4, json5 } from '@/mocks/api/populations/data'

const populations = new Map<string, Omit<PopulationType, 'prefCode'>>()
populations.set('1', json1)
populations.set('2', json2)
populations.set('3', json3)
populations.set('4', json4)
populations.set('5', json5)

export const mockPopulations: ResponseResolver<
  MockedRequest,
  typeof restContext
> = (req, res, ctx) => {
  const prefCode = req.url.searchParams.get('prefCode')

  if (prefCode === null) {
    return res(ctx.status(200), ctx.text('"400"'))
  }

  if (!populations.has(prefCode)) {
    return res(ctx.status(200), ctx.json({ message: null, result: null }))
  }

  return res(ctx.status(200), ctx.json(populations.get(prefCode)))
}
