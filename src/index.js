import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';

import { LunchLadyLogin, MaleNurseLogin, BaldGuyLogin } from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<LunchLadyLogin />, document.getElementById('root'));

ReactDOM.render(<MaleNurseLogin />, document.getElementById('root2'));

ReactDOM.render(<BaldGuyLogin />, document.getElementById('root3'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
