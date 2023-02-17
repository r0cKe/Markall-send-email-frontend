'use client';
import React, { useState } from "react";
import InputContext from "./InputContext";

export const InputState = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  return (
    <InputContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </InputContext.Provider>
  );
};

export default InputState;
