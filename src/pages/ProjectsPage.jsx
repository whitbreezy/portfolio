import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import ProjectCard from '../components/UI/ProjectCard';
import projects from '../projects'


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
                <ProjectCard projects = {projects}/>
            </Container>
        </div>
    );
}