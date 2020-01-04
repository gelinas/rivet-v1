import React from 'react';

// components
import ProfileList from './components/profile/ProfileList'
import Navbar from './components/navbar/Navbar'


// styles
import './App.scss';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <ProfileList />
    </div>
  );
}