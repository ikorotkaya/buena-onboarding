import GetStartedButton from "../components/GetStartedButton";
import Headline from "../components/Headline";

export default function HomePage() {
  return (
    <div className="grid grid-rows-[3fr,2fr,1fr]">
      <div className="flex items-end justify-center">
        <Headline type="1">Welcome to Buena</Headline>
      </div>

      <div className="subheadline flex justify-center text-center text-lg leading-8 text-stone-600">
        Enter your personal details and start your journey today.
      </div>

      <div
        data-testid="get-started-button"
        className="flex flex-row justify-center items-end pb-4"
      >
        <GetStartedButton />
      </div>
    </div>
  );
}
