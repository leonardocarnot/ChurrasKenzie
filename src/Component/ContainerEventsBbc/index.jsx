import { useState } from "react"
import CardEvent from "../CardEvent";
import { Container } from "./style";

export const ContainerEventsBbc = () => {
  const [events, setEvents] = useState([]);

  return (
    <Container>
      <h2>Pedidos Recebidos</h2>

      {events?.map((event, i) => {
        return (
          <CardEvent
            key={i}
            event={event}
            events={events}
            setEvents={setEvents}
          />
        );
      })}
    </Container>
  );
};
