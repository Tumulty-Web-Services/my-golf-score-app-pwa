import React from 'react'
import Autocomplete from 'react-autocomplete'
import styles from '../styles/AutoCompleteInput.module.css'

type Props = {
  value: string
  items: {
    label: string
    dataLength: string
  }[]
  handleInput: any
}

export default function AutoCompleteInput({
  value,
  items,
  handleInput,
}: Props): JSX.Element {
  return (
    <Autocomplete
      getItemValue={(item) => item.label}
      items={items}
      renderItem={(item, isHighlighted) => (
        <div
          data-length={item.dataLength}
          className={`${styles.autocompleteItem} stories-autocomplete-item`}
          style={{ background: isHighlighted ? 'lightgray' : 'white' }}
        >
          {item.label}
        </div>
      )}
      renderInput={(props) => (
        <input
          className={`${styles.autocomplete} stories-autocomplete`}
          {...props}
          placeHolder="Search previous course"
        />
      )}
      value={value}
      onSelect={(val) => handleInput(val)}
      menuStyle={{
        borderRadius: '10px',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '2px 0',
        fontSize: '90%',
        position: 'fixed',
        overflow: 'auto',
        fontFamily: 'Roboto',
      }}
    />
  )
}
