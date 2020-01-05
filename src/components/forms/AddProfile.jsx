import React from 'react';
import { Redirect } from 'react-router-dom';

// redux 
import { connect } from 'react-redux';
import { postProfile } from '../../actions/profileActions';

// components
import ProfileForm from './ProfileForm';

function AddProfile (props) {

  const { postProfile, profileState } = props;

  return (
    <>
      {/* redirects backs to profile list after profile posts */}
      {profileState.isSuccessful ? <Redirect push to="/profiles" /> : null}

      <ProfileForm 
        formType="add" 
        submitAction={postProfile} 
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
  { postProfile }
)(AddProfile);