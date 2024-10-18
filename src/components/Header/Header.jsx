import AuthNavigate from "../AuthNavigate/AuthNavigate";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <header>
      <Navigation />
      <AuthNavigate />
    </header>
  );
}
