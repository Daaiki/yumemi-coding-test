import React from 'react'
import styles from '@/styles/components/CheckBoxes/CheckBox.module.scss'

type CheckBoxProps = {
  name: string
  value: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const CheckBox = ({ name, value, onChange }: CheckBoxProps) => {
  return (
    <div className={styles.container}>
      <input
        type={'checkbox'}
        id={name}
        value={value}
        name={name}
        onChange={(e) => onChange(e)}
      />
      <label className={styles.label} htmlFor={name}>
        {name}
      </label>
    </div>
  )
}
