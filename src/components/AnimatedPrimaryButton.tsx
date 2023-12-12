import { Link } from "react-router-dom";

interface AnimatedPrimaryButtonProps {
  link: string;
  textId: string;
  buttonText: string;
  className?: string;
}

export default function t({
  link,
  textId,
  buttonText,
  className = ""
}: AnimatedPrimaryButtonProps) {
  return (
    <>
      <Link
        to={link}
        data-testid={textId}
        className={`relative w-full inline-flex items-center justify-center 
          px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out 
          bg-cyan-500 rounded text-white group ${className}`}
      >
        <span
          className="absolute inset-0 flex items-center justify-center w-full h-full
        text-white duration-300 -translate-x-full group-hover:translate-x-0 ease"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span
          className="absolute flex items-center justify-center w-full h-full 
          text-white transition-all duration-300 transform group-hover:translate-x-full ease"
        >
          {buttonText}
        </span>
        <span className="relative invisible">{buttonText}</span>
      </Link>
    </>
  );
}
