import React from "react";
import { useWiciLanguage } from "./WiciLanguageContext";

const texts = {
  es: {
    titulo: "Envío de Trabajos",
    call: "Instrucciones para Autores",
    descripcion1:
      "La Universidad Tecnológica de Panamá (UTP), Centro Regional de Veraguas, invita a la comunidad científica nacional e internacional a enviar manuscritos originales e inéditos para el WICI-UTP ’2025, taller oficial de COICIT 2025.",
    descripcion2: (
      <>
        Durante el WICI-UTPVE 2025 se seleccionarán los 10 trabajos más
        sobresalientes para postularlos a su publicación, en versión ampliada,
        dentro de un volumen especial de la Revista I+D Tecnológico de la UTP,
        reconocida como la principal publicación científica de la institución.
        Para su aceptación, los autores deberán ajustarse a las{" "}
        <a
          href="https://revistas.utp.ac.pa/index.php/id-tecnologico/politicas_id"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-blue-700 underline"
        >
          directrices y al proceso editorial
        </a>{" "}
        establecido por la revista.
      </>
    ),
    descripcion3:
      "Aquellos trabajos que no sean publicados en la revista se incluirán en la Memoria del WICI 2025, en formato de capítulo, la cual estará disponible en el repositorio institucional de la UTP.",
    guiaTitulo: "Guía para Manuscritos",
    guia: [
      [
        "Extensión máxima: 6 páginas (",
        {
          type: "link",
          text: "plantilla Word I+D",
          url: "https://ridda2.utp.ac.pa/bitstream/handle/123456789/11527/RIDTEC-Plantilla-manuscrito%20-2025.docx?sequence=4&isAllowed=y",
        },
        ").",
      ],
      "Idiomas: español o inglés. Resúmenes y palabras clave en ambos.",
      "Envío vía Microsoft CMT.",
      "Revisión doble ciego por al menos 2 miembros del comité científico.",
      "Checklist de envío:",
      "1) El envío no ha sido publicado previamente ni está en consideración en otra revista (o se explica en Comentarios al editor/a).",
      "2) El archivo de envío está en formato OpenOffice, Microsoft Word, RTF o WordPerfect.",
      "3) Siempre que sea posible, se proporcionan direcciones URL para las referencias.",
      "4) El texto es de interlineado sencillo; fuente de 12 puntos; usa cursiva en lugar de subrayado (excepto URLs); e ilustraciones/figuras/tablas están en su lugar dentro del texto.",
      [
        "5) El texto se adhiere a los requisitos estilísticos y bibliográficos resumidos en la plantilla de la revista (",
        {
          type: "link",
          text: "descargar plantilla",
          url: "https://revistas.utp.ac.pa/public/documentos-prisma/Instrucciones_para_los_autores_2018.pdf",
        },
        ").",
      ],
    ],
    fechasTitulo: "Fechas Importantes",
    fechas: [
      "Fecha límite de envío: 1 de septiembre de 2025",
      "Notificación de aceptación: 29 de septiembre de 2025",
      "Versión final: 3 de octubre de 2025",
      "Registro de autores: 8 de octubre de 2025",
      "Fecha del evento: 16 de octubre de 2025",
    ],
    plataformaTitulo: "Plataforma de Envíos",
    plataformaTexto:
      "Los envíos de manuscritos se realizarán a través de la plataforma Microsoft CMT.",
    ubicacionTitulo: "Lugar del Evento",
    ubicacionTexto:
      "El taller se realizará en el Salón Galo Chang, UTP Veraguas, de forma presencial y virtual.",
    contactoTitulo: "Contacto",
    contactos: ["mauricio.hooper@utp.ac.pa", "wici.ve@utp.ac.pa"],
    submitTitulo: "Dónde y Cómo Enviar",
    submitTexto:
      "El envío de manuscritos se realizará exclusivamente a través de la plataforma Microsoft CMT. Debe crear una cuenta (si no la tiene) y seguir los pasos indicados. El enlace de envío estará disponible próximamente aquí.",
    submitPasos: [
      "Regístrese o inicie sesión en la plataforma oficial: ",
      "Acceda al portal de envíos aquí: ",
      "Siga las instrucciones y complete su envío según la guía para autores.",
    ],
    cmtTitulo: "Reconocimiento a Microsoft CMT",
    cmtAck: `The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.`,
  },
  en: {
    titulo: "Submission",
    call: "Instructions for Authors",
    descripcion1:
      "La Universidad Tecnológica de Panamá (UTP), Centro Regional de Veraguas, invites the national and international scientific community to submit original, unpublished manuscripts to WICI-UTP ’2025, the official workshop of COICIT 2025.",
    descripcion2: (
      <>
        During WICI-UTPVE 2025, the 10 most outstanding papers will be selected
        for submission, in extended version, to a special volume of the I+D
        Tecnológico Journal of UTP, recognized as the institution’s most
        prestigious scientific journal. To be accepted, these articles must
        comply with{" "}
        <a
          href="https://revistas.utp.ac.pa/index.php/id-tecnologico/politicas_id"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-blue-700 underline"
        >
          the journal’s editorial guidelines and review process.
        </a>{" "}
      </>
    ),
    descripcion3:
      "The papers that are not published in the journal will be part of the WICI 2025 Memory, in chapter format, available in the institutional repository of the UTP.",
    guiaTitulo: "Manuscript Guidelines",
    guia: [
      [
        "Maximum 6 pages (",
        {
          type: "link",
          text: "I+D Word template",
          url: "https://ridda2.utp.ac.pa/bitstream/handle/123456789/11527/RIDTEC-Plantilla-manuscrito%20-2025.docx?sequence=4&isAllowed=y",
        },
        ").",
      ],
      "Languages: Spanish or English. Abstracts and keywords in both.",
      "Submission via Microsoft CMT.",
      "Double-blind review by at least 2 Scientific Committee members.",
      "Submission Checklist:",
      "Manuscript Guidelines",
      "The submission has not been previously published nor submitted elsewhere (or this is explained in the Comments to the Editor).",
      "The submission file is in OpenOffice, Microsoft Word, RTF, or WordPerfect format.",
      "URLs are provided for references wherever possible.",
      "The text is single-spaced; 12-point font; italics instead of underlining (except for URLs); and all illustrations/figures/tables appear in-place within the text.",
      [
        "The text adheres to the stylistic and bibliographic requirements outlined in the journal template (",
        {
          type: "link",
          text: "download template",
          url: "https://revistas.utp.ac.pa/public/documentos-prisma/Instrucciones_para_los_autores_2018.pdf",
        },
        ").",
      ],
    ],
    fechasTitulo: "Important Dates",
    fechas: [
      "Submission Deadline: September 1, 2025",
      "Acceptance Notification: September 29, 2025",
      "Camera-Ready: October 3, 2025",
      "Author Registration: October 8, 2025",
      "Workshop Date: October 16, 2025",
    ],
    plataformaTitulo: "Submission Platform",
    plataformaTexto:
      "Manuscript submissions will be managed through the Microsoft CMT platform.",
    ubicacionTitulo: "Venue",
    ubicacionTexto:
      "The workshop will take place at the Salón Galo Chang, UTP Veraguas, both onsite and virtually.",
    contactoTitulo: "Contact",
    contactos: ["mauricio.hooper@utp.ac.pa", "wici.ve@utp.ac.pa"],
    submitTitulo: "Where and How to Submit",
    submitTexto:
      "Manuscript submission will be done exclusively through the Microsoft CMT platform. Please create an account (if you do not already have one) and follow the submission steps. The submission link will be available here soon.",
    submitPasos: [
      "Register or log in at the official platform: ",
      "Access the submission portal here: ",
      "Follow the instructions and complete your submission according to the author guidelines.",
    ],
    cmtTitulo: "Microsoft CMT Acknowledgment",
    cmtAck: `The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.`,
  },
};

