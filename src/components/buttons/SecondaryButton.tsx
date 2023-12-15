import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export interface SecondaryButtonProps {
  link: string;
}

export default function SecondaryButton({ link }: SecondaryButtonProps) {
  return (
    <Link
      to={link}
      className="flex text-sm items-center px-4 py-1 mr-6 border rounded-full"
    >
      <ArrowLeftIcon className="w-4 mr-2" />
      Back
    </Link>
  );
}
