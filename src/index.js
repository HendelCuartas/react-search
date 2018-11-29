import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.styl';
import './styles/reset-css.styl';
import App from './components/App';

ReactDOM.render(
    <App />,
    document.querySelector('#app')
);

module.hot.accept();