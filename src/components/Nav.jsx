import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Nav.css';
import Ref from '../assets/img/ref.png';
import Task from '../assets/img/task.png';
import Tap from '../assets/img/tap.png';
import Boost from '../assets/img/boost.png';
import Stats from '../assets/img/stat.png';

const Nav = () => {
  const [activeTab, setActiveTab] = useState('Ref');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <Link to="/invite"
        className={`each ${activeTab === 'Ref' ? 'active' : ''}`} 
        onClick={() => handleTabClick('Ref')}
      >
        <img src={Ref} alt="ref" className="ref" />
        <p>Ref</p>
      </Link>

      <Link to='/earn' 
        className={`each ${activeTab === 'Task' ? 'active' : ''}`} 
        onClick={() => handleTabClick('Task')}
      >
        <img src={Task} alt="task" className="ref" />
        <p>Task</p>
      </Link>

      <Link to='/tap'
        className={`each ${activeTab === 'Tap' ? 'active' : ''}`} 
        onClick={() => handleTabClick('Tap')}
      >
        <img src={Tap} alt="tap" className="ref" />
        <p>Tap</p>
      </Link>

      <Link to='/boost' 
        className={`each ${activeTab === 'Boost' ? 'active' : ''}`} 
        onClick={() => handleTabClick('Boost')}
      >
        <img src={Boost} alt="boost" className="ref" />
        <p>Boost</p>
      </Link>

      <div 
        className={`each ${activeTab === 'Stats' ? 'active' : ''}`} 
        onClick={() => handleTabClick('Stats')}
      >
        <img src={Stats} alt="stats" className="ref" />
        <p>Stats</p>
      </div>
    </div>
  );
};

export default Nav;
