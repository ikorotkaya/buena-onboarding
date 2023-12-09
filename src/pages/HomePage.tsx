import GetStartedButton from "../components/GetStartedButton";

export default function HomePage() {
  return (
    <div className="grid grid-rows-[3fr,2fr,1fr]">
      <h2 className="flex items-end justify-center text-4xl font-bold text-gray-900 sm:text-6xl mb-4">
        Welcome to Buena
      </h2>

      <div className="flex justify-center text-lg leading-8 text-gray-600">
        Enter your personal details and start your journey today.
      </div>

      <div className="flex flex-row justify-center items-end pb-4">
        <GetStartedButton />
      </div>
    </div>
  );
}
