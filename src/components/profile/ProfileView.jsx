import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';

// redux
import { connect } from 'react-redux';
import { getProfile } from '../../actions/profileActions';

// components
import ProfileCard from './ProfileCard'

// styles
import Loader from 'react-loader-spinner'
import './profile.scss'

function ProfileView(props) {
  const { getProfile, profileState } = props;

  // pull requested id out of url
  const id = props.match.params.id;

  // reload profile whenever a mutation successfully posts
  useEffect(() => {
    getProfile(id)
  }, [profileState.isSuccessful, getProfile, id]);
  
  // render loading spinner during inital fetching
  useEffect(() => {
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
  },[]);

  // deconstruct profile
  const { profile } = profileState
  
  // render profile once fetching is successful
  return (
    <section className='section'>
      <div className='columns is-multiline is-centered'>

        {/* render profile card */}
        <div className='column is-full'>
          <ProfileCard profile={profile} />
        </div>

        {/* display notes specific to employee */}
        <div className='column is-three-fifths-desktop is-three-quarters-tablet profile_notes'>
          <p className='is-size-6 is-size-7-mobile has-text-weight-bold'>
            Notes for {`${profile.first_name} ${profile.last_name}`}:&nbsp;
          </p>
          <p className='is-size-6 is-size-7-mobile'>
            {profile.notes ? profile.notes : 'None currently on file'}
          </p>
        </div>

        {/* edit employee profile */}
        <div className='column is-full profile_button'>
          <Link to={`/profile/${id}/update`}>
            <button className="button is-link" type="submit">
              Update Employee Profile
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

const mapStateToProps = state => {
    return {
      profileState: state.profile
    };
};
  
export default connect(
    mapStateToProps,
    { getProfile }
)(ProfileView);