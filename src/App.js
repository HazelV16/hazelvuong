import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'; // Ensure the correct path
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/showcase" element={<Showcase />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<div>Home Content</div>} />
            </Routes>
        </Router>
    );
};

export default App;

// ReactDOM.render(<App />, document.getElementById('root'));
