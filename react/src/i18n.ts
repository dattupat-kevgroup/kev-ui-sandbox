import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { registerTypographyTranslations } from '@kev-ui/typography/locales';
import { registerChipTranslations } from '@kev-ui/chip/locales';
import { registerFormFieldTranslations } from '@kev-ui/form-field/locales';
import { registerDropdownMenuTranslations } from '@kev-ui/dropdown-menu/locales';
import { registerListTranslations } from '@kev-ui/list/locales';
import { registerDrawerTranslations } from '@kev-ui/drawer/locales';

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
registerChipTranslations(i18next);
registerFormFieldTranslations(i18next);
registerDropdownMenuTranslations(i18next);
registerListTranslations(i18next);
registerDrawerTranslations(i18next);

export default i18next;
