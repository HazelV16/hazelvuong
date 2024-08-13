import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'; // Ensure the correct path
import AboutMe from './components/AboutMe';
import Resume from './components/Resume/Resume';
import Showcase from './components/Showcase/Showcase';
import Contact from './components/Contact';
import { Layout } from 'antd';

const { Content, Footer } = Layout;

const App = () => {
    return (
        <Router>
            <Layout>
            <NavBar />
                <Content>
            <Routes>
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/showcase" element={<Showcase />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<AboutMe />} />
            </Routes>
                    </Content>
            </Layout>
        </Router>
    );
};

export default App;

// ReactDOM.render(<App />, document.getElementById('root'));
