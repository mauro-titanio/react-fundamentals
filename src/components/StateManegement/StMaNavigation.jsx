import { Link } from "react-router-dom";
import "../Navbar.css";
export default function StMaNavigation() {
  return (
    <div>
      <div className="navbar">
        <ul>
          <Link to="/statemanagement/props">Props</Link>
        </ul>
      </div>
    </div>
  );
}
