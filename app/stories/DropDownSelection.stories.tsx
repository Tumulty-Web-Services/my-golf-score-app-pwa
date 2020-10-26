import React from 'react'
import DropDownSelection from '../components/DropDownSelection'
import './DropDownSelection.css'
export default { title: 'Drop Down Selection' }

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

export const DropDownSelectionWithScores = () => < DropDownSelection dropDownItems={score} title="Your score" />

export const DropDownSelectionWithSelectCourse = () => < DropDownSelection dropDownItems={courses} title="Select Course" />