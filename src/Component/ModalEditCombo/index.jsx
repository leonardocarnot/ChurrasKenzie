import { Container } from "../ModalCreateCombo/style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from 'react-toastify'
import ThemeButton from "../../Styles/ThemeButton";
import { ThemeInput } from "../../Styles/ThemeInput";
import api from "../../Services";
import { useContext } from "react";
import { UserContext } from "../../Providers/User";

export const ModalEditCombo = ({ handleCloseModal, combo, combos, setCombos}) => {
    const { user } = useContext(UserContext)

    const formSchema = yup.object().shape({
        combo: yup.string().required("Campo obrigatório"),
        price: yup.string().required("Campo obrigatório"),
        quantity: yup.string().required("Campo obrigatório"),
        duration: yup.string().required("Campo obrigatório"),
        img: yup.string().url("URL inválida!").required("Campo obrigatório"),
      });
    
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(formSchema),
      });
      
      function setNewComboList(data) {
        const newList = combos.filter((item) => {
          return item.id !== combo.id
        })
        setCombos([...newList, data]);
      }

      const onSubmitFunction = (data) => {
        const token = JSON.parse(localStorage.getItem('@churraskenzie:token'))
        const comboId = combo.id

        data["userId"] = user.id
        data["description"] = combo.description
        data["name"] = combo.name
        data["city"] = combo.city
        data["state"] = combo.state
        
        api.patch(`/combos/${comboId}`,data,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((_)=>{
          handleCloseModal();
          setNewComboList({...data, id: combo.id})
          toast('✔️ Combo editado com sucesso!', {className: "toastify-color-progress-success"})
        })
        .catch((error) =>{
          toast('❌ Falha ao editar o combo!', {className: "toastify-color-progress-error"})
        })
      }

  return (
    <Container>
      <div className="headerModal">
        <p>Editar um combo</p>
        <button onClick={handleCloseModal} className="closeModal">
          X
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <ThemeInput
          label="Nome do combo"
          name="combo"
          placeholder="Digite seu combo"
          error={errors.combo?.message}
          register={register}
        />

        <ThemeInput
          label="Preço"
          name="price"
          type="number"
          placeholder="Digite seu price"
          error={errors.price?.message}
          register={register}
        />

        <ThemeInput
          label="Quantidade"
          name="quantity"
          type="number"
          placeholder="Digite a quantidade de pessoas"
          error={errors.quantity?.message}
          register={register}
        />
        <ThemeInput
          label="Duração"
          name="duration"
          placeholder="Digite a duração"
          type="text"
          error={errors.duration?.message}
          register={register}
        />

        <ThemeInput
          label="Avatar"
          name="img"
          placeholder="Digite a url da imagem"
          type="text"
          error={errors.avatar?.message}
          register={register}
        />
        <ThemeButton schema="var(--red-2)" medium type="submit">
          Editar combo
        </ThemeButton>
      </form>
    </Container>
  );
};
