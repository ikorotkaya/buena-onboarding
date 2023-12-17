import { Link } from "react-router-dom";
import Headline from "../components/headlines/Headline";
import { useTranslation } from "react-i18next";

export default function NoMatch() {
  const { t } = useTranslation();
  return (
    <main className="mt-24 flex flex-col justify-center">
      <div className="mb-6 flex justify-center text-4xl font-semibold text-cyan-700">
        404
      </div>

      <div className="flex items-end justify-center">
        <Headline>{t("pages.noMatch.headline")}</Headline>
      </div>

      <div className="mb-6 flex justify-center text-center text-lg leading-8 text-stone-600">
        {t("pages.noMatch.subheadline")}
      </div>

      <div
        className="fixed bottom-0 left-0 flex w-full items-center justify-center whitespace-nowrap rounded-md px-8 py-4 
          text-center text-base font-medium md:relative md:w-auto md:px-6"
      >
        <Link
          to="/"
          className="relative w-full items-center justify-center 
          overflow-hidden rounded-md bg-stone-900 px-6 py-3 
          font-medium text-white transition duration-300 
          ease-out focus:outline-none md:w-auto 
          md:hover:bg-neutral-700"
        >
          {t("pages.noMatch.cta")}
        </Link>
      </div>
    </main>
  );
}
