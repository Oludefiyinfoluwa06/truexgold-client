import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from './pages/LandingPage';
import SplashVid from './pages/SplashVid/SplashVid';
import TapPage from './pages/TapPage';
import InviteFriends from './pages/InviteFriends/InviteFriends';
import EarnCoins from './pages/EarnCoin/EarnCoin';
import BoosterPage from './pages/BoosterPage/BoosterPage';
import StatsPage from './pages/StatsPage/StatsPage';
import { TruexProvider } from './contexts/TruexContext';
import Register from './pages/Register';
import { Web3ModalProvider } from './components/ConnectBtn';


const App = () => {
  return (
    <BrowserRouter>
      <Web3ModalProvider>
        <TruexProvider>
          <Routes>
            <Route path="/" element={<SplashVid />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path='/register' element={<Register />} />
            <Route path='/tap' element={< TapPage />} />
            <Route path='/invite' element={< InviteFriends />} />
            <Route path='/earn' element={< EarnCoins />} />
            <Route path='/boost' element={<BoosterPage />} />
            <Route path='/stat' element={<StatsPage />} />
          </Routes>
        </TruexProvider>
      </Web3ModalProvider>
    </BrowserRouter>
  );
}

export default App;