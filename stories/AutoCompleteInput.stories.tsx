import React from 'react'
import AutoCompleteInput from '../components/AutoCompleteInput'
import './AutoCompleteInput.css'
export default { title: 'Auto Complete Input' }

function handleSearchTerm(course: any, courseLength: any) {
  return course + courseLength
}

const items = [
  { label: 'Bunker Hill', dataLength: '47' },
  { label: 'Forge Pond', dataLength: '28' },
]

const value = ''

export const FormAutoCompleteInput = () => (
  <AutoCompleteInput
    value={value}
    items={items}
    handleInput={handleSearchTerm}
  />
)
