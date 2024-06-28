import { NavLink } from 'react-router-dom';
import '../assets/Nav.css';
import Ref from '../assets/img/ref.png';
import Task from '../assets/img/task.png';
import Tap from '../assets/img/tap.png';
import Boost from '../assets/img/boost.png';
import Stats from '../assets/img/stat.png';

const Nav = () => {
  return (
    <div className="nav-container">
      <NavLink
        to="/invite"
        className={({ isActive }) => (isActive ? 'each active' : 'each')}
      >
        <img src={Ref} alt="ref" className="ref" />
        <p>Ref</p>
      </NavLink>

      <NavLink
        to="/earn"
        className={({ isActive }) => (isActive ? 'each active' : 'each')}
      >
        <img src={Task} alt="task" className="ref" />
        <p>Task</p>
      </NavLink>

      <NavLink
        to="/tap"
        className={({ isActive }) => (isActive ? 'each active' : 'each')}
      >
        <img src={Tap} alt="tap" className="ref" />
        <p>Tap</p>
      </NavLink>

      <NavLink
        to="/boost"
        className={({ isActive }) => (isActive ? 'each active' : 'each')}
      >
        <img src={Boost} alt="boost" className="ref" />
        <p>Boost</p>
      </NavLink>

      <NavLink
        to="/stat"
        className={({ isActive }) => (isActive ? 'each active' : 'each')}
      >
        <img src={Stats} alt="stats" className="ref" />
        <p>Stats</p>
      </NavLink>
    </div>
  );
};

export default Nav;
