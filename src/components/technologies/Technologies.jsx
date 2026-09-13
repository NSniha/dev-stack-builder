import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import LoadingSpinner from "../shared/LoadingSpinner";
import StackSidebar from "../stack/StackSidebar";
import TechnologyGrid from "./TechnologyGrid";

const iconModules = import.meta.glob("../../assets/icons/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
});

const Technologies = () => {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const gradientTextStyle = {
    backgroundImage: "var(--brand-gradient)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
  };

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true);
        setError("");

        /* ================== Loading state demonstration ================== */
        await new Promise((resolve) => setTimeout(resolve, 800));

        const response = await fetch("/data/technologies.json");

        if (!response.ok) {
          throw new Error("Unable to load technologies.");
        }

        const data = await response.json();

        const technologiesWithIcons = data.map((technology) => {
          const iconPath = Object.keys(iconModules).find((path) => path.endsWith(`/${technology.icon}`));

          return {
            ...technology,
            iconUrl: iconPath ? iconModules[iconPath] : "",
          };
        });

        setTechnologies(technologiesWithIcons);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const handleAddToStack = (technology) => {
    const alreadyAdded = selectedStack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setSelectedStack((prevStack) => [...prevStack, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemoveFromStack = (id) => {
    const technology = selectedStack.find((item) => item.id === id);

    setSelectedStack((prevStack) => prevStack.filter((item) => item.id !== id));

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;

    setSelectedStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <section id="technologies" className="bg-[#fbfcfe] py-14 sm:py-16 lg:py-17">
      <div className="mx-auto max-w-304 px-5 sm:px-6 xl:px-0">

        {/* ================== Section Heading ================== */}
        <div className="mb-9 max-w-190 text-center md:text-left lg:mb-10">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[32px] font-bold leading-[1.15] tracking-[-1.2px] text-[#111827] sm:text-[38px] lg:text-[43px]">
            Explore Modern{" "}
            <span style={gradientTextStyle}>
              Technologies
            </span>
          </h2>

          <p className="mt-4 max-w-175 font-['Inter',sans-serif] text-[14px] leading-[1.75] text-[#66758d] sm:text-[16px] lg:text-[17px] lg:leading-[1.7]">
            Discover powerful tools and technologies, compare their strengths, and choose the ones that belong in your development stack.
          </p>
        </div>

        {/* ================== Loading State ================== */}
        {loading && <LoadingSpinner />}

        {/* ================== Error State ================== */}
        {!loading && error && (
          <div className="flex min-h-55 items-center justify-center">
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-medium text-red-500">
              {error}
            </p>
          </div>
        )}

        {/* ================== Technologies and Stack ================== */}
        {!loading && !error && (
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_290px] xl:grid-cols-[minmax(0,1fr)_310px]">

            {/* ==== Technology Cards === */}
            <div>
              <TechnologyGrid technologies={technologies} selectedStack={selectedStack} onAdd={handleAddToStack} />
            </div>

            {/* === Your Stack ==== */}
            <div className="lg:sticky lg:top-25">
              <StackSidebar selectedStack={selectedStack} onRemove={handleRemoveFromStack} onRemoveAll={handleRemoveAll} />
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default Technologies;