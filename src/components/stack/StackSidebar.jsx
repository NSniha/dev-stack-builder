import StackItem from "./StackItem";

const StackSidebar = ({ selectedStack, onRemove, onRemoveAll }) => {
  const selectedCount = selectedStack.length;

  const gradientTextStyle = {
    backgroundImage: "var(--brand-gradient)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
  };

  const jakartaFont = {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
  };

  return (
    <aside className="card h-fit rounded-2xl border border-[#e4eaf1] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.025)]">
      <div className="card-body p-5">

        {/* ======================= Stack Heading ======================= */}
        <div>
          <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[20px] font-bold tracking-[-0.3px] text-[#121a2e]">
            Your Stack
          </h3>

          <p className="mt-1 font-['Plus_Jakarta_Sans',sans-serif] text-[12px] font-medium text-[#8a96aa]">
            {selectedCount === 0 ? "No technologies selected yet." : `${selectedCount} ${selectedCount === 1 ? "Technology" : "Technologies"} Selected`}
          </p>
        </div>

        {/* ======================= Empty State ======================= */}
        {selectedCount === 0 ? (
          <div className="mt-4 flex min-h-62.5 flex-col items-center justify-center rounded-[11px] border border-dashed border-[#dce3ed] px-4 text-center">

            <div style={{ background: "var(--brand-gradient)" }} className="flex h-13 w-13 items-center justify-center rounded-full p-[1.5px] mt-8">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#faf8ff]">
                <span style={gradientTextStyle} className="font-['Plus_Jakarta_Sans',sans-serif] text-[27px] font-light leading-none">
                  +
                </span>
              </div>
            </div>

            <h4 className="mt-5 font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-bold text-[#3f4b63]">
              Your stack is empty
            </h4>

            <p className="mt-2 max-w-55 font-['Inter',sans-serif] text-[12px] leading-[1.65] text-[#8a96aa]">
              Add technologies from the list to start building your ideal development stack.
            </p>
          </div>
        ) : (
          <>
            <div className="mt-4 flex flex-col gap-2.25">
              {selectedStack.map((technology) => (
                <StackItem key={technology.id} technology={technology} onRemove={onRemove} />
              ))}
            </div>

           <button type="button" onClick={onRemoveAll} style={jakartaFont} className="btn btn-outline mt-6 h-10.5 min-h-10.5 w-full rounded-lg border-[#ff9b9b] text-[13px] font-semibold normal-case text-[#f04444] shadow-none hover:border-[#f04444] hover:bg-[#fff4f4] hover:text-[#dc2626]">
                Remove All
            </button>
          </>
        )}

      </div>
    </aside>
  );
};

export default StackSidebar;