import React from "react";
import styles from "../styles/page.module.css";
import Link from "next/link";

const Navbar = ({ logo, linksArr, btn }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>{logo}</div>
      <ul className={styles.navLinks}>
        {linksArr.map((link) => {
          return (
            <li key={link} className={styles.navLink}>
              <Link href={link.href ? href : "/"} prefetch={false}>
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
      <Link
        href="/"
        prefetch={false}
        className={`${styles.gsbtn} ${styles.btn}`}
      >
        {btn}
      </Link>
    </div>
  );
};

export default Navbar;
