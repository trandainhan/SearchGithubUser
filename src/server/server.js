import path from 'path'
import Express from 'express'
import qs from 'qs'
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
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use(handleRender)

function handleRender (req, res) {

  const params = qs.parse(req.query)
  const searchKey = params.searchKey || ''

  const preloadedState = {
    searchKey: searchKey,
    isFetching: false,
    users: [],
    selectedUser: {},
    selectedRepos: []
  }
  const store = createStore(SearchReducer, preloadedState)

  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  res.send(renderFullPage(html, store.getState()))
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
        <link href="bundle.css" rel="stylesheet">
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})
