import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../Providers/User";
import api from "../../Services";
import ThemeButton from "../../Styles/ThemeButton";
import { ThemeInput } from "../../Styles/ThemeInput";
import { Container } from "./style";

export const ModalEditUserProfile = ({ handleCloseModal }) => {
  
  const {user, setUser} = useContext(UserContext)
  const {name,state,city,contact} = user;
  const token = JSON.parse(localStorage.getItem("@churraskenzie:token"));
  const id = JSON.parse(localStorage.getItem("@churraskenzie:user")).id;
  
  const onSubmitFunction = (data) => {
    if(!data.name){
      data.name = name;
    }
    if(!data.state){
      data.state = state;
    }
    if(!data.city){
      data.city = city;
    }
    if(!data.contact){
      data.contact = contact;
    }
    api
      .patch(`/users/${id}`,data,{
        headers: {
          Authorization: `Bearer ${token}`,
        }
  })
  .then((_)=>setUser({...user,...data}))
  handleCloseModal();
  };

  const { register, handleSubmit } = useForm();

  return (
    <>
      <Container>
      <div className="headerModal">
        <p>Edite seu perfil</p>
        <button onClick={handleCloseModal} className="closeModal">X</button>
      </div>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <ThemeInput
          label="Nome"
          name="name"
          placeholder="Edite seu nome"
          register={register}
        />
        <ThemeInput
          label="Estado"
          name="state"
          placeholder="Edite seu estado"
          register={register}
        />
        <ThemeInput
          label="Cidade"
          name="city"
          placeholder="Edite sua cidade"
          register={register}
        />
        <ThemeInput
          label="Contato"
          name="contact"
          placeholder="Edite seu contado"
          register={register}
        />
        <ThemeButton schema="var(--red-2)" medium type="submit">
                Finalizar
              </ThemeButton>
      </form>
      </Container>
    </>
  );
};
