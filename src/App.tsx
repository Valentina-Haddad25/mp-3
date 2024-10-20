import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom'; // Added Outlet and Navigate here
import Navbar from './components/Navbar';
import Education from './components/Education';
import Project from './components/Project';
import Employment from './components/Employment';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';

const Root: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="content">
                {/* This will be where child routes are rendered */}
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "home", element: <Home /> },
            { path: "education", element: <Education /> },
            { path: "employment", element: <Employment /> },
            { path: "project", element: <Project /> },
            { path: "certifications", element: <Certifications /> },
            { path: "contact", element: <Contact /> },
            // Redirect the root path to "home"
            { index: true, element: <Navigate to="home" /> }
        ],
    },
]);

const App: React.FC = () => {
    return <RouterProvider router={router} />;
};

export default App;
