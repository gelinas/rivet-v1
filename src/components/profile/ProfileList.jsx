import React, { useEffect} from 'react';
import {Link} from "react-router-dom";
import { objectSort } from '../../utils/objectSort';

// redux
import { connect } from 'react-redux';
import { getProfileList } from '../../actions/profileActions';

// components
import ProfileCard from './ProfileCard'

// styles
import Loader from 'react-loader-spinner'
import './profile.scss'

// ProfileList displays a mobile-responsive flexbox grid of all employees sorted by last name

function ProfileList(props) {
  const { getProfileList, profileState } = props;

  // reload profile list whenever a mutation successfully posts
  useEffect(() => {
    getProfileList()
  }, [profileState.isSuccessful, getProfileList]);
  
  // render loading spinner during inital fetching
  if (profileState.isFetchingList) {
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
  
  // render profile list once fetching is successful
  return (
    <section className='section'>
      <div className='columns is-multiline is-centered'>

        {/* map over profileList to render profile cards */}

        {profileState.profileList.sort(objectSort("last_name")).map(profile => (
          <div key={profile.id} className='column is-narrow'>
            <Link className="link" to={{pathname: `profile/${profile.id}`}} >      
              <ProfileCard profile={profile} />
            </Link>
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