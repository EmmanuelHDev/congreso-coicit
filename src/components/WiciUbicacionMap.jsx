import React from "react";
import { useWiciLanguage } from "./WiciLanguageContext";

const LOCATIONS = [
  {
    title: {
      es: "Universidad Tecnológica de Panamá - Veraguas",
      en: "Technological University of Panama - Veraguas",
    },
    address: {
      es: "Vía Panamericana, San Antonio, Veraguas",
      en: "Panamericana Highway, San Antonio, Veraguas",
    },
    website: {
      es: <a href="https://ve.utp.ac.pa" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">ve.utp.ac.pa</a>,
      en: <a href="https://ve.utp.ac.pa" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">ve.utp.ac.pa</a>,
    },
    gmapSrc: "https://www.google.com/maps?q=8.0745539,-80.9349979&hl=es&z=17&output=embed",
  },
  {
    title: {
      es: "Centro de Convenciones COOPEVE",
      en: "COOPEVE Convention Center",
    },
    address: {
      es: "Central de Santiago, Provincia de Veraguas",
      en: "Downtown Santiago, Veraguas Province",
    },
    website: {
      es: <a href="https://coopeve.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">coopeve.com</a>,
      en: <a href="https://coopeve.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">coopeve.com</a>,
    },
    gmapSrc: "https://www.google.com/maps?q=8.0973494,-80.9743233&hl=es&z=17&output=embed",
  },
];

const TOUR_URL = "https://tour.panoee.net/668ae893f1ce484a4bd62a6d/668b0018f1ce486365d62b6e";

const WiciUbicacionMap = () => {
  const { lang } = useWiciLanguage();

  return (
    <>
      <main className="min-h-screen bg-white pt-28 pb-16 w-full">
        <div className="max-w-6xl mx-auto px-2 sm:px-6">
          <h2 className="text-[#e0b02e] text-2xl font-bold mb-10 text-center">
            {lang === "es" ? "Ubicación de las Sedes" : "Venues Location"}
          </h2>
          <div className="flex flex-col gap-8 md:flex-row md:gap-8 justify-center items-stretch w-full">
            {LOCATIONS.map((loc, idx) => (
              <div
                key={idx}
                className="flex-1 bg-white rounded-2xl shadow-lg border-2 border-[#e0b02e] flex flex-col items-center p-4 mx-auto"
                style={{
                  minWidth: 0,
                  maxWidth: 440,
                  width: "100%",
                }}
              >
                <h3 className="text-lg font-bold mb-1 text-center">
                  {loc.title[lang]}
                </h3>
                <p className="text-sm text-center mb-2 text-gray-800">
                  {loc.address[lang]}
                </p>
                <div className="text-xs text-center mb-3 text-gray-700">
                  Sitio web: {loc.website[lang]}
                </div>
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    borderRadius: "15px",
                    overflow: "hidden",
                    boxShadow: "0 6px 24px 0 rgba(0,0,0,0.12)",
                    background: "#eee",
                    border: "none",
                  }}
                >
                  <iframe
                    title={loc.title[lang]}
                    src={loc.gmapSrc}
                    width="100%"
                    height="100%"
                    style={{
                      border: "none",
                      width: "100%",
                      height: "100%",
                      minHeight: "230px",
                      background: "#eee",
                      display: "block",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
          {/* TOUR VIRTUAL */}
          <div className="mt-16 flex flex-col items-center">
            <h2 className="text-[#e0b02e] text-xl md:text-2xl font-bold mb-6 text-center">
              {lang === "es" ? "Tour Virtual UTP Veraguas" : "UTP Veraguas Virtual Tour"}
            </h2>
            <div
              style={{
                width: "100%",
                maxWidth: 900,
                aspectRatio: "16/8",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 8px 32px 0 rgba(0,0,0,0.12)",
                background: "#222",
                margin: "0 auto",
                border: "2px solid #e0b02e",
              }}
              className="w-full"
            >
              <iframe
                title="Tour Virtual UTP Veraguas"
                src={TOUR_URL}
                width="100%"
                height="100%"
                style={{
                  border: "none",
                  width: "100%",
                  height: "100%",
                  minHeight: "300px",
                  background: "#222",
                  display: "block",
                }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-[#e0b02e]">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8 flex justify-center items-center">
          <span className="text-white font-medium text-sm text-center w-full">
            © 2025 Universidad Tecnológica de Panamá | All Rights Reserved by UTP
          </span>
        </div>
      </footer>
    </>
  );
};

export default WiciUbicacionMap;
