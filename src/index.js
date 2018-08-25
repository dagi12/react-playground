import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import cssVars from 'css-vars-ponyfill/dist/css-vars-ponyfill.min';

// cssVars();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
