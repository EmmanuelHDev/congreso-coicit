import React from "react";
import { WiciLanguageProvider } from "./WiciLanguageContext";
import Header from "./HeaderWici";
import ExposicionesMainContent from "./ExposicionesMainContent";
import Footer from "./FooterWici.jsx";

const ExposicionesPage = () => (
  <WiciLanguageProvider>
    <Header />
    <ExposicionesMainContent />
    <Footer />
  </WiciLanguageProvider>
);

export default ExposicionesPage;

