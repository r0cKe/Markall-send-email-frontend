import React, { useContext } from "react";
import styles from "../styles/contact.module.css";
import InputContext from "./context/InputContext";

const InputComponent = ({
  label,
  type = "text",
  required = false,
  name,
  id = "",
}) => {
  const context = useContext(InputContext);
  const { userInfo, setUserInfo } = context;

  // ---------- Handle input change-----------
  const handleChange = (e) => {
    const value = e.target.value;
    setUserInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className={styles.input}>
      <label htmlFor="name" style={{ display: "none" }}>{`${label} ${
        required ? "*" : ""
      }`}</label>
      <input
        type={type}
        name={name}
        id={id !== "" ? id : name}
        placeholder={`${label} ${required ? "*" : ""}`}
        value={userInfo[name]}
        required={required}
        autoComplete="off"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default InputComponent;
