import React from "react";
import styles from "./FeedbackButton.module.css";

const FeedbackButton = (props) => {
  return (
    <div>
      <div className={styles.feedback}>
        <div>Give Feedback</div>
      </div>
    </div>
  );
};

export default FeedbackButton;
