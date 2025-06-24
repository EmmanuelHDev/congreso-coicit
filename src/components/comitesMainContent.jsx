import React from "react";
import { useWiciLanguage } from "./WiciLanguageContext";

const TEXTS = {
  heroTitle: {
    es: "Comités Organizadores",
    en: "Organizing Committees",
  },
  organizer: {
    es: "Comité Organizador",
    en: "Organizing Committee",
  },
  scientific: {
    es: "Comité Científico",
    en: "Scientific Committee",
  },
  organizers: {
    es: "Organizadores",
    en: "Organizers",
  },
  collaborators: {
    es: "Colaboradores",
    en: "Collaborators",
  },
  copyright: {
    es: "© 2025 Universidad Tecnológica de Panamá | Todos los derechos reservados por UTP",
    en: "© 2025 Technological University of Panama | All Rights Reserved by UTP",
  }
};

const ComitesMainContent = () => {
  const { lang } = useWiciLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="mt-24 bg-white flex-1">
        <section className="relative bg-[url('/img/wici/heroWICI.png')] bg-center bg-no-repeat bg-cover h-[40vh] w-full">
          {/* Filtro negro (overlay) */}
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Contenido encima del filtro */}
          <div className="absolute inset-0 flex items-start justify-start px-32 pt-16">
            <h1 className="text-white text-3xl font-bold bg-black/50 px-4 py-2 w-[28rem]">
              {TEXTS.heroTitle[lang]}
            </h1>
          </div>
        </section>

        {/* Section para los comité */}
        <section className="px-2 py-8 md:px-8 lg:px-16">
          <div className="flex flex-col gap-4 items-center">
            {/* Grupo comité organizador */}
            <div className="w-full max-w-[66rem]">
              <h1 className="text-2xl font-bold text-gray-800 text-left">{TEXTS.organizer[lang]}</h1>
              <div className="h-[1px] w-full bg-amber-400 mt-1"></div>
            </div>
            {/* Contenedor de imágenes */}
            <div id="comiteFotos" className="flex flex-wrap gap-6 justify-center items-center mt-4 w-full max-w-[66rem]">
              <div className="h-[15rem] w-[15rem] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-md"></div>
              <div className="h-[15rem] w-[15rem] bg-gradient-to-t from-sky-500 to-indigo-500 rounded-lg shadow-md"></div>
              <div className="h-[15rem] w-[15rem] bg-gradient-to-bl from-violet-500 to-fuchsia-500 rounded-lg shadow-md"></div>
              <div className="h-[15rem] w-[15rem] bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-md"></div>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center mt-32">
            {/* Grupo comité científico */}
            <div className="w-full max-w-[66rem]">
              <h1 className="text-2xl font-bold text-gray-800 text-left">{TEXTS.scientific[lang]}</h1>
              <div className="h-[1px] w-full bg-amber-400 mt-1"></div>
            </div>
            {/* Contenedor de imágenes */}
            <div id="comiteFotos" className="flex flex-wrap gap-6 justify-center items-center mt-4 w-full max-w-[66rem]">
              <div className="h-[15rem] w-[15rem] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-md"></div>
              <div className="h-[15rem] w-[15rem] bg-gradient-to-t from-sky-500 to-indigo-500 rounded-lg shadow-md"></div>
              <div className="h-[15rem] w-[15rem] bg-gradient-to-bl from-violet-500 to-fuchsia-500 rounded-lg shadow-md"></div>
              <div className="h-[15rem] w-[15rem] bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-md"></div>
            </div>
          </div>
        </section>

        {/* Section para organizadores del evento/congreso */}
        <section className="mt-32">
          <div className="w-full">
            <div>
              <h1 className="text-center text-2xl text-gray-800">
                <span><strong>{TEXTS.organizers[lang]}</strong></span>
              </h1>
            </div>
            <div className="bg-gray-200 p-4 h-52 w-full mt-12">
              {/* Aquí puedes agregar contenido */}
            </div>
          </div>
        </section>

        {/* Section para colaboradores del evento/congreso */}
        <section className="mt-12">
          <div className="w-full">
            <div>
              <h1 className="text-center text-2xl text-gray-800">
                <span><strong>{TEXTS.collaborators[lang]}</strong></span>
              </h1>
            </div>
            <div className="flex flex-col bg-[#e0b02e] p-4 h-52 w-full mt-12">
              {/* Aquí puedes agregar contenido */}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#e0b02e]">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8 flex justify-center items-center">
          <span className="text-white font-medium text-sm text-center w-full">
            {TEXTS.copyright[lang]}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default ComitesMainContent;