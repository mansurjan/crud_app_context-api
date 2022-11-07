import React, { createContext, useReducer } from "react";
import appReducer from "./AppReducer";
import { TYPE } from "./enums";

const initialState = {
  employees: [
    {
      id: "1",
      name: "Sammy",
      location: "DigitalOcean",
      designation: "Shark",
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addEmployee = (employee) => {
    dispatch({
      type: TYPE.ADD_EMPLOYEE,
      payload: employee,
    });
  };

  const editEmployee = (employee) => {
    dispatch({
      type: TYPE.EDIT_EMPLOYEE,
      payload: employee,
    });
  };

  const removeEmployee = (id) => {
    dispatch({
      type: TYPE.REMOVE_EMPLOYEE,
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        employees: state.employees,
        addEmployee,
        editEmployee,
        removeEmployee,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
