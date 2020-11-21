import React from 'react'
import { render, screen } from '@testing-library/react'
import Profile from '../../pages/profile'

describe('Profile page', () => {
  it('renders Profile component', () => {
    render(<Profile />)

    expect(screen).toBeDefined()
  })
})
