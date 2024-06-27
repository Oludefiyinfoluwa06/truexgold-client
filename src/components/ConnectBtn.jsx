import React from 'react';
import '../assets/styles.css';
import Logo from '../assets/img/truexLogo.png'
import { FaWallet } from "react-icons/fa6";
import { createWeb3Modal, useWeb3Modal, defaultConfig } from '@web3modal/ethers/react';

// 1. Get projectId
const projectId = 'a629f86d61ae80ae64fab0196c035ac2'

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'TON',
  currency: 'TON',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

// 3. Create a metadata object
const metadata = {
  name: 'truexgold',
  description: 'Telegram mining bot',
  url: 'https://truexgold.vercel.app/', // origin must match your domain & subdomain
  icons: [<Logo />]
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: '...', // used for the Coinbase SDK
  defaultChainId: 1 // used for the Coinbase SDK
})

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})



export default function ConnectButton() {
  const { open } = useWeb3Modal()
  return (
    
    <span className='CupBtn'>
        <button className='innerBtn' onClick={() => open({ view: 'Networks' })}>
            <FaWallet size={10} />
            <p>Wallet</p>
        </button>
    </span>
  )
}
