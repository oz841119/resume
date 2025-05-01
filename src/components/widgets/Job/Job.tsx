interface Props {
  company: string;
  title: string;
  startText: string;
  endText: string;
  items: string[];
}

export const Job = ({ company, title, startText, endText, items }: Props) => {
  return (
    <div className="mb-8 w-2xl">
      <div className="flex gap-4">
        <div className="w-64">
          <h2 className="text-xl font-medium text-slate-600">{company}</h2>
          <h3 className="text-base text-slate-500">{title}</h3>
          <p className="text-sm text-slate-500">{startText} - {endText}</p>
        </div>
        <div className="hidden md:block w-px bg-slate-300 self-stretch mx-4"></div>
        <ul className="space-y-2 text-slate-700 flex-1">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 mr-2"></span>
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}