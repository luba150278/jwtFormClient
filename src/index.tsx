import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './components/App/App';

const rootElement = document.getElementById('root');
if (rootElement === null) throw new Error('Root container missing in index.html');
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
