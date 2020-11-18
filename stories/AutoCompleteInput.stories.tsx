import React from 'react'
import AutoCompleteInput from '../components/AutoCompleteInput'
import './AutoCompleteInput.css'
export default { title: 'Auto Complete Input' }

const Props = {
  user: 'mmichigan@gmail.com',
  course: 'Bunker Hill',
  handleInput: (course: any, courseLength: any) => {
    return `${course} + ${courseLength}`
  },
}

export const FormAutoCompleteInput = () => <AutoCompleteInput {...Props} />
