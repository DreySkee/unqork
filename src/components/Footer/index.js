import React from 'react';
import styled from 'styled-components';
import style from './style';

const Footer = (props) => {
  return(
    <footer className={props.className}>
      <div className="container">
        <p>&copy; 2020 Bored App</p>
      </div>
    </footer>
  );
} 

export default styled(Footer)`${style}`;