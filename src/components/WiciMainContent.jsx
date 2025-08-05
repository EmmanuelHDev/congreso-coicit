import React from "react";
import { useWiciLanguage } from "./WiciLanguageContext";

const sponsors = [
  {
    src: "/img/wici/Patrocinadores/Logo_UTP.webp",
    alt: "Universidad Tecnológica de Panamá",
    link: "https://utp.ac.pa",
  },
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
  {
    src: "/img/wici/Patrocinadores/Logo_UPSA.webp",
    alt: "UPSA",
    link: "https://www.upsa.es/",
  },
];

const WiciMainContent = () => {
  const { t, lang } = useWiciLanguage();

  return (
    <main>
      <section className="relative bg-[url(/img/wici/heroWICI.png)] bg-center bg-no-repeat bg-cover h-[80vh] lg:h-screen">
        {/* Logo arriba izquierda, fuera del cuadro */}
        <img
          src="/img/wici/WICI_logo.webp"
          alt="WICI Logo"
          className="
    absolute
    z-20
    left-4 md:left-8
    top-[calc(3.5rem+2px)] md:top-[4.5rem] 
    w-16 md:w-24 lg:w-32
    h-auto
    object-contain
    drop-shadow-2xl
    pointer-events-none
    select-none
    transition-all
  "
          style={{
            background: "transparent",
          }}
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Cuadro negro de bienvenida */}
        <div
          className="
  absolute z-10 text-white px-4 left-1 lg:left-16
  top-[58%] md:top-1/2 lg:top-[65%]  /* Cambia el top según el tamaño */
  -translate-y-1/2
  w-[310px] md:w-[660px] lg:w-[720px]
  h-auto min-h-[312px]
  flex flex-col justify-center text-left bg-black/50 rounded-2xl
"
        >
          <div className="flex-1 flex flex-col justify-center md:pr-4">
            <h1 className="text-2xl md:text-4xl font-bold leading-snug">
              {t.hero.titulo}{" "}
              <strong className="text-[#e0b02e]">{t.hero.nombre}</strong>
            </h1>
            <p className="text-base mt-2">{t.hero.ubicacion}</p>
            <p className="mt-4 text-lg">{t.hero.fecha}</p>
          </div>
          {/* Ya NO hay logo aquí */}
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
            {t.fechas.titulo}
          </h2>
          <div className="bg-gray-50 rounded-xl shadow p-4 mb-6 border border-gray-200 flex flex-col md:flex-row md:items-start gap-8">
            {/* Fechas importantes (izquierda) */}
            <ul className="list-disc list-inside flex-1 space-y-1 md:space-y-2 text-base md:text-lg">
              {t.fechas.items.map((fecha, idx) => (
                <li key={idx}>{fecha}</li>
              ))}
            </ul>
            {/* Bloque PRISMA (derecha, imagen y texto centrado vertical al lado) */}
            <div className="flex flex-row items-center md:w-[290px] gap-4">
              <a
                href="https://revistas.utp.ac.pa/index.php/prisma"
                target="_blank"
                rel="noopener noreferrer"
                title="PRISMA Tecnológico"
                className="focus:outline-none"
              >
                <img
                  src="/img/wici/Prisma.jpg"
                  alt="PRISMA Tecnológico"
                  className="w-24 md:w-32 h-auto rounded-xl border border-gray-200 shadow hover:scale-105 transition-transform"
                  style={{ background: "#fff" }}
                />
              </a>
              <div className="flex flex-col justify-center items-center text-base text-gray-800 text-center leading-tight">
                {lang === "es" ? (
                  <>
                    <span>Extensión máxima: 6 páginas</span>
                    <a
                      href="https://revistas.utp.ac.pa/public/documentos-prisma/Instrucciones_para_los_autores_2018.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 underline font-medium mt-1"
                    >
                      plantilla Word PRISMA
                    </a>
                  </>
                ) : (
                  <>
                    <span>Maximum 6 pages</span>
                    <a
                      href="https://revistas.utp.ac.pa/public/documentos-prisma/Instrucciones_para_los_autores_2018.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 underline font-medium mt-1"
                    >
                      PRISMA Word template
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto mt-8 mb-8">
        <h3 className="text-xl font-semibold mb-3">{t.cmt.titulo}</h3>
        <div className="bg-gray-50 rounded-xl shadow p-6 border border-gray-200">
          <p style={{ fontWeight: "normal", fontStyle: "normal" }}>
            {t.cmt.ack}
          </p>
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
      <section className="bg-[#e0b02e] py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          {lang === "es" ? "Colaboradores" : "Collaborators"}
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
                className="max-h-28 w-auto object-contain transition-transform hover:scale-105"
                style={{ background: "#fff", borderRadius: 16, padding: 10 }}
              />
            </a>
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
