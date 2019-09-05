import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MacBookAir from '../../images/Mac/macbookair.svg';
import MacBookPro from '../../images/Mac/macbookpro.svg';
import IMac from '../../images/Mac/imac.svg';
import IMacPro from '../../images/Mac/imac.svg';
import MacPro from '../../images/Mac/mac_pro.svg';
import MacMini from '../../images/Mac/macmini.svg';
import MacCompare from '../../images/Mac/mac_compare.svg';
import ProDisplay from '../../images/Mac/pro_display.svg';
import MacAccessories from '../../images/Mac/headphones.svg';
import MacIos from '../../images/Mac/osx.svg';

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

function Mac() {
  return (
    <BottomNavWrapper>
      <BottomNav>
        <div className="bottomNavText">
          <Link to='/macbook-air'><img src={MacBookAir} alt='MacBook Air' style={iconStyles} /></Link>
          <Link to='/macbook-air'>MacBook Air</Link>
          <p>New</p>
        </div>
        <div className="bottomNavText">
          <Link to='/macbook-pro'><img src={MacBookPro} alt='MacBook Pro' style={iconStyles}/></Link>
          <Link to='/macbook-pro'>MacBook Pro</Link>
          <p>New</p>  
        </div>
        <div className="bottomNavText">
          <Link to='/imac'><img src={IMac} alt='Imac' style={iconStyles}/></Link>
          <Link to='/imac'>iMac</Link>
        </div>
        <div className="bottomNavText">
          <Link to='/imac-pro'><img src={IMacPro} alt='IMac Pro' style={iconStyles}/></Link>
          <Link to='/imac-pro'>iMac Pro</Link>  
        </div>
        <div className="bottomNavText">
          <Link to='/mac-pro'><img src={MacPro} alt='Mac Pro' style={iconStyles}/></Link>
          <Link to='/mac-pro'>Mac Pro</Link>
          <p>New</p>  
        </div>
        <div className="bottomNavText">
          <Link to='/mac-mini'><img src={MacMini} alt='Mac Mini' style={iconStyles}/></Link>
          <Link to='/mac-mini'>Mac mini</Link>
        </div>
        <div className="bottomNavText">
          <Link to='/mac/compare'><img src={MacCompare} alt='Mac Compare' style={iconStyles}/></Link>  
          <Link to='/mac/compare'>Compare</Link>
        </div> 
        <div className="bottomNavText"> 
          <Link to='/pro-display'><img src={ProDisplay} alt='Accessories' style={iconStyles}/></Link>
          <Link to='/pro-display'>Pro Display XDR</Link>
          <p>New</p>  
        </div>
        <div className="bottomNavText">
          <Link to='/mac/accessories'><img src={MacAccessories} alt='Mac Accessories' style={iconStyles}/></Link>  
          <Link to='/mac/accessories'>Accessories</Link>
        </div> 
        <div className="bottomNavText"> 
          <Link to='/mojave'><img src={MacIos} alt='Mac Ios' style={iconStyles}/></Link>
          <Link to='/mojave'>Mojave</Link>
        </div>
      </BottomNav>
    </BottomNavWrapper>
  )
}

export default Mac;