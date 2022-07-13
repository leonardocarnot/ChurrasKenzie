import { Link } from "react-router-dom";
import logo from "./../../Assets/Logo.svg";
import { Container } from "./style";

export const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Logo" className="logoImage" />
      </Link>
    </Container>
  );
};
