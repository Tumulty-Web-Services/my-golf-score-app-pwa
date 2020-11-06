import React from 'react'
import { render, screen } from '@testing-library/react'
import Support from '../../pages/support'

describe('Support page', () => {
  it('renders Support component', () => {
    render(<Support />)

    screen.debug()
  })
})
