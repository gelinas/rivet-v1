import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import Navbar from './components/navbar/Navbar'
import ProfileList from './components/profile/ProfileList'
import ProfileView from './components/profile/ProfileView'
import ProfileForm from './components/forms/ProfileForm'

// styles
import './App.scss';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <ProfileForm />
      <Switch>
        <Route exact path='/' component={ProfileList} />
        <Route exact path='/profiles' component={ProfileList} />
        <Route path='/profile/:id' component={ProfileView} />
      </Switch>
    </div>
  );
}