import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers'
import { renderRoutes } from 'react-router-config';
import { I18nextProvider } from 'react-i18next';
import Routes from './Routes';
import i18n from '../translations/i18n';

const app = document.getElementById('app');
const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk));
ReactDOM.hydrate(
    <I18nextProvider
        i18n={ i18n }
        initialI18nStore={window.initialI18nStore}
        initialLanguage={window.initialLanguage}>
        <Provider store={store}>
                <BrowserRouter>
                    <div>
                        {renderRoutes(Routes)}
                    </div>
                </BrowserRouter>
        </Provider>
    </I18nextProvider>, app);