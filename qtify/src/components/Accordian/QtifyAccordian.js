import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React, { useState } from "react";
import AccordionExpandIcon from "./AccordionExpandIcon";
import styles from "./QtifyAccordian.module.css";
const QtifyAccordian = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={styles.faqContainer}>
      {/* FAQ */}
      <div className={styles.faq}>FAQ</div>

      {/* Accordian 1 */}
      <div className={styles.accordionContainer}>
        <Accordion
          style={{
            borderRadius: "10px",
          }}
          expanded={expanded === "panel1"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
        >
          <AccordionSummary
            style={{
              backgroundColor: "#121212",
              color: "#fff",
              borderRadius: "10px",
            }}
            id="panel1Header"
            aria-controls="panel1Content"
            expandIcon={<AccordionExpandIcon />}
          >
            <div className={styles.accordionSummaryText}>
              Is QTify free to use?
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className={styles.accordionContentText}>
              Yes! It is 100% free, and has 0% ads!
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      {/* Accordion 2 */}
      <div className={styles.accordionContainer}>
        <Accordion
          style={{
            borderRadius: "10px",
          }}
          expanded={expanded === "panel2"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
        >
          <AccordionSummary
            style={{
              backgroundColor: "#121212",
              color: "#fff",
              borderRadius: "10px",
            }}
            id="panel2Header"
            aria-controls="panel2Content"
            expandIcon={<AccordionExpandIcon />}
          >
            <div className={styles.accordionSummaryText}>
              Can I download and listen to songs offline?
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className={styles.accordionContentText}>
              Sorry, unfortunately we don't provide the service to download any
              songs.
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default QtifyAccordian;
