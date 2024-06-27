import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashVid.css';
import Gif from '../../assets/img/trueX.gif';

const SplashVid = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/landing');
    }, 12000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="gif-container">
      <img src={Gif} className="gif" alt="Splash GIF" />
    </div>
  );
}

export default SplashVid;
