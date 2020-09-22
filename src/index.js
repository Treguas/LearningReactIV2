import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import App2 from './components/App2'


ReactDOM.render(
    <div>
    <App nome="Vagner" sobrenome="Treguas" home="ao React"/>
    <App2 /></div>,
    document.getElementById('root')
)