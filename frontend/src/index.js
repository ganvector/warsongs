import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
//import Counter from './components/counter';
//import Navbar from './components/navbar';
import Page from './components/page';

ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();