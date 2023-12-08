import { Link } from "react-router-dom";

export default function Salary() {
  return (
    <div>
      <h2>Salary</h2>

      <div>
        <Link to="/onboarding/phone">Back</Link>
        <Link to="/onboarding/summary">Next</Link>
      </div>
    </div>
  );
}