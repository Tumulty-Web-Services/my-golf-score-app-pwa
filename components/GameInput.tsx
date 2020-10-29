import React, { useState } from 'react'
import styles from '../styles/UserInput.module.css'

type Props = {
  placeHolder: string
  handleInput: any
  type: string
  hole: string
  source: string
}

export default function GameInput({ handleInput, placeHolder, type, hole, source }: Props): JSX.Element {
  function onInputChange(e) {
    e.preventDefault()
   
    handleInput({
      source:e.currentTarget.getAttribute("data-source"),
      hole: e.currentTarget.getAttribute("data-hole"),
      input: e.currentTarget.value
    })
  }

  return (
    <>
      <input
        type={type}
        className={`${styles.UserInput} stories-userInput`}
        aria-label="user-input"
        onChange={onInputChange}
        data-hole={hole}
        data-source={source}
        placeholder={placeHolder}        
      />
    </>
  )
}
