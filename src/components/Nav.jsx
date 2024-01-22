// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function customNav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
        links={[
            <Link key={1} className="nav-link text-dark" to="/">
                About Me
            </Link>,
            <Link key={2} className="nav-link text-dark" to="/contact">
                Contact
            </Link>,
            <Link key={3} className="nav-link text-dark" to="/projects">
                Projects
            </Link>,
            <Link key={4} className="nav-link text-dark" to="/resume">
                Resume
            </Link>,
      ]}
    />
  );
}