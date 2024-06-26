import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashVid.css';
import Gif from '../../assets/img/trueX.gif'; // Make sure to replace with the correct path to your gif

const SplashVid = () => {
  const navigate = useNavigate();

  const handleScreenClick = () => {
    navigate('/landing');
  };

  return (
    <div className="gif-container" onClick={handleScreenClick}>
      <img src={Gif} className="gif" alt="Splash GIF" />
    </div>
  );
};

export default SplashVid;
