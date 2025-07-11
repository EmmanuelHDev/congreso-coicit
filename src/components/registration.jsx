import React from "react";
import { WiciLanguageProvider } from "./WiciLanguageContext";
import Header from "./HeaderWici";
import RegistrationMainContent from "./RegistrationMainContent";

const Registration = () => (
  <WiciLanguageProvider>
    <Header />
    <RegistrationMainContent />
  </WiciLanguageProvider>
);

export default Registration;
