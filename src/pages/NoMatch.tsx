import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <main className="flex flex-col justify-center mt-24">
      <div className="flex justify-center text-base font-semibold text-cyan-500 mb-6">
        404
      </div>

      <h2 className="flex items-end justify-center text-3xl font-bold text-stone-900 sm:text-5xl mb-4">
        Page not found
      </h2>

      <div className="flex justify-center text-center text-lg leading-8 text-stone-600 mb-6">
        Sorry, we couldn't find the page you're looking for.
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
          Go back home
        </Link>
      </div>
    </main>
  );
}
