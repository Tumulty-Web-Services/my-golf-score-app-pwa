import React from 'react'
import styles from '../styles/GameInput.module.css'

type Props = {
  placeHolder: string
  handleInput: any
  type: string
  hole: string
  source: string
  max: string
  min: string
}

export default function GameInput({
  handleInput,
  placeHolder,
  type,
  hole,
  source,
  max,
  min
}: Props): JSX.Element {
  function onInputChange(e) {
    e.preventDefault()

    handleInput({
      source: e.currentTarget.getAttribute('data-source'),
      hole: e.currentTarget.getAttribute('data-hole'),
      input: e.currentTarget.value,
    })
  }

  return (
    <div className={styles.GameUserInputContainer}>
      <input
        id={`hole-${hole}`}
        type={type}
        className={`${styles.GameUserInput} stories-userInput`}
        aria-label="user-input"
        onChange={onInputChange}
        data-hole={hole}
        data-source={source}
        placeholder={placeHolder}
        max={max}
        min={min}
      />
    </div>
  )
}
