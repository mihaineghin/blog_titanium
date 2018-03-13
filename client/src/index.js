import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App imageName="bg" />, document.getElementById('root'));
registerServiceWorker();
