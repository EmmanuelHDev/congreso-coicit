import React, { useEffect, useState } from "react";
import { useWiciLanguage } from "./WiciLanguageContext";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useWiciLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => setIsMobileMenuOpen(false);

  const navItemClass = scrolled
    ? "text-white transition hover:text-white"
    : "text-[#022843] transition hover:text-[#e0b02e]";

  return (
    <header className="w-full fixed top-0 z-50">
      <div className="bg-[#e0b02e] text-white text-xs px-4 py-2 flex justify-center gap-6 sm:justify-end sm:gap-8">
        <a
          href="mailto:congreso.ve@utp.ac.pa"
          className="hover:text-yellow-400 transition"
        >
          wici.ve@utp.ac.pa
        </a>
      </div>

      <div
        className={`transition-all duration-300 ${
          scrolled ? "bg-black/20 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-end md:justify-around">
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a className={navItemClass} href="/WiciPages">
                      {t.nav.inicio}
                    </a>
                  </li>
                  <li>
                    <a className={navItemClass} href="/comites">
                      {t.nav.comites}
                    </a>
                  </li>
                  <li className="relative group">
                    <button
                      className={`${navItemClass} inline-flex items-center`}
                      aria-haspopup="true"
                    >
                      {t.nav.cfp}
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z" />
                      </svg>
                    </button>
                    <ul className="absolute top-full left-0 mt-2 min-w-[160px] rounded-lg bg-gradient-to-br from-white to-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-200">
                      <li>
                        <a
                          href="/WICI-UTPVE´2025_es.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-5 py-3 text-sm text-[#022843] hover:bg-[#e0b02e]/90 hover:text-white transition-all rounded-t-lg"
                        >
                          Español
                        </a>
                      </li>
                      <li>
                        <a
                          href="/WICI-UTPVE´2025_en.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-5 py-3 text-sm text-[#022843] hover:bg-[#e0b02e]/90 hover:text-white transition-all rounded-b-lg"
                        >
                          English
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a className={navItemClass} href="/Submission">
                      {t.nav.envios}
                    </a>
                  </li>
                  <li>
                    <a className={navItemClass} href="/Registration">
                      {t.nav.registro}
                    </a>
                  </li>
                  <li>
                    <a className={navItemClass} href="/Exposiciones">
                      {t.nav.exposiciones}
                    </a>
                  </li>
                  <li>
                    <a className={navItemClass} href="/WiciUbicacion">
                      {t.nav.ubicacion}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="border rounded p-1"
                style={{ background: "#e0b02e", color: "#022843" }}
                aria-label="Selecciona idioma"
              >
                <option value="es">ES</option>
                <option value="en">EN</option>
              </select>
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-[#022843] px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                  href="/"
                >
                  COICIT-2025
                </a>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen z-[999] bg-[#022843] text-white flex flex-col px-6 py-4">
          <div className="flex justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-3xl font-bold hover:text-[#e0b02e]"
              aria-label="Cerrar menú"
            >
              &times;
            </button>
          </div>
          <nav
            className="flex flex-col justify-evenly items-center h-full w-full mt-4"
            aria-label="Mobile Menu"
          >
            <ul className="flex flex-col items-center gap-6 text-lg w-full">
              <li>
                <a
                  onClick={handleLinkClick}
                  className="transition hover:text-[#e0b02e]"
                  href="/WiciPages"
                >
                  {t.nav.inicio}
                </a>
              </li>
              <li>
                <a
                  onClick={handleLinkClick}
                  className="transition hover:text-[#e0b02e]"
                  href="/comites"
                >
                  {t.nav.comites}
                </a>
              </li>
              <li>
                <span className="text-white font-bold">{t.nav.cfp}</span>
                <ul className="pl-4 mt-2">
                  <li>
                    <a
                      href="/WICI-UTPVE´2025_es.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm hover:text-[#e0b02e]"
                    >
                      Español
                    </a>
                  </li>
                  <li>
                    <a
                      href="/WICI-UTPVE´2025_en.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm hover:text-[#e0b02e]"
                    >
                      English
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  onClick={handleLinkClick}
                  className="transition hover:text-[#e0b02e]"
                  href="/Submission"
                >
                  {t.nav.envios}
                </a>
              </li>
              <li>
                <a
                  onClick={handleLinkClick}
                  className="transition hover:text-[#e0b02e]"
                  href="/Registration"
                >
                  {t.nav.registro}
                </a>
              </li>
              <li>
                <a
                  onClick={handleLinkClick}
                  className="transition hover:text-[#e0b02e]"
                  href="/Exposiciones"
                >
                  {t.nav.exposiciones}
                </a>
              </li>
              <li>
                <a
                  onClick={handleLinkClick}
                  className="transition hover:text-[#e0b02e]"
                  href="/WiciUbicacion"
                >
                  {t.nav.ubicacion}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
