import React from 'react'
import RadioTable from '../components/RadioTable'
import './FlexTable.css'
import { holeToggles } from '../utils/toggleData'

export default { title: 'Radio Table' }

export const SiteRadioTable = () => <RadioTable toggleValues={holeToggles} />
