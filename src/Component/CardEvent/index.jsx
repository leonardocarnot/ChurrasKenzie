import { BsTrash, BsInfoCircleFill } from "react-icons/bs";
import Modal from "react-modal";
import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container, OtherInfos, TitleAndImage } from "./styles";
import { ApiContext } from "../../Providers/Api";
import { DetailEvent } from "../DetailEvent";
import { customStyles } from "../../Styles/CustomStyles/style";
import { ModalDeleteEvent } from "../ModalDeleteEvent";

export const CardEvent = ({
  event,
  setEvents,
  events,
  schedule,
  setSchedule
}) => {
  const [combo, setCombo] = useState({});
  const [detail, setDetail] = useState(false);
  const [modalDeleteEvent, setDeleteEvent] = useState(false);

  const { getComboById } = useContext(ApiContext);


  useEffect(() => {
    getComboById(event.combo, setCombo);
  }, [event]);

  function detailOn() {
    setDetail(true);
  }

  function detailOff() {
    setDetail(false);
  }

  function handleOpenDeleteModal() {
    setDeleteEvent(true);
  }

  function handleCloseDeleteModal() {
    setDeleteEvent(false);
  }

  return (
    <Container>
      <Modal
        isOpen={modalDeleteEvent}
        onRequestClose={handleCloseDeleteModal}
        style={customStyles}
      >
        <ModalDeleteEvent handleCloseDeleteModal={handleCloseDeleteModal} setSchedule={setSchedule} event={event} setEvents={setEvents} events={events} schedule={schedule}/>
      </Modal>

      {detail ? (
        <DetailEvent event={event} detailOff={detailOff} />
      ) : (
        <>
          <TitleAndImage>
            <h3>{combo?.combo}</h3>
            <img src={combo?.img} alt="" />
          </TitleAndImage>
          <OtherInfos>
            <div>
              <p className="infoTitle">Preço:</p>
              <h3 className="dark">R${combo?.price}</h3>
            </div>
            <div>
              <p className="infoTitle">Dia:</p>
              <h3>
                {event.date} - {event.time}
              </h3>
            </div>
            <div>
              <p className="infoTitle">Quantidade:</p>
              <h3>Até {combo?.quantity} pessoas.</h3>
            </div>
          </OtherInfos>
          <div className="iconSection">
            <button  onClick={handleOpenDeleteModal}>
              <BsTrash className="icon" />
            </button>
            <button  onClick={detailOn} id={combo.id}>
              <BsInfoCircleFill className="icon" />
            </button>
          </div>
        </>
      )}

    </Container>
  );
};

export default CardEvent;
