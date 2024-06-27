import { useEffect } from 'react';
import './StatsPage.css';
import Nav from '../../components/Nav'
import Logo from '../../assets/img/truexLogo.png';
import { useTruex } from '../../contexts/useTruex';

const StatsPage = () => {
    const { globalEarningLimit, getGlobalEarningLimit } = useTruex();

    useEffect(() => {
        getGlobalEarningLimit();
    }, [getGlobalEarningLimit]);

    return (
        <div className='Container'>
            <div className="total-balance">
                <p>Total shared balance</p>
                <div className="logo">
                    <img src={Logo} alt="logo" />
                    <p>{globalEarningLimit}</p>
                </div>
            </div>
            <div className="line"></div>

            <div className="boxes">
                <div className="largeBox">
                    <p>Total Player</p>
                    <span className='amount'>5 000 000</span>
                </div>
            </div>

            <div className="centerBoxes">
                <div className="smallBox">
                    <p>Daily Users</p>
                    <span className='smallTextAmount'>20 000</span>
                </div>

                <div className="smallBox">
                    <p>Online Users</p>
                    <span className='smallTextAmount'>20 000</span>
                </div>
            </div>

            <div className="boxes">
                <div className="largeBox">
                    <p>Total Player</p>
                    <span className='amount'>5 000 000</span>
                </div>
            </div>

            <nav className="bottom-nav">
                <Nav />
            </nav>

        </div>
    );
}

export default StatsPage;