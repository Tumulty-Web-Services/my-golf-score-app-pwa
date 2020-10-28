import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import RadioTable from '../../components/RadioTable'
import { yourScoreData } from '../../utils/toggleData'

describe('RadioTable component', () => {
  function testHandleInput(e: string) {
    return e
  }

  it('renders RadioTable component', () => {
    render(
      <RadioTable handleInput={testHandleInput} toggleValues={yourScoreData} />
    )

    screen.debug()
  })

  it('renders radio button values', () => {
    const { getByLabelText } = render(
      <RadioTable handleInput={testHandleInput} toggleValues={yourScoreData} />
    )
    const radio = getByLabelText('9')

    fireEvent.change(radio, { target: { value: 'nine' } })
    expect(radio.value).toBe('nine')
  })

  it('handleInput callback function returns string', () => {
    const testFunc = testHandleInput('radio toggle')

    expect(typeof testFunc).toBe('string')
  })
})
