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
    },
    en: {
      titulo: "Organizing Committees",
      comiteOrganizador: "Organizing Committee",
      comiteCientifico: "Scientific Committee",
      colaboradores: "Collaborators",
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
                {t.comiteOrganizador}
              </h1>
              <div className="h-[1px] w-full bg-amber-400 mt-1 mb-4"></div>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>
                  <strong>Dr. Cristian Pinzón</strong> – Universidad Tecnológica
                  de Panamá (
                  <a
                    href="mailto:cristian.pinzon@utp.ac.pa"
                    className="text-blue-600 underline"
                  >
                    cristian.pinzon@utp.ac.pa
                  </a>
                  )
                </li>
                <li>
                  <strong>Dr. Edmanuel Cruz</strong> – Universidad Tecnológica
                  de Panamá (
                  <a
                    href="mailto:edmanuel.cruz@utp.ac.pa"
                    className="text-blue-600 underline"
                  >
                    edmanuel.cruz@utp.ac.pa
                  </a>
                  )
                </li>
                <li>
                  <strong>Dr. Mauricio Hooper</strong> – Universidad Tecnológica
                  de Panamá (
                  <a
                    href="mailto:mauricio.hooper@utp.ac.pa"
                    className="text-blue-600 underline"
                  >
                    mauricio.hooper@utp.ac.pa
                  </a>
                  )
                </li>
                <li>
                  <strong>Dr. Anibal Santos</strong> – Universidad Tecnológica
                  de Panamá (
                  <a
                    href="mailto:anibal.santos@utp.ac.pa"
                    className="text-blue-600 underline"
                  >
                    anibal.santos@utp.ac.pa
                  </a>
                  )
                </li>
                <li>
                  <strong>Dr. Elvis Castillo</strong> – Universidad Tecnológica
                  de Panamá (
                  <a
                    href="mailto:elvis.castillo2@utp.ac.pa"
                    className="text-blue-600 underline"
                  >
                    elvis.castillo2@utp.ac.pa
                  </a>
                  )
                </li>
                <li>
                  <strong>Dr. José Carlos Rangel</strong> – Universidad
                  Tecnológica de Panamá (
                  <a
                    href="mailto:jose.rangel@utp.ac.pa"
                    className="text-blue-600 underline"
                  >
                    jose.rangel@utp.ac.pa
                  </a>
                  )
                </li>
              </ul>
            </div>

            {/* Comité Científico */}
            <div className="w-full max-w-[66rem] mt-16">
              <h1 className="text-2xl font-bold text-gray-800 text-left">
                {t.comiteCientifico}
              </h1>
              <div className="h-[1px] w-full bg-amber-400 mt-1 mb-4"></div>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>
                  <strong>Ivonne Núñez</strong> – University of Bern (
                  <a
                    href="mailto:ivonne.nunez@unibe.ch"
                    className="text-blue-600 underline"
                  >
                    ivonne.nunez@unibe.ch
                  </a>
                  )
                </li>
                <li>
                  <strong>Dra. Sherley Portugal</strong> – Universidad
                  Tecnológica de Panamá (
                  <a
                    href="mailto:sherlie.portugal@utp.ac.pa"
                    className="text-blue-600 underline"
                  >
                    sherlie.portugal@utp.ac.pa
                  </a>
                  )
                </li>
                <li>
                  <strong>Dr. Wedley Tejedor</strong> – Universidad Tecnológica
                  de Panamá (
                  <a
                    href="mailto:wedleys.tejedor@utp.ac.pa"
                    className="text-blue-600 underline"
                  >
                    wedleys.tejedor@utp.ac.pa
                  </a>
                  )
                </li>
                <li>
                  <strong>Dr. Vladimir Villarreal</strong> – Universidad
                  Tecnológica de Panamá (
                  <a
                    href="mailto:vladimir.villarreal@utp.ac.pa"
                    className="text-blue-600 underline"
                  >
                    vladimir.villarreal@utp.ac.pa
                  </a>
                  )
                </li>
                <li>
                  <strong>Dr. Javier Bajo Pérez</strong> – Universidad
                  Politécnica de Madrid (
                  <a
                    href="mailto:jbajo@fi.upm.es"
                    className="text-blue-600 underline"
                  >
                    jbajo@fi.upm.es
                  </a>
                  )
                </li>
                <li>
                  <strong>Dr. Antonio González</strong> – Instituto Tecnológico
                  de Costa Rica (
                  <a
                    href="mailto:antonio.gonzalez@itcr.ac.cr"
                    className="text-blue-600 underline"
                  >
                    antonio.gonzalez@itcr.ac.cr
                  </a>
                  )
                </li>
                <li>
                  <strong>Dr. Juan Francisco De Paz</strong> – Universidad de
                  Salamanca (
                  <a
                    href="mailto:fcofds@usal.es"
                    className="text-blue-600 underline"
                  >
                    fcofds@usal.es
                  </a>
                  )
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#e0b02e] py-12 px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-10">
            {t.colaboradores}
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
            {[
              {
                src: "/img/wici/Patrocinadores/Firma_TEC.webp",
                alt: "Firma TEC",
              },
              {
                src: "/img/wici/Patrocinadores/Grupo_OEG.webp",
                alt: "Grupo OEG",
              },
              {
                src: "/img/wici/Patrocinadores/Logo_ESALAB.webp",
                alt: "ESALAB",
              },
              {
                src: "/img/wici/Patrocinadores/Logo_Robotsis.webp",
                alt: "Robotsis",
              },
            ].map((s, i) => (
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
