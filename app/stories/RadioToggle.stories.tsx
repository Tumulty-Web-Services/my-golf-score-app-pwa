import React from 'react'
import RadioToggle from '../components/RadioToggle'
import './RadioToggle.css'
import { courseTypeToggles } from '../utils/toggleData'

export default { title: 'RadioToggle' }

export const SiteRadioToggle = () => (
  <RadioToggle toggleValues={courseTypeToggles} />
)
