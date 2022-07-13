import { Footer } from "../../Component/Footer";
import { Header } from "../../Component/Header";
import { Container } from "./style";
import { MdSearch } from "react-icons/md";
import { CardCombo } from "../../Component/CardCombo";
import { useEffect, useState } from "react";
import api from "../../Services";
import { Hr } from "../../Component/Hr";

export const Home = () => {
  const [combos, setCombos] = useState([]);
  const [value, setValue] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    api.get("/combos").then((response) => {
      setCombos(response.data);
    });
  }, []);

  const filteredName = combos.filter((combo) => {
    return (
      combo.combo.toLowerCase().includes(value.toLowerCase()) ||
      combo.name.toLowerCase().includes(value.toLowerCase()) ||
      combo.city.toLowerCase().includes(value.toLowerCase())
    );
  });

  const filteredPrice = combos.filter((combo) => {
    if (price < 0) {
      return combo.price > 800;
    }
    if (combo.price > 800 && price > 0) {
      return false;
    }
    return combo.price <= price;
  });

  const filteredQuantity = combos.filter((combo) => {
    let actualQtd = Number(combo.quantity);
    if (quantity < 0) {
      return actualQtd > 30;
    }
    return actualQtd < quantity;
  });

  const filteredQuantityPrice = combos
    .filter((combo) => {
      let actualQtd = Number(combo.quantity);
      if (quantity < 0) {
        return actualQtd > 30;
      }
      return actualQtd < quantity;
    })
    .filter((combo) => {
      if (price < 0) {
        return combo.price > 800;
      }
      if (combo.price > 800 && price > 0) {
        return false;
      }
      return combo.price <= price;
    });

  return (
    <>
      <Header />
      <Container>
        <div className="wrapper">
          <h1>Churrascos</h1>
          <header className="header__dashboard">
            <div className="header__filter">
              <select value={price} onChange={(e) => setPrice(e.target.value)}>
                <option>Preço</option>
                <option value={-1}>partir R$ 800</option>
                <option value={800}>até R$ 800</option>
                <option value={500}>até R$ 500</option>
                <option value={200}>até R$ 200</option>
              </select>

              <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              >
                <option>Quantidade</option>
                <option value={10}>até 10 pessoas</option>
                <option value={20}>até 20 pessoas</option>
                <option value={30}>até 30 pessoas</option>
                <option value={-1}>Partir de 30 ...</option>
              </select>
            </div>

            <div className="header__search">
              <MdSearch className="icon" />
              <input
                type="text"
                placeholder="Faça sua pesquisa..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
          </header>
          <Hr />
          <CardCombo
            filteredName={filteredName}
            filteredPrice={filteredPrice}
            filteredQuantity={filteredQuantity}
            filteredQuantityPrice={filteredQuantityPrice}
          />
        </div>
      </Container>
      <Footer />
    </>
  );
};
