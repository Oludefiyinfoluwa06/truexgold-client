import React from 'react';
import '../assets/styles.css';
import RankButton from './RankButton';
import ConnectBtn from './ConnectBtn';
import TapAmount from './TapAmount';

const Value = () => {
  return (
    <div className='ValueContainer'>
        <div className='WholeValue'>
          <div className='buttons'>
            <RankButton />
            <ConnectBtn />
          </div>
          <TapAmount />
        </div>
    </div>
  )
}

export default Value