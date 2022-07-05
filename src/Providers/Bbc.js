import { createContext, useState } from 'react';

export const BbcContext = createContext([]);

export const BbcProvider = ({ children }) => {
	const [bbc, setBbc] = useState({
    id: 123,
    name: "Jorge da Picanha",
    events: [{
      date: "06/11/2022",
      duration: 4,
      time: 11,
      combo: "123"
    },
    {
      date: "06/11/2022",
      duration: 3,
      time: 19,
      combo: "123"
    }],
    combos: [{
      name:"Picanha do Jorge",
      price: 400.99,
      description: "Picanha top acompanhado de pão de alho da casa e asa de frango",
      quantity: 20
    }],
    address: "rua sete de setembro 1375",
    state: "Paraná",
    city: "Curitiba"
  }); 

  return (
    <BbcContext.Provider
    value={{ bbc, setBbc }}>
    {children}
    </BbcContext.Provider>
  );
}