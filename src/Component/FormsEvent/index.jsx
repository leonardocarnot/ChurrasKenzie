import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ThemeInput } from "../../Styles/ThemeInput";
import ThemeButton from "../../Styles/ThemeButton";
import { ThemeSelect } from "../../Styles/ThemeSelect";
import { Container } from "./style";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Providers/User";
import api from "../../Services";
import { useEffect } from "react";
import { useState } from "react";

export const FormsEvent = ({ handleCloseModal, comboId, onwerId }) => {
  const { user } = useContext(UserContext);
  const token = JSON.parse(localStorage.getItem("@churraskenzie:token"));
  const history = useHistory();
  const [ schedule, setSchedule ] = useState([])

  function goToLoginPage() {
    history.push("/login");
  }

  const schema = yup.object().shape({
    schedule: yup.string().required("Campo Obrigatório"),
    neighbours: yup.string().required("Campo Obrigatório"),
    street: yup.string().required("Campo Obrigatório"),
    numberLocal: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    data["combo"] = comboId;
    data["userId"] = user.id;
    const date = data.schedule.split(",")
    data["date"] = date[0];
    data["time"] = date[1];
    data["comboOnwer"] = onwerId;
    data["scheduleId"] = date[2]

    const isEventSchedule = {userId: onwerId, isEvent: true}

    api
      .post("/events", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => handleCloseModal());
    api.patch(`/schedule/${date[2]}`, isEventSchedule, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  };

  function handleLogout() {
    localStorage.clear();
    handleCloseModal();
    history.push("/login");
  }

  useEffect(() => {
    api
    .get(`/schedule?userId=${onwerId}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then((res) => setSchedule(res.data))
  })

  return (
    <Container className="eventForm" onSubmit={handleSubmit(onSubmitFunction)}>
      {token && user.category !== "Churrasqueiro" ? (
        <>
          <div className="headerModal">
            <p>Solicite um evento</p>
            <button onClick={handleCloseModal}>X</button>
          </div>

          <ThemeSelect
            label="Data"
            name="schedule"
            type="text"
            error={errors.schedule?.message}
            register={register}
          >
            <option>Seleione uma data</option>
          {schedule.map((date) => {return !date.isEvent &&
            (<option value={[date.date, date.period, date.id]}>{date.date} - {date.period}</option>)
          })}
            
          </ThemeSelect>

          <ThemeInput
            label="Bairro"
            name="neighbours"
            placeholder="Digite o bairro do evento"
            error={errors.neighbours?.message}
            register={register}
          />
          <ThemeInput
            label="Rua"
            name="street"
            placeholder="Digite a rua do evento"
            error={errors.street?.message}
            register={register}
          />
          <ThemeInput
            label="Numero do local"
            name="numberLocal"
            type="number"
            placeholder="Digiteo numero do Local ex:163"
            error={errors.numberLocal?.message}
            register={register}
          />

          <ThemeButton schema="var(--red-2)" large type="submit">
            Solicitar evento
          </ThemeButton>
        </>
      ) : (
        <div className="validationLogin">
          {token ? (
          <>
            <p>
              É necessario estar logado como consumidor para solicitar um evento. Deseja fazer o
              logout?
            </p>
              <div className="validationButtons">
              <ThemeButton schema="var(--red-2)" handleClick={handleLogout}>
                Sim
              </ThemeButton>
              <ThemeButton schema="var(--red-2)" handleClick={handleCloseModal}>
                Não
              </ThemeButton>
            </div>
          </>
          ) : (
          <>
            <p>
              É necessario estar logado para solicitar um evento. Deseja fazer o
              login?
            </p>
            <div className="validationButtons">
              <ThemeButton schema="var(--red-2)" handleClick={goToLoginPage}>
                Sim
              </ThemeButton>
              <ThemeButton schema="var(--red-2)" handleClick={handleCloseModal}>
                Não
              </ThemeButton>
            </div>
          </>
          )}
        </div>
      )}
    </Container>
  );
};
