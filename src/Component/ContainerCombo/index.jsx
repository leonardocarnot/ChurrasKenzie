import ThemeButton from "../../Styles/ThemeButton";
import { ComboListItem } from "../../Component/ComboListItem";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Providers/User";
import api from "../../Services";

export const ContainerCombos = () => {
  const [combos, setCombos] = useState([]);
  const [combosId, setCombosId] = useState([]);
  const [events, setEvents] = useState([]);
  const { user } = useContext(UserContext);
  const token = JSON.parse(localStorage.getItem("@churraskenzie:token"));

  const [modalIsOpen, setIsOpen] = useState(false);

  async function getCombosUser() {
    await api.get(`/combos?userId=${user.id}`).then((res) => {
      res.data.forEach((combo) => {
        combosId.push(combo.id);
      });
      setCombos(res.data);
    });
  }

  async function getEventsUser() {
    await api
      .get("/events", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setEvents(res.data));
  }

  useEffect(() => {
    getCombosUser();
    getEventsUser();
  }, []);

  function handleOpenModal() {
    setIsOpen(true);
  }
  return (
    <div className="eventComboBbc">
      <div className="headerComboList">
        <h2>Combos</h2>
        <ThemeButton schema="#000000" handleClick={handleOpenModal}>
          Criar Combo
        </ThemeButton>
      </div>
      <ul className="ComboList">
        {combos?.map((combo) => {
          return (
            <ComboListItem
              key={combo.id}
              combo={combo}
              combos={combos}
              setCombos={setCombos}
            />
          );
        })}
      </ul>
    </div>
  );
};
