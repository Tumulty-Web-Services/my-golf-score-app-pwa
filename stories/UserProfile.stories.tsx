import React from 'react'
import UserProfile from '../components/UserProfile'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/fonts.css'
import './UserProfile.css'
import './BtnStyles.css'
export default { title: 'User Profile' }

const GameProps = {
  path: '/game',
  profile: {
    name: 'Mike Michigan',
    username: 'mmichigan@gmail.com',
  },
}

const ProfileProps = {
  path: '/profile',
  profile: {
    name: 'Mike Michigan',
    username: 'mmichigan@gmail.com',
  },
}
export const Profile = () => <UserProfile {...ProfileProps} />

export const Game = () => <UserProfile {...GameProps} />
