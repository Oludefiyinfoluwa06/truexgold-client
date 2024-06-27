import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashVid.css';
import Gif from '../../assets/img/trueX.gif'; 

const SplashVid = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/landing');
    }, 12000); 


    return () => clearTimeout(timer);
  }, [navigate]);

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
