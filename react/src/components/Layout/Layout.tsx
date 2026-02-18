import { type ReactNode, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Scaffolding } from '@kev-ui/scaffolding';
import type {
  iSidebarNavigationItem,
  iSecondaryNavigationItem,
  iLanguageOption,
} from '@kev-ui/scaffolding';

import { useNavItems, useNavLinks } from '../../services/queries/useScaffoldingQueries';
import { getPackageFromPath } from '../../routes';

interface LayoutProps {
  children: ReactNode;
}

const languages: iLanguageOption[] = [
  { code: 'en-CA', label: 'EN-CA', name: 'English (Canada)' },
  { code: 'fr-CA', label: 'FR-CA', name: 'French (Canada)' },
  { code: 'en-US', label: 'EN-US', name: 'English (US)' },
];

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { data: navItems } = useNavItems();
  const { data: navLinks } = useNavLinks();

  const pathname = location.pathname;
  const packageId = getPackageFromPath(pathname);

  const sidebarItems: iSidebarNavigationItem[] = useMemo(() => {
    if (!navItems) return [];
    return navItems.map((item) => ({
      ...item,
      isCurrentApp: item.id === packageId,
    }));
  }, [navItems, packageId]);

  const secondaryNavItems = useMemo(() => {
    if (!navLinks) return [];
    return navLinks
      .filter((link) => link.packageId === packageId)
      .map((link) => ({
        ...link,
        isActive: pathname === link.href,
      }));
  }, [navLinks, packageId, pathname]);

  const pageTitle = sidebarItems.find((item) => item.id === packageId)?.text || 'KEV-UI Sandbox';

  const handleSidebarItemClick = (item: iSidebarNavigationItem) => {
    navigate(item.route);
  };

  const handleSecondaryNavClick = (item: iSecondaryNavigationItem) => {
    if ('href' in item && item.href) {
      navigate(item.href);
    }
  };

  return (
    <Scaffolding
      appTitle="KEV-UI Sandbox"
      pageTitle={pageTitle}
      sidebarNavigationItems={sidebarItems}
      secondaryNavigationItems={secondaryNavItems}
      onSidebarNavigationItemClick={handleSidebarItemClick}
      onSecondaryNavigationItemClick={handleSecondaryNavClick}
      schoolConfig={{ show: false, list: [] }}
      languageConfig={{ show: true, list: languages }}
      userMenuConfig={{
        options: [
          { id: 'logout', label: 'Logout', action: 'logout' },
        ],
      }}
    >
      {children}
    </Scaffolding>
  );
}
