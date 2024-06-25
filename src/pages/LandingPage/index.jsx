import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import CoinLogo from '../../components/CoinLogo';
// import Nav from '../../components/Nav';
import Content from '../../components/Content';
import Loader from '../../components/Loader';
import StayTuned from '../../components/StayTuned';

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/tap');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='whole'>
      {/* <Nav /> */}
      <div className="content">
        <CoinLogo />
        <Content />
        <Loader />
        <StayTuned />
      </div>
    </div>
  );
}

export default LandingPage;
