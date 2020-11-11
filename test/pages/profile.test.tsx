import React from 'react'
import { render, screen } from '@testing-library/react'
import Profile from '../../pages/profile'

describe('Profile page', () => {
  const profile = {
    bestScore: "28",
    gameCount:"2",
    gameHistory: [
      {
        month: "November 2020",
        games: [
          {
            course: "Forge Pond",
            score: "47"
          },
          {
            course: "Bunker Hill",
            score: "28"
          }
        ]
      }
    ]
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
