import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import tasks from './reducers'
import './index.css';

const store = createStore(tasks);
