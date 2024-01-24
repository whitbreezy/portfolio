import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function ProjectsPage() {
    return (
        <div>
            <Container>
                <Row>
                    <h1>Projects</h1>
                </Row>
                <Row>
                    <p>
                        Check out some of my projects below!
                    </p>
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
                <Row>
                    <Card className='p-3 mb-3'>
                        <Card.Header as="h4">E-commerce Backend</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                This was another project done for a homework assignment for my coding bootcamp. This project was back end only, and was intended to
                                showcase the skills we learned in mySQL. The project uses an express.js backend and a mySQL database. 
                            </Card.Text>
                            <a href='https://drive.google.com/file/d/10CXetC_QeFhRy3n2enK9D1E2V0ngrLaf/view'>
                                <button>Walkthrough Video</button>
                            </a>
                            <a href='https://github.com/whitbreezy/ecommerce-backend'>
                                <button>Github Repo</button>
                            </a>
                            
                        </Card.Body>
                    </Card>
                </Row>
                <Row>
                    <Card className='p-3 mb-3'>
                        <Card.Header as="h4">Needs Beyond Medicine</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                This was a freelance project in which I worked with the CEO of Needs Beyond Medicine, a nonprofit organization that helps local
                                people who have been affected by cancer diagnoses. My role in this project was to create the website that was previously on WordPress in Webflow.
                                After the new webflow site was deployed, I have been helping out with website changes on an as-needed basis. 
                            </Card.Text>
                            <a href='https://needsbeyondmedicine.org'>
                                <button>NBM Website</button>
                            </a>                            
                        </Card.Body>
                    </Card>
                </Row>
                <Row>
                    <Card className='p-3 mb-3'>
                        <Card.Header as="h4">CanSurvive</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                CanSurvive is a nonprofit organization that is connected with Needs Beyond Medicine and hosts charity events for cancer survivors.
                                I worked with the CEO to create the CanSurvive site in webflow and created a new logo to go on their new site. 
                            </Card.Text>
                            <a href='https://cansurvive.org'>
                                <button>CanSurvive Website</button>
                            </a>
                            
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    );
}