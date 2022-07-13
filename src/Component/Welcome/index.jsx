import React from "react";
import { Container } from "./style";
import Logo from "../../Assets/Logo.svg";
import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <>
      <Container>
        <div className="left">
          <img src={Logo} alt="logo do site" />
        </div>
        <div className="right">
          <h1>Olá, Seja Bem Vindo(a)!</h1>
          <p>
            A Churraskenzie surgiu da necessidade de facilitar a realização de
            um churrasco, sem se preocupar com a forma como vai ser feito e
            quais produtos serão utilizados. Por isso a plataforma oferece a
            possibilidade de encontrar o churrasqueiro qualificado que te livre
            dessas dúvidas em questão, poupando tempo e preocupação de quem só
            quer comer uma carne de boa qualidade feita por um profissional
            qualificado.
          </p>
          <button>
            <Link to="/">Navegar</Link>
          </button>
        </div>
      </Container>
    </>
  );
};
