import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { registerAvatarTranslations } from '@kev-ui/avatar/locales';
import { registerBackdropTranslations } from '@kev-ui/backdrop/locales';
import { registerBadgeTranslations } from '@kev-ui/badge/locales';
import { registerButtonTranslations } from '@kev-ui/button/locales';
import { registerChipTranslations } from '@kev-ui/chip/locales';
import { registerDrawerTranslations } from '@kev-ui/drawer/locales';
import { registerDropdownMenuTranslations } from '@kev-ui/dropdown-menu/locales';
import { registerFormTranslations } from '@kev-ui/form/locales';
import { registerFormFieldTranslations } from '@kev-ui/form-field/locales';
import { registerFormUtilitiesTranslations } from '@kev-ui/form-utilities/locales';
import { registerFormValidationTranslations } from '@kev-ui/form-validation/locales';
import { registerListTranslations } from '@kev-ui/list/locales';
import { registerModalTranslations } from '@kev-ui/modal/locales';
import { registerScaffoldingTranslations } from '@kev-ui/scaffolding/locales';
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

registerAvatarTranslations(i18next);
registerBackdropTranslations(i18next);
registerBadgeTranslations(i18next);
registerButtonTranslations(i18next);
registerChipTranslations(i18next);
registerDrawerTranslations(i18next);
registerDropdownMenuTranslations(i18next);
registerFormTranslations(i18next);
registerFormFieldTranslations(i18next);
registerFormUtilitiesTranslations(i18next);
registerFormValidationTranslations(i18next);
registerListTranslations(i18next);
registerModalTranslations(i18next);
registerScaffoldingTranslations(i18next);
registerTypographyTranslations(i18next);

export default i18next;
