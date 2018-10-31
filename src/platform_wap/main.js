/* eslint-disable */
import avalon from 'extends/avalon.extend'
import router from './router'
import App from './App'

avalon.config({
  debug: true,
  local: true
})

avalon.bootstrap({
  el: '#app',
  component: App
})