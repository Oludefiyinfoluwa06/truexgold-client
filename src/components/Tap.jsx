import React from 'react';
import Logo from '../assets/img/truexLogo.png';
import '../assets/tap.css';
import Thunder from '../assets/img/light.png'

const Tap = () => {
  return (
    <div className='tapPage'>
      <img src={Logo} alt="Truex Logo" />

      {/* Progress Bar */}
      <div className="ProgressBar">
        <div className="empty"><br /><br /></div>
        <div className="progress"></div>

        <div className="NumberofTap">
          <img src={Thunder} alt="" />
          <p>100 / 100</p>
        </div>
      </div>


    </div>
  )
}

export default Tap