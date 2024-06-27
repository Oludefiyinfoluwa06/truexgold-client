import React, { useState, useEffect } from 'react';
import '../assets/styles.css';
import { IoClose } from "react-icons/io5";
import Logo from '../assets/img/truexLogo.png';
import { FaWallet } from "react-icons/fa6";
import { createWeb3Modal, useWeb3Modal } from '@web3modal/wagmi/react';
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { WagmiProvider, useAccount, useDisconnect } from 'wagmi';
import { arbitrum, mainnet } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Modal from 'react-modal';

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId from https://cloud.walletconnect.com
const projectId = 'a629f86d61ae80ae64fab0196c035ac2';

// 2. Create wagmiConfig
const metadata = {
  name: 'TON',
  description: 'Truexgold mining',
  url: 'https://truexgold.vercel.app/', // origin must match your domain & subdomain
  icons: [Logo]
};

const chains = [mainnet, arbitrum];
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
});

// Set the root element for the modal
Modal.setAppElement('#root');

export function Web3ModalProvider({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default function ConnectButton() {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [walletAddress, setWalletAddress] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isConnected && address) {
      setWalletAddress(address.slice(0, 6));
    } else {
      setWalletAddress('');
    }
  }, [isConnected, address]);

  const handleDisconnect = () => {
    disconnect();
    setIsModalOpen(false);
  };

  const handleButtonClick = () => {
    if (isConnected) {
      setIsModalOpen(true);
    } else {
      open({ view: 'Networks' });
    }
  };

  return (
    <span className='CupBtn'>
      <button className='innerBtn' onClick={handleButtonClick}>
        <FaWallet size={10} />
        <p>{walletAddress ? walletAddress + '....' : 'Wallet'}</p>
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Disconnect Modal"
        className="modalContent"
        overlayClassName="modalOverlay"
      >
        {/* <h2>Wallet Actions</h2> */}
        <IoClose color='#000' className='close' size={30} onClick={() => setIsModalOpen(false)} />

        <button className='closeBtn' onClick={handleDisconnect}>Disconnect</button>
      </Modal>
    </span>
  );
}
