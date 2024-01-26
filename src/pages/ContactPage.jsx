//bring in react bootstrap component and Form component
import Form from "../components/UI/Form";
import { Container } from "react-bootstrap";

//create and export page with a container that holds the Form component
export default function ContactPage() {
    return (
      <div>
        <Container>
          <h1>Contact Me</h1>
          <p>
            Fill out the form below to send me an email.
          </p>
          <Form/>
        </Container>
      </div>
    );
  }