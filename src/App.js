import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from "./app-components/NavBar";
import { Col, Container, Row } from 'react-bootstrap';
import HomePage from './app-components/HomePage';
import ArticleList from './app-components/ArticleList';
import Article from './app-components/Article';
import AddEditArticle from './app-components/AddEditArticle';

//DEBT: Warning: validateDOMNesting(...): <a> cannot appear as a descendant of <a>. in developer tools console
function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Container fluid>
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route exact path="/ArticleList" element={<ArticleList />}></Route>
            <Route exact path="/Article" element={<Article />}></Route>
            <Route exact path="/AddEditArticle" element={<AddEditArticle />}></Route>
          </Routes>
        </Container>
    </BrowserRouter>
  );
}

export default App;
