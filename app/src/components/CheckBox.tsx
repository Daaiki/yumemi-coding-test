type CheckBoxProps = {
  name: string
  value: number
}

export const CheckBox = ({ name, value }: CheckBoxProps) => {
  return (
    <div>
      <input type={'checkbox'} id={name} value={value} />
      <label htmlFor={name}>{name}</label>
    </div>
  )
}
