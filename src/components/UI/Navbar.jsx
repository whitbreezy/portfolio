import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function customNav({ links }) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary p-3 mb-5">
            <Navbar.Brand>
                <img
                    src="../assets/wblogo.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="custom logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {links.map((link) => link)}
                    </ul>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}