import { NavLink } from "react-router-dom";

export default function AuthNavigate() {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </div>
  );
}
