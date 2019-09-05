import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import WatchFour from '../../images/Watch/watch_series.svg';
import WatchNike from '../../images/Watch/watch_nike.svg';
import WatchHermes from '../../images/Watch/watch_hermes.svg';
import WatchThree from '../../images/Watch/watch_edition.svg';
import WatchOs from '../../images/Watch/watch_os.svg';
import WatchBands from '../../images/Watch/watch_bands.svg';
import WatchAccessories from '../../images/Watch/watch_accessories.svg';
import WatchCompare from '../../images/Watch/watch_compare.svg';

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

function Watch() {
  return (
    <BottomNavWrapper>
      <BottomNav>
        <div className="bottomNavText">
          <Link to='/watch-four'><img src={WatchFour} alt='Watch Four' style={iconStyles} /></Link>
          <Link to='/watch-four'>Apple Watch <br /> Series 4</Link>
        </div>
        <div className="bottomNavText">
          <Link to='/watch-nike'><img src={WatchNike} alt='Watch Nike' style={iconStyles}/></Link>
          <Link to='/watch-nike'>Apple Watch <br /> Nike+</Link>
          <p>New</p>  
        </div>
        <div className="bottomNavText">
          <Link to='/watch-hermes'><img src={WatchHermes} alt='Watch Hermes' style={iconStyles}/></Link>
          <Link to='/watch-hermes'>Apple Watch <br /> Hermes</Link>
        </div>
        <div className="bottomNavText">
          <Link to='/watch-three'><img src={WatchThree} alt='Watch Three' style={iconStyles}/></Link>
          <Link to='/watch-three'>iPad mini</Link>  
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

export default Watch;