import React, { useState, useEffect } from 'react';

const Profile = (props) => {
  const [ settingsObj, setSettings ] = useState({firstName: 'Go to Settings to set', lastName: 'Go to Settings to set', email: 'Go to Settings to set'})
  
  useEffect(() => {
    const settings = JSON.parse(localStorage.getItem("settings"));

    if (settings) {
      const { firstName, lastName, email } = settings;
      setSettings({firstName, lastName, email});
    } 
  }, [])

  return(
    <React.Fragment>
      <h2>Profile</h2>
      <ul>
        <li>First Name: {settingsObj.firstName}</li>
        <li>Last Name: {settingsObj.lastName}</li>
        <li>Email: {settingsObj.email}</li>
      </ul>
    </React.Fragment>
  );
} 

export default Profile;