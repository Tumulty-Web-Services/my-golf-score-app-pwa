import React from 'react'
import ButtonLink from '../components/ButtonLink'
import '../styles/Button.module.css'

export default { title: 'Button Link' }

export const Button = () => <ButtonLink link="/api/login" label="LOGIN" />
