import { Link } from "react-router-dom";

export default function Summary() {
  return (
    <div>
      <h2>Summary</h2>

      <div>
        <Link to="/onboarding/income">Back</Link>
      </div>
    </div>
  );
}