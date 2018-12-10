import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { renderRoutes } from 'react-router-config';
import Routes from '../client/Routes';

export default (req, store) => {
    const context = {};
    const content = renderToString(
      <Provider store={store}>
        <I18nextProvider i18n={req.i18n}>
          <StaticRouter location={req.path} context={context}>
            <div>{renderRoutes(Routes)}</div>
          </StaticRouter>
        </I18nextProvider>
      </Provider>);
      const initialI18nStore = {};
      req.i18n.languages.forEach(l => {
        initialI18nStore[l] = req.i18n.services.resourceStore.data[l];
      });
      const initialLanguage = req.i18n.language;
    return `
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
          <link rel="stylesheet" href="/css/main.css">  
        </head>
        <body>
          <div id="app">${content}</div>
          <script>
            window.INITIAL_STATE = ${JSON.stringify(store.getState())}
            window.initialI18nStore = JSON.parse('${JSON.stringify(initialI18nStore)}');
            window.initialLanguage = '${initialLanguage}';
          </script>
          <script src="bundle.js"></script>
        </body>
      </html>
    `
};

