import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IpadPro from '../ipadpro.svg';
import IpadAir from '../ipadair.svg';
import Ipad from '../ipad_light.svg';
import IpadMini from '../ipadmini.svg';
import Compare from '../ipad_comp.svg';
import Pencil from '../pencil.svg';
import Keyboard from '../keyboard.svg';
import Accessories from '../ipad_acc.svg';
import Ios from '../ios.svg';

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

function Music() {
  return (
    <BottomNavWrapper>
      <BottomNav>
        <div className="bottomNavText">
          <Link to='/ipad-pro'><img src={IpadPro} alt='Ipad-Pro' style={iconStyles} /></Link>
          <Link to='/ipad-pro'>iPad Pro</Link>
        </div>
        <div className="bottomNavText">
          <Link to='/ipad-air'><img src={IpadAir} alt='Ipad-Air' style={iconStyles}/></Link>
          <Link to='/ipad-air'>iPad Air</Link>
          <p>New</p>  
        </div>
        <div className="bottomNavText">
          <Link to='/ipad'><img src={Ipad} alt='Ipad' style={iconStyles}/></Link>
          <Link to='/ipad'>iPad</Link>
        </div>
        <div className="bottomNavText">
          <Link to='/ipad-mini'><img src={IpadMini} alt='Ipad-Mini' style={iconStyles}/></Link>
          <Link to='/ipad-mini'>iPad mini</Link>  
          <p>New</p>
        </div>
        <div className="bottomNavText">
          <Link to='/compare'><img src={Compare} alt='Compare' style={iconStyles}/></Link>
          <Link to='/compare'>Compare</Link>  
        </div>
        <div className="bottomNavText">
          <Link to='/pencil'><img src={Pencil} alt='Pencil' style={iconStyles}/></Link>
          <Link to='/pencil'>Apple Pencil</Link>
        </div>
        <div className="bottomNavText">
          <Link to='/smart-keyboard'><img src={Keyboard} alt='Keyboard' style={iconStyles}/></Link>  
          <Link to='/smart-keyboard'>Smart Keyboard</Link>
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

export default Music;