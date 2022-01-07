import { BrowserRouter } from "react-router-dom";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Router from "./config/Router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
