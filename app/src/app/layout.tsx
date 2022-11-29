'use client'

import 'normalize.css'
import '@/styles/global.scss'
import { Provider } from 'react-redux'
import { store } from '@/rtk/store'

if (process.env.NODE_ENV === 'development') {
  const MockServer = () => import('@/mocks/worker')
  MockServer()
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={'ja'}>
      <head />
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  )
}
