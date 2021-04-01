import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Import.scss'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '300px',
        display:'flex',
        justifyContent: 'center',
      },
    },
  }),
);
function Input_title() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="filled-basic"  label="Titre" variant="filled"/>
      <TextField id="filled-basic" label="Commentaires" variant="filled"/>
    </form>
  );
}

export default Input_title;