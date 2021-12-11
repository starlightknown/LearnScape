import React from 'react';
// import { Switch } from 'react-router-dom';
import { BrowserRouter,Routes, Route, Link} from "react-router-dom";
import './App.css';
import Home from './components/Home';

export default function App() {
  return (
      <BrowserRouter>
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      
      <Routes>
        <Route exact path="/" element={Home} />
        <Route path="/about" element={About} />
      </Routes>
    </div>
    </BrowserRouter>

  );
}

// function Home() {
//   return (
//     <div>
//       <h2>Homezz</h2>
//     </div>
//   );
// }

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}


