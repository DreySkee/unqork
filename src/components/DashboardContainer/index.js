import React from 'react';
import styled from 'styled-components';
import style from './style';
import Sidebar from 'components/Sidebar';

const DashboardContainer = (props) => {
  return(
    <React.Fragment>
      <Sidebar />
      <div className={props.className} >
        {props.children}
      </div>
    </React.Fragment>
  );
} 

export default styled(DashboardContainer)`${style}`;