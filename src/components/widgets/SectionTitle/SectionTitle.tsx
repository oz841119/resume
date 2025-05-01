export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="text-center mb-12">
      <span className="text-xl tracking-widest uppercase font-light text-gray-800 border-b border-blue-400">
        {title}
      </span>
    </h2>
  );
};
