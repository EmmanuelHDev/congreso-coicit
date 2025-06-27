import React from "react";
import { WiciLanguageProvider } from "./WiciLanguageContext";
import Header from "./HeaderWici";
import ComitesMainContent from "./comitesMainContent";

const comites = () => (
  <WiciLanguageProvider>
    <Header />
    <ComitesMainContent />
    
  </WiciLanguageProvider>
);

export default comites;