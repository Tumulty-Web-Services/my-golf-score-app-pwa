import React from 'react'
import { render, screen } from '../testutils'
import { cache } from 'swr'
import UserProfile from '../../components/UserProfile'

describe('UserProfile component', () => {
  const Props = {
    path: '/',
    profile: {
      user: {
        name: 'Tumulty Web Services',
        nickname: 'tumultywebservices',
        picture: '123.jpg',
        sub: 'abc',
        updated_at: 'November 2020',
      },
      created: 123456,
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

    expect(screen.getByText(/Tumulty Web Services/)).toBeDefined()
    expect(screen.getByText(/Tumulty Web Services/).closest('h1')).toBeDefined()
  })
})
