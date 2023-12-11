import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 md:px-8">
      <div className="text-center">
        <div className="text-base font-semibold text-indigo-600">404</div>
        
        <h1 className="mt-4 text-3xl font-bold text-stone-900 sm:text-5xl">Page not found</h1>
        
        <div className="mt-6 text-base text-gray-600">Sorry, we couldn’t find the page you’re looking for.</div>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>          
        </div>
      </div>
    </main>
  );
}