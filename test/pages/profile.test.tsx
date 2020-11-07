import React from 'react'
import { render, screen } from '@testing-library/react'
import Profile from '../../pages/profile'

describe('Profile page', () => {
  const profile = {
    user: {
      name: 'Test User',
      nickname: 'testuser',
      picture: '123.jpg',
      sub: 'abc',
      updated_at: 'November 2020',
    },
    created: 123,
  }

  it('renders Profile component', () => {
    render(<Profile session={profile} />)

    expect(screen).toBeDefined()
  })
})
