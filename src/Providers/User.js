import { createContext, useState } from 'react';

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState({
    id: 123,
    name: "Kenzinho da Silva",
    event: [{
      date: "06/11/2022",
      duration: 4,
      time: 11,
      combo: "123"
      
    }],
    address: "rua sete de setembro 1375",
    state: "Paraná",
    city: "Curitiba"
  }); 

  return (
    <UserContext.Provider
    value={{ user, setUser }}>
    {children}
    </UserContext.Provider>
  );
}
