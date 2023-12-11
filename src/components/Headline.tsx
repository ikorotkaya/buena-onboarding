const HEADLINE_STYLES = {
  "4xl": "mb-6 text-4xl sm:text-6xl",
  "3xl": "mb-4 text-3xl sm:text-4xl"
};

const DEFAULT_TYPE_STYLES = {
  "1": "4xl",
  "2": "3xl"
};

interface HeadlineProps {
  type?: "1" | "2";
  style?: "4xl" | "3xl" | "";
  children: string;
  className?: string;
}

export default function Headline({
  type = "1",
  style = "",
  children,
  className = ""
}: HeadlineProps) {
  const HeadingTag = `h${type}` as keyof JSX.IntrinsicElements;

  let cssClasses =
    HEADLINE_STYLES[DEFAULT_TYPE_STYLES[type] as keyof typeof HEADLINE_STYLES];

  if (style) {
    cssClasses = HEADLINE_STYLES[style];
  }

  return (
    <HeadingTag
      className={`block font-bold text-stone-900 ${cssClasses} ${className}`}
    >
      {children}
    </HeadingTag>
  );
}
