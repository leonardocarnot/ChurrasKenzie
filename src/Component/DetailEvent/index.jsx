import { Container } from "./style";

export const DetailEvent = ({ event, detailOff }) => {
  return (
    <Container>
      <div className="headerCardDetail">
        <h4>Detalhes</h4>
        <button onClick={detailOff}>X</button>
      </div>
      <div className="mainCardDetail">
        <div className="localizationInfo">
          <p>Bairro: {event.neighbours}</p>
          <p>Rua: {event.street}</p>
          <p>Número: {event.numberLocal}</p>
          <p>Dia: {event.date}</p>
          <p>Peíodo: {event.time}</p>
        </div>
        <div className="timeInfo"></div>
      </div>
    </Container>
  );
};
