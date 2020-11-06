import React from 'react'
import GameCard from '../components/GameCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/fonts.css'
import './CourseHistory.css'
import './BtnStyles.css'
export default { title: 'Game Card' }

export const Card = () => (
  <div style={{ maxWidth: '1000px' }}>
    <GameCard path="/game" index="0" />
  </div>
)
