import React from 'react'
import UserProfile from '../components/UserProfile'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/fonts.css'
import './UserProfile.css'
import './BtnStyles.css'
export default { title: 'User Profile' }
const profile = {
  user: {
    name: 'Test User',
    nickname: 'testuser',
    picture: '123.jpg',
    sub: 'abc',
    updated_at: 'November 2020',
  },
  created: 123,
}
export const Welcome = () => <UserProfile path="/welcome" profile={profile} />

export const Game = () => <UserProfile path="/game" profile={profile} />
