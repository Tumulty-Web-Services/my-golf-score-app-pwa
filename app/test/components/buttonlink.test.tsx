import React from 'react'
import { render, screen } from '@testing-library/react'
import ButtonLink from '../../components/ButtonLink'

describe('ButtonLink component', () => {
  it('renders ButtonLink component', () => {
    render(<ButtonLink link="/api/login" label="Login" />)

    screen.debug()
  })

  it('renders link and label props', () => {
    render(<ButtonLink link="/api/login" label="Login" />)

    expect(screen.getByText(/Login/)).toBeDefined()
    expect(screen.getByText(/Login/).closest('a')).toBeDefined()
  })
})
