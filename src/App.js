import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import Navbar from './components/navbar/Navbar'
import ProfileList from './components/profile/ProfileList'
import ProfileView from './components/profile/ProfileView'
import AddProfile from './components/forms/AddProfile'
import EditProfile from './components/forms/EditProfile'

// styles
import './App.scss';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={ProfileList} />
        <Route path='/profiles' component={ProfileList} />
        <Route path='/newprofile' component={AddProfile} />
        <Route exact path='/profile/:id' component={ProfileView} />
        <Route path='/profile/:id/update' component={EditProfile} />
      </Switch>
    </div>
  );
}