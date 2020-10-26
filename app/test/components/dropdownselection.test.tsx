import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import DropDownSelection from '../../components/DropDownSelection'

const score = [
  {
    id:' 0',
    label: '1'
  },
  {
    id: '1',
    label: '2'
  },
  {
    id: '2',
    label: '3'
  },
  {
    id: '3',
    label: '4'
  },
  {
    id: '4',
    label: '5'
  },
  {
    id: '5',
    label: '6'
  },
  {
    id: '6',
    label: '7'
  },
  {
    id: '7',
    label: '8'
  },
  {
    id: '8',
    label: '9'
  },
  {
    id: '9',
    label: '10'
  },
  {
    id:'10',
    label: '10+'
  }
];

const courses = [
  {
    id: '0',
    label: 'Rutgers University Course'
  },
  {
    id: '1',
    label: 'Hominy Hill'
  },
  {
    id: '2',
    label: 'Bunker Hill'
  }
]

describe('DropDownSelection component', () => {
  it('renders DropDownSelection component', () => {
    render(<DropDownSelection dropDownItems={score} title="Your Score" />)

    screen.debug()
  })

  it('button to be defined', () => {   
    const { container } = render(<DropDownSelection dropDownItems={courses} title="Select Course"/>)
    const button = container.querySelector('.dropDownHeader')
    
    expect(button).toBeDefined()
  }) 

  it('dropdown click event fires', () => {
   const { getByTestId, getByText } = render(<DropDownSelection dropDownItems={courses} title="Select Course"/>)
   fireEvent.click(getByText("Select Course"))

   expect(getByTestId("dropdown-body")).toHaveClass('open')
  }) 
 
})