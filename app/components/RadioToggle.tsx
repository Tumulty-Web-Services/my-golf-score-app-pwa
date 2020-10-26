import React, { useState, createContext } from 'react'
import styles from '../styles/RadioToggle.module.css'
import { RadioValue } from '../interfaces'

type Props = {
  toggleValues: RadioValue[]
}

export default function RadioToggle({toggleValues}: Props): JSX.Element {
  const [value, setValue] = useState(toggleValues[0].label)
  
  function saveValue(item) {
    setValue(item)
  }
  
  return (
    <div className={`${styles.radioToolbar} stories-radioToolbar`}>
      {toggleValues.map((radioItem) => (
        <span key={radioItem.label}>
          <input            
            type="radio"
            id="radioToggle"
            name={radioItem.name}
            value={radioItem.label}
            onClick={() => saveValue(radioItem.label)}
            onChange={() => {}}
            checked={value === radioItem.label}
          />
          <label htmlFor="radioToggle">
            {radioItem.text}
          </label>
        </span>
      ))}   
    </div>
  )
}


{/* <input type="radio" id="radio-three" name="switch-two" value="yes" checked/>
<label htmlFor="radio-three">One</label>
<input type="radio" id="radio-four" name="switch-two" value="maybe" />
<label htmlFor="radio-four">Two</label>
<input type="radio" id="radio-five" name="switch-two" value="no" />
<label htmlFor="radio-five">Three</label> */}