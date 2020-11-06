import React from 'react'
import { render, screen } from '@testing-library/react'
import CourseLabel from '../../components/CourseLabel'

describe('CourseLabel component', () => {
  it('renders CourseLabel component', () => {
    render(<CourseLabel />)

    screen.debug()
  })

  it('renders course title', () => {
    render(<CourseLabel />)

    expect(screen.getByText(/Course/)).toBeDefined()
  })
})
