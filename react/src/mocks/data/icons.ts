export interface IconMeta {
  id: string;
  name: string;
  category: string;
  tags: string[];
}

export const seedIcons: IconMeta[] = [
  { id: '1', name: 'AccountingIcon', category: 'Business', tags: ['finance', 'money', 'accounting'] },
  { id: '2', name: 'BellIcon', category: 'UI', tags: ['notification', 'alert', 'bell'] },
  { id: '3', name: 'BurgerIcon', category: 'UI', tags: ['menu', 'hamburger', 'navigation'] },
  { id: '4', name: 'CatalogIcon', category: 'Business', tags: ['catalog', 'list', 'items'] },
  { id: '5', name: 'CollectionsIcon', category: 'Business', tags: ['collection', 'group', 'set'] },
  { id: '6', name: 'DistrictCatalogIcon', category: 'Business', tags: ['district', 'region', 'area'] },
  { id: '7', name: 'FormsIcon', category: 'UI', tags: ['form', 'input', 'document'] },
  { id: '8', name: 'GlobeIcon', category: 'UI', tags: ['globe', 'world', 'international'] },
  { id: '9', name: 'LunchBoxIcon', category: 'Business', tags: ['lunch', 'food', 'meal'] },
  { id: '10', name: 'PosIcon', category: 'Business', tags: ['pos', 'register', 'sales'] },
  { id: '11', name: 'ReceiptIcon', category: 'Business', tags: ['receipt', 'transaction', 'bill'] },
  { id: '12', name: 'UserIcon', category: 'UI', tags: ['user', 'person', 'account'] },
];
