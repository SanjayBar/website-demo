import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import BlogDetail from "./pages/BlogDetail";
import BlogList from "./pages/BlogList";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Error from "./pages/Error";
import { OtechProvider } from "./otechContext";

ReactDOM.render(
  <React.StrictMode>
    <OtechProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="about-us" element={<AboutUs />}></Route>
          <Route path="services" element={<Services />}></Route>
          <Route path="contact-us" element={<ContactUs />}></Route>
          <Route path="blog-detail" element={<BlogDetail />} />
          <Route path="blog-list" element={<BlogList />} />
          <Route path="FAQ" element={<FAQ />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio-detail" element={<PortfolioDetail />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="team" element={<Team />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </OtechProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
