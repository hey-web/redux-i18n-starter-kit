# redux-i18n-starter-kit

A react starter kit including redux, i18n teches..

**i18n** feature depends on [i18next-framework](https://github.com/i18next/i18next), and related packages.

## Get start
### Install dependencies
```
npm install
```
It may take several minutes. 
## Start server
```
npm start
```
### Test in browser

Open link in your modern browser, recommend Chrome.

## Introduce those source
There are two important dirs you need to know.
### app

	This dir contains all codes about busincess logic
   
   ### app/index.jsx
   This file is the app entry, it is necessary to add **i18n** provider, and also, the i18n instance.
   ```javascript
    //i18n stuff start
    import { I18nextProvider } from 'react-i18next'; // as we build ourself via webpack
    import i18n from './i18n'
	//i18n stuff end

    let store = createStore(todoApp)

    render(

      <Provider store={store}>
        <I18nextProvider i18n={ i18n }>
          <App />
        </I18nextProvider>
      </Provider>,

      document.getElementById('root')
    )
   ```
   
   ### app/i18n.js
   This file export the i18n instance which can provide to react component as a prop.
   **Note**: I have added a custome language detector to control the languge detection. It will always return **en** as the language. You can commented it to see the real behavior. Or just modify the return value to other locales.
   ```
   lngDetector.addDetector({
      name: 'myDetector',

      lookup(options) {
        // options -> are passed in options
        return 'en';
      },

      cacheUserLanguage(lng, options) {
        // options -> are passed in options
        // lng -> current language, will be called after init and on changeLanguage

        // store it
      }
  })
   ```
   
   
   ### app/components/Header.jsx
   This is the most simplest component which has i18n support. It imports translate function, and the t function in props. **common** is a namespace which you want refered, it is mapped to a same name json file in the locale dir. Here it is mapped to the common.json.
   
   ```
   	import React, { PropTypes } from 'react'
    import { translate } from 'react-i18next'

    const Header = ({t}) =>  {
      return (<header><h1>{t('appName')}</h1>
                <footer>{t('author')}：{t('authorName')}</footer>
            </header>)
    }

    export default translate('common')(Header);
   
   ```
   
### locales
	This dir contains all locales data. Every locale has its own dir named as locale word like en-US, zh-CN. And under each of locale dir, there is a json file named common.json. This is the default data file.

[localhost:3000/](http://localhost:3000/)

## References
* [i18next](https://github.com/i18next/i18next)
* [react-i18next](https://github.com/i18next/react-i18next)
* [i18next-browser-languageDetector](https://github.com/i18next/i18next-browser-languageDetector)
* [i18next-localstorage-cache](https://github.com/i18next/i18next-localstorage-cache)
* [i18next-xhr-backend](https://github.com/i18next/i18next-xhr-backend)


