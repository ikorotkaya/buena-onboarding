import { Link } from "react-router-dom";

export default function PhoneNumber() {
  return (
    <div>
      <h2>PhoneNumber</h2>

      <div>
        <Link to="/onboarding/email">Back</Link>
        <Link to="/onboarding/income">Next</Link>
      </div>
    </div>
  );
}