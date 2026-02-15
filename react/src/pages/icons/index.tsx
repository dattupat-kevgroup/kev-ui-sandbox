import {
  AccountingIcon,
  BellIcon,
  BurgerIcon,
  CatalogIcon,
  ChevronIcon,
  CloseIcon,
  CollectionsIcon,
  DistrictCatalogIcon,
  FormsIcon,
  GlobeIcon,
  LogoIcon,
  LunchBoxIcon,
  PosIcon,
  ReceiptIcon,
  RoleChangeIcon,
  ShoppingCartIcon,
  TriangleIcon,
  UserIcon,
  UsersIcon,
} from '@kev-ui/icons';

const icons = [
  { name: 'AccountingIcon', component: AccountingIcon },
  { name: 'BellIcon', component: BellIcon },
  { name: 'BurgerIcon', component: BurgerIcon },
  { name: 'CatalogIcon', component: CatalogIcon },
  { name: 'ChevronIcon', component: ChevronIcon },
  { name: 'CloseIcon', component: CloseIcon },
  { name: 'CollectionsIcon', component: CollectionsIcon },
  { name: 'DistrictCatalogIcon', component: DistrictCatalogIcon },
  { name: 'FormsIcon', component: FormsIcon },
  { name: 'GlobeIcon', component: GlobeIcon },
  { name: 'LogoIcon', component: LogoIcon },
  { name: 'LunchBoxIcon', component: LunchBoxIcon },
  { name: 'PosIcon', component: PosIcon },
  { name: 'ReceiptIcon', component: ReceiptIcon },
  { name: 'RoleChangeIcon', component: RoleChangeIcon },
  { name: 'ShoppingCartIcon', component: ShoppingCartIcon },
  { name: 'TriangleIcon', component: TriangleIcon },
  { name: 'UserIcon', component: UserIcon },
  { name: 'UsersIcon', component: UsersIcon },
];

export default function IconsPage() {
  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold mb-4">Icons</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-3">Import</h2>
        <code className="bg-gray-100 px-2 py-1 rounded text-sm block">
          import {`{ IconName }`} from '@kev-ui/icons'
        </code>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">All Icons</h2>
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4">
          {icons.map(({ name, component: Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center p-3 border rounded hover:bg-gray-50"
            >
              <Icon fontSize="large" className="mb-2" />
              <span className="text-xs text-gray-600 text-center break-all">{name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Sizes</h2>
        <div className="flex items-end gap-6">
          {(['small', 'medium', 'large', 'xlarge'] as const).map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <BellIcon fontSize={size} />
              <span className="text-xs text-gray-500">{size}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Colors</h2>
        <div className="flex items-center gap-4 flex-wrap">
          {(['primary', 'secondary', 'error', 'warning', 'info', 'success', 'black', 'disabled'] as const).map((color) => (
            <div key={color} className="flex flex-col items-center gap-2">
              <BellIcon fontSize="large" color={color} />
              <span className="text-xs text-gray-500">{color}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
