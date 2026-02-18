export interface NavItem {
  id: string;
  appName: string;
  text: string;
  icon: string;
  route: string;
}

export interface NavLink {
  id: string;
  packageId: string;
  label: string;
  href: string;
}

export const seedNavItems: NavItem[] = [
  { id: 'form', appName: 'Form', text: 'Form', icon: 'FormsIcon', route: '/form' },
  { id: 'button', appName: 'Button', text: 'Button', icon: 'CollectionsIcon', route: '/button' },
  { id: 'typography', appName: 'Typography', text: 'Typography', icon: 'AccountingIcon', route: '/typography' },
  { id: 'icons', appName: 'Icons', text: 'Icons', icon: 'CatalogIcon', route: '/icons' },
  { id: 'chip', appName: 'Chip', text: 'Chip', icon: 'LunchBoxIcon', route: '/chip' },
  { id: 'dropdown-menu', appName: 'Dropdown Menu', text: 'Dropdown Menu', icon: 'ReceiptIcon', route: '/dropdown-menu' },
  { id: 'list', appName: 'List', text: 'List', icon: 'DistrictCatalogIcon', route: '/list' },
  { id: 'drawer', appName: 'Drawer', text: 'Drawer', icon: 'PosIcon', route: '/drawer' },
];

export const seedNavLinks: NavLink[] = [
  { id: 'form-overview', packageId: 'form', label: 'Overview', href: '/form' },
  { id: 'form-textfield', packageId: 'form', label: 'TextField', href: '/form/textfield' },
  { id: 'form-combobox', packageId: 'form', label: 'Combobox', href: '/form/combobox' },
  { id: 'form-validation', packageId: 'form', label: 'Validation', href: '/form/validation' },
  { id: 'btn-basic', packageId: 'button', label: 'Basic', href: '/button' },
  { id: 'btn-icon', packageId: 'button', label: 'Icon Button', href: '/button/icon' },
  { id: 'typo-basic', packageId: 'typography', label: 'Basic', href: '/typography' },
  { id: 'icons-all', packageId: 'icons', label: 'All Icons', href: '/icons' },
  { id: 'chip-basic', packageId: 'chip', label: 'Basic', href: '/chip' },
  { id: 'dd-basic', packageId: 'dropdown-menu', label: 'Basic', href: '/dropdown-menu' },
  { id: 'list-basic', packageId: 'list', label: 'Basic', href: '/list' },
  { id: 'drawer-basic', packageId: 'drawer', label: 'Basic', href: '/drawer' },
];
