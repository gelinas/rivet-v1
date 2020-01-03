import React from 'react'

export default function ProfileCard(props) {
  const {profile} = props

  return (
    <p>{JSON.stringify(profile)}</p>
  )
}