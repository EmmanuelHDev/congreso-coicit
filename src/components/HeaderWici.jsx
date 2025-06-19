import React, { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Barra superior de correos */}
      <div className="bg-[#e0b02e] text-white text-xs px-4 py-2 flex justify-center gap-6 sm:justify-end sm:gap-8">
        <a href="mailto:sipe@utp.ac.pa" className="hover:text-yellow-400 transition">sipe@utp.ac.pa</a>
        <a href="mailto:cristian.pinzon@utp.ac.pa" className="hover:text-yellow-400 transition">cristian.pinzon@utp.ac.pa</a>
      </div>

      {/* Menú principal */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? 'bg-black/20 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-end md:justify-around">
            {/* Menú desktop */}
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li><a className="text-[#022843] transition hover:text-white" href="#">Inicio</a></li>
                  <li><a className="text-[#022843] transition hover:text-white" href="#">Comités</a></li>
                  <li><a className="text-[#022843] transition hover:text-white" href="#">CFP WICI</a></li>
                  <li><a className="text-[#022843] transition hover:text-white" href="#">Envíos</a></li>
                  <li><a className="text-[#022843] transition hover:text-white" href="#">Registro</a></li>
                  <li><a className="text-[#022843] transition hover:text-white" href="#">Ubicación</a></li>
                </ul>
              </nav>
            </div>

            {/* Botón contacto y hamburguesa */}
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-[#022843] px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                  href="/"
                >
                  COICIT-2025
                </a>
              </div>

              {/* Botón hamburguesa móvil */}
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen z-[999] bg-[#022843] text-white flex flex-col px-6 py-4">
          {/* Botón cerrar */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-3xl font-bold hover:text-[#e0b02e]"
              aria-label="Cerrar menú"
            >
              &times;
            </button>
          </div>

          {/* Enlaces móviles */}
          <nav className="flex flex-col justify-evenly items-center h-full w-full mt-4" aria-label="Mobile Menu">
            <ul className="flex flex-col items-center gap-6 text-lg w-full">
              <li><a onClick={handleLinkClick} className="transition hover:text-[#e0b02e]" href="#">Inicio</a></li>
              <li><a onClick={handleLinkClick} className="transition hover:text-[#e0b02e]" href="#">Comités</a></li>
              <li><a onClick={handleLinkClick} className="transition hover:text-[#e0b02e]" href="#">CFP WICI</a></li>
              <li><a onClick={handleLinkClick} className="transition hover:text-[#e0b02e]" href="#">Envíos</a></li>
              <li><a onClick={handleLinkClick} className="transition hover:text-[#e0b02e]" href="#">Registro</a></li>
              <li><a onClick={handleLinkClick} className="transition hover:text-[#e0b02e]" href="#">Ubicación</a></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
