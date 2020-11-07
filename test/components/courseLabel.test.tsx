import React from 'react'
import { render, screen } from '@testing-library/react'
import CourseLabel from '../../components/CourseLabel'

describe('CourseLabel component', () => {
  it('renders CourseLabel component', () => {
    render(
      <CourseLabel course="Bunker Hill" totalScore={0} length="Eighteen" />
    )

    expect(screen).toBeDefined()
  })

  it('renders course title', () => {
    render(
      <CourseLabel course="Bunker Hill" totalScore={0} length="eighteen" />
    )

    expect(screen.getByText(/Course/)).toBeDefined()
  })
})
