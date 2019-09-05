import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AirPod from '../../images/Iphone/airpods.svg';
import AppleCard from '../../images/Ipad/applecard.svg';
import ComparePhone from '../../images/Ipad/compare.svg';
import Iphones from '../../images/Ipad/iphone.svg';
import IphoneXr from '../../images/Ipad/iphonexr.svg';
import IphoneXs from '../../images/Ipad/iphonexs.svg';
import Accessories from '../../images/Iphone/accessories.svg';
import Ios from '../../images/Iphone/ios.svg';

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

function Iphone() {
  return (
    <BottomNavWrapper>
      <BottomNav>
        <div className="bottomNavText">
          <Link to='/ipad-pro'><img src={IphoneXs} alt='Iphone-Xs' style={iconStyles} /></Link>
          <Link to='/ipad-pro'>iPhone Xs</Link>
          <p>New</p>
        </div>
        <div className="bottomNavText">
          <Link to='/ipad-air'><img src={IphoneXr} alt='Iphone-Xr' style={iconStyles}/></Link>
          <Link to='/ipad-air'>iPhone Xr</Link>
          <p>New</p>  
        </div>
        <div className="bottomNavText">
          <Link to='/ipad'><img src={Iphones} alt='Iphone 8' style={iconStyles}/></Link>
          <Link to='/ipad'>iPhone 8</Link>
        </div>
        <div className="bottomNavText">
          <Link to='/ipad-mini'><img src={Iphones} alt='Iphone 7' style={iconStyles}/></Link>
          <Link to='/ipad-mini'>iPhone 7</Link>  
        </div>
        <div className="bottomNavText">
          <Link to='/compare'><img src={ComparePhone} alt='Compare' style={iconStyles}/></Link>
          <Link to='/compare'>Compare</Link>  
        </div>
        <div className="bottomNavText">
          <Link to='/pencil'><img src={AppleCard} alt='Apple Card' style={iconStyles}/></Link>
          <Link to='/pencil'>Apple Card</Link>
        </div>
        <div className="bottomNavText">
          <Link to='/smart-keyboard'><img src={AirPods} alt='Air Pods' style={iconStyles}/></Link>  
          <Link to='/smart-keyboard'>Air Pods</Link>
        </div> 
        <div className="bottomNavText"> 
          <Link to='/accessories'><img src={Accessories} alt='Accessories' style={iconStyles}/></Link>
          <Link to='/accessories'>Accessories</Link>
        </div>
        <div className="lastIcon">
          <Link to='/ios'><img src={Ios} alt='Ios' /></Link>  
          <Link to='/ios'>iOS 12</Link>
        </div>  
      </BottomNav>
    </BottomNavWrapper>
  )
}

export default Iphone;