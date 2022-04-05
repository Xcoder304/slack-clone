import { createContext, useContext, useReducer } from "react";

const StatProvider = createContext();

const Context = ({ reducer, initailstate, children }) => {
  return (
    <StatProvider.Provider value={useReducer(reducer, initailstate)}>
      {children}
    </StatProvider.Provider>
  );
};

export const ContextVal = () => useContext(StatProvider);

export default Context;
