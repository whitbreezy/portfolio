// Bringing in the required import from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function customNav() {
  // The Navbar UI component will render each of the NavLink elements in the links prop
  return (
    <Navbar
        links={[
            <NavLink key={1} className="nav-link" to="/">
                About Me
            </NavLink>,
            <NavLink key={2} className="nav-link" to="/contact">
                Contact
            </NavLink>,
            <NavLink key={3} className="nav-link" to="/projects">
                Projects
            </NavLink>,
            <NavLink key={4} className="nav-link" to="/resume">
                Resume
            </NavLink>,
      ]}
    />
  );
}