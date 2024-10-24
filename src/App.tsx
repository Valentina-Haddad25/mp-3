import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
// Import necessary modules from react-router-dom for routing functionalities

import Navbar from './components/Navbar';
import Education from './components/Education';
import Project from './components/Project';
import Employment from './components/Employment';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';
// Import the component files that will be displayed on different routes

const App = () => {
    return (
        <BrowserRouter>
            {/* BrowserRouter wraps the entire application to provide routing context */}
            <Routes>
                {/* Routes is the container for all Route components */}
                <Route
                    path="/"
                    element={
                        <>
                            {/* Display Navbar, content, and Footer on all routes */}
                            <Navbar />
                            <div className="content">
                                {/* Outlet renders the matched child route’s component */}
                                <Outlet />
                            </div>
                            <Footer />
                        </>
                    }
                >
                    {/* Define nested routes that will be rendered inside the Outlet */}
                    <Route path="home" element={<Home />} />
                    <Route path="education" element={<Education />} />
                    <Route path="employment" element={<Employment />} />
                    <Route path="project" element={<Project />} />
                    <Route path="certifications" element={<Certifications />} />
                    <Route path="contact" element={<Contact />} />

                    {/* Set the default route to redirect to /home */}
                    <Route index element={<Navigate to="home" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
// Export the App component to be used elsewhere in your project
