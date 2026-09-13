import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import Technologies from "./components/technologies/Technologies";

const ToastIcon = ({ type }) => {
  const iconStyles = {
    success: "bg-[#16b83e]",
    warning: "bg-[#f59e0b]",
    info: "bg-[#3b82f6]",
    error: "bg-[#ef4444]",
  };

  return (
    <span className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full text-white ${iconStyles[type] || "bg-[#8b5cf6]"}`}>
      {type === "success" ? (
        <svg viewBox="0 0 24 24" className="h-2.75 w-2.75" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.5L9.2 16.5L19 6.5" />
        </svg>
      ) : (
        <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[10px] font-bold">!</span>
      )}
    </span>
  );
};

const ToastCloseButton = ({ closeToast }) => {
  return (
    <button type="button" onClick={closeToast} aria-label="Close notification" className="ml-auto flex h-10 w-8 shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-[#718096] outline-none transition-colors duration-200 hover:text-[#111827]">
      <svg viewBox="0 0 24 24" className="h-5.25 w-5.25" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M6 6L18 18" />
        <path d="M18 6L6 18" />
      </svg>
    </button>
  );
};

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Technologies />
      </main>

      <ToastContainer
        position="bottom-right"
        autoClose={2200}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
        icon={ToastIcon}
        closeButton={ToastCloseButton}
        style={{ width: "min(320px, calc(100vw - 24px))" }}
        toastStyle={{
          minHeight: "54px",
          padding: "7px 8px 7px 12px",
          border: "1px solid #edf0f4",
          borderRadius: "11px",
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          fontSize: "12px",
          color: "#667085",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10px",
          boxShadow: "0 10px 28px rgba(15, 23, 42, 0.1)",
        }}
      />
    </>
  );
};

export default App;