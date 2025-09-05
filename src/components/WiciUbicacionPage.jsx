// src/components/WiciUbicacionPage.jsx
import React from "react";
import { WiciLanguageProvider } from "./WiciLanguageContext";
import Header from "./HeaderWici";
import WiciUbicacionMap from "./WiciUbicacionMap";
import Footer from "./FooterWici";

export default function WiciUbicacionPage() {
  return (
    <WiciLanguageProvider>
      <Header />
      <WiciUbicacionMap />
      <Footer />
    </WiciLanguageProvider>
  );
}
