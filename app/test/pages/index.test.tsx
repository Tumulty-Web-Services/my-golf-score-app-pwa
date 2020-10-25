import React from 'react'
import { render } from '@testing-library/react'
import Page from '../../pages/index'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Page />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
