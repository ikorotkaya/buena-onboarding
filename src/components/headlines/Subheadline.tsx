export interface SubheadlineProps {
  className?: string;
  children: string;
}

export default function Subheadline({
  className = "",
  children
}: SubheadlineProps) {
  return (
    <div
      className={`flex justify-center text-center text-lg 
        md:text-2xl leading-6 text-stone-500 ${className}`}
    >
      {children}
    </div>
  );
}
