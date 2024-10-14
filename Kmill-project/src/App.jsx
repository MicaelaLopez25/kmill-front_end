import { MainComponets } from "./components/MainComponents";
import Footer from "./components/FooterYCss/Footer";
import Cookieiteams from "./components/Cookieitems";
import ImageCarousel from "./components/imagdesliz";

import Header from "./components/Header";

import { Link, Route, Routes } from "react-router-dom";
import ProductosHome from "./components/ProductosHome/ProductosHome";

function App() {
  return (
    <div>
      <ImageCarousel />

      <MainComponets />
      <ProductosHome />

      <Footer />
    </div>
  );
}

export default App;
