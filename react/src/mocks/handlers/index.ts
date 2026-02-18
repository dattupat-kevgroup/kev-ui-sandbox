import { formHandlers } from './form';
import { comboboxHandlers } from './combobox';
import { chipHandlers } from './chip';
import { listHandlers } from './list';
import { dropdownHandlers } from './dropdown';
import { iconHandlers } from './icons';
import { buttonHandlers } from './button';
import { typographyHandlers } from './typography';
import { drawerHandlers } from './drawer';
import { scaffoldingHandlers } from './scaffolding';
import { jsUtilsHandlers } from './jsUtils';
import { homeHandlers } from './home';

export const handlers = [
  ...formHandlers,
  ...comboboxHandlers,
  ...chipHandlers,
  ...listHandlers,
  ...dropdownHandlers,
  ...iconHandlers,
  ...buttonHandlers,
  ...typographyHandlers,
  ...drawerHandlers,
  ...scaffoldingHandlers,
  ...jsUtilsHandlers,
  ...homeHandlers,
];
