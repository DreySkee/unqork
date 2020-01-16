import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import style from './style';

const Sidebar = (props) => {
  
  const [ isNavOpen, setIsNavOpen ] = useState({ activities: true, account: true })

  return(
    <aside className={props.className}>
      <div 
        className="label" 
        onClick={() => setIsNavOpen({
          activities: !isNavOpen.activities, 
          account: isNavOpen.account
        })}
      >
        Activities {isNavOpen.activities ? '-' :  '+' }
      </div>   
      <div className={`sub-nav ${isNavOpen.activities && 'open'}`}>
        <NavLink activeClassName="selected" to="/activities/recreational">Recreational</NavLink>
        <NavLink activeClassName="selected" to="/activities/cooking">Cooking</NavLink>
      </div>

      <div 
        className="label" 
        onClick={() => setIsNavOpen({
          activities: isNavOpen.activities, 
          account: !isNavOpen.account
        })}
      >
        Account {isNavOpen.account ? '-' :  '+' }
      </div> 
      <div className={`sub-nav ${isNavOpen.account && 'open'}`}>
        <NavLink activeClassName="selected" to="/profile">Profile</NavLink>
        <NavLink activeClassName="selected" to="/settings">Settings</NavLink> 
      </div>
    </aside>
  );
} 

export default styled(Sidebar)`${style}`;
