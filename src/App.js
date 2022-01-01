import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./app-components/NavBar";
import { Col, Container, Row } from 'react-bootstrap';
import HomePage from './app-components/HomePage';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container fluid>
        <Row>
          <Container>
            <Col>
              <HomePage />
            </Col>
          </Container>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
