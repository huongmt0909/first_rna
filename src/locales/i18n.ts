// i18n.ts
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import loginEn from './en/login.json';
import componentsEn from './en/components.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  resources: {
    en: {
      login: loginEn,
      components: componentsEn,
    },
  },
  ns: ['login', 'components'],
  defaultNS: 'login',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
