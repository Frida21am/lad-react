import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout/Layout";
import CatalogPage from "./pages/CatalogPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
