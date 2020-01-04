import React from 'react'

// styles
import './profile.scss'

export default function ProfileCard(props) {
  const {profile} = props

  return (
    <div className='columns is-centered is-mobile'>
      <img
        src={profile.photo ? profile.photo : "https://www.rivet.work/wp-content/uploads/2019/10/Rivet_Logo_UnionBlue-300x138.png"}
        className={'column is-narrow profile_image'}
        alt={`${profile.first_name} ${profile.last_name}`}
      />
      <div className={'column is-narrow profile_details'}>
        <p className='is-size-5 is-size-6-mobile has-text-weight-bold'>
          {`${profile.first_name} ${profile.last_name}`}
        </p>
        <p className='is-size-6 is-size-7-mobile'>
          Email:&nbsp;
          <span className='color_shark'>
            {profile.email}
          </span>
        </p>
        <p className='is-size-6 is-size-7-mobile'>
          Phone:&nbsp;
          <span className='color_shark'>
            {profile.phone}
          </span>
        </p>
        <br />
        <p className='is-size-6 is-size-7-mobile'>
          Address:&nbsp;
        </p>
        <p className='is-size-6 is-size-7-mobile color_shark'>
          {profile.address}
        </p>
        <p className='is-size-6 is-size-7-mobile color_shark'>
          {`${profile.city}, ${profile.state} ${profile.zip}`}
        </p>
      </div>
    </div>
  )
}