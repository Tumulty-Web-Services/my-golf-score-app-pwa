import React, { useState } from 'react'
import styles from '../styles/UserInput.module.css'

type Props = {
  placeHolder: string
  handleInput: any
  type: string
}

export default function UserInput({
  handleInput,
  placeHolder,
  type,
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
        type={type}
        value={value}
        className={`${styles.UserInput} stories-userInput`}
        aria-label="user-input"
        onChange={onInputChange}
        placeholder={placeHolder}
      />
    </>
  )
}
