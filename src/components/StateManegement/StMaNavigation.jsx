import { Link } from "react-router-dom";
import "../Navbar.css";
export default function StMaNavigation() {
  return (
    <div>
      <div className="navbar">
        <ul>
          <Link to="/statemanagement/props">Props</Link>
          <Link to="/statemanagement/context">Context API</Link>
        </ul>
      </div>
    </div>
  );
}
