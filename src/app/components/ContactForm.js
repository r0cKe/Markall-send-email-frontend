import axios from "axios";
import React, { useContext, useState } from "react";
import styles from "../styles/contact.module.css";
import InputContext from "./context/InputContext";
import InputComponent from "./InputComponent";

const ContactForm = () => {
  // ----- Using context ------
  const context = useContext(InputContext);
  const { userInfo, setUserInfo } = context;

  // For Development
  // const ENDPOINT = "http://localhost:3500";

  // ------------ Handle Form Submit ---------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      userInfo.name === "" ||
      userInfo.email === "" ||
      userInfo.phone === ""
    ) {
      alert("Please fill all the ( * ) marked fields.");
      return;
    }

    const data = JSON.stringify(userInfo);

    const headers = {
      "content-type": "application/json",
    };

    // Post request to server
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/sendemail`,
      data,
      {
        headers,
      }
    );

    const { success } = response.data;

    if (success) {
      setUserInfo({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      alert(`Submitted successfully :)`);
    } else {
      console.log(response.data.error);
      alert("Some error occured :(");
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
        <InputComponent label="Name" type="text" required={true} name="name" />

        <InputComponent
          label="Email"
          type="email"
          required={true}
          name="email"
        />
        <InputComponent
          label="Phone"
          type="number"
          required={true}
          name="phone"
        />
        <InputComponent label="Message" type="text" name="message" />

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
