import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import RadioToggle from '../../components/RadioToggle'
import { courseTypeToggles, parToggles } from '../../utils/toggleData'

describe('RadioToggle component', () => {
  it('renders RadioToggle component', () => {
    render(<RadioToggle toggleValues={parToggles} />)

    screen.debug()
  })

  it('renders radio button values', () => {
    const { getByLabelText } = render(
      <RadioToggle toggleValues={courseTypeToggles} />
    )
    const radio = getByLabelText('9')

    fireEvent.change(radio, { target: { value: 'nine' } })
    expect(radio.value).toBe('nine')
  })
})
