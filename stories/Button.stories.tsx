import React from 'react'
import ButtonLink from '../components/ButtonLink'
import './Button.css'
export default { title: 'Button Link' }

export const Button = () => (
  <ButtonLink link="/api/login" label="Replay Course" />
)
