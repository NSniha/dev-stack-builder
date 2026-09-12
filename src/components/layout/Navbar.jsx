import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";

const navLinks = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "Technologies", href: "#technologies" },
  { id: 3, label: "Projects", href: "#projects" },
  { id: 4, label: "About", href: "#about" },
  { id: 5, label: "Contact", href: "#contact" },
];

const jakartaFont = {
  fontFamily: '"Plus Jakarta Sans", sans-serif',
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const handleNavClick = (label) => {
    setActiveLink(label);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#edf0f4] bg-white">
      <nav className="mx-auto flex h-14 max-w-304 items-center px-3 sm:px-5 md:h-20 md:px-6 xl:px-0" aria-label="Main navigation">

        {/* ================= Desktop Navbar =================== */}
        <div className="hidden w-full items-center justify-between md:flex">
          <a href="#home" onClick={() => handleNavClick("Home")} className="flex shrink-0 items-center" aria-label="Dev Stack home">
            <img src={logo} alt="Dev Stack" className="block h-auto w-34 object-contain" />
          </a>

          <ul className="flex items-center gap-7.5 lg:gap-7.75">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href} onClick={() => handleNavClick(link.label)} style={jakartaFont} className={`block py-2 text-[14px] font-semibold leading-none transition-colors duration-200 ${activeLink === link.label ? "text-[#e51676]" : "text-[#3f4b63] hover:text-[#e51676]"}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-5">
            <button type="button" style={jakartaFont} className="cursor-pointer border-0 bg-transparent p-0 text-[14px] font-semibold text-[#263249] transition-colors duration-200 hover:text-[#e51676]">
              Sign In
            </button>

            <button type="button" style={jakartaFont} className="brand-gradient-bg flex h-9.5 min-w-23 cursor-pointer items-center justify-center rounded-full border-0 px-5 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(229,22,118,0.22)]">
              Sign Up
            </button>
          </div>
        </div>

        {/* ================= Mobile Navbar ================= */}
        <div className="grid h-full w-full grid-cols-[0.8fr_1.2fr_1fr] items-center md:hidden place-self-start">

          {/* === Hamburger === */}
          <div className="flex items-center justify-start">
            <button type="button" onClick={() => setIsMenuOpen((prev) => !prev)} className="flex h-8 w-8 cursor-pointer items-center justify-start border-0 bg-transparent p-0 text-[#726f70]" aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isMenuOpen} aria-controls="mobile-navigation">
              {isMenuOpen ? (
                <svg viewBox="0 0 24 24" className="h-5.5 w-5.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <path d="M5 5L19 19" />
                  <path d="M19 5L5 19" />
                </svg>
              ) : (
                <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M4 8H28" />
                  <path d="M4 16H28" />
                  <path d="M4 24H28" />
                </svg>
              )}
            </button>
          </div>

          {/* === Mobile Logo === */}
          <a href="#home" onClick={() => handleNavClick("Home")} className="flex items-center justify-center" aria-label="Dev Stack home">
            <img src={logo} alt="Dev Stack" className="block h-auto w-23 object-contain max-[390px]:w-21.5 max-[350px]:w-19.5" />
          </a>

          {/* === Mobile Auth === */}
          <div className="flex items-center justify-end gap-2.5 max-[390px]:gap-1.75 max-[350px]:gap-1.25">
            <button type="button" style={jakartaFont} className="shrink-0 cursor-pointer border-0 bg-transparent p-0 text-[11px] font-semibold leading-none text-[#3b4252] transition-colors duration-200 hover:text-[#e51676] max-[350px]:text-[10px]">
              Sign In
            </button>

            <button type="button" style={jakartaFont} className="brand-gradient-bg flex h-7.5 min-w-15.5 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 px-2.75 text-[11px] font-semibold leading-none text-white transition-all duration-300 hover:shadow-[0_6px_16px_rgba(229,22,118,0.2)] max-[390px]:h-7.25 max-[390px]:min-w-14.5 max-[390px]:px-2.25 max-[390px]:text-[10px] max-[350px]:h-7 max-[350px]:min-w-13.5 max-[350px]:px-2">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* ================= Mobile Menu ================= */}
      <div id="mobile-navigation" className={`absolute left-0 top-full w-full overflow-hidden border-b border-[#edf0f4] bg-white shadow-[0_14px_30px_rgba(15,23,42,0.08)] transition-all duration-300 md:hidden ${isMenuOpen ? "visible max-h-82.5 translate-y-0 opacity-100" : "invisible max-h-0 -translate-y-2 opacity-0"}`}>
        <div className="mx-auto px-3 py-2 sm:px-5">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href} onClick={() => handleNavClick(link.label)} style={jakartaFont} className={`flex min-h-11 items-center border-b border-[#f1f2f4] text-[13px] font-semibold transition-colors duration-200 last:border-b-0 ${activeLink === link.label ? "text-[#e51676]" : "text-[#3f4b63] hover:text-[#e51676]"}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;