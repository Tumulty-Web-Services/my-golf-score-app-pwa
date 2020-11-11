import React from 'react'
import CourseHistory from '../components/CourseHistory'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/fonts.css'
import './CourseHistory.css'
export default { title: 'Course History' }
const games = [
  {
    course: 'Forge Pond',
    score: '100'
  },
  {
    course: 'Bunker Hill',
    score: '120'
  }
]

export const Table = () => <CourseHistory month="November" games={games} />
