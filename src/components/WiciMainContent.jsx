import React from "react";
import { useWiciLanguage } from "./WiciLanguageContext";

const sponsors = [
  { src: "/img/wici/Patrocinadores/Firma_TEC.webp", alt: "Firma TEC" },
  { src: "/img/wici/Patrocinadores/Grupo_OEG.webp", alt: "Grupo OEG" },
  { src: "/img/wici/Patrocinadores/Logo_ESALAB.webp", alt: "ESALAB" },
  { src: "/img/wici/Patrocinadores/Logo_Robotsis.webp", alt: "Robotsis" },
];

const WiciMainContent = () => {
  const { t, lang } = useWiciLanguage();

  return (
    <main>
      <section className="relative bg-[url(/img/wici/heroWICI.png)] bg-center bg-no-repeat bg-cover h-[80vh] lg:h-screen">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute z-10 text-white px-4 left-1 lg:left-16 top-1/2 -translate-y-1/2 w-[310px] md:w-[592px] h-[312px] flex flex-col justify-center text-left bg-black/50 rounded-2xl">
          <h1 className="text-2xl md:text-4xl font-bold leading-snug">
            {t.hero.titulo}{" "}
            <strong className="text-[#e0b02e]">{t.hero.nombre}</strong>
          </h1>
          <p className="text-base mt-2">{t.hero.ubicacion}</p>
          <p className="mt-4 text-lg">{t.hero.fecha}</p>
        </div>
      </section>

      <section className="px-4 py-8 md:px-8 lg:px-16 bg-white">
        <div className="max-w-screen-md mx-auto">
          <h2 className="text-[#e0b02e] text-2xl font-bold mb-4">
            {t.call.titulo}
          </h2>
          <p className="text-gray-800 leading-relaxed">{t.call.texto}</p>
        </div>
      </section>

      <section className="px-4 py-8 md:px-8 lg:px-16 bg-white">
        <div className="max-w-screen-md mx-auto">
          <h2 className="text-[#e0b02e] text-2xl font-bold mb-4">
            {t.temas.titulo}
          </h2>
          <p className="text-gray-800 leading-relaxed">{t.temas.texto}</p>
          <ul className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {t.areasTematicas.map((area, i) => (
              <li
                key={i}
                className="flex flex-col items-center overflow-hidden"
              >
                <img
                  src={area.img}
                  alt={area.titulo}
                  className="w-16 h-16 object-contain"
                />
                <div className="relative bg-white pt-3">
                  <h3 className="text-center text-gray-800 font-semibold leading-relaxed">
                    {area.titulo}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-8 md:px-8 lg:px-16 bg-white">
        <div className="max-w-screen-md mx-auto">
          <h2 className="text-[#e0b02e] text-2xl font-bold mb-4">
            {t.lugar.titulo}
          </h2>
          <p className="text-gray-800 leading-relaxed">{t.lugar.texto}</p>
        </div>
      </section>

      {/* Sección de Colaboradores */}
      <section className="bg-[#e0b02e] py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          {lang === "es" ? "Colaboradores" : "Collaborates"}
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {sponsors.map((s, i) => (
            <div key={i} className="flex items-center justify-center w-full">
              <img
                src={s.src}
                alt={s.alt}
                className="max-h-24 w-auto object-contain transition-transform hover:scale-105"
                style={{ background: "#fff", borderRadius: 16, padding: 10 }}
              />
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#e0b02e]">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8 flex justify-center items-center">
          <span className="text-white font-medium text-sm text-center w-full">
            © 2025 Universidad Tecnológica de Panamá | All Rights Reserved by
            UTP
          </span>
        </div>
      </footer>
    </main>
  );
};

export default WiciMainContent;
