import { PrefsType } from '@/rtk/api'
import { CheckBox } from '@/components/CheckBoxes'
import styles from '@/styles/components/CheckBoxes/CheckBoxList.module.scss'

type CheckBoxListProps = {
  data: PrefsType
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const CheckBoxList = ({ data, onChange }: CheckBoxListProps) => {
  return (
    <div className={styles.list}>
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
