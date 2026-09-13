import logo from "../../assets/images/logo.svg";

const jakartaFont = {
  fontFamily: '"Plus Jakarta Sans", sans-serif',
};

const productLinks = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "Technologies", href: "#technologies" },
  { id: 3, label: "Projects", href: "#projects" },
];

const companyLinks = [
  { id: 1, label: "About", href: "#about" },
  { id: 2, label: "Contact", href: "#contact" },
  { id: 3, label: "Careers", href: "#careers" },
];

const legalLinks = [
  { id: 1, label: "Privacy Policy", href: "#privacy" },
  { id: 2, label: "Terms of Service", href: "#terms" },
];

const Footer = () => {
  return (
    <footer className="border-t border-[#edf0f4] bg-white">
      <div className="mx-auto max-w-304 px-5 pt-15.5 pb-10 sm:px-6 lg:pt-16.5 xl:px-0">

        {/* Footer Main */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-17">

          {/* Brand */}
          <div className="max-w-102.5">
            <a href="#home" className="inline-flex items-center" aria-label="Dev Stack home">
              <img src={logo} alt="Dev Stack" className="h-auto w-31.5 object-contain" />
            </a>

            <p className="mt-4.5 max-w-98.75 font-['Inter',sans-serif] text-[14px] leading-[1.7] text-[#687892]">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <div className="mt-6.25 flex items-center gap-5.5">
              <a href="https://github.com" target="_blank" rel="noreferrer" style={jakartaFont} className="text-[14px] font-semibold text-[#34435a] transition-colors duration-200 hover:text-[#e51676]">
                GitHub
              </a>

              <a href="https://twitter.com" target="_blank" rel="noreferrer" style={jakartaFont} className="text-[14px] font-semibold text-[#34435a] transition-colors duration-200 hover:text-[#e51676]">
                Twitter
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={jakartaFont} className="text-[14px] font-semibold text-[#34435a] transition-colors duration-200 hover:text-[#e51676]">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 style={jakartaFont} className="text-[14px] font-bold uppercase tracking-[0.03em] text-[#111827]">
              Product
            </h3>

            <ul className="mt-4.5 flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} style={jakartaFont} className="text-[14px] font-medium text-[#687892] transition-colors duration-200 hover:text-[#e51676]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 style={jakartaFont} className="text-[14px] font-bold uppercase tracking-[0.03em] text-[#111827]">
              Company
            </h3>

            <ul className="mt-4.5 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} style={jakartaFont} className="text-[14px] font-medium text-[#687892] transition-colors duration-200 hover:text-[#e51676]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 style={jakartaFont} className="text-[14px] font-bold uppercase tracking-[0.03em] text-[#111827]">
              Legal
            </h3>

            <ul className="mt-4.5 flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} style={jakartaFont} className="text-[14px] font-medium text-[#687892] transition-colors duration-200 hover:text-[#e51676]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-13.75 border-t border-[#edf0f4] pt-7.5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p style={jakartaFont} className="text-[13px] font-medium text-[#94a3b8]">
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex items-center gap-6.5">
              <a href="#privacy" style={jakartaFont} className="text-[13px] font-medium text-[#94a3b8] transition-colors duration-200 hover:text-[#e51676]">
                Privacy
              </a>

              <a href="#terms" style={jakartaFont} className="text-[13px] font-medium text-[#94a3b8] transition-colors duration-200 hover:text-[#e51676]">
                Terms
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;