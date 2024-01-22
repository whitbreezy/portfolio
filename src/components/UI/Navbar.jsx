import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navbar() {
    const currentPage = useLocation().pathname;

    return (
        
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link
                to="/"
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    About Me
                </Link>
            </li>
            <li className="nav-item">
                <Link
                to="/Contact"
                className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </Link>
            </li>
            <li className="nav-item">
                <Link
                to="/Projects"
                className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}
                >
                    Projects
                </Link>
            </li>
            <li className="nav-item">
                <Link
                to="/Resume"
                className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </Link>
            </li>
        </ul>
    );
}

export default Navbar;