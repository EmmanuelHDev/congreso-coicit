import React from "react";
import { useWiciLanguage } from "./WiciLanguageContext";

const WiciMainContent = () => {
  const { t } = useWiciLanguage();

  return (
    <main className="">
      <section className="relative bg-[url(/img/wici/heroWICI.png)] bg-center bg-no-repeat bg-cover h-[80vh] lg:h-screen">
        {/* Capa oscura */}
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Contenido posicionado a la izquierda */}
        <div className="absolute z-10 text-white px-4 left-1 lg:left-16 top-1/2 -translate-y-1/2 w-[310px] md:w-[592px] h-[312px] flex flex-col justify-center text-left bg-black/50 rounded-2xl">
          <h1 className="text-2xl md:text-4xl font-bold leading-snug">
            {t.hero.titulo} <strong className="text-[#e0b02e]">{t.hero.nombre}</strong>
          </h1>
          <p className="text-base mt-2">{t.hero.ubicacion}</p>
          <p className="mt-4 text-lg">{t.hero.fecha}</p>
        </div>
      </section>
      <section className="px-4 py-8 md:px-8 lg:px-16 bg-white">
        <div className="max-w-screen-md mx-auto">
          <h2 className="text-[#e0b02e] text-2xl font-bold mb-4">{t.call.titulo}</h2>
          <p className="text-gray-800 leading-relaxed">
            {t.call.texto}
          </p>
        </div>
      </section>
      <section className="px-4 py-8 md:px-8 lg:px-16 bg-white">
        <div className="max-w-screen-md mx-auto">
          <h2 className="text-[#e0b02e] text-2xl font-bold mb-4">{t.temas.titulo}</h2>
          <p className="text-gray-800 leading-relaxed">{t.temas.texto}</p>
          <ul className="mt-8 grid gap-4 grid-cols-2 lg:grid-cols-5">
            <li>
              <a href="#" className="flex flex-col items-center overflow-hidden">
                <img src="/img/wici/infraestructura.png" alt="" className="w-9 h-9" />
                <div className="relative bg-white pt-3">
                  <h3 className="text-center text-gray-800 leading-relaxed">{t.temas.infraestructura}</h3>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-col items-center overflow-hidden">
                <img src="/img/wici/energia-verde.png" alt="" className="w-9 h-9" />
                <div className="relative bg-white pt-3">
                  <h3 className="text-center text-gray-800 leading-relaxed">{t.temas.energia}</h3>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-col items-center overflow-hidden">
                <img src="/img/wici/planta.png" alt="" className="w-9 h-9" />
                <div className="relative bg-white pt-3">
                  <h3 className="text-center text-gray-800 leading-relaxed">{t.temas.automatizacion}</h3>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-col items-center overflow-hidden">
                <img src="/img/wici/idea-creativa.png" alt="" className="w-9 h-9" />
                <div className="relative bg-white pt-3">
                  <h3 className="text-center text-gray-800 leading-relaxed">{t.temas.ciencia}</h3>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-col items-center overflow-hidden">
                <img src="/img/wici/red-de-computadoras.png" alt="" className="w-9 h-9" />
                <div className="relative bg-white pt-3">
                  <h3 className="text-center text-gray-800 leading-relaxed">{t.temas.tic}</h3>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="px-4 py-8 md:px-8 lg:px-16 bg-white">
        <div className="max-w-screen-md mx-auto">
          <h2 className="text-[#e0b02e] text-2xl font-bold mb-4">{t.lugar.titulo}</h2>
          <p className="text-gray-800 leading-relaxed">{t.lugar.texto}</p>
        </div>
      </section>
      <footer className="bg-[#e0b02e]">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8"></div>
      </footer>
    </main>
  );
};

export default WiciMainContent;
