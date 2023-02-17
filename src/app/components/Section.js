import React from "react";
import styles from "../styles/page.module.css";

const Section = ({ heading, title, description, bgColor }) => {
  return (
    <div
      className={styles.section}
      style={{ backgroundColor: bgColor || "white" }}
    >
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: ".8fr 1fr",
            gap: "4rem",
          }}
        >
          <div>
            <h3 className={styles.heading}>{heading}</h3>
            <h2 className={styles.title}>{title}</h2>
          </div>
          <div></div>
          <div></div>
          <div style={{ display: "flex", alignItems: "flex-end", flexDirection: "column" }}>
            {description}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Section;
