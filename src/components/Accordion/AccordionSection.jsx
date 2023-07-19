import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import style from "./AccordionSection.module.css";
import React from "react";

const AccordionSection = () => {
  return (
    <div className={style.accordionWrapper}>
      <div className={style.AccordionSection}>
        <h1 className={style.heading}>FAQs</h1>
        <Accordion sx={{ border: "1px solid gray", borderRadius: "5px" }}>
          <AccordionSummary
            sx={{
              backgroundColor: "#121212",
              borderRadius: "5px",
              color: "white",
            }}
            expandIcon={<ExpandMoreIcon sx={{ color: "green" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ borderRadius: "5px" }}>
              Is QTify free to use?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>yes! it is 100% free, and has 0% ads!</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ border: "1px solid gray", borderRadius: "5px" }}>
          <AccordionSummary
            sx={{
              backgroundColor: "#121212",
              borderRadius: "5px",
              color: "white",
            }}
            expandIcon={<ExpandMoreIcon sx={{ color: "green" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Can i download and listen to songs Offnine?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Yes. You can.</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default AccordionSection;
