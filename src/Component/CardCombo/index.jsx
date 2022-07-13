import { useEffect, useState } from "react";
import { Container } from "./style.js";
import api from "../../Services/index.jsx";
import { CardProduct } from "../CardProduct/index.jsx";

export const CardCombo = ({
  filteredName,
  filteredPrice,
  filteredQuantity,
  filteredQuantityPrice,
}) => {
  const [combos, setCombos] = useState([]);

  useEffect(() => {
    api.get("/combos").then((response) => {
      if (filteredName.length > 0) {
        setCombos(filteredName);
      } else {
        setCombos(response.data);
      }

      if (filteredPrice.length > 0) {
        setCombos(filteredPrice);
      }

      if (filteredQuantity.length > 0) {
        setCombos(filteredQuantity);
      }

      if (filteredPrice.length > 0 && filteredQuantity.length > 0) {
        setCombos(filteredQuantityPrice);
      }
    });
  }, [filteredName, filteredPrice, filteredQuantity, filteredQuantityPrice]);

  return (
    <Container>
      <div className="card__container">
        {combos.map((combo) => {
          return <CardProduct key={combo.id} combo={combo} />;
        })}
      </div>
    </Container>
  );
};
