import { Welcome } from "../../Component/Welcome/index";
import { Header } from "../../Component/Header/index";
import { Footer } from "../../Component/Footer/index";
import { Container } from "./style";
import { times } from "./time.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {settings} from '../../Styles/SettingsCarousel/index'

export const AboutUs = () => {
  return (
    <div style={{background: 'var(--red-3)'}}>
      <Header />
      <Welcome />
      <Container>
        <div className="wrapper">
          <h2>Time</h2>
          <Slider className="slider"{...settings}>
            {times.map(time => {
              return (
                <div className="cardTeam" key={time.id}>
                  <div className="card__inner">
                    <img src={time.avatar} alt='avatar' />
                    <div className="card__right">
                      <h3>Nome: {time.name}</h3>
                      <h3>Função: {time.funcao}</h3>
                      <div className="card__link">
                        <a className="link link1" href={time.linkedin} target="_blanck">Linkedin</a>
                        <a className="link link1" href={time.github} target="_blanck">GitHub</a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
