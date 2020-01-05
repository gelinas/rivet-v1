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

  // add profile id attribute to profile object submitted from form
  const editProfile = (editedProfile) => {
    updateProfile({
      ...editedProfile,
      id: id
    })
  }

  // fetch target profile
  useEffect(() => {
    getProfile(id)
  }, [profileState.isSuccessful, getProfile, id]);
  
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

  return (
    <>
      {/* redirects backs to profile list after profile posts */}
      {profileState.isSuccessful ? <Redirect push to={`/profile/${id}`} /> : null}

      <ProfileForm 
        formType="edit" 
        submitAction={editProfile} 
        profileState={profileState} 
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