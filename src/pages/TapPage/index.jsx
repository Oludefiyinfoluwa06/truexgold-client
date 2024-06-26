import React from 'react';
import './TapPage.css';
import Value from '../../components/Value';
import Tap from '../../components/Tap';
import Nav from '../../components/Nav';

const TapPage = () => {
  return (
    <div className='Container'>
      <Value />
      <Tap />
      <nav className="bottom-nav">
        <Nav />
      </nav>
    </div>
  )
}

export default TapPage;
