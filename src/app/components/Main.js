"use client";
import React from "react";

import styles from "../styles/page.module.css";
import MainContent from "./MainContent";
import Navbar from "./Navbar";

export const Main = () => {
  return (
    <div className={styles.main}>
      <Navbar
        logo="markall"
        linksArr={[
          { text: "services" },
          { text: "pricing" },
          { text: "about us" },
        ]}
        btn="get started"
      />
      <MainContent />
    </div>
  );
};
