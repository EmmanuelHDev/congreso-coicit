import React from "react";
import { useWiciLanguage } from "./WiciLanguageContext";

const ComitesMainContent = () => {
  const { lang } = useWiciLanguage();

  const t = {
    es: {
      titulo: "Comités Organizadores",
      comiteOrganizador: "Comité Organizador",
      comiteCientifico: "Comité Científico",
      organizador: [
        { rol: "Presidente del Comité Editorial", nombre: "Dr. Cristian Pinzón", institucion: "Universidad Tecnológica de Panamá" },
        { rol: "Editor Invitado", nombre: "Dr. Mauricio Hooper", institucion: "Universidad Tecnológica de Panamá" },
        { rol: "Editor Asociado", nombre: "Dr. Edmanuel Cruz", institucion: "Universidad Tecnológica de Panamá" },
        { rol: "Coordinador de Revisiones", nombre: "Dr. José Carlos Rangel", institucion: "Universidad Tecnológica de Panamá" },
        { rol: "Gestor de Publicaciones", nombre: "Dr. Elvis Castillo", institucion: "Universidad Tecnológica de Panamá" },
        { rol: "Gestor de Publicaciones", nombre: "Dr. Anibal Santos", institucion: "Universidad Tecnológica de Panamá" },
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
        "MSc. Ivonne Núñez – Universidad de Berna",
        "MSc. Dimas Concepción – Instituto Técnico Superior Especializado",
        "MSc. Nila Navarro – Universidad Iberoamericana de Panamá",
        "Dr. Carlos Barria – Universidad Tecnológica de Panamá",
        "Dr. Luis Guillermo Loria – Universidad Isaac Newton",
        "Dra. Melisabel Muñoz – Universidad Tecnológica de Panamá",
        "Dr. Dámaso Domínguez – Universidad Tecnológica de Panamá",
        "MSC. Edgar Ortega de la Cruz – Universidad de Arkansas",
        "Dra. Airam Morales – Universidad Tecnológica de Panamá",
        "Dr. Carlos Robetto	 – Universidad Tecnológica de Panamá",
        "Dr. Manuel Martin-Merino Acera	 – Universidad Pontificia de Salamanca",
        "Dra. Nacari Marin	 – Universidad Tecnológica de Panamá",
      ],
    },
    en: {
      titulo: "Organizing Committees",
      comiteOrganizador: "Organizing Committee",
      comiteCientifico: "Scientific Committee",
      organizador: [
        { rol: "Editorial Committee President", nombre: "Dr. Cristian Pinzón", institucion: "Universidad Tecnológica de Panamá" },
        { rol: "Guest Editor", nombre: "Dr. Mauricio Hooper", institucion: "Universidad Tecnológica de Panamá" },
        { rol: "Associate Editor", nombre: "Dr. Edmanuel Cruz", institucion: "Universidad Tecnológica de Panamá" },
        { rol: "Review Coordinator", nombre: "Dr. José Carlos Rangel", institucion: "Universidad Tecnológica de Panamá" },
        { rol: "Publications Manager", nombre: "Dr. Elvis Castillo", institucion: "Universidad Tecnológica de Panamá" },
        { rol: "Publications Manager", nombre: "Dr. Anibal Santos", institucion: "Universidad Tecnológica de Panamá" },
      ],
      cientifico: [
        "Dra. Sherley Portugal – Universidad Tecnológica de Panamá",
        "Dr. Wedley Tejedor – Universidad Tecnológica de Panamá",
        "Dr. Vladimir Villarreal – Universidad Tecnológica de Panamá",
        "Dr. Javier Bajo Pérez – Technical University of Madrid",
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
        "MSc. Dimas Concepción – Specialized Higher Technical Institute",
        "MSc. Nila Navarro – Ibero-American University of Panama",
        "Dr. Carlos Barria – Universidad Tecnológica de Panamá",
        "Dr. Luis Guillermo Loria – Universidad Isaac Newton",
        "Dra. Melisabel Muñoz – Universidad Tecnológica de Panamá",
        "Dr. Dámaso Domínguez – Universidad Tecnológica de Panamá",
        "MSC. Edgar Ortega de la Cruz – University of Arkansas",
        "Dra. Airam Morales – Universidad Tecnológica de Panamá",
        "Dr. Carlos Robetto	 – Universidad Tecnológica de Panamá",
        "Dr. Manuel Martin-Merino Acera	 – Universidad Pontificia de Salamanca",
        "Dra. Nacari Marin	 – Universidad Tecnológica de Panamá",
      ],
    },
  }[lang];

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
                    {item.rol}: <strong>{item.nombre}</strong> –{" "}
                    {item.institucion}
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
      </main>
    </>
  );
};

export default ComitesMainContent;
