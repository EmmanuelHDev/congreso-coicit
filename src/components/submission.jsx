import React from "react";
import { WiciLanguageProvider } from "./WiciLanguageContext";
import Header from "./HeaderWici";
import SubmissionMainContent from "./SubmissionMainContent";

const SubmissionPage = () => (
  <WiciLanguageProvider>
    <Header />
    <SubmissionMainContent />
  </WiciLanguageProvider>
);

export default SubmissionPage;

