import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import GenerateIdPage from './pages/js-utils/generateId';
import IsNilPage from './pages/js-utils/isNil';
import ButtonBasicPage from './pages/button/basic';
import TypographyBasicPage from './pages/typography/basic';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/js-utils/generateId" element={<GenerateIdPage />} />
          <Route path="/js-utils/isNil" element={<IsNilPage />} />
          <Route path="/button/basic" element={<ButtonBasicPage />} />
          <Route path="/typography/basic" element={<TypographyBasicPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
