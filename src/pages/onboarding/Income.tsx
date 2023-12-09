import OnboardingNavigation from "../../components/OnboardingNavigation";
import Sidebar from "../../components/Sidebar";
import { useOnboardingStore } from "../../store";

const incomeRanges = [
  { value: "0-1000", label: "0 - 1.000" },
  { value: "1000-2000", label: "1.000 - 2.000" },
  { value: "2000-3000", label: "2.000 - 3.000" },
  { value: "3000-4000", label: "3.000 - 4.000" },
  { value: "4000-plus", label: "> 4.000" },
];

export default function Income() {
  const { income, setIncome } = useOnboardingStore();

  return (
    <div className="flex flex-col justify-center items-center md:grid jg:gap-3 md:grid-cols-3">
      <Sidebar />

      <div className="col-span-2 flex flex-col justify-center items-center">
        <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
          What is your income?
        </h2>

        <div className="space-y-4 my-4">
          {incomeRanges.map((range) => (
            <div key={range.value} className="flex items-center">
              <input
                type="radio"
                value={range.value}
                checked={income === range.value}
                onChange={() => setIncome(range.value)}
                className="h-4.5 w-4.5 border-gray-300 text-bclack focus:ring-black"
              />
              <span className="ml-3 block text-sm font-medium leading-6">
                {range.label}
              </span>
            </div>
          ))}
        </div>

        <OnboardingNavigation />
      </div>
    </div>
  );
}
