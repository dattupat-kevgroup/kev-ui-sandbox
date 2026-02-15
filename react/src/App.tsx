import { BrowserRouter, Routes, Route, Link, type LinkProps, Navigate } from 'react-router';
import { AppLinkProvider } from '@kev-ui/app-link';

import Layout from './components/Layout';

// Form Fields Pages
import FormFieldsAll from './pages/form-fields/index';
import TextFieldPage from './pages/form-fields/textfield';
import ComboboxPage from './pages/form-fields/combobox';

// Button Pages
import ButtonPage from './pages/button/index';
import IconButtonPage from './pages/button/icon';

// Typography Page
import TypographyPage from './pages/typography/index';

// Icons Page
import IconsPage from './pages/icons/index';

// Chip Page
import ChipPage from './pages/chip/index';

// Dropdown Menu Page
import DropdownMenuPage from './pages/dropdown-menu/index';

// List Page
import ListPage from './pages/list/index';

// Drawer Page
import DrawerPage from './pages/drawer/index';

// Adapter: maps href to React Router's "to" prop
const RouterLink = ({ href, ...props }: { href: string } & Omit<LinkProps, 'to'>) => (
  <Link to={href} {...props} />
);

function App() {
  return (
    <BrowserRouter>
      <AppLinkProvider linkComponent={RouterLink}>
        <Layout>
          <Routes>
            {/* Redirect root to /form-fields */}
            <Route path="/" element={<Navigate to="/form-fields" replace />} />

            {/* Form Fields routes */}
            <Route path="/form-fields" element={<FormFieldsAll />} />
            <Route path="/form-fields/textfield" element={<TextFieldPage />} />
            <Route path="/form-fields/combobox" element={<ComboboxPage />} />

            {/* Button routes */}
            <Route path="/button" element={<ButtonPage />} />
            <Route path="/button/icon" element={<IconButtonPage />} />

            {/* Typography route */}
            <Route path="/typography" element={<TypographyPage />} />

            {/* Icons route */}
            <Route path="/icons" element={<IconsPage />} />

            {/* Chip route */}
            <Route path="/chip" element={<ChipPage />} />

            {/* Dropdown Menu route */}
            <Route path="/dropdown-menu" element={<DropdownMenuPage />} />

            {/* List route */}
            <Route path="/list" element={<ListPage />} />

            {/* Drawer route */}
            <Route path="/drawer" element={<DrawerPage />} />
          </Routes>
        </Layout>
      </AppLinkProvider>
    </BrowserRouter>
  );
}

export default App;
