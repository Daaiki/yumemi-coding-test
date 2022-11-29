import { PrefsType } from '@/rtk/api'
import { CheckBox } from '@/components/CheckBoxes'

type CheckBoxListProps = {
  data: PrefsType
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const CheckBoxList = ({ data, onChange }: CheckBoxListProps) => {
  return (
    <div>
      {data.result.map((pref) => (
        <CheckBox
          key={pref.prefCode}
          name={pref.prefName}
          value={pref.prefCode}
          onChange={onChange}
        />
      ))}
    </div>
  )
}
