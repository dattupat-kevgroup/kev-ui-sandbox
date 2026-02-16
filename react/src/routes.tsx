import type {
  iSidebarNavigationItem,
  iSecondaryNavigationItemLink,
} from '@kev-ui/scaffolding';

/**
 * Main navigation items for the sidebar
 */
export const sidebarNavItems: iSidebarNavigationItem[] = [
  {
    id: 'form',
    appName: 'Form',
    text: 'Form',
    icon: 'FormsIcon',
    route: '/form',
  },
  {
    id: 'button',
    appName: 'Button',
    text: 'Button',
    icon: 'CollectionsIcon',
    route: '/button',
  },
  {
    id: 'typography',
    appName: 'Typography',
    text: 'Typography',
    icon: 'AccountingIcon',
    route: '/typography',
  },
  {
    id: 'icons',
    appName: 'Icons',
    text: 'Icons',
    icon: 'CatalogIcon',
    route: '/icons',
  },
  {
    id: 'chip',
    appName: 'Chip',
    text: 'Chip',
    icon: 'LunchBoxIcon',
    route: '/chip',
  },
  {
    id: 'dropdown-menu',
    appName: 'Dropdown Menu',
    text: 'Dropdown Menu',
    icon: 'ReceiptIcon',
    route: '/dropdown-menu',
  },
  {
    id: 'list',
    appName: 'List',
    text: 'List',
    icon: 'DistrictCatalogIcon',
    route: '/list',
  },
  {
    id: 'drawer',
    appName: 'Drawer',
    text: 'Drawer',
    icon: 'PosIcon',
    route: '/drawer',
  },
];

/**
 * NavBar links for each package (sub-pages)
 */
export const navLinksByPackage: Record<string, iSecondaryNavigationItemLink[]> = {
  form: [
    { id: 'form-overview', label: 'Overview', href: '/form' },
    { id: 'form-textfield', label: 'TextField', href: '/form/textfield' },
    { id: 'form-combobox', label: 'Combobox', href: '/form/combobox' },
    { id: 'form-validation', label: 'Validation', href: '/form/validation' },
  ],
  button: [
    { id: 'btn-basic', label: 'Basic', href: '/button' },
    { id: 'btn-icon', label: 'Icon Button', href: '/button/icon' },
  ],
  typography: [
    { id: 'typo-basic', label: 'Basic', href: '/typography' },
  ],
  icons: [
    { id: 'icons-all', label: 'All Icons', href: '/icons' },
  ],
  chip: [
    { id: 'chip-basic', label: 'Basic', href: '/chip' },
  ],
  'dropdown-menu': [
    { id: 'dd-basic', label: 'Basic', href: '/dropdown-menu' },
  ],
  list: [
    { id: 'list-basic', label: 'Basic', href: '/list' },
  ],
  drawer: [
    { id: 'drawer-basic', label: 'Basic', href: '/drawer' },
  ],
};

/**
 * Get the package ID from a pathname
 */
export const getPackageFromPath = (pathname: string): string => {
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] === 'form' || segments[0] === 'dropdown-menu') {
    return segments[0];
  }
  return segments[0] || 'form';
};

/**
 * Get navbar links for a given package with active state
 */
export const getNavLinksForPath = (pathname: string): iSecondaryNavigationItemLink[] => {
  const packageId = getPackageFromPath(pathname);
  const links = navLinksByPackage[packageId] || [];

  return links.map((link) => ({
    ...link,
    isActive: pathname === link.href,
  }));
};

/**
 * Get sidebar nav items with active state
 */
export const getSidebarItemsForPath = (pathname: string): iSidebarNavigationItem[] => {
  const packageId = getPackageFromPath(pathname);

  return sidebarNavItems.map((item) => ({
    ...item,
    isCurrentApp: item.id === packageId,
  }));
};
