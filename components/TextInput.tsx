import React, { useState } from 'react'
import styles from '../styles/TextInput.module.css'

type Props = {
  placeHolder: string
}
export default function TextInput({ placeHolder }: Props): JSX.Element {
  const [value, setValue] = useState('')

  function onInputChange(e) {
    e.preventDefault()
    setValue(e.currentTarget.value)
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
