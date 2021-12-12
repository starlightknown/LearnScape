import React from 'react';
// import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Router>
        {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/roadmap" render={() => {window.location.href="roadmap/index.html"}} />
      </Routes>
    </Router>
    </>
  );
}

export default App;