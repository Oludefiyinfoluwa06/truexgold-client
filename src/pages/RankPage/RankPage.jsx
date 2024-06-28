import React from 'react';
import './RankPage.css';
import Cup from '../../assets/img/cup.png';
import Coin from '../../assets/img/truexLogo.png';
import Nav from '../../components/Nav';

const RankPage = () => {
  return (
    <div className='Rank-Container'>
        <h1>Leagues</h1>


        <div className="content">

            <div className="rankContent">
                <img src={Cup} alt="trophy" />
                <div className="writing">
                    <p>Bronze</p>
                    <div className="coin">
                        <img src={Coin} alt="coin" />
                        <p>0+</p>
                    </div>
                </div>
            </div>

            <div className="rankContent">
                <img src={Cup} alt="trophy" />
                <div className="writing">
                    <p>Silver</p>
                    <div className="coin">
                        <img src={Coin} alt="coin" />
                        <p>5k+</p>
                    </div>
                </div>
            </div>

            <div className="rankContent">
                <img src={Cup} alt="trophy" />
                <div className="writing">
                    <p>Gold</p>
                    <div className="coin">
                        <img src={Coin} alt="coin" />
                        <p>25k+</p>
                    </div>
                </div>
            </div>

            <div className="rankContent">
                <img src={Cup} alt="trophy" />
                <div className="writing">
                    <p>Platinum</p>
                    <div className="coin">
                        <img src={Coin} alt="coin" />
                        <p>35k+</p>
                    </div>
                </div>
            </div>

            <div className="rankContent">
                <img src={Cup} alt="trophy" />
                <div className="writing">
                    <p>Diamond</p>
                    <div className="coin">
                        <img src={Coin} alt="coin" />
                        <p>45k+</p>
                    </div>
                </div>
            </div>

            <div className="rankContent">
                <img src={Cup} alt="trophy" />
                <div className="writing">
                    <p>Epic</p>
                    <div className="coin">
                        <img src={Coin} alt="coin" />
                        <p>55k+</p>
                    </div>
                </div>
            </div>

            <div className="rankContent">
                <img src={Cup} alt="trophy" />
                <div className="writing">
                    <p>Legendary</p>
                    <div className="coin">
                        <img src={Coin} alt="coin" />
                        <p>1M+</p>
                    </div>
                </div>
            </div>

            <div className="rankContent">
                <img src={Cup} alt="trophy" />
                <div className="writing">
                    <p>Master</p>
                    <div className="coin">
                        <img src={Coin} alt="coin" />
                        <p>5M+</p>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        

        <nav className="bottom-nav">
            <Nav />
      </nav>
        
    </div>
  )
}

export default RankPage