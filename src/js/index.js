import 'babel-polyfill';
import 'isomorphic-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import {initProvider} from "./helpers/chain";

import configureStore from './store';
import App from './containers/App';

import '../scss/app.scss';

initProvider();

const store = configureStore().store;

ReactDOM.render(
    <AppContainer>
        <Provider store={ store }>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </AppContainer>,
    document.getElementById('root')
);