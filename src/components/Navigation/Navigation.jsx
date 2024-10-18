import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
export default function Navigation() {
  return (
    <div className={s.navigate}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      {/* <NavLink to="/">Home</NavLink> */}
    </div>
  );
}
