import React from 'react'
import UserProfile from '../components/UserProfile'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/fonts.css'
import './UserProfile.css'
import './BtnStyles.css'
export default { title: 'User Profile' }

export const Welcome = () => <UserProfile path="/welcome" />

export const Game = () => <UserProfile path="/game" />
