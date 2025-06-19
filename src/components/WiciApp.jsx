import React from "react";
import { WiciLanguageProvider } from "./WiciLanguageContext";
import Header from "./HeaderWici";
import WiciMainContent from "./WiciMainContent";

const WiciApp = () => (
  <WiciLanguageProvider>
    <Header />
    <WiciMainContent />
  </WiciLanguageProvider>
);

export default WiciApp;
