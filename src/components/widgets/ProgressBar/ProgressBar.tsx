interface ProgressBarProps {
  name: string;
  proficiency: number;
  color: string;
}

export const ProgressBar = ({ name, proficiency, color }: ProgressBarProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-xs text-gray-500">{proficiency}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
        <div 
          className={`h-1.5 rounded-full ${color}`}
          style={{ width: `${proficiency}%` }}
        ></div>
      </div>
    </div>
  );
}; 