"use client";
import React, { useState } from "react";
import styles from "../styles/automation.module.css";
import Image from "next/image";

const AutomationSection = ({
  title,
  description,
  imgSrc,
  bgColor,
  borderColor,
}) => {
  const [imageSize, setImageSize] = useState({ width: "528", height: "352" });
  return (
    <div
      className={styles.automationSection}
      style={{
        backgroundColor: bgColor || "#F1F1F1",
        border: `1px solid ${borderColor || "#EBEBEB"}`,
      }}
    >
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>
          Learn More{" "}
          <Image
            src="/assets/icons/right-arrow.svg"
            width="32"
            height="32"
            alt="right-arrow icon"
          />
        </span>
      </div>
      <div style={{ display: "flex" }}>
        <Image
          src={imgSrc}
          width={imageSize.width}
          height={imageSize.height}
          alt="image with person and robot"
        />
      </div>
    </div>
  );
};

export default AutomationSection;
