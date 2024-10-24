import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Education from './components/Education';
import Project from './components/Project';
import Employment from './components/Employment';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <>
                        <Navbar />
                        <div className="content">
                            <Outlet />
                        </div>
                        <Footer />
                    </>
                }>
                    <Route path="home" element={<Home />} />
                    <Route path="education" element={<Education />} />
                    <Route path="employment" element={<Employment />} />
                    <Route path="project" element={<Project />} />
                    <Route path="certifications" element={<Certifications />} />
                    <Route path="contact" element={<Contact />} />
                    <Route index element={<Navigate to="home" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
