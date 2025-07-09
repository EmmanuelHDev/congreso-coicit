import React from "react";
import { useWiciLanguage } from "./WiciLanguageContext";

const texts = {
  es: {
    titulo: "Envío de Trabajos",
    call: "Convocatoria de Artículos",
    descripcion1:
      "La Universidad Tecnológica de Panamá (UTP), Centro Regional de Veraguas, invita a la comunidad científica nacional e internacional a enviar manuscritos originales e inéditos para el WICI-UTP ’2025, taller oficial de COICIT 2025.",
    descripcion2:
      "Todos los trabajos aceptados serán publicados en un número especial de PRISMA Tecnológico, revista multidisciplinaria de acceso abierto (DOAJ/Latindex) con revisión doble ciego.",
    guiaTitulo: "Guía para Manuscritos",
    guia: [
      "Extensión máxima: 6 páginas (plantilla Word PRISMA).",
      "Idiomas: español o inglés. Resúmenes y palabras clave en ambos.",
      "Plantillas disponibles en PRISMA UTP o el sitio del WICI.",
      "Envío vía Microsoft CMT.",
      "Revisión doble ciego por al menos 2 miembros del comité científico.",
    ],
    fechasTitulo: "Fechas Importantes",
    fechas: [
      "Fecha límite de envío: 1 de septiembre de 2025",
      "Notificación de aceptación: 29 de septiembre de 2025",
      "Versión final: 3 de octubre de 2025",
      "Registro de autores: 8 de octubre de 2025",
      "Fecha del evento: 16 de octubre de 2025",
    ],
    ubicacionTitulo: "Lugar del Evento",
    ubicacionTexto:
      "El taller se realizará en el Salón Galo Chang, UTP Veraguas, de forma presencial y virtual.",
    contactoTitulo: "Contacto",
    contactos: ["wici.ve@utp.ac.pa"],
  },
  en: {
    titulo: "Submission",
    call: "Call for Papers",
    descripcion1:
      "La Universidad Tecnológica de Panamá (UTP), Centro Regional de Veraguas, invites the national and international scientific community to submit original, unpublished manuscripts to WICI-UTP ’2025, the official workshop of COICIT 2025.",
    descripcion2:
      "All accepted papers will be published in a special issue of PRISMA Tecnológico, an open-access, multidisciplinary journal indexed in DOAJ and Latindex with rigorous double-blind peer review.",
    guiaTitulo: "Manuscript Guidelines",
    guia: [
      "Maximum 6 pages (PRISMA Word template).",
      "Languages: Spanish or English. Abstracts and keywords in both.",
      "Templates available on PRISMA UTP or WICI website.",
      "Submission via Microsoft CMT.",
      "Double-blind review by at least 2 Scientific Committee members.",
    ],
    fechasTitulo: "Important Dates",
    fechas: [
      "Submission Deadline: September 1, 2025",
      "Acceptance Notification: September 29, 2025",
      "Camera-Ready: October 3, 2025",
      "Author Registration: October 8, 2025",
      "Workshop Date: October 16, 2025",
    ],
    ubicacionTitulo: "Venue",
    ubicacionTexto:
      "The workshop will take place at the Salón Galo Chang, UTP Veraguas, both onsite and virtually.",
    contactoTitulo: "Contact",
    contactos: ["wici.ve@utp.ac.pa"],
  },
};

const SubmissionMainContent = () => {
  const { lang } = useWiciLanguage();
  const t = texts[lang];

  return (
    <main className="mt-24 bg-white">
      <section className="relative bg-[url('/img/wici/heroWICI.png')] bg-center bg-no-repeat bg-cover h-[40vh] w-full">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-start justify-start px-4 md:px-32 pt-16">
          <h1 className="text-white text-3xl font-bold bg-black/50 px-4 py-2 w-full md:w-[28rem]">
            {t.titulo}
          </h1>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8 lg:px-24 bg-white text-gray-800 leading-relaxed">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[#e0b02e] text-2xl font-bold mb-4">{t.call}</h2>
          <p>{t.descripcion1}</p>
          <p className="mt-4">{t.descripcion2}</p>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <h3 className="text-xl font-semibold mb-3">{t.guiaTitulo}</h3>
          <div className="bg-gray-50 rounded-xl shadow p-6 mb-6 border border-gray-200 flex flex-col md:flex-row items-center gap-6">
            <ul className="list-disc list-inside space-y-1 flex-1">
              {t.guia.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <img
              src="/img/wici/Prisma.jpg"
              alt="PRISMA Tecnológico"
              className="w-40 h-auto rounded-xl border border-gray-200 shadow-md"
              style={{ background: "#fff" }}
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <h3 className="text-xl font-semibold mb-3">{t.fechasTitulo}</h3>
          <div className="bg-gray-50 rounded-xl shadow p-6 mb-6 border border-gray-200">
            <ul className="space-y-1">
              {t.fechas.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <h3 className="text-xl font-semibold mb-3">{t.ubicacionTitulo}</h3>
          <div className="bg-gray-50 rounded-xl shadow p-6 mb-6 border border-gray-200">
            <p>{t.ubicacionTexto}</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-8 mb-4">
          <h3 className="text-xl font-semibold mb-3">{t.contactoTitulo}</h3>
          <div className="bg-gray-50 rounded-xl shadow p-6 border border-gray-200">
            <ul>
              {t.contactos.map((correo, i) => (
                <li key={i}>
                  <a
                    href={`mailto:${correo}`}
                    className="text-blue-700 hover:underline"
                  >
                    {correo}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SubmissionMainContent;
