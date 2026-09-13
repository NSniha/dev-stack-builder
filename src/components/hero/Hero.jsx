import heroImage from "../../assets/images/hero-image.png";

const jakartaFont = {
  fontFamily: '"Plus Jakarta Sans", sans-serif',
};

const gradientTextStyle = {
  backgroundImage: "var(--brand-gradient)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
};

const Hero = () => {
  return (
    <section id="home" className="w-full overflow-hidden bg-white">
      <div className="mx-auto grid max-w-304 grid-cols-1 items-center px-5 pt-9 pb-2 sm:px-6 sm:pt-11 sm:pb-6 md:pt-12 md:pb-8 lg:min-h-107.5 lg:grid-cols-[1.08fr_0.92fr] lg:gap-3 lg:px-6 lg:py-7 xl:min-h-110 xl:px-0 xl:py-7">

        {/* =============== Hero Content ===================== */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 style={jakartaFont} className="max-w-175 text-[35px] font-bold leading-[1.14] tracking-[-1.2px] text-[#10182c] sm:text-[46px] md:text-[54px] lg:text-[64px] lg:leading-[1.27] lg:tracking-[-2.5px] xl:text-[66px]">
            Build Smarter with
            <span style={gradientTextStyle} className="mt-0.75 block">
              The Right Tech Stack
            </span>
          </h1>

          <p className="mt-5 max-w-156.25 font-['Inter',sans-serif] text-[14px] font-normal leading-[1.65] text-[#536078] sm:mt-5 sm:text-[16px] md:text-[17px] lg:mt-7 lg:text-[18px] lg:leading-[1.58]">
            Discover modern frontend, backend, database, and development tools to create the perfect stack for your next project with speed, confidence, and flexibility.
          </p>

          <div className="mt-7 flex w-full max-w-97.5 items-center justify-center gap-2.5 sm:mt-8 sm:max-w-105 sm:gap-3 lg:mt-9 lg:max-w-none lg:justify-start lg:gap-3.5">
            <a href="#technologies" style={jakartaFont} className="brand-gradient-bg flex h-11 flex-1 items-center justify-center whitespace-nowrap rounded-[9px] px-3 text-[12px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(229,22,118,0.24)] sm:h-12 sm:text-[13px] lg:h-12 lg:w-51.25 lg:flex-none lg:px-5 lg:text-[14px]">
              Explore Technologies
            </a>

            <a href="#about" style={jakartaFont} className="flex h-11 flex-1 items-center justify-center whitespace-nowrap rounded-[9px] border border-[#d9dee7] bg-white px-3 text-[12px] font-medium text-[#3f4b63] transition-all duration-300 hover:border-[#e51676] hover:text-[#e51676] sm:h-12 sm:text-[13px] lg:h-12 lg:w-43.75 lg:flex-none lg:px-5 lg:text-[14px]">
              Learn More
            </a>
          </div>
        </div>

        {/* =============== Hero Image ================= */}
        <div className="mt-1 flex w-full items-center justify-center sm:mt-2 md:mt-3 lg:mt-0 lg:justify-end">
          <img src={heroImage} alt="Development technology stack illustration" className="block h-auto w-full max-w-78.75 object-contain sm:max-w-92.5 md:max-w-106.25 lg:max-w-125 xl:max-w-133.75" />
        </div>

      </div>
    </section>
  );
};

export default Hero;