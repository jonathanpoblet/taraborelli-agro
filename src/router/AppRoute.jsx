import { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const Home = lazy(() => import("../pages/Home/Home"));
const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs"));
const Products = lazy(() => import("../pages/Products/Products"));
const Detail = lazy(() => import("../pages/Detail/Detail"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const AfterSales = lazy(() => import("../pages/AfterSales/AfterSales"));
const Used = lazy(() => import("../pages/Used/Used"));
const PrecisionFarming = lazy(() => import("../pages/PrecisionFarming/PrecisionFarming"));
const Spinner = lazy(() => import("../components/Spinner/Spinner"));

export default function AppRoute() {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/nosotros" element={<AboutUs />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/detalle" element={<Detail />} />
            <Route path="/postventa" element={<AfterSales />} />
            <Route path="/usados" element={<Used />} />
            <Route path="/agricultura-de-precision" element={<PrecisionFarming />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </Suspense>
  );
}