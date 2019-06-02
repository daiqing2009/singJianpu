import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '@/lang'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'cn', // set locale
  fallbackLocale: 'cn',
  messages // set locale messages
})

const loadedLanguages = ['en'] // our default language that is preloaded

function setI18nLanguage(lang) {
  i18n.locale = lang
  // TODO: 需要修改request的中对应的语言
  // axios.defaults.headers.common['Accept-Language'] = lang
  // document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export function loadLanguageAsync(lang) {
  if (i18n.locale !== lang) {
    if (!loadedLanguages.includes(lang)) {
      return import(/* webpackChunkName: "lang-[request]" */ `@/lang/${lang}`).then(msgs => {
        i18n.setLocaleMessage(lang, msgs.default)
        loadedLanguages.push(lang)
        return setI18nLanguage(lang)
      })
    }
    return Promise.resolve(setI18nLanguage(lang))
  }
  return Promise.resolve(lang)
}
