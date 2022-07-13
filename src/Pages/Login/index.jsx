import { FormsLogin } from "../../Component/FormsLogin";
import { Logo } from "../../Component/Logo";
import Login from "./../../Assets/Login-image.svg";
import { Container } from "./style";

export const LoginPage = () => {

  return (
    <Container>
      <div className="background">
        <Logo />
        <FormsLogin />
      </div>
      <div className="imgContainerLogin">
        <img src={Login} alt="login background" className="loginImage" />
      </div>
    </Container>
  );
};
