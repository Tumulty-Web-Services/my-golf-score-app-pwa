import React from 'react'
import { render, screen } from '@testing-library/react'
import Login from '../../pages/login'

describe('Login page', () => {
  it('renders Login component', () => {
    render(<Login />)

    screen.debug()
  })
})
