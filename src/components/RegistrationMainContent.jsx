import React from "react";
import Header from "./HeaderWici";
import { useWiciLanguage } from "./WiciLanguageContext";

const texts = {
  es: {
    titulo: "Registro de Participantes",
    desc: "El registro para el WICI 2025 será totalmente gratuito para todas las categorías. Pronto estará disponible el formulario de inscripción y las instrucciones completas.",
    boton: "Próximamente",
    tablaTitulo: "Categoría de Registro",
    tablaVirtual: "Costo",
    fila1: "General",
    fila2: "Estudiantes de posgrado",
    fila3: "Comité de Programa",
    fila5: "Máximo 3 contribuciones",
    free: "Gratis",
    nota: "* Los estudiantes deberán presentar una constancia o carné estudiantil durante el proceso de registro.",
  },
  en: {
    titulo: "Registration",
    desc: "Registration for WICI 2025 will be completely free for all categories. The registration form and full instructions will be available soon.",
    boton: "Coming soon",
    tablaTitulo: "Registration Category",
    tablaVirtual: "Fee",
    fila1: "General",
    fila2: "Postgraduate students",
    fila3: "Programme committee",
    fila5: "Maximum 3 contributions",
    free: "Free",
    nota: "* Students must provide proof of student status or student card during registration.",
  },
};

const RegistrationMainContent = () => {
  const { lang } = useWiciLanguage();
  const t = texts[lang];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="mt-24 bg-white flex-1">
        <section className="relative bg-[url('/img/wici/heroWICI.png')] bg-center bg-no-repeat bg-cover h-[40vh] w-full">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 flex items-start justify-start px-4 md:px-32 pt-16">
            <h1 className="text-white text-3xl font-bold bg-black/50 px-4 py-2 w-full md:w-[28rem]">
              {t.titulo}
            </h1>
          </div>
        </section>
        <section className="max-w-3xl mx-auto w-full py-12 px-4">
          <p className="text-gray-700 text-center text-lg mb-8">{t.desc}</p>
          <div className="flex justify-center mb-8">
            <button
              className={`
                font-bold text-xl rounded-xl px-10 py-4
                bg-[#f5e0a3] text-white shadow
                transition-all duration-200
                border-2 border-[#f5e0a3]
                hover:bg-transparent hover:text-[#d1b255] hover:border-[#d1b255]
                animate-pulse
              `}
              disabled
              style={{ cursor: "not-allowed", opacity: 1 }}
            >
              {t.boton}
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[350px] w-full bg-white shadow-md rounded-lg">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 bg-[#fff9ea] text-[#e0b02e] text-lg font-bold rounded-tl-lg">
                    {t.tablaTitulo}
                  </th>
                  <th className="text-right py-3 px-4 bg-[#fff9ea] text-[#e0b02e] text-lg font-bold rounded-tr-lg">
                    {t.tablaVirtual}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t px-4 py-3 font-semibold">{t.fila1}</td>
                  <td className="border-t px-4 py-3 text-right font-bold text-[#25b500]">{t.free}</td>
                </tr>
                <tr>
                  <td className="border-t px-4 py-3 font-semibold">{t.fila2}</td>
                  <td className="border-t px-4 py-3 text-right font-bold text-[#25b500]">{t.free}</td>
                </tr>
                <tr>
                  <td className="border-t px-4 py-3 font-semibold">{t.fila3}</td>
                  <td className="border-t px-4 py-3 text-right font-bold text-[#25b500]">{t.free}</td>
                </tr>
                <tr>
                  <td className="border-t px-4 py-3 font-semibold">{t.fila5}</td>
                  <td className="border-t px-4 py-3 text-right font-bold text-[#25b500]">{t.free}</td>
                </tr>
              </tbody>
            </table>
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
    </div>
  );
};

export default RegistrationMainContent;
