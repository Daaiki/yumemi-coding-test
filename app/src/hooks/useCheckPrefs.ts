import { useState } from 'react'
import { PrefType } from '@/rtk/api'

export const useCheckPrefs = () => {
  const [prefs, setPrefs] = useState<PrefType[]>([])

  const checkPrefsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked
    const prefCode = parseInt(e.target.value)
    const prefName = e.target.name

    if (isChecked) {
      setPrefs((prefs) => [...prefs, { prefCode, prefName }])
    } else {
      setPrefs((prefs) => prefs.filter((item) => prefCode !== item.prefCode))
    }
  }

  return { prefs, checkPrefsHandler }
}
