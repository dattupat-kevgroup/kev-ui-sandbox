import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { registerTypographyTranslations } from '@kev-ui/typography/locales';

i18next.use(initReactI18next).init({
  lng: 'en-CA',
  fallbackLng: 'en-CA',
  supportedLngs: ['en-CA', 'en-US', 'fr-CA'],
  interpolation: {
    escapeValue: false,
  },
  resources: {},
});

registerTypographyTranslations(i18next);

export default i18next;
