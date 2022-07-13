import ThemeButton from "../../Styles/ThemeButton";
import { Container } from './style';
import api from "../../Services";
import { ApiContext } from "../../Providers/Api";
import { useContext } from "react";
import { TokenContext } from "../../Providers/Token";

export const ModalDeleteEvent = ({ handleCloseDeleteModal, event, setEvents, events, schedule = false, setSchedule }) => {
  
  const { deleteEvent } = useContext(ApiContext);

  const isEventSchedule = { userId: event.comboOnwer, isEvent: false };

  const { token } = useContext(TokenContext);

  function deleteEventHandle() {
    const newEvents = events.filter((evento) => {
      return evento.id !== event.id;
    });
    
    let newSchedule = []

    if(schedule) {
      newSchedule = [
        ...schedule.filter((item) => {
          return item.id !== +event.scheduleId;
        }),
        {
          date: event.date,
          period: event.time,
          isEvent: false,
          userId: event.comboOnwer,
          id: +event.scheduleId,
        }];
    }
 
      setEvents(newEvents);
      deleteEvent(event.id, events, setEvents);
      api
      .patch(`/schedule/${event.scheduleId}`, isEventSchedule, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        schedule.length > 0 && setSchedule(newSchedule);
      });
      handleCloseDeleteModal()
  }


  return (
    <Container>
        <div className="validationLogin">
            <p>
              Tem certeza que quer cancelar o evento?
            </p>
            <div className="validationButtons">
                <ThemeButton schema="var(--red-2)" handleClick={deleteEventHandle}>
                    Sim
                </ThemeButton>
                <ThemeButton schema="var(--red-2)" handleClick={handleCloseDeleteModal}>
                    Não
                </ThemeButton>
            </div>
        </div>
    </Container>
  );
};
