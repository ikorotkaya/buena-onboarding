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
        leading-6 text-stone-500 md:text-2xl ${className}`}
    >
      {children}
    </div>
  );
}
