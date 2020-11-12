import React from 'react'
import { render, screen } from '../testutils'
import { cache } from 'swr'
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

  afterEach(() => {
    cache.clear()
  })

  it('renders ReplayGame component', () => {
    render(<ReplayGame session={profile} course="Bunker Hill" />)

    expect(screen).toBeDefined()
  })
})
