import { FaEdit } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { Container } from "./style";
import Modal from "react-modal";
import { ModalEditCombo } from "../ModalEditCombo/index";
import { ModalDeleteCombo } from '../ModalDeleteCombo/index'
import { useState } from "react";
import {customStyles} from '../../Styles/CustomStyles/style'

export const ComboListItem = ({ combo, combos, setCombos }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalDeleteCombo, setDeleteCombo] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  function handleOpenDeleteModal() {
    setDeleteCombo(true);
  }

  function handleCloseDeleteModal() {
    setDeleteCombo(false);
  }
  
  return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <ModalEditCombo handleCloseModal={handleCloseModal} combo={combo} combos={combos} setCombos={setCombos}/>
      </Modal>

      <Modal
        isOpen={modalDeleteCombo}
        onRequestClose={handleCloseDeleteModal}
        style={customStyles}
      >
        <ModalDeleteCombo handleCloseDeleteModal={handleCloseDeleteModal} combo={combo} combos={combos} setCombos={setCombos}/>
      </Modal>

      <img src={combo.img} alt="combo"/>
      <p className="comboName">{combo.combo}</p>
      <p>R${combo.price}</p>
      
      <div className="buttonsComboCard">
      <button onClick={handleOpenModal}>
        <FaEdit />
      </button>
      <button onClick={handleOpenDeleteModal}>
        <BsTrash />
      </button>
      </div>
    </Container>
  );
};
