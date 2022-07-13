import ThemeButton from "../../Styles/ThemeButton";
import { ThemeInput } from "../../Styles/ThemeInput";
import { Container } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../../Providers/User";
import api from "../../Services";

export const ModalCreateCombo = ({ handleCloseModal, setCombos }) => {
  const { user } = useContext(UserContext);

  const formSchema = yup.object().shape({
    combo: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
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

  const onSubmitFunction = (data) => {
    const token = JSON.parse(localStorage.getItem("@churraskenzie:token"));
    data["userId"] = user.id;
    data["name"] = user.name;
    data["city"] = user.city;
    data["state"] = user.state;
    data["onwerAvatar"] = user.img;

    api
      .post("/combos", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        handleCloseModal();
      })
      .then((res) => {
        api.get(`/combos?userId=${user.id}`).then((res) => setCombos(res.data));
        toast("✔️ Combo criado com sucesso!", {
          className: "toastify-color-progress-success",
        });
      })
      .catch((error) => {
        toast("❌ Falha ao criar o combo!", {
          className: "toastify-color-progress-error",
        });
      });
  };

  return (
    <>
      <Container>
        <div className="headerModal">
          <p>Crie um combo</p>
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
            label="Descrição"
            name="description"
            placeholder="Descreva seu combo"
            error={errors.description?.message}
            register={register}
          />

          <ThemeInput
            label="Preço"
            name="price"
            type="number"
            placeholder="Digite o preço em reais"
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
            placeholder="Digite a duração em horas"
            type="text"
            error={errors.duration?.message}
            register={register}
          />

          <ThemeInput
            label="Url da foto"
            name="img"
            placeholder="Digite a url da imagem"
            type="text"
            error={errors.img?.message}
            register={register}
          />
          <ThemeButton schema="var(--red-2)" medium type="submit">
            Criar combo
          </ThemeButton>
        </form>
      </Container>
    </>
  );
};
