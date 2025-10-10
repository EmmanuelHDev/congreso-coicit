import { FaStar, FaAward, FaCrown } from "react-icons/fa";

const sponsors = {
  organizer: [{ name: "UTP", src: "/img/wici/Patrocinadores/Logo_UTP.webp" }],
  nivel1: [
    {
      name: "Ice Electronics",
      src: "/img/coicit/patrocinadores/Ice_Electronics.webp",
      label: "Platinium",
    },
    {
      name: "COOPEVE",
      src: "/img/coicit/patrocinadores/logo_blanco_COOPEVE.png",
      label: "Premium",
    },
  ],
  nivel2: [
    {
      name: "Logic Studio",
      src: "/img/coicit/patrocinadores/logicstudio-1.png",
      label: "Gold",
    },
    {
      name: "CENTRAL AZUCARERO LA VICTORIA, S.A.",
      src: "/img/coicit/patrocinadores/la_victoria_azul.png",
      label: "Gold",
    },
    {
      name: "AM",
      src: "/img/coicit/patrocinadores/am1.png",
      label: "Silver",
    },
    {
      name: "PAOLAS GOURMET",
      src: "/img/coicit/patrocinadores/Paolas-Gourmet-Silver.jpg",
      label: "Silver",
    },
    {
      name: "AEFC",
      src: "/img/coicit/patrocinadores/Logo_AEFC.png",
      label: "Silver",
    },
    {
      name: "INNOBUC",
      src: "/img/coicit/patrocinadores/innobuc logo 2020-16.png",
      label: "Silver",
    },
    {
      name: "ECOCASA",
      src: "/img/coicit/patrocinadores/GRUPO ECOCASA (1).png",
      label: "Silver",
    },
    {
      name: "DELIGRECIA",
      src: "/img/coicit/patrocinadores/Deli Grecia.png",
      label: "Silver",
    },
    {
      name: "Parmigiana",
      src: "/img/coicit/patrocinadores/parmigiana.png",
      label: "Bronze",
    },
    {
      name: "Acosta Reyes",
      src: "/img/coicit/patrocinadores/ARAI-T.png",
      label: "Bronze",
    },
  ],
  empresasAliadas: [
    {
      name: "Berlina Estate",
      src: "/img/coicit/patrocinadores/Berlina_Estate.png",
    },
    {
      name: "Panama Digital Gateway",
      src: "/img/coicit/patrocinadores/Panama_Digital_GateWay.jpg",
    },
    {
      name: "Consorcio Manhattan",
      src: "/img/coicit/patrocinadores/Consorcio Manhattan.jpg",
    },
    {
      name: "CONTINEX",
      src: "/img/coicit/patrocinadores/Logo Continex Int.jpeg",
    },
    {
      name: "CANAL DE PANAMA",
      src: "/img/coicit/patrocinadores/CANAL.jpg",
    },
    {
      name: "AES PANAMA",
      src: "/img/coicit/patrocinadores/Logo AES PANAMA.png",
    },
    {
      name: "Grupo Shahani",
      src: "/img/coicit/patrocinadores/LOGO_DE_GS._PNG-Grupo_Shahany-SF.png",
    },
    {
      name: "Grupo HANNA",
      src: "/img/coicit/patrocinadores/GRUPO_HANNA-SF.png",
    },
    {
      name: "CENTRO DE CONVENCIONES COOPEVE",
      src: "/img/coicit/patrocinadores/CEC logo variantes.png",
    },
    {
      name: "HOTEL MYKONOS",
      src: "/img/coicit/patrocinadores/Mykono_Logo.webp",
    },
  ],
  AliadosInnova: [
   {
      name: "MONZAD",
      src: "/img/coicit/patrocinadores/LOGO Monzad PNG.png",
    },
    {
      name: "ZOE MARKET",
      src: "/img/coicit/patrocinadores/LOGO ZOE MARKET AND SERVICE.png",
    },
    {
      name: "ECOFIL",
      src: "/img/coicit/patrocinadores/Ecofil_logo.png",
    },
    {
      name: "NATURANY",
      src: "/img/coicit/patrocinadores/Naturany-SF.png",
    },
    {
      name: "GREENPRINT",
      src: "/img/coicit/patrocinadores/Greenprint_logo.png",
    },
    {
      name: "DRONOIS",
      src: "/img/coicit/patrocinadores/Dronois_logo.png",
    },
    {
      name: "SILICON",
      src: "/img/coicit/patrocinadores/Silicon_logo.png",
    },
    {
      name: "AGRINCO",
      src: "/img/coicit/patrocinadores/agrinco_logo.png",
    },
    {
      name: "BNC LAB",
      src: "/img/coicit/patrocinadores/BNClab_logo-SF.png",
    },
    {
      name: "COFFEE SOLUTIONS",
      src: "/img/coicit/patrocinadores/CoffeeSolutions.png",
    },
    {
      name: "TALLER GARCIA",
      src: "/img/coicit/patrocinadores/TallerGarcia-SF.png",
    },
  ],
};

const LABEL_COLORS = {
  Platinium: "text-gray-200",
  Premium: "text-yellow-400", // base para el icono
  Gold: "text-yellow-300",
  Silver: "text-gray-300",
  Bronze: "text-orange-400",
};

const GRADIENT_TEXT = {
  Premium:
    "bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent",
  Platinium:
    "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent",
};

