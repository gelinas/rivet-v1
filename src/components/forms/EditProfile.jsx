import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

// redux 
import { connect } from 'react-redux';
import { updateProfile, getProfile } from '../../actions/profileActions';

// components
import ProfileForm from './ProfileForm';

// styles
import Loader from 'react-loader-spinner'

function EditProfile(props) {

  const { updateProfile, getProfile, profileState } = props;

  // pull requested id out of url
  const id = props.match.params.id;

  // add profile id key-value pair to updateProfile function
  const editProfile = (editedProfile) => {
    updateProfile({
      ...editedProfile,
      id: id
    })
  }

  // fetch target profile
  useEffect(() => {
    getProfile(id)
  }, [profileState.isSuccessful, getProfile]);
  
  // render loading spinner during fetching
  if (profileState.isFetching) {
    return ( 
      <Loader 
        className="center_spinner"
        type="Bars" 
        color="#032245" 
        height={80} 
        width={80} 
      />
    )
  }

  // deconstruct profile
  const { profile } = profileState

  return (
    <>
      {/* redirects backs to profile list after profile posts */}
      {profileState.isSuccessful ? <Redirect push to={`/profile/${id}`} /> : null}

      <ProfileForm 
        formType="edit" 
        submitAction={editProfile} 
        profile={profile} 
      />
    </>
  )
}

const mapStateToProps = state => {
  return {
    profileState: state.profile
  };
};

export default connect(
  mapStateToProps,
  { updateProfile, getProfile }
)(EditProfile);