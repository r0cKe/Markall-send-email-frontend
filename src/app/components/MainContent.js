import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/page.module.css";

const MainContent = () => {
  const [imageSize, setImageSize] = useState({width: "578", height: "386"});
  return (
    <div className={styles.mainContent}>
      <div style={{ display: "flex", gap: "2rem", marginBottom: "20px" }}>
        <div>
          <h1>
            Reach your - <span>audience</span> & convert your leads
          </h1>
          <p>
            Get your coustomers with SEO, rank your business with email
            marketing, build sales leads
          </p>
        </div>
        <div className={styles.marketingImg}>
          <Image
            src="/assets/images/marketing.jfif"
            width={imageSize.width}
            height={imageSize.height}
            alt="Marketing imgage"
            priority={true}
          />
        </div>
      </div>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <Link href="#" className={`${styles.gsbtn} ${styles.btn}`}>
          get started
        </Link>
        <Link href="#" className={`${styles.wdbtn} ${styles.btn}`}>
          <i className="fa-solid fa-play"></i> watch demo
        </Link>
      </div>
    </div>
  );
};

export default MainContent;
