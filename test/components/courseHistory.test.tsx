import React from 'react'
import { render, screen } from '@testing-library/react'
import CourseHistory from '../../components/CourseHistory'

describe('CourseHistory component', () => {
  const Props = {
    user: 'mmichigan@gmail.com',
  }

  it('renders CourseHistory component', () => {
    render(<CourseHistory {...Props} />)

    expect(screen).toBeDefined()
  })

  it('renders month props', () => {
    render(<CourseHistory {...Props} />)

    expect(screen.getByText(/November/)).toBeDefined()
    expect(screen.getByText(/November/).closest('small')).toBeDefined()
  })
})
