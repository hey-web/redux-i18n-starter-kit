import i18n from 'i18next'
import XHR from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import Cache from 'i18next-localStorage-cache'
import i18nRes from './locales/index'

//Custom language detector
const lngDetector = new LanguageDetector(null, {
  // order and from where user language should be detected
  order: ['myDetector', 'navigator','querystring', 'cookie', 'localStorage', 'htmlTag'],

  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',

  // cache user language on
  caches: ['localStorage', 'cookie'],

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: 'myDomain',

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement
})

lngDetector.addDetector({
  name: 'myDetector',

  lookup(options) {
    // options -> are passed in options
    return navigator.language;
  },

  cacheUserLanguage(lng, options) {
    // options -> are passed in options
    // lng -> current language, will be called after init and on changeLanguage

    // store it
  }
})

i18n
  .use(lngDetector)
  .use(Cache)
  .init({
    fallbackLng: 'en_US',
    load: 'currentOnly',
    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',
    fallbackNS: 'common',
    debug: true,
    interpolation: {
      escapeValue: false // not needed for react!!
    },
    returnObjects: true,
    returnNull: false,
    appendNamespaceToMissingKey: true,
    resources: i18nRes
  });


export default i18n;
