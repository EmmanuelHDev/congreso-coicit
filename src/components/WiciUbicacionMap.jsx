import React from "react";
import { useWiciLanguage } from "./WiciLanguageContext";

const LOCATION = {
  title: {
    es: "Universidad Tecnológica de Panamá - Veraguas",
    en: "Universidad Tecnológica de Panamá - Veraguas",
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
};

const TOUR_URL = "https://tour.panoee.net/668ae893f1ce484a4bd62a6d/668b0ec9d9233b4aaa1251a6";

const WiciUbicacionMap = () => {
  const { lang } = useWiciLanguage();

  return (
    <>
      <main className="min-h-screen bg-white pt-28 pb-16 w-full">
        <div className="max-w-6xl mx-auto px-2 sm:px-6">
          <h2 className="text-[#e0b02e] text-2xl font-bold mb-10 text-center">
            {lang === "es" ? "Ubicación y Salón del Evento" : "Event Location and Room"}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="flex flex-col items-center">
              <h3 className="text-[#e0b02e] text-lg md:text-xl font-bold mb-4 text-center">
                {lang === "es" ? "Salón del Workshop de Investigación" : "Research Workshop Room"}
              </h3>
              <div className="bg-white rounded-2xl shadow-lg border-2 border-[#e0b02e] p-4 w-full h-full flex flex-col">
                <img
                  src="/img/wici/galo.jpg"
                  alt={lang === "es" ? "Salón Galo Chang - Workshop de Investigación" : "Galo Chang Room - Research Workshop"}
                  className="w-full rounded-xl shadow-lg object-cover"
                  style={{ height: "200px" }}
                />
                <div className="mt-4 text-center flex-1 flex flex-col justify-center">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    {lang === "es" ? "Salón Galo Chang" : "Galo Chang Room"}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {lang === "es" 
                      ? "Aquí se realizará el Workshop de Investigación de WICI 2025" 
                      : "The WICI 2025 Research Workshop will be held here"}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-[#e0b02e] text-lg md:text-xl font-bold mb-4 text-center">
                {lang === "es" ? "Ubicación de la Sede" : "Venue Location"}
              </h3>
              <div className="bg-white rounded-2xl shadow-lg border-2 border-[#e0b02e] flex flex-col items-center p-4 w-full h-full">
                <h4 className="text-lg font-bold mb-1 text-center">
                  {LOCATION.title[lang]}
                </h4>
                <p className="text-sm text-center mb-2 text-gray-800">
                  {LOCATION.address[lang]}
                </p>
                <div className="text-xs text-center mb-3 text-gray-700">
                  Sitio web: {LOCATION.website[lang]}
                </div>
                <div className="flex-1 w-full">
                  <div
                    style={{
                      width: "100%",
                      height: "200px",
                      borderRadius: "15px",
                      overflow: "hidden",
                      boxShadow: "0 6px 24px 0 rgba(0,0,0,0.12)",
                      background: "#eee",
                      border: "none",
                    }}
                  >
                    <iframe
                      title={LOCATION.title[lang]}
                      src={LOCATION.gmapSrc}
                      width="100%"
                      height="100%"
                      style={{
                        border: "none",
                        width: "100%",
                        height: "100%",
                        background: "#eee",
                        display: "block",
                      }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
    </>
  );
};

export default WiciUbicacionMap;
