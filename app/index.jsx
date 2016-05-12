import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

//i18n stuff start
import { I18nextProvider } from 'react-i18next'; // as we build ourself via webpack
import i18n from './i18n'


let store = createStore(todoApp)

render(

  <Provider store={store}>
    <I18nextProvider i18n={ i18n }>
      <App />
    </I18nextProvider>
  </Provider>,
 
  document.getElementById('root')
)