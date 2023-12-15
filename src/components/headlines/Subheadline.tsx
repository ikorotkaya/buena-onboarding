export interface SubheadlineProps {
  children: string;
}

export default function Subheadline({ children }: SubheadlineProps) {
  return (
    <div className="flex justify-center text-center text-lg md:text-2xl leading-6 text-stone-500">
      {children}
    </div>
  );
}