const SubmissionMainContent = () => {
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

        <section className="px-4 py-12 md:px-8 lg:px-24 bg-white text-gray-800 leading-relaxed">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[#e0b02e] text-2xl font-bold mb-4">{t.call}</h2>
            <p>{t.descripcion1}</p>
            <p className="mt-4">{t.descripcion2}</p>
            <p className="mt-4">{t.descripcion3}</p>
          </div>

          {/* Guía para manuscritos */}
          <div className="max-w-3xl mx-auto mt-12">
            <h3 className="text-xl font-semibold mb-3">{t.guiaTitulo}</h3>
            <div className="bg-gray-50 rounded-xl shadow p-6 mb-6 border border-gray-200 flex flex-col md:flex-row items-center gap-6">
              <ul className="list-disc list-inside space-y-1 flex-1">
                {t.guia.map((item, i) => (
                  <li key={i}>
                    {Array.isArray(item)
                      ? item.map((part, idx) =>
                          typeof part === "string" ? (
                            part
                          ) : (
                            <a
                              key={idx}
                              href={part.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-700 underline font-medium"
                            >
                              {part.text}
                            </a>
                          )
                        )
                      : item}
                  </li>
                ))}
              </ul>
              <a
                href="https://revistas.utp.ac.pa/index.php/id-tecnologico"
                target="_blank"
                rel="noopener noreferrer"
                title="Ver revista I+D Tecnológico"
                className="focus:outline-none"
              >
                <img
                  src="/img/wici/I+D.webp"
                  alt="Portada I+D Tecnológico"
                  className="w-40 h-auto rounded-xl border border-gray-200 shadow-md hover:scale-105 transition-transform"
                  style={{ background: "#fff" }}
                />
              </a>
            </div>
          </div>

          {/* Fechas importantes */}
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

          {/* Plataforma de Envíos */}
          <div className="max-w-3xl mx-auto mt-12">
            <h3 className="text-xl font-semibold mb-3">{t.plataformaTitulo}</h3>
            <div className="bg-gray-50 rounded-xl shadow p-6 mb-6 border border-gray-200 flex flex-col md:flex-row items-center gap-6">
              <a
                href="https://cmt3.research.microsoft.com/WICI2025"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/wici/logo_cmt.webp"
                  alt="Microsoft CMT Logo"
                  className="w-36 h-auto rounded-md border border-gray-200 shadow-md mb-4 md:mb-0 hover:scale-105 transition-transform"
                  style={{ background: "#fff" }}
                />
              </a>
              <p className="flex-1 text-gray-800 text-lg">
                {t.plataformaTexto}
              </p>
            </div>
          </div>

          {/* Lugar del Evento */}
          <div className="max-w-3xl mx-auto mt-12">
            <h3 className="text-xl font-semibold mb-3">{t.ubicacionTitulo}</h3>
            <div className="bg-gray-50 rounded-xl shadow p-6 mb-6 border border-gray-200">
              <p>{t.ubicacionTexto}</p>
            </div>
          </div>

          {/* Dónde y cómo enviar */}
          <div className="max-w-3xl mx-auto mt-12">
            <h3 className="text-xl font-semibold mb-3">{t.submitTitulo}</h3>
            <div className="bg-gray-50 rounded-xl shadow p-6 mb-6 border border-gray-200">
              <p>{t.submitTexto}</p>
              <ul className="list-decimal list-inside mt-4 space-y-1">
                <li>
                  {t.submitPasos[0]}
                  <a
                    href="https://cmt3.research.microsoft.com/CMTSRM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline"
                  >
                    Microsoft CMT
                  </a>
                </li>
                <li>
                  {t.submitPasos[1]}
                  <a
                    href="https://cmt3.research.microsoft.com/WICI2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline"
                  >
                    https://cmt3.research.microsoft.com/WICI2025
                  </a>
                  {lang === "es" ? " (Enlace activo)" : " (Active link)"}
                </li>
                <li>{t.submitPasos[2]}</li>
              </ul>
            </div>
          </div>

          {/* Reconocimiento a CMT */}
          <div className="max-w-3xl mx-auto mt-8 mb-8">
            <h3 className="text-xl font-semibold mb-3">{t.cmtTitulo}</h3>
            <div className="bg-gray-50 rounded-xl shadow p-6 border border-gray-200">
              <p style={{ fontWeight: "normal", fontStyle: "normal" }}>
                {t.cmtAck}
              </p>
            </div>
          </div>

          {/* Contacto */}
          <div className="max-w-3xl mx-auto mt-8 mb-4">
            <h3 className="text-xl font-semibold mb-3">{t.contactoTitulo}</h3>
            <div className="bg-gray-50 rounded-xl shadow p-6 border border-gray-200">
              <p className="mb-1">
                {lang === "es"
                  ? "Para cualquier consulta, puede escribirnos al siguiente correo electrónico:"
                  : "For further information regarding the workshop, please contact us at:"}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {t.contactos.map((correo, idx) => (
                  <React.Fragment key={correo}>
                    <a
                      href={`mailto:${correo}`}
                      className="text-blue-700 hover:underline break-all"
                    >
                      {correo}
                    </a>
                    {idx < t.contactos.length - 1 && (
                      <span className="mx-1">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
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

export default SubmissionMainContent;
