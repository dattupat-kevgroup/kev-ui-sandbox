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
import { useIconCatalog } from '../../services/queries/useIconQueries';
import type { ComponentType } from 'react';

const iconComponents: Record<string, ComponentType<{ fontSize?: string; color?: string; className?: string }>> = {
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
};

export default function IconsPage() {
  const { data: catalog, isPending, isError, error } = useIconCatalog();

  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold mb-4">Icons</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-3">Import</h2>
        <code className="bg-gray-100 px-2 py-1 rounded text-sm block">
          import {`{ IconName }`} from &apos;@kev-ui/icons&apos;
        </code>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">
          All Icons
          {catalog && <span className="text-sm text-gray-400 font-normal ml-2">({String(catalog.length)} from API)</span>}
        </h2>

        {isPending && (
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center p-3 border rounded animate-pulse">
                <div className="h-8 w-8 bg-gray-200 rounded mb-2" />
                <div className="h-3 bg-gray-200 rounded w-16" />
              </div>
            ))}
          </div>
        )}

        {isError && (
          <p className="text-red-600 text-sm">Failed to load icons: {error.message}</p>
        )}

        {catalog && (
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4">
            {Object.entries(iconComponents).map(([name, Icon]) => {
              const meta = catalog.find((c) => c.name === name);
              return (
                <div
                  key={name}
                  className="flex flex-col items-center p-3 border rounded hover:bg-gray-50"
                  title={meta?.tags.join(', ')}
                >
                  <Icon fontSize="large" className="mb-2" />
                  <span className="text-xs text-gray-600 text-center break-all">{name}</span>
                  {meta && (
                    <span className="text-[10px] text-gray-400">{meta.category}</span>
                  )}
                </div>
              );
            })}
          </div>
        )}
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
