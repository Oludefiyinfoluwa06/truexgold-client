import React from 'react';
import './LandingPage.css'
import Logo from "../../assets/img/truexLogo.png";
import Nav from '../../components/Nav';
import Content from '../../components/Content'
import Loader from "../../components/Loader"
import StayTuned from '../../components/StayTuned';


const LandingPage = () => {
  return (
    <div className='whole'>
      <Nav />

      <div className="content">
        <img src={Logo} alt="logo" />
        < Content />

        <Loader />
        <StayTuned />
      </div>
    </div>
  )
}

export default LandingPage