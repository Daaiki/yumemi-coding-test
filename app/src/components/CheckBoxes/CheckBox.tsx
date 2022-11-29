import React from 'react'

type CheckBoxProps = {
  name: string
  value: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const CheckBox = ({ name, value, onChange }: CheckBoxProps) => {
  return (
    <div>
      <input
        type={'checkbox'}
        id={name}
        value={value}
        name={name}
        onChange={(e) => onChange(e)}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  )
}
