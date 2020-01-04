import React, { useEffect} from 'react';

// redux
import { connect } from 'react-redux';
import { getProfileList } from '../../actions/profileActions';

// components
import ProfileCard from './ProfileCard'

// styles
import Loader from 'react-loader-spinner'
import './profile.scss'


function ProfileList(props) {
  const { getProfileList, profileState } = props;

  // reload profile list whenever a mutation successfully posts
  useEffect(() => {
    getProfileList()
  }, [profileState.isSuccessful, getProfileList]);
  
  // render loading spinner during fetching
  if (profileState.isFetching) {
    return ( 
        <Loader type="Bars" color="#032245" height={80} width={80} />
      )
    }
  
  // render profile list once fetching is successful
  return (
    <section className='section'>
      <div className='columns is-multiline is-centered'>

        {/* map over profileList to render profile cards */}

        {profileState.profileList.map(profile => (
          <div key={profile.id} className='column is-narrow'>
            <ProfileCard profile={profile} />
          </div>
        ))}

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
    { getProfileList }
)(ProfileList);