const HEADLINE_STYLES = {
  "1": "mb-6 text-4xl sm:text-6xl",
  "2": "mb-4 text-3xl sm:text-4xl",
};

interface HeadlineProps {
  type: "1" | "2";
  children: string;
  className?: string;
};

export default function Headline({ type, children, className = "" }: HeadlineProps) {
  const HeadingTag = `h${type}` as keyof JSX.IntrinsicElements;
  return (
    <HeadingTag className={`block font-bold text-stone-900 ${HEADLINE_STYLES[type]} ${className}`}>
      {children}
    </HeadingTag>
  );
}