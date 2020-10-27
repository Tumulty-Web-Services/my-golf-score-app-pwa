import React from 'react'
import { render, screen } from '@testing-library/react'
import SubTitle from '../../components/SubTitle'

describe('SubTitle component', () => {
  it('renders SubTitle component', () => {
    render(<SubTitle title="Course Information" />)

    screen.debug()
  })

  it('renders title props', () => {
    render(<SubTitle title="Course Information" />)

    expect(screen.getByText(/Course Information/)).toBeDefined()
  })
})
