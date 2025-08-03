import { FaStar, FaAward, FaCrown } from "react-icons/fa";

const sponsors = {
  organizer: [{ name: "UTP", src: "/img/wici/Patrocinadores/Logo_UTP.webp" }],
  nivel1: [
    {
      name: "Ice Electronics",
      src: "/img/coicit/patrocinadores/Ice_Electronics.webp",
      label: "Platinium",
    },
  ],
  nivel2: [
    {
      name: "Logic Studio",
      src: "/img/coicit/patrocinadores/logicstudio-1.png",
      label: "Gold",
    },
    {
      name: "Parmigiana",
      src: "/img/coicit/patrocinadores/parmigiana.png",
      label: "Bronze",
    },
  ],
};

const LABEL_COLORS = {
  Platinium: "text-gray-200",
  Gold: "text-yellow-300",
  Bronze: "text-orange-400",
};
const LABEL_ICONS = {
  Platinium: <FaCrown className="inline mr-2" size={20} />,
  Gold: <FaStar className="inline mr-2" size={20} />,
  Bronze: <FaAward className="inline mr-2" size={19} />,
};
const LOGO_HEIGHTS = {
  Platinium: "h-[110px] sm:h-[120px]",
  Gold: "h-[85px] sm:h-[80px]",
  Bronze: "h-[70px] sm:h-[85px]",
};

function Badge({ label }) {
  return (
    <span
      className={`flex items-center justify-center gap-2 text-lg font-semibold uppercase tracking-widest select-none ${
        LABEL_COLORS[label] || "text-gray-300"
      }`}
    >
      {LABEL_ICONS[label] || null}
      {label}
    </span>
  );
}

const Category = ({ title, sponsors }) => {
  const logoBoxHeight = 120;
  const badgeBoxHeight = 46;

  return (
    sponsors.length > 0 && (
      <div className="mb-20 w-full">
        <h3 className="text-white text-2xl font-bold mb-10 text-center">
          {title}
        </h3>
        <div className="flex flex-row flex-wrap justify-center gap-x-24 gap-y-14">
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
                    LOGO_HEIGHTS[label] || "h-[90px]"
                  } object-contain transition-transform duration-200 hover:scale-105`}
                  style={{
                    maxWidth: "260px",
                    minWidth: "80px",
                    width: "100%",
                    background: "none",
                    marginBottom: 0,
                    borderRadius: "0px",
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
      className="py-36 w-full flex flex-col items-center"
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
        {/* ORGANIZADOR */}
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
        {/* NIVEL 1 */}
        <Category
          title="Diamond, Platinium & Premium Sponsors"
          sponsors={sponsors.nivel1}
        />
        <hr className="w-full max-w-4xl border-t-2 border-white/50 my-8 mx-auto" />
        {/* NIVEL 2 */}
        <Category
          title="Gold, Silver & Bronze Sponsors"
          sponsors={sponsors.nivel2}
        />
      </div>
    </section>
  );
}
