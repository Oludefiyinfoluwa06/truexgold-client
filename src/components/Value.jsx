import React from 'react';
import '../assets/styles.css';

import RankButton from './RankButton';
import ConnectBtn from './ConnectBtn';
import TapAmount from './TapAmount';
import Logo from '../assets/img/truexLogo.png';

const Value = () => {
  return (
    <div className='ValueContainer'>
        <div className='WholeValue'>
          <div className='buttons'>
            <RankButton />
            <ConnectBtn />
          </div>
          
        </div>
    </div>
  )
}

export default Value