interface AnchorButtonProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
}

const AnchorButton: React.FC<AnchorButtonProps> = ({ targetId, children, className = '' }) => {
  return (
    <a
      href={`#${targetId}`}
      className={`
        inline-flex items-center justify-center
        px-4 py-2
        text-base font-medium
        text-gray-700 hover:text-blue-600
        border border-gray-300 hover:border-blue-600
        rounded-full
        transition-all duration-200 ease-in-out
        hover:shadow-sm
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
        ${className}
      `}
      aria-label={`Scroll to ${targetId} section`}
    >
      {children}
    </a>
  );
};

export { AnchorButton };
