import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from '../../layouts/Card'

describe('Card component', () => {
  it('renders Card component', () => {
    render(
      <Card>
        <p>Card Text</p>
      </Card>
    )

    screen.debug()
  })

  it('renders children', () => {
    render(
      <Card>
        <p>Card Text</p>
      </Card>
    )

    expect(screen.getByText(/Card Text/)).toBeDefined()
  })
})
