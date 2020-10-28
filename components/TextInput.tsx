import React, { useState } from 'react'
import styles from '../styles/TextInput.module.css'

type Props = {
  placeHolder: string
  handleInput: any
}
export default function TextInput({
  handleInput,
  placeHolder,
}: Props): JSX.Element {
  const [value, setValue] = useState('')

  function onInputChange(e) {
    e.preventDefault()
    setValue(e.currentTarget.value)
    handleInput(e.currentTarget.value)
  }

  return (
    <>
      <input
        type="text"
        value={value}
        className={`${styles.textInput} stories-textInput`}
        aria-label="text-input"
        onChange={onInputChange}
        placeholder={placeHolder}
      />
    </>
  )
}
