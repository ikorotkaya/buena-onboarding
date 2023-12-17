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
      className={`flex items-center rounded-full border px-4 py-1 text-sm ${className}`}
    >
      <ArrowLeftIcon className="mr-2 w-4" />
      {t("backButton")}
    </Link>
  );
}
