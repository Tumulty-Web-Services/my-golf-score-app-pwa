import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import TextInput from '../../components/UserInput'

const setup = () => {
  const utils = render(<TextInput placeHolder="Enter course name" />)
  const input = utils.getByLabelText('text-input')
  return {
    input,
    ...utils,
  }
}

describe('TextInput component', () => {
  it('renders TextInput component', () => {
    render(<TextInput placeHolder="Enter course name" />)

    screen.debug()
  })

  it('renders text input', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: 'Bunker Hill' } })
    expect(input.value).toBe('Bunker Hill')
  })
})
