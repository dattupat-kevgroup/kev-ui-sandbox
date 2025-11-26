import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routes, packages } from '../routes';
import { Button } from '@kev-ui/button';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex h-screen">
      <aside className="w-64 p-4 overflow-y-auto bg-brand_blue-800 text-white">
        <h2 className="text-xl font-bold mb-4">KEV-UI Sandbox</h2>
        <nav>
          {packages.map((pkg) => (
            <div key={pkg.name} className="mb-4">
              <h3 className="font-semibold mb-2 text-brand_blue-200">{pkg.label}</h3>
              <ul className="space-y-1 ml-2">
                {routes
                  .filter((r) => r.package === pkg.name)
                  .map((route) => (
                    <li key={route.path}>
                      <Link
                        to={route.path}
                        className="block px-2 py-1 rounded text-sm text-white hover:bg-brand_blue-700"
                      >
                        {route.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="shadow-sm px-6 py-4 bg-white">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Package Tests</h1>
            <div className="flex gap-2">
              <Button
                onClick={() => changeLanguage('en-CA')}
                color="primary"
                size="small"
                variant={i18n.language === 'en-CA' ? 'contained' : 'outlined'}
              >
                EN-CA
              </Button>
              <Button
                onClick={() => changeLanguage('en-US')}
                color="primary"
                size="small"
                variant={i18n.language === 'en-US' ? 'contained' : 'outlined'}
              >
                EN-US
              </Button>
              <Button
                onClick={() => changeLanguage('fr-CA')}
                color="primary"
                size="small"
                variant={i18n.language === 'fr-CA' ? 'contained' : 'outlined'}
              >
                FR-CA
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-y-auto bg-primary_blue-50">
          {children}
        </main>
      </div>
    </div>
  );
}
