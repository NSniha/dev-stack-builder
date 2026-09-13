import TechnologyCard from "./TechnologyCard";

const TechnologyGrid = ({ technologies, selectedStack, onAdd }) => {
  return (
    <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2 xl:grid-cols-3">
      {technologies.map((technology) => {
        const isAdded = selectedStack.some((item) => item.id === technology.id);

        return <TechnologyCard key={technology.id} technology={technology} onAdd={onAdd} isAdded={isAdded} />;
      })}
    </div>
  );
};

export default TechnologyGrid;