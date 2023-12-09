import OnboardingNavigation from "../../components/OnboardingNavigation";
import { useOnboardingStore } from "../../store";
import Sidebar from "../../components/Sidebar";

export default function Name() {
  const { name, setName } = useOnboardingStore();

  return (
    <div className="flex flex-col justify-center items-center md:grid jg:gap-3 md:grid-cols-3">
      <Sidebar />

      <div className="col-span-2 flex flex-col justify-center items-center">
        <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
          What is your full name?
        </h2>

        <div className="mt-2">
          <input
            defaultValue={name}
            type="text"
            placeholder="Jane Smith"
            className="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 mb-4"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <OnboardingNavigation />
      </div>
    </div>
  );
}
