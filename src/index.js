import 'babel-polyfill';
import path from 'path';
import fs from 'fs';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import i18nextMiddleware from 'i18next-express-middleware';
import Backend from 'i18next-node-fs-backend';
import i18n from './translations/i18n';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const appSrc = resolveApp('src');

const app = express();


i18n
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init(
    {
      preload: ['en', 'es'],
      backend: {
        loadPath: `${appSrc}/translations/locales/{{lng}}/{{ns}}.json`,
        addPath: `${appSrc}/translations/locales/{{lng}}/{{ns}}.missing.json`,
      },
    },
    () => {
      app
        .disable('x-powered-by')
        .use('/locales', express.static(`${__dirname}/src/translations`))
        .use(express.static('public'))
        .use(i18nextMiddleware.handle(i18n))
        .get('*', (req, res) => {
          const store = createStore();
          const promises = matchRoutes(Routes, req.path).map(({ route }) => (route.loadData ? route.loadData(store) : null));
          Promise.all(promises).then(() => {
            res.send(renderer(req, store));
          });
        });
    },
  );
app.listen(process.env.PORT || 3000, () => {
  console.log('listening in 3000');
});
