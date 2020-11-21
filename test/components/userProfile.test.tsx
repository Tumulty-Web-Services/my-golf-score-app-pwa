import React from 'react'
import { render, screen } from '../testutils'
import { cache } from 'swr'
import UserProfile from '../../components/UserProfile'

describe('UserProfile component', () => {
  const Props = {
    path: '/',
    profile: {
      name: 'Mike Michigan',
      username: 'mmichigan@gmail.com',
    },
  }

  afterEach(() => {
    cache.clear()
  })

  it('renders UserProfile component', () => {
    render(<UserProfile {...Props} />)

    expect(screen).toBeDefined()
  })

  it('renders Tumulty Web Services h1', () => {
    render(<UserProfile {...Props} />)

    expect(screen.getByText(/Mike Michigan/)).toBeDefined()
    expect(screen.getByText(/Mike Michigan/).closest('h1')).toBeDefined()
  })
})
