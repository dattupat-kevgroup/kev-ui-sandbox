import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { registerFormUtilitiesTranslations } from '@kev-ui/form-utilities/locales';
import { registerFormValidationTranslations } from '@kev-ui/form-validation/locales';

i18next.use(initReactI18next).init({
  lng: 'en-CA',
  fallbackLng: 'en-CA',
  supportedLngs: ['en-CA', 'en-US', 'fr-CA'],
  interpolation: {
    escapeValue: false,
  },
  resources: {},
});

// Utility packages without React components must be registered manually.
// Component packages (chip, drawer, dropdown-menu, form-field, scaffolding, table)
// auto-register their translations on first render.
registerFormUtilitiesTranslations(i18next);
registerFormValidationTranslations(i18next);

// Consumer override example:
// Override specific translation keys using addResourceBundle with overwrite=true.
// This works whether called BEFORE or AFTER component auto-registration.
i18next.addResourceBundle('en-CA', '@kev-ui/chip', {
  chip: { removeLabel: 'My Custom Remove {{label}}' }
}, true, true); // deep=true, overwrite=true

export default i18next;
