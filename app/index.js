/*
[F]ocused
[I]ndependent
[R]eusable
[S]mall
[T]estable
*/

import ReactDOM from 'react-dom'
import routes from './config/routes'
import Raven from 'raven-js'

const sentryKey = 'ee210d24e9214461aa00d722f02c3a76'
const sentryApp = '97495'
const sentryURL = 'https://' + sentryKey + '@app.getSentry.com/' + sentryApp

const _APP_INFO = {
  name: 'Github Battle',
  branch: 'master',
  version: '1.0'
}

window.onerror = function () {
  Raven.showReportDialog()
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch
  }
}).install()

ReactDOM.render(
  routes,
  document.getElementById('app')
)
