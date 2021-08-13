import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <ul>
          <Link to="/counterandtoggle">Counter</Link>
          <Link to="/conditionalrendering">Conditionalrendering</Link>
          <Link to="/forms">Forms</Link>
          <Link to="/getdata">Get Data</Link>
          <Link to="/setdata">Set Data</Link>
          <Link to="/customhooks">Custom hooks</Link>
          <Link to="/routerhooks">Router hooks</Link>
          <Link to="/statemanagement">State management</Link> 
        </ul>
      </div>
    </div>
  );
}
