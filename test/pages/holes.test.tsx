import React from 'react'
import { render, screen } from '@testing-library/react'
import Holes from '../../pages/holes/[hole]'

describe('Holes page', () => {
  it('renders Holes component', () => {
    render(<Holes />)

    screen.debug()
  })
})
