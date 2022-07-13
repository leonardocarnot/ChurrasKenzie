import { BsTrash } from "react-icons/bs";
import { Container } from "./style";

export const EventListItem = ({event}) => {

  return (
    <Container>
      <p>{event.date}</p>
      <p>{event.time}</p>
      <button><BsTrash/></button>
    </Container>
  )
}