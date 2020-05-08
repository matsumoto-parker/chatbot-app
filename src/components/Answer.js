import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => (
  createStyles({
    'button': {
      borderColor: '#e73462',
      color: '#e73462',
      fontWeight: 600,
      marginBottom: '8px',
      '&:hover': {
        backgroundColor: '#e73462',
        color: '#fff',
      }
    }
  })
));

const Answer = (props) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="outlined"
      onClick={() => props.select(props.content, props.nextId)}
    >
      {props.content}
    </Button>
  );
};

export default Answer;
