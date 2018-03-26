import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootElementId = "root";

ReactDOM.render(<App rootElement={rootElementId}/>, document.getElementById(rootElementId));
registerServiceWorker();
