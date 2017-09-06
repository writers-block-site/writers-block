import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (document.getElementById('react')) {
    ReactDOM.render(<App />, document.getElementById('react'));
}