// src/components/WiciUbicacionPage.jsx
import React from "react";
import { WiciLanguageProvider } from "./WiciLanguageContext";
import Header from "./HeaderWici";
import WiciUbicacionMap from "./WiciUbicacionMap";

export default function WiciUbicacionPage() {
  return (
    <WiciLanguageProvider>
      <Header />
      <WiciUbicacionMap />
    </WiciLanguageProvider>
  );
}
