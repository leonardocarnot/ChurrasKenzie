import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../Providers/User";
import { Container, ContainerAll } from "./style";
import Modal from "react-modal";
import { ModalEditUserProfile } from "../ModalEditUserProfile";
import {customStyles} from '../../Styles/CustomStyles/style'

function CardProfile() {
  const { user } = useContext(UserContext);
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <ContainerAll>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <ModalEditUserProfile handleCloseModal={handleCloseModal} />
      </Modal>
      <h2>Meu perfil</h2>
      <Container>
        <div className="left_info">
          {user.category === "Churrasqueiro" && <p>★★★☆☆</p>}
          <figure>
            <img src={user.img} alt="foto" />
          </figure>
        </div>
        <div className="right_info">
          <p>Nome: {user.name}</p>
          <p>Cidade: {user.city}</p>
          <p>Estado: {user.state}</p>
          <p>Contato: {user.contact}</p>
          <button className="edit_profile_button" onClick={handleOpenModal}>
            Editar
          </button>
        </div>
      </Container>
    </ContainerAll>
  );
}

export default CardProfile;
