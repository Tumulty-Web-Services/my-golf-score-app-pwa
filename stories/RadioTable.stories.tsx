import React from 'react'
import RadioTable from '../components/RadioTable'
import './FlexTable.css'
import { holeToggles } from '../utils/toggleData'

export default { title: 'Radio Table' }

function handleInputStory(e: string) {
  alert(e)
  return e
}

export const SiteRadioTable = () => (
  <RadioTable handleInput={handleInputStory} toggleValues={holeToggles} />
)
