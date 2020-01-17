import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
  const { className } = props;

  return (
    <div className={className}>
      <h2>Dashboard</h2>
      <p>Welcome to the Bored app!</p>
      <p>Navigate to <Link to="/settings">Settings</Link> to set the profile data.</p>
    </div>
  );    
}

export default Dashboard;