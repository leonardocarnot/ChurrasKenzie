import { Container } from "./style";

function CardBbc() {
  return (
    <Container>
      <table className="combo-list">
        <thead>
          <tr>
            <th>Combo</th>
            <th>Preço</th>
            <th>Tempo</th>
            <th>Pessoas</th>
          </tr>
        </thead>
      </table>
    </Container>
  );
}

export default CardBbc;
