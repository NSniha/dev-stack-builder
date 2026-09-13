const StackItem = ({ technology, onRemove }) => {
  const { id, name, category, iconUrl } = technology;

  return (
    <div className="flex items-center justify-between gap-3 rounded-[10px] border border-[#e2e8f0] bg-white px-3 py-2.75 transition-all duration-200 hover:border-[#d7dde7] hover:shadow-sm">
      <div className="flex min-w-0 items-center gap-3">
        <img src={iconUrl} alt={`${name} logo`} className="h-10 w-10 shrink-0 object-contain" />

        <div className="min-w-0">
          <h4 className="truncate font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-bold text-[#182033]">
            {name}
          </h4>

          <p className="mt-0.5 font-['Plus_Jakarta_Sans',sans-serif] text-[10px] font-medium text-[#8a96aa]">
            {category}
          </p>
        </div>
      </div>

      <button type="button" onClick={() => onRemove(id)} aria-label={`Remove ${name} from stack`} className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 text-[#8fa0b8] outline-none transition-all duration-200 hover:bg-[#fff1f3] hover:text-[#e84b5f] focus:outline-none">
        <svg viewBox="0 0 24 24" className="h-5.25 w-5.25" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M6 6L18 18" />
          <path d="M18 6L6 18" />
        </svg>
      </button>
    </div>
  );
};

export default StackItem;