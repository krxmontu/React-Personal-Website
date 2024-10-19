import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Hobbies from './components/Hobbies';
import Family from './components/Family';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contributions from './components/Contributions';
import './App.css'; // You can create this file for basic styling

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/family" element={<Family />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contributions" element={<Contributions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
