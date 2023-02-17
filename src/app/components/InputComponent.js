import React from "react";
import styles from "../styles/contact.module.css";

const InputComponent = ({
  label,
  type = "text",
  required = false,
  name,
  handleChange,
}) => {
  return (
    <div className={styles.input}>
      <label htmlFor="name" style={{ display: "none" }}>{`${label} ${
        required ? "*" : ""
      }`}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={`${label} ${required ? "*" : ""}`}
        required={required}
        autoComplete="off"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default InputComponent;
