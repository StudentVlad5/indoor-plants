import React from 'react';
import { OurFriendsItem } from 'components/OurFriendsComp/OurFriendsItem/OurFriendsItem';
import { List } from './OurFriendsList.styled';
import PropTypes from 'prop-types';

export const OurFriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <OurFriendsItem friend={friend} key={friend._id} />
      ))}
    </List>
  );
};

OurFriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      addressUrl: PropTypes.string.isRequired,
      imageUrl: PropTypes.string,
      address: PropTypes.string,
      workDays: PropTypes.any,
      phone: PropTypes.string,
      email: PropTypes.string,
    }),
  ),
};
