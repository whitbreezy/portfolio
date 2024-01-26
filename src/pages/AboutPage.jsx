import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import selfPic from '../assets/me_n_willow.jpg'
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

//custom component styles
const styles = {
    selfPicStyle:{
        maxWidth:'100%'
    }
}

export default function AboutPage() {
    return (
        <div>
            <Container>
                <Row>
                    <h1>Hi! I'm Whitney.</h1>
                </Row>
                <Row className='mb-3'>
                    <h2>About Me</h2>
                </Row>
                <Row className='mb-3'>
                    <Col sm={12} md={6} lg={4} className='mb-3'>
                    <img style={styles.selfPicStyle} src={selfPic} alt='self portrait'/>
                    </Col>
                    {/* responsive bio section and pic*/}
                    <Col sm={12} md={6} lg={8}>
                        <p>
                            I'm a UX designer located in the Salt Lake City, Utah area. I'm currently 
                            taking a Full Stack Web Development Bootcamp through the University of Utah.
                        </p>
                        <p>
                            I was born and raised near Salt Lake, and graduated with my Bachelor's degree in Quantitative Analysis of Markets and Organizations
                            from the University of Utah in 2020. After I finished school, I got a job as a Scrum Product Owner and realized that I wanted to continue my career in the tech field. 
                            I had taken digital design classes in high school and loved using the adobe suite to make art, so I decided to learn more about UX and fell in love with it. I obtained my 
                            UX Certification through the Nielsen Norman Group and decided to continue my education and earn my UX Unicorn horn by taking a coding bootcamp.
                            Outside of work and school, I enjoy playing in the mountains, baking, photography, art, and spending time with my fiance and our dog, Willow.
                        </p>

                        <p>
                            Explore the rest of my portfolio to see my projects and learn more about me, or scroll down to see some of my favorite projects.
                        </p>
                    </Col>
                </Row>
                {/*cards for featured projects */}
                <Row className='mb-3'>
                    <h3>
                        Featured Projects
                    </h3>
                </Row>
                <Row>
                    <Card className='p-3 mb-3'>
                        <Card.Header as="h4">FoodFeed</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                FoodFeed is an application I built with a group for a project in my coding bootcamp.
                                This application features a bootstrap front end, a mySQL database, and an express.js back end.
                                Users can enter and save recipes to their profile, and the application can function as a virtual recipe book. 
                            </Card.Text>
                            <a href='https://enigmatic-hollows-51581-85d21f4c37a7.herokuapp.com/login'>
                                <button>Live Application</button>
                            </a>
                            <a href='https://github.com/Phansen47/FoodFeed'>
                                <button>Github Repo</button>
                            </a>
                            
                        </Card.Body>
                    </Card>
                </Row>
                <Row>
                    <Card className='p-3 mb-3'>
                        <Card.Header as="h4">Get Rhythm</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Get Rhythm is the first group project I worked on in my coding bootcamp. This application features a custom CSS front end 
                                and a Javascript backend that communicates with the Spotify API. When using this applications, users can view top songs right now, 
                                search for artists, and view artists' discographies. Users can also double click tracks to navigate to the song's music video on YouTube.
                            </Card.Text>
                            <a href='https://whitbreezy.github.io/get-rhythm/'>
                                <button>Live Application</button>
                            </a>
                            <a href='https://github.com/whitbreezy/get-rhythm'>
                                <button>Github Repo</button>
                            </a>
                            
                        </Card.Body>
                    </Card>
                </Row>
                <Row>
                    <Card className='p-3 mb-3'>
                        <Card.Header as="h4">Weather Dashboard</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                This project is a weather dashboard I created as a homework assignment from my coding bootcamp. Users of this application 
                                are able to enter the name of a US city and search for the its weather using a weather API. Users can also save recent city searches
                                using local storage to look back at them later. 
                            </Card.Text>
                            <a href='https://whitbreezy.github.io/weather-dashboard/'>
                                <button>Live Application</button>
                            </a>
                            <a href='https://github.com/whitbreezy/weather-dashboard'>
                                <button>Github Repo</button>
                            </a>
                            
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    );
}