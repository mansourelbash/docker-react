import React, { createContext, useState } from 'react';

// Create a context and provide a default value
const MyContext = createContext('default value');

const MyContextProvider = ({ children }) => {
  const [value, setValue] = useState('initial value');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
