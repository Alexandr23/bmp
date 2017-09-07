import * as e6p from 'es6-promise';
(e6p as any).polyfill();

import 'isomorphic-fetch';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { createMemoryHistory, match } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from '../app/redux/store';
import configureRoutes from '../app/routes';
import Html from './html';
const { ReduxAsyncConnect, loadOnServer } = require('redux-connect');
const express = require('express');
const path = require('path');
const compression = require('compression');
const Chalk = require('chalk');
const appConfig = require('../../config/main');


const app = express();
app.use(compression());


//app.use(favicon(path.join(__dirname, 'public/favicon.ico')));
app.use(express.static(path.join(__dirname, '/')));


app.get('*', (req: any, res: any) => {
  const location = req.url;
  const memoryHistory = createMemoryHistory(req.originalUrl);
  const store = configureStore(memoryHistory, {});
  const history = syncHistoryWithStore(memoryHistory, store);

  match({ history, routes: configureRoutes(store), location },
    (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        const asyncRenderData = (Object as any).assign({}, renderProps, { store });

        loadOnServer(asyncRenderData).then(() => {
          const markup = ReactDOMServer.renderToString(
            <Provider store={store} key="provider">
              <ReduxAsyncConnect {...renderProps} />
            </Provider>,
          );
          res.status(200).send(renderHTML(markup, store));
        });
      } else {
        res.status(404).send('Not Found?');
      }
    });
});

app.listen(appConfig.port, appConfig.host, (err: any) => {
  if (err) {
    console.error(Chalk.bgRed(err));
  } else {
    console.info(Chalk.black.bgGreen(
      `\n\n💂  Listening at http://${appConfig.host}:${appConfig.port}\n`,
    ));
  }
});

function renderHTML(markup: string, store: any) {
  const html = ReactDOMServer.renderToString(
    <Html markup={markup} manifest={{manifest: 'manifest'}} store={store} />,
  );

  return `<!doctype html> ${html}`;
}

export default app;