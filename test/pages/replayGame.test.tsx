import React from 'react'
import { render, screen } from '@testing-library/react'
import ReplayGame from '../../pages/replay-game'

describe('ReplayGame page', () => {
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

  it('renders ReplayGame component', () => {
    render(<ReplayGame session={profile} />)

    expect(screen).toBeDefined()
  })
})
