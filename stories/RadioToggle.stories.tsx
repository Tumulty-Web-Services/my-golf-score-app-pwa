import React from 'react'
import RadioToggle from '../components/RadioToggle'
import './RadioToggle.css'
import { courseTypeToggles, parToggles } from '../utils/toggleData'

export default { title: 'RadioToggle' }

function handleInputStory(e: string) {
  alert(e)
  return e
}

export const courseTypeRadioToggle = () => (
  <RadioToggle
    handleInput={handleInputStory}
    toggleValues={courseTypeToggles}
  />
)

export const parRadioToggle = () => (
  <RadioToggle handleInput={handleInputStory} toggleValues={parToggles} />
)
