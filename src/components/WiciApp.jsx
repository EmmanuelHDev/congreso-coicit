import React from "react";
import { WiciLanguageProvider } from "./WiciLanguageContext";
import Header from "./HeaderWici";
import WiciMainContent from "./WiciMainContent";
import Footer from "./FooterWici.jsx";

const WiciApp = () => (
  <WiciLanguageProvider>
    <Header />
    <WiciMainContent />
    <Footer />
  </WiciLanguageProvider>
);

export default WiciApp;
