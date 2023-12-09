import GetStartedButton from "../components/GetStartedButton";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center row-span-1">
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Welcome to Buena
      </h2>
      <div className="mt-6 text-lg leading-8 text-gray-600 mb-4">
        Property management, as it should be.
      </div>

      <GetStartedButton />
    </div>
  );
}
