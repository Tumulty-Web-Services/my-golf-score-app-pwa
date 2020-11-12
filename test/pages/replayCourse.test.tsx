import React from 'react'
import { render, screen } from '@testing-library/react'
import ReplayCourse from '../../pages/replay-course'

describe('ReplayCourse page', () => {
  const session = {
    user: {
      name: 'Tumulty Web Services',
      nickname: 'tumultywebservices',
      picture: '123.jpg',
      sub: 'abc',
      updated_at: 'November 2020',
    },
    created: 123,
  }

  it('renders ReplayCourse component', () => {
    render(<ReplayCourse session={session} />)

    expect(screen).toBeDefined()
  })
})
