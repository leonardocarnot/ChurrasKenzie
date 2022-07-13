import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../Providers/User";
import api from "../../Services";
import ThemeButton from "../../Styles/ThemeButton";
import { ThemeInput } from "../../Styles/ThemeInput";
import { Container } from "./style";
import * as yup from "yup";
import { ThemeSelect } from "../../Styles/ThemeSelect";

export const ScheduleModal = ({ handleCloseModal, setSchedule }) => {

  const formSchema = yup.object().shape({
    date: yup.string().required("Campo obrigatório"),
    period: yup.string().required("Campo obrigatório")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  
  const {user} = useContext(UserContext)
  const token = JSON.parse(localStorage.getItem("@churraskenzie:token"));
  
  const onSubmitFunction = (data) => {
    const date = data.date.split("-").reverse().join("/")
    const newDate = {...data, "isEvent": false, "userId": user.id, "date": date }

    api
      .post(`/schedule/`, newDate,{
        headers: {
          Authorization: `Bearer ${token}`,
        }
    })
    .then((_) => {
      api
      .get(`/schedule?userId=${user.id}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then((res) => setSchedule(res.data))
    })
  handleCloseModal();
  };

  return (
    <>
      <Container>
      <div className="headerModal">
        <p>Escolha uma data</p>
        <button onClick={handleCloseModal} className="closeModal">X</button>
      </div>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <ThemeInput
          label="Escolha uma data"
          name="date"
          type={"Date"}
          error={errors.date?.message}
          placeholder="Edite seu nome"
          register={register}
        />
        <ThemeSelect
          label="Periodo"
          name="period"
          error={errors.period?.message}
          placeholder="Edite seu estado"
          register={register}
        >
          <option value={"Diurno"}>Diurno</option>
          <option value={"Noturno"}>Noturno</option>
          </ThemeSelect>
        <ThemeButton schema="var(--red-2)" medium type="submit">
                Finalizar
        </ThemeButton>
      </form>
      </Container>
    </>
  );
};
