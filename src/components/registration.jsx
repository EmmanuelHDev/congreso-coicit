import React from "react";
import { WiciLanguageProvider } from "./WiciLanguageContext";
import Header from "./HeaderWici";
import RegistrationMainContent from "./RegistrationMainContent";
import Footer from "./FooterWici";

const Registration = () => (
  <WiciLanguageProvider>
    <Header />
    <RegistrationMainContent />
    <Footer />
  </WiciLanguageProvider>
);

export default Registration;
