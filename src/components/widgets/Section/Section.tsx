import clsx from "clsx"
import { SectionTitle } from "../SectionTitle/SectionTitle"

interface SectionProps {
  children: React.ReactNode
  className?: string
  title?: string
  id?: string
}

export const Section = ({ id,children, className, title }: SectionProps) => {
  return (
    <div id={id} className={clsx("pt-8 py-12 h-screen min-h-[760px] relative flex justify-center items-center", className)}>
      {title && <SectionTitle title={title} className="absolute top-6" />}
      {children}
    </div>
  )
}