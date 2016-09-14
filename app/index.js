import React from 'react';
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './config/routes'
// import Raven from 'raven-js'

// const sentryKey = 'da554a04dbcb47d8ae5fb5805af6e152'
// const sentryApp = '97498'
// const sentryURL = 'https://' + sentryKey + "@sentry.io/" + sentryApp
//
// const _APP_INFO = {
//   name: 'Github',
//   branch: 'video4',
//   version: '1.0'
// };

// Raven.config(sentryURL, {
//   release: _APP_INFO.version,
//   tags: {
//     branch: _APP_INFO.branch
//   }
// }).install();

render(
  routes,
  document.getElementById("app")
);
