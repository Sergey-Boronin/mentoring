import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Profile() {

  if(!window.localStorage.getItem('token')) {
    return <Navigate to='/' />
  }

  return (
    <div>Profile</div>
  )
}
