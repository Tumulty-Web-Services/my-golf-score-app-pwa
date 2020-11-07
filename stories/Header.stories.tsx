import React from 'react'
import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/fonts.css'
import './Header.css'
export default { title: 'Header' }

export const Block = () => <Header authed={false} />