const LABEL_ICONS = {
  Platinium: <FaCrown className="inline mr-2" size={20} />,
  Premium: <FaCrown className="inline mr-2" size={20} />,
  Gold: <FaStar className="inline mr-2" size={20} />,
  Silver: <FaStar className="inline mr-2" size={18} />,
  Bronze: <FaAward className="inline mr-2" size={19} />,
};
const LOGO_HEIGHTS = {
  Platinium: "h-[110px] sm:h-[120px]",
  Premium: "h-[110px] sm:h-[120px]",
  Gold: "h-[85px] sm:h-[80px]",
  Silver: "h-[75px] sm:h-[80px]",
  Bronze: "h-[70px] sm:h-[85px]",
  "CENTRAL AZUCARERO LA VICTORIA, S.A.": "h-[200px] sm:h-[105px]",
  "Berlina Estate": "h-[120px] sm:h-[130px]",
  // Ajustes puntuales
  "AEFC": "h-[100px] sm:h-[110px]",
  "Acosta Reyes": "h-[100px] sm:h-[112px]",
  "Grupo Shahani": "h-[110px] sm:h-[120px]", 
  "MONZAD": "h-[130px] sm:h-[130px]",
  "ECOFIL": "h-[90px] sm:h-[110px]", 
  "NATURANY": "h-[160px] sm:h-[150px]",
  "BNC LAB": "h-[200px] sm:h-[220px]", 
  "Grupo HANNA": "h-[120px] sm:h-[130px]",
  "COFFEE SOLUTIONS": "h-[100px] sm:h-[190px]",
  "TALLER GARCIA": "h-[170px] sm:h-[180px]", 
  "ZOE MARKET": "h-[130px] sm:h-[130px]",
  "DELIGRECIA": "h-[100px] sm:h-[120px]",
  "CENTRO DE CONVENCIONES COOPEVE": "h-[110px] sm:h-[130px]",
};

function Badge({ label }) {
  const gradientClass = GRADIENT_TEXT[label];
  return (
    <span
      className={`flex items-center justify-center gap-2 text-lg font-semibold uppercase tracking-widest select-none ${
        LABEL_COLORS[label] || "text-gray-300"
      }`}
    >
      {LABEL_ICONS[label] || null}
      {gradientClass ? <span className={gradientClass}>{label}</span> : label}
    </span>
  );
}

const Category = ({ title, sponsors }) => {
  const logoBoxHeight = 120;
  const badgeBoxHeight = 46;
  const isResponsiveSection = title === "Empresas Aliadas" || title === "Aliados Innova";

  return (
    sponsors.length > 0 && (
      <div className={`w-full ${isResponsiveSection ? "mb-4" : "mb-20"}`}>
        {title && (
          <h3 className={`text-white font-bold mb-10 text-center ${
            isResponsiveSection
              ? "text-3xl sm:text-4xl" 
              : "text-2xl"
          }`}>
            {title}
          </h3>
        )}
        <div className={`${
          isResponsiveSection
            ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center max-w-5xl mx-auto"
            : "flex flex-row flex-wrap justify-center gap-x-24 gap-y-14"
        }`}>
          {sponsors.map(({ name, src, label }, i) => (
            <div
              key={name + i}
              className="flex flex-col items-center justify-end"
            >
              <div
                style={{
                  height: `${logoBoxHeight}px`,
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <img
                  src={src}
                  alt={name}
                  className={`${
                    LOGO_HEIGHTS[name] || LOGO_HEIGHTS[label] || "h-[110px]"
                  } object-contain transition-transform duration-200 hover:scale-105 ${
                    name === "MONZAD" ? "bg-white rounded-lg p-4" : ""
                  }`}
                  style={{
                    maxWidth: "260px",
                    minWidth: "80px",
                    width: "100%",
                    background: name === "MONZAD" ? "white" : "none",
                    marginBottom: 0,
                    borderRadius: name === "MONZAD" ? "8px" : "0px",
                    padding: name === "MONZAD" ? "16px" : "0",
                  }}
                />
              </div>
              <div
                style={{
                  height: `${badgeBoxHeight}px`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {label && <Badge label={label} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default function PatrocinadoresCoicit() {
  return (
    <section
      className="pt-20 pb-0 w-full flex flex-col items-center"
      style={{
        background:
          "linear-gradient(145deg, #07182e 0%, #0f2946 50%, #17395b 100%)",
        minHeight: "100vh",
      }}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-3 text-center tracking-tight">
          Patrocinadores COICIT 2025
        </h2>
        <div className="w-full flex justify-center mb-20">
          <div
            style={{
              width: 88,
              height: 5,
              background: "#16a8f8",
              borderRadius: 10,
            }}
          />
        </div>
        <div className="flex flex-col items-center mb-24">
          <img
            src={sponsors.organizer[0].src}
            alt="UTP"
            className="h-[190px] sm:h-[210px] object-contain mb-6"
            style={{ maxWidth: "380px", width: "100%" }}
          />
          <span className="text-white text-2xl font-semibold mt-2 mb-0">
            Organizador
          </span>
          <span className="text-white text-xl font-normal">
            {sponsors.organizer[0].name}
          </span>
        </div>
        <Category
          title="Diamond, Platinium & Premium Sponsors"
          sponsors={sponsors.nivel1}
        />
        <hr className="w-full max-w-4xl border-t-2 border-white/50 my-8 mx-auto" />
        <Category
          title="Gold, Silver & Bronze Sponsors"
          sponsors={sponsors.nivel2}
        />
        <hr className="w-full max-w-4xl border-t-2 border-white/50 my-8 mx-auto" />
        <Category
          title="Empresas Aliadas"
          sponsors={sponsors.empresasAliadas}
        />
        <hr className="w-full max-w-4xl border-t-2 border-white/50 my-8 mx-auto" />
        <Category
          sponsors={sponsors.AliadosInnova}
        />
      </div>
    </section>
  );
}
