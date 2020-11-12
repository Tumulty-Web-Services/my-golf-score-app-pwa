import React from 'react'
import { render, screen } from '@testing-library/react'
import Finish from '../../pages/finish'
import 'jest-localstorage-mock'

describe('Finish page', () => {
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

  beforeEach(() => {
    localStorage.setItem('course', 'Bunker Hill')
    localStorage.setItem('totalScore', '58')
    localStorage.setItem(
      'rounds',
      JSON.stringify({ round: '1', yards: 229, par: '3', score: 5 })
    )
  })

  it('renders Finish component', () => {
    render(<Finish session={profile} />)

    expect(screen).toBeDefined()
  })
})
