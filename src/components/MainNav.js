import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../apple.svg';
import Bag from '../bag.svg';
import Search from '../search.svg'

const TopNavWrapper = styled.div`
  width: 100%;
  background-color: rgba(45,45,45,0.98);
  height: 44px;
 `;

const TopNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 62%;
  color: #fff;
  margin: 0 auto;

  :active {
    color: gray;
  }
`;

function MainNav() {
  return (
    <TopNavWrapper>
      <TopNav className="navLinks">
        <Link to='/'><img src={Logo} alt='Apple' /></Link>
        <Link to='/mac'>Mac</Link>
        <Link to='/ipad'>iPad</Link>
        <Link to='/iphone'>iPhone</Link>
        <Link to='/watch'>Watch</Link> 
        <Link to='/TV'>TV</Link> 
        <Link to='/Music'>Music</Link>
        <Link to='/Support'>Support</Link>
        <Link to='/'><img src={Search} alt='Search' /></Link>
        <Link to='/'><img src={Bag} alt='Bag' /></Link>    
      </TopNav>

    </TopNavWrapper>
  )
}

export default MainNav;