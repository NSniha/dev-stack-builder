const TechnologyCard = ({ technology, onAdd, isAdded }) => {
  const { name, category, description, iconUrl, rating, difficulty, badge } = technology;

  const jakartaFont = {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
  };

  const getBadgeColor = () => {
    if (["Popular", "Top SQL", "Essential", "Robust", "Containers"].includes(badge)) return "border-[#cfe9ff] bg-[#eef8ff] text-[#1685d1]";
    if (["Versatile", "Standard"].includes(badge)) return "border-[#ccefe0] bg-[#ecfbf4] text-[#169b6b]";
    if (["Fast", "Ubiquitous"].includes(badge)) return "border-[#ffe1b5] bg-[#fff8eb] text-[#e87912]";
    if (badge === "Cache") return "border-[#ffd5da] bg-[#fff2f3] text-[#e5484d]";
    if (badge === "Modern") return "border-[#c9f0f5] bg-[#ecfcff] text-[#0891b2]";
    return "border-[#e6d5ff] bg-[#f6f0ff] text-[#8b5cf6]";
  };

  const addedCardStyle = isAdded
    ? {
        border: "1.5px solid transparent",
        background: "linear-gradient(#ffffff, #ffffff) padding-box, var(--brand-gradient) border-box",
      }
    : {};

  const addedButtonStyle = {
    border: "1.5px solid transparent",
    background: "linear-gradient(#ffffff, #ffffff) padding-box, var(--brand-gradient) border-box",
    fontFamily: '"Plus Jakarta Sans", sans-serif',
  };

  const gradientTextStyle = {
    backgroundImage: "var(--brand-gradient)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
  };

  return (
    <article style={addedCardStyle} className={`card h-full rounded-2xl bg-white transition-all duration-300 ${isAdded ? "shadow-[0_8px_24px_rgba(190,52,185,0.07)]" : "border border-[#e4eaf1] shadow-[0_2px_8px_rgba(15,23,42,0.025)] hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(15,23,42,0.07)]"}`}>
      <div className="card-body flex h-full gap-0 p-5 sm:p-5.5">

        {/* ================= Icon and Badge ================= */}
        <div className="flex items-start justify-between gap-3">
          <img src={iconUrl} alt={`${name} logo`} className="h-10.5 w-10.5 object-contain" />

          <span style={jakartaFont} className={`badge h-6.5 rounded-full border px-2.5 text-[10px] font-semibold ${getBadgeColor()}`}>
            {badge}
          </span>
        </div>

        {/* ================= Technology Content ================= */}
        <div className="mt-4">
          <h3 style={jakartaFont} className="text-[19px] font-bold leading-tight tracking-[-0.3px] text-[#111827]">
            {name}
          </h3>

          <p className="mt-2 font-['Inter',sans-serif] text-[13px] leading-[1.65] text-[#66758d]">
            {description}
          </p>
        </div>

        {/* ================= Card Bottom ================== */}
        <div className="mt-auto pt-4">
          <div className="border-t border-[#edf1f5] pt-3">

            {/* ==== Technology Details ==== */}
            <div className="flex items-center justify-between gap-2 pb-1">
              <span style={jakartaFont} className="badge h-6 rounded-[5px] border-0 bg-[#f3f6f9] px-2 text-[10px] font-medium text-[#536176]">
                {category}
              </span>

              <span style={jakartaFont} className="text-[10px] font-medium text-[#718096]">
                {difficulty}
              </span>

              <div className="flex shrink-0 items-center gap-1">
                <span className="text-[20px] leading-none text-[#fbbf24]">★</span>

                <span style={jakartaFont} className="text-[14px] font-bold text-[#3f4b5f]">
                  {rating}
                </span>
              </div>
            </div>

            {/* Add to Stack Button */}
            {isAdded ? (
              <div className="mt-3 w-full cursor-not-allowed">
                <button type="button" disabled style={addedButtonStyle} className="btn pointer-events-none h-11 min-h-11 w-full rounded-lg border-0 bg-white text-[12px] font-semibold normal-case shadow-none opacity-100">
                  <span className="flex items-center justify-center gap-1.75">
                    <svg viewBox="0 0 24 24" className="h-4.25 w-4.25 shrink-0" fill="none" stroke="#e51676" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5L9.2 16.5L19 6.5" />
                    </svg>

                    <span style={gradientTextStyle}>
                      Added to Stack
                    </span>
                  </span>
                </button>
              </div>
            ) : (
              <button type="button" onClick={() => onAdd(technology)} style={jakartaFont} className="btn mt-3 h-11 min-h-11 w-full cursor-pointer rounded-lg border-0 bg-[#080e1d] text-[12px] font-semibold normal-case text-white shadow-none hover:bg-[#161e30]">
                Add to Stack
              </button>
            )}

          </div>
        </div>

      </div>
    </article>
  );
};

export default TechnologyCard;