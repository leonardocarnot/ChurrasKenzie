import { Container } from "./style";

export const Footer = () => {
  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <Container>
        <p className="active">(21) 9 1234 - 5678</p>
        <p>Grupo4 Luiz © All rights reserved </p>
        <p className="active">churraskenzie@gmail.com</p>
        <button onClick={backToTop}>&uarr;</button>
      </Container>
    </>
  );
};
