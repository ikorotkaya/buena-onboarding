import OnboardingNavigation from "../../components/OnboardingNavigation";
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
    <div className="flex flex-col pt-48 md:max-w-xl">
      <h2 className="block mb-8 text-4xl font-bold text-gray-900 sm:text-5xl">
        What is your income?
      </h2>

      <div className="space-y-4 mb-4">
        {incomeRanges.map((range, index) => (
          <div key={range.value} className="flex items-center">
            <label 
              htmlFor={`income-${index}`}
              className="ml-3 flex items-center text-sm leading-0 font-medium leading-6 cursor-pointer">
              
              <input
                type="radio"
                id={`income-${index}`}
                value={range.value}
                checked={income === range.value}
                onChange={() => setIncome(range.value)}
                className="h-4.5 w-4.5 mr-2 border-gray-300 text-bclack focus:ring-black cursor-pointer"
              />
            
              {range.label}
            </label>
          </div>
        ))}
      </div>

      <OnboardingNavigation
        className="hidden md:flex" />
    </div>
  );
}
