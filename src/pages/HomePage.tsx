import GetStartedButton from "../components/GetStartedButton";
import Headline from "../components/Headline";
import Subheadline from "../components/Subheadline";

export default function HomePage() {
  return (
    <div className="grid grid-rows-[3fr,2fr,1fr] ">
      <div className="flex items-end justify-center">
        <Headline>Welcome to Buena</Headline>
      </div>

      <Subheadline>
        Enter your personal details and start your journey today.
      </Subheadline>

      <div
        data-testid="get-started-button"
        className="flex flex-row justify-center items-end pb-4"
      >
        <GetStartedButton />
      </div>
    </div>
  );
}
