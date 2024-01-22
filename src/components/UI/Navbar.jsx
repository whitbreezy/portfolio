//bring in react bootstrap components
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const styles = {
    navStyle:{
        background: '#ff967f',
    }
}
export default function customNav({ links }) {
    return (
        <Navbar style={styles.navStyle}  expand="lg" className="p-3 mb-5">
            <Navbar.Brand>
                <img
                    src="src/assets/wblogo.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="custom logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav id="topnav" className="me-auto">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* map links in Nav component */}
                        {links.map((link) => link)}
                    </ul>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}