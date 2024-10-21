import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

const rootElement = document.getElementById('root');

// Use createRoot to render your app
const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(<App />);
