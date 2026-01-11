import { BrowserRouter, Routes, Route, Link, type LinkProps } from 'react-router';
import { AppLinkProvider } from '@kev-ui/app-link';

// Adapter: maps href to React Router's "to" prop
const RouterLink = ({ href, ...props }: { href: string } & Omit<LinkProps, 'to'>) => (
  <Link to={href} {...props} />
);
import Layout from './components/Layout';
import Home from './pages/Home';
import GenerateIdPage from './pages/js-utils/generateId';
import IsNilPage from './pages/js-utils/isNil';
import ButtonBasicPage from './pages/button/basic';
import TypographyBasicPage from './pages/typography/basic';
import FormValidationPage from './pages/form/validation';

function App() {
  return (
    <BrowserRouter>
      <AppLinkProvider linkComponent={RouterLink}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/js-utils/generateId" element={<GenerateIdPage />} />
            <Route path="/js-utils/isNil" element={<IsNilPage />} />
            <Route path="/button/basic" element={<ButtonBasicPage />} />
            <Route path="/typography/basic" element={<TypographyBasicPage />} />
            <Route path="/form/validation" element={<FormValidationPage />} />
          </Routes>
        </Layout>
      </AppLinkProvider>
    </BrowserRouter>
  );
}

export default App;
