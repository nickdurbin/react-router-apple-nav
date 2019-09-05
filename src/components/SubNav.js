import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Ipad from './Ipad';
import Iphone from './Iphone';
import Mac from './Mac';
import Music from './Music';
import Tv from './Tv';
import Watch from './Watch';

const BottomNavWrapper = styled.div`
  width: 100%;
  padding: 0 34px;
  backdrop-filter: saturate(180%) blur(20px);
  background: rgba(242,242,242,0.6);
`;

const BottomNav = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0;
  margin: 0 60px 0 0;
  height: 92px;
`;

let iconStyles = {
  height: '55px',
  width: '50px'
}

function SubNav() {
  return (
    <BottomNavWrapper>
      <BottomNav>
        <Link to='/ipad' component={Ipad}></Link>
      </BottomNav>
    </BottomNavWrapper>
  )
}

export default SubNav
