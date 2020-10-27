import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import RadioToggle from '../../components/RadioToggle'
import { courseTypeToggles, parToggles } from '../../utils/toggleData'

describe('RadioToggle component', () => {
  function testHandleInput(e: string) {
    return e
  }

  it('renders RadioToggle component', () => {
    render(<RadioToggle handleInput={testHandleInput} toggleValues={parToggles} />)

    screen.debug()
  })

  it('renders radio button values', () => {
    const { getByLabelText } = render(
      <RadioToggle handleInput={testHandleInput} toggleValues={courseTypeToggles} />
    )
    const radio = getByLabelText('9')

    fireEvent.change(radio, { target: { value: 'nine' } })
    expect(radio.value).toBe('nine')
  })

  it('handleInput callback function returns string', () => {
    const testFunc = testHandleInput('radio toggle')

    expect(typeof testFunc ).toBe('string')
  })
})
