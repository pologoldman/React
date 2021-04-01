import React from "react";
import "./Niveau.scss";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Details_int from "./Details_int";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0px 1px 8px -1px rgba(0, 0, 0, 0.25)',
        margin: '20px',
        maxWidth: '300px',
        zIndex: '99',
    },
    control: {
      color: '#10AFC7',
    },
  }),
);

export  function Details() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.control}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='heading'>Détails</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Details_int/>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Details;