import { Link } from "react-router-dom";
import Headline from "../components/headlines/Headline";
import { useTranslation } from "react-i18next";

export default function NoMatch() {
  const { t } = useTranslation();
  return (
    <main className="flex flex-col justify-center mt-24">
      <div className="flex justify-center font-semibold text-cyan-700 mb-6 text-4xl">
        404
      </div>

      <div className="flex items-end justify-center">
        <Headline>{t("pages.noMatch.headline")}</Headline>
      </div>

      <div className="flex justify-center text-center text-lg leading-8 text-stone-600 mb-6">
        {t("pages.noMatch.subheadline")}
      </div>

      <div
        className="w-full md:w-auto fixed md:relative bottom-0 left-0 py-4 px-8 flex items-center justify-center 
          md:px-6 text-base font-medium whitespace-no-wrap rounded-md text-center"
      >
        <Link
          to="/"
          className="relative w-full md:w-auto items-center 
          justify-center px-6 py-3 overflow-hidden font-medium 
          transition duration-300 ease-out md:hover:bg-neutral-700 
          focus:outline-none bg-stone-900 text-white 
          rounded-md"
        >
          {t("pages.noMatch.cta")}
        </Link>
      </div>
    </main>
  );
}
