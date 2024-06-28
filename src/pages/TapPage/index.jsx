import { useEffect, useState } from 'react';
import './TapPage.css';
import Value from '../../components/Value';
import Tap from '../../components/Tap';
import Nav from '../../components/Nav';
import { useTruex } from '../../contexts/useTruex';

const TapPage = () => {
  const [points, setPoints] = useState(0);
  const userData = JSON.parse(localStorage.getItem('user'));

  const { getUserData, user } = useTruex();

  useEffect(() => {
    const getUser = async () => {
      await getUserData(userData._id);
    };

    getUser();
  }, [userData._id]);

  useEffect(() => {
    if (user) {
      setPoints(user.totalCoins);
    }
  }, []);
  
  return (
    <div className='Container'>
      <Value />
      <Tap points={points} setPoints={setPoints} />
      <nav className="bottom-nav">
        <Nav />
      </nav>
    </div>
  );
}

export default TapPage;
