import React from "react";
import { WiciLanguageProvider } from "./WiciLanguageContext";
import Header from "./HeaderWici";
import SubmissionMainContent from "./SubmissionMainContent";
import Footer from "./FooterWici.jsx";

const SubmissionPage = () => (
  <WiciLanguageProvider>
    <Header />
    <SubmissionMainContent />
    <Footer />
  </WiciLanguageProvider>
);

export default SubmissionPage;

