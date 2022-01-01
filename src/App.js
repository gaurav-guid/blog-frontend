import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from "./app-components/NavBar";
import { Col, Container, Row } from 'react-bootstrap';
import HomePage from './app-components/HomePage';
import ArticleList from './app-components/ArticleList';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Container fluid>
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route exact path="/ArticleList" element={<ArticleList />}></Route>
          </Routes>
        </Container>
    </BrowserRouter>
  );
}

export default App;
