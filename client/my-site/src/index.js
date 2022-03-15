import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import {store} from "./reducers";
import { Provider } from 'react-redux';
import { storeTodo } from './store';

ReactDOM.render(
        <Provider store={storeTodo}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
    document.getElementById('root')
);
