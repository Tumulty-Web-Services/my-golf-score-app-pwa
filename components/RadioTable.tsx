import React, { useState } from 'react'
import styles from '../styles/FlexTable.module.css'
import { RadioValue } from '../interfaces'

type Props = {
  toggleValues: RadioValue[]
  handleInput: any
}

export default function RadioTable({ handleInput, toggleValues }: Props) {
  const [value, setValue] = useState(toggleValues[0].label)

  function onChange() {
    return
  }

  return (
    <>
      {toggleValues.map((radioItem) => (
        <div
          data-testid="flex-table"
          key={radioItem.label}
          className={`${styles.flexTable} ${styles.radioTable} stories-flexTable stories-radioTable`}
        >
          <div>{radioItem.text}</div>
          <input
            type="radio"
            id="radioToggle"
            className={`${styles.flexRadioToggle} stories-flexRadioToggle`}
            name={radioItem.name}
            value={radioItem.label}
            onClick={() => {
              setValue(radioItem.label)
              handleInput(radioItem.label)
            }}
            onChange={() => onChange}
            checked={value === radioItem.label}
          />
          <label htmlFor="radioToggle">{radioItem.text}</label>
        </div>
      ))}
    </>
  )
}
