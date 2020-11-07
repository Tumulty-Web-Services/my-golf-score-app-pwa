import React from 'react'
import { render, screen } from '@testing-library/react'
import CourseHistory from '../../components/CourseHistory'

describe('CourseHistory component', () => {
  it('renders CourseHistory component', () => {
    render(<CourseHistory month="November" />)

    expect(screen).toBeDefined()
  })

  it('renders month props', () => {
    render(<CourseHistory month="November" />)

    expect(screen.getByText(/November/)).toBeDefined()
    expect(screen.getByText(/November/).closest('small')).toBeDefined()
  })
})
