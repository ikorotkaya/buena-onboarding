import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";

export interface SecondaryButtonProps {
  className?: string;
  link: string;
}

export default function SecondaryButton({
  link,
  className
}: SecondaryButtonProps) {
  const { t } = useTranslation();
  return (
    <Link
      to={link}
      className={`flex text-sm items-center px-4 py-1 border rounded-full ${className}`}
    >
      <ArrowLeftIcon className="w-4 mr-2" />
      {t("backButton")}
    </Link>
  );
}
