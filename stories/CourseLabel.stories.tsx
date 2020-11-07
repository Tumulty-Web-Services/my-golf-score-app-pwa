import React from 'react'
import CourseLabel from '../components/CourseLabel'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/fonts.css'
import './CourseHistory.css'
import './BtnStyles.css'
export default { title: 'Course Label' }

export const Card = () => (
  <div style={{ maxWidth: '300px' }}>
    <CourseLabel course="Bunker Hill" length="Eighteen" totalScore={0} />
  </div>
)
