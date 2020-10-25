import React, { useState } from 'react'
import styles from '../styles/RadioToggle.module.css'
import { RadioValue } from '../interfaces'

type Props = {
  toggleValues: RadioValue[]
}

export default function RadioToggle({ toggleValues }: Props): JSX.Element {
  const [value, setValue] = useState(null)

  function onToggleChange(e) {
    e.preventDefault()
    setValue(e.target.value)
  }

  return (
    <>
      {toggleValues.map((radioItem) => (
        <div className={`${styles.radio} stories-radio`} key={radioItem.label}>
          <label htmlFor={radioItem.name}>
            <input
              type="radio"
              id={radioItem.label}
              name={radioItem.name}
              value={value}
              aria-label="radio-input"
              onChange={onToggleChange}
            />
            {radioItem.text}
          </label>
        </div>
      ))}
    </>
  )
}
