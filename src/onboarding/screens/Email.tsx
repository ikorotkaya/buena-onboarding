import { Link } from "react-router-dom";

export default function Email() {
  return (
    <div>
      <h2>Email</h2>

      <div>
        <Link to="/onboarding/name">Back</Link>
        <Link to="/onboarding/phone">Next</Link>
      </div>
    </div>
  );
}