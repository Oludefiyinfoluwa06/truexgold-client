import React, { useState, useEffect } from 'react';
import './BoosterPage.css';
import Value from '../../components/Value';
import Nav from '../../components/Nav';
import Logo from '../../assets/img/truexLogo.png';
import dailyBoosterIcon from '../../assets/img/fire.png'; // Adjust the path as necessary
import energyIcon from '../../assets/img/energy.png'; // Adjust the path as necessary
import rechargeIcon from '../../assets/img/light.png'; // Adjust the path as necessary
import tapBotIcon from '../../assets/img/bot.png'; // Adjust the path as necessary

const BoostersPage = () => {
    const [points, setPoints] = useState(29857775);
    const [energy, setEnergy] = useState(2532);
    const [clicks, setClicks] = useState([]);
    const pointsToAdd = 12;
    const energyToReduce = 12;
  
    const handleClick = (e) => {
      if (energy - energyToReduce < 0) {
        return;
      }
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
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
    <div className="boosters-page">
        <div className="header">
            <Value />
            <br />
            <br />
            <div className="Amount">
                <img src={Logo} alt="Amount" />
                <span className="points-text">{points.toLocaleString()}</span>
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        

      

      <section className="daily-boosters">
        <h2>Your daily boosters:</h2>
        <div className="boosters">
            <div className="booster">
                <img src={dailyBoosterIcon} alt="Tapping Guru" />
                <div className="span">
                    <span>Tap Guru </span>
                    <span className="booster-points">3/3</span>
                </div>
            </div>
            <div className="booster">
                <img src={dailyBoosterIcon} alt="Tapping Guru" />
                <div className="span">
                    <span>Full Tank </span>
                    <span className="booster-points">3/3</span>
                </div>
            </div>
        </div>
      </section>

      <section className="boost">
        <h2>Boosters:</h2>
        <div className="boosting">
            <img src={dailyBoosterIcon} alt="Tapping Guru" />
            <div className="span">
                <span>Tapping Guru </span>
                <div className="booster_points">
                    <span className="booster-points">3/3</span>
                    <span className="booster-levelnum">| level 1</span>
                </div>
            </div>  
        </div>
        <div className="boosting">
            <img src={dailyBoosterIcon} alt="Tapping Guru" />
            <div className="span">
                <span>Tapping Guru </span>
                <div className="booster_points">
                    <span className="booster-points">3/3</span>
                    <span className="booster-levelnum">| level 1</span>
                </div>
            </div>  
        </div>
        <div className="boosting">
            <img src={dailyBoosterIcon} alt="Tapping Guru" />
            <div className="span">
                <span>Tapping Guru </span>
                <div className="booster_points">
                    <span className="booster-points">3/3</span>
                    <span className="booster-levelnum">| level 1</span>
                </div>
            </div>  
        </div>
        <div className="boosting">
            <img src={dailyBoosterIcon} alt="Tapping Guru" />
            <div className="span">
                <span>Tapping Guru </span>
                <div className="booster_points">
                    <span className="booster-points">3/3</span>
                    <span className="booster-levelnum">| level 1</span>
                </div>
            </div>  
        </div>
        <div className="boosting">
            <img src={dailyBoosterIcon} alt="Tapping Guru" />
            <div className="span">
                <span>Tapping Guru </span>
                <div className="booster_points">
                    <span className="booster-points">3/3</span>
                    <span className="booster-levelnum">| level 1</span>
                </div>
            </div>  
        </div>
      </section>

      <nav className="bottom-nav">
        <Nav />
      </nav>
    </div>
  );
};

export default BoostersPage;
