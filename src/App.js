import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';

import Nav from './components/nav';
import HomePage from './pages/Homepage';
import ContactPage from './pages/Contactpage';
import AboutPage from './pages/Aboutpage';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route path="/contact" element={<ContactPage />}/>
          <Route path="/about" element={<AboutPage />}/>
        </Routes>
    </Router>
    </div> 
  );
}

export default App;
