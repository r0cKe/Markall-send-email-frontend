'use client';
import React from "react";
import styles from "../styles/contact.module.css";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const contactData = [
    { title: "Call us", description: "+91 93545 66860", icon: "phone" },
    {
      title: "Location",
      description: "Ghaziabad, Uttar Pradesh",
      icon: "map-marker",
    },
    { title: "Mail us", description: "info@markall.in", icon: "globe" },
  ];

  return (
    <div className={styles.contactSection}>
      <div className={styles.contactDetails}>
        <div className={styles.contactList}>
          {contactData.map((data) => {
            return (
              <div key={data.title} className={styles.contactItem}>
                <h2>
                  <i
                    className={`uil uil-${data.icon}`}
                    style={{ color: "#2F80ED" }}
                  ></i>
                  {data.title}
                </h2>
                <p>{data.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactSection;
