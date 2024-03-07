import './App.css';
import Home from './pages/home'
import './pages/home.css';
import './pages/About.css';
import './pages/Contact.css';
import './pages/Header.css';
import Header from './pages/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} /> 
        <Route path="/About" element={<About />} /> 
        <Route path="/Contact" element={<Contact />} /> 

      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
