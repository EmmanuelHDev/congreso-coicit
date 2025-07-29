import { FaGem, FaCrown, FaMedal, FaStar, FaTrophy, FaAward, FaHandHoldingHeart } from "react-icons/fa";

const sponsors = {
  organizer: [
    { name: "UTP", src: "/img/wici/Patrocinadores/Logo_UTP.webp" },
  ],
  nivel1: [
    // { name: "RobotSIS", src: "/img/wici/Patrocinadores/Logo_Robotsis.webp", label: "Diamond" },
    // { name: "Firma TEC", src: "/img/wici/Patrocinadores/Firma_TEC.webp", label: "Platinium" },
    // { name: "Grupo OEG", src: "/img/wici/Patrocinadores/Grupo_OEG.webp", label: "Premium" },
  ],
  nivel2: [
    { name: "Logic Studio", src: "/img/coicit/patrocinadores/logicstudio-1.png", label: "Gold" },
    { name: "Parmigiana", src: "/img/coicit/patrocinadores/parmigiana.png", label: "Bronze" },
    // { name: "ESALAB", src: "/img/wici/Patrocinadores/Logo_ESALAB.webp", label: "Gold" },
    // { name: "RobotSIS", src: "/img/wici/Patrocinadores/Logo_Robotsis.webp", label: "Silver" },
    // { name: "Firma TEC", src: "/img/wici/Patrocinadores/Firma_TEC.webp", label: "Bronze" },
  ],
  nivel3: [
    // Donantes u otros a futuro
    // { name: "Grupo OEG", src: "/img/wici/Patrocinadores/Grupo_OEG.webp", label: "Donante" },
  ],
};

const LABEL_COLORS = {
  Diamond: "text-cyan-400",
  Platinium: "text-gray-300",
  Premium: "text-purple-400",
  Gold: "text-yellow-300",
  Silver: "text-gray-300",
  Bronze: "text-orange-400",
  Donante: "text-green-400",
};

const LABEL_ICONS = {
  Diamond: <FaGem className="inline mr-2" size={22} />,
  Platinium: <FaCrown className="inline mr-2" size={20} />,
  Premium: <FaMedal className="inline mr-2" size={20} />,
  Gold: <FaStar className="inline mr-2" size={20} />,
  Silver: <FaTrophy className="inline mr-2" size={19} />,
  Bronze: <FaAward className="inline mr-2" size={19} />,
  Donante: <FaHandHoldingHeart className="inline mr-2" size={19} />,
};

function Badge({ label }) {
  return (
    <span className={`flex items-center justify-center gap-2 text-lg font-semibold mt-4 mb-2 select-none ${LABEL_COLORS[label] || "text-gray-300"}`}>
      {LABEL_ICONS[label] || null}
      <span className="uppercase tracking-widest">{label}</span>
    </span>
  );
}

const Category = ({ title, sponsors, logoSize }) => (
  sponsors.length > 0 && (
    <div className="mb-20 w-full">
      <h3 className="text-white text-2xl font-bold mb-10 text-center">{title}</h3>
      <div className="flex flex-row flex-wrap justify-center gap-x-24 gap-y-14">
        {sponsors.map(({ name, src, label }, i) => (
          <div key={name + i} className="flex flex-col items-center">
            <img
              src={src}
              alt={name}
              className={`${logoSize} object-contain transition-transform duration-200 hover:scale-105`}
              style={{
                maxWidth: logoSize === "h-[230px]" ? "420px"
                        : logoSize === "h-[160px]" ? "320px"
                        : "210px",
                minWidth: "140px",
                width: "100%",
                background: "none",
                marginBottom: 0,
                borderRadius: "0px"
              }}
            />
            {label && <Badge label={label} />}
          </div>
        ))}
      </div>
    </div>
  )
);

export default function PatrocinadoresCoicit() {
  return (
    <section
      className="py-36 w-full flex flex-col items-center"
      style={{
        background: "linear-gradient(145deg, #07182e 0%, #0f2946 50%, #17395b 100%)",
        minHeight: "100vh"
      }}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-3 text-center tracking-tight">
          Patrocinadores COICIT 2025
        </h2>
        <div className="w-full flex justify-center mb-20">
          <div style={{ width: 88, height: 5, background: "#16a8f8", borderRadius: 10 }} />
        </div>
        {/* ORGANIZADOR */}
        <div className="flex flex-col items-center mb-24">
          <img
            src={sponsors.organizer[0].src}
            alt="UTP"
            className="h-[250px] sm:h-[265px] object-contain mb-6"
            style={{ maxWidth: "420px", width: "100%" }}
          />
          <span className="text-white text-2xl font-semibold mt-2 mb-0">Organizador</span>
          <span className="text-white text-xl font-normal">{sponsors.organizer[0].name}</span>
        </div>
        {/* DIVISOR */}
        <hr className="w-full max-w-4xl border-t-2 border-white/50 my-8 mx-auto" />
        {/* SOLO NIVEL2 (GOLD, SILVER, BRONZE) */}
        <Category
          title="Gold, Silver & Bronze Sponsors"
          sponsors={sponsors.nivel2}
          logoSize="h-[160px] sm:h-[180px]"
        />
        {/* SI HAY DONANTES, DESCOMENTAR: */}
        {/* <hr className="w-full max-w-4xl border-t-2 border-white/50 my-8 mx-auto" />
        <Category
          title="Donante"
          sponsors={sponsors.nivel3}
          logoSize="h-[110px] sm:h-[120px]"
        /> */}
        {/* LOS DEMÁS NIVELES QUEDAN EN COMENTARIO */}
      </div>
    </section>
  );
}
