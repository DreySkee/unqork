import React  from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import style from './style';

const Header = (props) => {
	
	const userLogged = localStorage.getItem("userLogged");
	
	const logOut = (e) => {
		e.preventDefault();
		localStorage.setItem("userLogged", false);
		props.history.push('/login')
	}

  return(
    <header className={props.className}>
      <Link to="/">Bored App</Link>

      {userLogged === 'true' && 
				<a className="log-out" href="" onClick={(e) => logOut(e)} >Log Out</a>
      }
    </header>
  );
} 

export default withRouter(styled(Header)`${style}`);