import path from 'path'
import Express from 'express'
import paths from '../../config/paths'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../../config/webpack.config.dev'
import sassMiddleware from 'node-sass-middleware'

import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import SearchReducer from '../redux/reducers'
import App from '../App'
import { renderToString } from 'react-dom/server'

const app = Express()
const port = 4000

// Use this middleware to set up hot module reloading via webpack.
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}))
app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}))

app.use('/static', Express.static(paths.appPublic))

app.use(handleRender)

function handleRender (req, res) {
  const store = createStore(SearchReducer)

  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  const preloadedState = store.getState()

  res.send(renderFullPage(html, preloadedState))
}

function renderFullPage (html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
        <title>React App</title>
        <link href="/bundle.css" rel="stylesheet">
        <style type="text/css"></style>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `
}

app.get('/*', (req, res, next) => {
    if (!req.url.match('static') && !req.url.match('/__webpack_hmr') && !req.url.match('bundle.js')) {
        req.url = '/';
    }
    next();
});

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})
