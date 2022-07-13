import { useState } from "react";
import { FormsEvent } from "../FormsEvent";
import { Container} from "./styles";
import Modal from "react-modal";
import { customStyles } from '../../Styles/CustomStyles/style'

export const CardProduct = ({ combo }) => {
  const [detail, setDetail] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const comboId = combo.id;

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  function detailOn() {
    setDetail(true);
  }

  function detailOff() {
    setDetail(false);
  }

  return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <FormsEvent
          handleCloseModal={handleCloseModal}
          comboId={comboId}
          onwerId={combo.userId}
        />
      </Modal>
      {detail ? (
        <div className="cardDetail" key={combo.id}>
          <div className="headerCardDetail">
            <h4>Detalhes</h4>
            <button onClick={detailOff}>X</button>
          </div>
          <h3>{combo.combo}</h3>
          <p>Cidade: {combo.city}.</p>
          <p>
            Preço:
            {combo.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
            .
          </p>
          <p>Atende até {combo.quantity} Pessoas.</p>
          <span>{combo.description}</span>
        </div>
      ) : (
        <div className="card" key={combo.id}>
          <div className="card__info">
            <img src={combo.onwerAvatar} alt="Avatar do churrasqueiro" />
            <div>
              <p>{combo.name}</p>
              <p>
                {combo.city} - {combo.state}
              </p>
              <p>
                R$ {combo.price} - {combo.quantity} Pessoas
              </p>
            </div>
          </div>

          <div className="card__combo">
            <h2 className="comboName">{combo.combo}</h2>
            <img src={combo.img} alt="foto do card" />
          </div>

          <div className="card__button">
            <button onClick={handleOpenModal} className="active">
              Solicitar Evento
            </button>
            <button onClick={detailOn} id={combo.id}>
              Detalhes
            </button>
          </div>
        </div>
      )}
    </Container>
  );
};
