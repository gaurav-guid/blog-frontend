import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./app-components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
