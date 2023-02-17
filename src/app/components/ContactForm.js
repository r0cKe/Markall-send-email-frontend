import axios from "axios";
import React, { useState } from "react";
import styles from "../styles/contact.module.css";
import InputComponent from "./InputComponent";

const ContactForm = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // ---------- Server endpoint ------------

  // For Development
  // const ENDPOINT = "http://localhost:3500";

  const ENDPOINT = "https://sendemail-backend.onrender.com";

  const debouncer = function (fn, d) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, d);
    };
  };

  // ---------- Handle input change-----------
  const handleChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    // console.log(value);
    setInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const debounceHandleChange = debouncer(handleChange, 500);

  // ------------ Handle Form Submit ---------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = JSON.stringify(info);

    const headers = {
      "content-type": "application/json",
    };

    const response = await axios.post(`${ENDPOINT}/sendemail`, data, {
      headers,
    });

    if (response.data.success) {
      alert(`Submitted successfully :)`);
    } else {
      if (response.data.reason === "error") {
        console.log(response.data.error);
        alert("Some error occured :(");
      } else {
        alert("Please fill all the ( * ) marked fields.");
      }
    }
  };

  return (
    <form className={styles.contactForm} method="post">
      <h1>Contact Now</h1>

      <p>
        In diam consequat nec eu. Eu sem nec vel, sollicitudin ipsum viverra sed
        nibh amet. Nunc, et pharetra, duis tortor dictum nisl, Id vestibulum
        tincidunt adipiscing gravida risus.
      </p>

      {/* --------- Input Container --------- */}

      <div>
        <InputComponent
          label="Name"
          type="text"
          required={true}
          name="name"
          handleChange={debounceHandleChange}
        />

        <InputComponent
          label="Email"
          type="email"
          required={true}
          name="email"
          handleChange={debounceHandleChange}
        />
        <InputComponent
          label="Phone"
          type="number"
          required={true}
          name="phone"
          handleChange={debounceHandleChange}
        />
        <InputComponent
          label="Message"
          type="text"
          name="message"
          handleChange={debounceHandleChange}
        />

        {/* ------ Submit Button------- */}
        <input
          type="submit"
          value="Submit Form"
          className={styles.submitBtn}
          onClick={(e) => handleSubmit(e)}
        />
      </div>
    </form>
  );
};

export default ContactForm;
