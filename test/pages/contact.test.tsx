import React from 'react'
import { render, screen } from '@testing-library/react'
import Contact from '../../pages/contact'

describe('Contact page', () => {
  it('renders Contact component', () => {
    render(<Contact />)

    screen.debug()
  })
})
