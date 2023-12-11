import { useOnboardingStore } from "../../store";
import SubmitButton from "../../components/SubmitButton";

export default function Summary() {
  const { name, email, phoneNumber, income } = useOnboardingStore();

  return (
    <div className="flex flex-col pt-52 md:max-w-xl">
      <h2 className="block mb-8 text-3xl font-bold text-stone-900 sm:text-4xl">
        Check your info:
      </h2>

      <div
        data-testid="summary"
        className="mb-4 grid grid-cols-[1fr,2fr] gap-1"
      >
        <div>Name:</div>
        <div>{name}</div>
        <div>Email:</div>
        <div>{email}</div>
        <div>Phone Number:</div>
        <div>{phoneNumber}</div>
        <div>Income:</div>
        <div>{income}</div>
      </div>

      <SubmitButton />
    </div>
  );
}
