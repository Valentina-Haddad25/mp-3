import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' for compatibility with React 18+
import App from './App';

const rootElement = document.getElementById('root');

// Type check to ensure root element is not null
if (!rootElement) {
    throw new Error("Naur Root element was not found.");
}
// had to check if it was null cause the below when I try to redener the app gives me an error if I donrt
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
