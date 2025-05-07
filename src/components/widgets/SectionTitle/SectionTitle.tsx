import clsx from "clsx";

export const SectionTitle = ({ title, className }: { title: string, className?: string }) => {
  return (
    <h2 className={clsx("text-center mb-12", className)}>
      <span className="text-xl tracking-widest uppercase font-light text-gray-800 border-b border-blue-400">
        {title}
      </span>
    </h2>
  );
};
