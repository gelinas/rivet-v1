import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

// components
import Navbar from './components/navbar/Navbar'
import ProfileList from './components/profile/ProfileList'
import ProfileView from './components/profile/ProfileView'
import AddProfile from './components/forms/AddProfile'
import EditProfile from './components/forms/EditProfile'

// styles
import './App.scss';
import { useTransition, animated } from 'react-spring'

export default function App() {

  // create fade-in and slide-out transitions for all reacter-router paths
  const location = useLocation()
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, zIndex: 1, transform: 'translate3d(0%,0,0)' },
    enter: { opacity: 1, zIndex: 1},
    leave: { opacity: 0, zIndex: -1, transform: 'translate3d(-75%,0,0)' },
  })

  return (
    <div className="App">
      <Navbar />

      {/* implement transition animation for page content */}
      {transitions.map(({ item: location, props, key }) => (
        <animated.div key={key} style={props} className="transition_box">
          <Switch location={location}>
            <Route exact path='/' component={ProfileList} />
            <Route path='/profiles' component={ProfileList} />
            <Route path='/newprofile' component={AddProfile} />
            <Route exact path='/profile/:id' component={ProfileView} />
            <Route path='/profile/:id/update' component={EditProfile} />
          </Switch>
        </animated.div>
      ))}
    </div>
  );
}