import React from 'react'
import UserInput from '../components/UserInput'
import './UserInput.css'

export default { title: 'UserInput' }

function handleInput(e: any) {
  alert(e)
  return e
}

export const UserInputText = () => (
  <UserInput
    handleInput={handleInput}
    type="number"
    placeHolder="Enter course name"
  />
)

export const UserInputNumber = () => (
  <UserInput
    handleInput={handleInput}
    type="number"
    placeHolder="Enter course name"
  />
)
