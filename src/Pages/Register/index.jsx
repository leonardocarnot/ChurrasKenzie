import Background from "./../../Assets/Login-image.svg";
import { Container } from "./style";
import { FormsRegister } from "../../Component/FormsRegister";
import { Logo } from "../../Component/Logo";

export const RegisterPage = () => {
  return (
    <Container>
      <img src={Background} alt="login background" className="backgroundImage" />
      <div className="background">
        <Logo />
        <FormsRegister />
      </div>
    </Container>
  );
};
