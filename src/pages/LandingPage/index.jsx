import { useEffect } from 'react';
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
    const user = JSON.parse(localStorage.getItem('username'));

    const timer = setTimeout(() => {
      if (user) {
        navigate('/tap');
      } else {
        navigate('/register');
      }
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
