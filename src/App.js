import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Preet Patel</h1>
      </header> */}
      <Router>
        <Routes>
          <Route  path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
