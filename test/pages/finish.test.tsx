import React from 'react'
import { render, screen } from '@testing-library/react'
import Finish from '../../pages/finish'

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

  it('renders Finish component', () => {
    render(<Finish session={profile} />)

    expect(screen).toBeDefined()
  })
})
