import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Home from './components/Home';
import One from './components/One';
import Two from './components/Two';


function App() {
  return (
    <Router>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/one" element={<One />} />
          <Route path="/two" element={<Two />} />
        </Routes>
    </Router>
  );
}

export default App;
