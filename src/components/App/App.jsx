import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../Layout/Layout";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() =>
  import("../../pages/CatalogPage/CatalogPage.jsx")
);
const CamperPage = lazy(() => import("../../pages/CamperPage/CamperPage.jsx"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage.jsx")
);
const FeatureSection = lazy(() =>
  import("../FeatureSection/FeatureSection.jsx")
);
const ReviewsSection = lazy(() =>
  import("../ReviewsSection/ReviewsSection.jsx")
);

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperPage />}>
          <Route path="features" element={<FeatureSection />} />
          <Route path="reviews" element={<ReviewsSection />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
