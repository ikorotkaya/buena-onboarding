import OnboardingNavigation from "../../components/OnboardingNavigation";
import Sidebar from "../../components/Sidebar";
import { useOnboardingStore } from "../../store";

export default function Summary() {
  const { name, email, phoneNumber, income } = useOnboardingStore();

  return (
    <div className="flex flex-col justify-center items-center md:grid jg:gap-3 md:grid-cols-3">
      <Sidebar />

      <div className="col-span-2 flex flex-col justify-center items-center">
        <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
          Check your info:
        </h2>

        <div className="mt-2 grid grid-cols-2 gap-3">
          <div className="">
            <div>Full Name:</div>
            <div>Email:</div>
            <div>Phone Number:</div>
            <div>Income:</div>
          </div>
          <div>
            <div>{name}</div>
            <div>{email}</div>
            <div>{phoneNumber}</div>
            <div>{income}</div>
          </div>
        </div>

        <OnboardingNavigation />
      </div>
    </div>
  );
}
