//custom footer styles
const styles = {
    footerStyles:{
        minHeight: '100px',
        background: '#606c38',
        display: 'flex',
        justifyContent: 'center'
    },
    linkStyles:{
        textDecoration: 'underline'
    }
}
//footer component with links to socials
function Footer() {
    return (
        <footer style={styles.footerStyles} className="p-3 mt-5">
            <a href="https://github.com/whitbreezy" style={styles.linkStyles} className="m-3">My Github</a>
            <a href="https://linkedin.com/in/whitney-brady-657a94132" style={styles.linkStyles} className="m-3">My LinkedIn Profile</a>
            <a href="https://dribbble.com/whitbreezy" style={styles.linkStyles} className="m-3">My Dribbble</a>
        </footer>
    );
}

export default Footer;
