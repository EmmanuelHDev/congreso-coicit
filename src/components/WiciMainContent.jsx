import React from "react";
import { useWiciLanguage } from "./WiciLanguageContext";

const DateItem = ({ item }) => {
  if (typeof item === "string") return <li>{item}</li>;

  return (
    <li className="list-none">
      <div className="flex items-center gap-x-2 gap-y-1 flex-wrap md:flex-nowrap">
        <span className="font-semibold whitespace-nowrap">{item.label}</span>

        <div className="flex items-center gap-2">
          <span className="line-through text-gray-500 text-sm md:text-base whitespace-nowrap">
            {item.old}
          </span>

          <span className="inline-flex items-center rounded-md bg-yellow-100/80 px-2 py-0.5 text-xs md:text-sm font-extrabold text-yellow-900 whitespace-nowrap shrink-0">
            {item.new}
          </span>
        </div>
      </div>

      {!item.isKeynote && item.autores && item.autores.length > 0 && (
        <div className="text-white text-sm mb-4 group-hover:text-gray-100 transition-colors duration-300">
          <strong className="text-white group-hover:text-blue-200 transition-colors duration-300">
            Autores:
          </strong>{" "}
          <span className="font-bold">{item.autores.join(", ")}</span>
        </div>
      )}
    </li>
  );
};

const WiciMainContent = () => {
  const { t, lang } = useWiciLanguage();

  return (
    <main>
      <section className="relative bg-[url(/img/wici/heroWICI.png)] bg-center bg-no-repeat bg-cover h-[80vh] lg:h-screen">
        <img
          src="/img/wici/WICI_logo.webp"
          alt="WICI Logo"
          className="absolute z-20 left-4 md:left-8 top-[calc(3.5rem+2px)] md:top-[4.5rem] w-16 md:w-24 lg:w-32 h-auto object-contain drop-shadow-2xl pointer-events-none select-none transition-all"
          style={{ background: "transparent" }}
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute z-10 text-white px-4 left-1 lg:left-16
                     top-[58%] md:top-1/2 lg:top-[65%] -translate-y-1/2
                     w-[310px] md:w-[660px] lg:w-[720px] min-h-[312px]
                     flex flex-col justify-center text-left bg-black/50 rounded-2xl"
        >
          <div className="flex-1 flex flex-col justify-center md:pr-4">
            <h1 className="text-2xl md:text-4xl font-bold leading-snug">
              {t.hero.titulo}{" "}
              <strong className="text-[#e0b02e]">{t.hero.nombre}</strong>
            </h1>
            <p className="text-base mt-2">{t.hero.ubicacion}</p>
            <p className="mt-4 text-lg">{t.hero.fecha}</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:px-8 lg:px-16 bg-white">
        <div className="max-w-screen-md mx-auto">
          {/* Botones arriba del Call for Papers */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
            {/* Botón para ir a Exposiciones */}
            <a
              href="/Exposiciones"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#e0b02e]/20 via-[#f1b315]/25 to-[#e0b02e]/20 hover:from-[#e0b02e]/40 hover:via-[#f1b315]/45 hover:to-[#e0b02e]/40 text-[#e0b02e] hover:text-[#f1b315] px-3 py-2 sm:px-5 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-[#e0b02e]/30 hover:border-[#f1b315]/50 backdrop-blur-sm group w-full sm:w-auto min-w-0"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:scale-110 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="tracking-wide text-center truncate">{t.botones?.ver_exposiciones || 'Ver Exposiciones'}</span>
            </a>

            {/* Botón para descargar PDF */}
            <button
              onClick={() => window.open('/WICI_PONENCIAS_FINAL.pdf', '_blank')}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#e0b02e]/20 via-[#f1b315]/25 to-[#e0b02e]/20 hover:from-[#e0b02e]/40 hover:via-[#f1b315]/45 hover:to-[#e0b02e]/40 text-[#e0b02e] hover:text-[#f1b315] px-3 py-2 sm:px-5 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-[#e0b02e]/30 hover:border-[#f1b315]/50 backdrop-blur-sm group w-full sm:w-auto min-w-0"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:scale-110 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="tracking-wide text-center truncate">{t.botones?.descargar_programa || 'Descargar Programa WICI 2025'}</span>
            </button>
          </div>

          <h2 className="text-[#e0b02e] text-2xl font-bold mb-4">
            {t.call.titulo}
          </h2>
          <p className="text-gray-800 leading-relaxed">{t.call.texto}</p>
          <p className="text-gray-800 leading-relaxed">{t.call.texto2}</p>
          <p className="text-gray-800 leading-relaxed">{t.call.texto3}</p>
          <p className="text-gray-800 leading-relaxed">{t.call.texto4}</p>
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

          <div className="bg-gray-50 rounded-xl shadow p-4 mb-6 border border-gray-200
                          flex flex-col md:flex-row md:items-start gap-8">
            {/* Izquierda: fechas */}
            <ul className="list-disc list-inside flex-1 space-y-1 md:space-y-2 text-base md:text-lg">
              {t.fechas.items.map((item, idx) => (
                <DateItem key={idx} item={item} />
              ))}
            </ul>

            {/* Derecha: solo imagen + link debajo */}
            <div className="flex flex-col items-center md:w-[260px]">
              <a
                href="https://revistas.utp.ac.pa/index.php/id-tecnologico"
                target="_blank"
                rel="noopener noreferrer"
                title="I + D Tecnológico"
                className="focus:outline-none"
              >
                <img
                  src="/img/wici/I+D.webp"
                  alt="PRISMA Tecnológico"
                  className="w-24 md:w-32 h-auto rounded-xl border border-gray-200 shadow hover:scale-105 transition-transform"
                  style={{ background: "#fff" }}
                />
              </a>
              <a
                href="/RIDTEC-Plantilla-manuscrito-2025.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline font-medium mt-2"
              >
                {lang === "es"
                  ? "Descargar Plantilla Word I+D"
                  : "Download I+D Word template"}
              </a>
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
    </main>
  );
};

export default WiciMainContent;
