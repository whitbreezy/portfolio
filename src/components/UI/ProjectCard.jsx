import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
const styles = {
    projectImg:{
    width: '100%',
    maxHeight: '200px'
    },
    projectCard:{
        minHeight:'500px'
    }
}

export default function ProjectCard({projects}){
    return(
        <div>
            <Row>
            {projects.map((project) => (
                <Col key={project.id} lg={4} md={6} sm={12}>
                    <Card className='p-3 mb-3' >
                        <Card.Img variant="top" src={project.img} style={styles.projectImg}/>
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <a href={project.url}>
                                <button>Live Application</button>
                            </a>
                            <a href={project.github}>
                                <button>Github Repo</button>
                            </a>
                        </Card.Body>
                    </Card>
                </Col>

            ))}
            </Row>

        </div>
    )
}
