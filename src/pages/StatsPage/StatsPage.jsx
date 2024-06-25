import React from 'react';
import './StatsPage.css';
import coinIcon from '../../assets/img/truexLogo.png';
import Nav from '../../components/Nav';
const StatsPage = () => {
  return (
    <div className="stats-page">
        <div className="header">
            <div className="coin-balance">
            <span className="coin-label">Total Share Balance</span>
                <div className="balance">
                    <img src={coinIcon} alt="Coins" className="coin-icon" />
                    <h2 className="coin-amount">40.762 M</h2>
                </div> 
            </div>
            <div className="line"></div>
        </div>




        <section className="stats-section">
            <div className="stat-boxes">
                <span className="stat-label">Total Players</span>
                <span className="stat-value">55 899 372</span>
            </div>

            <div className="center-stat">
                <div className="stat-content">
                    <span>Daily Users</span>
                    <span className='stat-figure'>12 475 372</span>
                </div>
                <div className="stat-content">
                    <span>Daily Users</span>
                    <span className='stat-figure'>12 475 372</span>
                </div>
            </div>

            <div className="stat-boxes">
                <span className="stat-label">Total Players</span>
                <span className="stat-value">55 899 372</span>
            </div>
        </section>
      


    <nav className="bottom-nav">
        <Nav />
    </nav>
    </div>
  );
};

export default StatsPage;
