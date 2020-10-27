import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import RadioTable from '../../components/RadioTable'
import { yourScoreData } from '../../utils/toggleData'

describe('RadioTable component', () => {
  it('renders RadioTable component', () => {
    render(<RadioTable toggleValues={yourScoreData} />)

    screen.debug()
  })

  it('renders radio button values', () => {
    const { getByLabelText } = render(
      <RadioTable toggleValues={yourScoreData} />
    )
    const radio = getByLabelText('9')

    fireEvent.change(radio, { target: { value: 'nine' } })
    expect(radio.value).toBe('nine')
  })
})
