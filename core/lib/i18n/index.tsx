import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';

import { resources } from './resources';

i18n.use(initReactI18next).init({
  resources,
  lng: 'uk',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export const isRTL: boolean = i18n.dir() === 'rtl';

I18nManager.allowRTL(isRTL);
I18nManager.forceRTL(isRTL);

export default i18n;
