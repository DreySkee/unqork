import React, { useEffect, useState } from 'react';

const Activity = (props) => {
  
  const { activity } = props.match.params
  const [ activityObj, setActivity ] = useState({activity: 'Loading...', type: 'Loading...', participants: 'Loading...'})

  useEffect(() => {
    fetch('https://www.boredapi.com/api/activity?type=' + activity)
      .then((resp) =>  resp.json()).then((activityResp) => {
        const { activity, type, participants } = activityResp;
        setActivity({activity, type, participants});
      });
  }, [activity])

  return(
    <React.Fragment>
      <h2>Activity</h2>
      <ul>
        <li>Activity: {activityObj.activity}</li>
        <li>Type: {activityObj.type}</li>
        <li>Participants: {activityObj.participants}</li>
      </ul>
    </React.Fragment>
  );
} 

export default Activity;