import React from 'react'
import { render, screen } from '@testing-library/react'
import Game from '../../pages/game'

describe('Game page', () => {
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

  it('renders Game component', () => {
    render(<Game session={profile} />)

    expect(screen).toBeDefined()
  })
})
