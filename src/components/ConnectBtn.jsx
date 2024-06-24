import React from 'react';
import '../assets/styles.css';
import { FaWallet } from "react-icons/fa6";




const ConnectBtn = () => {
  return (
    <div>
        <a className='ConnBtn'>
          <FaWallet />
          <p>Connect</p>
        </a>
    </div>
  )
}

export default ConnectBtn