import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NoProfile from '../assets/img/black-bird.jpeg';
import Me from '../assets/img/white-bird.jpeg';

const Chat = (props) => {
  const isQuestion = props.type === 'question';
  const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';

  return (
    <ListItem className={classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="icon" src={Me} />
        ) : (
          <Avatar alt="icon" src={NoProfile} />
        )}
      </ListItemAvatar>
      <diV className="p-chat__bubble">{props.text}</diV>
    </ListItem>
  );
};

export default Chat;
