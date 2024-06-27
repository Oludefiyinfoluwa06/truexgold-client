import { useEffect, useState } from 'react';
import Logo from '../assets/img/truexLogo.png';
import '../assets/tap.css';
import Thunder from '../assets/img/light.png';
import { useTruex } from '../contexts/useTruex';
// import TapAmount from './TapAmount';

const Tap = ({ points, setPoints }) => {
  const [energy, setEnergy] = useState(2532);
  const [clicks, setClicks] = useState([]);
  const userData = JSON.parse(localStorage.getItem('user'));
  const pointsToAdd = 1;
  const energyToReduce = 1;

  const { tapToEarn, updateCoins } = useTruex();

  const handleClick = async (e) => {
    if (energy - energyToReduce < 0) {
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    await tapToEarn(userData._id, (points + pointsToAdd));
    await updateCoins(userData._id, (points + pointsToAdd));

    setPoints(points + pointsToAdd);
    setEnergy(energy - energyToReduce < 0 ? 0 : energy - energyToReduce);
    setClicks([...clicks, { id: Date.now(), x, y }]);
  };

  const handleAnimationEnd = (id) => {
    setClicks((prevClicks) => prevClicks.filter(click => click.id !== id));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy((prevEnergy) => Math.min(prevEnergy + 1, 6500));
    }, 1000); // Restore 10 energy points every second

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className='tapPage'>

        <div className="Amount">
          <img src={Logo} alt="Amount" />
          <span className="points-text">{points.toLocaleString()}</span>
        </div>

        <div className="middle">
            <div className="clickable-area">
              <div className="click-area" onClick={handleClick}>
                <img src={Logo} width={256} height={256} alt="notcoin" />
                {clicks.map((click) => (
                  <div
                    key={click.id}
                    className="click-text"
                    style={{
                      top: `${click.y - 42}px`,
                      left: `${click.x - 28}px`,
                      animation: `float 1s ease-out`
                    }}
                    onAnimationEnd={() => handleAnimationEnd(click.id)}
                  >
                    +1
                  </div>
                ))}
              </div>
            </div>
          {/* <img src={Logo} alt="Truex Logo" /> */}

          {/* Progress Bar */}
          <div className="ProgressBar">
            <div className="empty"></div>
            {/* <div className="progress"></div> */}

            <div className="energy-bar-container">
              <div className="energy-bar" style={{ width: `${(energy / 6500) * 100}%` }}></div>
            </div>

            {/* <div className="NumberofTap">
              <img src={Thunder} alt="" />
              <p>100 / 100</p>
            </div> */}

            <div className="energy-display">
              <img src={Thunder} width={44} height={44} alt="High Voltage" />
              <div className="energy-text">
                <span className="energy-amount">{energy}</span>
                <span className="energy-max">/ 6500</span>
              </div>
            </div> 
          </div>
      </div>


    </div>
  )
}

export default Tap