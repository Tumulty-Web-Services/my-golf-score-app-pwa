import React from 'react'
import AutoCompleteInput from '../components/AutoCompleteInput'
import './AutoCompleteInput.css'
export default { title: 'Auto Complete Input' }

function handleSearchTerm(term: any) {
  console.log('term', term)
}

const items = [
  { label: 'apple' },
  { label: 'banana' },
  { label: 'pear' }
]

const value = ''

export const FormAutoCompleteInput = () => (
  <AutoCompleteInput value={value} items={items} />
)
