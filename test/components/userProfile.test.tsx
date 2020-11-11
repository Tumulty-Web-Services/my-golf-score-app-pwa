import React from 'react'
import { render, screen } from '@testing-library/react'
import UserProfile from '../../components/UserProfile'
// https://medium.com/frontend-digest/using-testing-libary-with-useswr-f595919de2fd
describe('UserProfile component', () => {
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

  it('renders UserProfile component', () => {
    render(<UserProfile path="/game" profile={profile} />)

    expect(screen).toBeDefined()
  })

  it('renders Test User h1', () => {
    render(<UserProfile path="/game" profile={profile} />)

    expect(screen.getByText(/Test User/)).toBeDefined()
    expect(screen.getByText(/Test User/).closest('h1')).toBeDefined()
  })

  it('renders 123.jpg picture', () => {
    const { getByTestId } = render(
      <UserProfile path="/game" profile={profile} />
    )

    expect(getByTestId('avatar-image')).toBeDefined()
  })
})
