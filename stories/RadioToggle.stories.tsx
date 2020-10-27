import React from 'react'
import RadioToggle from '../components/RadioToggle'
import './RadioToggle.css'
import { courseTypeToggles, parToggles } from '../utils/toggleData'

export default { title: 'RadioToggle' }

export const courseTypeRadioToggle = () => (
  <RadioToggle toggleValues={courseTypeToggles} />
)

export const parRadioToggle = () => <RadioToggle toggleValues={parToggles} />
