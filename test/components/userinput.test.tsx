import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import UserInput from '../../components/UserInput'

function handleTestInput(e) {
  return e
}
const setup = () => {
  const utils = render(<UserInput type="text" handleInput={handleTestInput} placeHolder="Enter course name" />)
  const input = utils.getByLabelText('user-input')
  return {
    input,
    ...utils,
  }
}

describe('UserInput component', () => {
  it('renders UserInput component', () => {
    render(<UserInput type="text" handleInput={handleTestInput} placeHolder="Enter course name" />)

    screen.debug()
  })

  it('renders text input', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: 'Bunker Hill' } })
    expect(input.value).toBe('Bunker Hill')
  })
})
