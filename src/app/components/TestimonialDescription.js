import React from "react";
import styles from "../styles/testimonialdesc.module.css";

const TestimonialDescription = () => {
  console.log(styles);
  return (
    <div className={styles.testimonialDescription}>
      <span>
        <i className="fa-solid fa-quote-left fa-4x"></i>
      </span>
      <h3>
        Lorem ipsum dolor sit amet consectetur. In praesent ac sit scelerisque
        lacus. Faucibus tincidunt commodo mi.
      </h3>
      <h2>Jane Doe</h2>
      <p>Product Specalist, Lorem Co.</p>
    </div>
  );
};

export default TestimonialDescription;
