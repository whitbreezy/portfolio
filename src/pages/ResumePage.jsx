import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

const styles = {
    buttonStyle:{
        maxWidth: '50%'
    },
    btnRowStyle:{
        justifyContent: 'center',
        float: 'none'
    },
    link:{
        textAlign: 'center'
    }
}
export default function ResumePage() {
    return (
      <div>
        <Container>
            <Row>
                <h1>My Resume</h1>
            </Row>
            <Row style={styles.btnRowStyle} className='mb-3' >
                <a href='https://docs.google.com/document/d/15HNh7CTFI-08q_A6Eu-MkAENb1vueUG_/edit?usp=sharing&ouid=107347010865744927141&rtpof=true&sd=true' style={styles.link}>
                    <button style={styles.buttonStyle} >Click here to view or download my full resume</button>
                </a>
                
            </Row>
            <Row className='mb-3'>
                <h2 className='mb-5'>
                    Education
                </h2>
                
                <h3>
                    University of Utah
                </h3>
                <ul className='ms-5'>
                    <li className='mb-1'>
                        Continuing Education: Full Stack Coding Bootcamp (August 2023 - Present)
                    </li>
                    <li className='mb-1'>
                        David Eccles School of Business: Quantitative Analysis of Markets and Organizations (2017 - 2020)
                    </li>
                </ul>
            </Row>
            <Row>
                <h2 className='mb-5'>
                    Employment
                </h2>
                
                <h3>
                    SILAC Insurance Company
                </h3>
                <ul className='ms-5 mb-5'>
                    <li className='mb-1'>
                        UX Designer, UXC (January 2022 - Present)
                    </li>
                    <li className='mb-1'>
                        Product Owner II, CSPO (April 2020 - January 2022)
                    </li>
                </ul>
                <h3>
                    Needs Beyond Medicine & CanSurvive (2022 - Present)
                </h3>
                <ul className='ms-5'>
                    <li className='mb-1'>
                        Worked with CEO to move create new websites for Needs Beyond Medicine and CanSurvive in Webflow
                    </li>
                    <li className='mb-1'>
                        Continued work on website changes on an as-needed freelance basis
                    </li>
                    <li className='mb-1'>
                        Created a new logo for CanSurvive
                    </li>
                </ul>
            </Row>
        </Container>

        </div>
    );
  }