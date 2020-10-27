import React from 'react'
import { render, screen } from '@testing-library/react'
import ReplayHoles from '../../pages/replay-holes/[hole]'

describe('ReplayHoles page', () => {
  it('renders ReplayHoles component', () => {
    render(<ReplayHoles />)

    screen.debug()
  })
})
