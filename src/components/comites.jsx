import React from "react";
import { WiciLanguageProvider } from "./WiciLanguageContext";
import Header from "./HeaderWici";
import ComitesMainContent from "./comitesMainContent";
import Footer from "./FooterWici";

const comites = () => (
  <WiciLanguageProvider>
    <Header />
    <ComitesMainContent />
    <Footer />
  </WiciLanguageProvider>
);

export default comites;