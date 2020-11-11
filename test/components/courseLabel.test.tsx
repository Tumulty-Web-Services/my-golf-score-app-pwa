import React from 'react'
import { render, screen } from '@testing-library/react'
import CourseLabel from '../../components/CourseLabel'

describe('CourseLabel component', () => {
  const Props = {
    course: 'Bunker Hill',
    totalScore: 125,
    user: 'tumultywebservices',
    length: 'Nine',
  }
  it('renders CourseLabel component', () => {
    render(<CourseLabel {...Props} />)

    expect(screen).toBeDefined()
  })

  it('renders course title', () => {
    render(<CourseLabel {...Props} />)

    expect(screen.getByText(/Course/)).toBeDefined()
  })
})
