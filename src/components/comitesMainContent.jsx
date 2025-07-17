import React from "react";
import { useWiciLanguage } from "./WiciLanguageContext";

const ComitesMainContent = () => {
  const { lang } = useWiciLanguage();

  const t = {
    es: {
      titulo: "Comités Organizadores",
      comiteOrganizador: "Comité Organizador",
      comiteCientifico: "Comité Científico",
      colaboradores: "Colaboradores",
      organizador: [
        "Dr. Cristian Pinzón – Universidad Tecnológica de Panamá",
        "Dr. Edmanuel Cruz – Universidad Tecnológica de Panamá",
        "Dr. Mauricio Hooper – Universidad Tecnológica de Panamá",
        "Dr. Anibal Santos – Universidad Tecnológica de Panamá",
        "Dr. Elvis Castillo – Universidad Tecnológica de Panamá",
        "Dr. José Carlos Rangel – Universidad Tecnológica de Panamá",
      ],
      cientifico: [
        "Dra. Sherley Portugal – Universidad Tecnológica de Panamá",
        "Dr. Wedley Tejedor – Universidad Tecnológica de Panamá",
        "Dr. Vladimir Villarreal – Universidad Tecnológica de Panamá",
        "Dr. Javier Bajo Pérez – Universidad Politécnica de Madrid",
        "Dr. Antonio González – Instituto Tecnológico de Costa Rica",
        "Dr. Juan Francisco De Paz – Universidad de Salamanca",
        "Dr. Fernando De la Prieta Pintado – Universidad de Salamanca",
        "Dr. Álvaro Lozano Murciego – Universidad de Salamanca",
        "Dr. Cesar De Jesus Pinzon Acosta – Universidad Tecnológica de Panamá",
        "Dr. Santiago Quintero – Universidad Tecnológica de Panamá",
        "Dra. Franchesca Gonzalez-Olivardia – Universidad Tecnológica de Panamá",
        "Dr. Manuel Curado – Universidad de Alicante",
        "Dr. Jose Abrego – Universidad de Granada",
        "Dra. Sara Rodríguez – Universidad de Salamanca",
        "MSc. Ivonne Núñez – University of Bern",
        "MSc. Dimas Concepción – Instituto Técnico Superior Especializado",
        "MSc. Nila Navarro – Universidad Iberoamericana de Panamá",
        "Dr. Carlos Barria – Universidad Tecnológica de Panamá",
      ],
    },
    en: {
      titulo: "Organizing Committees",
      comiteOrganizador: "Organizing Committee",
      comiteCientifico: "Scientific Committee",
      colaboradores: "Collaborators",
      organizador: [
        "Dr. Cristian Pinzón – Technological University of Panama",
        "Dr. Edmanuel Cruz – Technological University of Panama",
        "Dr. Mauricio Hooper – Technological University of Panama",
        "Dr. Anibal Santos – Technological University of Panama",
        "Dr. Elvis Castillo – Technological University of Panama",
        "Dr. José Carlos Rangel – Technological University of Panama",
      ],
      cientifico: [
        "Dra. Sherley Portugal – Universidad Tecnológica de Panamá",
        "Dr. Wedley Tejedor – Universidad Tecnológica de Panamá",
        "Dr. Vladimir Villarreal – Universidad Tecnológica de Panamá",
        "Dr. Javier Bajo Pérez – Polytechnic University of Madrid",
        "Dr. Antonio González – Costa Rica Institute of Technology",
        "Dr. Juan Francisco De Paz – University of Salamanca",
        "Dr. Fernando De la Prieta Pintado – University of Salamanca",
        "Dr. Álvaro Lozano Murciego – University of Salamanca",
        "Dr. Cesar De Jesus Pinzon Acosta – Universidad Tecnológica de Panamá",
        "Dr. Santiago Quintero – Universidad Tecnológica de Panamá",
        "Dra. Franchesca Gonzalez-Olivardia – Universidad Tecnológica de Panamá",
        "Dr. Manuel Curado – University of Alicante",
        "Dr. Jose Abrego – University of Granada",
        "Dra. Sara Rodríguez – University of Salamanca",
        "MSc. Ivonne Núñez – University of Bern",
        "MSc. Dimas Concepción – Instituto Técnico Superior Especializado",
        "MSc. Nila Navarro – Universidad Iberoamericana de Panamá",
        "Dr. Carlos Barria – Universidad Tecnológica de Panamá",
      ],
    },
  }[lang];

  // Patrocinadores con enlaces
  const sponsors = [
    {
      src: "/img/wici/Patrocinadores/Firma_TEC.webp",
      alt: "Firma TEC",
      link: "https://www.tec.ac.cr",
    },
    {
      src: "/img/wici/Patrocinadores/Grupo_OEG.webp",
      alt: "Grupo OEG",
      link: "https://oeg.fi.upm.es",
    },
    {
      src: "/img/wici/Patrocinadores/Logo_ESALAB.webp",
      alt: "ESALAB",
      link: "https://esalab.es",
    },
    {
      src: "/img/wici/Patrocinadores/Logo_Robotsis.webp",
      alt: "Robotsis",
      link: "http://robotsis.utp.ac.pa",
    },
  ];

  return (
    <>
      <main className="mt-24 bg-white">
        <section className="relative bg-[url('/img/wici/heroWICI.png')] bg-center bg-no-repeat bg-cover h-[40vh] w-full">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 flex items-start justify-start px-4 md:px-32 pt-16">
            <h1 className="text-white text-3xl font-bold bg-black/50 px-4 py-2 w-full md:w-[28rem]">
              {t.titulo}
            </h1>
          </div>
        </section>

        <section className="px-2 py-8 md:px-8 lg:px-16">
          <div className="flex flex-col gap-4 items-center">
            {/* Comité Organizador */}
            <div className="w-full max-w-[66rem]">
              <h1 className="text-2xl font-bold text-gray-800 text-left">
                <strong>{t.comiteOrganizador}</strong>
              </h1>
              <div className="h-[1px] w-full bg-amber-400 mt-1 mb-4"></div>
              <ul className="list-disc pl-20 text-gray-700 space-y-1">
                {t.organizador.map((item, idx) => (
                  <li key={idx}>
                    <strong>{item.split("–")[0].trim()}</strong> –{" "}
                    {item.split("–")[1].trim()}
                  </li>
                ))}
              </ul>
            </div>

            {/* Comité Científico */}
            <div className="w-full max-w-[66rem] mt-16">
              <h1 className="text-2xl font-bold text-gray-800 text-left">
                <strong>{t.comiteCientifico}</strong>
              </h1>
              <div className="h-[1px] w-full bg-amber-400 mt-1 mb-4"></div>
              <ul className="list-disc pl-20 text-gray-700 space-y-1">
                {t.cientifico.map((item, idx) => (
                  <li key={idx}>
                    <strong>{item.split("–")[0].trim()}</strong> –{" "}
                    {item.split("–")[1].trim()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Colaboradores con enlaces */}
        <section className="bg-[#e0b02e] py-12 px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-10">
            {t.colaboradores}
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
            {sponsors.map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full"
                title={s.alt}
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  className="max-h-24 w-auto object-contain transition-transform hover:scale-105"
                  style={{ background: "#fff", borderRadius: 16, padding: 10 }}
                />
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[#e0b02e]">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8 flex justify-center items-center">
          <span className="text-white font-medium text-sm text-center w-full">
            © 2025 Universidad Tecnológica de Panamá | All Rights Reserved by
            UTP
          </span>
        </div>
      </footer>
    </>
  );
};

export default ComitesMainContent;
