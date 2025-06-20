import React from "react";
import { useWiciLanguage } from "./WiciLanguageContext";

const LOCATIONS = [
  {
    title: {
      es: "Universidad Tecnológica de Panamá - Veraguas",
      en: "Technological University of Panama - Veraguas",
    },
    gmapSrc:
      "https://www.google.com/maps?q=8.0745539,-80.9349979&hl=es&z=17&output=embed",
  },
  {
    title: {
      es: "Centro de Convenciones COOPEVE",
      en: "COOPEVE Convention Center",
    },
    gmapSrc:
      "https://www.google.com/maps?q=8.0973494,-80.9743233&hl=es&z=17&output=embed",
  },
];

const WiciUbicacionMap = () => {
  const { lang } = useWiciLanguage();

  return (
    <>
      <main className="min-h-screen bg-white pt-28 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#e0b02e] text-2xl font-bold mb-10 text-center">
            {lang === "es" ? "Ubicación de las Sedes" : "Venues Location"}
          </h2>

          {LOCATIONS.map((loc, idx) => (
            <div
              key={idx}
              className="mb-10 flex flex-col items-center"
              style={{ width: "100%" }}
            >
              <h3 className="text-lg font-semibold mb-2 text-center">
                {loc.title[lang]}
              </h3>
              <div
                style={{
                  width: "95%",
                  maxWidth: "900px",
                  aspectRatio: "16/6",
                  margin: "0 auto",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 6px 32px 0 rgba(0,0,0,0.16)",
                  border: "2px solid #e0b02e",
                  background: "#eee",
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
                    minHeight: "320px",
                    background: "#eee",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-[#e0b02e]">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8 flex justify-center items-center">
          <span className="text-white font-medium text-sm text-center w-full">
            © 2024 Universidad Tecnológica de Panamá | All Rights Reserved by UTP
          </span>
        </div>
      </footer>
    </>
  );
};

export default WiciUbicacionMap;
