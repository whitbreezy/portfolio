//bring in react bootstrap components
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import brandImg from '../../assets/wblogo.png'


//custom style for navbar
const styles = {
    navStyle:{
        background: '#606c38',
        width:'100%!important',
    }
}

export default function customNav({ links }) {
    return (
        <Navbar fixed='top' style={styles.navStyle}  expand="lg" className="p-3">
            <Navbar.Brand>
                <img
                    src={brandImg}
                    width="40"
                    height="40"
                    className="d-inline-block align-top "
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