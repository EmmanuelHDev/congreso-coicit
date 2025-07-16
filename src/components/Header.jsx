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
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/40 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-end md:justify-around">
          {/* Menú desktop */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li><a className="text-white transition hover:text-[#e0b02e]" href="/">Inicio</a></li>
                <li><a className="text-white transition hover:text-[#e0b02e]" href="/Programas">Programas</a></li>
                <li><a className="text-white transition hover:text-[#e0b02e]" href="/CoicitAreasTematicas">Áreas temáticas</a></li>
                <li><a className="text-white transition hover:text-[#e0b02e]" href="/WiciPages">WICI</a></li>
                <li><a className="text-white transition hover:text-[#e0b02e]" href="/ITransferT">I Transfer T</a></li>
                <li><a className="text-white transition hover:text-[#e0b02e]" href="/Tour">Tour</a></li>
                <li><a className="text-white transition hover:text-[#e0b02e]" href="/CoicitUbicacion">Ubicación</a></li>
              </ul>
            </nav>
          </div>

          {/* Botón contacto y hamburguesa */}
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-[rgb(241,179,15)] px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                href="#contacto"
              >
                Contacto
              </a>
            </div>

            {/* Botón hamburguesa */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen z-[999] bg-[#e0b02e] text-white flex flex-col px-6 py-4 overflow-y-auto">
          {/* Botón cerrar */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-3xl font-bold hover:text-black"
              aria-label="Cerrar menú"
            >
              &times;
            </button>
          </div>

          {/* Enlaces */}
          <nav className="mt-8" aria-label="Mobile Menu">
            <ul className="flex flex-col gap-6 text-lg">
              <li><a onClick={handleLinkClick} className="text-white transition hover:text-black" href="/">Inicio</a></li>
              <li><a onClick={handleLinkClick} className="text-white transition hover:text-black" href="/Programas">Programas</a></li>
              <li><a onClick={handleLinkClick} className="text-white transition hover:text-black" href="/CoicitAreasTematicas">Áreas temáticas</a></li>
              <li><a onClick={handleLinkClick} className="text-white transition hover:text-black" href="/WiciPages">WICI</a></li>
              <li><a onClick={handleLinkClick} className="text-white transition hover:text-black" href="/ITransferT">I Transfer T</a></li>
              <li><a onClick={handleLinkClick} className="text-white transition hover:text-black" href="/Tour">Tour</a></li>
              <li><a onClick={handleLinkClick} className="text-white transition hover:text-black" href="/CoicitUbicacion">Ubicación</a></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
