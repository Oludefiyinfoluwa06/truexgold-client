import React from 'react';
import './BoosterPage.css';
import { FaGreaterThan } from 'react-icons/fa';
import Value from '../../components/Value';
import Nav from '../../components/Nav';
import Fire from '../../assets/img/fire.png';
import Logo from '../../assets/img/truexLogo.png';
import Light from '../../assets/img/light.png';
import Hammer from '../../assets/img/tapGuru.png';
import Battery from '../../assets/img/energy.png';
import TapBot from '../../assets/img/bot.png';


const BoosterPage = () => {
  return (
    <div className='cointainer'>
        <div className="top">
            < Value />
            <div className="amount">
                <img src={Logo} alt="logo" />
                <span>42 000 000</span>
            </div>
        </div>
        <br />
        <br />
        <div className="line"></div>

        <div className="booster">
            <p className='head'>Your daily boosters:</p>
            <div className="whole-booster">
                <div className="booster-box">
                    <img src={Fire} alt="" />
                    <div className="writeUp">
                        <p>Tapping Guru</p>
                        <p>3/3</p>
                    </div>
                    {/* <div className="empty"></div> */}
                    {/* <FaGreaterThan className='logo'/> */}
                </div>
                <div className="booster-box">
                    <img src={Light} alt="recharge" />
                    <div className="writeUp">
                        <p>Full Tank</p>
                        <p>3/3</p>
                    </div>
                    {/* <div className="empty"></div> */}
                    {/* <FaGreaterThan className='logo'/> */}
                </div>
            </div>

            <br />
            <br />
            <br />

            <div className="booster-main">
                <p className='booster-head'>Boosters:</p>
                <div className="main-booster-box">
                    <div className="main-boost-box">
                        <img src={Hammer} alt="recharge" className='image'/>
                        <div className="writeUp">
                            <p>Tapping Guru</p>
                            <div className="text">
                                <p>3/3</p>
                                <p className='ash'>| level 1</p>
                            </div>
                        </div>
                        <div className="empty"></div>
                        <FaGreaterThan className='logo'/>
                    </div>
                    <div className="main-boost-box">
                        <img src={Battery} alt="recharge" className='image'/>
                        <div className="writeUp">
                            <p>Energy limit</p>
                            <div className="text">
                                <div className="amounted">
                                    <img src={Logo} alt="" />
                                    <p>100 000</p>
                                </div>
                                <div className="ash">
                                    <p>|</p>
                                    <p className='ashes'>level 1</p>
                                </div>
                            </div>
                        </div>
                        <div className="empty"></div>
                        <FaGreaterThan className='logo'/>
                    </div>
                    <div className="main-boost-box">
                        <img src={Light} alt="recharge" className='image'/>
                        <div className="writeUp">
                            <p>Energy limit</p>
                            <div className="text">
                                <div className="amounted">
                                    <img src={Logo} alt="" />
                                    <p>100 000</p>
                                </div>
                                <div className="ash">
                                    <p>|</p>
                                    <p className='ashes'>level 1</p>
                                </div>
                            </div>
                        </div>
                        <div className="empty"></div>
                        <FaGreaterThan className='logo'/>
                    </div>
                    <div className="main-boost-box">
                        <img src={TapBot} alt="recharge" className='image'/>
                        <div className="writeUp">
                            <p>Energy limit</p>
                            <div className="text">
                                <div className="amounted">
                                    <img src={Logo} alt="" />
                                    <p>100 000</p>
                                </div>
                                <div className="ash">
                                    <p>|</p>
                                    <p className='ashes'>level 1</p>
                                </div>
                            </div>
                        </div>
                        <div className="empty"></div>
                        <FaGreaterThan className='logo'/>
                    </div>
                </div>
            </div>
        </div>

        <nav className="bottom-nav">
        	<Nav />
      	</nav>
    </div>
  )
}

export default BoosterPage